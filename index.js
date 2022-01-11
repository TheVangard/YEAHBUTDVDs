const emotes = [
//     "https://cdn.frankerfacez.com/emote/128054/2",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382758/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301311314/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/303614231/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1277941/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301842178/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301310595/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382720/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/307329314/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301310664/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300240740/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300667566/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/304507322/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300665431/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1478579/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1528453/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1571630/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382819/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300981482/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/305783629/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/2094638/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301311317/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1528404/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301311311/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1864936/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300701929/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300427824/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300702377/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/302306163/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301040809/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301223834/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1769771/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1769771/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301051957/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301376086/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301311315/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/302179201/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301597397/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1510524/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/1607134/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300482904/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300844589/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300844590/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300844592/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300844594/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382887/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/301038062/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382817/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382763/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/300382785/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_429cab7b744241b79ad4cccb078d7502/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4c5a4ddffd6c4f538a6bf2597f0a561a/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3e182fb55a86434bacb6ddb846b865fe/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3e182fb55a86434bacb6ddb846b865fe/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_219a232f87c840be88b2fbbe1e1afc8e/default/dark/2.0",
//     "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_83d56b104b034e21a134328b1e658655/default/dark/2.0",
    "https://cdn.frankerfacez.com/emote/309114/2",
    "",
    "",
    "",
   
    
    
];

(function ($, window, undefined) {
    $.fn.marqueeify = function (options) {
        var settings = $.extend({
            horizontal: true,
            vertical: true,
            speed: 100, // In pixels per second
            container: $(this).parent(),
            bumpEdge: function () { }
        }, options);

        return this.each(function () {
            var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
                $el = $(this);

            getSizes = function () {

                containerWidth = settings.container.outerWidth();
                containerHeight = settings.container.outerHeight();
                elWidth = $el.outerWidth();
                elHeight = $el.outerHeight();
            };

            move = {
                right: function () {
                    getSizes();
                    $el.animate({ left: (containerWidth - elWidth) }, {
                        duration: ((containerWidth / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.left();
                        }
                    });
                },
                left: function () {
                    getSizes();
                    $el.animate({ left: 0 }, {
                        duration: ((containerWidth / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.right();
                        }
                    });
                },
                down: function () {
                    getSizes();
                    $el.animate({ top: (containerHeight - elHeight) }, {
                        duration: ((containerHeight / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.up();
                        }
                    });
                },
                up: function () {
                    getSizes();
                    $el.animate({ top: 0 }, {
                        duration: ((containerHeight / settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
                            settings.bumpEdge();
                            move.down();
                        }
                    });
                }
            };

            getSizes();

            if (settings.horizontal) {
                move.right();
            }
            if (settings.vertical) {
                move.down();
            }

            // Make that shit responsive!
            $(window).resize(function () {
                getSizes();
            });
        });
    };
})(jQuery, window);

$(document).ready(function () {

    $('.marquee').marqueeify({
        speed: 150,
        bumpEdge: function () {
            $('img').attr('src', emotes[Math.floor(Math.random() * emotes.length)]);
        }
    });
});
