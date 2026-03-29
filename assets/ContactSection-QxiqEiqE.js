import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";import{D as r,E as i,S as a}from"./index-D2BykDCw.js";import{t as o}from"./SectionTag-C0DGZM9d.js";import{t as s}from"./RevealWrapper-Biji8Zyi.js";var c=class{constructor(e=0,t=`Network Error`){this.status=e,this.text=t}},l={origin:`https://api.emailjs.com`,blockHeadless:!1,storageProvider:(()=>{if(!(typeof localStorage>`u`))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},u=e=>e?typeof e==`string`?{publicKey:e}:e.toString()===`[object Object]`?e:{}:{},d=(e,t=`https://api.emailjs.com`)=>{if(!e)return;let n=u(e);l.publicKey=n.publicKey,l.blockHeadless=n.blockHeadless,l.storageProvider=n.storageProvider,l.blockList=n.blockList,l.limitRate=n.limitRate,l.origin=n.origin||t},f=async(e,t,n={})=>{let r=await fetch(l.origin+e,{method:`POST`,headers:n,body:t}),i=await r.text(),a=new c(r.status,i);if(r.ok)return a;throw a},p=(e,t,n)=>{if(!e||typeof e!=`string`)throw`The public key is required. Visit https://dashboard.emailjs.com/admin/account`;if(!t||typeof t!=`string`)throw`The service ID is required. Visit https://dashboard.emailjs.com/admin`;if(!n||typeof n!=`string`)throw`The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`},m=e=>{if(e&&e.toString()!==`[object Object]`)throw`The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/`},h=e=>e.webdriver||!e.languages||e.languages.length===0,g=()=>new c(451,`Unavailable For Headless Browser`),_=(e,t)=>{if(!Array.isArray(e))throw`The BlockList list has to be an array`;if(typeof t!=`string`)throw`The BlockList watchVariable has to be a string`},v=e=>!e.list?.length||!e.watchVariable,y=(e,t)=>e instanceof FormData?e.get(t):e[t],b=(e,t)=>{if(v(e))return!1;_(e.list,e.watchVariable);let n=y(t,e.watchVariable);return typeof n==`string`?e.list.includes(n):!1},x=()=>new c(403,`Forbidden`),S=(e,t)=>{if(typeof e!=`number`||e<0)throw`The LimitRate throttle has to be a positive number`;if(t&&typeof t!=`string`)throw`The LimitRate ID has to be a non-empty string`},C=async(e,t,n)=>{let r=Number(await n.get(e)||0);return t-Date.now()+r},w=async(e,t,n)=>{if(!t.throttle||!n)return!1;S(t.throttle,t.id);let r=t.id||e;return await C(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},T=()=>new c(429,`Too Many Requests`),E=async(e,t,n,r)=>{let i=u(r),a=i.publicKey||l.publicKey,o=i.blockHeadless||l.blockHeadless,s=i.storageProvider||l.storageProvider,c={...l.blockList,...i.blockList},d={...l.limitRate,...i.limitRate};return o&&h(navigator)?Promise.reject(g()):(p(a,e,t),m(n),n&&b(c,n)?Promise.reject(x()):await w(location.pathname,d,s)?Promise.reject(T()):f(`/api/v1.0/email/send`,JSON.stringify({lib_version:`4.4.1`,user_id:a,service_id:e,template_id:t,template_params:n}),{"Content-type":`application/json`}))},D=e=>{if(!e||e.nodeName!==`FORM`)throw`The 3rd parameter is expected to be the HTML form element or the style selector of the form`},O=e=>typeof e==`string`?document.querySelector(e):e,k={init:d,send:E,sendForm:async(e,t,n,r)=>{let i=u(r),a=i.publicKey||l.publicKey,o=i.blockHeadless||l.blockHeadless,s=l.storageProvider||i.storageProvider,c={...l.blockList,...i.blockList},d={...l.limitRate,...i.limitRate};if(o&&h(navigator))return Promise.reject(g());let m=O(n);p(a,e,t),D(m);let _=new FormData(m);return b(c,_)?Promise.reject(x()):await w(location.pathname,d,s)?Promise.reject(T()):(_.append(`lib_version`,`4.4.1`),_.append(`service_id`,e),_.append(`template_id`,t),_.append(`user_id`,a),f(`/api/v1.0/email/send-form`,_))},EmailJSResponseStatus:c},A=e(t(),1),j=`service_qbz0mkp`,M=`template_jzgjamr`,N=`xKJ4aufWwRFR3G8dr`,P={firstName:``,lastName:``,email:``,phone:``,service:``,message:``};function F(){let[e,t]=(0,A.useState)(P),[n,r]=(0,A.useState)({}),[i,a]=(0,A.useState)(`idle`),o=(0,A.useCallback)(e=>{let{name:i,value:a}=e.target;t(e=>({...e,[i]:a})),n[i]&&r(e=>({...e,[i]:``}))},[n]),s=(0,A.useCallback)(()=>{let t={};return e.firstName.trim()||(t.firstName=`First Name is required`),e.phone.trim()||(t.phone=`Phone Number is required`),e.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||(t.email=`Valid email required`),t},[e]);return{values:e,errors:n,status:i,handleChange:o,handleSubmit:(0,A.useCallback)(async n=>{n.preventDefault();let i=s();if(Object.keys(i).length){r(i);return}a(`loading`);try{let n={from_name:`${e.firstName} ${e.lastName}`,from_email:e.email,phone_number:e.phone,service_type:e.service,message:e.message};await k.send(j,M,n,N),a(`success`),t(P)}catch(e){console.error(`EmailJS Error:`,e),a(`error`)}},[e,s])}}var I=n();function L({options:e,value:t,onChange:n,placeholder:r=`Select an option...`}){let[i,a]=(0,A.useState)(!1),o=(0,A.useRef)(null),s=e.find(e=>e===t)||r;(0,A.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&a(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let c=e=>{n({target:{name:`service`,value:e}}),a(!1)};return(0,I.jsxs)(`div`,{className:`custom-select-wrapper`,ref:o,children:[(0,I.jsxs)(`div`,{className:`custom-select-header ${i?`active`:``}`,onClick:()=>a(!i),children:[(0,I.jsx)(`span`,{children:s}),(0,I.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{transform:i?`rotate(180deg)`:`rotate(0)`,transition:`transform 0.3s`},children:(0,I.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),(0,I.jsx)(`div`,{className:`custom-select-options ${i?`show`:``}`,children:e.map((e,n)=>(0,I.jsx)(`div`,{className:`custom-select-option ${t===e?`selected`:``}`,onClick:()=>c(e),children:e},n))}),(0,I.jsx)(`style`,{children:`
        .custom-select-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
          user-select: none;
        }

        .custom-select-header {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          color: white;
          font-family: var(--font-body);
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .custom-select-header:hover {
          border-color: rgba(212, 175, 55, 0.5);
        }

        .custom-select-header.active {
          border-color: var(--gold);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .custom-select-options {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: var(--forest);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-lg);
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          max-height: 300px;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .custom-select-options.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .custom-select-option {
          padding: 12px 18px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .custom-select-option:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--gold);
        }

        .custom-select-option.selected {
          background: var(--gold);
          color: var(--forest);
          font-weight: 600;
        }

        /* Custom Scrollbar for dropdown */
        .custom-select-options::-webkit-scrollbar {
          width: 6px;
        }
        .custom-select-options::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-select-options::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
      `})]})}var R=(0,A.memo)(function(){let{values:e,errors:t,status:n,handleChange:c,handleSubmit:l}=F(),u=[`Landscape Design`,`Artificial Landscape`,`Vertical Garden`,`Garden Lights`,`Fabric Design`,`Garden Swings`,`Gazebo Gardens`,`Drip Irrigation`,`Lawn Maintenance`,`Garden Maintenance`];return(0,I.jsxs)(`section`,{id:`contact`,"aria-label":`Contact Agricore Ventures`,children:[(0,I.jsx)(`div`,{className:`container`,children:(0,I.jsxs)(`div`,{className:`contact-grid`,children:[(0,I.jsxs)(s,{className:`contact-info`,children:[(0,I.jsx)(o,{style:{color:`var(--gold)`,borderColor:`rgba(212, 175, 55, 0.3)`},children:`Get In Touch`}),(0,I.jsxs)(`h2`,{className:`section-heading`,children:[`Let's Build Your`,(0,I.jsx)(`br`,{}),`Masterpiece.`]}),(0,I.jsx)(`p`,{style:{fontSize:`16px`,color:`rgba(255,255,255,0.6)`,lineHeight:1.8,margin:`24px 0 48px`},children:`Whether it's a private terrace garden or a sprawling corporate campus, our experts are ready to bring your vision to life.`}),(0,I.jsx)(`div`,{className:`contact-details`,children:[{icon:(0,I.jsx)(i,{}),label:`Registered Office`,value:`No. 10A, Krishnasamy Street, Nalvar layout, Rathinapuri, Coimbatore – 641027`},{icon:(0,I.jsx)(r,{}),label:`Direct Line`,value:`+91 63696 84474`,link:`tel:+916369684474`},{icon:(0,I.jsx)(a,{}),label:`Email Support`,value:`agricoreventures.pvtld@gmail.com`,link:`mailto:agricoreventures.pvtld@gmail.com`}].map((e,t)=>(0,I.jsxs)(`div`,{className:`contact-item`,style:{marginBottom:`32px`},children:[(0,I.jsx)(`div`,{className:`contact-icon`,style:{background:`rgba(212, 175, 55, 0.1)`,color:`var(--gold)`,borderRadius:`2px`},children:e.icon}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`contact-label`,style:{fontSize:`12px`,letterSpacing:`1px`,color:`var(--gold)`},children:e.label}),(0,I.jsx)(`div`,{className:`contact-value`,style:{fontWeight:500},children:e.link?(0,I.jsx)(`a`,{href:e.link,children:e.value}):e.value})]})]},t))})]}),(0,I.jsx)(s,{className:`contact-form`,delay:`0.2s`,style:{background:`var(--glass)`,border:`1px solid var(--glass-border)`,padding:`48px`,borderRadius:`var(--radius-lg)`},children:n===`success`?(0,I.jsxs)(`div`,{className:`form-success-state`,style:{textAlign:`center`,padding:`40px 0`},children:[(0,I.jsx)(`div`,{style:{fontSize:`48px`,marginBottom:`24px`},children:`🌿`}),(0,I.jsx)(`h3`,{style:{color:`white`,marginBottom:`12px`},children:`Message Received`}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.6)`},children:`Thank you for reaching out. An expert from our design team will contact you within 24 hours.`}),(0,I.jsx)(`button`,{onClick:()=>window.location.reload(),className:`btn btn-gold`,style:{marginTop:`32px`},children:`Send Another Message`})]}):(0,I.jsxs)(`form`,{noValidate:!0,onSubmit:l,children:[(0,I.jsxs)(`div`,{className:`form-row`,children:[(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`First Name`}),(0,I.jsx)(`input`,{type:`text`,name:`firstName`,value:e.firstName,onChange:c,placeholder:`e.g. Rajan`,className:t.firstName?`input-error`:``}),t.firstName&&(0,I.jsx)(`span`,{className:`error-msg`,children:t.firstName})]}),(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`Last Name`}),(0,I.jsx)(`input`,{type:`text`,name:`lastName`,value:e.lastName,onChange:c,placeholder:`e.g. Suresh`})]})]}),(0,I.jsxs)(`div`,{className:`form-row`,children:[(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`Email Address`}),(0,I.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:c,placeholder:`rajan@company.com`,className:t.email?`input-error`:``}),t.email&&(0,I.jsx)(`span`,{className:`error-msg`,children:t.email})]}),(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`Phone Number`}),(0,I.jsx)(`input`,{type:`tel`,name:`phone`,value:e.phone,onChange:c,placeholder:`+91 12345 67890`,className:t.phone?`input-error`:``}),t.phone&&(0,I.jsx)(`span`,{className:`error-msg`,children:t.phone})]})]}),(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`Project Type`}),(0,I.jsx)(L,{options:u,value:e.service,onChange:c,placeholder:`Select an option...`})]}),(0,I.jsxs)(`div`,{className:`form-group`,children:[(0,I.jsx)(`label`,{children:`Project Details`}),(0,I.jsx)(`textarea`,{name:`message`,value:e.message,onChange:c,placeholder:`Tell us about your outdoor space...`,rows:`4`})]}),n===`error`&&(0,I.jsx)(`div`,{style:{color:`#ff6b6b`,fontSize:`13px`,marginBottom:`16px`},children:`⚠️ Something went wrong. Please try again or call us directly.`}),(0,I.jsx)(`button`,{type:`submit`,className:`btn btn-gold`,disabled:n===`loading`,style:{width:`100%`,padding:`18px`,display:`flex`,justifyContent:`center`},children:n===`loading`?`Sending Request...`:`Send Inquiry`})]})})]})}),(0,I.jsx)(`style`,{children:`
          .contact-form label {
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: rgba(255,255,255,0.4);
            margin-bottom: 8px;
          }
          .contact-form input, 
          .contact-form textarea {
            width: 100%;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 14px;
            color: white;
            font-family: var(--font-body);
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
            margin-bottom: 20px;
            cursor: pointer;
          }
          .contact-form input:focus, 
          .contact-form textarea:focus {
            border-color: var(--gold);
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .error-msg {
            color: #ff6b6b;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-top: -16px;
            margin-bottom: 16px;
          }
          .input-error {
            border-color: #ff6b6b !important;
          }
          @media (max-width: 768px) {
            .form-row { grid-template-columns: 1fr; gap: 0; }
          }
        `})]})});export{R as t};