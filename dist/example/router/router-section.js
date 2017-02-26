define(["require", "exports", "page"], function (require, exports, page) {
    "use strict";
    var RouterSection = (function () {
        function RouterSection() {
            this.styleName = "";
            this.routes = [];
            this.uid = 1;
        }
        RouterSection.prototype.attached = function () {
            var _this_ = this;
            this.routes.forEach(function (route) {
                page(route.path, function (context) {
                    this.params = context.params;
                    _this_.route = this;
                    _this_.uid++;
                    _this_.refresh();
                }.bind(route));
            });
            page.start({ hashbang: true });
        };
        return RouterSection;
    }());
    exports.RouterSection = RouterSection;
});
