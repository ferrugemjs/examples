define(["exports","incremental-dom","ferrugemjs","./fruit-item"],function(e,t,r,n){var p=document.createElement("style");p.type="text/css",p.innerHTML="   .fruit-item .fruit{    width:80px;    height:30px;    background-position:center top;    background-repeat:no-repeat;    float: left;   }   .fruit-item .type_0{    background-image:url(dist/example/fruit-app/assets/bananas.png);   }   .fruit-item .type_1{    background-image:url(dist/example/fruit-app/assets/grapes-bunch.png);   }  ",document.getElementsByTagName("head")[0].appendChild(p);var a=Object.keys(n)[0];n[a].prototype.$className$ref_style_name$="fruit-item",n[a].prototype.content=r.GenericComponent.prototype.content,n[a].prototype.refresh=r.GenericComponent.prototype.refresh,n[a].prototype.render=function(e){e._$el$domref.static_vars.className="fruit-item",t.elementOpen("div","key_1485613582172_",[""],"class","fruit type_"+e.type),t.elementClose("div")},e["default"]=n[a]});