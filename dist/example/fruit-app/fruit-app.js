define(["require", "exports", "tslib", "./fruit-store", "./fruit-basic"], function (require, exports, tslib_1, fruit_store_1, fruit_basic_1) {
    "use strict";
    var FruitApp = (function (_super) {
        tslib_1.__extends(FruitApp, _super);
        function FruitApp() {
            var _this = _super.call(this) || this;
            fruit_store_1.default.onChange.subscribe(function () {
                _this.refresh();
            });
            return _this;
        }
        Object.defineProperty(FruitApp.prototype, "fruits", {
            get: function () {
                return fruit_store_1.default.get();
            },
            enumerable: true,
            configurable: true
        });
        FruitApp.prototype.addFruit = function (fruitType) {
            fruit_store_1.default.add({ desc: '', type: fruitType });
        };
        FruitApp.prototype.allowDrop = function (evt) {
            evt.preventDefault();
        };
        FruitApp.prototype.drag = function (fruitType, evt) {
            evt.dataTransfer.setData("type", fruitType);
        };
        FruitApp.prototype.drop = function (evt) {
            evt.preventDefault();
            var data = evt.dataTransfer.getData("type");
            this.addFruit(data);
        };
        return FruitApp;
    }(fruit_basic_1.FruitBasic));
    exports.FruitApp = FruitApp;
});
