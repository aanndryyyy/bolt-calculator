import{S as pe,i as me,s as de,k as u,q as v,a as S,l as c,m as f,r as y,h,c as x,n as a,b as ce,G as e,J as D,K as z,H as ne,L as he,M as fe,N as _e,p as ge,u as be,O as oe}from"../chunks/index.1ef3c7bd.js";const te=[{name:"VW T-Roc",price:{km:.25,minute:.16,hour:6.99,day:33.89}},{name:"Toyota Yaris",price:{km:.22,minute:.13,hour:4.99,day:27.89}},{name:"Skoda Kamiq",price:{km:.25,minute:.16,hour:6.99,day:33.89}},{name:"Audi Q2",price:{km:.25,minute:.17,hour:7.99,day:33.89}},{name:"Toyota RAV4",price:{km:.25,minute:.3,hour:12.9,day:43.9}}];function ie(l,t,n){const s=l.slice();return s[6]=t[n],s[8]=n,s}function ue(l){let t,n,s,P=l[6].name+"",V,H,p,q=l[6].price.minute+"",k,I,w,L,R,T=l[6].price.km+"",B,j,F,A,G,i,U=(l[0]*l[6].price.minute+l[1]*l[6].price.km).toFixed(1)+"",E,M,C,J;return{c(){t=u("div"),n=u("div"),s=u("h2"),V=v(P),H=S(),p=u("p"),k=v(q),I=v(" €/"),w=u("span"),L=v("min"),R=v(" | "),B=v(T),j=v(" €/"),F=u("span"),A=v("km"),G=S(),i=u("p"),E=v(U),M=v(" €"),J=S(),this.h()},l(r){t=c(r,"DIV",{class:!0,style:!0});var N=f(t);n=c(N,"DIV",{});var _=f(n);s=c(_,"H2",{class:!0});var O=f(s);V=y(O,P),O.forEach(h),H=x(_),p=c(_,"P",{});var g=f(p);k=y(g,q),I=y(g," €/"),w=c(g,"SPAN",{class:!0});var Q=f(w);L=y(Q,"min"),Q.forEach(h),R=y(g," | "),B=y(g,T),j=y(g," €/"),F=c(g,"SPAN",{class:!0});var X=f(F);A=y(X,"km"),X.forEach(h),g.forEach(h),_.forEach(h),G=x(N),i=c(N,"P",{class:!0,title:!0});var K=f(i);E=y(K,U),M=y(K," €"),K.forEach(h),J=x(N),N.forEach(h),this.h()},h(){a(s,"class","font-semibold text-base"),a(w,"class","text-xs"),a(F,"class","text-xs"),a(i,"class","text-2xl font-bold"),a(i,"title",C=(l[0]*l[6].price.minute).toFixed(1)+"€ + "+(l[1]*l[6].price.km).toFixed(1)+"€"),_e(i,"text-green-600",l[8]===0),a(t,"class","flex justify-between items-center p-4 shadow-md rounded-md"),ge(t,"border","1px solid black")},m(r,N){ce(r,t,N),e(t,n),e(n,s),e(s,V),e(n,H),e(n,p),e(p,k),e(p,I),e(p,w),e(w,L),e(p,R),e(p,B),e(p,j),e(p,F),e(F,A),e(t,G),e(t,i),e(i,E),e(i,M),e(t,J)},p(r,N){N&3&&U!==(U=(r[0]*r[6].price.minute+r[1]*r[6].price.km).toFixed(1)+"")&&be(E,U),N&3&&C!==(C=(r[0]*r[6].price.minute).toFixed(1)+"€ + "+(r[1]*r[6].price.km).toFixed(1)+"€")&&a(i,"title",C)},d(r){r&&h(t)}}}function ve(l){let t,n,s,P,V,H,p,q,k,I,w,L,R,T,B,j,F,A,G,i,U,E,M,C,J,r,N,_,O,g,Q,X,K=te,b=[];for(let o=0;o<K.length;o+=1)b[o]=ue(ie(l,K,o));return{c(){t=u("main"),n=u("h1"),s=u("span"),P=v("Bolt"),V=v(" Calculator"),H=S(),p=u("small"),q=v("By "),k=u("a"),I=v("Andry Pedak"),w=S(),L=u("hr"),R=S(),T=u("label"),B=u("span"),j=v("Total Minutes"),F=S(),A=u("input"),G=S(),i=u("input"),U=S(),E=u("label"),M=u("span"),C=v("Total Kilometres"),J=S(),r=u("input"),N=S(),_=u("input"),O=S(),g=u("div");for(let o=0;o<b.length;o+=1)b[o].c();this.h()},l(o){t=c(o,"MAIN",{class:!0});var m=f(t);n=c(m,"H1",{class:!0});var d=f(n);s=c(d,"SPAN",{class:!0});var Z=f(s);P=y(Z,"Bolt"),Z.forEach(h),V=y(d," Calculator"),d.forEach(h),H=x(m),p=c(m,"SMALL",{class:!0});var $=f(p);q=y($,"By "),k=c($,"A",{href:!0,target:!0,rel:!0});var ae=f(k);I=y(ae,"Andry Pedak"),ae.forEach(h),$.forEach(h),w=x(m),L=c(m,"HR",{class:!0}),R=x(m),T=c(m,"LABEL",{class:!0});var W=f(T);B=c(W,"SPAN",{class:!0});var le=f(B);j=y(le,"Total Minutes"),le.forEach(h),F=x(W),A=c(W,"INPUT",{class:!0,type:!0,min:!0}),G=x(W),i=c(W,"INPUT",{class:!0,type:!0,min:!0,max:!0}),W.forEach(h),U=x(m),E=c(m,"LABEL",{class:!0});var Y=f(E);M=c(Y,"SPAN",{class:!0});var se=f(M);C=y(se,"Total Kilometres"),se.forEach(h),J=x(Y),r=c(Y,"INPUT",{class:!0,type:!0,min:!0}),N=x(Y),_=c(Y,"INPUT",{class:!0,type:!0,min:!0,max:!0}),Y.forEach(h),O=x(m),g=c(m,"DIV",{class:!0});var re=f(g);for(let ee=0;ee<b.length;ee+=1)b[ee].l(re);re.forEach(h),m.forEach(h),this.h()},h(){a(s,"class","text-green-600"),a(n,"class","text-3xl font-bold"),a(k,"href","http://pedak.me"),a(k,"target","_blank"),a(k,"rel","noreferrer"),a(p,"class","text-gray-500"),a(L,"class","mt-4 mb-6"),a(B,"class","block mb-1"),a(A,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),a(A,"type","text"),a(A,"min","0"),a(i,"class","w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-600"),a(i,"type","range"),a(i,"min","0"),a(i,"max","180"),a(T,"class","block mb-4"),a(M,"class","block mb-1"),a(r,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),a(r,"type","text"),a(r,"min","0"),a(_,"class","w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-green-600"),a(_,"type","range"),a(_,"min","0"),a(_,"max","360"),a(E,"class","block mb-8"),a(g,"class","grid gap-4 auto-cols-fr"),a(t,"class","max-w-2xl mx-auto px-4 lg:px-0 mt-8 lg:mt-24")},m(o,m){ce(o,t,m),e(t,n),e(n,s),e(s,P),e(n,V),e(t,H),e(t,p),e(p,q),e(p,k),e(k,I),e(t,w),e(t,L),e(t,R),e(t,T),e(T,B),e(B,j),e(T,F),e(T,A),D(A,l[0]),e(T,G),e(T,i),D(i,l[0]),e(t,U),e(t,E),e(E,M),e(M,C),e(E,J),e(E,r),D(r,l[1]),e(E,N),e(E,_),D(_,l[1]),e(t,O),e(t,g);for(let d=0;d<b.length;d+=1)b[d].m(g,null);Q||(X=[z(A,"input",l[2]),z(i,"change",l[3]),z(i,"input",l[3]),z(r,"input",l[4]),z(_,"change",l[5]),z(_,"input",l[5])],Q=!0)},p(o,[m]){if(m&1&&A.value!==o[0]&&D(A,o[0]),m&1&&D(i,o[0]),m&2&&r.value!==o[1]&&D(r,o[1]),m&2&&D(_,o[1]),m&3){K=te;let d;for(d=0;d<K.length;d+=1){const Z=ie(o,K,d);b[d]?b[d].p(Z,m):(b[d]=ue(Z),b[d].c(),b[d].m(g,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=K.length}},i:ne,o:ne,d(o){o&&h(t),he(b,o),Q=!1,fe(X)}}}function ye(l,t,n){let s=60,P=30;te.sort(function(k,I){var w=s*k.price.minute+P*k.price.km,L=s*I.price.minute+P*I.price.km;return w-L});function V(){s=this.value,n(0,s)}function H(){s=oe(this.value),n(0,s)}function p(){P=this.value,n(1,P)}function q(){P=oe(this.value),n(1,P)}return[s,P,V,H,p,q]}class Ee extends pe{constructor(t){super(),me(this,t,ye,ve,de,{})}}export{Ee as default};
