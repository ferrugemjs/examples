define(["require", "exports", "event-emitter-lite"], function (require, exports, event_emitter_lite_1) {
    "use strict";
    var FruitStore = (function () {
        function FruitStore() {
            this.onChange = new event_emitter_lite_1.EventEmitter();
            this.nextId = 1;
            this.fruits = [];
        }
        FruitStore.prototype.get = function () {
            return this.fruits;
        };
        FruitStore.prototype.add = function (fruit) {
            fruit.id = this.nextId++;
            this.fruits.push(fruit);
            this.onChange.emit(null);
        };
        FruitStore.prototype.clear = function () {
            this.fruits = [];
            this.onChange.emit(null);
        };
        return FruitStore;
    }());
    exports.FruitStore = FruitStore;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new FruitStore();
});
