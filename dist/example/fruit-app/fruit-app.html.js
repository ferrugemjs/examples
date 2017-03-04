define(["exports", "incremental-dom", "ferrugemjs", "./fruit-app", "./fruit-store", "./fruit-item.html", "../commons/assets/commons-style.css!"], function(exports, _idom, _libfjs_mod_, _fruit_app, fruitStore, _fruit_item) {
    var __fruit_app_tmp = Object.keys(_fruit_app)[0];
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .fruit-app{    }   .fruit-app .fruits{    width: 420px;    margin-top:20px;    float: left;   }   .fruit-app .fruit-basket{    width:420px;    text-align: center;    height:69px;    margin-top:180px;    margin-bottom:20px;    background-image:url(dist/example/fruit-app/assets/fruit-basket.png);    background-position:center top;    background-repeat:no-repeat;    overflow:hidden;   }    .fruit-app .fruit-basket .fruit-item{    margin-bottom:129px;   }   .fruit-app .actions{    width:420px;   }   .fruit-app .actions .mark-action{    margin-right:5px;   }   .fruit-app .fruits img{    cursor: move;   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488608205456_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488608205456_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488608205456_tmp.prototype.constructor = _clazz_sub_1488608205456_tmp;
        _clazz_sub_1488608205456_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_1488608205456_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "fruit-app example-basic-box"], "");
            _idom.elementOpen("h1", null, ["class", "title"], "");
            _idom.text("Fruit App");
            _idom.elementClose("h1");
            _idom.elementOpen("div", null, ["class", "example-basic-box-body"], "");
            _idom.elementOpen("div", null, ["class", "fruits"], "");
            _idom.elementOpen("img", null, ["draggable", "true", "data-type", "0", "style", "float:left", "src", "dist/example/fruit-app/assets/bananas.png"], "ondragstart", ($_this_$.drag.bind($_this_$, 0)), "onclick", ($_this_$.addFruit.bind($_this_$, 0)));
            _idom.elementClose("img");
            _idom.elementOpen("img", null, ["draggable", "true", "data-type", "1", "style", "float:right", "src", "dist/example/fruit-app/assets/grapes-bunch.png"], "ondragstart", ($_this_$.drag.bind($_this_$, 1)), "onclick", ($_this_$.addFruit.bind($_this_$, 1)));
            _idom.elementClose("img");
            _idom.elementClose("div");
            _idom.elementOpen("div", null, ["class", "fruit-basket"], "ondragover", ($_this_$.allowDrop.bind($_this_$)), "ondrop", ($_this_$.drop.bind($_this_$)));
            $_this_$.fruits.forEach(function(fruit, $indx) {
                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _fruit_item.default,
                        "tag": "div",
                        "alias": "fruit-item",
                        "target": "",
                        "hostVars": {
                            "key:id": ('fruit_' + fruit.id),
                            "id": (fruit.id),
                            "desc": (fruit.desc),
                            "type": (fruit.type)
                        },
                        "staticVars": {
                            "is": "fruit-item"
                        }
                    });
                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);
                })();
            });
            _idom.elementClose("div");
            _idom.elementOpen("div", null, ["class", "actions"], "onclick", (fruitStore.default.clear.bind(fruitStore.default)));
            _idom.elementOpen("span", null, ["class", "mark-action"], "");
            _idom.text("[-]");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, ["class", "desc"], "");
            _idom.text("clear");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, ["style", "float:right"], "");
            _idom.text("Fruit count:" + ($_this_$.fruits.length) + "");
            _idom.elementClose("span");
            _idom.elementClose("div");
            _idom.elementClose("div");
            _idom.elementOpen("div", null, ["class", "list-concepts"], "");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("Concepts");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ drag and drop.");
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
            _idom.text("✔ one way data binding.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ import a sub-element.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ working with store.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ event emitter.");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, [""], "");
            _idom.text("✔ import other library/script.");
            _idom.elementClose("span");
            _idom.elementClose("div");
            _idom.elementClose("div");
        }
        return _clazz_sub_1488608205456_tmp;
    })(_fruit_app[__fruit_app_tmp]);
});