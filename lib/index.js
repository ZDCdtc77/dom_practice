/**
 * Created by zhangyilin on 2018/6/25.
 */
debugger;
var _jQuery=window.jQuery,
    _$ = window.$,
    jQuery = window.jQuery = window.$ = function(selector,context){
        alert("我是jQuery");
    }

jQuery.noConflict=function (deep) {
    debugger;
    window.$= _$;
    if(deep){
        window.jQuery = _jQuery;
    }

    return jQuery
}