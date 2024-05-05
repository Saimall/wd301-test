import{r as u,s as re,l as F,g as oe,U as M,y as A,T as we,o as b,h as N,i as Te,k as Ce,m as Le,p as V,R as z,n as ke,t as G,v as Ee,w as Ie,x as Ne,z as $e,C as U,I as W,B as Pe,D as De,E as Fe,F as Me,G as Ae,H as T,J as O,K as Ue,L as Z,M as _e,P as Be,A as ae,e as K,j as a,u as qe,f as se,Q as Qe,q as Y}from"./index-D-vOdHx0.js";import{a as ie,u as ze}from"./context-BifTD0dz.js";import{u as le,_ as D}from"./index.esm-DEKlw_0L.js";import{u as He}from"./actions-BFxTbSJ2.js";import{a as $,u as ce,b as Ve}from"./context-8wKEQGzw.js";function ue(e,t){let[s,n]=u.useState(e),o=re(e);return F(()=>n(o.current),[o,n,...t]),s}var Ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ge||{}),We=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(We||{}),Ke=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ke||{}),Je=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Je||{});function X(e,t=s=>s){let s=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Be(t(e.options.slice()),l=>l.dataRef.current.domRef.current),o=s?n.indexOf(s):null;return o===-1&&(o=null),{options:n,activeOptionIndex:o}}let Ye={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:s}=e.dataRef.current,n=e.options.findIndex(o=>s(o.dataRef.current.value));return n!==-1&&(t=n),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var s;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=X(e),o=_e(t,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:o,activationTrigger:(s=t.trigger)!=null?s:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let s=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+s).concat(e.options.slice(0,e.activeOptionIndex+s)):e.options).find(r=>{var c;return!r.dataRef.current.disabled&&((c=r.dataRef.current.textValue)==null?void 0:c.startsWith(n))}),l=o?e.options.indexOf(o):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:l,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let s={id:t.id,dataRef:t.dataRef},n=X(e,o=>[...o,s]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(s)),{...e,...n}},6:(e,t)=>{let s=X(e,n=>{let o=n.findIndex(l=>l.id===t.id);return o!==-1&&n.splice(o,1),n});return{...e,...s,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},ee=u.createContext(null);ee.displayName="ListboxActionsContext";function _(e){let t=u.useContext(ee);if(t===null){let s=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,_),s}return t}let te=u.createContext(null);te.displayName="ListboxDataContext";function B(e){let t=u.useContext(te);if(t===null){let s=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,B),s}return t}function Xe(e,t){return N(t.type,Ye,e,t)}let Ze=u.Fragment;function et(e,t){let{value:s,defaultValue:n,form:o,name:l,onChange:r,by:c=(d,f)=>d===f,disabled:m=!1,horizontal:h=!1,multiple:x=!1,...j}=e;const L=h?"horizontal":"vertical";let C=A(t),[y=x?[]:void 0,S]=we(s,r,n),[g,i]=u.useReducer(Xe,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),p=u.useRef({static:!1,hold:!1}),E=u.useRef(null),I=u.useRef(null),P=u.useRef(null),R=b(typeof c=="string"?(d,f)=>{let w=c;return(d==null?void 0:d[w])===(f==null?void 0:f[w])}:c),k=u.useCallback(d=>N(v.mode,{1:()=>y.some(f=>R(f,d)),0:()=>R(y,d)}),[y]),v=u.useMemo(()=>({...g,value:y,disabled:m,mode:x?1:0,orientation:L,compare:R,isSelected:k,optionsPropsRef:p,labelRef:E,buttonRef:I,optionsRef:P}),[y,m,x,g]);F(()=>{g.dataRef.current=v},[v]),Te([v.buttonRef,v.optionsRef],(d,f)=>{var w;i({type:1}),Ce(f,Le.Loose)||(d.preventDefault(),(w=v.buttonRef.current)==null||w.focus())},v.listboxState===0);let pe=u.useMemo(()=>({open:v.listboxState===0,disabled:m,value:y}),[v,m,y]),me=b(d=>{let f=v.options.find(w=>w.id===d);f&&J(f.dataRef.current.value)}),fe=b(()=>{if(v.activeOptionIndex!==null){let{dataRef:d,id:f}=v.options[v.activeOptionIndex];J(d.current.value),i({type:2,focus:T.Specific,id:f})}}),xe=b(()=>i({type:0})),be=b(()=>i({type:1})),ge=b((d,f,w)=>d===T.Specific?i({type:2,focus:T.Specific,id:f,trigger:w}):i({type:2,focus:d,trigger:w})),ve=b((d,f)=>(i({type:5,id:d,dataRef:f}),()=>i({type:6,id:d}))),he=b(d=>(i({type:7,id:d}),()=>i({type:7,id:null}))),J=b(d=>N(v.mode,{0(){return S==null?void 0:S(d)},1(){let f=v.value.slice(),w=f.findIndex(Q=>R(Q,d));return w===-1?f.push(d):f.splice(w,1),S==null?void 0:S(f)}})),ye=b(d=>i({type:3,value:d})),Se=b(()=>i({type:4})),Oe=u.useMemo(()=>({onChange:J,registerOption:ve,registerLabel:he,goToOption:ge,closeListbox:be,openListbox:xe,selectActiveOption:fe,selectOption:me,search:ye,clearSearch:Se}),[]),je={ref:C},q=u.useRef(null),Re=V();return u.useEffect(()=>{q.current&&n!==void 0&&Re.addEventListener(q.current,"reset",()=>{S==null||S(n)})},[q,S]),z.createElement(ee.Provider,{value:Oe},z.createElement(te.Provider,{value:v},z.createElement(ke,{value:N(v.listboxState,{0:G.Open,1:G.Closed})},l!=null&&y!=null&&Ee({[l]:y}).map(([d,f],w)=>z.createElement(Ie,{features:Ne.Hidden,ref:w===0?Q=>{var ne;q.current=(ne=Q==null?void 0:Q.closest("form"))!=null?ne:null}:void 0,...$e({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:d,value:f})})),U({ourProps:je,theirProps:j,slot:pe,defaultTag:Ze,name:"Listbox"}))))}let tt="button";function nt(e,t){var s;let n=W(),{id:o=`headlessui-listbox-button-${n}`,...l}=e,r=B("Listbox.Button"),c=_("Listbox.Button"),m=A(r.buttonRef,t),h=V(),x=b(g=>{switch(g.key){case O.Space:case O.Enter:case O.ArrowDown:g.preventDefault(),c.openListbox(),h.nextFrame(()=>{r.value||c.goToOption(T.First)});break;case O.ArrowUp:g.preventDefault(),c.openListbox(),h.nextFrame(()=>{r.value||c.goToOption(T.Last)});break}}),j=b(g=>{switch(g.key){case O.Space:g.preventDefault();break}}),L=b(g=>{if(Ue(g.currentTarget))return g.preventDefault();r.listboxState===0?(c.closeListbox(),h.nextFrame(()=>{var i;return(i=r.buttonRef.current)==null?void 0:i.focus({preventScroll:!0})})):(g.preventDefault(),c.openListbox())}),C=ue(()=>{if(r.labelId)return[r.labelId,o].join(" ")},[r.labelId,o]),y=u.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled,value:r.value}),[r]),S={ref:m,id:o,type:Pe(e,r.buttonRef),"aria-haspopup":"listbox","aria-controls":(s=r.optionsRef.current)==null?void 0:s.id,"aria-expanded":r.listboxState===0,"aria-labelledby":C,disabled:r.disabled,onKeyDown:x,onKeyUp:j,onClick:L};return U({ourProps:S,theirProps:l,slot:y,defaultTag:tt,name:"Listbox.Button"})}let ot="label";function rt(e,t){let s=W(),{id:n=`headlessui-listbox-label-${s}`,...o}=e,l=B("Listbox.Label"),r=_("Listbox.Label"),c=A(l.labelRef,t);F(()=>r.registerLabel(n),[n]);let m=b(()=>{var x;return(x=l.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}),h=u.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled}),[l]);return U({ourProps:{ref:c,id:n,onClick:m},theirProps:o,slot:h,defaultTag:ot,name:"Listbox.Label"})}let at="ul",st=oe.RenderStrategy|oe.Static;function it(e,t){var s;let n=W(),{id:o=`headlessui-listbox-options-${n}`,...l}=e,r=B("Listbox.Options"),c=_("Listbox.Options"),m=A(r.optionsRef,t),h=V(),x=V(),j=De(),L=j!==null?(j&G.Open)===G.Open:r.listboxState===0;u.useEffect(()=>{var i;let p=r.optionsRef.current;p&&r.listboxState===0&&p!==((i=Fe(p))==null?void 0:i.activeElement)&&p.focus({preventScroll:!0})},[r.listboxState,r.optionsRef]);let C=b(i=>{switch(x.dispose(),i.key){case O.Space:if(r.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),c.search(i.key);case O.Enter:if(i.preventDefault(),i.stopPropagation(),r.activeOptionIndex!==null){let{dataRef:p}=r.options[r.activeOptionIndex];c.onChange(p.current.value)}r.mode===0&&(c.closeListbox(),Z().nextFrame(()=>{var p;return(p=r.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}));break;case N(r.orientation,{vertical:O.ArrowDown,horizontal:O.ArrowRight}):return i.preventDefault(),i.stopPropagation(),c.goToOption(T.Next);case N(r.orientation,{vertical:O.ArrowUp,horizontal:O.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),c.goToOption(T.Previous);case O.Home:case O.PageUp:return i.preventDefault(),i.stopPropagation(),c.goToOption(T.First);case O.End:case O.PageDown:return i.preventDefault(),i.stopPropagation(),c.goToOption(T.Last);case O.Escape:return i.preventDefault(),i.stopPropagation(),c.closeListbox(),h.nextFrame(()=>{var p;return(p=r.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})});case O.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(c.search(i.key),x.setTimeout(()=>c.clearSearch(),350));break}}),y=ue(()=>{var i;return(i=r.buttonRef.current)==null?void 0:i.id},[r.buttonRef.current]),S=u.useMemo(()=>({open:r.listboxState===0}),[r]),g={"aria-activedescendant":r.activeOptionIndex===null||(s=r.options[r.activeOptionIndex])==null?void 0:s.id,"aria-multiselectable":r.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":r.orientation,id:o,onKeyDown:C,role:"listbox",tabIndex:0,ref:m};return U({ourProps:g,theirProps:l,slot:S,defaultTag:at,features:st,visible:L,name:"Listbox.Options"})}let lt="li";function ct(e,t){let s=W(),{id:n=`headlessui-listbox-option-${s}`,disabled:o=!1,value:l,...r}=e,c=B("Listbox.Option"),m=_("Listbox.Option"),h=c.activeOptionIndex!==null?c.options[c.activeOptionIndex].id===n:!1,x=c.isSelected(l),j=u.useRef(null),L=Me(j),C=re({disabled:o,value:l,domRef:j,get textValue(){return L()}}),y=A(t,j);F(()=>{if(c.listboxState!==0||!h||c.activationTrigger===0)return;let R=Z();return R.requestAnimationFrame(()=>{var k,v;(v=(k=j.current)==null?void 0:k.scrollIntoView)==null||v.call(k,{block:"nearest"})}),R.dispose},[j,h,c.listboxState,c.activationTrigger,c.activeOptionIndex]),F(()=>m.registerOption(n,C),[C,n]);let S=b(R=>{if(o)return R.preventDefault();m.onChange(l),c.mode===0&&(m.closeListbox(),Z().nextFrame(()=>{var k;return(k=c.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}))}),g=b(()=>{if(o)return m.goToOption(T.Nothing);m.goToOption(T.Specific,n)}),i=Ae(),p=b(R=>i.update(R)),E=b(R=>{i.wasMoved(R)&&(o||h||m.goToOption(T.Specific,n,0))}),I=b(R=>{i.wasMoved(R)&&(o||h&&m.goToOption(T.Nothing))}),P=u.useMemo(()=>({active:h,selected:x,disabled:o}),[h,x,o]);return U({ourProps:{id:n,ref:y,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":x,disabled:void 0,onClick:S,onFocus:g,onPointerEnter:p,onMouseEnter:p,onPointerMove:E,onMouseMove:E,onPointerLeave:I,onMouseLeave:I},theirProps:r,slot:P,defaultTag:lt,name:"Listbox.Option"})}let ut=M(et),dt=M(nt),pt=M(rt),mt=M(it),ft=M(ct),H=Object.assign(ut,{Button:dt,Label:pt,Options:mt,Option:ft});function xt({title:e,titleId:t,...s},n){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},s),e?u.createElement("title",{id:t},e):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const bt=u.forwardRef(xt),gt=bt,vt=async(e,t,s,n)=>{const o=localStorage.getItem("authToken")??"";try{e({type:$.CREATE_COMMENT_REQUEST});const l=await fetch(`${ae}/projects/${t}/tasks/${s}/comments`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify(n)});if(!l.ok)throw new Error("Failed to create a comment for the task");const r=await l.json();e({type:$.CREATE_COMMENT_SUCCESS,payload:r}),console.log(r),de(e,t,s)}catch(l){console.error("Operation failed:",l),e({type:$.CREATE_COMMENT_FAILURE,payload:"Comment is not created"})}},de=async(e,t,s)=>{const n=localStorage.getItem("authToken")??"";try{e({type:$.FETCH_COMMENT_REQUEST});const o=await fetch(`${ae}/projects/${t}/tasks/${s}/comments`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}});if(!o.ok)throw new Error("Failed to get comments");const l=await o.json();e({type:$.FETCH_COMMENT_SUCCESS,payload:l}),console.log("API response data:",l)}catch(o){throw console.error("Operation failed:",o),e({type:$.FETCH_COMMENT_FAILURE,payload:"Can't get those comments"}),o}},ht=()=>{const e=ce();let{projectID:t,taskID:s}=K(),n=Ve();return u.useEffect(()=>{(async()=>{try{t&&s&&(console.log("Fetching comments..."),await de(e,t,s))}catch(l){console.error("Error fetching comments:",l)}})()},[t,s]),a.jsx("div",{className:"comment my-3 bg-white-200 rounded p-3",children:n.isLoading?a.jsx("p",{children:"Loading comments..."}):n.isError?a.jsxs("p",{children:["Error: ",n.errorMessage]}):a.jsx("div",{className:"comment rounded-lg mt-2 space-y-4",children:n.data.slice().map(o=>a.jsx("div",{className:"p-3 bg-gray-100 rounded-lg shadow-md comment",children:a.jsx("div",{className:"text-gray-600",children:o.User&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"m-2",children:[a.jsx("strong",{children:"Name:"})," ",o.User.name]}),a.jsxs("p",{className:"m-2",children:[a.jsx("strong",{children:"Timestamp:"})," ",o.createdAt&&o.createdAt.toLocaleString()]}),a.jsxs("p",{className:"m-2",children:[a.jsx("strong",{children:"Comment:"})," ",o.description]})]})})},o.id))})})},yt=()=>{const e=ce(),{projectID:t="",taskID:s=""}=K();let[n,o]=u.useState("");const{register:l,handleSubmit:r,formState:{}}=le({defaultValues:{description:""}}),c=async()=>{try{await vt(e,t??"",s??"",{description:n}),o("")}catch(m){console.error("Failed to add comment:",m)}};return a.jsx(a.Fragment,{children:a.jsxs(D.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[a.jsx(D.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Create new comment"}),a.jsx("div",{className:"mt-2",children:a.jsxs("form",{onSubmit:r(c),className:"mt-5",children:[a.jsx("h3",{className:"mb-3 mx-auto text-xl font-semibold",children:"Comment Details"}),a.jsx("input",{type:"text",placeholder:"Write comment here",id:"commentBox",required:!0,...l("description",{required:!0}),onChange:m=>o(m.target.value),value:n,className:"w-full px-3 py-2 my-4 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),a.jsx("button",{type:"submit",id:"addCommentBtn",className:"inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Add comment"})]})})]})})},St=e=>{const t=new Date(e),s=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${s}-${n}-${o}`},Ot=()=>{let[e,t]=u.useState(!0);const{projectID:s="",taskID:n=""}=K(),o=qe(),l=se(),r=Qe(),c=ie(),m=ze(),h=l==null?void 0:l.projects.filter(i=>`${i.id}`===s)[0],x=c.projectData.tasks[n??""],[j,L]=u.useState(x.assignedUserName??""),{register:C,handleSubmit:y,formState:{}}=le({defaultValues:{title:x.title,description:x.description,selectedPerson:x.assignedUserName,dueDate:St(x.dueDate)}});if(!h)return a.jsx(a.Fragment,{children:"No such Project!"});function S(){t(!1),o("../../")}const g=async i=>{var E,I;const p=(I=(E=r==null?void 0:r.members)==null?void 0:E.filter(P=>P.name===j))==null?void 0:I[0];He(m,s??"",{...x,...i,assignee:p==null?void 0:p.id}),S()};return a.jsx(a.Fragment,{children:a.jsx(Y,{appear:!0,show:e,as:u.Fragment,children:a.jsxs(D,{as:"div",className:"relative z-10",onClose:S,children:[a.jsx(Y.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),a.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:a.jsx("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:a.jsx(Y.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsxs(D.Panel,{className:"w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[a.jsx(D.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Task Details"}),a.jsx("div",{className:"mt-2",children:a.jsxs("form",{onSubmit:y(g),children:[a.jsx("input",{type:"text",required:!0,placeholder:"Enter title",id:"title",...C("title",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),a.jsx("input",{type:"text",required:!0,placeholder:"Enter description",id:"description",...C("description",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),a.jsx("input",{type:"date",required:!0,placeholder:"Enter due date",id:"dueDate",...C("dueDate",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),a.jsx("h3",{children:a.jsx("strong",{children:"Assignee"})}),a.jsxs(H,{value:j,onChange:L,children:[a.jsx(H.Button,{className:"w-full border rounded-md py-2 px-3 my-2 text-gray-700 text-base text-left",children:j}),a.jsx(H.Options,{className:"absolute mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:r==null?void 0:r.members.map(i=>a.jsx(H.Option,{className:({active:p})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${p?"bg-blue-100 text-blue-900":"text-gray-900"}`,value:i.name,children:({selected:p})=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:`block truncate ${p?"font-medium":"font-normal"}`,children:i.name}),p?a.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600",children:a.jsx(gt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},i.id))})]}),a.jsx("button",{type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Update"}),a.jsx("button",{type:"submit",onClick:S,className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Cancel"})]})}),a.jsx(ht,{}),a.jsx(yt,{})]})})})})]})})})},Lt=()=>{var l;let{taskID:e}=K();const t=se(),s=ie(),n=s.isLoading,o=(l=s.projectData.tasks)==null?void 0:l[e||""];return n||!t||t!=null&&t.isLoading?a.jsx(a.Fragment,{children:"Loading..."}):o?a.jsx(Ot,{}):a.jsx(a.Fragment,{children:"No such task!"})};export{Lt as default};
