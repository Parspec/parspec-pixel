/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{495:function(Ba,wa,r){var oa=r(0);Ba=r(88);var na=r(49);r=function(ma){function fa(){return null!==ma&&ma.apply(this,arguments)||this}Object(oa.c)(fa,ma);fa.prototype.testSelection=function(da,aa,w){return na.a.Cl(da,aa,w)};return fa}(Ba.a);wa.a=r},87:function(Ba,wa,r){function oa(nb){return Object(xa.b)(void 0,void 0,void 0,function(){var sb,tb,qb,ya,Na,Ya,ab,mb,vb,db,ob,ub,Cb,Nb,kb;return Object(xa.d)(this,function(wb){switch(wb.label){case 0:return sb=
nb.wb,tb=nb.VE,qb=nb.WE,ya=nb.dL,Na=nb.qha,Ya=nb.bha,ab=Sa.getDocument(),mb=[1],[4,Object(Fa.c)(tb,{extension:"pdf"})];case 1:return vb=wb.ca(),db=Sa.la(),Cb=(ub=Ga.a).Yja,[4,vb.KC()];case 2:return ob=Cb.apply(ub,[wb.ca().xfdfString,sb]),Nb=!0,[4,ab.Rf(vb,mb,sb,Nb)];case 3:return wb.ca(),[4,ab.Eg([sb+1],Nb)];case 4:return wb.ca(),kb=db.nb().filter(function(Gb){return Gb.yL()&&Gb.PageNumber===sb}),db.If(kb,{force:!0,source:"contentEditTool"}),[4,db.eL(ob)];case 5:return wb.ca(),hb||(Sa.getDocument().XM(),
Sa.WM(sb),Sa.re()),aa(sb),Ya||Na||(ba(sb,qb.galleys,ya,Na),ba(sb,qb.objects,ya,Na)),[2]}})})}function na(nb){if(nb)return ma(nb.contents);Object(Oa.g)("Unable to extract document content")}function ma(nb){nb=(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body");nb.querySelectorAll("p").forEach(function(sb){sb.querySelectorAll("span").forEach(function(ya){var Na=ya.getAttribute("style");Na=fa(Na,ya.innerHTML);ya.innerHTML=Na});var tb=sb.getAttribute("style"),qb=sb.innerHTML.replaceAll("<br>",
"");sb.innerHTML=fa(tb,qb)});return nb.innerHTML.trim()}function fa(nb,sb){if(null===nb||void 0===nb?0:nb.includes("bold"))sb="<strong>"+sb+"</strong>";if(null===nb||void 0===nb?0:nb.includes("italic"))sb="<em>"+sb+"</em>";if((null===nb||void 0===nb?0:nb.includes("underline:1;"))||(null===nb||void 0===nb?0:nb.includes("text-decoration: underline")))sb="<u>"+sb+"</u>";return sb}function da(nb){if(["STRONG","EM","U"].includes(nb.tagName)&&null!==nb.getAttribute("style")){var sb=document.createElement("span"),
tb=nb.style.color;tb=ca(tb);sb.setAttribute("style","color:"+tb);nb.removeAttribute("style");sb.innerHTML=nb.innerHTML;nb.innerHTML="";nb.appendChild(sb)}else"SPAN"===nb.tagName&&null!==nb.getAttribute("style")?(tb=nb.style.color,tb=ca(tb),nb.setAttribute("style","color:"+tb)):"A"===nb.tagName&&nb.removeAttribute("style")}function aa(nb){var sb=Sa.la(),tb=sb.nb().filter(function(qb){return qb.Re()&&qb.PageNumber===nb});sb.If(tb,{force:!0,source:"contentEditTool"})}function w(nb,sb){sb.forEach(function(tb){Ha[nb]||
(Ha[nb]=[]);Ha[nb].find(function(qb){return qb.id===tb.id})||Ha[nb].push(tb)})}function y(nb,sb){sb.forEach(function(tb){Xa[nb]||(Xa[nb]=[]);Xa[nb].find(function(qb){return qb.id===tb.id})||Xa[nb].push(tb)})}function h(nb,sb,tb,qb){return Object(xa.b)(void 0,void 0,void 0,function(){var ya,Na,Ya,ab,mb,vb,db,ob,ub,Cb,Nb,kb,wb,Gb,Mb,Sb,Rb,Zb;return Object(xa.d)(this,function(za){switch(za.label){case 0:if(!nb)return[2];ya=sb.replaceAll("<p><br></p>","");Na=a(ya);Na=Na.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,
"$1");Na=Na.replace(/<span class="ql-cursor">(.*?)<\/span>/g,"");Ya=nb.ff.id;ab=nb.PageNumber;mb=Pa[ab];vb=mb.galleys.find(function(hc){return hc.id===Ya});db=ma(vb.contents);ob=ja(ab,mb,db,Na,Ya);if(""===ob)return[3,2];ub=new TextEncoder;Cb=ub.encode(ob);Nb=Cb.buffer;kb=Object(Ja.c)()||"https://www.pdftron.com/webfonts/v2/";wb=Sa.getDocument();return[4,wb.be([ab])];case 1:return Gb=za.ca(),ub=new TextEncoder,Mb=ub.encode(""),Sb=Mb.buffer,Va.postMessage({cmd:"importText",pdfFile:Gb,pageNumber:ab,
webFontURL:kb,galleyId:Ya,importData:Nb,tableData:Sb,isSearchReplace:tb,callbackMapId:qb},[Nb,Sb]),Rb={},vb&&(Zb=vb.galleyBox,Rb={top:Zb.top,left:Zb.left,bottom:Zb.bottom,right:Zb.right}),Object(Da.w)(db,Na,Rb),[3,3];case 2:Object(Oa.g)("Unable to generate import XML"),za.label=3;case 3:return[2]}})})}function a(nb){var sb=new DOMParser,tb=sb.parseFromString(nb,"text/xml");tb.querySelector("parsererror")&&(tb=sb.parseFromString("<Root>"+nb+"</Root>","text/xml"));tb.querySelectorAll("a").forEach(function(qb){var ya=
qb.childNodes[0];Array.from(qb.querySelectorAll("*")).find(function(Na){return"u"===Na.tagName.toLowerCase()})||(qb=document.createElement("u"),ya.after(qb),qb.appendChild(ya))});return(new XMLSerializer).serializeToString(tb)}function b(nb,sb,tb){return Object(xa.b)(void 0,void 0,void 0,function(){var qb,ya,Na,Ya;return Object(xa.d)(this,function(ab){switch(ab.label){case 0:return aa(sb),Xa[sb]=[],Ha[sb]=[],[4,nb.be([sb])];case 1:return qb=ab.ca(),ya=new TextEncoder,Na=ya.encode(""),Ya=Na.buffer,
Va.postMessage({cmd:"exportFile",pageNumber:sb,performExport:tb,pdfFile:qb,tableData:Ya},[qb,Ya]),[2]}})})}function e(nb){return Object(xa.b)(void 0,void 0,void 0,function(){return Object(xa.d)(this,function(){rb||(Sa=nb,rb=new Promise(function(sb,tb){var qb=window.Core.ContentEdit.getWorkerPath(),ya=window.Core.ContentEdit.getResourcePath();Va=new Worker(qb+"InfixServerModule.js");Va.onmessage=function(Na){ha(Na,sb,tb)};Va.postMessage({cmd:"isReady",resourcePath:ya})}));return[2,rb]})})}function f(nb,
sb,tb,qb){this.top=nb;this.left=sb;this.bottom=tb;this.right=qb;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.NS=function(ya){return this.topVal()!==ya.topVal()||this.leftVal()!==ya.leftVal()||
this.bottomVal()!==ya.bottomVal()||this.rightVal()!==ya.rightVal()}}function n(nb,sb,tb,qb,ya){this.id=nb;this.pagenum=sb;this.galleysContents=tb;this.contents=qb;this.galleyBox=ya;Object(Da.v)(Xa)}function z(nb,sb,tb,qb){this.id=sb;this.type=nb;this.bbox=tb;this.pagenum=qb}function x(nb,sb,tb,qb,ya){this.id=nb;this.pagecount=sb;this.pageBBox=tb;this.galleys=qb;this.objects=ya}function ea(nb,sb){this.family=nb;this.variations=sb}function ja(nb,sb,tb,qb,ya){var Na=[],Ya=[];(new DOMParser).parseFromString(qb,
"text/html").documentElement.querySelectorAll("p").forEach(function(ob,ub){Na[ub]=ob.innerHTML;Ya[ub]={fontSize:ob.style.fontSize,fontFamily:ob.style.fontFamily,color:ca(ob.style.color)}});tb=(new DOMParser).parseFromString(tb,"text/html");var ab=null;tb.documentElement.querySelectorAll("p").forEach(function(ob,ub){if(ub<Na.length){var Cb=(new DOMParser).parseFromString(Na[ub],"text/html").documentElement.querySelector("body");Cb.childNodes.forEach(function(kb){da(kb)});ob.innerHTML=Cb.innerHTML;
ab=ob.getAttribute("style");Cb=Ya[ub].fontSize?Ya[ub].fontSize:ob.style.fontSize;var Nb=Ya[ub].fontFamily?Ya[ub].fontFamily.replace(/\s+/g,"").replace(/['"]+/g,""):ob.style.fontFamily;ub=Ya[ub].color?Ya[ub].color:null;ab=ab.replace(/(font:.*?;)/i,"font:normal normal "+Cb+" "+Nb+";");ab=ab.replace("Italic","");ab=ab.replace("underline:1;","underline:0;");ab=ab.replace("text-decoration: underline;","text-decoration: none;");ub&&(ab=ab.replace(/(color:.*?;)/i,"color:"+ub+";"));ob.setAttribute("style",
ab)}else ob.remove()});for(qb=tb.documentElement.querySelectorAll("p").length;qb<Na.length;qb++){var mb=document.createElement("p");mb.setAttribute("id","0");var vb=(new DOMParser).parseFromString(Na[qb],"text/html").documentElement.querySelector("body");vb.childNodes.forEach(function(ob){da(ob)});mb.innerHTML=vb.innerHTML;null!=ab&&mb.setAttribute("style",ab);tb.documentElement.querySelector("body").appendChild(mb)}tb=tb.documentElement.querySelector("body").innerHTML;var db="";Xa[nb].forEach(function(ob){ob.id===
ya&&(db=ob)});if(""===db)return"";sb="<DOC id='"+sb.id+"' pagecount='"+sb.pagecount+"'>";sb=sb+("<STORY galley_ids='"+ya+"' pagenum='"+nb+"'><galleys>")+(db.galleysContents+"</galleys>");db.contents=tb;sb=sb+tb+"\n</STORY>";return sb+="</DOC>"}function ca(nb){return nb.startsWith("rgb(")?"#"+nb.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"").split(",").map(function(sb){return("00"+parseInt(sb,10).toString(16)).slice(-2)}).join(""):nb}function ba(nb,sb,tb,qb){var ya=[],Na=Sa.getDocument(),Ya=null;sb.forEach(function(ab){if(ab instanceof
z){var mb=Na.po(nb,ab.bbox.leftVal(),ab.bbox.topVal());var vb=mb.x;var db=mb.y;var ob=Na.po(nb,ab.bbox.rightVal(),ab.bbox.bottomVal());mb=ob.x;ob=ob.y}else if(ab instanceof n)mb=Na.po(nb,ab.galleyBox.leftVal(),ab.galleyBox.topVal()),vb=mb.x,db=mb.y,ob=Na.po(nb,ab.galleyBox.rightVal(),ab.galleyBox.bottomVal()),mb=ob.x,ob=ob.y;else return;var ub=new window.Core.Annotations.RectangleAnnotation,Cb=Ra.a.OBJECT;ab instanceof n&&(Cb=Ra.a.TEXT);ub.Mma(ab,Cb);ub.PageNumber=ab.pagenum;ub.X=vb;ub.Y=db;ub.Width=
mb-vb;ub.Height=ob-db;ub.StrokeColor=new Ia.a("#3183C8");ub.FillColor=new Ia.a(255,255,255,.01);ub.Style="dash";ub.Dashes="4,3";if(jb||qb)ub.NoView=!0,ub.Listable=!1;ub.Fw();ub.selectionModel=Aa.a;ya.push(ub);"undefined"!==typeof tb&&tb===ab.id&&(Ya=ub)});sb=Sa.la();sb.Zg(ya);!Ya||jb||qb||sb.Yf(Ya);sb.le(ya)}function ha(nb,sb,tb){return Object(xa.b)(this,void 0,void 0,function(){var qb,ya,Na,Ya,ab,mb,vb,db,ob,ub;return Object(xa.d)(this,function(Cb){switch(Cb.label){case 0:qb=nb.data;Na=qb.cmd;switch(Na){case "isReady":return[3,
1];case "initialiseInfixServer":return[3,3];case "loadAvailableFonts":return[3,4];case "exportFile":return[3,5];case "insertNewTextBox":return[3,6];case "importText":return[3,7];case "transformObject":return[3,7];case "alignParagraph":return[3,7];case "deleteObject":return[3,8];case "insertImage":return[3,9]}return[3,10];case 1:return[4,Object(Ma.b)()];case 2:return Ya=Cb.ca(),Va.postMessage({cmd:"initialiseInfixServer",l:Ya}),[3,10];case 3:return(ab=ia(qb.resultsXML))?(sb(),mb=Object(Ja.c)()||"https://www.pdftron.com/webfonts/v2/",
Va.postMessage({cmd:"loadAvailableFonts",webFontURL:mb})):tb("License key does not have content edit permission"),[3,10];case 4:return sa(qb.resultsXML),[3,10];case 5:return qb.exportPerformed?ka(qb.pageNumber,qb.exportXML,qb.objectXML,qb.resultsXML):(ya=Pa[qb.pageNumber],y(qb.pageNumber,ya.galleys),w(qb.pageNumber,ya.objects),aa(qb.pageNumber),ba(qb.pageNumber,ya.galleys),ba(qb.pageNumber,ya.objects)),bb.resolve(),cb&&cb[qb.pageNumber]&&cb[qb.pageNumber].resolve(),[3,10];case 6:return la(qb.pageNumber,
qb.exportXML,qb.contentHTML),ya=Pa[qb.pageNumber],oa({wb:qb.pageNumber,VE:qb.pdfBuffer,WE:ya,dL:qb.id}),[3,10];case 7:ya=Pa[qb.pageNumber];ua(qb.pageNumber,qb.resultsXML);oa({wb:qb.pageNumber,VE:qb.pdfBuffer,WE:ya,dL:qb.id,qha:qb.isSearchReplace});vb=qb.isSearchReplace;db=qb.callbackMapId;if(vb&&db&&Bb[db])Bb[db]();return[3,10];case 8:return ya=Pa[qb.pageNumber],ua(qb.pageNumber,qb.resultsXML),ya.galleys=ya.galleys.filter(function(Nb){return Nb.id!==qb.id}),ya.objects=ya.objects.filter(function(Nb){return Nb.id!==
qb.id}),ob={wb:qb.pageNumber,VE:qb.pdfBuffer,WE:ya},oa(ob),[3,10];case 9:return ya=Pa[qb.pageNumber],ua(qb.pageNumber,qb.resultsXML),ub={wb:qb.pageNumber,VE:qb.pdfBuffer,WE:ya,dL:qb.isText,bha:!0},oa(ub),[3,10];case 10:return[2]}})})}function ia(nb){nb=new Uint8Array(nb);var sb=(new TextDecoder("utf-8")).decode(nb);nb=!1;sb=(new DOMParser).parseFromString(sb,"text/xml").getElementsByTagName("LicenseCheck");null!==sb&&0<sb.length&&(sb=sb[0].getElementsByTagName("Status")[0].innerHTML,"error"!==sb&&
"ok"===sb&&(nb=!0));return nb}function la(nb,sb){sb=(new TextDecoder("utf-8")).decode(sb);sb=(new DOMParser).parseFromString(sb,"text/xml").getElementsByTagName("STORY");var tb=Array.prototype.slice.call(sb)[0];sb=tb.getAttribute("galley_ids");var qb=Array.prototype.slice.call(tb.getElementsByTagName("g"))[0],ya=qb.getAttribute("bbox").split(" ");ya=new f(parseFloat(ya[0]),parseFloat(ya[1]),parseFloat(ya[2]),parseFloat(ya[3]));qb=qb.innerHTML;var Na=Array.prototype.slice.call(tb.getElementsByTagName("galleys"))[0];
Na.parentNode.removeChild(Na);tb=ra(tb.innerHTML).trim();sb=new n(sb,nb,qb,tb,ya);tb=Pa[nb];ya=tb.galleys;ya.push(sb);tb.galleys=ya;Pa[nb]=tb;y(nb,tb.galleys);w(nb,tb.objects);aa(nb);ba(nb,tb.galleys);ba(nb,tb.objects)}function ka(nb,sb,tb,qb){var ya=new Uint8Array(sb),Na=new TextDecoder("utf-8");sb=Na.decode(ya);ya=new Uint8Array(tb);tb=Na.decode(ya);ya=new Uint8Array(qb);qb=Na.decode(ya);Pa[nb]=pa(nb,sb,tb,qb);qb=Pa[nb];y(nb,qb.galleys);w(nb,qb.objects);aa(nb);ba(nb,qb.galleys);ba(nb,qb.objects)}
function qa(nb,sb){nb=parseFloat(nb);return isNaN(sb)||sb<nb?nb:sb}function pa(nb,sb,tb,qb){var ya;var Na=new DOMParser;qb=Na.parseFromString(qb,"text/xml");Array.prototype.slice.call(qb.getElementsByTagName("BBox")).forEach(function(mb){if("CropBox"===mb.getAttribute("Name")){var vb=parseFloat(mb.getElementsByTagName("Top").item(0).innerHTML),db=parseFloat(mb.getElementsByTagName("Bottom").item(0).innerHTML),ob=parseFloat(mb.getElementsByTagName("Left").item(0).innerHTML);mb=parseFloat(mb.getElementsByTagName("Right").item(0).innerHTML);
ya=new f(vb,ob,db,mb)}});Na=new DOMParser;qb=Na.parseFromString(sb,"text/xml");var Ya=[];Array.prototype.slice.call(qb.getElementsByTagName("STORY")).forEach(function(mb){var vb=mb.getAttribute("galley_ids"),db=Array.prototype.slice.call(mb.getElementsByTagName("g"))[0],ob=db.getAttribute("bbox").split(" ");ob=new f(parseFloat(ob[0]),parseFloat(ob[1]),parseFloat(ob[2]),parseFloat(ob[3]));db=db.innerHTML;var ub=Array.prototype.slice.call(mb.getElementsByTagName("galleys"))[0];ub.parentNode.removeChild(ub);
mb=ra(mb.innerHTML).trim();vb=new n(vb,nb,db,mb,ob);Ya.push(vb)});Na=new DOMParser;var ab=[];sb=Na.parseFromString(tb,"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(sb).forEach(function(mb){var vb=mb.getAttribute("Type"),db=mb.getAttribute("OID");mb=Array.prototype.slice.call(mb.getElementsByTagName("Point"));var ob=Number.NaN,ub=Number.NaN,Cb=Number.NaN,Nb=Number.NaN;mb.forEach(function(kb){var wb=kb.getAttribute("Name");"TL"===wb?(ob=qa(kb.getAttribute("Y"),ob),Cb=qa(kb.getAttribute("X"),
Cb)):"TR"===wb?(ob=qa(kb.getAttribute("Y"),ob),Nb=qa(kb.getAttribute("X"),Nb)):"BR"===wb?(ub=qa(kb.getAttribute("Y"),ub),Nb=qa(kb.getAttribute("X"),Nb)):"BL"===wb&&(ub=qa(kb.getAttribute("Y"),ub),Cb=qa(kb.getAttribute("X"),Cb))});mb=new f(ob,Cb,ub,Nb);vb=new z(vb,db,mb,nb);ab.push(vb)});sb=Array.prototype.slice.call(qb.getElementsByTagName("DOC"))[0].getAttribute("id");return new x(sb,1,ya,Ya,ab)}function ra(nb){return(new DOMParser).parseFromString(nb,"text/html").documentElement.querySelector("body").innerHTML}
function ua(nb,sb){var tb;sb=(new TextDecoder("utf-8")).decode(sb);var qb=(new DOMParser).parseFromString(sb,"text/xml");sb=qb.getElementsByTagName("Galley").item(0);if(null!=sb){var ya=sb.getAttribute("id");sb=qb.getElementsByTagName("BBox");sb=Array.prototype.slice.call(sb);sb.forEach(function(ab){var mb=ab.getElementsByTagName("Top"),vb=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Left");var db=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Bottom");var ob=parseFloat(mb.item(0).innerHTML);
mb=ab.getElementsByTagName("Right");ab=parseFloat(mb.item(0).innerHTML);tb=new f(vb,db,ob,ab)});Xa[nb].forEach(function(ab){ab.id===ya&&!0===tb.NS(ab.galleyBox)&&(ab.galleyBox=tb)})}sb=qb.getElementsByTagName("Object").item(0);if(null!=sb){var Na=sb.getAttribute("OID");sb=qb.getElementsByTagName("BBox");sb=Array.prototype.slice.call(sb);sb.forEach(function(ab){var mb=ab.getElementsByTagName("Top"),vb=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Left");var db=parseFloat(mb.item(0).innerHTML);
mb=ab.getElementsByTagName("Bottom");var ob=parseFloat(mb.item(0).innerHTML);mb=ab.getElementsByTagName("Right");ab=parseFloat(mb.item(0).innerHTML);tb=new f(vb,db,ob,ab)});Ha[nb].forEach(function(ab){ab.id===Na&&!0===tb.NS(ab.bbox)&&(ab.bbox=tb)})}sb=qb.getElementsByTagName("NewParas").item(0);if(null!=sb){var Ya=sb.getAttribute("id");Xa[nb].forEach(function(ab){if(ab.id===Ya){var mb="<Contents>"+ab.contents;mb+="</Contents>";var vb=Array.prototype.slice.call(qb.getElementsByTagName("NewPara"));
mb=(new DOMParser).parseFromString(mb,"text/xml");var db=Array.prototype.slice.call(mb.getElementsByTagName("p"));vb.forEach(function(ob){var ub=parseFloat(ob.innerHTML),Cb=!1;db.forEach(function(Nb){var kb=Nb.getAttribute("id");!1===Cb&&"0"===kb&&(Nb.setAttribute("id",ub),Cb=!0)})});ab.contents=mb.getElementsByTagName("Contents").item(0).innerHTML}})}}function va(nb){return{regex:0!==(nb&Qa.f.rv),wildcard:0!==(nb&Qa.f.Mr),wholeWord:0!==(nb&Qa.f.tv),caseSensitive:0!==(nb&Qa.f.Br)}}function sa(nb){nb=
new Uint8Array(nb);nb=(new TextDecoder("utf-8")).decode(nb);nb=(new DOMParser).parseFromString(nb,"text/xml").getElementsByTagName("Font");var sb={};Array.prototype.slice.call(nb).forEach(function(tb){var qb=tb.getAttribute("Family");qb in sb||(sb[qb]={});var ya=[];Array.prototype.slice.call(tb.getElementsByTagName("Variation")).forEach(function(Na){Na=Na.innerHTML;ya.push(Na);if(Na.includes("Regular")||Na===qb.replace(/\s+/g,""))sb[qb].hasRegular=!0;Na.includes("Bold")&&(sb[qb].hasBold=!0);Na.includes("Italic")&&
(sb[qb].hasItalic=!0)});tb=new ea(qb,ya);pb.push(tb)});Ab=Object.keys(sb).filter(function(tb){return sb[tb].hasRegular&&sb[tb].hasBold&&sb[tb].hasItalic})}r.r(wa);var xa=r(0),Fa=r(56),Ia=r(7),Aa=r(495),Ja=r(39),Ma=r(75),Oa=r(2),Ra=r(172),Da=r(54),Ga=r(6),Ua=r(141),Qa=r(25),Wa=r(10),eb=r(23),Va=null,rb=null,jb=!1,hb=!1,Xa={},Ha={},Pa={},Sa,bb=window.createPromiseCapability(),cb=[],pb=[],Ab=[],Bb={};wa["default"]={Uja:e,Wja:b,r$:function(nb){return Object(xa.b)(void 0,void 0,void 0,function(){var sb,
tb,qb,ya,Na,Ya,ab,mb;return Object(xa.d)(this,function(vb){switch(vb.label){case 0:return sb=nb.id,tb=nb.isText,qb=nb.pageNumber,ya=Sa.getDocument(),[4,ya.be([qb])];case 1:return Na=vb.ca(),Ya=new TextEncoder,ab=Ya.encode(""),mb=ab.buffer,Va.postMessage({cmd:"deleteObject",pdfFile:Na,pageNumber:qb,objectID:sb,isText:tb,tableData:mb},[mb]),[2]}})})},Kpa:function(nb){return Object(xa.b)(void 0,void 0,void 0,function(){var sb,tb,qb,ya,Na,Ya,ab,mb,vb,db,ob,ub,Cb;return Object(xa.d)(this,function(Nb){switch(Nb.label){case 0:return sb=
nb.id,tb=nb.position,qb=tb.top,ya=tb.left,Na=tb.bottom,Ya=tb.right,ab=nb.isText,mb=nb.pageNumber,vb=Sa.getDocument(),[4,vb.be([mb])];case 1:return db=Nb.ca(),ob=new TextEncoder,ub=ob.encode(""),Cb=ub.buffer,Va.postMessage({cmd:"transformObject",pdfFile:db,pageNumber:mb,objectID:sb,isText:ab,topVal:qb,leftVal:ya,bottomVal:Na,rightVal:Ya,tableData:Cb},[Cb]),[2]}})})},d7:function(nb,sb){return Object(xa.b)(void 0,void 0,void 0,function(){var tb,qb,ya,Na,Ya,ab,mb,vb,db,ob,ub,Cb,Nb,kb,wb;return Object(xa.d)(this,
function(Gb){switch(Gb.label){case 0:return tb="<DOC><STORY><galleys></galleys>",qb=[],ya=(new DOMParser).parseFromString(sb,"text/html"),ya.documentElement.querySelectorAll("p").forEach(function(Mb,Sb){qb[Sb]=Mb.innerHTML}),qb.forEach(function(Mb,Sb){Mb=(new DOMParser).parseFromString(qb[Sb],"text/html").documentElement.querySelector("body");Mb.childNodes.forEach(function(Rb){da(Rb)});tb+="<p>"+Mb.innerHTML+"</p>"}),tb+="</STORY></DOC>",Na=nb.pageNumber,Ya=Sa.getDocument(),ab=nb.position,mb=ab.top,
vb=ab.left,db=ab.bottom,ob=ab.right,ub=nb.defaultText,Cb=nb.font,Nb=nb.fontSize,kb=nb.textColor,[4,Ya.be([Na])];case 1:return wb=Gb.ca(),Va.postMessage({cmd:"insertNewTextBox",pdfFile:wb,pageNumber:Na,topVal:mb,leftVal:vb,bottomVal:db,rightVal:ob,defaultText:ub,font:Cb,fontSize:Nb,textColor:kb,importData:tb,content:sb}),[2]}})})},cqa:h,Qda:na,gma:function(nb){return Object(xa.b)(this,void 0,void 0,function(){var sb,tb,qb,ya,Na,Ya,ab,mb,vb,db,ob,ub,Cb,Nb,kb,wb,Gb,Mb,Sb,Rb,Zb,za,hc=this;return Object(xa.d)(this,
function(sc){switch(sc.label){case 0:sb=nb.replaceWith;tb=nb.documentViewer;qb=nb.search;ya=nb.searchResults;if(tb){if(!ya&&!qb)throw Error('The "searchResults" parameter is missing in the options');if(void 0===sb)throw Error('The "replaceWith" parameter should not be undefined');}else throw Error('The "documentViewer" parameter is missing in the options');Na=1===ya.length;qb?(Ya=qb.E8,ab=qb.Aqa):(mb=va(tb.bK()),Ya=mb.E8,ab=mb.Aqa);vb=null;db=[];if(Na)vb=ya[0],db=[vb.pageNum];else try{db=Object.keys(ya.reduce(function(wc,
Gc){wc[Gc.pageNum]=Gc.pageNum;return wc},{})).map(function(wc){return Number(wc)})}catch(wc){Object(Oa.i)(wc)}ob=0;if(vb)for(ub=tb.qk(),Cb=-1,Nb=0,kb=ub.length;Nb<kb&&(wb=ub[Nb],wb.pageNum===Cb?ob++:(Cb=wb.pageNum,ob=0),!Object(Ua.a)(wb,vb));Nb++);Gb=ya[0].resultStr;Mb=Ya?"mg":"mgi";Sb=ab?"\\b("+Gb+")\\b":"("+Gb+")";Rb=new RegExp("(?<!</?[^>]*|&[^;]*)"+Sb,Mb);bb=window.createPromiseCapability();return rb?[3,2]:[4,e(tb)];case 1:sc.ca(),sc.label=2;case 2:return jb=!0,Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_STARTED),
Zb=0,za=db.map(function(wc){return Object(xa.b)(hc,void 0,void 0,function(){var Gc,Mc=this;return Object(xa.d)(this,function(){Gc=new Promise(function(dd,Rc){return Object(xa.b)(Mc,void 0,void 0,function(){var Bd=this;return Object(xa.d)(this,function(je){switch(je.label){case 0:return cb[wc]=window.createPromiseCapability(),[4,b(tb.getDocument(),wc,!0)];case 1:return je.ca(),cb[wc].promise.then(function(){return Object(xa.b)(Bd,void 0,void 0,function(){function kc(ed,ve){return Object(xa.b)(this,
void 0,void 0,function(){var Qd,Wc;return Object(xa.d)(this,function(Xc){switch(Xc.label){case 0:Qd=Object(eb.f)(),Bb[Qd]=function(){delete Bb[Qd];dd(!0);Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_REPLACED)},Xc.label=1;case 1:return Xc.fg.push([1,3,,4]),[4,h(ed,ve,!0,Qd)];case 2:return Xc.ca(),[3,4];case 3:return Wc=Xc.ca(),Object(Oa.i)(Wc),Rc(Wc),[3,4];case 4:return[2]}})})}var jc,Yd,ke,Cd,Hd,le,oc,Zd,Vc,nd,Dd,Dc,Pd,me,$d,Id,Jd;return Object(xa.d)(this,function(){jc=Sa.la();Yd=jc.nb().filter(function(ed){return ed.PageNumber===
wc}).filter(function(ed){return ed.Re()}).concat();ke=[];Hd=Cd=0;for(le=Yd.length;Hd<le;Hd++){oc=Yd[Hd];Zd=oc.ff;Vc=na(Zd);nd=[];try{for(Dd=void 0;null!==(Dd=Rb.exec(Vc));)nd.push(Dd),ke.push(ya[Zb]),Zb++}catch(ed){Object(Oa.i)(ed)}if(nd.length)if(Cd+=nd.length,Na&&Cd>ob){Dc=Math.abs(Cd-nd.length-ob);Pd=nd[Dc].index;me=Vc.substr(0,Pd);$d=sb;Id=Vc.substr(Pd+Gb.length,Vc.length);Jd=""+me+$d+Id;Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_FOUND,[[vb]]);kc(oc,Jd);break}else Na||(hb=!0,Jd=Vc.replace(Rb,sb),
Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_TEXT_FOUND,[ke]),kc(oc,Jd))}return[2]})})}).catch(Rc),[2]}})})});return[2,Gc]})})}),[2,Promise.all(za).then(function(){Na&&vb?setTimeout(function(){var Mc=[];tb.xz(ya[0].resultStr,tb.bK(),{startPage:db[0],endPage:db[0],fullSearch:!0,onDocumentEnd:function(){hb=jb=!1;Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_ENDED);tb.GO(db[0]-1,Mc)},onResult:function(dd){dd.resultCode===Qa.e.jn&&Mc.push(dd)}})},200):(tb.jT(),tb.Mm(),tb.re(),hb=jb=!1,Da.a.trigger(Wa.d.SEARCH_AND_REPLACE_ENDED));
var wc=Sa.la(),Gc=wc.nb().filter(function(Mc){return Mc.Re()});wc.If(Gc,{force:!0,source:"contentEditTool"})})]}})})},Nma:function(nb,sb){var tb=ma(nb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.fontFamily=sb});tb=ya.serializeToString(tb);h(nb,tb)},Oma:function(nb,sb){var tb=ma(nb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");
var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.fontSize=sb});tb=ya.serializeToString(tb);h(nb,tb)},p7:function(nb,sb){return Object(xa.b)(void 0,void 0,void 0,function(){var tb,qb,ya,Na,Ya,ab,mb;return Object(xa.d)(this,function(vb){switch(vb.label){case 0:return tb=nb.ff.id,qb=nb.PageNumber,ya=Sa.getDocument(),[4,ya.be([qb])];case 1:return Na=vb.ca(),Ya=new TextEncoder,ab=Ya.encode(""),mb=ab.buffer,Va.postMessage({cmd:"AlignParaText",pdfFile:Na,pageNumber:qb,
galleyID:tb,alignment:sb,topVal1:"",leftVal1:"",bottomVal1:"",rightVal1:"",topVal2:"",leftVal2:"",bottomVal2:"",rightVal2:"",tableData:mb},[mb]),[2]}})})},f8:function(nb){var sb=ma(nb.ff.contents);sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("body");var tb=sb.querySelectorAll("p"),qb=new XMLSerializer,ya="bold"===tb[0].style.fontWeight,Na=qb.serializeToString(tb[0]).includes("<strong>");tb.forEach(function(Ya){if(ya||Na){Ya.style.fontWeight="normal";var ab=qb.serializeToString(Ya).replace(/<strong>/g,
"");ab=ab.replace(/<\/strong>/g,"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.fontWeight="bold",Ya.innerHTML="<strong>"+Ya.innerHTML.trim()+"</strong>"});sb=qb.serializeToString(sb);h(nb,sb)},Bha:function(nb){var sb=ma(nb.ff.contents);sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("body");var tb=sb.querySelectorAll("p"),qb=new XMLSerializer,ya="italic"===tb[0].style.fontStyle,
Na=qb.serializeToString(tb[0]).includes("<em>");tb.forEach(function(Ya){if(ya||Na){Ya.style.fontStyle="normal";Ya.style.font.includes("Italic")&&(Ya.style.font=Ya.style.font.replace("Italic",""));var ab=qb.serializeToString(Ya).replace(/<em>/g,"");ab=ab.replace(/<\/em>/g,"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.fontStyle="italic",Ya.innerHTML="<em>"+Ya.innerHTML.trim()+"</em>"});sb=qb.serializeToString(sb);
h(nb,sb)},Qpa:function(nb){var sb=ma(nb.ff.contents);sb=(new DOMParser).parseFromString(sb,"text/html").documentElement.querySelector("body");var tb=sb.querySelectorAll("p"),qb=new XMLSerializer,ya=tb[0].style.textDecoration.includes("underline")||tb[0].style.textDecoration.includes("word"),Na=qb.serializeToString(tb[0]).includes("<u>");tb.forEach(function(Ya){if(ya||Na){Ya.style.textDecoration=Ya.style.textDecoration.replace("underline","");var ab=qb.serializeToString(Ya).replace(/<u>/g,"");ab=ab.replace(/<\/u>/g,
"");ab=(new DOMParser).parseFromString(ab,"text/html").documentElement.querySelector("p");Ya.parentElement.replaceChild(ab,Ya)}else Ya.style.textDecoration.includes("none")?Ya.style.textDecoration=Ya.style.textDecoration.replace("none","underline"):Ya.style.textDecoration+=" underline",Ya.innerHTML="<u>"+Ya.innerHTML.trim()+"</u>"});sb=qb.serializeToString(sb);h(nb,sb)},Boa:function(nb,sb){var tb=ma(nb.ff.contents);tb=(new DOMParser).parseFromString(tb,"text/html").documentElement.querySelector("body");
var qb=tb.querySelectorAll("p"),ya=new XMLSerializer;qb.forEach(function(Na){Na.style.color=sb});tb.querySelectorAll("span").forEach(function(Na){Na.setAttribute("style","color:"+sb)});tb=ya.serializeToString(tb);h(nb,tb)},Dda:function(){return Ab},b7:function(nb){return Object(xa.b)(void 0,void 0,void 0,function(){var sb,tb,qb,ya,Na,Ya,ab,mb,vb,db;return Object(xa.d)(this,function(ob){switch(ob.label){case 0:return sb=nb.pageNumber,tb=nb.newImage,qb=nb.scaleType,ya=nb.position,Na=ya.top,Ya=ya.left,
ab=ya.bottom,mb=ya.right,vb=Sa.getDocument(),[4,vb.be([sb])];case 1:return db=ob.ca(),Va.postMessage({cmd:"insertImage",pdfFile:db,pageNumber:sb,newImage:tb,scaleType:qb,topVal:Na,leftVal:Ya,bottomVal:ab,rightVal:mb},[]),[2]}})})}}}}]);}).call(this || window)
