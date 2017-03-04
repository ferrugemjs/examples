define(["exports", "incremental-dom", "ferrugemjs", "./hello-world", "../commons/assets/commons-style.css!"], function(exports, _idom, _libfjs_mod_, _hello_world) {
    var __hello_world_tmp = Object.keys(_hello_world)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488608205467_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488608205467_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488608205467_tmp.prototype.constructor = _clazz_sub_1488608205467_tmp;
        _clazz_sub_1488608205467_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_1488608205467_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "example-basic-box"], "");
            _idom.elementOpen("h1", null, ["class", "title"], "");
            _idom.text("Hello World");
            _idom.elementClose("h1");
            _idom.elementOpen("div", null, ["class", "example-basic-box-body"], "");
            _idom.elementOpen("p", null, [""], "");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("Hello World, " + ($_this_$.name) + " !");
            _idom.elementClose("span");
            _idom.elementClose("p");
            _idom.elementOpen("p", null, [""], "");
            _idom.elementOpen("input", null, ["class", "simple", "type", "text", "placeholder", "...new name"], "onkeyup", (function($evt) {
                $_this_$.name = $evt.target.value;
                $_this_$.refresh()
            }));
            _idom.elementClose("input");
            _idom.elementClose("p");
            _idom.elementClose("div");
            _idom.elementOpen("div", null, ["class", "list-concepts"], "");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("Concepts");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ one way data binding.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ event binding.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ import a css file.");
            _idom.elementClose("span");
            _idom.elementClose("div");
            _idom.elementClose("div");
        }
        return _clazz_sub_1488608205467_tmp;
    })(_hello_world[__hello_world_tmp]);
});