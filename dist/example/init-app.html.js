define(["exports", "incremental-dom", "ferrugemjs", "./init-app", "./header-app/header-app.html", "./todo-app/todo-list.html", "./hello-world/hello-world.html", "./fruit-app/fruit-app.html"], function(exports, _idom, _libfjs_mod_, _init_app, _header_app, _todo_app, _hello_world, _fruit_app) {
    var __init_app_tmp = Object.keys(_init_app)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_1487649377098_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1487649377098_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1487649377098_tmp.prototype.constructor = _clazz_sub_1487649377098_tmp;
        _clazz_sub_1487649377098_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_1487649377098_tmp.prototype.render = function($_this_$) {
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _header_app.default,
                    "tag": "div",
                    "alias": "header-app",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1487649377099",
                        "is": "header-app"
                    }
                });
                _$_inst_$_.content(function() {});
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _hello_world.default,
                    "tag": "div",
                    "alias": "hello-world",
                    "target": "",
                    "hostVars": {
                        "name": ($_this_$.title)
                    },
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1487649377100",
                        "is": "hello-world"
                    }
                });
                _$_inst_$_.content(function() {});
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _todo_app.default,
                    "tag": "div",
                    "alias": "todo-app",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1487649377101",
                        "is": "todo-app"
                    }
                });
                _$_inst_$_.content(function() {});
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _fruit_app.default,
                    "tag": "div",
                    "alias": "fruit-app",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1487649377102",
                        "is": "fruit-app"
                    }
                });
                _$_inst_$_.content(function() {});
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
        }
        return _clazz_sub_1487649377098_tmp;
    })(_init_app[__init_app_tmp]);
});