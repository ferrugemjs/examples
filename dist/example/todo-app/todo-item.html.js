define(["exports", "incremental-dom", "ferrugemjs", "./todo-item"], function(exports, _idom, _libfjs_mod_, _todo_item) {
    var __todo_item_tmp = Object.keys(_todo_item)[0];
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .todo-item .is-done span.desc{    text-decoration:line-through;   }   .todo-item .mark-action{    width: 28px;    float: left;   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1487649377114_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1487649377114_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1487649377114_tmp.prototype.constructor = _clazz_sub_1487649377114_tmp;
        _clazz_sub_1487649377114_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "todo-item"],
            "dinamic": "\"\""
        };
        _clazz_sub_1487649377114_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("p", null, [""], "class", (($_this_$.done ? 'is-done' : '')));
            _idom.elementOpen("span", null, ["class", "mark-action"], "onclick", ($_this_$.MarkAsDone.bind($_this_$)));
            _idom.text("[" + (($_this_$.done ? 'x' : ' ')) + "]");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, ["class", "desc"], "title", ('item:' + $_this_$.id + '-' + $_this_$.desc));
            _idom.text("" + ($_this_$.desc) + "");
            _idom.elementClose("span");
            _idom.elementClose("p");
        }
        return _clazz_sub_1487649377114_tmp;
    })(_todo_item[__todo_item_tmp]);
});