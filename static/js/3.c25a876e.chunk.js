(this["webpackJsonp01-todolist"]=this["webpackJsonp01-todolist"]||[]).push([[3],{308:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__ishaF",btnFile:"ProfileInfo_btnFile__1TpZm",contacts:"ProfileInfo_contacts__3DbMQ",inputStatus:"ProfileInfo_inputStatus__2NxRH"}},310:function(e,t,a){e.exports={item:"Post_item__3HvO0",content:"Post_content__1w9Dy",iconLike:"Post_iconLike__1bwe8",likeCount:"Post_likeCount__2dDeQ"}},311:function(e,t,a){"use strict";a.r(t);var n=a(46),l=a(47),o=a(49),r=a(48),s=a(0),c=a.n(s),i=a(109),u=a(308),m=a.n(u),p=a(51),f=a(41),d=a.n(f),E=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(i.a)(o,2),u=r[0],p=r[1];return Object(s.useEffect)((function(){p(e.status)}),[e.status]),c.a.createElement(c.a.Fragment,null,n?c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(u)},onChange:function(e){l(!0),p(e.currentTarget.value)},value:u,className:"".concat(d.a.inputLogin," ").concat(m.a.inputStatus)})):c.a.createElement("div",null,c.a.createElement("b",null,"Status"),": ",c.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-----")))},b=a(132),v=a.n(b),h=a(28),P=a(58),g=a.n(P),k=a(31),O=a(143),j=Object(O.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement(h.a,{primary:"green"},"Save"),n&&c.a.createElement("div",{className:g.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Name"),": ",Object(k.c)("Name",k.a,"fullName",[])),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",Object(k.c)("About Me",k.a,"aboutMe",[])),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(k.c)("",k.a,"lookingForAJob",[],{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",Object(k.c)("My professional skills",k.b,"lookingForAJobDescription",[])),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{className:m.a.contacts,key:e},c.a.createElement("b",null,e),Object(k.c)(e,k.a,"contacts."+e,[]))}))))})),S=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,!a&&c.a.createElement(h.a,{primary:"green",onClick:n},"Edit"),c.a.createElement("div",null,c.a.createElement("b",null,"Name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",!0===t.lookingForAJob?"Yes":"No"),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(_,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},_=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contacts},c.a.createElement("b",null,t),": ",a)},y=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),f=Object(i.a)(u,2),d=f[0],b=f[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{alt:"avatar",src:t.photos.large||v.a}),!l&&c.a.createElement("div",null,c.a.createElement("label",{className:m.a.btnFile},"Update photo",c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}))),d?c.a.createElement(j,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){b(!1)}))}}):c.a.createElement(S,{profile:t,isOwner:l,goToEditMode:function(){b(!0)}}),c.a.createElement(E,{status:a,updateStatus:n})))},N=a(107),w=a(108),C=a.n(w),M=a(310),A=a.n(M),I=a(12),F=a(13),T=function(e){return c.a.createElement("div",{className:A.a.item},c.a.createElement("div",{className:A.a.content},c.a.createElement("img",{alt:"avatar",src:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"}),c.a.createElement("span",null,e.message,c.a.createElement("div",{className:A.a.likeCount},c.a.createElement(I.a,{icon:F.i,className:A.a.iconLike}),e.likeCount))),c.a.createElement("div",null))},x=a(98),D=a(80),J=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(T,{key:e.id,message:e.message,likeCount:e.likeCount})}));return c.a.createElement("div",{className:C.a.postsBlock},c.a.createElement("h3",null,"My post"),c.a.createElement(U,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:C.a.posts},t))})),L=Object(D.a)(15),U=Object(O.a)({form:"MyPostAddNewPost"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(x.a,{className:C.a.textarea,component:k.b,name:"newPostText",placeholder:"what's new?",validate:[L]})),c.a.createElement("div",null,c.a.createElement(h.a,null,"Add post")))})),B=J,z=a(18),V=a(38),H=Object(z.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(N.a)(t)),e(Object(V.a)("MyPostAddNewPost"))}}}))(B),Q=a(23),R=a.n(Q),Y=function(e){return c.a.createElement("div",{className:R.a.wrapContainer},c.a.createElement(y,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(H,null))},Z=a(11),q=a(9),G=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Y,Object.assign({},this.props,{isOwner:!!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})))}}]),a}(c.a.Component);t.default=Object(q.d)(Object(z.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:N.d,getStatus:N.c,updateStatus:N.g,savePhoto:N.e,saveProfile:N.f}),Z.f)(G)}}]);
//# sourceMappingURL=3.c25a876e.chunk.js.map