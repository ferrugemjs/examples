define(["require", "exports", "event-emitter-lite"], function (require, exports, event_emitter_lite_1) {
    "use strict";
    var TodoItem = (function () {
        function TodoItem() {
            this.onMarked = new event_emitter_lite_1.EventEmitter();
        }
        TodoItem.prototype.MarkAsDone = function () {
            this.done = !this.done;
            this.onMarked.emit({ id: this.id, done: this.done });
        };
        TodoItem.prototype.detached = function () {
            this.onMarked.unsubscribeAll();
        };
        return TodoItem;
    }());
    exports.TodoItem = TodoItem;
});
