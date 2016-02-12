(function (factory) {
    /* global define */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals: jQuery
        factory(window.jQuery);
    }
}(function ($){
    // template, editor
    var tmpl = $.summernote.renderer.getTemplate();
    // add plugin
    $.summernote.addPlugin({
        name: 'Media', // name of plugin
        buttons: { // buttons
            mediabundle: function () {
                return tmpl.iconButton('fa fa-picture-o', {
                    event: 'mediabundle',
                    title: 'Mediabundle',
                    hide: false
                });
            }
        },

        events: { // events
            mediabundle: function (event, editor, layoutInfo) {
                mediaBundleBrowser();
            }

        }
    });
}));
