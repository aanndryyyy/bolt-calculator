function k(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function z(){return Object.create(null)}function v(t){t.forEach(I)}function J(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function gt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,u){if(r){const s=K(e,n,i,u);t.p(s,r)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function et(){M=!0}function nt(){M=!1}function it(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:it(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,r=Math.max(d,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(s[c],a)}}function st(t,e){if(M){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){M&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function vt(){return O(" ")}function Et(){return O("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return t===""?null:+t}function ot(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){ut(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ft(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function kt(t,e,n){return ft(t,e,n,lt)}function at(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>O(e),!0)}function Mt(t){return at(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e){t.value=e??""}function Tt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function Lt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Bt(t,e){return new t(e)}let $;function w(t){$=t}function R(){if(!$)throw new Error("Function called outside component initialization");return $}function Ht(t){R().$$.on_mount.push(t)}function Ot(t){R().$$.after_update.push(t)}const b=[],F=[],A=[],G=[],W=Promise.resolve();let B=!1;function U(){B||(B=!0,W.then(V))}function Pt(){return U(),W}function H(t){A.push(t)}const L=new Set;let x=0;function V(){if(x!==0)return;const t=$;do{try{for(;x<b.length;){const e=b[x];x++,w(e),_t(e.$$)}}catch(e){throw b.length=0,x=0,e}for(w(null),b.length=0,x=0;F.length;)F.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];L.has(n)||(L.add(n),n())}A.length=0}while(b.length);for(;G.length;)G.pop()();B=!1,L.clear(),w(t)}function _t(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const S=new Set;let g;function qt(){g={r:0,c:[],p:g}}function zt(){g.r||v(g.c),g=g.p}function X(t,e){t&&t.i&&(S.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Gt(t,e){t.d(1),e.delete(t.key)}function It(t,e,n,i,r,u,s,o,c,l,a,d){let _=t.length,m=u.length,h=_;const j={};for(;h--;)j[t[h].key]=h;const E=[],C=new Map,T=new Map;for(h=m;h--;){const f=d(r,u,h),p=n(f);let y=s.get(p);y?i&&y.p(f,e):(y=l(p,f),y.c()),C.set(p,E[h]=y),p in j&&T.set(p,Math.abs(h-j[p]))}const P=new Set,q=new Set;function D(f){X(f,1),f.m(o,a),s.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=E[m-1],p=t[_-1],y=f.key,N=p.key;f===p?(a=f.first,_--,m--):C.has(N)?!s.has(y)||P.has(y)?D(f):q.has(N)?_--:T.get(y)>T.get(N)?(q.add(y),D(f)):(P.add(N),_--):(c(p,s),_--)}for(;_--;){const f=t[_];C.has(f.key)||c(f,s)}for(;m;)D(E[m-1]);return E}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(I).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),u.forEach(H)}function ht(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(b.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,r,u,s,o=[-1]){const c=$;w(t);const l=t.$$={fragment:null,ctx:[],props:u,update:k,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),a&&mt(t,d)),_}):[],l.update(),a=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){et();const d=ot(e.target);l.fragment&&l.fragment.l(d),d.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),nt(),V()}w(c)}class Rt{$destroy(){ht(this,1),this.$destroy=k}$on(e,n){if(!J(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{dt as A,ht as B,gt as C,bt as D,wt as E,xt as F,st as G,k as H,yt as I,Lt as J,Ct as K,Nt as L,St as M,It as N,v as O,Dt as P,Gt as Q,Rt as S,vt as a,$t as b,Mt as c,Ft as d,Et as e,zt as f,X as g,ct as h,Qt as i,Ot as j,lt as k,kt as l,ot as m,At as n,Ht as o,Tt as p,O as q,at as r,pt as s,Pt as t,jt as u,qt as v,F as w,Bt as x,Jt as y,Kt as z};