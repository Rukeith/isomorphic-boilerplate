webpackJsonp([7],{0:function(e,t,n){n(452),e.exports=n(454)},452:function(e,t,n){"use strict";function a(){var e=JSON.parse(document.getElementById("initial-state").textContent);s["default"].render(s["default"].createElement(o["default"],{initialState:e}),document.getElementById("error"))}var r=n(2)["default"],i=n(453),o=r(i),l=n(33),s=r(l);window.addEventListener("DOMContentLoaded",a)},453:function(e,t,n){"use strict";var a=n(4)["default"],r=n(18)["default"],i=n(29)["default"],o=n(32)["default"],l=n(2)["default"];Object.defineProperty(t,"__esModule",{value:!0});var s=n(33),u=l(s),c=n(221),d=l(c),f=function(e){function t(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props.initialState.msg;return u["default"].createElement("div",{className:"error-content"},u["default"].createElement(d["default"],{title:"出错啦"}),u["default"].createElement("div",{className:"error-layer"},u["default"].createElement("div",{className:"error-panel"},u["default"].createElement("img",{src:"/client/asset/image/error.png"}),u["default"].createElement("p",null,e),u["default"].createElement("div",{className:"error-button"},u["default"].createElement("a",{href:"/"},"返回首页")))))}}]),t}(s.Component);f.defaultProps={error:{msg:""}},t["default"]=f,e.exports=t["default"]},454:function(e,t){}});