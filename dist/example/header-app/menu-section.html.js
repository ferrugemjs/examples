define(["exports", "incremental-dom", "ferrugemjs", "./menu-section"], function(exports, _idom, _libfjs_mod_, _menu_section) {
    var __menu_section_tmp = Object.keys(_menu_section)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488079046643_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488079046643_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488079046643_tmp.prototype.constructor = _clazz_sub_1488079046643_tmp;
        _clazz_sub_1488079046643_tmp.prototype._$attrs$_ = {
            "name": "ul",
            "static": ["class", "tab-links"],
            "dinamic": "\"\""
        };
        _clazz_sub_1488079046643_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("li", null, [""], "class", (($_this_$.index == 0 ? 'selected' : '')));
            _idom.elementOpen("a", null, ["href", "/hello-world/ferrugemjs"], "onclick", ($_this_$.selectIndex.bind($_this_$, 0)));
            _idom.text("Hello World");
            _idom.elementClose("a");
            _idom.elementClose("li");
            _idom.elementOpen("li", null, [""], "class", (($_this_$.index == 1 ? 'selected' : '')));
            _idom.elementOpen("a", null, ["href", "/todo-app"], "onclick", ($_this_$.selectIndex.bind($_this_$, 1)));
            _idom.text("Todo App");
            _idom.elementClose("a");
            _idom.elementClose("li");
            _idom.elementOpen("li", null, [""], "class", (($_this_$.index == 2 ? 'selected' : '')));
            _idom.elementOpen("a", null, ["href", "/fruit-app"], "onclick", ($_this_$.selectIndex.bind($_this_$, 2)));
            _idom.text("Fruit App");
            _idom.elementClose("a");
            _idom.elementClose("li");
        }
        return _clazz_sub_1488079046643_tmp;
    })(_menu_section[__menu_section_tmp]);
});