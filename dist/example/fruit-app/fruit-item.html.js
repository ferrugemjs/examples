define(["exports", "incremental-dom", "ferrugemjs", "./fruit-item"], function(exports, _idom, _libfjs_mod_, _fruit_item) {
    var __fruit_item_tmp = Object.keys(_fruit_item)[0];
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .fruit-item{    width:20px;    height:30px;    float: left;   }   .fruit-item .fruit{    width:80px;    height:30px;    background-position:center top;    background-repeat:no-repeat;    float: left;   }   .fruit-item .type_0{    background-image:url(dist/example/fruit-app/assets/bananas.png);   }   .fruit-item .type_1{    background-image:url(dist/example/fruit-app/assets/grapes-bunch.png);   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488079904219_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488079904219_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488079904219_tmp.prototype.constructor = _clazz_sub_1488079904219_tmp;
        _clazz_sub_1488079904219_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "fruit-item"],
            "dinamic": "\"\""
        };
        _clazz_sub_1488079904219_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, [""], "class", ('fruit type_' + ($_this_$.type)));
            _idom.elementClose("div");
        }
        return _clazz_sub_1488079904219_tmp;
    })(_fruit_item[__fruit_item_tmp]);
});