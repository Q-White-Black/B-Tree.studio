(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{220:function(t,e,a){},224:function(t,e,a){},229:function(t,e,a){},247:function(t,e,a){"use strict";var n=a(220);a.n(n).a},256:function(t,e,a){"use strict";var n=a(224);a.n(n).a},272:function(t,e,a){"use strict";var n=a(229);a.n(n).a},283:function(t,e,a){"use strict";a(241);var n={name:"Home",components:{NavLink:a(235).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){if(null!==this.data.ityped){var t=a(246),e=document.querySelector("#ityped-description");t.init(e,{showCursor:!0,typeSpeed:80,backSpeed:40,startDelay:3e3,backDelay:1e3,loop:!1,cursorChar:"_",strings:this.data.tagline})}},methods:{d:function(){var t=new Date;return t.getFullYear()}}},i=(a(247),a(12)),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{staticStyle:{"min-width":"200px"},attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[null===t.data.ityped?a("span",[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),a("span",{attrs:{id:"ityped-description"}})]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),a("div",{staticClass:"footer"},[t._v("\n    Mozilla Licensed | Copyright © "+t._s(t.d())+" moecopilot ｜ Vuepress\n  ")])],1)}),[],!1,null,null,null);e.a=s.exports},284:function(t,e,a){"use strict";a(259),a(23),a(58);var n=a(285),i=a(286),s={components:{PageEdit:n.a,PageNav:i.a},data:function(){return{word_num:0,word_time:0}},props:["sidebarItems"],mounted:function(){for(var t=document.querySelectorAll("p img"),e=0;e<t.length;e++)t[e].parentNode.setAttribute("class","img-content");this.word_num=document.getElementsByClassName("theme-default-content")[0].innerText.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|\n|\r|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,"").length,this.word_time=(this.word_num/275).toFixed(2)}},o=(a(272),a(12)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("div",{staticClass:"reading-time"},[a("h4",[t._v(t._s(t.word_time))]),t._v(" "),a("h4",[t._v("min")]),t._v(" "),a("h4",[t._v("read")])]),t._v(" "),t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=r.exports},287:function(t,e,a){"use strict";var n=a(235),i=a(240),s=a(255),o=a.n(s),r={name:"DropdownLink",components:{NavLink:n.a,DropdownTransition:i.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t}}},u=(a(256),a(12)),c=Object(u.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[a("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[a("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),a("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),a("DropdownTransition",[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,n){return a("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?a("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?a("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(n){return a("li",{key:n.link,staticClass:"dropdown-subitem"},[a("NavLink",{attrs:{item:n},on:{focusout:function(a){t.isLastItemOfArray(n,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):a("NavLink",{attrs:{item:e},on:{focusout:function(a){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.a=c.exports}}]);