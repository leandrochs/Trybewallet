(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{35:function(e,t,n){e.exports=n(62)},40:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),o=n(24),u=(n(40),n(3)),l=n(2),s=n(9),d=n.n(s),p=n(15),h=n(17),m=n(5),b=n(6),v=n(4),f=n(8),E=n(7),g=function(e){return{type:"WALLET",value:e}},j=function(e){return{type:"DELETE_LINE",value:e}},y=function(e){return{type:"EDIT_MODE",value:e}},O=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",disabled:!0},a.login=a.login.bind(Object(v.a)(a)),a.validation=a.validation.bind(Object(v.a)(a)),a.onChange=a.onChange.bind(Object(v.a)(a)),a}return Object(b.a)(n,[{key:"onChange",value:function(e){var t=this,n=e.target,a=n.name,r=n.value;this.setState(Object(h.a)({},a,r.replace(/\s/g,"")),(function(){t.validation()}))}},{key:"validation",value:function(){var e=this.state,t=e.email;e.password.length>=6&&t.match(/@/)&&t.match(/\..../)?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"login",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=this.state.email,a=this.props,r=a.loginDispatch,i=a.history,r(n),i.push("/carteira");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,i=t.disabled;return r.a.createElement("div",null,r.a.createElement("h3",null,"Login Page"),r.a.createElement("form",null,r.a.createElement("input",{autoComplete:"off","data-testid":"email-input",onChange:this.onChange,name:"email",placeholder:"E-mail",type:"email",value:n}),r.a.createElement("input",{autoComplete:"current-password","data-testid":"password-input",onChange:this.onChange,name:"password",placeholder:"Senha",type:"password",value:a}),r.a.createElement("button",{disabled:i,onClick:function(t){return e.login(t)},type:"submit"},"Entrar")))}}]),n}(r.a.Component),C=Object(u.b)(null,(function(e){return{loginDispatch:function(t){return e({type:"USER",value:t})}}}))(O),D=n(31),x=n.n(D);function k(){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return delete(t=e.sent).USDT,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return delete(t=e.sent).USDT,n=Object.keys(t),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={expense:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},a.onChange=a.onChange.bind(Object(v.a)(a)),a.submit=a.submit.bind(Object(v.a)(a)),a.resetValues=a.resetValues.bind(Object(v.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.currenceDispatch,e.next=3,T();case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"resetValues",value:function(){this.setState({expense:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"})}},{key:"submit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,i,c,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state,a=n.expense,r=n.description,i=n.currency,c=n.method,o=n.tag,e.t0=x()()-1,e.t1=a,e.t2=r,e.t3=i,e.t4=c,e.t5=o,e.next=10,k();case 10:e.t6=e.sent,u={id:e.t0,value:e.t1,description:e.t2,currency:e.t3,method:e.t4,tag:e.t5,exchangeRates:e.t6},(0,this.props.submitDispatch)(u),this.resetValues();case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.expense,a=t.description,i=t.currency,c=t.method,o=t.tag,u=this.props.currencies;return r.a.createElement("form",null,r.a.createElement("input",{"data-testid":"value-input",type:"number",name:"expense",value:n,onChange:this.onChange}),r.a.createElement("input",{"data-testid":"description-input",type:"text",name:"description",value:a,onChange:this.onChange}),r.a.createElement("label",{htmlFor:"moeda"},"Moeda",r.a.createElement("select",{id:"moeda","data-testid":"currency-input",name:"currency",value:i,onChange:this.onChange},u.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("select",{"data-testid":"method-input",name:"method",value:c,onChange:this.onChange},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito")),r.a.createElement("select",{"data-testid":"tag-input",name:"tag",value:o,onChange:this.onChange},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")),r.a.createElement("button",{type:"submit",onClick:function(t){return e.submit(t)}},"Adicionar despesa"))}}]),n}(r.a.Component),M=Object(u.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{submitDispatch:function(t){return e(g(t))},currenceDispatch:function(t){return e({type:"INITIALS",value:t})}}}))(L),I=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;Object(m.a)(this,n);var r=(a=t.call(this,e)).props.editData[0],i=r.id,c=r.value,o=r.description,u=r.currency,l=r.method,s=r.tag,d=r.exchangeRates;return a.state={id:i,value:c,description:o,currency:u,method:l,tag:s,exchangeRates:d},a.onChange=a.onChange.bind(Object(v.a)(a)),a.submit=a.submit.bind(Object(v.a)(a)),a}return Object(b.a)(n,[{key:"onChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"submit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,i,c,o,u,l,s,p,h,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=this.state,a=n.id,r=n.value,i=n.description,c=n.currency,o=n.method,u=n.tag,l=n.exchangeRates,s={id:a,value:r,description:i,currency:c,method:o,tag:u,exchangeRates:l},p=this.props,h=p.submitDispatch,m=p.editModeDispatch,h(s),m(!1);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.currencies,n=this.state,a=n.value,i=n.description,c=n.currency,o=n.method,u=n.tag;return r.a.createElement("form",null,r.a.createElement("input",{"data-testid":"value-input",type:"number",name:"value",onChange:this.onChange,value:a}),r.a.createElement("input",{"data-testid":"description-input",type:"text",name:"description",value:i,onChange:this.onChange}),r.a.createElement("label",{htmlFor:"moeda"},"Moeda",r.a.createElement("select",{id:"moeda","data-testid":"currency-input",name:"currency",value:c,onChange:this.onChange},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("select",{"data-testid":"method-input",name:"method",value:o,onChange:this.onChange},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito")),r.a.createElement("select",{"data-testid":"tag-input",name:"tag",value:u,onChange:this.onChange},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")),r.a.createElement("button",{type:"submit",onClick:function(t){return e.submit(t)},style:{backgroundColor:"green"}},"Editar despesa"))}}]),n}(r.a.Component),R=Object(u.b)((function(e){return{editData:e.wallet.editData,currencies:e.wallet.currencies}}),(function(e){return{submitDispatch:function(t){return e(g(t))},editModeDispatch:function(t){return e(y(t))}}}))(I),A=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.expenses.map((function(e){var t=e.value,n=e.currency,a=e.exchangeRates;return parseFloat(t*a[n].ask)})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",null,r.a.createElement("div",{"data-testid":"email-field"},t),r.a.createElement("div",{"data-testid":"total-field"},n.toFixed(2)),r.a.createElement("div",{"data-testid":"header-currency-field"},"BRL"))}}]),n}(r.a.Component),F=Object(u.b)((function(e){return{user:e.user.email,expenses:e.wallet.expenses}}),null)(A),N=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).btnDelete=a.btnDelete.bind(Object(v.a)(a)),a}return Object(b.a)(n,[{key:"btnDelete",value:function(e){(0,this.props.idDispatch)(e)}},{key:"render",value:function(){var e=this,t=this.props.id;return r.a.createElement("button",{"data-testid":"delete-btn",type:"button",onClick:function(){return e.btnDelete(t)}},r.a.createElement("span",{role:"img","aria-label":"Excluir"},"\u274c"))}}]),n}(r.a.Component),U=Object(u.b)(null,(function(e){return{idDispatch:function(t){return e(j(t))}}}))(N),V=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).btnEdit=a.btnEdit.bind(Object(v.a)(a)),a}return Object(b.a)(n,[{key:"btnEdit",value:function(e){var t=this.props,n=t.idDispatch,a=t.editModeDispatch,r=t.deleteDispatch;n(e),a(!0),r(e)}},{key:"render",value:function(){var e=this,t=this.props.id;return r.a.createElement("button",{"data-testid":"edit-btn",type:"button",onClick:function(){return e.btnEdit(t)}},r.a.createElement("span",{role:"img","aria-label":"Excluir"},"\u267b\ufe0f"))}}]),n}(r.a.Component),_=Object(u.b)(null,(function(e){return{idDispatch:function(t){return e({type:"EDIT_LINE",value:t})},deleteDispatch:function(t){return e(j(t))},editModeDispatch:function(t){return e(y(t))}}}))(V),z=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.expenses;return r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,e.map((function(e){var t=e.id,n=e.description,a=e.tag,i=e.method,c=e.value,o=e.currency,u=e.exchangeRates,l=parseFloat(u[o].ask),s=u[o].name.split("/")[0];return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,i),r.a.createElement("td",null,c),r.a.createElement("td",null,s),r.a.createElement("td",null,l.toFixed(2)),r.a.createElement("td",null,(c*l).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",{style:{display:"flex",justifyContent:"space-evenly"}},r.a.createElement(_,{id:t}),r.a.createElement(U,{id:t})))}))))}}]),n}(r.a.Component),W=Object(u.b)((function(e){return{expenses:e.wallet.expenses}}),null)(z),B=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.editMode;return r.a.createElement("div",null,r.a.createElement(F,null),e?r.a.createElement(R,null):r.a.createElement(M,null),r.a.createElement(W,null))}}]),n}(r.a.Component),J=Object(u.b)((function(e){return{editMode:e.wallet.editMode}}),null)(B);var G=function(){return r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:C}),r.a.createElement(l.a,{path:"/carteira",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(16),$=n(32),q=n(33),H=n(11),K={email:""};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(H.a)(Object(H.a)({},e),{},{email:t.value});default:return e}},X=n(34),Y={currencies:[],expenses:[],editData:{},editMode:!1};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WALLET":return Object(H.a)(Object(H.a)({},e),{},{expenses:[].concat(Object(X.a)(e.expenses),[t.value])});case"INITIALS":return Object(H.a)(Object(H.a)({},e),{},{currencies:t.value});case"DELETE_LINE":return Object(H.a)(Object(H.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.value}))});case"EDIT_LINE":var n=e.expenses.filter((function(e){return e.id===t.value}));return Object(H.a)(Object(H.a)({},e),{},{editData:n});case"EDIT_MODE":return Object(H.a)(Object(H.a)({},e),{},{editMode:t.value});default:return e}},ee=Object(P.combineReducers)({user:Q,wallet:Z}),te=Object(P.createStore)(ee,Object($.composeWithDevTools)(Object(P.applyMiddleware)(q.a)));c.a.render(r.a.createElement(u.a,{store:te},r.a.createElement(o.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.935a4396.chunk.js.map