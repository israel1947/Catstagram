(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}new Set;let i,l=!1;function a(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){i=t}new Map;const d=[],f=[],$=[],h=[],p=Promise.resolve();let m=!1;function g(t){$.push(t)}const b=new Set;let y=0;function _(){if(0!==y)return;const t=i;do{try{for(;y<d.length;){const t=d[y];y++,u(t),k(t.$$)}}catch(t){throw d.length=0,y=0,t}for(u(null),d.length=0,y=0;f.length;)f.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];b.has(e)||(b.add(e),e())}$.length=0}while(d.length);for(;h.length;)h.pop()();m=!1,b.clear(),u(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const w=new Set;let x;function v(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function E(s,c,f,$,h,b,y,k=[-1]){const x=i;u(s);const v=s.$$={fragment:null,ctx:[],props:b,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(x?x.$$.context:[])),callbacks:n(),dirty:k,skip_bound:!1,root:c.target||x.$$.root};y&&y(v.root);let E=!1;if(v.ctx=f?f(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&h(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),E&&function(t,e){-1===t.$$.dirty[0]&&(d.push(t),m||(m=!0,p.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],v.update(),E=!0,o(v.before_update),v.fragment=!!$&&$(v.ctx),c.target){if(c.hydrate){l=!0;const t=(M=c.target,Array.from(M.childNodes));v.fragment&&v.fragment.l(t),t.forEach(a)}else v.fragment&&v.fragment.c();c.intro&&((C=s.$$.fragment)&&C.i&&(w.delete(C),C.i(S))),function(t,n,s,c){const{fragment:i,after_update:l}=t.$$;i&&i.m(n,s),c||g((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(g)}(s,c.target,c.anchor,c.customElement),l=!1,_()}var C,S,M;u(x)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(x=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){v(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class C{$destroy(){v(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(e){let n;return{c(){var t,e,o,r;r="div",n=document.createElement(r),n.innerHTML="<h1>Hello Perros</h1>",t=n,e="class",null==(o="main")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}new class extends C{constructor(t){super(),E(this,t,null,S,s,{})}}({target:document.querySelector("main")})})();