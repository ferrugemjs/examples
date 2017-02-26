define(["exports", "incremental-dom", "ferrugemjs", "./router-section"], function(exports, _idom, _libfjs_mod_, _router_section) {
    var __router_section_tmp = Object.keys(_router_section)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488057247000_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488057247000_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488057247000_tmp.prototype.constructor = _clazz_sub_1488057247000_tmp;
        _clazz_sub_1488057247000_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"class\",($_this_$.styleName)"
        };
        _clazz_sub_1488057247000_tmp.prototype.render = function($_this_$) {
            if ($_this_$.route) {
                _idom.elementOpen("compose-view", "" + ('_uid_route_' + $_this_$.uid) + "", ["is", "compose-view"], "id", ('_uid_route_' + $_this_$.uid), "prop:values", ($_this_$.route.params));
                _idom.elementClose("compose-view");
                _libfjs_mod_.default.compose("" + ($_this_$.route.viewModel) + "", "" + ('_uid_route_' + $_this_$.uid) + "", {
                    "id": ('_uid_route_' + $_this_$.uid),
                    "prop:values": ($_this_$.route.params)
                }, {
                    "is": "compose-view"
                }, function() {});
            };
        }
        return _clazz_sub_1488057247000_tmp;
    })(_router_section[__router_section_tmp]);
});