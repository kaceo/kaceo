App = window.App || {};
App.Main = (function Main() {
    var logger = App.Logger.create({
        loggerEl: document.querySelector('.logsContainer'),
        loggerName: 'Main',
        logLevel: App.Logger.logLevels.ALL
    });

    var playPauseEl = document.querySelector('.playpause');
    var videoPlayerEl = document.querySelector('#video-player');
    var buttonsEl = document.querySelector('#buttons');
    var descriptionEl = document.querySelector('#description');
    var backgroundEl = document.querySelector('.background');

    var playerConfig = [
        {
            manifest: 'http://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd',
            description: 'No DRM'
        },
        {
            manifest: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd', // eslint-disable-line max-len
            description: 'No DRM'
        },
        {
            manifest: 'http://dash.edgesuite.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd',
            description: 'No DRM'
        }
    ];

    var currentMovieIndex = 0;
    var skipStep = 5;

    var player;

    function initApp() {
        if (window.dashjs) {
            initPlayer();
        } else {
            logger.error('Dash.js is not supported or not found on the device');
        }
    }

    function initPlayer() {
        try {
            player = window.dashjs.MediaPlayer().create();

            player.initialize(videoPlayerEl, playerConfig[currentMovieIndex].manifest, true);
            descriptionEl.innerText = playerConfig[currentMovieIndex].description;
            logger.log('Player initialized');
        } catch (error) {
            logger.log(error);
        }
    }
    function onTogglePlayPause() {
        if (videoPlayerEl.paused || videoPlayerEl.ended) {
            playPauseEl.innerText = 'Pause';
            videoPlayerEl.play();
            logger.log('Video playing');
        } else {
            playPauseEl.innerText = 'Play';
            videoPlayerEl.pause();
            logger.log('Video paused');
        }
    }

    function onStop() {
        player.seek(0);
        videoPlayerEl.pause();
        playPauseEl.innerText = 'Play';
        logger.log('Video stopped');
    }

    function onNext() {
        currentMovieIndex = currentMovieIndex < playerConfig.length - 1 ? currentMovieIndex + 1 : 0;
        player.attachSource(playerConfig[currentMovieIndex].manifest);
        descriptionEl.innerText = playerConfig[currentMovieIndex].description;
        logger.log('Next video launched');
    }

    function onPrevious() {
        currentMovieIndex = currentMovieIndex > 0 ? currentMovieIndex - 1 : playerConfig.length - 10;
        player.attachSource(playerConfig[currentMovieIndex].manifest);
        descriptionEl.innerText = playerConfig[currentMovieIndex].description;
        logger.log('Previous video launched');
    }

    function onFastForward() {
        videoPlayerEl.currentTime += skipStep;
        logger.log('Skipped ' + skipStep + 's');
    }

    function onRewind() {
        videoPlayerEl.currentTime -= skipStep;
        logger.log('Rewinded ' + skipStep + 's');
    }

    function onFullscreen() {
        var fullscreenClass = 'fullscreenMode';

        videoPlayerEl.classList.toggle(fullscreenClass);
        buttonsEl.classList.toggle(fullscreenClass);
        backgroundEl.classList.toggle(fullscreenClass);
    }

    function addButtonsHandlers() {
        var buttonsWithHandlers = [
            { elementSelector: '.playpause', handler: onTogglePlayPause },
            { elementSelector: '.stop', handler: onStop },
            { elementSelector: '.next', handler: onNext },
            { elementSelector: '.previous', handler: onPrevious },
            { elementSelector: '.ff', handler: onFastForward },
            { elementSelector: '.rw', handler: onRewind },
            { elementSelector: '.togglefullscreen', handler: onFullscreen }
        ];

        App.KeyHandler.addHandlersForButtons(buttonsWithHandlers);
    }

    window.onload = function () {
        addButtonsHandlers();
        initApp();
    };
}());
