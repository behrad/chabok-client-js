/*! chabokpush - 1.2.2 | (c) 2017, 2019  ADP digital | ISC | http://chabokpush.com/ */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("chabokpush",[],n):"object"==typeof exports?exports.chabokpush=n():t.chabokpush=n()}("undefined"!=typeof self?self:this,function(){return function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=168)}({168:function(t,n,e){"use strict";self.addEventListener("push",function(t){if(console.log("self",self),t.data.json()){var n=t.data.json();n.silent||(n.clickUrl&&(n.data=n.data||{},n.data.clickUrl=n.clickUrl),t.waitUntil(self.registration.showNotification(n.title,n)))}}),self.addEventListener("pushsubscriptionchange",function(t){var n=t.oldSubscription.options;t.waitUntil(self.registration.pushManager.subscribe(n).then(function(t){}))}),self.addEventListener("notificationclick",function(t){var n="/";t&&t.notification&&t.notification.data&&t.notification.data.clickUrl&&(n=t.notification.data.clickUrl),t.notification.close(),t.waitUntil(self.clients.matchAll({type:"window"}).then(function(t){for(var e=0;e<t.length;e+=1){var i=t[e];if((i.url===n||i.url===n+"/")&&"focus"in i)return void i.focus()}self.clients.openWindow&&self.clients.openWindow(n)}))})}})});
//# sourceMappingURL=ChabokSDKWorker.js.map