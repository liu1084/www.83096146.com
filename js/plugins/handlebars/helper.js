/**
 * Created by CN40309-D-1 on 2015/12/15.
 */
(function($, Handlebars){
    var Helper = function(){};
    Helper.prototype = {
        register: function(){
            Handlebars.registerHelper({
                iterateList: function(items, options){
                    var out = '<ul>';
                    for (var i = 0; i < items.length; i++){
                        var item = options.fn(items[i]);
                        out += '<li class="' + options.hash.class + '">' + item + '</li>';
                    }
                    out += '</ul>';
                    return new Handlebars.SafeString(out);
                },
                iterateSelect: function(items, options){
                    var out = '<select class="' + options.hash.class + '" name="' + options.hash.name + '">';
                    out += '<option value="">--Select--</option>';
                    for (var i = 0; i < items.length; i++){
                        var itemKey = items[i].key;
                        var itemValue = items[i].value;
                        var selected = items[i].selected;
                        if (selected && selected === true){
                            out += '<option value="' + itemKey + '" selected="selected">' + itemValue + '</option>';
                        }else{
                            out += '<option value="' + itemKey + '">' + itemValue + '</option>';
                        }
                    }
                    out += '</select>';
                    return new Handlebars.SafeString(out);
                },
                iterateListAndSelect: function(items, options){

                },
                compare: function(left, operator, right, options) {
                    if (arguments.length < 3) {
                        throw new Error('Handlebars Helper "compare" needs 2 parameters');
                    }

                    if (options === undefined) {
                        options = right;
                        right = operator;
                        operator = '===';
                    }

                    var operators = {
                        '==':     function(l, r) {return l == r; },
                        '===':    function(l, r) {return l === r; },
                        '!=':     function(l, r) {return l != r; },
                        '!==':    function(l, r) {return l !== r; },
                        '<':      function(l, r) {return l < r; },
                        '>':      function(l, r) {return l > r; },
                        '<=':     function(l, r) {return l <= r; },
                        '>=':     function(l, r) {return l >= r; },
                        'typeof': function(l, r) {return typeof l == r; }
                    };

                    if (!operators[operator]) {
                        throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
                    }

                    var result = operators[operator](left, right);

                    if (result) {
                        return options.fn(this);
                    } else {
                        return options.inverse(this);
                    }
                }
            });
        }
    };

    var helper = new Helper();
    helper.register();
})(jQuery, Handlebars);