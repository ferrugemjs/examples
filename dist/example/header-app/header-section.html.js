define(["exports", "incremental-dom", "ferrugemjs", "./menu-section.html"], function(exports, _idom, _libfjs_mod_, _menu_section) {
    var __mod__1488079046639_tmp = "_tmp_constructor_no_view__mod__1488079046639";
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .header-section{    width:100%;    height:auto;       float: left;    color: #ddd;    background-color:#222;    background-image:url("dist/example/commons/assets/bg-1.png");   }   .header-section .header-support{    padding-top:5px;    width:100%;    height:100%;    background-image:url("dist/example/commons/assets/transparency-bg.png");    background-repeat:repeat-x;     background-position:top center;     float: left;    }   .header-section .img-fjs{    width:35px;    margin:10px 10px 10px 10px;    float:left;   }   .header-section .header-support .title{    float: left;    font-size:20px;   }   .header-section .header-support .sub-description{    float: left;    width:100%;   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488079046640_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488079046640_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488079046640_tmp.prototype.constructor = _clazz_sub_1488079046640_tmp;
        _clazz_sub_1488079046640_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "header-section"],
            "dinamic": "\"\""
        };
        _clazz_sub_1488079046640_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "header-support"], "");
            _idom.elementOpen("img", null, ["class", "img-fjs", "src", "https://github.com/ferrugemjs/library/raw/master/assets/img/new-logo2_98x129.png"], "");
            _idom.elementClose("img");
            _idom.elementOpen("div", null, ["style", "float:left;margin-top:10px"], "");
            _idom.elementOpen("span", null, ["class", "title"], "");
            _idom.text("FerrugemJS");
            _idom.elementClose("span");
            _idom.elementOpen("span", null, ["class", "sub-description"], "");
            _idom.text("Examples using ferrugemjs");
            _idom.elementClose("span");
            _idom.elementClose("div");
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _menu_section.default,
                    "tag": "div",
                    "alias": "menu-section",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comp1488079046641",
                        "is": "menu-section"
                    }
                });
                _libfjs_mod_.default.reDraw.call(_$_inst_$_);
            })();
            _idom.elementClose("div");
        }
        return _clazz_sub_1488079046640_tmp;
    })(function() {});
});