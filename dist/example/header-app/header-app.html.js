define(["exports", "incremental-dom", "ferrugemjs"], function(exports, _idom, _libfjs_mod_) {
    var __mod__1488064200691_tmp = "_tmp_constructor_no_view__mod__1488064200691";
    var tmp_style = document.createElement('style');
    tmp_style.type = 'text/css';
    tmp_style.innerHTML = '   .header-app{    width:100%;    height:auto;       float: left;    color: #ddd;    background-color:#222;    background-image:url("dist/example/commons/assets/bg-1.png");   }   .header-app .header-support{    padding-top:5px;    width:100%;    height:100%;    background-image:url("dist/example/commons/assets/transparency-bg.png");    background-repeat:repeat-x;     background-position:top center;     float: left;    }   .header-app .img-fjs{    width:35px;    margin:10px 10px 10px 10px;    float:left;   }   .header-app .header-support .title{    float: left;    font-size:20px;   }   .header-app .header-support .sub-description{    float: left;    width:100%;   }  ';
    document.getElementsByTagName('head')[0].appendChild(tmp_style);
    exports.default = (function(super_clazz) {
        function _clazz_sub_1488064200692_tmp() {
            super_clazz.call(this);
        }
        _clazz_sub_1488064200692_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_1488064200692_tmp.prototype.constructor = _clazz_sub_1488064200692_tmp;
        _clazz_sub_1488064200692_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "header-app"],
            "dinamic": "\"\""
        };
        _clazz_sub_1488064200692_tmp.prototype.render = function($_this_$) {
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
            _idom.elementOpen("ul", null, ["class", "tab-links"], "onclick", ($_this_$.setIndex.bind($_this_$)));
            _idom.elementOpen("li", null, [""], "class", ($_this_$.index == 0 ? 'selected' : ''));
            _idom.elementOpen("a", null, [""], "href", ('/hello-world/' + $_this_$.title));
            _idom.text("Hello World");
            _idom.elementClose("a");
            _idom.elementClose("li");
            _idom.elementOpen("li", null, [""], "class", ($_this_$.index == 0 ? 'selected' : ''));
            _idom.elementOpen("a", null, ["href", "/todo-app"], "");
            _idom.text("Todo App");
            _idom.elementClose("a");
            _idom.elementClose("li");
            _idom.elementOpen("li", null, ["onclick", "event.currentTarget.className='selected'"], "");
            _idom.elementOpen("a", null, ["href", "/fruit-app"], "");
            _idom.text("Fruit App");
            _idom.elementClose("a");
            _idom.elementClose("li");
            _idom.elementClose("ul");
            _idom.elementClose("div");
        }
        return _clazz_sub_1488064200692_tmp;
    })(function() {});
});