(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(e,t,o){o(7905)},5557:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(2020)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,l=o(7273).Z,r=n(o(7294)),a=o(4532),s=o(3353),i=o(1410),c=o(9064),u=o(370),f=o(9955),d=o(4224),p=o(508),h=o(1516),v=o(4266);let _=new Set;function g(e,t,o,n,l){if(l||s.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,r=t+"%"+o+"%"+l;if(_.has(r))return;_.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let b=r.default.forwardRef(function(e,t){let o,n;let{href:i,as:_,children:b,prefetch:m,passHref:C,replace:j,shallow:x,scroll:E,locale:A,onClick:w,onMouseEnter:T,onTouchStart:O,legacyBehavior:P=!1}=e,M=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let k=!1!==m,N=r.default.useContext(f.RouterContext),S=r.default.useContext(d.AppRouterContext),L=null!=N?N:S,R=!N,{href:I,as:D}=r.default.useMemo(()=>{if(!N){let e=y(i);return{href:e,as:_?y(_):e}}let[e,t]=a.resolveHref(N,i,!0);return{href:e,as:_?a.resolveHref(N,_):t||e}},[N,i,_]),U=r.default.useRef(I),H=r.default.useRef(D);P&&(n=r.default.Children.only(o));let K=P?n&&"object"==typeof n&&n.ref:t,[B,G,Z]=p.useIntersection({rootMargin:"200px"}),X=r.default.useCallback(e=>{(H.current!==D||U.current!==I)&&(Z(),H.current=D,U.current=I),B(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[D,K,I,Z,B]);r.default.useEffect(()=>{L&&G&&k&&g(L,I,D,{locale:A},R)},[D,I,G,A,k,null==N?void 0:N.locale,L,R]);let q={ref:X,onClick(e){P||"function"!=typeof w||w(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,o,n,l,a,i,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!s.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](o,n,{shallow:a,locale:c,scroll:i}):t[l?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};u?r.default.startTransition(h):h()}(e,L,I,D,j,x,E,A,R,k)},onMouseEnter(e){P||"function"!=typeof T||T(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(k||!R)&&g(L,I,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(k||!R)&&g(L,I,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},R)}};if(c.isAbsoluteUrl(D))q.href=D;else if(!P||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&h.getDomainLocale(D,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);q.href=t||v.addBasePath(u.addLocale(D,e,null==N?void 0:N.defaultLocale))}return P?r.default.cloneElement(n,q):r.default.createElement("a",Object.assign({},M,q),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:i}=e,c=i||!r,[u,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(r){if(c||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:l,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=a.get(n)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:l},s.push(o),a.set(o,t),t}(o);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!u){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[c,o,t,u,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,u,h]};var n=o(7294),l=o(29);let r="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2020:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var n=o(5893);o(9008);var l=o(5675),r=o.n(l),a=o(7294),s=o(849),i=function(e){let{title:t,image:o,releaseDate:l}=e;return(0,n.jsxs)("div",{className:s.card,children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{src:"https://image.tmdb.org/t/p/w500".concat(o),width:"240",height:"300",alt:t})}),(0,n.jsxs)("div",{className:s.hovercard,children:[(0,n.jsx)("span",{className:s.hovertitle,children:t}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Release Date: "}),l]})]})]})};o(1752);var c=o(6154),u=o(5439),f=o(1664),d=o.n(f),p=o(1163),h=function(){let[e,t]=(0,a.useState)([]),o=(0,a.useRef)(""),l=(0,p.useRouter)(),[r,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{s(!0),c.Z.get("".concat("https://api.themoviedb.org/3/","discover/movie?api_key=").concat("28184acf8bc785abd33209bdadea526a"),{headers:{"Access-Control-Allow-Headers":"Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-type":"application/json"}}).then(e=>{s(!1),console.log(e),t(e.data.results)}).catch(e=>{s(!1),console.log(e)}),console.log("https://api.themoviedb.org/3/")},[l]);let f=()=>{let e=o.current.value.trim().split(" ").join("+");if(""===e||void 0===e){console.log("not valid");return}s(!0);let n="".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("28184acf8bc785abd33209bdadea526a","&query=").concat(e);c.Z.get(encodeURI(n),{headers:{"Access-Control-Allow-Headers":"Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-type":"application/json"}}).then(e=>{s(!1),console.log(e),t(e.data.results)}).catch(e=>{s(!1),console.log(e)})};return r?(0,n.jsx)("p",{className:u.loading,children:"Loading ..."}):(0,n.jsxs)("div",{className:u.listContainer,children:[(0,n.jsxs)("div",{className:u.inputContainer,children:[(0,n.jsx)("input",{ref:o,placeholder:"search movie",className:u.input,type:"text",name:"search"}),(0,n.jsx)("button",{type:"button",className:u.button,onClick:f,children:"Search"})]}),(0,n.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[e.length>0&&e.map((e,t)=>(0,n.jsx)(d(),{href:"/movie/".concat(e.id),children:(0,n.jsx)(i,{releaseDate:e.release_date,image:e.poster_path,title:e.title})},t)),!r&&0===e.length&&(0,n.jsx)("p",{className:u.loading,children:" No result for this Keyword !"})]})]})};function v(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(h,{})})}},5439:function(e){e.exports={listContainer:"list_listContainer__tBEGR",inputContainer:"list_inputContainer__EpK4n",button:"list_button__xE3WK",input:"list_input__vX716",loading:"list_loading__YmLB_"}},849:function(e){e.exports={hovercard:"movieTile_hovercard__DFnlH",hovertitle:"movieTile_hovertitle__VVUuG",card:"movieTile_card__PAljn"}},9008:function(e,t,o){o(2636)},1664:function(e,t,o){e.exports=o(5569)}},function(e){e.O(0,[845,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);