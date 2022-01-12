const emotes = [
    "https://cdn.frankerfacez.com/emote/128054/2",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382758/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301311314/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/303614231/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1277941/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301842178/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301310595/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382720/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/307329314/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301310664/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300240740/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300667566/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/304507322/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300665431/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1478579/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1528453/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1571630/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382819/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300981482/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/305783629/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/2094638/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301311317/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1528404/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301311311/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1864936/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300701929/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300427824/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300702377/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/302306163/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301040809/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301223834/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1769771/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1769771/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301051957/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301376086/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301311315/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/302179201/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301597397/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1510524/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/1607134/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300482904/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300844589/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300844590/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300844592/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300844594/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382887/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/301038062/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382817/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382763/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/300382785/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_429cab7b744241b79ad4cccb078d7502/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4c5a4ddffd6c4f538a6bf2597f0a561a/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3e182fb55a86434bacb6ddb846b865fe/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3e182fb55a86434bacb6ddb846b865fe/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_219a232f87c840be88b2fbbe1e1afc8e/default/dark/2.0",
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_83d56b104b034e21a134328b1e658655/default/dark/2.0",
    "https://cdn.frankerfacez.com/emote/309114/2",
    "https://cdn.betterttv.net/emote/5e9d8af27e090362f8b0ce95/2x",
    "https://cdn.betterttv.net/emote/6038f20e7c74605395f34a46/2x",
    "https://cdn.betterttv.net/emote/6038f1b57c74605395f34a43/2x",
    "https://cdn.betterttv.net/emote/6151c623b63cc97ee6d39040/2x",
    "https://cdn.betterttv.net/emote/601d2a96df6a0665f275ffb1/2x",
    "https://cdn.betterttv.net/emote/5c447084f13c030e98f74f58/2x",
    "https://cdn.betterttv.net/emote/6198ab2754f3344f88067dcf/2x",
    "https://cdn.betterttv.net/emote/5ada077451d4120ea3918426/2x",
    "https://cdn.betterttv.net/emote/5f7923382bd46e4a86b0b314/2x",
    "https://cdn.betterttv.net/emote/5ecc80abfdee545e30654512/2x",
    "https://cdn.betterttv.net/emote/6198a6cb54f3344f88067c99/2x",
    "https://cdn.betterttv.net/emote/6198aa7154f3344f88067d7f/2x",
    "https://cdn.betterttv.net/emote/6017c9ebf5d29f65e86e1e24/2x",
    "https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/2x",
    "https://cdn.betterttv.net/emote/5eee2f6779645a0dec34b4d5/2x",
    "https://cdn.betterttv.net/emote/6017cb6b8a320865dcf422cd/2x",
    "https://cdn.betterttv.net/emote/6198ad7854f3344f88067e65/2x",
    "https://cdn.betterttv.net/emote/609e9b2967644f1d67e860a5/2x",
    "https://cdn.betterttv.net/emote/5cc0f81c9bf845390d1c037e/2x",
    "https://cdn.betterttv.net/emote/5f56a0123769246c03214641/2x",
    "https://cdn.betterttv.net/emote/6198aa9654f3344f88067d91/2x",
    "https://cdn.betterttv.net/emote/6017f9744e3ab965ef76484f/2x",
    "https://cdn.betterttv.net/emote/601813286c75a765d4644ca9/2x",
    "https://cdn.betterttv.net/emote/60238d29a24f6217857e95cf/2x",
    "https://cdn.betterttv.net/emote/6198a90254f3344f88067d0d/2x",
    "https://cdn.betterttv.net/emote/5e2eaabeb1d0ac51e8ece290/2x",
    "https://cdn.betterttv.net/emote/5f46c0183212445d6fb511d7/2x",
    "https://cdn.betterttv.net/emote/61d9951106fd6a9f5bdfdef7/2x",
    "https://cdn.betterttv.net/emote/5f15b4cb713a61447489bd2c/2x",
    "https://cdn.betterttv.net/emote/5f99e30d6f583802e389f7b8/2x",
    "https://cdn.betterttv.net/emote/5e42e43ad736527d5cd2c616/2x",
    "https://cdn.betterttv.net/emote/6198ac8654f3344f88067e2b/2x",
    "https://cdn.betterttv.net/emote/607ee5f939b5010444d02dd4/2x",
    "https://cdn.betterttv.net/emote/5c278da0431ef47de22582c5/2x",
    "https://cdn.betterttv.net/emote/601a7d4d82cf6865d553bb17/2x",
    "https://cdn.betterttv.net/emote/601a7e23f1cfbf65dbe17e7b/2x",
    "https://cdn.betterttv.net/emote/5e0fe1e1b9741121047ff92e/2x",
    "https://cdn.betterttv.net/emote/61a162d8b50549e7e5010ebc/2x",
    "https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/2x",
    "https://cdn.betterttv.net/emote/6198aee354f3344f88067ec4/2x",
    "https://cdn.betterttv.net/emote/6198b3c954f3344f88067fb1/2x",
    "https://cdn.betterttv.net/emote/5f108bc76bd7f3052a0cfc5c/2x",
    "https://cdn.betterttv.net/emote/5f0cbcff6a652705221640dc/2x",
    "https://cdn.betterttv.net/emote/55e2096ea6fa8b261f81b12a/2x",
    "https://cdn.betterttv.net/emote/6198a8dc54f3344f88067cff/2x",
    "https://cdn.betterttv.net/emote/59143b496996b360ff9b807c/2x",
    "https://cdn.betterttv.net/emote/58868aa5afc2ff756c3f495e/2x",
    "https://cdn.betterttv.net/emote/609431bc39b5010444d0cbdc/2x",
    "https://cdn.betterttv.net/emote/5f833d19e016be4a882f948f/2x",
    "https://cdn.betterttv.net/emote/6198ac2f54f3344f88067dfc/2x",
    "https://cdn.betterttv.net/emote/5fd8782da02cf1347ff99af6/2x",
    "https://cdn.betterttv.net/emote/5fd8782da02cf1347ff99af6/2x",
    "https://cdn.betterttv.net/emote/6198b14354f3344f88067f2e/2x",
    "https://cdn.betterttv.net/emote/5b6ded5560d17f4657e1319e/2x",
    "https://cdn.betterttv.net/emote/5b35ca08392c604c5fd81874/2x",
    "https://cdn.betterttv.net/emote/5b220a44d4fa7c69415f38e7/2x",
    "https://cdn.betterttv.net/emote/5f7e99c6ccde1f4a870c66bd/2x",
    "https://cdn.betterttv.net/emote/61d4dce106fd6a9f5bdf5fd5/2x",
    "https://cdn.betterttv.net/emote/61636db5b63cc97ee6d5b630/2x",
    "https://cdn.betterttv.net/emote/56c2cff2d9ec6bf744247bf1/2x",
    "https://cdn.betterttv.net/emote/6198aade54f3344f88067db2/2x",
    "https://cdn.betterttv.net/emote/5fa939a9f32aa26441c83a70/2x",
    "https://cdn.betterttv.net/emote/6149708bb63cc97ee6d2943f/2x",
    "https://cdn.betterttv.net/emote/5fedaad53edf1a2e56b77318/2x",
    "https://cdn.betterttv.net/emote/5fedd1dc9d7d952e4059e504/2x",
    "https://cdn.betterttv.net/emote/6198ad0654f3344f88067e4c/2x",
    "https://cdn.betterttv.net/emote/5b4ad85785259b1f8ffec32f/2x",
    "https://cdn.betterttv.net/emote/5b4ad80a85259b1f8ffec32b/2x",
    "https://cdn.betterttv.net/emote/610e5a4576ea4e2b9f75d69c/2x",
    "https://cdn.betterttv.net/emote/61b07d7a002cdeedc21eb069/2x",
    "https://cdn.betterttv.net/emote/617fb2041f8ff7628e6be022/2x",
    "https://cdn.betterttv.net/emote/6029b2ac82b7c45eb1c94787/2x",
    "",
    "",
    "",
    "",
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
