define(["require", "exports"], function (require, exports) {
    "use strict";
    var MenuSection = (function () {
        function MenuSection() {
            this.index = -1;
        }
        MenuSection.prototype.selectIndex = function (index) {
            this.refresh({ index: index });
        };
        return MenuSection;
    }());
    exports.MenuSection = MenuSection;
});
