define(["exports", "incremental-dom", "ferrugemjs", "./todo-list", "./todo-item.html", "../commons/assets/commons-style.css!"], function(exports, _idom, _libfjs_mod_, _todo_list, _todo_item) {
    var __todo_list_tmp = Object.keys(_todo_list)[0];
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .todo-list .item-area{    min-height:20px;   }   .todo-list a{    color:#fff;   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488608205471_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488608205471_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488608205471_tmp.prototype.constructor = _clazz_sub_1488608205471_tmp;
        _clazz_sub_1488608205471_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_1488608205471_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "todo-list example-basic-box"], "");
            _idom.elementOpen("h1", null, ["class", "title"], "");
            _idom.text("Todo App");
            _idom.elementClose("h1");
            _idom.elementOpen("div", null, ["class", "example-basic-box-body"], "");
            _idom.elementOpen("input", null, ["class", "simple", "type", "text", "placeholder", "...do a task!"], "value", (new String('')), "onkeypress", ($_this_$.add.bind($_this_$)));
            _idom.elementClose("input");
            _idom.elementOpen("div", null, ["class", "item-area"], "");
            $_this_$.itens.forEach(function(item, $key_tmp_1488608205472) {
                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _todo_item.default,
                        "tag": "div",
                        "alias": "todo-item",
                        "target": "",
                        "hostVars": {
                            "key:id": ('todo_item_' + item.id),
                            "id": (item.id),
                            "desc": (item.desc),
                            "done": (item.done),
                            "on-marked.subscribe": ($_this_$.mark.bind($_this_$))
                        },
                        "staticVars": {
                            "is": "todo-item"
                        }
                    });
                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);
                })();
            });
            _idom.elementClose("div");
            _idom.elementOpen("p", null, [""], "");
            _idom.elementOpen("span", null, [""], "onclick", ($_this_$.markAll.bind($_this_$, true)));
            _idom.text("[x] mark all " + ($_this_$.itens.length) + " as done!");
            _idom.elementClose("span");
            _idom.elementClose("p");
            _idom.elementOpen("p", null, [""], "");
            _idom.elementOpen("span", null, [""], "onclick", ($_this_$.archiveAllDone.bind($_this_$)));
            _idom.text("[-] archive all done!");
            _idom.elementClose("span");
            _idom.elementClose("p");
            _idom.elementClose("div");
            _idom.elementOpen("div", null, ["class", "list-concepts"], "");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("Concepts");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ change the css className.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ import a css file.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ embed style.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ trigger a DOM method.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ import a sub-element.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ subscribe a sub-element event.");
            _idom.elementClose("span");
            _idom.elementClose("div");
            _idom.elementClose("div");
        }
        return _clazz_sub_1488608205471_tmp;
    })(_todo_list[__todo_list_tmp]);
});