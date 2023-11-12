"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[124],{3124:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,o,i,u,s=e(5861),p=e(9439),f=e(7757),l=e.n(f),h=e(7108),d=e(2444),g=e(5524),v=e(2791),x=e(7689),w=e(168),m=e(6444),y=m.ZP.ul(r||(r=(0,w.Z)(["\n  display: flex;\n  gap: 15px;\n  // justify-content: start;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding-top: 20px;\n"]))),Z=m.ZP.li(a||(a=(0,w.Z)(["\n  width: 240px;\n  display: flex;\n  font-size: 16px;\n  padding: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background: var(--grey);\n  border-radius: 6px;\n  border: 1px dotted #ff6550;\n  text-align: center;\n  line-height: 1.4;\n"]))),k=m.ZP.img(c||(c=(0,w.Z)(["\n  border-radius: 50%;\n  margin: 0 auto;\n  width: 95px;\n  height: 95px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n"]))),b=m.ZP.div(o||(o=(0,w.Z)(["\n  margin-left: 15px;\n"]))),j=m.ZP.p(i||(i=(0,w.Z)(["\ncolor:var(--wite);\n"]))),_=m.ZP.span(u||(u=(0,w.Z)(["\n  margin-right: 5px;\n  color: var(--orange);\n  display: block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n"]))),O=e(184),S=function(){var n=(0,x.UO)().movieId,t=(0,v.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1],c=(0,v.useState)(!0),o=(0,p.Z)(c,2),i=o[0],u=o[1];return(0,v.useEffect)((function(){if(n){var t=function(){var t=(0,s.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.Hj)(n);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),(0,g.K)();case 10:return t.prev=10,u(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,O.jsxs)(O.Fragment,{children:[i&&(0,O.jsx)(h.Z,{}),r&&r.length>0?(0,O.jsx)(y,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.character;return(0,O.jsxs)(Z,{children:[(0,O.jsx)(k,{src:e?"".concat(d.yA).concat(e):d.l7,alt:r,width:"182",height:"150"}),(0,O.jsxs)(b,{children:[(0,O.jsxs)(j,{children:[(0,O.jsx)(_,{children:"Actor:"}),r]}),(0,O.jsxs)(j,{children:[(0,O.jsx)(_,{children:"Character:"}),a]})]})]},t)}))}):(0,O.jsx)("p",{children:"Sorry! We don't have any informtion about cast"})]})}},2444:function(n,t,e){e.d(t,{Bc:function(){return d},D7:function(){return x},Hj:function(){return v},eQ:function(){return g},l7:function(){return l},yA:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),o=e(340),i=e(1686),u=e(5524),s="https://api.themoviedb.org/3/",p="715f5dfcd0365ce887a7dfc6240d5986",f="https://image.tmdb.org/t/p/w500",l="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",h=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(p));case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 8:n.prev=8,n.t0=n.catch(0),i.Notify.failure("Oops! Something went wrong!",u.O);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();t.ZP=h;var d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(p,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),i.Notify.failure("Oops! Something went wrong!",u.O);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"search/movie?api_key=").concat(p,"&query=").concat(t,"&include_adult=false"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),i.Notify.failure("Oops! Something went wrong!",u.O);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(p,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),i.Notify.failure("Oops! Something went wrong!",u.O);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(p,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),i.Notify.failure("Oops! Something went wrong!",u.O);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},5524:function(n,t,e){e.d(t,{K:function(){return c},O:function(){return a}});var r=e(5264),a={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function c(){r.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",a)}}}]);
//# sourceMappingURL=124.52a0f25b.chunk.js.map