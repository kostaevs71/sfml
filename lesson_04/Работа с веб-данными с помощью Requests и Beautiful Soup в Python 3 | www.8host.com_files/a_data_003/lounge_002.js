!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.fda8427fde61b6f55d19bcd47d8c54b0.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.82f9cef482ef562dcb04e4c16f3f3a36.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.ae82df16a227721dc29f0f77a26b6960.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.daedd146972fc7d8dffd9be34c404865.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.e9b4803ecd9f11a1b0b249822211345c.js",a.body.appendChild(c)}();