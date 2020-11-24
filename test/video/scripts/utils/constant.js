var CONSTANT = {
    ITEM: {
        loaded: false
    },
    ITEMS: [this.ITEM, this.ITEM, this.ITEM, this.ITEM],
    CATEGORY: {
        COLORS: 0,
        ALPHABETS: 1,
        NUMBERS: 2,
        RELATED_PLAY_LIST: 3
    },
    EFFECT_DELAY_TIME: 500,
    SCROLL_HEIGHT_OF_INDEX: 297, //269, //369, 265+28
    MEDIA_CONTROLLER_TIMEOUT: 3500,
    KEY_CODE: {
        RETURN: 10009,
        ESC: 27
    },
    PREPARED_DATA: {
        COLORS: [
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_0',
                name: 'RED color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/red.png'
                    }
                ],
                color: 'rgba(255, 0, 0, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_1',
                name: 'BLUE color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/blue.png'
                    }
                ],
                color: 'rgba(0, 0, 255, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_2',
                name: 'BROWN color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/brown.png'
                    }
                ],
                color: 'rgba(165, 42, 24, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_3',
                name: 'CITRUS color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/citrus.png'
                    }
                ],
                color: 'rgba(161, 197, 10, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_4',
                name: 'Deep Green color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/deepGreen.png'
                    }
                ],
                color: 'rgba(2, 89, 15, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_5',
                name: 'Dusk color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/dusk.png'
                    }
                ],
                color: 'rgba(78, 84, 129, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_6',
                name: 'Lime color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/lime.png'
                    }
                ],
                color: 'rgba(153, 255, 153, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_7',
                name: 'Maroon color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/maroon.png'
                    }
                ],
                color: 'rgba(101, 0, 33, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_8',
                name: 'Merlot color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/merlot.png'
                    }
                ],
                color: 'rgba(102, 0, 51, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_9',
                name: 'Mint color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/mint.png'
                    }
                ],
                color: 'rgba(159, 254, 176, .3)'
            },
            {
                description: 'Put the description of color here. Put the description of blue color here. Put the description of color here. Put the description of color here. Put the description of blue color here. Put the description of color here.',
                id: 'color_10',
                name: 'Mustard color',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/mustard.png'
                    }
                ],
                color: 'rgba(255, 204, 102, .3)'
            }
        ],
        ALPHABETS: [
            {
                description: 'This is alphabet description.',
                id: 'alphabet_0',
                name: 'Alphabet A',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_a.png'
                    }
                ],
                color: 'rgba(200, 191, 231, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_1',
                name: 'Alphabet B',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_b.png'
                    }
                ],
                color: 'rgba(200, 191, 231, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_2',
                name: 'Alphabet C',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_c.png'
                    }
                ],
                color: 'rgba(200, 191, 231, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_3',
                name: 'Alphabet D',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_d.png'
                    }
                ],
                color: 'rgba(78, 84, 129, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_4',
                name: 'Alphabet E',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_e.png'
                    }
                ],
                color: 'rgba(78, 84, 129, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_5',
                name: 'Alphabet F',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_f.png'
                    }
                ],
                color: 'rgba(78, 84, 129, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_6',
                name: 'Alphabet G',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_g.png'
                    }
                ],
                color: 'rgba(63, 72, 204, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_7',
                name: 'Alphabet H',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_h.png'
                    }
                ],
                color: 'rgba(63, 72, 204, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_8',
                name: 'Alphabet I',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_i.png'
                    }
                ],
                color: 'rgba(63, 72, 204, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_9',
                name: 'Alphabet J',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_j.png'
                    }
                ],
                color: 'rgba(2, 89, 15, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_10',
                name: 'Alphabet K',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_k.png'
                    }
                ],
                color: 'rgba(2, 89, 15, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_11',
                name: 'Alphabet L',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_l.png'
                    }
                ],
                color: 'rgba(2, 89, 15, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_12',
                name: 'Alphabet M',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_m.png'
                    }
                ],
                color: 'rgba(102, 0, 51, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_13',
                name: 'Alphabet N',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_n.png'
                    }
                ],
                color: 'rgba(102, 0, 51, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_14',
                name: 'Alphabet O',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_o.png'
                    }
                ],
                color: 'rgba(102, 0, 51, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_15',
                name: 'Alphabet P',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_p.png'
                    }
                ],
                color: 'rgba(101, 55, 0, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_16',
                name: 'Alphabet Q',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_q.png'
                    }
                ],
                color: 'rgba(101, 55, 0, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_17',
                name: 'Alphabet R',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_r.png'
                    }
                ],
                color: 'rgba(101, 55, 0, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_18',
                name: 'Alphabet S',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_s.png'
                    }
                ],
                color: 'rgba(136, 0, 21, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_19',
                name: 'Alphabet T',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_t.png'
                    }
                ],
                color: 'rgba(136, 0, 21, .3)'
            },
            {
                description: 'This is alphabet description.',
                id: 'alphabet_20',
                name: 'Alphabet U',
                photo_urls: [
                    {
                        size: '240x180',
                        url: 'images/alphabet_u.png'
                    }
                ],
                color: 'rgba(136, 0, 21, .3)'
            }
        ],
        NUMBERS: [
            {
                description: 'NUMBER Description',
                id: 'number_1',
                name: 'Number 1',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/1.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_2',
                name: 'Number 2',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/2.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_3',
                name: 'Number 3',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/3.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_4',
                name: 'Number 4',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/4.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_5',
                name: 'Number 5',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/5.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_6',
                name: 'Number 6',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/6.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_7',
                name: 'Number 7',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/7.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_8',
                name: 'Number 8',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/8.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_9',
                name: 'Number 9',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/9.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            },
            {
                description: 'NUMBER Description',
                id: 'number_10',
                name: 'Number 10',
                photo_urls: [
                    {
                        size: '268x268',
                        url: 'images/10.png'
                    }
                ],
                color: 'rgba(0, 162, 232, .3)'
            }
        ]
    }
};