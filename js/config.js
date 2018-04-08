/**
 * [config modules]
 * xu.qiang 2018.4.8
 */
require.config({
	baseUrl: './js',
    paths: {
        'jquery': 'libs/jquery.min',
        'layer': 'libs/layer/layer',
        'markdown':'libs/markdown.min',
        'tomarkdown':'libs/to-markdown'
    },
    shim: {
        'layer': {
            deps: ['jquery'],
            exports: 'jQuery.fn.layer'
        }
    }
});
