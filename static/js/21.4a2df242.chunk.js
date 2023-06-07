"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{3309:function(n,e,r){r.d(e,{Bc:function(){return m},__:function(){return x},gN:function(){return p},l0:function(){return l},zx:function(){return f}});var t,o,i,a,c,d=r(168),s=r(6444),u=r(5705),l=(0,s.ZP)(u.l0)(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),m=(0,s.ZP)(u.Bc)(o||(o=(0,d.Z)(["\n  color: red;\n"]))),p=(0,s.ZP)(u.gN)(i||(i=(0,d.Z)(["\n  @media screen and (min-width: 320px) {\n    min-width: 220px;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n  }\n\n  border-right: none;\n  border-bottom: 2px solid rgb(33, 150, 243);\n  border-left: none;\n  border-top: none;\n\n  outline: none;\n\n  background-color: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: white;\n\n  &:focus {\n    border-bottom: 2px solid rgba(33, 243, 215, 0.6);\n    border-left: none;\n    border-top: none;\n\n    outline: none;\n  }\n"]))),x=s.ZP.label(a||(a=(0,d.Z)(["\n  @media screen and (min-width: 320px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 300px;\n  color: white;\n"]))),f=s.ZP.button(c||(c=(0,d.Z)(["\n  @media screen and (min-width: 320px) {\n    padding: 5px;\n\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 5px 10px;\n\n    font-size: 16px;\n  }\n\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: #2196f3;\n  color: #ffffff;\n\n  border-radius: 4px;\n  border: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #188ce8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])))},7687:function(n,e,r){r.d(e,{I:function(){return d},_:function(){return c}});var t,o,i=r(168),a=r(6444),c=a.ZP.label(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),d=a.ZP.input(o||(o=(0,i.Z)(["\n  @media screen and (min-width: 320px) {\n    min-width: 220px;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n  }\n\n  margin-bottom: 15px;\n\n  border-right: none;\n  border-bottom: 2px solid rgb(33, 150, 243);\n  border-left: none;\n  border-top: none;\n\n  outline: none;\n\n  background-color: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: white;\n\n  &:focus {\n    border-bottom: 2px solid rgba(33, 243, 215, 0.6);\n    border-left: none;\n    border-top: none;\n\n    outline: none;\n  }\n"])))},5021:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(1413),o=r(5705),i=r(6727),a=r(3309),c=r(9434),d=r(6916),s=function(n){return n.contacts.contacts},u=function(n){return n.filter},l=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},p=(0,d.P1)([s,u],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=r(3634),f=r(184),b=i.Ry().shape({name:i.Z_().required("Must be required"),number:i.Z_().required("Must be required")}),h=function(){var n=(0,c.I0)(),e=(0,c.v9)(s),r=function(r){var t=r.name,o=r.number;if(function(n){var r=n.name,t=n.number,o=r.toLowerCase().trim(),i=t.trim(),a=e.find((function(n){return n.name.toLowerCase()===o||n.number===i}));return Boolean(a)}({name:t,number:o}))return alert("".concat(t," or ").concat(o," is already in contacts."));n((0,x.uK)({name:t,number:o}))};return(0,f.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:b,onSubmit:function(n,e){var o=e.resetForm;r((0,t.Z)({},n)),o()},children:(0,f.jsxs)(a.l0,{children:[(0,f.jsxs)(a.__,{children:["Name",(0,f.jsx)(a.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"off",required:!0})]}),(0,f.jsx)(a.Bc,{name:"name",component:"div"}),(0,f.jsxs)(a.__,{children:["Number",(0,f.jsx)(a.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"off",required:!0})]}),(0,f.jsx)(a.Bc,{name:"number",component:"div"}),(0,f.jsx)(a.zx,{type:"submit",children:"Add contact"})]})})},g=r(297),v=r(2791),j=function(){var n=(0,c.I0)(),e=(0,c.v9)(p),r=(0,c.v9)(l);(0,v.useEffect)((function(){n((0,x.yF)())}),[n]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:e.map((function(e){var t=e.id,o=e.name,i=e.number;return(0,f.jsxs)(g.HC,{children:[(0,f.jsxs)(g.r8,{children:[(0,f.jsxs)(g.VG,{children:[o,": "]}),(0,f.jsxs)(g.Mr,{children:[i," "]})]}),(0,f.jsx)(g.zx,{disabled:r,type:"button",onClick:function(){return e=t,void n((0,x.GK)(e));var e},children:"Delete"})]},t)}))})})},w=r(4808),Z=r(7687),y=function(){var n=(0,c.I0)(),e=(0,c.v9)(u);return(0,f.jsxs)(Z._,{children:[(0,f.jsx)(g.xv,{children:"Find contacts by name"}),(0,f.jsx)(Z.I,{type:"text",value:e,onChange:function(e){var r=e.target.value.trim();n((0,w.T)(r))}})]})},z=r(966),C=r(4270),_=function(){var n=(0,c.I0)(),e=(0,c.v9)(l),r=(0,c.v9)(m),t=(0,c.v9)(s),o=(0,c.v9)(p);return(0,v.useEffect)((function(){n((0,x.yF)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C.q,{children:"Contacts"}),(0,f.jsx)(h,{}),e&&(0,f.jsx)(z.a,{}),0!==t.length&&(0,f.jsxs)("div",{children:[(0,f.jsx)(y,{}),0!==o.length&&(0,f.jsx)(j,{})]}),r&&(0,f.jsx)("b",{children:r})]})}}}]);
//# sourceMappingURL=21.4a2df242.chunk.js.map