(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,function(t,e,a){},,function(t,e,a){t.exports=a(11)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),u=a(4),o=a.n(u),c=(a(10),a(1)),s=(a(3),function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:t.function,disabled:t.isDisabled,className:"".concat(t.class," button")},t.title))}),l=function(t){var e=t.startCount;e=t.inputState?t.count:"enter values and press set","none"!==t.error&&(e="Incorrect value");var a="count_num";return t.count===t.maxCount||"none"!==t.error?a+=" disabled":t.inputState||(a+=" fontSize"),r.a.createElement("div",{className:"display_wrapper"},r.a.createElement("span",{className:a},e))},i=function(t){var e=!t.inputState||t.count===t.startCount;return r.a.createElement("div",{className:"counter"},r.a.createElement(l,{count:t.count,error:t.error,maxCount:t.maxCount,startCount:t.startCount,inputState:t.inputState}),r.a.createElement("div",{className:"buttons_wrapper"},r.a.createElement(s,{title:"Incr",function:t.increaseCount,isDisabled:!t.inputState}),r.a.createElement(s,{title:"Reset",function:t.resetCount,isDisabled:e})))},p=function(t){var e=(t.error?"error_input":"")+" value_input";return r.a.createElement("div",{className:"value_wrapper"},r.a.createElement("span",{className:"value_title"},t.title),r.a.createElement("input",{onChange:function(e){t.setInputStateChanger(!1),t.setValue(+e.currentTarget.value)},value:t.inputValue,className:e,type:"number"}))},m=function(t){var e="maxError"===t.error||"all"===t.error,a="startError"===t.error||"all"===t.error;return r.a.createElement("div",{className:"display_wrapper display_params"},r.a.createElement(p,{title:"max value:",setValue:t.setInputMax,inputValue:t.inputMaxValue,error:e,checkDisabled:t.checkDisabled,setInputStateChanger:t.setInputStateChanger}),r.a.createElement(p,{title:"start value:",setValue:t.setInputStart,inputValue:t.inputStartValue,error:a,checkDisabled:t.checkDisabled,setInputStateChanger:t.setInputStateChanger}))},S=function(t){return r.a.createElement("div",{className:"counter"},r.a.createElement(m,{inputMaxValue:t.inputMaxValue,inputStartValue:t.inputStartValue,setInputMax:t.setInputMax,setInputStart:t.setInputStart,checkDisabled:t.checkDisabled,error:t.error,setInputStateChanger:t.setInputStateChanger}),r.a.createElement("div",{className:"buttons_wrapper button_center"},r.a.createElement(s,{title:"Set",function:t.setValues,isDisabled:"none"!==t.error||t.inputState})))};var b=function(){var t=localStorage.getItem("maxCountValue"),e=t?JSON.parse(t):7,a=localStorage.getItem("startCountValue"),u=a?JSON.parse(a):0,o=localStorage.getItem("count"),s=o?JSON.parse(o):u,l=Object(n.useState)(e),p=Object(c.a)(l,2),m=p[0],b=p[1],d=Object(n.useState)(u),g=Object(c.a)(d,2),f=g[0],v=g[1],E=Object(n.useState)(e),C=Object(c.a)(E,2),I=C[0],h=C[1],O=Object(n.useState)(u),N=Object(c.a)(O,2),V=N[0],x=N[1],j=Object(n.useState)(s),w=Object(c.a)(j,2),k=w[0],y=w[1],D=Object(n.useState)("none"),_=Object(c.a)(D,2),J=_[0],M=_[1],B=Object(n.useState)(!0),W=Object(c.a)(B,2),z=W[0],A=W[1];function F(t){M(t)}return r.a.createElement("div",{className:"App"},r.a.createElement(S,{inputMaxValue:I,setInputMax:function(t){F(t<V||t<0?"maxError":t===V?"all":"none"),t<=99&&t>=-1&&h(t)},setValues:function(){b(I),v(V),y(V),A(!0),localStorage.setItem("maxCountValue",JSON.stringify(I)),localStorage.setItem("startCountValue",JSON.stringify(V))},inputStartValue:V,setInputStart:function(t){F(t>I||t<0?"startError":t===I?"all":"none"),t<=99&&t>=-1&&x(t),localStorage.setItem("count",JSON.stringify(t)),y(t)},checkDisabled:F,error:J,setInputStateChanger:function(t){A(t)},inputState:z}),r.a.createElement(i,{error:J,count:k,increaseCount:function(){var t=k;t<m&&(y(t+1),localStorage.setItem("count",JSON.stringify(t+1)))},resetCount:function(){y(f),localStorage.setItem("count",JSON.stringify(f))},maxCount:m,startCount:f,inputState:z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4a514048.chunk.js.map