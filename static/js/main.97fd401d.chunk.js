(this["webpackJsonpCustomers-saver"]=this["webpackJsonpCustomers-saver"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/headerimage.0a879f77.png"},30:function(e,n,t){e.exports=t(43)},35:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(24),o=t.n(i),u=(t(35),t(5)),c=t(4),l=t(1),s=t(13),m=t(3),d=t.n(m),p=t(6),f=t(25),h=t(26),b="https://frebi.willandskill.eu/",g=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"register",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"auth/users/"),e.abrupt("return",fetch(t,{method:"POST",headers:this.getPublicHeaders(),body:JSON.stringify(n)}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"activateUser",value:function(){var e=Object(p.a)(d.a.mark((function e(n,t){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(b,"auth/users/activate/"),a={uid:n,token:t},e.abrupt("return",fetch(r,{method:"POST",headers:this.getPublicHeaders(),body:JSON.stringify(a)}));case 3:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"/api-token-auth/"),e.abrupt("return",fetch(t,{method:"POST",headers:this.getPublicHeaders(),body:JSON.stringify(n)}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getCustomerList",value:function(){var e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b,"/api/v1/customers"),e.abrupt("return",fetch(n,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createCustomer",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"/api/v1/customers"),e.abrupt("return",fetch(t,{method:"POST",headers:this.getPrivateHeaders(),body:JSON.stringify(n)}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMe",value:function(){var e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b,"/api/v1/me"),e.abrupt("return",fetch(n,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDetail",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"/api/v1/customers/").concat(n,"/"),e.abrupt("return",fetch(t,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"editCustomerDetail",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.data,a="".concat(b,"/api/v1/customers/").concat(t,"/"),e.abrupt("return",fetch(a,{method:"PATCH",headers:this.getPrivateHeaders(),body:JSON.stringify(r)}));case 3:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"deleteCustomer",value:function(){var e=Object(p.a)(d.a.mark((function e(n){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,n.data,r="".concat(b,"/api/v1/customers/").concat(t,"/"),e.abrupt("return",fetch(r,{method:"DELETE",headers:this.getPrivateHeaders()}));case 3:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"setToken",value:function(e){localStorage.setItem("BUSINESS_TOKEN",e)}},{key:"getToken",value:function(){return localStorage.getItem("BUSINESS_TOKEN")}},{key:"getPublicHeaders",value:function(){return{"Content-Type":"application/json"}}},{key:"getPrivateHeaders",value:function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.getToken())}}}]),e}(),v=t(2),E=t(18),x=t.n(E);function y(){var e=Object(l.a)(['\n  width: 50%;\n  height: 250px;\n  color: #222831;\n  position: absolute;\n  text-align: center;\n  left: 10px;\n  transform: rotate(-20deg);\n  font-family: "Dancing Script", cursive;\n  opacity: 0.85;\n  border-radius: 50%;\n\n  p {\n    font-size: 20px;\n    padding-top: 20px 0px;\n  }\n']);return y=function(){return e},e}function k(){var e=Object(l.a)(["\n  width: 100%;\n  height: 435px;\n  object-fit: cover;\n"]);return k=function(){return e},e}function j(){var e=Object(l.a)(["\n  justify-content: center;\n  display: flex;\n"]);return j=function(){return e},e}var O=v.a.div(j()),w=v.a.img(k()),N=v.a.div(y());function q(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement(w,{src:x.a,alt:"header"}),a.a.createElement(N,null,a.a.createElement("p",null,"Vanessa Suthat "),a.a.createElement("p",null,"JavaScript 3 med Hassan Milan"))))}function C(){var e=Object(l.a)(['\n  padding: 0 35px;\n  margin: 30px auto 50px;\n  border-radius: 7px;\n  background: #e11d74;\n  color: white;\n  border: none;\n  font-size: 25px;\n  font-family: "Peddana", serif;\n']);return C=function(){return e},e}function L(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin 0 auto;\n  \n"]);return L=function(){return e},e}function S(){var e=Object(l.a)(["\n  width: 95%;\n  margin: auto;\n  background-color: black;\n\n  input {\n    font-size: 16px;\n    padding: 8px;\n    border: none;\n    border-bottom: 1px solid #838383;\n    margin: 40px 13px 0;\n    background-color: black;\n    color: white;\n  }\n  p {\n    color: #e11d74;\n  }\n"]);return S=function(){return e},e}function P(){var e=Object(l.a)(['\n  text-align: center;\n  color: #eeeeee;\n  background-color: black;\n\n  h2 {\n    font-size: 35px;\n    font-family: "Peddana", serif;\n    text-decoration: underline;\n    text-decoration-color: #fab95b;\n    margin: 0;\n  }\n  p {\n    font-size: 17px;\n  }\n']);return P=function(){return e},e}var T=v.a.div(P()),z=v.a.div(S()),A=v.a.div(L()),H=v.a.button(C());function U(){var e=Object(s.a)(),n=e.register,t=e.handleSubmit,r=e.errors,i=new g;return a.a.createElement("div",null,a.a.createElement(q,null),a.a.createElement(T,null,a.a.createElement("h2",null,"Register"),a.a.createElement("p",null,"Enter details to register"),a.a.createElement(z,null,a.a.createElement("form",{onSubmit:t((function(e,n){!function(e){i.register(e)}(e),n.target.reset()}))},a.a.createElement(A,null,a.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",ref:n({required:!0,minLength:1,maxLength:30})}),r.firstName&&"required"===r.firstName.type&&a.a.createElement("p",null,"This is required."),r.firstName&&"minLength"===r.firstName.type&&a.a.createElement("p",null,"Customer name required min 1 characters. "),r.firstName&&"maxLength"===r.firstName.type&&a.a.createElement("p",null,"Customer name required max 30 characters. "),a.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",ref:n({required:!0,minLength:1,maxLength:30})}),r.lastName&&"required"===r.lastName.type&&a.a.createElement("p",null,"This is required."),r.lastName&&"minLength"===r.lastName.type&&a.a.createElement("p",null,"Customer name required min 1 characters. "),r.lastName&&"minLength"===r.lastName.type&&a.a.createElement("p",null,"Customer name required max 30 characters. "),a.a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:n({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}),r.email&&"required"===r.email.type&&a.a.createElement("p",null,"This is required."),r.email&&"pattern"===r.email.type&&a.a.createElement("p",null,"Invalid email address."),a.a.createElement("input",{type:"password",name:"password",placeholder:"Password",ref:n({required:!0})}),r.password&&"required"===r.password.type&&a.a.createElement("p",null,"This is required."),a.a.createElement("input",{type:"text",name:"organisationName",placeholder:"Organisation Name",ref:n({required:!0,minLength:3})}),r.organisationName&&"required"===r.organisationName.type&&a.a.createElement("p",null,"This is required."),r.organisationName&&"minLength"===r.organisationName.type&&a.a.createElement("p",null,"Customer name required minimum 3 characters. "),a.a.createElement("input",{type:"number",name:"organisationKind",placeholder:"Organisation Kind (0,1,2)",ref:n({required:!0,maxLength:1})}),r.organisationKind&&"required"===r.organisationKind.type&&a.a.createElement("p",null,"You can type in 0, 1 or 2 in this field. ")),a.a.createElement(H,{type:"submit"},"Register")))))}function R(){return a.a.createElement("div",null,a.a.createElement(U,null))}function Z(){var e=Object(l.a)(['\n  color: #e11d74;\n  font-family: "Peddana", serif;\n  background-color: black;\n  text-align: center;\n  height: 100vh;\n\n  p {\n    font-size: 30px;\n    margin: 0;\n    padding: 20px 0 0 0;\n  }\n\n  button {\n    background: #e11d74;\n    border: none;\n    border-radius: 7px;\n    font-size: 25px;\n    color: white;\n    font-family: "Peddana", serif;\n    margin-bottom: 30px;\n    padding: 0 35px;\n  }\n']);return Z=function(){return e},e}var I=v.a.div(Z());function D(e){var n=e.token,t=e.setToken,r=e.uid,i=e.setUid,o=Object(c.f)(),u=new g;return a.a.createElement("div",null,a.a.createElement(q,null),a.a.createElement(I,null,a.a.createElement("p",null,"Activate Account"),a.a.createElement("button",{onClick:function(){u.activateUser(r,n).then((function(){i(null),t(null),o.push("/login")}))}},"Activate User")))}function J(){var e=Object(l.a)(["\n  color: red;\n  font-size: 25px;\n  padding-bottom: 0;\n  width: 80%;\n  text-align: center;\n"]);return J=function(){return e},e}function W(){var e=Object(l.a)(['\n  width: 80%;\n  margin: auto;\n\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  input {\n    font-size: 25px;\n    padding: 10px;\n    margin: 10px;\n    border: none;\n    border-bottom: 1px solid #222831;\n    background-color: black;\n    font-family: "Peddana", serif;\n    color: white;\n  }\n  p {\n    margin: 0;\n    color: red;\n    font-size: 25px;\n    padding: 0;\n  }\n\n  button {\n    font-size: 25px;\n    margin-top: 40px;\n    background: #e11d74;\n    border: none;\n    color: white;\n    border-radius: 7px;\n    font-family: "Peddana", serif;\n  }\n']);return W=function(){return e},e}function K(){var e=Object(l.a)(['\n  background-color: black;\n  font-family: "Peddana", serif;\n  font-size: 35px;\n  height: 100vh;\n  color: #838383;\n\n  p {\n    margin: 0;\n    padding: 30px;\n  }\n']);return K=function(){return e},e}var V=v.a.div(K()),B=v.a.div(W()),M=v.a.div(J());function _(){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1],o=new g,l=Object(c.f)(),m=Object(s.a)(),d=m.register,p=m.handleSubmit,f=m.errors;return a.a.createElement(V,null,a.a.createElement("p",null,"Your account is now active. Please Login"),t&&a.a.createElement(M,null,"Wrong email or password."),a.a.createElement(B,null,a.a.createElement("form",{onSubmit:p((function(e,n){!function(e){o.login(e).then((function(e){return e.json()})).then((function(e){var n=e.token;o.setToken(n),n?l.push("/home"):i(!0)}))}(e),n.target.reset()}))},a.a.createElement("input",{name:"email",placeholder:"Email",ref:d({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}),f.email&&"required"===f.email.type&&a.a.createElement("p",null,"Wrong email address."),f.email&&"pattern"===f.email.type&&a.a.createElement("p",null,"Invalid email address."),a.a.createElement("input",{name:"password",placeholder:"Password",ref:d({required:!0})}),f.password&&"required"===f.password.type&&a.a.createElement("p",null,"This is required."),a.a.createElement("button",{type:"submit"},"Login"))))}function $(){return a.a.createElement("div",null,a.a.createElement(_,null))}var Y=Object(r.createContext)([]),F=Object(r.createContext)({});function G(){var e=Object(l.a)(['\n  padding: 0 35px;\n  margin: 30px auto 50px;\n  border-radius: 7px;\n  background: #e11d74;\n  color: white;\n  border: none;\n  font-size: 25px;\n  font-family: "Peddana", serif;\n']);return G=function(){return e},e}function Q(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin 0 auto;\n  \n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\n  width: 95%;\n  margin: auto;\n  background-color: black;\n\n  input {\n    font-size: 16px;\n    padding: 8px;\n    border: none;\n    border-bottom: 1px solid #838383;\n    margin: 40px 13px 0;\n    background-color: black;\n    color: white;\n  }\n  p {\n    color: #e11d74;\n  }\n"]);return X=function(){return e},e}var ee=v.a.div(X()),ne=v.a.div(Q()),te=v.a.button(G());function re(e){var n=e.handleCreateCustomer,t=e.handleEditCustomer,r=e.preloadedValues,i=Object(s.a)({defaultValues:r}),o=i.register,u=i.handleSubmit,c=i.errors;return console.log("hej fr\xe5n customer form"),a.a.createElement(ee,null,a.a.createElement("form",{onSubmit:u((function(e,r){if(r.target.reset(),n){var a=e.vatNr.substring(0,2).toUpperCase().concat(e.vatNr.substring(2));e.vatNr=a,n(e)}else t&&t(e)}))},a.a.createElement(ne,null,a.a.createElement("input",{type:"text",name:"name",placeholder:"Customer Name",ref:o({required:!0,minLength:3,maxLength:50})}),c.name&&"required"===c.name.type&&a.a.createElement("p",null,a.a.createElement("span",null,"This is required.")),c.name&&"minLength"===c.name.type&&a.a.createElement("p",null,"Customer name required minimum 3 characters. "),c.name&&"maxLength"===c.name.type&&a.a.createElement("p",null,"Customer name required maximum 50 characters. "),a.a.createElement("input",{type:"number",name:"organisationNr",placeholder:"Organisation Number",ref:o({required:!0,minLength:10,maxLength:15})}),c.organisationNr&&"required"===c.organisationNr.type&&a.a.createElement("p",null,"This is required."),c.organisationNr&&"minLength"===c.organisationNr.type&&a.a.createElement("p",null,"Required minimum 10 numbers."),c.organisationNr&&"maxLength"===c.organisationNr.type&&a.a.createElement("p",null,"Required maximum 15 numbers."),a.a.createElement("input",{type:"text",name:"vatNr",placeholder:"Vat number",ref:o({required:!0,minLength:12,maxLength:12,pattern:{value:/[SE-se]+[0-9]/}})}),c.vatNr&&"required"===c.vatNr.type&&a.a.createElement("p",null,"This is required."),c.vatNr&&"pattern"===c.vatNr.type&&a.a.createElement("p",null,"Required SE and 10 numbers."),c.vatNr&&"minLength"===c.vatNr.type&&a.a.createElement("p",null,"Required SE and 10 numbers."),c.vatNr&&"maxLength"===c.vatNr.type&&a.a.createElement("p",null,"Required SE and 10 numbers."),a.a.createElement("input",{type:"text",name:"reference",placeholder:"Reference",ref:o({required:!0})}),c.reference&&"required"===c.reference.type&&a.a.createElement("p",null,"This is required."),a.a.createElement("input",{type:"number",name:"paymentTerm",placeholder:"Payment Term",ref:o({required:!0,maxLength:20})}),c.paymentTerm&&"required"===c.paymentTerm.type&&a.a.createElement("p",null,"This is required."),c.paymentTerm&&"maxLength"===c.paymentTerm.type&&a.a.createElement("p",null,"Max 20."),a.a.createElement("input",{type:"text",name:"website",placeholder:"Website",ref:o({required:!0,pattern:{value:/www.+[a-zA-Z0-9.-]+\.[a-z]/}})}),c.website&&"required"===c.website.type&&a.a.createElement("p",null,"This is required."),c.website&&"pattern"===c.website.type&&a.a.createElement("p",null,"Invalid website address."),a.a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:o({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}),c.email&&"required"===c.email.type&&a.a.createElement("p",null,"This is required."),c.email&&"pattern"===c.email.type&&a.a.createElement("p",null,"Invalid email address."),a.a.createElement("input",{type:"number",name:"phoneNumber",placeholder:"Phone Number",ref:o({required:!0})}),c.phoneNumber&&"required"===c.phoneNumber.type&&a.a.createElement("p",null,"This is required.")),a.a.createElement(te,{type:"submit"},"Submit")))}function ae(){var e=Object(l.a)(["\n  background-color: black;\n  width: 95%;\n  color: #e11d74;\n  font-size: 20px;\n  padding: 15px 0 15px 0;\n  margin: 0 auto;\n"]);return ae=function(){return e},e}function ie(){var e=Object(l.a)(["\n  background-color: #e11d74;\n  text-align: center;\n  margin: 0 auto;\n  padding-bottom: 15px;\n"]);return ie=function(){return e},e}var oe=v.a.div(ie()),ue=v.a.div(ae());function ce(e){var n=e.createCustomerList,t=new g;return a.a.createElement(oe,null,a.a.createElement(ue,null,"Create new Customer"),a.a.createElement(re,{handleCreateCustomer:function(e){t.createCustomer(e).then((function(e){return e.json()})).then((function(e){n()})).catch((function(e){console.log("error",e)}))}}))}var le=t(10);function se(){var e=Object(l.a)(["\n  font-size: 30px;\n  padding: 0 10% 0 10%;\n  color: #eeeeee;\n  border-bottom: 5px solid #fab95b;\n  background-color: black;\n\n  span {\n    color: #e11d74;\n    margin-left: 10px;\n  }\n  p {\n    font-size: 23px;\n    margin: 0;\n  }\n  p:hover {\n    background-color: black;\n    color: #e11d74;\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(l.a)(["\n  // color: #222831;\n  font-size: 55px;\n\n  position: absolute;\n  top: 50px;\n  left: 25%;\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    font-size: 75px;\n    color: #e11d74;\n  }\n"]);return me=function(){return e},e}function de(){var e=Object(l.a)(['\n  background-color: #eeeeee;\n  font-family: "Peddana", serif;\n']);return de=function(){return e},e}function pe(){var e=Object(l.a)(["\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n"]);return pe=function(){return e},e}var fe=v.a.img(pe()),he=v.a.div(de()),be=v.a.div(me()),ge=v.a.div(se());function ve(){var e=Object(r.useContext)(F),n=e.user,t=e.setUser,i=new g;return Object(r.useEffect)((function(){i.getMe().then((function(e){return e.json()})).then((function(e){t(e)}))}),[]),a.a.createElement(he,null,a.a.createElement(fe,{src:x.a,alt:"header"}),a.a.createElement("div",null,a.a.createElement(be,null,a.a.createElement(le.b,{to:"/home"},"Home "))),a.a.createElement(ge,null,"Welcome:",a.a.createElement("span",null,n.firstName," ",n.lastName),a.a.createElement("p",null," ",n.email)))}function Ee(){var e=Object(l.a)(["\n  color: #e11d74;\n  background-color: black;\n  font-size: 30px;\n  text-align: center;\n  margin: 0;\n  padding: 30px;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(l.a)(["\n  background-color: #e11d74;\n\n  a {\n    text-decoration: none;\n  }\n  &: hover "," {\n    background-color: black;\n    color: #e11d74;\n    border-radius: 10px;\n  }\n"]);return xe=function(){return e},e}function ye(){var e=Object(l.a)(["\n  color: black;\n  font-size: 30px;\n  margin: 0 auto;\n  width: 500px;\n  text-align: center;\n"]);return ye=function(){return e},e}function ke(){var e=Object(l.a)(['\n  background-color: #eeeeee;\n  font-family: "Peddana", serif;\n']);return ke=function(){return e},e}var je=v.a.div(ke()),Oe=v.a.p(ye()),we=v.a.div(xe(),Oe),Ne=v.a.p(Ee());function qe(e){var n=e.createCustomerList,t=Object(r.useContext)(Y).customerList;return Object(r.useEffect)((function(){n()}),[]),a.a.createElement(je,null,a.a.createElement(ve,null),t.length?t.map((function(e){var n=e.id;return a.a.createElement(we,{key:n},a.a.createElement(le.b,{to:"/customer/".concat(n),key:n},a.a.createElement(Oe,null,e.name)))})):a.a.createElement(Ne,null,"You don\xb4t have any customer yet...please create new here below"))}function Ce(){var e=new g,n=Object(r.useContext)(Y),t=n.customerList,i=n.setCustomerList;function o(){e.getCustomerList().then((function(e){return e.json()})).then((function(e){i(e.results)})).catch((function(e){console.log("error",e)}))}return a.a.createElement("div",{value:{customerList:t,setCustomerList:i}},a.a.createElement(qe,{createCustomerList:o}),a.a.createElement(ce,{createCustomerList:o}))}function Le(){var e=Object(l.a)(["\n  margin-left: 40px;\n"]);return Le=function(){return e},e}function Se(){var e=Object(l.a)(['\n  color: black;\n  background-color: #fab95b;\n  font-family: "Peddana", serif;\n  font-size: 23px;\n  border: none;\n  border-radius: 10px;\n  padding: 0 25px 0 25px;\n  text-decoration: none;\n']);return Se=function(){return e},e}function Pe(){var e=Object(l.a)(['\n  font-size: 35px;\n  font-family: "Peddana", serif;\n  padding-left: 68px;\n']);return Pe=function(){return e},e}function Te(){var e=Object(l.a)(['\n  background-color: #e11d74;\n  font-family: "Peddana", serif;\n\n  p {\n    margin: 0 0 0 65px;\n    padding-top: 30px;\n    font-size: 45px;\n  }\n']);return Te=function(){return e},e}function ze(){var e=Object(l.a)(["\n  color: black;\n  font-size: 20px;\n  margin: 0 auto;\n  width: 300px;\n  text-align: center;\n  padding: 40px;\n\n  p {\n    margin-top: 0;\n  }\n"]);return ze=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  background-color: #e11d74;\n  display: block;\n  flex-direction: column;\n"]);return Ae=function(){return e},e}var He=v.a.div(Ae()),Ue=v.a.div(ze()),Re=v.a.div(Te()),Ze=v.a.div(Pe()),Ie=v.a.button(Se()),De=Object(v.a)(Ie)(Le());function Je(e){var n=e.match.params.id,t=Object(r.useState)({}),i=Object(u.a)(t,2),o=i[0],l=i[1],s=Object(r.useState)(!1),m=Object(u.a)(s,2),d=m[0],p=m[1],f=Object(r.useContext)(F).user,h=new g,b=Object(c.f)();Object(r.useEffect)((function(){q()}),[]);var v=o.name,E=o.organisationNr,x=o.vatNr,y=o.reference,k=o.paymentTerm,j=o.website,O=o.email,w=o.phoneNumber,N={name:v,organisationNr:E,vatNr:x,reference:y,paymentTerm:k,website:j,email:O,phoneNumber:w};function q(){h.getDetail(n).then((function(e){return e.json()})).then((function(e){l(e)}))}return console.log("hajjjkk"),a.a.createElement("div",null,a.a.createElement(ve,{user:f}),a.a.createElement(Re,null,a.a.createElement("p",null,"Customer Detail"),a.a.createElement(Ze,null,a.a.createElement(Ie,{onClick:function(){p(!0)}},"Edit"),a.a.createElement(De,{onClick:function(e){h.deleteCustomer({id:n,data:e}).then((function(e){l(e),b.push("/home")}))}},"Delete"))),o&&a.a.createElement(He,null,a.a.createElement(Ue,null,a.a.createElement("p",null,"Customer: ",a.a.createElement("span",null,o.name)),a.a.createElement("p",null,"Organisation Number: ",a.a.createElement("span",null,E)),a.a.createElement("p",null,"VatNr: ",a.a.createElement("span",null,x)),a.a.createElement("p",null,"Reference: ",a.a.createElement("span",null,y)),a.a.createElement("p",null,"Payment: Term ",a.a.createElement("span",null,k)),a.a.createElement("p",null,"Website: ",a.a.createElement("span",null,j)),a.a.createElement("p",null,"Email: ",a.a.createElement("span",null,O)),a.a.createElement("p",null,"Phone: ",a.a.createElement("span",null,w)))),a.a.createElement(ce,null,a.a.createElement("div",null,d&&a.a.createElement(re,{handleEditCustomer:function(e){h.editCustomerDetail({id:n,data:e}).then((function(e){return e.json()})).then((function(e){q(),p(!1)}))},preloadedValues:N}))))}var We=function(){var e=Object(c.f)().location.search,n=new URLSearchParams(e),t=Object(r.useState)([]),i=Object(u.a)(t,2),o=i[0],l=i[1],s=Object(r.useState)({}),m=Object(u.a)(s,2),d=m[0],p=m[1],f=Object(r.useState)(n.get("uid")),h=Object(u.a)(f,2),b=h[0],g=h[1],v=Object(r.useState)(n.get("token")),E=Object(u.a)(v,2),x=E[0],y=E[1];return a.a.createElement("div",null,a.a.createElement(c.c,null,a.a.createElement(F.Provider,{value:{user:d,setUser:p}},a.a.createElement(Y.Provider,{value:{customerList:o,setCustomerList:l}},a.a.createElement(c.a,{path:"/customer/:id",render:function(e){return a.a.createElement(Je,e)}}),a.a.createElement(c.a,{path:"/home"},a.a.createElement(Ce,null)),a.a.createElement(c.a,{path:"/login"},b&&x?a.a.createElement(D,{token:x,setToken:y,uid:b,setUid:g}):a.a.createElement($,null)),a.a.createElement(c.a,{exact:!0,path:"/"},a.a.createElement(R,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(le.a,null,a.a.createElement(We,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.97fd401d.chunk.js.map