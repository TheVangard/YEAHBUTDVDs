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
    "https://cdn.betterttv.net/emote/61ce2d4fc8cc7f36d52b110f/2x",
    "https://cdn.betterttv.net/emote/5efd70646a65270522157cae/2x",
    "https://cdn.betterttv.net/emote/6198b2f954f3344f88067f76/2x",
    "https://cdn.betterttv.net/emote/5e0e83320550d42106b892c8/2x",
    "https://cdn.betterttv.net/emote/6059546b7493072efdeb2c8f/2x",
    "https://cdn.betterttv.net/emote/603fd764306b602acc596589/2x",
    "https://cdn.betterttv.net/emote/60d874f48ed8b373e421a4e4/2x",
    "https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/2x",
    "https://cdn.betterttv.net/emote/603451b77c74605395f3295d/2x",
    "https://cdn.betterttv.net/emote/5f61c26968d9d86c020ea765/2x",
    "https://cdn.betterttv.net/emote/601814728a320865dcf4267d/2x",
    "https://cdn.betterttv.net/emote/5deaecf4515a2a77bc9e94ab/2x",
    "https://cdn.betterttv.net/emote/5eaa12a074046462f768344b/2x",
    "https://cdn.betterttv.net/emote/5fa8beae4dfba16440296e7a/2x",
    "https://cdn.betterttv.net/emote/6198b1b654f3344f88067f37/2x",
    "https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/2x",
    "https://cdn.betterttv.net/emote/6198a99954f3344f88067d35/2x",
    "https://cdn.betterttv.net/emote/6198b2c454f3344f88067f5b/2x",
    "https://cdn.betterttv.net/emote/5ff05a265ae5852e415491eb/2x",
    "https://cdn.betterttv.net/emote/55898e122612142e6aaa935b/2x",
    "https://cdn.betterttv.net/emote/6020f771fd98570374eb3ff3/2x",
    "https://cdn.betterttv.net/emote/6017c815f5d29f65e86e1e07/2x",
    "https://cdn.betterttv.net/emote/6017c9108a320865dcf422aa/2x",
    "https://cdn.betterttv.net/emote/6017c88ef4d51165fed99b72/2x",
    "https://cdn.betterttv.net/emote/6020f771fd98570374eb3ff3/2x",
    "https://cdn.betterttv.net/emote/6198a54a54f3344f88067c60/2x",
    "https://cdn.betterttv.net/emote/6198a4ae54f3344f88067c35/2x",
    "https://cdn.betterttv.net/emote/60b9fc49f8b3f62601c3856e/2x",
    "https://cdn.betterttv.net/emote/606230a6a407570b72f2779a/2x",
    "https://cdn.betterttv.net/emote/5f089b16a2ac620530367e28/2x",
    "https://cdn.betterttv.net/emote/5f4da0bee6f15f6bf457298c/2x",
    "https://cdn.betterttv.net/emote/5fa33e0b58e96102e92acce1/2x",
    "https://cdn.betterttv.net/emote/5de88ccef6e95977b50e6eb1/2x",
    "https://cdn.betterttv.net/emote/5f3f650bafb6965d6e7c3e68/2x",
    "https://cdn.betterttv.net/emote/6158c7dfb63cc97ee6d48054/2x",
    "https://cdn.betterttv.net/emote/55f1cc2b4bbea27f0a7cb210/2x",
    "https://cdn.betterttv.net/emote/5f43037db2efd65d77e8a88f/2x",
    "https://cdn.betterttv.net/emote/6066beb6a407570b72f298fd/2x",
    "https://cdn.betterttv.net/emote/5d61b1b14932b21d9c332f1b/2x",
    "https://cdn.betterttv.net/emote/6198a51954f3344f88067c4e/2x",
    "https://cdn.betterttv.net/emote/6198b1d854f3344f88067f40/2x",
    "https://cdn.betterttv.net/emote/60192b566c75a765d4646259/2x",
    "https://cdn.betterttv.net/emote/6198a68e54f3344f88067c90/2x",
    "https://cdn.betterttv.net/emote/6058acd5dfaae06e7d60c616/2x",
    "https://cdn.betterttv.net/emote/60a0ab7b67644f1d67e8707c/2x",
    "https://cdn.betterttv.net/emote/5eef1c6651e3910deed58686/2x",
    "https://cdn.betterttv.net/emote/5fba85d6c242076f1a051989/2x",
    "https://cdn.betterttv.net/emote/6017e691f1cfbf65dbe15033/2x",
    "https://cdn.betterttv.net/emote/5ad22a7096065b6c6bddf7f3/2x",
    "https://cdn.betterttv.net/emote/6198a53254f3344f88067c57/2x",
    "https://cdn.betterttv.net/emote/5f18a3f6713a61447489e973/2x",
    "https://cdn.betterttv.net/emote/6017c95fdf6a0665f275a16f/2x",
    "https://cdn.betterttv.net/emote/61daaa2d06fd6a9f5bdffc6d/2x",
    "https://cdn.betterttv.net/emote/6198af5254f3344f88067edb/2x",
    "https://cdn.frankerfacez.com/emote/308193/2",
    "https://cdn.frankerfacez.com/emote/239504/2",
    "https://cdn.frankerfacez.com/emote/162146/2",
    "https://cdn.frankerfacez.com/emote/613226/2",
    "https://cdn.frankerfacez.com/emote/652079/2",
    "https://cdn.frankerfacez.com/emote/444667/2",
    "https://cdn.frankerfacez.com/emote/536927/2",
    "https://cdn.frankerfacez.com/emote/145947/2",
    "https://cdn.frankerfacez.com/emote/585292/2",
    "https://cdn.frankerfacez.com/emote/420788/2",
    "https://cdn.frankerfacez.com/emote/131597/2",
    "https://cdn.frankerfacez.com/emote/229760/2",
    "https://cdn.frankerfacez.com/emote/236895/2",
    "https://cdn.frankerfacez.com/emote/218860/2",
    "https://cdn.frankerfacez.com/emote/145916/2",
    "https://cdn.frankerfacez.com/emote/229486/2",
    "https://cdn.frankerfacez.com/emote/139407/2",
    "https://cdn.frankerfacez.com/emote/510861/2",
    "https://cdn.frankerfacez.com/emote/214681/2",
    "https://cdn.frankerfacez.com/emote/418339/2",
    "https://cdn.frankerfacez.com/emote/410314/2",
    "https://cdn.frankerfacez.com/emote/128054/2",
    "https://cdn.frankerfacez.com/emote/546026/2",
    "https://cdn.frankerfacez.com/emote/518419/2",
    "https://cdn.frankerfacez.com/emote/264360/2",
    "https://cdn.frankerfacez.com/emote/337544/2",
    "https://cdn.frankerfacez.com/emote/244322/2",
    "https://cdn.frankerfacez.com/emote/228449/2",
    "https://cdn.frankerfacez.com/emote/230082/2",
    "https://cdn.frankerfacez.com/emote/264199/2",
    "https://cdn.frankerfacez.com/emote/291850/2",
    "https://cdn.frankerfacez.com/emote/267880/2",
    "https://cdn.frankerfacez.com/emote/243789/2",
    "https://cdn.frankerfacez.com/emote/295918/2",
    "https://cdn.frankerfacez.com/emote/263833/2",
    "https://cdn.frankerfacez.com/emote/335650/2",
    "https://cdn.frankerfacez.com/emote/210748/2",
    "https://cdn.frankerfacez.com/emote/507766/2",
    "https://cdn.frankerfacez.com/emote/425196/2",
    "https://cdn.frankerfacez.com/emote/475175/2",
    "https://cdn.frankerfacez.com/emote/269928/2",
    "https://cdn.frankerfacez.com/emote/47416/2",
    "https://cdn.frankerfacez.com/emote/425251/2",
    "https://cdn.frankerfacez.com/emote/457124/2",
    "https://cdn.frankerfacez.com/emote/309114/2",
    "https://cdn.frankerfacez.com/emote/270930/2",
    "https://cdn.frankerfacez.com/emote/337787/1",
    "https://cdn.frankerfacez.com/emote/303899/2",
    "https://cdn.frankerfacez.com/emote/613227/2",

   
    
    
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
