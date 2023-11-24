/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{456:function(Ba,wa,r){r.r(wa);r.d(wa,"ByteRangeRequest",function(){return z});var oa=r(0),na=r(1);r.n(na);var ma=r(2),fa=r(157);Ba=r(100);var da=r(261),aa=r(78),w=r(74),y=r(260),h=r(177);r=r(393);var a=[],b=[],e=window,f=function(){return function(){this.Nm=1}}(),n;(function(ea){ea[ea.UNSENT=0]="UNSENT";ea[ea.DONE=4]="DONE"})(n||(n={}));var z=function(){function ea(ja,ca,ba,ha){var ia=this;this.url=ja;this.range=ca;this.nf=ba;
this.withCredentials=ha;this.J4=n;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);e.Uint8Array&&(this.request.responseType="arraybuffer");ha&&(this.request.withCredentials=ha);x.DISABLE_RANGE_HEADER||(Object(na.isUndefined)(ca.stop)?this.request.setRequestHeader("Range","bytes="+ca.start):this.request.setRequestHeader("Range",["bytes=",ca.start,"-",ca.stop-1].join("")));ba&&Object.keys(ba).forEach(function(la){ia.request.setRequestHeader(la,ba[la])});this.request.overrideMimeType?
this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}ea.prototype.start=function(ja){var ca=this,ba=this.request;ba.onreadystatechange=function(){if(ca.aborted)return ca.status=y.a.ABORTED,ja({code:y.a.ABORTED});if(this.readyState===ca.J4.DONE){ca.pD();var ha=0===window.document.URL.indexOf("file:///");200===ba.status||206===ba.status||ha&&0===ba.status?(ha=e.RV(this),ca.sO(ha,ja)):(ca.status=
y.a.ERROR,ja({code:ca.status,status:ca.status}))}};this.request.send(null);this.status=y.a.STARTED};ea.prototype.sO=function(ja,ca){this.status=y.a.SUCCESS;if(ca)return ca(!1,ja)};ea.prototype.abort=function(){this.pD();this.aborted=!0;this.request.abort()};ea.prototype.pD=function(){var ja=Object(h.c)(this.url,this.range,b);-1!==ja&&b.splice(ja,1);if(0<a.length){ja=a.shift();var ca=new ea(ja.url,ja.range,this.nf,this.withCredentials);ja.request=ca;b.push(ja);ca.start(Object(h.d)(ja))}};ea.prototype.extend=
function(ja){var ca=Object.assign({},this,ja.prototype);ca.constructor=ja;return ca};return ea}(),x=function(ea){function ja(ca,ba,ha,ia,la){ha=ea.call(this,ca,ha,ia)||this;ha.tj={};ha.QB=ba;ha.url=ca;ha.DISABLE_RANGE_HEADER=!1;ha.Jy=z;ha.mP=3;ha.nf=la||{};return ha}Object(oa.c)(ja,ea);ja.prototype.tw=function(ca,ba,ha){var ia=-1===ca.indexOf("?")?"?":"&";switch(ha){case !1:case w.a.NEVER_CACHE:ca=ca+ia+"_="+Object(na.uniqueId)();break;case !0:case w.a.CACHE:ca=ca+ia+"_="+ba.start+","+(Object(na.isUndefined)(ba.stop)?
"":ba.stop)}return ca};ja.prototype.CT=function(ca,ba,ha,ia){void 0===ha&&(ha={});return new this.Jy(ca,ba,ha,ia)};ja.prototype.dca=function(ca,ba,ha,ia,la){for(var ka=0;ka<a.length;ka++)if(Object(na.isEqual)(a[ka].range,ba)&&Object(na.isEqual)(a[ka].url,ca))return a[ka].dh.push(ia),a[ka].wE++,null;for(ka=0;ka<b.length;ka++)if(Object(na.isEqual)(b[ka].range,ba)&&Object(na.isEqual)(b[ka].url,ca))return b[ka].dh.push(ia),b[ka].wE++,null;ha={url:ca,range:ba,QB:ha,dh:[ia],wE:1};if(0===a.length&&b.length<
this.mP)return b.push(ha),ha.request=this.CT(ca,ba,la,this.withCredentials),ha;a.push(ha);return null};ja.prototype.Do=function(ca,ba,ha){var ia=this.tw(ca,ba,this.QB);(ca=this.dca(ia,ba,this.QB,ha,this.nf))&&ca.request.start(Object(h.d)(ca));return function(){var la=Object(h.c)(ia,ba,b);if(-1!==la){var ka=--b[la].wE;0===ka&&b[la].request&&b[la].request.abort()}else la=Object(h.c)(ia,ba,a),-1!==la&&(ka=--a[la].wE,0===ka&&a.splice(la,1))}};ja.prototype.uV=function(){return{start:-fa.a}};ja.prototype.Sfa=
function(){var ca=-(fa.a+fa.e);return{start:ca-fa.d,end:ca}};ja.prototype.Xt=function(ca){var ba=this;this.WB=!0;var ha=fa.a;this.Do(this.url,this.uV(),function(ia,la,ka){function qa(){var pa=ba.Bd.qV();ba.Do(ba.url,pa,function(ra,ua){if(ra)return Object(ma.j)("Error loading central directory: "+ra),ca(ra);ua=Object(aa.a)(ua);if(ua.length!==pa.stop-pa.start)return ca("Invalid XOD file: Zip central directory data is wrong size! Should be "+(pa.stop-pa.start)+" but is "+ua.length);ba.Bd.rZ(ua);ba.JI=
!0;ba.WB=!1;return ca(!1)})}if(ia)return Object(ma.j)("Error loading end header: "+ia),ca(ia,la,ka);la=Object(aa.a)(la);if(la.length!==ha)return ca("Invalid XOD file: Zip end header data is wrong size!");try{ba.Bd=new da.a(la)}catch(pa){return ca(pa)}ba.Bd.Aha?ba.Do(ba.url,ba.Sfa(),function(pa,ra){if(pa)return Object(ma.j)("Error loading zip64 header: "+pa),ca(pa);ra=Object(aa.a)(ra);ba.Bd.Tha(ra);qa()}):qa()})};ja.prototype.OV=function(ca){ca(Object.keys(this.Bd.$n))};ja.prototype.QM=function(ca,
ba){var ha=this;if(this.Bd.rT(ca)){var ia=this.Bd.ex(ca);if(ia in this.tj){var la=this.xh[ca];la.Ds=this.tj[ia];la.Ds.Nm++;la.cancel=la.Ds.cancel}else{var ka=this.Bd.bea(ca),qa=this.Do(this.url,ka,function(ra,ua){ra?(Object(ma.j)('Error loading part "'+ca+'": '+ra),ha.Do(ha.url,ka,function(va,sa){if(va)return ba(va,ca);ha.vZ(sa,ka,ia,ca,ba)})):ha.vZ(ua,ka,ia,ca,ba)}),pa=this.xh[ca];pa&&(pa.G0=!0,pa.cancel=function(){pa.Ds.Nm--;0===pa.Ds.Nm&&(qa(),delete ha.tj[ia])},this.tj[ia]=new f(ia),pa.Ds=this.tj[ia],
pa.Ds.cancel=pa.cancel)}}else delete this.xh[ca],ba(Error('File not found: "'+ca+'"'),ca)};ja.prototype.vZ=function(ca,ba,ha,ia,la){if(ca.length!==ba.stop-ba.start)la(Error("Part data is wrong size!"),ia);else{do{if(!this.tj[ha])return;ia=this.tj[ha].Nm;for(var ka=ba.er.length,qa=0;qa<ka;++qa){var pa=ba.er[qa];la(!1,pa.$q,ca["string"===typeof ca?"substring":"subarray"](pa.start,pa.stop),this.Bd.VW(pa.$q));pa.$q in this.xh&&delete this.xh[pa.$q]}}while(ia!==this.tj[ha].Nm);delete this.tj[ha]}};ja.DISABLE_RANGE_HEADER=
!1;ja.mP=3;return ja}(Ba.a);(function(ea){function ja(ca,ba,ha){var ia=ea.call(this)||this,la;for(la in ca)ia[la]=ca[la];ia.Fta=ca;ia.startOffset=ba;ia.endOffset=ha;ia.CT=function(ka,qa,pa,ra){Object(na.isUndefined)(qa.stop)?(qa.start+=ia.endOffset,qa.stop=ia.endOffset):(qa.start+=ia.startOffset,qa.stop+=ia.startOffset);ka=ia.tw(ia.url,qa,ia.QB);return new ca.Jy(ka,qa,pa,ra)};return ia}Object(oa.c)(ja,ea);return ja})(x);Object(r.a)(x);Object(r.b)(x);wa["default"]=x}}]);}).call(this || window)
