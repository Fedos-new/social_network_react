(this["webpackJsonp01-todolist"]=this["webpackJsonp01-todolist"]||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/3.4e6bd4a5.png"},103:function(e,t,n){e.exports={header:"Header_header__1EhEz",loginBlock:"Header_loginBlock__1g8ZT"}},104:function(e,t,n){e.exports={primary:"StandardButton_primary__3Xnc9",default:"StandardButton_default__2HOz0"}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var a=n(10),r=n.n(a),c=n(20),o=n(41),i=n(5),s=n(18),u={posts:[{id:1,message:"Hi man! How are you?",likeCount:5},{id:2,message:"My fist post!",likeCount:9},{id:3,message:"Cool!!!",likeCount:10},{id:4,message:"I'm fine :-)",likeCount:3},{id:5,message:"Where you been?",likeCount:13},{id:6,message:"Learn JS!",likeCount:19}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS_PROFILE",status:e}},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:5,message:t.newPostText,likeCount:0}])});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(41),r=n(5),c={dialogs:[{id:1,name:"Dimych",image:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:2,name:"Roman",image:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:3,name:"Leha",image:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:4,name:"Ivan",image:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:5,name:"Sveta",image:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo!"},{id:4,message:"WTF?:-)"},{id:5,message:":-)"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageElement:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{dialogs:[].concat(Object(a.a)(e.dialogs),[{id:6,name:"You",image:"https://bipbap.ru/wp-content/uploads/2017/10/3-6.png"}]),messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.newMessageElement}])});default:return e}}},147:function(e,t,n){e.exports={item:"FriendsBar_item__2qhhZ",itemImg:"FriendsBar_itemImg__dQjfF"}},148:function(e,t,n){e.exports=n.p+"static/media/2.9e8f4479.png"},149:function(e,t,n){e.exports=n.p+"static/media/user.046e91f7.png"},150:function(e,t,n){e.exports=n.p+"static/media/preloader.f4b86f5d.svg"},151:function(e,t,n){e.exports={preloader:"Preloader_preloader__bEH88"}},177:function(e,t,n){e.exports=n(305)},18:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(143),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3c9a379c-5299-4637-abd2-f49a30f8dddb"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.delete("follow/".concat(e))},unfollow:function(e){return r.post("follow/".concat(e))},getProfile:function(e){return o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},23:function(e,t,n){e.exports={wrapContainer:"Container_wrapContainer__3u8a7"}},260:function(e,t,n){},261:function(e,t,n){},28:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(104),o=n.n(c);t.a=function(e){var t=e.primary,n=e.className,a="".concat(t?o.a.primary:o.a.default," ").concat(n);return r.a.createElement("button",Object.assign({},e,{className:a}))}},29:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p}));var a=n(10),r=n.n(a),c=n(20),o=n(5),i=n(18),s=n(54),u={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,c=a.id,o=a.login,s=a.email,t(l(c,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var o,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?c(m()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(s.b)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},30:function(e,t,n){e.exports={userPhoto:"User_userPhoto__3WMBV",userWap:"User_userWap__1T9AR",iconBtn:"User_iconBtn__2rf2L"}},305:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(8),o=n(107),i=n(118),s={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return e},l=n(35),m=n(29),f=n(144),p=n(142),d=n(5),g={initialized:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALISED_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},h=Object(c.c)({profilePage:o.b,dialogsPage:i.a,navBar:u,usersPage:l.a,auth:m.a,form:p.a,app:E}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,b=Object(c.e)(h,v(Object(c.a)(f.a)));window._store_=b;var _=b,O=n(75),w=n.n(O),S=(n(260),n(44)),j=n(45),P=n(47),N=n(46),C=(n(261),n(9)),I=n.n(C),y=n(14),k=n(147),L=n.n(k),T=n(80),x=n.n(T),F=n(148),U=n.n(F),R=n(100),A=n.n(R),z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:L.a.itemImg},r.a.createElement("img",{src:x.a,alt:"avatar"}),r.a.createElement("img",{src:x.a,alt:"avatar"}),r.a.createElement("img",{src:A.a,alt:"avatar"}),r.a.createElement("img",{src:x.a,alt:"avatar"}),r.a.createElement("img",{src:U.a,alt:"avatar"}),r.a.createElement("img",{src:A.a,alt:"avatar"})))},G=n(12),D=n(13),M=function(){return r.a.createElement("nav",{className:I.a.nav},r.a.createElement("div",{className:"".concat(I.a.item," ").concat(I.a.active)},r.a.createElement(y.b,{to:"/profile",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.j}),r.a.createElement("span",{className:I.a.linkText},"Profile"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/dialogs",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.c}),r.a.createElement("span",{className:I.a.linkText},"Messages"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/news",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.n}),r.a.createElement("span",{className:I.a.linkText},"News"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/users",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.m}),r.a.createElement("span",{className:I.a.linkText},"Users"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/music",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.d}),r.a.createElement("span",{className:I.a.linkText},"Music"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/setting",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.k}),r.a.createElement("span",{className:I.a.linkText},"Settings"))),r.a.createElement("div",{className:I.a.item},r.a.createElement(y.b,{to:"/friends",activeClassName:I.a.activeLink},r.a.createElement(G.a,{icon:D.l}),r.a.createElement("span",{className:I.a.linkText},"Friends"))),r.a.createElement(z,null))},W=n(11),B=n(103),H=n.n(B),q=n(28),Z=n(50),X=n.n(Z),Y=n(30),J=n.n(Y),Q=n(77),V=function(e){return r.a.createElement("header",{className:H.a.header},r.a.createElement("img",{alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:"./img/logoP.png"}),r.a.createElement("span",{className:H.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement(q.a,{onClick:e.logout,className:X.a.logout},"Logout ",r.a.createElement(G.a,{icon:D.h,className:J.a.iconBtn}))):r.a.createElement(y.b,{to:Q.a.LOGIN},"Login")))},K=n(16),$=function(e){Object(P.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createElement(V,this.props)}}]),n}(r.a.Component),ee=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:m.e,logout:m.d})($),te=n(49),ne=function(e){Object(P.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ee,null),r.a.createElement(M,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(Q.b,null))):r.a.createElement(te.a,null)}}]),n}(r.a.Component),ae=Object(c.d)(W.f,Object(K.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(m.b)());Promise.all([t]).then((function(){e({type:"INITIALISED_SUCCESS"})}))}}}))(ne);w.a.render(r.a.createElement(y.a,null,r.a.createElement(K.a,{store:_},r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return b}));var a=n(10),r=n.n(a),c=n(20),o=n(41),i=n(5),s=n(18),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},m=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},d=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},E=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(d(!0)),n.next=3,s.c.getUsers(e,t);case 3:c=n.sent,a(d(!1)),a({type:"SET_USERS",users:c.items}),a({type:"SET_TOTAL_USERS",count:c.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,s.c.follow.bind(s.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,s.c.unfollow.bind(s.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},36:function(e,t,n){e.exports={wrapPagination:"Paginator_wrapPagination__3w_Fb",selectedPage:"Paginator_selectedPage__3vFZy",noSelectedPage:"Paginator_noSelectedPage__1aspT",btnShift:"Paginator_btnShift__1bnXo",iconShift:"Paginator_iconShift__3ZiIR"}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return d}));var a=n(65),r=n(0),c=n.n(r),o=n(63),i=n.n(o),s=n(98),u=n(50),l=n.n(u),m=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:i.a.fromControl+" "+(o?i.a.error:"")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(m,e," ",c.a.createElement("textarea",Object.assign({},t,n))," ")},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(m,e," ",c.a.createElement("input",Object.assign({},t,n))," ")},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(s.a,Object.assign({placeholder:e,component:t,name:n,validate:a,className:l.a.inputLogin},r))," ",o)}},49:function(e,t,n){"use strict";var a=n(150),r=n.n(a),c=n(0),o=n.n(c),i=n(151),s=n.n(i);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{alt:"Loading...",src:r.a,className:s.a.preloader}))}},50:function(e,t,n){e.exports={inputLogin:"Login_inputLogin__3vuC_",loginWrap:"Login_loginWrap__1niPP",logout:"Login_logout__2hESb"}},63:function(e,t,n){e.exports={fromControl:"FormsControls_fromControl__1fOnm",error:"FormsControls_error__qscBC",formSummaryError:"FormsControls_formSummaryError__2e4vZ"}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne}));var a=n(0),r=n.n(a),c=n(11),o=n(44),i=n(45),s=n(47),u=n(46),l=n(16),m=n(35),f=n(65),p=n(141),d=n(36),g=n.n(d),E=n(12),h=n(13),v=function(e){for(var t=e.totalUsersCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),l=Math.ceil(u/s),m=Object(a.useState)(1),f=Object(p.a)(m,2),d=f[0],v=f[1],b=(d-1)*s+1,_=d*s,O=[],w=1;w<=u;w++)O.push(w);return r.a.createElement("div",{className:g.a.wrapPagination},d>1&&r.a.createElement("button",{onClick:function(){v(d-1)},className:g.a.btnShift},r.a.createElement(E.a,{icon:h.a,className:g.a.iconShift})),O.filter((function(e){return e>=b&&e<=_})).map((function(e,t){return r.a.createElement("span",{key:t,className:"".concat(c===e?g.a.selectedPage:g.a.noSelectedPage),onClick:function(t){o(e)}},e)})),d<l&&r.a.createElement("button",{onClick:function(){v(d+1)},className:g.a.btnShift},r.a.createElement(E.a,{icon:h.b,className:g.a.iconShift})))},b=n(30),_=n.n(b),O=n(149),w=n.n(O),S=n(14),j=n(28),P=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return r.a.createElement("div",{className:_.a.userWap},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(S.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:w.a,className:_.a.userPhoto,alt:"photo"}))),r.a.createElement("div",null,t.followed?r.a.createElement(j.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow",r.a.createElement(E.a,{icon:h.e,className:_.a.iconBtn})):r.a.createElement(j.a,{primary:"green",disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow",r.a.createElement(E.a,{icon:h.f,className:_.a.iconBtn})))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,t.location))))},N=n(23),C=n.n(N),I=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,c=e.pageSize,o=Object(f.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]);return r.a.createElement("div",{className:C.a.wrapContainer},r.a.createElement(v,{currentPage:t,onPageChanged:n,totalUsersCount:a,pageSize:c}),r.a.createElement("div",null,o.users.map((function(e){return r.a.createElement(P,{user:e,key:e.id,followingInProgress:o.followingInProgress,follow:o.follow,unfollow:o.unfollow})}))))},y=n(49),k=n(8),L=function(e){return e.usersPage.users},T=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},R=function(e){return e.usersPage.followingInProgress},A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n),e.props.setCurrentPage(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(y.a,null):null,r.a.createElement(I,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),z=Object(k.d)(Object(l.b)((function(e){return{users:L(e),pageSize:T(e),totalUsersCount:x(e),currentPage:F(e),isFetching:U(e),followingInProgress:R(e)}}),{follow:m.b,unfollow:m.f,setCurrentPage:m.d,toggleFollowingProgress:m.e,requestUsers:m.c}))(A),G=function(e){return r.a.createElement("div",{className:C.a.wrapContainer},"News")},D=function(e){return r.a.createElement("div",{className:C.a.wrapContainer},"Music")},M=function(e){return r.a.createElement("div",{className:C.a.wrapContainer},"Settings")},W=n(140),B=n(40),H=n(97),q=n(29),Z=n(63),X=n.n(Z),Y=n(50),J=n.n(Y),Q=Object(W.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t,className:C.a.wrapContainer},r.a.createElement("div",null,Object(B.c)("email",B.a,"email",[H.b])),r.a.createElement("div",null,Object(B.c)("password",B.a,"password",[H.b],"password")),r.a.createElement("div",null,Object(B.c)(null,B.a,"rememberMe",[],{type:"checkbox"},"remember me")),n&&r.a.createElement("div",{className:X.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement(j.a,null,"Login  ",r.a.createElement(E.a,{icon:h.g,className:_.a.iconBtn}))))})),V=Object(l.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:q.c})((function(e){return e.isAuth?r.a.createElement(c.a,{to:ne.PROFILE}):r.a.createElement("div",{className:J.a.loginWrap},r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Q,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),K=function(){return r.a.createElement("div",{className:C.a.wrapContainer},"Friends",r.a.createElement(j.a,null,"My Friends"))},$=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(y.a,null)},r.a.createElement(e,t))}},ee=r.a.lazy((function(){return n.e(3).then(n.bind(null,310))})),te=r.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),ne={LOGIN:"/login",PROFILE:"/profile/:userId?",ERROR_404:"/404",DIALOGS:"/dialogs",NEWS:"/news",MUSIC:"/music",SETTING:"/setting",FRIENDS:"/friends",USERS:"/users"};t.b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{path:ne.DIALOGS,render:$(te)}),r.a.createElement(c.b,{path:ne.PROFILE,render:$(ee)}),r.a.createElement(c.b,{path:ne.USERS,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(c.b,{path:ne.NEWS,render:function(){return r.a.createElement(G,null)}}),r.a.createElement(c.b,{path:ne.MUSIC,render:function(){return r.a.createElement(D,null)}}),r.a.createElement(c.b,{path:ne.SETTING,render:function(){return r.a.createElement(M,null)}}),r.a.createElement(c.b,{path:ne.LOGIN,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(c.b,{path:ne.FRIENDS,render:function(){return r.a.createElement(K,null)}}))}},80:function(e,t,n){e.exports=n.p+"static/media/1.9203dd29.png"},9:function(e,t,n){e.exports={nav:"Navbar_nav__3851Q",item:"Navbar_item__2Yw-O",activeLink:"Navbar_activeLink__1bzz1",linkText:"Navbar_linkText__N5C1b"}},97:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is Required"},r=function(e){return function(t){if(t&&t.length>e)return"Must be ".concat(e," symbol or less")}}}},[[177,1,2]]]);
//# sourceMappingURL=main.d82b7cd3.chunk.js.map