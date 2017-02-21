define(["exports", "incremental-dom", "ferrugemjs"], function(exports, _idom, _libfjs_mod_) {
    var __mod__1487649377109_tmp = "_tmp_constructor_no_view__mod__1487649377109";
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .header-app{    width:100%;    height:170px;       float: left;    text-align: center;    color: #4a4922;       margin-bottom: 25px;    border-bottom: 8px solid #4a4922;    background-color:#e6e63e;    background-image:url("dist/example/commons/assets/bg-1.png");   }   .header-app .header-support{    padding-top:5px;    width:100%;    height:100%;    background-image:url("dist/example/commons/assets/transparency-bg.png");    background-repeat:repeat-x;     background-position:top center;     }   .header-app .img-fjs{    width:120px;    margin: 0px auto;    display: block;    margin-bottom: -80px;    background-color:#f2f2f2;    border:8px solid #4a4922;    border-radius:50%;    }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1487649377110_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1487649377110_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1487649377110_tmp.prototype.constructor = _clazz_sub_1487649377110_tmp;
        _clazz_sub_1487649377110_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "header-app"],
            "dinamic": "\"\""
        };
        _clazz_sub_1487649377110_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "header-support"], "");
            _idom.elementOpen("h1", null, [""], "");
            _idom.text("FerrugemJS");
            _idom.elementClose("h1");
            _idom.elementOpen("p", null, [""], "");
            _idom.elementOpen("strong", null, [""], "");
            _idom.text("Examples");
            _idom.elementClose("strong");
            _idom.elementClose("p");
            _idom.elementOpen("img", null, ["class", "img-fjs", "src", "dist/example/header-app/assets/ferrugemjs-logo.png"], "");
            _idom.elementClose("img");
            _idom.elementClose("div");
        }
        return _clazz_sub_1487649377110_tmp;
    })(function() {});
});