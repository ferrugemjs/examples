define(["require","exports"],function(t,e){"use strict";var i=function(){function t(){this.nextId=0,this.itens=[{id:this.nextId++,desc:"teste",creation:new Date}]}return t.prototype.add=function(t){if(13==t.which||13==t.keyCode){var e=t.target.value;e&&(this.itens.unshift({id:this.nextId++,desc:e,creation:new Date}),this.refresh())}},t.prototype.mark=function(t){var e=this.itens.some(function(e){return e.id==t.id&&(e.done=t.done,!0)});e&&this.refresh()},t.prototype.markAll=function(t){this.itens.forEach(function(e){return e.done=t}),this.refresh()},t.prototype.archiveAllDone=function(){this.itens=this.itens.filter(function(t){return!t.done}),this.refresh()},t}();e.TodoList=i});