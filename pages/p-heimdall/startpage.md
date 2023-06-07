---
permalink: "/start/"
#layout: heimdall/homepg
layout: heimdall/sdash
title: Start Page for Chrome

startconfig:
  -
    alt : "Github"
    icon : "fab fa-github"
    link : "https://github.com/kutyla-philipp"
  -
    alt : "Twitter"
    icon : "fab fa-twitter"
    link : "https://twitter.com/Kukielka_"
  -
    alt : "Docker Hub"
    icon : "fab fa-docker"
    link : "https://hub.docker.com/u/kukielka/"

anotherstart:
  unlock_pattern: space
  clock_format: H:i j/n/Y
  hover_color: "#999"
  time_to_refresh_bg: 20000
  idle_timer: 60000
  show_menu_on_page_load: false

  items:
  - alt: Facebook
    icon: facebook
    link: http://facebook.com
    new_tab: true

  - alt: Twitter
    icon: twitter
    link: http://twitter.com
    new_tab: true

  - alt: Trello
    icon: trello
    link: http://trello.com
    new_tab: true

  - alt: TTRSS
    icon: rss
    link: "{{cur}}/ttrss"

  - alt: phpMyAdmin
    icon: database
    link: "{{cur}}:3306/phpMyAdmin"

  - alt: Plex
    icon: film
    link: "{{cur}}:32400/web/"

  protected:
    custom_url: ''
    custom_url_selector: ''
    custom_url_headers: []
    unsplash_client_id: ''

---
