define(["exports", "incremental-dom", "ferrugemjs", "./init-app", "ferrugemjs-router", "./header-app/header-section.html", "./todo-app/todo-list.html", "./hello-world/hello-world.html", "./fruit-app/fruit-app.html"], function(exports, _idom, _libfjs_mod_, _init_app, _rt, _header_section, _todo_app, _hello_world, _fruit_app) {
    var __init_app_tmp = Object.keys(_init_app)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488079046630_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488079046630_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488079046630_tmp.prototype.constructor = _clazz_sub_1488079046630_tmp;
        _clazz_sub_1488079046630_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_1488079046630_tmp.prototype.render = function($_this_$) {
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _header_section.default,
                    "tag": "div",
                    "alias": "header-section",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1488079046631",
                        "is": "header-section"
                    }
                });
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _rt.router_view,
                    "tag": "div",
                    "alias": "rt:router-view",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "style-name": "custumizado",
                        "key:id": "tmp_key_inst_custom_comp1488079046632",
                        "is": "rt:router-view"
                    }
                });
                _$_inst_$_.routes.push({
                    "path": "/hello-world/:name",
                    "viewModel": "apps/hello-world/hello-world"
                });
                _$_inst_$_.routes.push({
                    "path": "/todo-app",
                    "viewModel": "apps/todo-app/todo-list"
                });
                _$_inst_$_.routes.push({
                    "path": "/fruit-app",
                    "viewModel": "apps/fruit-app/fruit-app"
                });
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
        }
        return _clazz_sub_1488079046630_tmp;
    })(_init_app[__init_app_tmp]);
});