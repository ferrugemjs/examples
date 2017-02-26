define(["require", "exports"], function (require, exports) {
    "use strict";
    var HeaderSection = (function () {
        function HeaderSection() {
            this.index = -1;
        }
        HeaderSection.prototype.setIndex = function (index) {
            var _this = this;
            this.index = index;
            setTimeout(function () {
                _this.refresh();
            }, 0);
        };
        return HeaderSection;
    }());
    exports.HeaderSection = HeaderSection;
});
