/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[21],{474:function(Ba,wa,r){r.r(wa);var oa=r(0),na=r(10),ma=r(2);Ba=r(48);var fa=r(23),da=r(11);r=function(){function aa(){this.init()}aa.prototype.init=function(){this.g9=!1;this.af=this.El=this.connection=null;this.zs={};this.fa=this.hG=null};aa.prototype.Xpa=function(w){for(var y=this,h=0;h<w.length;++h){var a=w[h];switch(a.at){case "create":this.zs[a.author]||(this.zs[a.author]=a.aName);this.oga(a);break;case "modify":this.fa.pm(a.xfdf).then(function(b){y.fa.kb(b[0])});
break;case "delete":this.fa.pm("<delete><id>"+a.aId+"</id></delete>")}}};aa.prototype.oga=function(w){var y=this;this.fa.pm(w.xfdf).then(function(h){h=h[0];h.authorId=w.author;y.fa.kb(h);y.fa.trigger(na.b.UPDATE_ANNOTATION_PERMISSION,[h])})};aa.prototype.Qfa=function(w,y,h){this.El&&this.El(w,y,h)};aa.prototype.preloadAnnotations=function(w){this.addEventListener("webViewerServerAnnotationsEnabled",this.Qfa.bind(this,w,"add",{imported:!1}),{once:!0})};aa.prototype.initiateCollaboration=function(w,
y,h){var a=this;if(w){a.af=y;a.fa=h.la();h.addEventListener(na.e.DOCUMENT_UNLOADED,function(){a.disableCollaboration()});a.xqa(w);var b=new XMLHttpRequest;b.addEventListener("load",function(){if(200===b.status&&0<b.responseText.length)try{var e=JSON.parse(b.responseText);a.connection=exports.Ta.fra(Object(fa.k)(a.af,"blackbox/"),"annot");a.hG=e.id;a.zs[e.id]=e.user_name;a.fa.BN(e.id);a.connection.dua(function(f){f.t&&f.t.startsWith("a_")&&f.data&&a.Xpa(f.data)},function(){a.connection.send({t:"a_retrieve",
dId:w});a.trigger(aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[a.zs[e.id],a.hG])},function(){a.disableCollaboration()})}catch(f){Object(ma.g)(f.message)}});b.open("GET",Object(fa.k)(this.af,"demo/SessionInfo.jsp"));b.withCredentials=!0;b.send();a.g9=!0;a.fa.H_(function(e){return a.zs[e.Author]||e.Author})}else Object(ma.g)("Document ID required for collaboration")};aa.prototype.disableCollaboration=function(){this.El&&(this.fa.removeEventListener(da.a.Events.ANNOTATION_CHANGED,this.El),this.El=
null);this.connection&&this.connection.iq();this.fa&&this.fa.BN("Guest");this.init();this.trigger(aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};aa.prototype.xqa=function(w){var y=this;this.El&&this.fa.removeEventListener(da.a.Events.ANNOTATION_CHANGED,this.El);this.El=function(h,a,b){return Object(oa.b)(this,void 0,void 0,function(){var e,f,n,z,x,ea,ja,ca,ba;return Object(oa.d)(this,function(ha){switch(ha.label){case 0:if(b.imported)return[2];e={t:"a_"+a,dId:w,annots:[]};return[4,y.fa.CJ()];case 1:f=
ha.ca();"delete"!==a&&(n=(new DOMParser).parseFromString(f,"text/xml"),z=new XMLSerializer);for(x=0;x<h.length;x++)ea=h[x],ca=ja=void 0,"add"===a?(ja=n.querySelector('[name="'+ea.Id+'"]'),ca=z.serializeToString(ja),ba=null,ea.InReplyTo&&(ba=y.fa.sf(ea.InReplyTo).authorId||"default"),e.annots.push({at:"create",aId:ea.Id,author:y.hG,aName:y.zs[y.hG],parent:ba,xfdf:"<add>"+ca+"</add>"})):"modify"===a?(ja=n.querySelector('[name="'+ea.Id+'"]'),ca=z.serializeToString(ja),e.annots.push({at:"modify",aId:ea.Id,
xfdf:"<modify>"+ca+"</modify>"})):"delete"===a&&e.annots.push({at:"delete",aId:ea.Id});0<e.annots.length&&y.connection.send(e);return[2]}})})}.bind(y);this.fa.addEventListener(da.a.Events.ANNOTATION_CHANGED,this.El)};aa.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return aa}();Object(Ba.a)(r);wa["default"]=r}}]);}).call(this || window)
