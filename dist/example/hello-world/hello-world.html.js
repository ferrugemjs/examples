define(["exports","incremental-dom","ferrugemjs","./hello-world","../commons/assets/commons-style.css!"],function(e,l,n,t){var s=Object.keys(t)[0];t[s].prototype._$style_name$_="example-basic-box",t[s].prototype.render=function(e){e._$style_name$_="example-basic-box",l.elementOpen("h3",null,["class","title"],""),l.text("Hello World"),l.elementClose("h3"),l.elementOpen("div",null,["class","example-basic-box-body"],""),l.elementOpen("p",null,[""],""),l.elementOpen("span",null,[""],""),l.text("Hello World, "+e.name+" !"),l.elementClose("span"),l.elementClose("p"),l.elementOpen("p",null,[""],""),l.elementOpen("input",null,["class","simple","type","text","placeholder","...new name"],"onkeyup",function(l){e.name=l.target.value,e.refresh()}),l.elementClose("input"),l.elementClose("p"),l.elementClose("div"),l.elementOpen("div",null,["class","list-concepts"],""),l.elementOpen("span",null,[""],""),l.text("Concepts"),l.elementClose("span"),l.elementOpen("span",null,[""],""),l.text("✔"),l.text("one way data binding."),l.elementClose("span"),l.elementOpen("span",null,[""],""),l.text("✔"),l.text("event binding."),l.elementClose("span"),l.elementOpen("span",null,[""],""),l.text("✔"),l.text("import a css file."),l.elementClose("span"),l.elementClose("div")},e["default"]=t[s]});