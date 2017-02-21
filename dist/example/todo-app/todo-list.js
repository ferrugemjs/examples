define(["require", "exports"], function (require, exports) {
    "use strict";
    var TodoList = (function () {
        function TodoList() {
            this.nextId = 1;
            this.itens = [
                { id: this.nextId++, desc: 'teste', creation: new Date() }
            ];
        }
        TodoList.prototype.add = function (evt) {
            if (evt.which == 13 || evt.keyCode == 13) {
                var value = evt.target.value;
                if (value) {
                    this.itens.unshift({
                        id: this.nextId++,
                        desc: value,
                        creation: new Date()
                    });
                    this.refresh();
                }
            }
        };
        TodoList.prototype.mark = function (pitem) {
            var founded = this.itens.some(function (item) {
                if (item.id == pitem.id) {
                    item.done = pitem.done;
                    return true;
                }
                return false;
            });
            if (founded) {
                this.refresh();
            }
            ;
        };
        TodoList.prototype.markAll = function (done) {
            this.itens.forEach(function (item) { return item.done = done; });
            this.refresh();
        };
        TodoList.prototype.archiveAllDone = function () {
            this.itens = this.itens.filter(function (item) { return !item.done; });
            this.refresh();
        };
        return TodoList;
    }());
    exports.TodoList = TodoList;
});
