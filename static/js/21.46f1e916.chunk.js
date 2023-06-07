"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{3309:function(n,e,r){r.d(e,{Bc:function(){return m},__:function(){return x},gN:function(){return f},l0:function(){return l},zx:function(){return p}});var t,a,i,o,c,u=r(168),s=r(6444),d=r(5705),l=(0,s.ZP)(d.l0)(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),m=(0,s.ZP)(d.Bc)(a||(a=(0,u.Z)(["\n  color: red;\n"]))),f=(0,s.ZP)(d.gN)(i||(i=(0,u.Z)(["\n  outline: transparent;\n\n  &:focus {\n    border: 2px solid rgba(33, 243, 215, 0.6);\n  }\n"]))),x=s.ZP.label(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 300px;\n  color: white;\n"]))),p=s.ZP.button(c||(c=(0,u.Z)(["\n  padding: 5px 10px;\n\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: #2196f3;\n  color: #ffffff;\n\n  border-radius: 4px;\n  border: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #188ce8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])))},7687:function(n,e,r){r.d(e,{I:function(){return u},_:function(){return c}});var t,a,i=r(168),o=r(6444),c=o.ZP.label(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),u=o.ZP.input(a||(a=(0,i.Z)(["\n  min-width: 300px;\n\n  outline: transparent;\n\n  &:focus {\n    border: 2px solid rgba(33, 243, 215, 0.6);\n  }\n"])))},5021:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t=r(1413),a=r(5705),i=r(6727),o=r(3309),c=r(9434),u=r(6916),s=function(n){return n.contacts.contacts},d=function(n){return n.filter},l=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},f=(0,u.P1)([s,d],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=r(3634),p=r(184),h=i.Ry().shape({name:i.Z_().required("Must be required"),number:i.Z_().required("Must be required")}),b=function(){var n=(0,c.I0)(),e=(0,c.v9)(s),r=function(r){var t=r.name,a=r.number;if(function(n){var r=n.name,t=n.number,a=r.toLowerCase().trim(),i=t.trim(),o=e.find((function(n){return n.name.toLowerCase()===a||n.number===i}));return Boolean(o)}({name:t,number:a}))return alert("".concat(t," or ").concat(a," is already in contacts."));n((0,x.uK)({name:t,number:a}))};return(0,p.jsx)(a.J9,{initialValues:{name:"",number:""},validationSchema:h,onSubmit:function(n,e){var a=e.resetForm;r((0,t.Z)({},n)),a()},children:(0,p.jsxs)(o.l0,{children:[(0,p.jsxs)(o.__,{children:["Name",(0,p.jsx)(o.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsx)(o.Bc,{name:"name",component:"div"}),(0,p.jsxs)(o.__,{children:["Number",(0,p.jsx)(o.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)(o.Bc,{name:"number",component:"div"}),(0,p.jsx)(o.zx,{type:"submit",children:"Add contact"})]})})},v=r(297),g=r(2791),j=function(){var n=(0,c.I0)(),e=(0,c.v9)(f),r=(0,c.v9)(l);(0,g.useEffect)((function(){n((0,x.yF)())}),[n]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:e.map((function(e){var t=e.id,a=e.name,i=e.number;return(0,p.jsxs)(v.HC,{children:[(0,p.jsxs)(v.r8,{children:[(0,p.jsxs)(v.VG,{children:[a,": "]}),(0,p.jsxs)(v.Mr,{children:[i," "]})]}),(0,p.jsx)(v.zx,{disabled:r,type:"button",onClick:function(){return e=t,void n((0,x.GK)(e));var e},children:"Delete"})]},t)}))})})},Z=r(4808),y=r(7687),_=function(){var n=(0,c.I0)(),e=(0,c.v9)(d);return(0,p.jsxs)(y._,{children:[(0,p.jsx)(v.xv,{children:"Find contacts by name"}),(0,p.jsx)(y.I,{type:"text",value:e,onChange:function(e){var r=e.target.value.trim();n((0,Z.T)(r))}})]})},w=r(966),C=r(4270),k=function(){var n=(0,c.I0)(),e=(0,c.v9)(l),r=(0,c.v9)(m),t=(0,c.v9)(s),a=(0,c.v9)(f);return(0,g.useEffect)((function(){n((0,x.yF)())}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.q,{children:"Contacts"}),(0,p.jsx)(b,{}),e&&(0,p.jsx)(w.a,{}),0!==t.length&&(0,p.jsxs)("div",{children:[(0,p.jsx)(_,{}),0!==a.length&&(0,p.jsx)(j,{})]}),r&&(0,p.jsx)("b",{children:r})]})}}}]);
//# sourceMappingURL=21.46f1e916.chunk.js.map