function org_onecmdb_ui_gwt_desktop_CMDBApplication(){var l='',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='#',r='/',wb='0BD012265FBA4925C7FE72519FC6296C.cache.html',vb='0FF54DBF862918A9588069EA64CD3436.cache.html',sb='75DEF0A15C1B17B0D33AABC87038B203.cache.html',tb='78D63DE932995ADDBB23CB6E885C2494.cache.html',ec='<script defer="defer">org_onecmdb_ui_gwt_desktop_CMDBApplication.onInjectionDone(\'org.onecmdb.ui.gwt.desktop.CMDBApplication\')<\/script>',hc='<script id="',A='=',q='?',C='Bad handler "',ac='CMDBApplication.css',bc='CMDBShortcuts.css',ub='D00D72FCE4C25BA72495F3742E5FE94C.cache.html',cc='DOMContentLoaded',o='SCRIPT',gc='__gwt_marker_org.onecmdb.ui.gwt.desktop.CMDBApplication',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',xb='desktop/css/desktop.css',fc='end',lb='gecko',mb='gecko1_8',yb='gwt.hybrid',Eb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',Db='head',rb='hosted.html?org_onecmdb_ui_gwt_desktop_CMDBApplication',Cb='href',kb='ie6',ab='iframe',t='img',bb="javascript:''",zb='link',pb='loadExternalRefs',v='meta',eb='moduleRequested',dc='moduleStartup',jb='msie',w='name',gb='opera',m='org.onecmdb.ui.gwt.desktop.CMDBApplication',db='position:absolute;width:0;height:0;border:none',Ab='rel',ib='safari',qb='selectingPermutation',x='startup',Bb='stylesheet',Fb='themes/css/xtheme-slate.css',ob='unknown',fb='user.agent',hb='webkit';var jc=window,k=document,ic=jc.__gwtStatsEvent?function(a){return jc.__gwtStatsEvent(a)}:null,Dc,tc,oc,nc=l,wc={},ad=[],Cc=[],mc=[],zc,Bc;ic&&ic({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!jc.__gwt_stylesLoaded){jc.__gwt_stylesLoaded={}}if(!jc.__gwt_scriptsLoaded){jc.__gwt_scriptsLoaded={}}function sc(){try{return jc.external&&(jc.external.gwtOnLoad&&jc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function vc(){if(Dc&&tc){var c=k.getElementById(m);var b=c.contentWindow;b.__gwt_initHandlers=org_onecmdb_ui_gwt_desktop_CMDBApplication.__gwt_initHandlers;if(sc()){b.__gwt_getProperty=function(a){return pc(a)}}org_onecmdb_ui_gwt_desktop_CMDBApplication=null;b.gwtOnLoad(zc,m,nc);ic&&ic({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:fc})}}
function qc(){var j,h=gc,i;k.write(hc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){nc=f(j.src)}if(nc==l){var e=k.getElementsByTagName(s);if(e.length>0){nc=e[e.length-1].href}else{nc=f(k.location.href)}}else if(nc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=nc+u;nc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function Ac(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}wc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{Bc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{zc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function Fc(d,e){var a=mc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function pc(d){var e=Cc[d](),b=ad[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(Bc){Bc(d,a,e)}throw null}
var rc;function uc(){if(!rc){rc=true;var a=k.createElement(ab);a.src=bb;a.id=m;a.style.cssText=db;a.tabIndex=-1;k.body.appendChild(a);ic&&ic({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:eb});a.contentWindow.location.replace(nc+Ec)}}
Cc[fb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(gb)!=-1){return gb}else if(d.indexOf(hb)!=-1){return ib}else if(d.indexOf(jb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return kb}}}else if(d.indexOf(lb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return mb}return lb}return ob};ad[fb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};org_onecmdb_ui_gwt_desktop_CMDBApplication.onScriptLoad=function(){if(rc){tc=true;vc()}};org_onecmdb_ui_gwt_desktop_CMDBApplication.onInjectionDone=function(){Dc=true;ic&&ic({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:fc});vc()};qc();Ac();ic&&ic({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:qb});var Ec;if(sc()){Ec=rb}else{try{Fc([gb],sb);Fc([kb],tb);Fc([ib],ub);Fc([mb],vb);Fc([lb],wb);Ec=mc[pc(fb)]}catch(a){return}}var yc;function xc(){if(!oc){oc=true;if(!__gwt_stylesLoaded[xb]){var a=k.createElement(zb);__gwt_stylesLoaded[xb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,nc+xb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Eb]){var a=k.createElement(zb);__gwt_stylesLoaded[Eb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,nc+Eb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Fb]){var a=k.createElement(zb);__gwt_stylesLoaded[Fb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,nc+Fb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[ac]){var a=k.createElement(zb);__gwt_stylesLoaded[ac]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,nc+ac);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[bc]){var a=k.createElement(zb);__gwt_stylesLoaded[bc]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,nc+bc);k.getElementsByTagName(Db)[0].appendChild(a)}vc();if(k.removeEventListener){k.removeEventListener(cc,xc,false)}if(yc){clearInterval(yc)}}}
if(k.addEventListener){k.addEventListener(cc,function(){uc();xc()},false)}var yc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){uc();xc()}},50);ic&&ic({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:fc});ic&&ic({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:nb});k.write(ec)}
org_onecmdb_ui_gwt_desktop_CMDBApplication.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};org_onecmdb_ui_gwt_desktop_CMDBApplication();