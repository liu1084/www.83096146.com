/**
 * Created by CN40309-D-1 on 2016/1/7.
 */
$.fn.extend({
    modal: {
        open: function(){},
        close: function(){},
        destory: function(){}
    },
    template: {
        templateReplace: function(source, data, callback){
            var template = Handlebars.compile(source);
            var html = $(template(data)).html();
            $(this).html(html);
            callback && callback();
        },
        templateAppend: function(source, data, callback){
            var template = Handlebars.compile(source);
            var html = $(template(data)).html();
            $(this).append(html);
            callback && callback();
        }
    }
});