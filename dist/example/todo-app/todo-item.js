define(["require","exports","event-emitter-lite"],function(e,t,n){"use strict";var i=function(){function e(){this.onMarked=new n.EventEmitter}return e.prototype.MarkAsDone=function(){this.done=!this.done,this.onMarked.emit({id:this.id,done:this.done})},e.prototype.detached=function(){this.onMarked.unsubscribeAll()},e}();t.TodoItem=i});