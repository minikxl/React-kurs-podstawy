(this["webpackJsonpreact-twitters-v2"]=this["webpackJsonpreact-twitters-v2"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={navItem:"HeaderNavigation_navItem__3_JYl",navItemLink:"HeaderNavigation_navItemLink__3bDV2",navItemLinkActive:"HeaderNavigation_navItemLinkActive__mTpxK"}},,,,function(e,t,a){e.exports={formItem:"Input_formItem__edN_W",input:"Input_input__1tVHX",textarea:"Input_textarea__1S01O",label:"Input_label__1dK9d",formItemBar:"Input_formItemBar__3ConF"}},,function(e,t,a){e.exports={wrapper:"ListItem_wrapper__3IHIW",appear:"ListItem_appear__1kTp5",image:"ListItem_image__3zLn0",imageNone:"ListItem_imageNone__2iKqi",description:"ListItem_description__2D0HN",button:"ListItem_button__3A84n"}},,,,,,function(e,t,a){e.exports={wrapper:"Form_wrapper__2U9SK",form:"Form_form__AiClv"}},,,function(e,t,a){e.exports={wrapper:"Header_wrapper__35c4N"}},,,function(e,t,a){e.exports={button:"Button_button__dwlQk",secondary:"Button_secondary__1LgAO"}},function(e,t,a){e.exports={wrapper:"Modal_wrapper__3zusF",closeButton:"Modal_closeButton__1zvpK"}},function(e,t,a){e.exports={radio:"Radio_radio__34cUv",radioButton:"Radio_radioButton__3MnRe"}},function(e,t,a){e.exports={noItems:"List_noItems__2_GWB"}},,,,,function(e,t,a){e.exports=a.p+"static/media/logo.a7efe939.svg"},function(e,t,a){e.exports={Title:"Title_Title__3W_a3"}},,function(e,t,a){e.exports=a(46)},,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),i=a(20),o=a(8),m=a(34),s=a(13),u=a(14),p=a(16),d=a(15),_=a(9),h=a(1),v=r.a.createContext(),f=a(21),g=a.n(f),E=a(6),b=a.n(E),I=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:b.a.wrapper},r.a.createElement("li",{className:b.a.navItem},r.a.createElement(_.b,{exact:!0,className:b.a.navItemLink,activeClassName:b.a.navItemLinkActive,to:"/"},"twitter")),r.a.createElement("li",{className:b.a.navItem},r.a.createElement(_.b,{className:b.a.navItemLink,activeClassName:b.a.navItemLinkActive,to:"/articles"},"articles")),r.a.createElement("li",{className:b.a.navItem},r.a.createElement(_.b,{className:b.a.navItemLink,activeClassName:b.a.navItemLinkActive,to:"/notes"},"notes"))))},N=a(17),w=a(24),k=a.n(w),y=function(e){var t=e.children,a=e.href,n=e.secondary,l=Object(N.a)(e,["children","href","secondary"]),c=n?k.a.secondary:k.a.button;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a,className:c}," ",t," "):r.a.createElement("button",Object.assign({className:c},l),t))},C=a(32),x=a.n(C),O=function(e){var t=e.openModalFn;return r.a.createElement("header",{className:g.a.wrapper},r.a.createElement("img",{className:g.a.logo,src:x.a,alt:"logo"}),r.a.createElement(I,null),r.a.createElement(y,{onClick:t,secondary:!0},"new item"))},L=a(25),j=a.n(L),F=a(18),B=a.n(F),M=a(10),A=a.n(M),T=function(e){var t=e.tag,a=e.name,n=e.label,l=e.maxLength,c=Object(N.a)(e,["tag","name","label","maxLength"]);return r.a.createElement("div",{className:A.a.formItem},r.a.createElement(t,Object.assign({className:"input"===t?A.a.input:A.a.textarea,required:!0,type:"text",name:a,id:a,maxLength:l,placeholder:" "},c)),r.a.createElement("label",{className:A.a.label,htmlFor:a},n),r.a.createElement("div",{className:A.a.formItemBar}))};T.defaultProps={tag:"input",maxLength:200};var S=T,R=a(33),H=a.n(R),D=function(e){var t=e.children;return r.a.createElement("h2",{className:H.a.Title},t)},K=a(26),W=a.n(K),z=function(e){var t=e.children,a=e.changeFn,n=e.checked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:W.a.radio},r.a.createElement("input",{type:"radio",onChange:a,checked:n}),r.a.createElement("div",{className:W.a.radioButton}),t))},J="twitter",P="article",q="note",U={twitter:"favorite Twitter account",article:"Article",note:"Note"},V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={type:J,title:"",link:"",image:"",description:""},e.handleRadioButtonChange=function(t){e.setState({type:t})},e.handleInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.type;return r.a.createElement(v.Consumer,null,(function(a){return r.a.createElement("div",{className:B.a.wrapper},r.a.createElement(D,null,"Add new ",U[t]),r.a.createElement("form",{autoComplete:"off",className:B.a.form,onSubmit:function(t){return a.addItem(t,e.state)}},r.a.createElement("div",{className:B.a.radioSection},r.a.createElement(z,{changeFn:function(){return e.handleRadioButtonChange(J)},checked:t===J},"Twitter"),r.a.createElement(z,{changeFn:function(){return e.handleRadioButtonChange(P)},checked:t===P},"Article"),r.a.createElement(z,{changeFn:function(){return e.handleRadioButtonChange(q)},checked:t===q},"Note")),r.a.createElement(S,{onChange:e.handleInputChange,value:e.state.title,name:"title",label:t===J?"Twitter name":"Title"}),t!==q?r.a.createElement(S,{onChange:e.handleInputChange,value:e.state.link,name:"link",label:t===J?"Twitter link":"link",maxLength:30}):null,t===J?r.a.createElement(S,{onChange:e.handleInputChange,value:e.state.image,name:"image",label:"Image"}):null,r.a.createElement(S,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",name:"description",label:"Description"}),r.a.createElement(y,null,"add new item")))}))}}]),a}(r.a.Component),X=function(e){var t=e.closeModalFn;return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("button",{className:j.a.closeButton,onClick:t}),r.a.createElement(V,null))},G=a(12),Q=a.n(G),Y=function(e){var t=e.type,a=e.image,n=e.title,l=e.description,c=e.link,i=a?"img":"div";return r.a.createElement("li",{className:Q.a.wrapper},a&&r.a.createElement(i,{src:a,className:a?Q.a.image:Q.a.imageNone,alt:"title"}),r.a.createElement("div",null,r.a.createElement(D,null,n),r.a.createElement("p",{className:Q.a.description},l),c&&r.a.createElement(y,{href:c},"visit ",t," page")))};Y.defaultProps={image:null,link:null,description:"One of the React creators"};var Z=Y,$=a(27),ee=a.n($),te=function(e){var t=e.items,a=e.type;return r.a.createElement(r.a.Fragment,null,t.length?r.a.createElement("ul",{className:ee.a.wrapper},t.map((function(e){return r.a.createElement(Z,Object.assign({key:e.title},e,{type:a}))}))):r.a.createElement("p",{className:ee.a.noItems},"There's nothing here yet, please add some items! \ud83d\udc96"))},ae=function(){return r.a.createElement(v.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement(te,{items:e.article,type:"article"}))}))},ne=function(){return r.a.createElement(v.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement(te,{items:e.note}))}))},re=function(){return r.a.createElement(v.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement(te,{items:e.twitter,type:"twitter"}))}))},le=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={twitter:[{image:"https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg",title:"Dan Abramov",link:"https://twitter.com/dan_abramov"},{image:"https://pbs.twimg.com/profile_images/1257111841508974592/2_rEXazl_400x400.jpg",title:"Ryan Florence",description:"Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",link:"https://twitter.com/ryanflorence"}],article:[],note:[],isModalOpen:!1},e.addItem=function(t,a){t.preventDefault(),e.setState((function(e){return Object(o.a)({},a.type,[].concat(Object(m.a)(e[a.type]),[a]))})),e.closeModal()},e.openModal=function(){e.setState({isModalOpen:!0})},e.closeModal=function(){e.setState({isModalOpen:!1})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.isModalOpen,t=Object(i.a)(Object(i.a)({},this.state),{},{addItem:this.addItem});return r.a.createElement(_.a,null,r.a.createElement(v.Provider,{value:t},r.a.createElement(O,{openModalFn:this.openModal}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:re}),r.a.createElement(h.a,{path:"/articles",component:ae}),r.a.createElement(h.a,{path:"/notes",component:ne})),e&&r.a.createElement(X,{closeModalFn:this.closeModal})))}}]),a}(r.a.Component);a(45);c.a.render(r.a.createElement(le,null),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.1a01599f.chunk.js.map