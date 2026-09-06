(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="169",Kh=0,Yl=1,jh=2,fu=1,Zh=2,Ln=3,ei=0,Ne=1,xn=2,jn=0,rr=1,Br=2,$l=3,Kl=4,Jh=5,Mi=100,Qh=101,td=102,ed=103,nd=104,id=200,rd=201,sd=202,ad=203,so=204,ao=205,od=206,ld=207,cd=208,ud=209,hd=210,dd=211,fd=212,pd=213,md=214,oo=0,lo=1,co=2,hr=3,uo=4,ho=5,fo=6,po=7,pu=0,_d=1,gd=2,Zn=0,vd=1,xd=2,Md=3,Sd=4,yd=5,Ed=6,Td=7,mu=300,dr=301,fr=302,mo=303,_o=304,na=306,go=1e3,yi=1001,vo=1002,an=1003,bd=1004,rs=1005,pn=1006,pa=1007,Ei=1008,Fn=1009,_u=1010,gu=1011,Gr=1012,ul=1013,Pi=1014,Un=1015,Zr=1016,hl=1017,dl=1018,pr=1020,vu=35902,xu=1021,Mu=1022,mn=1023,Su=1024,yu=1025,sr=1026,mr=1027,Eu=1028,fl=1029,Tu=1030,pl=1031,ml=1033,Ls=33776,Ds=33777,Is=33778,Us=33779,xo=35840,Mo=35841,So=35842,yo=35843,Eo=36196,To=37492,bo=37496,Ao=37808,wo=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Do=37814,Io=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,Ns=36492,ko=36494,Ho=36495,bu=36283,Go=36284,Vo=36285,Wo=36286,Ad=3200,wd=3201,Au=0,Rd=1,qn="",_n="srgb",ai="srgb-linear",_l="display-p3",ia="display-p3-linear",Gs="linear",ne="srgb",Vs="rec709",Ws="p3",Ni=7680,jl=519,Cd=512,Pd=513,Ld=514,wu=515,Dd=516,Id=517,Ud=518,Nd=519,Xo=35044,Zl="300 es",Nn=2e3,Xs=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,qo=180/Math.PI;function Jn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function De(r,t,e){return Math.max(t,Math.min(e,r))}function Fd(r,t){return(r%t+t)%t}function _a(r,t,e){return(1-e)*r+e*t}function Mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],M=i[1],x=i[4],T=i[7],y=i[2],w=i[5],A=i[8];return s[0]=a*_+o*M+l*y,s[3]=a*f+o*x+l*w,s[6]=a*p+o*T+l*A,s[1]=c*_+u*M+d*y,s[4]=c*f+u*x+d*w,s[7]=c*p+u*T+d*A,s[2]=h*_+m*M+g*y,s[5]=h*f+m*x+g*w,s[8]=h*p+m*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=e*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Ft;function Ru(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Od(){const r=qs("canvas");return r.style.display="block",r}const Jl={};function Fs(r){r in Jl||(Jl[r]=!0,console.warn(r))}function Bd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function zd(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ql=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[ai]:{transfer:Gs,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[_n]:{transfer:ne,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ia]:{transfer:Gs,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(tc),fromReference:r=>r.applyMatrix3(Ql)},[_l]:{transfer:ne,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(tc),fromReference:r=>r.applyMatrix3(Ql).convertLinearToSRGB()}},Hd=new Set([ai,ia]),Yt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Hd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Tr[t].toReference,i=Tr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Tr[r].primaries},getTransfer:function(r){return r===qn?Gs:Tr[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Tr[t].luminanceCoefficients)}};function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function va(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fi;class Gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=qs("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ar(e[n]/255)*255):e[n]=ar(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class Cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(xa(i[a].image)):s.push(xa(i[a]))}else s=xa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class Ce extends yr{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=yi,i=yi,s=pn,a=Ei,o=mn,l=Fn,c=Ce.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Jn(),this.name="",this.source=new Cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=mu;Ce.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,T=(m+1)/2,y=(p+1)/2,w=(u+h)/4,A=(d+_)/4,R=(g+f)/4;return x>T&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=A/n):T>y?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=w/i,s=R/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends yr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pu extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qd extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==m||u!==g){let f=1-o;const p=l*h+c*m+u*g+d*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const y=Math.sqrt(x),w=Math.atan2(y,p*M);f=Math.sin(f*w)/y,o=Math.sin(o*w)/y}const T=o*M;if(l=l*f+h*T,c=c*f+m*T,u=u*f+g*T,d=d*f+_*T,f===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*m-c*h,t[e+1]=l*g+u*h+c*d-o*m,t[e+2]=c*g+u*m+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new F,ec=new Jr;class Qr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),as.subVectors(this.max,br),Oi.subVectors(t.a,br),Bi.subVectors(t.b,br),zi.subVectors(t.c,br),kn.subVectors(Bi,Oi),Hn.subVectors(zi,Bi),ci.subVectors(Oi,zi);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ci.z,ci.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ci.z,0,-ci.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ci.y,ci.x,0];return!Sa(e,Oi,Bi,zi,as)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Oi,Bi,zi,as))?!1:(os.crossVectors(kn,Hn),e=[os.x,os.y,os.z],Sa(e,Oi,Bi,zi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],hn=new F,ss=new Qr,Oi=new F,Bi=new F,zi=new F,kn=new F,Hn=new F,ci=new F,br=new F,as=new F,os=new F,ui=new F;function Sa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yd=new Qr,Ar=new F,ya=new F;class ra{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(ya)),this.expandByPoint(Ar.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new F,Ea=new F,ls=new F,Gn=new F,Ta=new F,cs=new F,ba=new F;class Lu{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ea.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Ea);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=Gn.dot(this.direction),l=-Gn.dot(ls),c=Gn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ea).addScaledVector(ls,h),m}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,s){Ta.subVectors(e,t),cs.subVectors(n,t),ba.crossVectors(Ta,cs);let a=this.direction.dot(ba),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(cs.crossVectors(Gn,cs));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(ba);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,l,c,u,d,h,m,g,_,f){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,d,h,m,g,_,f)}set(t,e,n,i,s,a,o,l,c,u,d,h,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,g=c*u,_=c*d;e[0]=h+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,g=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Kd)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Vn.crossVectors(n,Ve),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Vn.crossVectors(n,Ve)),Vn.normalize(),us.crossVectors(Ve,Vn),i[0]=Vn.x,i[4]=us.x,i[8]=Ve.x,i[1]=Vn.y,i[5]=us.y,i[9]=Ve.y,i[2]=Vn.z,i[6]=us.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],M=n[3],x=n[7],T=n[11],y=n[15],w=i[0],A=i[4],R=i[8],L=i[12],v=i[1],E=i[5],O=i[9],D=i[13],V=i[2],X=i[6],B=i[10],Y=i[14],z=i[3],st=i[7],it=i[11],ct=i[15];return s[0]=a*w+o*v+l*V+c*z,s[4]=a*A+o*E+l*X+c*st,s[8]=a*R+o*O+l*B+c*it,s[12]=a*L+o*D+l*Y+c*ct,s[1]=u*w+d*v+h*V+m*z,s[5]=u*A+d*E+h*X+m*st,s[9]=u*R+d*O+h*B+m*it,s[13]=u*L+d*D+h*Y+m*ct,s[2]=g*w+_*v+f*V+p*z,s[6]=g*A+_*E+f*X+p*st,s[10]=g*R+_*O+f*B+p*it,s[14]=g*L+_*D+f*Y+p*ct,s[3]=M*w+x*v+T*V+y*z,s[7]=M*A+x*E+T*X+y*st,s[11]=M*R+x*O+T*B+y*it,s[15]=M*L+x*D+T*Y+y*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*m-n*l*m)+_*(+e*l*m-e*c*h+s*a*h-i*a*m+i*c*u-s*l*u)+f*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-e*l*d+e*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],M=d*f*c-_*h*c+_*l*m-o*f*m-d*l*p+o*h*p,x=g*h*c-u*f*c-g*l*m+a*f*m+u*l*p-a*h*p,T=u*_*c-g*d*c+g*o*m-a*_*m-u*o*p+a*d*p,y=g*d*l-u*_*l-g*o*h+a*_*h+u*o*f-a*d*f,w=e*M+n*x+i*T+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=M*A,t[1]=(_*h*s-d*f*s-_*i*m+n*f*m+d*i*p-n*h*p)*A,t[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*p+n*l*p)*A,t[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*m-n*l*m)*A,t[4]=x*A,t[5]=(u*f*s-g*h*s+g*i*m-e*f*m-u*i*p+e*h*p)*A,t[6]=(g*l*s-a*f*s-g*i*c+e*f*c+a*i*p-e*l*p)*A,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*m+e*l*m)*A,t[8]=T*A,t[9]=(g*d*s-u*_*s-g*n*m+e*_*m+u*n*p-e*d*p)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*A,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*m-e*o*m)*A,t[12]=y*A,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*f+e*d*f)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*f-e*o*f)*A,t[15]=(a*d*i-u*o*i+u*n*l-e*d*l-a*n*h+e*o*h)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,g=s*d,_=a*u,f=a*d,p=o*d,M=l*c,x=l*u,T=l*d,y=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*y,i[1]=(m+T)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(m-T)*w,i[5]=(1-(h+p))*w,i[6]=(f+M)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(f-M)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ki.set(i[0],i[1],i[2]).length();const a=ki.set(i[4],i[5],i[6]).length(),o=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/s,u=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Nn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let m,g;if(o===Nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Xs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Nn){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(a-s),h=(e+t)*c,m=(n+i)*u;let g,_;if(o===Nn)g=(a+s)*d,_=-2*d;else if(o===Xs)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new F,dn=new ie,$d=new F(0,0,0),Kd=new F(1,1,1),Vn=new F,us=new F,Ve=new F,nc=new ie,ic=new Jr;class En{constructor(t=0,e=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jd=0;const rc=new F,Hi=new Jr,Rn=new ie,hs=new F,wr=new F,Zd=new F,Jd=new Jr,sc=new F(1,0,0),ac=new F(0,1,0),oc=new F(0,0,1),lc={type:"added"},Qd={type:"removed"},Gi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class be extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new F,e=new En,n=new Jr,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(wr,hs,this.up):Rn.lookAt(hs,wr,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new F(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new F,Cn=new F,wa=new F,Pn=new F,Vi=new F,Wi=new F,cc=new F,Ra=new F,Ca=new F,Pa=new F,La=new jt,Da=new jt,Ia=new jt;class sn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fn.subVectors(i,e),Cn.subVectors(n,e),wa.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Cn),l=fn.dot(wa),c=Cn.dot(Cn),u=Cn.dot(wa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return La.setScalar(0),Da.setScalar(0),Ia.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(La,s.x),a.addScaledVector(Da,s.y),a.addScaledVector(Ia,s.z),a}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Cn.subVectors(t,e),fn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),fn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Vi.subVectors(i,n),Wi.subVectors(s,n),Ra.subVectors(t,n);const l=Vi.dot(Ra),c=Wi.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,i);const u=Vi.dot(Ca),d=Wi.dot(Ca);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Vi,a);Pa.subVectors(t,s);const m=Vi.dot(Pa),g=Wi.dot(Pa);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Wi,o);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return cc.subVectors(s,i),o=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(cc,o);const p=1/(f+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Fd(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ua(a,s,t+1/3),this.g=Ua(a,s,t),this.b=Ua(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Yt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(De(Ee.r*255,0,255))*65536+Math.round(De(Ee.g*255,0,255))*256+Math.round(De(Ee.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,s=Ee.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=_n){Yt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(ds);const n=_a(Wn.h,ds.h,e),i=_a(Wn.s,ds.s,e),s=_a(Wn.l,ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=Iu;let tf=0;class Di extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=rr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ao,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ys extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new F,fs=new Ot;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}}class Uu extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nu extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ze extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const nn=new ie,Na=new be,Xi=new F,We=new Qr,Rr=new Qr,ve=new F;class cn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?Nu:Uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(We.min,Rr.min),We.expandByPoint(ve),ve.addVectors(We.max,Rr.max),We.expandByPoint(ve)):(We.expandByPoint(Rr.min),We.expandByPoint(Rr.max))}We.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),ve.add(Xi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new F,l[R]=new F;const c=new F,u=new F,d=new F,h=new Ot,m=new Ot,g=new Ot,_=new F,f=new F;function p(R,L,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(E),o[R].add(_),o[L].add(_),o[v].add(_),l[R].add(f),l[L].add(f),l[v].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,L=M.length;R<L;++R){const v=M[R],E=v.start,O=v.count;for(let D=E,V=E+O;D<V;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new F,T=new F,y=new F,w=new F;function A(R){y.fromBufferAttribute(i,R),w.copy(y);const L=o[R];x.copy(L),x.sub(y.multiplyScalar(y.dot(L))).normalize(),T.crossVectors(w,L);const E=T.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,L=M.length;R<L;++R){const v=M[R],E=v.start,O=v.count;for(let D=E,V=E+O;D<V;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),_=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new je(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new ie,hi=new Lu,ps=new ra,hc=new F,ms=new F,_s=new F,gs=new F,Fa=new F,vs=new F,dc=new F,xs=new F;class Ie extends be{constructor(t=new cn,e=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Fa.fromBufferAttribute(d,t),a?vs.addScaledVector(Fa,u):vs.addScaledVector(Fa.sub(e),u))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(ps.containsPoint(hi.origin)===!1&&(hi.intersectSphere(ps,hc)===null||hi.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(uc.copy(s).invert(),hi.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,y=x;T<y;T+=3){const w=o.getX(T),A=o.getX(T+1),R=o.getX(T+2);i=Ms(this,p,t,n,c,u,d,w,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=o.getX(f),x=o.getX(f+1),T=o.getX(f+2);i=Ms(this,a,t,n,c,u,d,M,x,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,y=x;T<y;T+=3){const w=T,A=T+1,R=T+2;i=Ms(this,p,t,n,c,u,d,w,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=f,x=f+1,T=f+2;i=Ms(this,a,t,n,c,u,d,M,x,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function nf(r,t,e,n,i,s,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ei,o),l===null)return null;xs.copy(o),xs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:r}}function Ms(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ms),r.getVertexPosition(l,_s),r.getVertexPosition(c,gs);const u=nf(r,t,e,n,ms,_s,gs,dc);if(u){const d=new F;sn.getBarycoord(dc,ms,_s,gs,d),i&&(u.uv=sn.getInterpolatedAttribute(i,o,l,c,d,new Ot)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,l,c,d,new Ot)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};sn.getNormal(ms,_s,gs,h.normal),u.face=h,u.barycoord=d}return u}class ts extends cn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(d,2));function g(_,f,p,M,x,T,y,w,A,R,L){const v=T/A,E=y/R,O=T/2,D=y/2,V=w/2,X=A+1,B=R+1;let Y=0,z=0;const st=new F;for(let it=0;it<B;it++){const ct=it*E-D;for(let Dt=0;Dt<X;Dt++){const zt=Dt*v-O;st[_]=zt*M,st[f]=ct*x,st[p]=V,c.push(st.x,st.y,st.z),st[_]=0,st[f]=0,st[p]=w>0?1:-1,u.push(st.x,st.y,st.z),d.push(Dt/A),d.push(1-it/R),Y+=1}}for(let it=0;it<R;it++)for(let ct=0;ct<A;ct++){const Dt=h+ct+X*it,zt=h+ct+X*(it+1),q=h+(ct+1)+X*(it+1),Z=h+(ct+1)+X*it;l.push(Dt,zt,Z),l.push(zt,q,Z),z+=6}o.addGroup(m,z,L),m+=z,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _r(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(r){const t={};for(let e=0;e<r.length;e++){const n=_r(r[e]);for(const i in n)t[i]=n[i]}return t}function rf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Fu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const sf={clone:_r,merge:Re};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ou extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new F,fc=new Ot,pc=new Ot;class qe extends Ou{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class lf extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(qi,Yi,t,e);i.layers=this.layers,this.add(i);const s=new qe(qi,Yi,t,e);s.layers=this.layers,this.add(s);const a=new qe(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new qe(qi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new qe(qi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new qe(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bu extends Ce{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ts(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:jn});s.uniforms.tEquirect.value=e;const a=new Ie(i,s),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=pn),new lf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Oa=new F,uf=new F,hf=new Ft;class gi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oa.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hf.getNormalMatrix(t),i=this.coplanarPoint(Oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new ra,Ss=new F;class gl{constructor(t=new gi,e=new gi,n=new gi,i=new gi,s=new gi,a=new gi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],M=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-s,h-c,f-m,T-p).normalize(),n[1].setComponents(l+s,h+c,f+m,T+p).normalize(),n[2].setComponents(l+a,h+u,f+g,T+M).normalize(),n[3].setComponents(l-a,h-u,f-g,T-M).normalize(),n[4].setComponents(l-o,h-d,f-_,T-x).normalize(),e===Nn)n[5].setComponents(l+o,h+d,f+_,T+x).normalize();else if(e===Xs)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ss.x=i.normal.x>0?t.max.x:t.min.x,Ss.y=i.normal.y>0?t.max.y:t.min.y,Ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function df(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class sa extends cn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,h=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const M=p*h-a;for(let x=0;x<c;x++){const T=x*d-s;g.push(T,-M,0),_.push(0,0,1),f.push(x/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,T=M+c*(p+1),y=M+1+c*(p+1),w=M+1+c*p;m.push(x,T,w),m.push(T,y,w)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:_f,alphatest_fragment:gf,alphatest_pars_fragment:vf,aomap_fragment:xf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:yf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:Af,bumpmap_pars_fragment:wf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:If,color_pars_vertex:Uf,color_vertex:Nf,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:kf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Gf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:sp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:op,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:vp,map_fragment:xp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:yp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:bp,morphcolor_vertex:Ap,morphnormal_vertex:wp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Ip,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:hm,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:_m,cube_frag:gm,depth_vert:vm,depth_frag:xm,distanceRGBA_vert:Mm,distanceRGBA_frag:Sm,equirect_vert:ym,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:bm,meshbasic_vert:Am,meshbasic_frag:wm,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Im,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:km,points_frag:Hm,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},vn={basic:{uniforms:Re([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Re([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Re([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Re([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Re([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Re([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Re([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Re([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Re([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Re([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Re([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Re([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Re([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};vn.physical={uniforms:Re([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ys={r:0,b:0,g:0},fi=new En,qm=new ie;function Ym(r,t,e,n,i,s,a){const o=new Bt(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const T=g(M);T===null?p(o,l):T&&T.isColor&&(p(T,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(M,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===na)?(u===void 0&&(u=new Ie(new ts(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:_r(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),fi.copy(x.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(fi)),u.material.toneMapped=Yt.getTransfer(T.colorSpace)!==ne,(d!==T||h!==T.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,m=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ie(new sa(2,2),new ni({name:"BackgroundMaterial",uniforms:_r(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==ne,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,m=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(ys,Fu(r)),n.buffers.color.setClear(ys.r,ys.g,ys.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:f}}function $m(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,E,O,D,V){let X=!1;const B=d(D,O,E);s!==B&&(s=B,c(s.object)),X=m(v,D,O,V),X&&g(v,D,O,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,T(v,E,O,D),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,E,O){const D=O.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let X=V[E.id];X===void 0&&(X={},V[E.id]=X);let B=X[D];return B===void 0&&(B=h(l()),X[D]=B),B}function h(v){const E=[],O=[],D=[];for(let V=0;V<e;V++)E[V]=0,O[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:D,object:v,attributes:{},index:null}}function m(v,E,O,D){const V=s.attributes,X=E.attributes;let B=0;const Y=O.getAttributes();for(const z in Y)if(Y[z].location>=0){const it=V[z];let ct=X[z];if(ct===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),it===void 0||it.attribute!==ct||ct&&it.data!==ct.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function g(v,E,O,D){const V={},X=E.attributes;let B=0;const Y=O.getAttributes();for(const z in Y)if(Y[z].location>=0){let it=X[z];it===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const ct={};ct.attribute=it,it&&it.data&&(ct.data=it.data),V[z]=ct,B++}s.attributes=V,s.attributesNum=B,s.index=D}function _(){const v=s.newAttributes;for(let E=0,O=v.length;E<O;E++)v[E]=0}function f(v){p(v,0)}function p(v,E){const O=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;O[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),V[v]!==E&&(r.vertexAttribDivisor(v,E),V[v]=E)}function M(){const v=s.newAttributes,E=s.enabledAttributes;for(let O=0,D=E.length;O<D;O++)E[O]!==v[O]&&(r.disableVertexAttribArray(O),E[O]=0)}function x(v,E,O,D,V,X,B){B===!0?r.vertexAttribIPointer(v,E,O,V,X):r.vertexAttribPointer(v,E,O,D,V,X)}function T(v,E,O,D){_();const V=D.attributes,X=O.getAttributes(),B=E.defaultAttributeValues;for(const Y in X){const z=X[Y];if(z.location>=0){let st=V[Y];if(st===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const it=st.normalized,ct=st.itemSize,Dt=t.get(st);if(Dt===void 0)continue;const zt=Dt.buffer,q=Dt.type,Z=Dt.bytesPerElement,_t=q===r.INT||q===r.UNSIGNED_INT||st.gpuType===ul;if(st.isInterleavedBufferAttribute){const ut=st.data,Rt=ut.stride,Q=st.offset;if(ut.isInstancedInterleavedBuffer){for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let nt=0;nt<z.locationSize;nt++)f(z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let nt=0;nt<z.locationSize;nt++)x(z.location+nt,ct/z.locationSize,q,it,Rt*Z,(Q+ct/z.locationSize*nt)*Z,_t)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<z.locationSize;ut++)p(z.location+ut,st.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<z.locationSize;ut++)f(z.location+ut);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let ut=0;ut<z.locationSize;ut++)x(z.location+ut,ct/z.locationSize,q,it,ct*Z,ct/z.locationSize*ut*Z,_t)}}else if(B!==void 0){const it=B[Y];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(z.location,it);break;case 3:r.vertexAttrib3fv(z.location,it);break;case 4:r.vertexAttrib4fv(z.location,it);break;default:r.vertexAttrib1fv(z.location,it)}}}}M()}function y(){R();for(const v in n){const E=n[v];for(const O in E){const D=E[O];for(const V in D)u(D[V].object),delete D[V];delete E[O]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const O in E){const D=E[O];for(const V in D)u(D[V].object),delete D[V];delete E[O]}delete n[v.id]}function A(v){for(const E in n){const O=n[E];if(O[v.id]===void 0)continue;const D=O[v.id];for(const V in D)u(D[V].object),delete D[V];delete O[v.id]}}function R(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function Km(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==mn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Fn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!R)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:y,maxSamples:w}}function Zm(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new gi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const M=s?0:n,x=M*4;let T=p.clippingState||null;l.value=T,T=u(g,h,x,m);for(let y=0;y!==x;++y)T[y]=e[y];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,T=m;x!==_;++x,T+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Jm(r){let t=new WeakMap;function e(a,o){return o===mo?a.mapping=dr:o===_o&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===_o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qm extends Ou{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tr=4,mc=[.125,.215,.35,.446,.526,.582],Si=20,Ba=new Qm,_c=new Bt;let za=null,ka=0,Ha=0,Ga=!1;const vi=(1+Math.sqrt(5))/2,$i=1/vi,gc=[new F(-vi,$i,0),new F(vi,$i,0),new F(-$i,0,vi),new F($i,0,vi),new F(0,vi,-$i),new F(0,vi,$i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Zr,format:mn,colorSpace:ai,depthBuffer:!1},i=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(s)),this._blurMaterial=e_(s,t,e)}return i}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,i){const o=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(_c),u.toneMapping=Zn,u.autoClear=!1;const m=new Ys({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new Ie(new ts,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(_c),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Es(i,M*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===dr||t.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gc[(i-s-1)%gc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ie(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):Si;f>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const p=[];let M=0;for(let A=0;A<Si;++A){const R=A/_,L=Math.exp(-R*R/2);p.push(L),A===0?M+=L:A<f&&(M+=2*L)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const T=this._sizeLods[i],y=3*T*(i>x-tr?i-x+tr:0),w=4*(this._cubeSize-T);Es(e,y,w,3*T,2*T),l.setRenderTarget(e),l.render(d,Ba)}}function t_(r){const t=[],e=[],n=[];let i=r;const s=r-tr+1+mc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-tr?l=mc[a-r+tr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,f=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(f*g*m),T=new Float32Array(p*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,R=w>2?0:-1,L=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(L,_*g*w),x.set(h,f*g*w);const v=[w,w,w,w,w,w];T.set(v,p*g*w)}const y=new cn;y.setAttribute("position",new je(M,_)),y.setAttribute("uv",new je(x,f)),y.setAttribute("faceIndex",new je(T,p)),t.push(y),i>tr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(r,t,e){const n=new Li(r,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function e_(r,t,e){const n=new Float32Array(Si),i=new F(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Mc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Sc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===_o,u=l===dr||l===fr;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new vc(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new vc(r)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function i_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r_(r,t,e,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],r.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,T=M.length;x<T;x+=3){const y=M[x+0],w=M[x+1],A=M[x+2];h.push(y,w,w,A,A,y)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const y=x+0,w=x+1,A=x+2;h.push(y,w,w,A,A,y)}}else return;const f=new(Ru(h)?Nu:Uu)(h,1);f.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,f)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function s_(r,t,e){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){r.drawElements(n,m,s,h*a),e.update(m,n,1)}function c(h,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,h*a,g),e.update(m,n,g))}function u(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function d(h,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)c(h[p]/a,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=m[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function a_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o_(r,t,e){const n=new WeakMap,i=new jt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),f===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*w*4*d),R=new Pu(A,y,w,d);R.type=Un,R.needsUpdate=!0;const L=T*4;for(let E=0;E<d;E++){const O=p[E],D=M[E],V=x[E],X=y*w*4*E;for(let B=0;B<O.count;B++){const Y=B*L;g===!0&&(i.fromBufferAttribute(O,B),A[X+Y+0]=i.x,A[X+Y+1]=i.y,A[X+Y+2]=i.z,A[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(D,B),A[X+Y+4]=i.x,A[X+Y+5]=i.y,A[X+Y+6]=i.z,A[X+Y+7]=0),f===!0&&(i.fromBufferAttribute(V,B),A[X+Y+8]=i.x,A[X+Y+9]=i.y,A[X+Y+10]=i.z,A[X+Y+11]=V.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new Ot(y,w)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function l_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class ku extends Ce{constructor(t,e,n,i,s,a,o,l,c,u=sr){if(u!==sr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===sr&&(n=Pi),n===void 0&&u===mr&&(n=pr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hu=new Ce,yc=new ku(1,1),Gu=new Pu,Vu=new qd,Wu=new Bu,Ec=[],Tc=[],bc=new Float32Array(16),Ac=new Float32Array(9),wc=new Float32Array(4);function Er(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ec[i];if(s===void 0&&(s=new Float32Array(i),Ec[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function aa(r,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function f_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;wc.set(n),r.uniformMatrix2fv(this.addr,!1,wc),ge(e,n)}}function p_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Ac.set(n),r.uniformMatrix3fv(this.addr,!1,Ac),ge(e,n)}}function m_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;bc.set(n),r.uniformMatrix4fv(this.addr,!1,bc),ge(e,n)}}function __(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function g_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function x_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function M_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function S_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function E_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function T_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yc.compareFunction=wu,s=yc):s=Hu,e.setTexture2D(t||s,i)}function b_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vu,i)}function A_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wu,i)}function w_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gu,i)}function R_(r){switch(r){case 5126:return c_;case 35664:return u_;case 35665:return h_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return __;case 35667:case 35671:return g_;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return M_;case 36294:return S_;case 36295:return y_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return w_}}function C_(r,t){r.uniform1fv(this.addr,t)}function P_(r,t){const e=Er(t,this.size,2);r.uniform2fv(this.addr,e)}function L_(r,t){const e=Er(t,this.size,3);r.uniform3fv(this.addr,e)}function D_(r,t){const e=Er(t,this.size,4);r.uniform4fv(this.addr,e)}function I_(r,t){const e=Er(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function U_(r,t){const e=Er(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function N_(r,t){const e=Er(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function F_(r,t){r.uniform1iv(this.addr,t)}function O_(r,t){r.uniform2iv(this.addr,t)}function B_(r,t){r.uniform3iv(this.addr,t)}function z_(r,t){r.uniform4iv(this.addr,t)}function k_(r,t){r.uniform1uiv(this.addr,t)}function H_(r,t){r.uniform2uiv(this.addr,t)}function G_(r,t){r.uniform3uiv(this.addr,t)}function V_(r,t){r.uniform4uiv(this.addr,t)}function W_(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Hu,s[a])}function X_(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Vu,s[a])}function q_(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wu,s[a])}function Y_(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Gu,s[a])}function $_(r){switch(r){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return I_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}class K_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R_(e.type)}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Rc(r,t){r.seq.push(t),r.map[t.id]=t}function J_(r,t,e){const n=r.name,i=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),a=Va.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rc(e,c===void 0?new K_(o,r,t):new j_(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Z_(o),Rc(e,d)),e=d}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);J_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Cc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Q_=37297;let tg=0;function eg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ng(r){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(r);let n;switch(t===e?n="":t===Ws&&e===Vs?n="LinearDisplayP3ToLinearSRGB":t===Vs&&e===Ws&&(n="LinearSRGBToLinearDisplayP3"),r){case ai:case ia:return[n,"LinearTransferOETF"];case _n:case _l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+eg(r.getShaderSource(t),a)}else return i}function ig(r,t){const e=ng(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rg(r,t){let e;switch(t){case vd:e="Linear";break;case xd:e="Reinhard";break;case Md:e="Cineon";break;case Sd:e="ACESFilmic";break;case Ed:e="AgX";break;case Td:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new F;function sg(){Yt.getLuminanceCoefficients(Ts);const r=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function og(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ur(r){return r!==""}function Lc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(cg,hg)}const ug=new Map;function hg(r,t){let e=Nt[t];if(e===void 0){const n=ug.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yo(e)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(r){return r.replace(dg,fg)}function fg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _g(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pu:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function vg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pg(e),c=mg(e),u=_g(e),d=gg(e),h=vg(e),m=ag(e),g=og(s),_=i.createProgram();let f,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(f=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Yo(a),a=Lc(a,e),a=Dc(a,e),o=Yo(o),o=Lc(o,e),o=Dc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+f+a,T=M+p+o,y=Cc(i,i.VERTEX_SHADER,x),w=Cc(i,i.FRAGMENT_SHADER,T);i.attachShader(_,y),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(E){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(y).trim(),V=i.getShaderInfoLog(w).trim();let X=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,w);else{const Y=Pc(i,y,"vertex"),z=Pc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+Y+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||V==="")&&(B=!1);B&&(E.diagnostics={runnable:X,programLog:O,vertexShader:{log:D,prefix:f},fragmentShader:{log:V,prefix:p}})}i.deleteShader(y),i.deleteShader(w),R=new Os(i,_),L=lg(i,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let L;this.getAttributes=function(){return L===void 0&&A(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Q_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let Mg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yg(t),e.set(t,n)),n}}class yg{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}}function Eg(r,t,e,n,i,s,a){const o=new Du,l=new Sg,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,E,O,D,V){const X=D.fog,B=V.geometry,Y=v.isMeshStandardMaterial?D.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),st=z&&z.mapping===na?z.image.height:null,it=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Dt=ct!==void 0?ct.length:0;let zt=0;B.morphAttributes.position!==void 0&&(zt=1),B.morphAttributes.normal!==void 0&&(zt=2),B.morphAttributes.color!==void 0&&(zt=3);let q,Z,_t,ut;if(it){const Le=vn[it];q=Le.vertexShader,Z=Le.fragmentShader}else q=v.vertexShader,Z=v.fragmentShader,l.update(v),_t=l.getVertexShaderID(v),ut=l.getFragmentShaderID(v);const Rt=r.getRenderTarget(),Q=V.isInstancedMesh===!0,nt=V.isBatchedMesh===!0,vt=!!v.map,Et=!!v.matcap,P=!!z,le=!!v.aoMap,bt=!!v.lightMap,Ut=!!v.bumpMap,Tt=!!v.normalMap,Zt=!!v.displacementMap,Lt=!!v.emissiveMap,C=!!v.metalnessMap,S=!!v.roughnessMap,k=v.anisotropy>0,K=v.clearcoat>0,J=v.dispersion>0,$=v.iridescence>0,Mt=v.sheen>0,at=v.transmission>0,ft=k&&!!v.anisotropyMap,Vt=K&&!!v.clearcoatMap,tt=K&&!!v.clearcoatNormalMap,pt=K&&!!v.clearcoatRoughnessMap,Ct=$&&!!v.iridescenceMap,Pt=$&&!!v.iridescenceThicknessMap,mt=Mt&&!!v.sheenColorMap,Ht=Mt&&!!v.sheenRoughnessMap,It=!!v.specularMap,te=!!v.specularColorMap,I=!!v.specularIntensityMap,ht=at&&!!v.transmissionMap,W=at&&!!v.thicknessMap,j=!!v.gradientMap,ot=!!v.alphaMap,dt=v.alphaTest>0,Gt=!!v.alphaHash,fe=!!v.extensions;let Pe=Zn;v.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Pe=r.toneMapping);const Wt={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Z,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:nt,batchingColor:nt&&V._colorsTexture!==null,instancing:Q,instancingColor:Q&&V.instanceColor!==null,instancingMorph:Q&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:ai,alphaToCoverage:!!v.alphaToCoverage,map:vt,matcap:Et,envMap:P,envMapMode:P&&z.mapping,envMapCubeUVHeight:st,aoMap:le,lightMap:bt,bumpMap:Ut,normalMap:Tt,displacementMap:m&&Zt,emissiveMap:Lt,normalMapObjectSpace:Tt&&v.normalMapType===Rd,normalMapTangentSpace:Tt&&v.normalMapType===Au,metalnessMap:C,roughnessMap:S,anisotropy:k,anisotropyMap:ft,clearcoat:K,clearcoatMap:Vt,clearcoatNormalMap:tt,clearcoatRoughnessMap:pt,dispersion:J,iridescence:$,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:Mt,sheenColorMap:mt,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:te,specularIntensityMap:I,transmission:at,transmissionMap:ht,thicknessMap:W,gradientMap:j,opaque:v.transparent===!1&&v.blending===rr&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:Gt,combine:v.combine,mapUv:vt&&f(v.map.channel),aoMapUv:le&&f(v.aoMap.channel),lightMapUv:bt&&f(v.lightMap.channel),bumpMapUv:Ut&&f(v.bumpMap.channel),normalMapUv:Tt&&f(v.normalMap.channel),displacementMapUv:Zt&&f(v.displacementMap.channel),emissiveMapUv:Lt&&f(v.emissiveMap.channel),metalnessMapUv:C&&f(v.metalnessMap.channel),roughnessMapUv:S&&f(v.roughnessMap.channel),anisotropyMapUv:ft&&f(v.anisotropyMap.channel),clearcoatMapUv:Vt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&f(v.sheenRoughnessMap.channel),specularMapUv:It&&f(v.specularMap.channel),specularColorMapUv:te&&f(v.specularColorMap.channel),specularIntensityMapUv:I&&f(v.specularIntensityMap.channel),transmissionMapUv:ht&&f(v.transmissionMap.channel),thicknessMapUv:W&&f(v.thicknessMap.channel),alphaMapUv:ot&&f(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Tt||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(vt||ot),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:vt&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function M(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)E.push(O),E.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(E,v),T(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function y(v){const E=_[v.type];let O;if(E){const D=vn[E];O=sf.clone(D.uniforms)}else O=v.uniforms;return O}function w(v,E){let O;for(let D=0,V=u.length;D<V;D++){const X=u[D];if(X.cacheKey===E){O=X,++O.usedTimes;break}}return O===void 0&&(O=new xg(r,E,v,s),u.push(O)),O}function A(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function Tg(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,h,m,g,_,f){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},r[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=f),t++,p}function o(d,h,m,g,_,f){const p=a(d,h,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(d,h,m,g,_,f){const p=a(d,h,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||bg),n.length>1&&n.sort(h||Nc),i.length>1&&i.sort(h||Nc)}function u(){for(let d=t,h=r.length;d<h;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Ag(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fc,r.set(n,[a])):i>=s.length?(a=new Fc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function wg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Rg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cg=0;function Pg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Lg(r){const t=new wg,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new ie,a=new ie;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,M=0,x=0,T=0,y=0,w=0,A=0;c.sort(Pg);for(let L=0,v=c.length;L<v;L++){const E=c[L],O=E.color,D=E.intensity,V=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=O.r*D,d+=O.g*D,h+=O.b*D;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],D);A++}else if(E.isDirectionalLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,z=e.get(E);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=E.shadow.matrix,M++}n.directional[m]=B,m++}else if(E.isSpotLight){const B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(O).multiplyScalar(D),B.distance=V,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[_]=B;const Y=E.shadow;if(E.map&&(n.spotLightMap[y]=E.map,y++,Y.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,E.castShadow){const z=e.get(E);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=X,T++}_++}else if(E.isRectAreaLight){const B=t.get(E);B.color.copy(O).multiplyScalar(D),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=B,f++}else if(E.isPointLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const Y=E.shadow,z=e.get(E);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=B,g++}else if(E.isHemisphereLight){const B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(D),B.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==f||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==T||R.numSpotMaps!==y||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=T+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=T,R.numSpotMaps=y,R.numLightProbes=A,n.version=Cg++)}function l(c,u){let d=0,h=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(f),d++}else if(x.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(f),m++}else if(x.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),h++}else if(x.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function Oc(r){const t=new Lg(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Dg(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Oc(r),t.set(i,[o])):s>=a.length?(o=new Oc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ig extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Og(r,t,e){let n=new gl;const i=new Ot,s=new Ot,a=new jt,o=new Ig({depthPacking:wd}),l=new Ug,c={},u=e.maxTextureSize,d={[ei]:Ne,[Ne]:ei,[xn]:xn},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let p=this.type;this.render=function(w,A,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),O=r.state;O.setBlending(jn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=p!==Ln&&this.type===Ln,V=p===Ln&&this.type!==Ln;for(let X=0,B=w.length;X<B;X++){const Y=w[X],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const st=z.getFrameExtents();if(i.multiply(st),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,z.mapSize.y=s.y)),z.map===null||D===!0||V===!0){const ct=this.type!==Ln?{minFilter:an,magFilter:an}:{};z.map!==null&&z.map.dispose(),z.map=new Li(i.x,i.y,ct),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const it=z.getViewportCount();for(let ct=0;ct<it;ct++){const Dt=z.getViewport(ct);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),O.viewport(a),z.updateMatrices(Y,ct),n=z.getFrustum(),T(A,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Ln&&M(z,R),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(L,v,E)};function M(w,A){const R=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Li(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,R,h,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,R,m,_,null)}function x(w,A,R,L){let v=null;const E=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=R.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=v.uuid,D=A.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let X=V[D];X===void 0&&(X=v.clone(),V[D]=X,A.addEventListener("dispose",y)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,L===Ln?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=R}return v}function T(w,A,R,L,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const D=t.update(w),V=w.material;if(Array.isArray(V)){const X=D.groups;for(let B=0,Y=X.length;B<Y;B++){const z=X[B],st=V[z.materialIndex];if(st&&st.visible){const it=x(w,st,L,v);w.onBeforeShadow(r,w,A,R,D,it,z),r.renderBufferDirect(R,null,D,it,w,z),w.onAfterShadow(r,w,A,R,D,it,z)}}}else if(V.visible){const X=x(w,V,L,v);w.onBeforeShadow(r,w,A,R,D,X,null),r.renderBufferDirect(R,null,D,X,w,null),w.onAfterShadow(r,w,A,R,D,X,null)}}const O=w.children;for(let D=0,V=O.length;D<V;D++)T(O[D],A,R,L,v)}function y(w){w.target.removeEventListener("dispose",y);for(const R in c){const L=c[R],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const Bg={[oo]:lo,[co]:fo,[uo]:po,[hr]:ho,[lo]:oo,[fo]:co,[po]:uo,[ho]:hr};function zg(r){function t(){let I=!1;const ht=new jt;let W=null;const j=new jt(0,0,0,0);return{setMask:function(ot){W!==ot&&!I&&(r.colorMask(ot,ot,ot,ot),W=ot)},setLocked:function(ot){I=ot},setClear:function(ot,dt,Gt,fe,Pe){Pe===!0&&(ot*=fe,dt*=fe,Gt*=fe),ht.set(ot,dt,Gt,fe),j.equals(ht)===!1&&(r.clearColor(ot,dt,Gt,fe),j.copy(ht))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function e(){let I=!1,ht=!1,W=null,j=null,ot=null;return{setReversed:function(dt){ht=dt},setTest:function(dt){dt?_t(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(dt){W!==dt&&!I&&(r.depthMask(dt),W=dt)},setFunc:function(dt){if(ht&&(dt=Bg[dt]),j!==dt){switch(dt){case oo:r.depthFunc(r.NEVER);break;case lo:r.depthFunc(r.ALWAYS);break;case co:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case uo:r.depthFunc(r.EQUAL);break;case ho:r.depthFunc(r.GEQUAL);break;case fo:r.depthFunc(r.GREATER);break;case po:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=dt}},setLocked:function(dt){I=dt},setClear:function(dt){ot!==dt&&(r.clearDepth(dt),ot=dt)},reset:function(){I=!1,W=null,j=null,ot=null}}}function n(){let I=!1,ht=null,W=null,j=null,ot=null,dt=null,Gt=null,fe=null,Pe=null;return{setTest:function(Wt){I||(Wt?_t(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(Wt){ht!==Wt&&!I&&(r.stencilMask(Wt),ht=Wt)},setFunc:function(Wt,Le,bn){(W!==Wt||j!==Le||ot!==bn)&&(r.stencilFunc(Wt,Le,bn),W=Wt,j=Le,ot=bn)},setOp:function(Wt,Le,bn){(dt!==Wt||Gt!==Le||fe!==bn)&&(r.stencilOp(Wt,Le,bn),dt=Wt,Gt=Le,fe=bn)},setLocked:function(Wt){I=Wt},setClear:function(Wt){Pe!==Wt&&(r.clearStencil(Wt),Pe=Wt)},reset:function(){I=!1,ht=null,W=null,j=null,ot=null,dt=null,Gt=null,fe=null,Pe=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,f=null,p=null,M=null,x=null,T=null,y=null,w=new Bt(0,0,0),A=0,R=!1,L=null,v=null,E=null,O=null,D=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=B>=2);let z=null,st={};const it=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Dt=new jt().fromArray(it),zt=new jt().fromArray(ct);function q(I,ht,W,j){const ot=new Uint8Array(4),dt=r.createTexture();r.bindTexture(I,dt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<W;Gt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(ht+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return dt}const Z={};Z[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_t(r.DEPTH_TEST),s.setFunc(hr),bt(!1),Ut(Yl),_t(r.CULL_FACE),P(jn);function _t(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function ut(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function Rt(I,ht){return u[I]!==ht?(r.bindFramebuffer(I,ht),u[I]=ht,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function Q(I,ht){let W=h,j=!1;if(I){W=d.get(ht),W===void 0&&(W=[],d.set(ht,W));const ot=I.textures;if(W.length!==ot.length||W[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Gt=ot.length;dt<Gt;dt++)W[dt]=r.COLOR_ATTACHMENT0+dt;W.length=ot.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function nt(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const vt={[Mi]:r.FUNC_ADD,[Qh]:r.FUNC_SUBTRACT,[td]:r.FUNC_REVERSE_SUBTRACT};vt[ed]=r.MIN,vt[nd]=r.MAX;const Et={[id]:r.ZERO,[rd]:r.ONE,[sd]:r.SRC_COLOR,[so]:r.SRC_ALPHA,[hd]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[od]:r.DST_ALPHA,[ad]:r.ONE_MINUS_SRC_COLOR,[ao]:r.ONE_MINUS_SRC_ALPHA,[ud]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[dd]:r.CONSTANT_COLOR,[fd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function P(I,ht,W,j,ot,dt,Gt,fe,Pe,Wt){if(I===jn){g===!0&&(ut(r.BLEND),g=!1);return}if(g===!1&&(_t(r.BLEND),g=!0),I!==Jh){if(I!==_||Wt!==R){if((f!==Mi||x!==Mi)&&(r.blendEquation(r.FUNC_ADD),f=Mi,x=Mi),Wt)switch(I){case rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Br:r.blendFunc(r.ONE,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Br:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,M=null,T=null,y=null,w.set(0,0,0),A=0,_=I,R=Wt}return}ot=ot||ht,dt=dt||W,Gt=Gt||j,(ht!==f||ot!==x)&&(r.blendEquationSeparate(vt[ht],vt[ot]),f=ht,x=ot),(W!==p||j!==M||dt!==T||Gt!==y)&&(r.blendFuncSeparate(Et[W],Et[j],Et[dt],Et[Gt]),p=W,M=j,T=dt,y=Gt),(fe.equals(w)===!1||Pe!==A)&&(r.blendColor(fe.r,fe.g,fe.b,Pe),w.copy(fe),A=Pe),_=I,R=!1}function le(I,ht){I.side===xn?ut(r.CULL_FACE):_t(r.CULL_FACE);let W=I.side===Ne;ht&&(W=!W),bt(W),I.blending===rr&&I.transparent===!1?P(jn):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(I){L!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),L=I)}function Ut(I){I!==Kh?(_t(r.CULL_FACE),I!==v&&(I===Yl?r.cullFace(r.BACK):I===jh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),v=I}function Tt(I){I!==E&&(X&&r.lineWidth(I),E=I)}function Zt(I,ht,W){I?(_t(r.POLYGON_OFFSET_FILL),(O!==ht||D!==W)&&(r.polygonOffset(ht,W),O=ht,D=W)):ut(r.POLYGON_OFFSET_FILL)}function Lt(I){I?_t(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+V-1),z!==I&&(r.activeTexture(I),z=I)}function S(I,ht,W){W===void 0&&(z===null?W=r.TEXTURE0+V-1:W=z);let j=st[W];j===void 0&&(j={type:void 0,texture:void 0},st[W]=j),(j.type!==I||j.texture!==ht)&&(z!==W&&(r.activeTexture(W),z=W),r.bindTexture(I,ht||Z[I]),j.type=I,j.texture=ht)}function k(){const I=st[z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Dt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Dt.copy(I))}function mt(I){zt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),zt.copy(I))}function Ht(I,ht){let W=l.get(ht);W===void 0&&(W=new WeakMap,l.set(ht,W));let j=W.get(I);j===void 0&&(j=r.getUniformBlockIndex(ht,I.name),W.set(I,j))}function It(I,ht){const j=l.get(ht).get(I);o.get(ht)!==j&&(r.uniformBlockBinding(ht,j,I.__bindingPointIndex),o.set(ht,j))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,st={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,f=null,p=null,M=null,x=null,T=null,y=null,w=new Bt(0,0,0),A=0,R=!1,L=null,v=null,E=null,O=null,D=null,Dt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:_t,disable:ut,bindFramebuffer:Rt,drawBuffers:Q,useProgram:nt,setBlending:P,setMaterial:le,setFlipSided:bt,setCullFace:Ut,setLineWidth:Tt,setPolygonOffset:Zt,setScissorTest:Lt,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Vt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:te}}function Bc(r,t,e,n){const i=kg(n);switch(e){case xu:return r*t;case Su:return r*t;case yu:return r*t*2;case Eu:return r*t/i.components*i.byteLength;case fl:return r*t/i.components*i.byteLength;case Tu:return r*t*2/i.components*i.byteLength;case pl:return r*t*2/i.components*i.byteLength;case Mu:return r*t*3/i.components*i.byteLength;case mn:return r*t*4/i.components*i.byteLength;case ml:return r*t*4/i.components*i.byteLength;case Ls:case Ds:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Is:case Us:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mo:case yo:return Math.max(r,16)*Math.max(t,8)/4;case xo:case So:return Math.max(r,8)*Math.max(t,8)/2;case Eo:case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ns:case ko:case Ho:return Math.ceil(r/4)*Math.ceil(t/4)*16;case bu:case Go:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Vo:case Wo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kg(r){switch(r){case Fn:case _u:return{byteLength:1,components:1};case Gr:case gu:case Zr:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case Pi:case ul:case Un:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Hg(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):qs("canvas")}function _(C,S,k){let K=1;const J=Lt(C);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(K*J.width),Mt=Math.floor(K*J.height);d===void 0&&(d=g($,Mt));const at=S?g($,Mt):d;return at.width=$,at.height=Mt,at.getContext("2d").drawImage(C,0,0,$,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Mt+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==an&&C.minFilter!==pn}function p(C){r.generateMipmap(C)}function M(C,S,k,K,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),S===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),S===r.RGBA){const Mt=J?Gs:Yt.getTransfer(K);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=Mt===ne?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(C,S){let k;return C?S===null||S===Pi||S===pr?k=r.DEPTH24_STENCIL8:S===Un?k=r.DEPTH32F_STENCIL8:S===Gr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===pr?k=r.DEPTH_COMPONENT24:S===Un?k=r.DEPTH_COMPONENT32F:S===Gr&&(k=r.DEPTH_COMPONENT16),k}function T(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function y(C){const S=C.target;S.removeEventListener("dispose",y),A(S),S.isVideoTexture&&u.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),L(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,K=h.get(k);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(K).length===0&&h.delete(k)}n.remove(C)}function R(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const k=C.source,K=h.get(k);delete K[S.__cacheKey],a.memory.textures--}function L(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[K][J]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,J=k.length;K<J;K++){const $=n.get(k[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(C)}let v=0;function E(){v=0}function O(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function D(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function V(C,S){const k=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(k,C,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function X(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){zt(k,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function B(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){zt(k,C,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function Y(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){q(k,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const z={[go]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},st={[an]:r.NEAREST,[bd]:r.NEAREST_MIPMAP_NEAREST,[rs]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[pa]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},it={[Cd]:r.NEVER,[Nd]:r.ALWAYS,[Pd]:r.LESS,[wu]:r.LEQUAL,[Ld]:r.EQUAL,[Ud]:r.GEQUAL,[Dd]:r.GREATER,[Id]:r.NOTEQUAL};function ct(C,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===pa||S.magFilter===rs||S.magFilter===Ei||S.minFilter===pn||S.minFilter===pa||S.minFilter===rs||S.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,z[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,z[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,z[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,st[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==rs&&S.minFilter!==Ei||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Dt(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",y));const K=S.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const $=D(S);if($!==C.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[$].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(S)),C.__cacheKey=$,C.__webglTexture=J[$].texture}return k}function zt(C,S,k){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const J=Dt(C,S),$=S.source;e.bindTexture(K,C.__webglTexture,r.TEXTURE0+k);const Mt=n.get($);if($.version!==Mt.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const at=Yt.getPrimaries(Yt.workingColorSpace),ft=S.colorSpace===qn?null:Yt.getPrimaries(S.colorSpace),Vt=S.colorSpace===qn||at===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let tt=_(S.image,!1,i.maxTextureSize);tt=Zt(S,tt);const pt=s.convert(S.format,S.colorSpace),Ct=s.convert(S.type);let Pt=M(S.internalFormat,pt,Ct,S.colorSpace,S.isVideoTexture);ct(K,S);let mt;const Ht=S.mipmaps,It=S.isVideoTexture!==!0,te=Mt.__version===void 0||J===!0,I=$.dataReady,ht=T(S,tt);if(S.isDepthTexture)Pt=x(S.format===mr,S.type),te&&(It?e.texStorage2D(r.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Ct,null));else if(S.isDataTexture)if(Ht.length>0){It&&te&&e.texStorage2D(r.TEXTURE_2D,ht,Pt,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)mt=Ht[W],It?I&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,mt.width,mt.height,0,pt,Ct,mt.data);S.generateMipmaps=!1}else It?(te&&e.texStorage2D(r.TEXTURE_2D,ht,Pt,tt.width,tt.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Ct,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Ct,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Pt,Ht[0].width,Ht[0].height,tt.depth);for(let W=0,j=Ht.length;W<j;W++)if(mt=Ht[W],S.format!==mn)if(pt!==null)if(It){if(I)if(S.layerUpdates.size>0){const ot=Bc(mt.width,mt.height,S.format,S.type);for(const dt of S.layerUpdates){const Gt=mt.data.subarray(dt*ot/mt.data.BYTES_PER_ELEMENT,(dt+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,dt,mt.width,mt.height,1,pt,Gt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Pt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,tt.depth,pt,Ct,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Pt,mt.width,mt.height,tt.depth,0,pt,Ct,mt.data)}else{It&&te&&e.texStorage2D(r.TEXTURE_2D,ht,Pt,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)mt=Ht[W],S.format!==mn?pt!==null?It?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?I&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(S.isDataArrayTexture)if(It){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Pt,tt.width,tt.height,tt.depth),I)if(S.layerUpdates.size>0){const W=Bc(tt.width,tt.height,S.format,S.type);for(const j of S.layerUpdates){const ot=tt.data.subarray(j*W/tt.data.BYTES_PER_ELEMENT,(j+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,pt,Ct,ot)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Ct,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,pt,Ct,tt.data);else if(S.isData3DTexture)It?(te&&e.texStorage3D(r.TEXTURE_3D,ht,Pt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Ct,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,pt,Ct,tt.data);else if(S.isFramebufferTexture){if(te)if(It)e.texStorage2D(r.TEXTURE_2D,ht,Pt,tt.width,tt.height);else{let W=tt.width,j=tt.height;for(let ot=0;ot<ht;ot++)e.texImage2D(r.TEXTURE_2D,ot,Pt,W,j,0,pt,Ct,null),W>>=1,j>>=1}}else if(Ht.length>0){if(It&&te){const W=Lt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,ht,Pt,W.width,W.height)}for(let W=0,j=Ht.length;W<j;W++)mt=Ht[W],It?I&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,pt,Ct,mt):e.texImage2D(r.TEXTURE_2D,W,Pt,pt,Ct,mt);S.generateMipmaps=!1}else if(It){if(te){const W=Lt(tt);e.texStorage2D(r.TEXTURE_2D,ht,Pt,W.width,W.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Ct,tt)}else e.texImage2D(r.TEXTURE_2D,0,Pt,pt,Ct,tt);f(S)&&p(K),Mt.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,k){if(S.image.length!==6)return;const K=Dt(C,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const $=n.get(J);if(J.version!==$.__version||K===!0){e.activeTexture(r.TEXTURE0+k);const Mt=Yt.getPrimaries(Yt.workingColorSpace),at=S.colorSpace===qn?null:Yt.getPrimaries(S.colorSpace),ft=S.colorSpace===qn||Mt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Vt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!Vt&&!tt?pt[j]=_(S.image[j],!0,i.maxCubemapSize):pt[j]=tt?S.image[j].image:S.image[j],pt[j]=Zt(S,pt[j]);const Ct=pt[0],Pt=s.convert(S.format,S.colorSpace),mt=s.convert(S.type),Ht=M(S.internalFormat,Pt,mt,S.colorSpace),It=S.isVideoTexture!==!0,te=$.__version===void 0||K===!0,I=J.dataReady;let ht=T(S,Ct);ct(r.TEXTURE_CUBE_MAP,S);let W;if(Vt){It&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Ht,Ct.width,Ct.height);for(let j=0;j<6;j++){W=pt[j].mipmaps;for(let ot=0;ot<W.length;ot++){const dt=W[ot];S.format!==mn?Pt!==null?It?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,dt.width,dt.height,Pt,mt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Ht,dt.width,dt.height,0,Pt,mt,dt.data)}}}else{if(W=S.mipmaps,It&&te){W.length>0&&ht++;const j=Lt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(tt){It?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,Pt,mt,pt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,pt[j].width,pt[j].height,0,Pt,mt,pt[j].data);for(let ot=0;ot<W.length;ot++){const Gt=W[ot].image[j].image;It?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Gt.width,Gt.height,Pt,mt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Ht,Gt.width,Gt.height,0,Pt,mt,Gt.data)}}else{It?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,mt,pt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Pt,mt,pt[j]);for(let ot=0;ot<W.length;ot++){const dt=W[ot];It?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Pt,mt,dt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Ht,Pt,mt,dt.image[j])}}}f(S)&&p(r.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Z(C,S,k,K,J,$){const Mt=s.convert(k.format,k.colorSpace),at=s.convert(k.type),ft=M(k.internalFormat,Mt,at,k.colorSpace);if(!n.get(S).__hasExternalTextures){const tt=Math.max(1,S.width>>$),pt=Math.max(1,S.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,$,ft,tt,pt,S.depth,0,Mt,at,null):e.texImage2D(J,$,ft,tt,pt,0,Mt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ut(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,n.get(k).__webglTexture,0,bt(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,n.get(k).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(C,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,$=x(S.stencilBuffer,J),Mt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=bt(S);Ut(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,C)}else{const K=S.textures;for(let J=0;J<K.length;J++){const $=K[J],Mt=s.convert($.format,$.colorSpace),at=s.convert($.type),ft=M($.internalFormat,Mt,at,$.colorSpace),Vt=bt(S);k&&Ut(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,ft,S.width,S.height):Ut(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt,ft,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ft,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,J=bt(S);if(S.depthTexture.format===sr)Ut(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===mr)Ut(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),_t(S.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),_t(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(C,S,k){const K=n.get(C);S!==void 0&&Z(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Rt(C)}function nt(C){const S=C.texture,k=n.get(C),K=n.get(S);C.addEventListener("dispose",w);const J=C.textures,$=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let ft=0;ft<S.mipmaps.length;ft++)k.__webglFramebuffer[at][ft]=r.createFramebuffer()}else k.__webglFramebuffer[at]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)k.__webglFramebuffer[at]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let at=0,ft=J.length;at<ft;at++){const Vt=n.get(J[at]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ut(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ft=J[at];k.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Vt=s.convert(ft.format,ft.colorSpace),tt=s.convert(ft.type),pt=M(ft.internalFormat,Vt,tt,ft.colorSpace,C.isXRRenderTarget===!0),Ct=bt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,pt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,k.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ct(r.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)Z(k.__webglFramebuffer[at][ft],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else Z(k.__webglFramebuffer[at],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ft=J.length;at<ft;at++){const Vt=J[at],tt=n.get(Vt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),ct(r.TEXTURE_2D,Vt),Z(k.__webglFramebuffer,C,Vt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),f(Vt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),ct(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)Z(k.__webglFramebuffer[ft],C,S,r.COLOR_ATTACHMENT0,at,ft);else Z(k.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,at,0);f(S)&&p(at),e.unbindTexture()}C.depthBuffer&&Rt(C)}function vt(C){const S=C.textures;for(let k=0,K=S.length;k<K;k++){const J=S[k];if(f(J)){const $=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Mt=n.get(J).__webglTexture;e.bindTexture($,Mt),p($),e.unbindTexture()}}}const Et=[],P=[];function le(C){if(C.samples>0){if(Ut(C)===!1){const S=C.textures,k=C.width,K=C.height;let J=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(C),at=S.length>1;if(at)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Vt=n.get(S[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,J,r.NEAREST),l===!0&&(Et.length=0,P.length=0,Et.push(r.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push($),P.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Vt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function bt(C){return Math.min(i.maxSamples,C.samples)}function Ut(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Zt(C,S){const k=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ai&&k!==qn&&(Yt.getTransfer(k)===ne?(K!==mn||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Q,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Ut}function Gg(r,t){function e(n,i=qn){let s;const a=Yt.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===hl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return r.BYTE;if(n===gu)return r.SHORT;if(n===Gr)return r.UNSIGNED_SHORT;if(n===ul)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===Un)return r.FLOAT;if(n===Zr)return r.HALF_FLOAT;if(n===xu)return r.ALPHA;if(n===Mu)return r.RGB;if(n===mn)return r.RGBA;if(n===Su)return r.LUMINANCE;if(n===yu)return r.LUMINANCE_ALPHA;if(n===sr)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===Eu)return r.RED;if(n===fl)return r.RED_INTEGER;if(n===Tu)return r.RG;if(n===pl)return r.RG_INTEGER;if(n===ml)return r.RGBA_INTEGER;if(n===Ls||n===Ds||n===Is||n===Us)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===Mo||n===So||n===yo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===bo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eo||n===To)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ao)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===ko||n===Ho)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ns)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===Go||n===Vo||n===Wo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Vg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nr extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends yr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const _=new Yg,f=e.getContextAttributes();let p=null,M=null;const x=[],T=[],y=new Ot;let w=null;const A=new qe;A.layers.enable(1),A.viewport=new jt;const R=new qe;R.layers.enable(2),R.viewport=new jt;const L=[A,R],v=new Vg;v.layers.enable(1),v.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=x[q];return Z===void 0&&(Z=new Wa,x[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=x[q];return Z===void 0&&(Z=new Wa,x[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=x[q];return Z===void 0&&(Z=new Wa,x[q]=Z),Z.getHandSpace()};function D(q){const Z=T.indexOf(q.inputSource);if(Z===-1)return;const _t=x[Z];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const Z=T[q];Z!==null&&(T[q]=null,x[q].disconnect(Z))}E=null,O=null,_.reset(),t.setRenderTarget(p),m=null,h=null,d=null,i=null,M=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Li(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,_t=null,ut=null;f.depth&&(ut=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=f.stencil?mr:sr,_t=f.stencil?pr:Pi);const Rt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Rt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Li(h.textureWidth,h.textureHeight,{format:mn,type:Fn,depthTexture:new ku(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let Z=0;Z<q.removed.length;Z++){const _t=q.removed[Z],ut=T.indexOf(_t);ut>=0&&(T[ut]=null,x[ut].disconnect(_t))}for(let Z=0;Z<q.added.length;Z++){const _t=q.added[Z];let ut=T.indexOf(_t);if(ut===-1){for(let Q=0;Q<x.length;Q++)if(Q>=T.length){T.push(_t),ut=Q;break}else if(T[Q]===null){T[Q]=_t,ut=Q;break}if(ut===-1)break}const Rt=x[ut];Rt&&Rt.connect(_t)}}const B=new F,Y=new F;function z(q,Z,_t){B.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);const ut=B.distanceTo(Y),Rt=Z.projectionMatrix.elements,Q=_t.projectionMatrix.elements,nt=Rt[14]/(Rt[10]-1),vt=Rt[14]/(Rt[10]+1),Et=(Rt[9]+1)/Rt[5],P=(Rt[9]-1)/Rt[5],le=(Rt[8]-1)/Rt[0],bt=(Q[8]+1)/Q[0],Ut=nt*le,Tt=nt*bt,Zt=ut/(-le+bt),Lt=Zt*-le;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(Zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const C=nt+Zt,S=vt+Zt,k=Ut-Lt,K=Tt+(ut-Lt),J=Et*vt/S*C,$=P*vt/S*C;q.projectionMatrix.makePerspective(k,K,J,$,C,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,_t=q.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=R.near=A.near=Z,v.far=R.far=A.far=_t,(E!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,O=v.far);const ut=q.parent,Rt=v.cameras;st(v,ut);for(let Q=0;Q<Rt.length;Q++)st(Rt[Q],ut);Rt.length===2?z(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),it(q,v,ut)};function it(q,Z,_t){_t===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ct=null;function Dt(q,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ut=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Q=0;Q<_t.length;Q++){const nt=_t[Q];let vt=null;if(m!==null)vt=m.getViewport(nt);else{const P=d.getViewSubImage(h,nt);vt=P.viewport,Q===0&&(t.setRenderTargetTextures(M,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Et=L[Q];Et===void 0&&(Et=new qe,Et.layers.enable(Q),Et.viewport=new jt,L[Q]=Et),Et.matrix.fromArray(nt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(nt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(vt.x,vt.y,vt.width,vt.height),Q===0&&(v.matrix.copy(Et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(Et)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Q=d.getDepthInformation(_t[0]);Q&&Q.isValid&&Q.texture&&_.init(t,Q,i.renderState)}}for(let _t=0;_t<x.length;_t++){const ut=T[_t],Rt=x[_t];ut!==null&&Rt!==void 0&&Rt.update(ut,Z,c||a)}ct&&ct(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const zt=new zu;zt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const pi=new En,Kg=new ie;function jg(r,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Fu(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,M,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),d(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ne&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ne&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,T=M.envMapRotation;x&&(f.envMap.value=x,pi.copy(T),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),f.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(pi)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zg(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const T=x.program;n.uniformBlockBinding(M,T)}function c(M,x){let T=i[M.id];T===void 0&&(g(M),T=u(M),i[M.id]=T,M.addEventListener("dispose",f));const y=x.program;n.updateUBOMapping(M,y);const w=t.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const x=d();M.__bindingPointIndex=x;const T=r.createBuffer(),y=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=i[M.id],T=M.uniforms,y=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,A=T.length;w<A;w++){const R=Array.isArray(T[w])?T[w]:[T[w]];for(let L=0,v=R.length;L<v;L++){const E=R[L];if(m(E,w,L,y)===!0){const O=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let V=0;for(let X=0;X<D.length;X++){const B=D[X],Y=_(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,O+V,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,x,T,y){const w=M.value,A=x+"_"+T;if(y[A]===void 0)return typeof w=="number"||typeof w=="boolean"?y[A]=w:y[A]=w.clone(),!0;{const R=y[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return y[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(M){const x=M.uniforms;let T=0;const y=16;for(let A=0,R=x.length;A<R;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,E=L.length;v<E;v++){const O=L[v],D=Array.isArray(O.value)?O.value:[O.value];for(let V=0,X=D.length;V<X;V++){const B=D[V],Y=_(B),z=T%y,st=z%Y.boundary,it=z+st;T+=st,it!==0&&y-it<Y.storage&&(T+=y-it),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=Y.storage}}}const w=T%y;return w>0&&(T+=y-w),M.__size=T,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){const x=M.target;x.removeEventListener("dispose",f);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Jg{constructor(t={}){const{canvas:e=Od(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Zn,this.toneMappingExposure=1;const x=this;let T=!1,y=0,w=0,A=null,R=-1,L=null;const v=new jt,E=new jt;let O=null;const D=new Bt(0);let V=0,X=e.width,B=e.height,Y=1,z=null,st=null;const it=new jt(0,0,X,B),ct=new jt(0,0,X,B);let Dt=!1;const zt=new gl;let q=!1,Z=!1;const _t=new ie,ut=new ie,Rt=new F,Q=new jt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Et(){return A===null?Y:1}let P=n;function le(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){const U="webgl2";if(P=le(U,b),P===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,Ut,Tt,Zt,Lt,C,S,k,K,J,$,Mt,at,ft,Vt,tt,pt,Ct,Pt,mt,Ht,It,te,I;function ht(){bt=new i_(P),bt.init(),It=new Gg(P,bt),Ut=new jm(P,bt,t,It),Tt=new zg(P),Ut.reverseDepthBuffer&&Tt.buffers.depth.setReversed(!0),Zt=new a_(P),Lt=new Tg,C=new Hg(P,bt,Tt,Lt,Ut,It,Zt),S=new Jm(x),k=new n_(x),K=new df(P),te=new $m(P,K),J=new r_(P,K,Zt,te),$=new l_(P,J,K,Zt),Pt=new o_(P,Ut,C),tt=new Zm(Lt),Mt=new Eg(x,S,k,bt,Ut,te,tt),at=new jg(x,Lt),ft=new Ag,Vt=new Dg(bt),Ct=new Ym(x,S,k,Tt,$,h,l),pt=new Og(x,$,Ut),I=new Zg(P,Zt,Ut,Tt),mt=new Km(P,bt,Zt),Ht=new s_(P,bt,Zt),Zt.programs=Mt.programs,x.capabilities=Ut,x.extensions=bt,x.properties=Lt,x.renderLists=ft,x.shadowMap=pt,x.state=Tt,x.info=Zt}ht();const W=new $g(x,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(X,B,!1))},this.getSize=function(b){return b.set(X,B)},this.setSize=function(b,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,B=U,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),H===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*Y,B*Y).floor()},this.setDrawingBufferSize=function(b,U,H){X=b,B=U,Y=H,e.width=Math.floor(b*H),e.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,U,H,G){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,U,H,G),Tt.viewport(v.copy(it).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,U,H,G){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,U,H,G),Tt.scissor(E.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){Tt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,U=!0,H=!0){let G=0;if(b){let N=!1;if(A!==null){const et=A.texture.format;N=et===ml||et===pl||et===fl}if(N){const et=A.texture.type,lt=et===Fn||et===Pi||et===Gr||et===pr||et===hl||et===dl,gt=Ct.getClearColor(),xt=Ct.getClearAlpha(),At=gt.r,wt=gt.g,St=gt.b;lt?(m[0]=At,m[1]=wt,m[2]=St,m[3]=xt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=At,g[1]=wt,g[2]=St,g[3]=xt,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ft.dispose(),Vt.dispose(),Lt.dispose(),S.dispose(),k.dispose(),$.dispose(),te.dispose(),I.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",zl),W.removeEventListener("sessionend",kl),li.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Zt.autoReset,U=pt.enabled,H=pt.autoUpdate,G=pt.needsUpdate,N=pt.type;ht(),Zt.autoReset=b,pt.enabled=U,pt.autoUpdate=H,pt.needsUpdate=G,pt.type=N}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gt(b){const U=b.target;U.removeEventListener("dispose",Gt),fe(U)}function fe(b){Pe(b),Lt.remove(b)}function Pe(b){const U=Lt.get(b).programs;U!==void 0&&(U.forEach(function(H){Mt.releaseProgram(H)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,G,N,et){U===null&&(U=nt);const lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=Xh(b,U,H,G,N);Tt.setMaterial(G,lt);let xt=H.index,At=1;if(G.wireframe===!0){if(xt=J.getWireframeAttribute(H),xt===void 0)return;At=2}const wt=H.drawRange,St=H.attributes.position;let $t=wt.start*At,ee=(wt.start+wt.count)*At;et!==null&&($t=Math.max($t,et.start*At),ee=Math.min(ee,(et.start+et.count)*At)),xt!==null?($t=Math.max($t,0),ee=Math.min(ee,xt.count)):St!=null&&($t=Math.max($t,0),ee=Math.min(ee,St.count));const ce=ee-$t;if(ce<0||ce===1/0)return;te.setup(N,G,gt,H,xt);let He,Xt=mt;if(xt!==null&&(He=K.get(xt),Xt=Ht,Xt.setIndex(He)),N.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Et()),Xt.setMode(P.LINES)):Xt.setMode(P.TRIANGLES);else if(N.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),Tt.setLineWidth(yt*Et()),N.isLineSegments?Xt.setMode(P.LINES):N.isLineLoop?Xt.setMode(P.LINE_LOOP):Xt.setMode(P.LINE_STRIP)}else N.isPoints?Xt.setMode(P.POINTS):N.isSprite&&Xt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const yt=N._multiDrawStarts,Me=N._multiDrawCounts,qt=N._multiDrawCount,un=xt?K.get(xt).bytesPerElement:1,Ui=Lt.get(G).currentProgram.getUniforms();for(let Ge=0;Ge<qt;Ge++)Ui.setValue(P,"_gl_DrawID",Ge),Xt.render(yt[Ge]/un,Me[Ge])}else if(N.isInstancedMesh)Xt.renderInstances($t,ce,N.count);else if(H.isInstancedBufferGeometry){const yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,yt);Xt.renderInstances($t,ce,Me)}else Xt.render($t,ce)};function Wt(b,U,H){b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,is(b,U,H),b.side=ei,b.needsUpdate=!0,is(b,U,H),b.side=xn):is(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),f=Vt.get(H),f.init(U),M.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const gt=et[lt];Wt(gt,H,N),G.add(gt)}else Wt(et,H,N),G.add(et)}),M.pop(),f=null,G},this.compileAsync=function(b,U,H=null){const G=this.compile(b,U,H);return new Promise(N=>{function et(){if(G.forEach(function(lt){Lt.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){N(b);return}setTimeout(et,10)}bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Le=null;function bn(b){Le&&Le(b)}function zl(){li.stop()}function kl(){li.start()}const li=new zu;li.setAnimationLoop(bn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){Le=b,W.setAnimationLoop(b),b===null?li.stop():li.start()},W.addEventListener("sessionstart",zl),W.addEventListener("sessionend",kl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),f=Vt.get(b,M.length),f.init(U),M.push(f),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),zt.setFromProjectionMatrix(ut),Z=this.localClippingEnabled,q=tt.init(this.clippingPlanes,Z),_=ft.get(b,p.length),_.init(),p.push(_),W.enabled===!0&&W.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&ua(et,U,-1/0,x.sortObjects)}ua(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,st),vt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,vt&&Ct.addToRenderList(_,b),this.info.render.frame++,q===!0&&tt.beginShadows();const H=f.state.shadowsArray;pt.render(H,b,U),q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let lt=0,gt=et.length;lt<gt;lt++){const xt=et[lt];Gl(G,N,b,xt)}vt&&Ct.render(b);for(let lt=0,gt=et.length;lt<gt;lt++){const xt=et[lt];Hl(_,b,xt,xt.viewport)}}else N.length>0&&Gl(G,N,b,U),vt&&Ct.render(b),Hl(_,b,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),te.resetDefaultState(),R=-1,L=null,M.pop(),M.length>0?(f=M[M.length-1],q===!0&&tt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ua(b,U,H,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||zt.intersectsSprite(b)){G&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const lt=$.update(b),gt=b.material;gt.visible&&_.push(b,lt,gt,H,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||zt.intersectsObject(b))){const lt=$.update(b),gt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Q.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Q.copy(lt.boundingSphere.center)),Q.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(gt)){const xt=lt.groups;for(let At=0,wt=xt.length;At<wt;At++){const St=xt[At],$t=gt[St.materialIndex];$t&&$t.visible&&_.push(b,lt,$t,H,Q.z,St)}}else gt.visible&&_.push(b,lt,gt,H,Q.z,null)}}const et=b.children;for(let lt=0,gt=et.length;lt<gt;lt++)ua(et[lt],U,H,G)}function Hl(b,U,H,G){const N=b.opaque,et=b.transmissive,lt=b.transparent;f.setupLightsView(H),q===!0&&tt.setGlobalState(x.clippingPlanes,H),G&&Tt.viewport(v.copy(G)),N.length>0&&ns(N,U,H),et.length>0&&ns(et,U,H),lt.length>0&&ns(lt,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Gl(b,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Li(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Zr:Fn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=f.state.transmissionRenderTarget[G.id],lt=G.viewport||v;et.setSize(lt.z,lt.w);const gt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(D),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),vt&&Ct.render(H);const xt=x.toneMapping;x.toneMapping=Zn;const At=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),q===!0&&tt.setGlobalState(x.clippingPlanes,G),ns(b,H,G),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),bt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let St=0,$t=U.length;St<$t;St++){const ee=U[St],ce=ee.object,He=ee.geometry,Xt=ee.material,yt=ee.group;if(Xt.side===xn&&ce.layers.test(G.layers)){const Me=Xt.side;Xt.side=Ne,Xt.needsUpdate=!0,Vl(ce,H,G,He,Xt,yt),Xt.side=Me,Xt.needsUpdate=!0,wt=!0}}wt===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}x.setRenderTarget(gt),x.setClearColor(D,V),At!==void 0&&(G.viewport=At),x.toneMapping=xt}function ns(b,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=b.length;N<et;N++){const lt=b[N],gt=lt.object,xt=lt.geometry,At=G===null?lt.material:G,wt=lt.group;gt.layers.test(H.layers)&&Vl(gt,U,H,xt,At,wt)}}function Vl(b,U,H,G,N,et){b.onBeforeRender(x,U,H,G,N,et),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,H,G,b,et),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,b,et),N.side=ei,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,b,et),N.side=xn):x.renderBufferDirect(H,U,G,N,b,et),b.onAfterRender(x,U,H,G,N,et)}function is(b,U,H){U.isScene!==!0&&(U=nt);const G=Lt.get(b),N=f.state.lights,et=f.state.shadowsArray,lt=N.state.version,gt=Mt.getParameters(b,N.state,et,U,H),xt=Mt.getProgramCacheKey(gt);let At=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?k:S).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",Gt),At=new Map,G.programs=At);let wt=At.get(xt);if(wt!==void 0){if(G.currentProgram===wt&&G.lightsStateVersion===lt)return Xl(b,gt),wt}else gt.uniforms=Mt.getUniforms(b),b.onBeforeCompile(gt,x),wt=Mt.acquireProgram(gt,xt),At.set(xt,wt),G.uniforms=gt.uniforms;const St=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=tt.uniform),Xl(b,gt),G.needsLights=Yh(b),G.lightsStateVersion=lt,G.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=wt,G.uniformsList=null,wt}function Wl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Os.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Xl(b,U){const H=Lt.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Xh(b,U,H,G,N){U.isScene!==!0&&(U=nt),C.resetTextureUnits();const et=U.fog,lt=G.isMeshStandardMaterial?U.environment:null,gt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,xt=(G.isMeshStandardMaterial?k:S).get(G.envMap||lt),At=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,wt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,ee=!!H.morphAttributes.color;let ce=Zn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=x.toneMapping);const He=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=He!==void 0?He.length:0,yt=Lt.get(G),Me=f.state.lights;if(q===!0&&(Z===!0||b!==L)){const en=b===L&&G.id===R;tt.setState(G,b,en)}let qt=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Me.state.version||yt.outputColorSpace!==gt||N.isBatchedMesh&&yt.batching===!1||!N.isBatchedMesh&&yt.batching===!0||N.isBatchedMesh&&yt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&yt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&yt.instancing===!1||!N.isInstancedMesh&&yt.instancing===!0||N.isSkinnedMesh&&yt.skinning===!1||!N.isSkinnedMesh&&yt.skinning===!0||N.isInstancedMesh&&yt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&yt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&yt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&yt.instancingMorph===!1&&N.morphTexture!==null||yt.envMap!==xt||G.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==wt||yt.morphTargets!==St||yt.morphNormals!==$t||yt.morphColors!==ee||yt.toneMapping!==ce||yt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,yt.__version=G.version);let un=yt.currentProgram;qt===!0&&(un=is(G,U,N));let Ui=!1,Ge=!1,ha=!1;const he=un.getUniforms(),zn=yt.uniforms;if(Tt.useProgram(un.program)&&(Ui=!0,Ge=!0,ha=!0),G.id!==R&&(R=G.id,Ge=!0),Ui||L!==b){Ut.reverseDepthBuffer?(_t.copy(b.projectionMatrix),zd(_t),kd(_t),he.setValue(P,"projectionMatrix",_t)):he.setValue(P,"projectionMatrix",b.projectionMatrix),he.setValue(P,"viewMatrix",b.matrixWorldInverse);const en=he.map.cameraPosition;en!==void 0&&en.setValue(P,Rt.setFromMatrixPosition(b.matrixWorld)),Ut.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Ge=!0,ha=!0)}if(N.isSkinnedMesh){he.setOptional(P,N,"bindMatrix"),he.setOptional(P,N,"bindMatrixInverse");const en=N.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),he.setValue(P,"boneTexture",en.boneTexture,C))}N.isBatchedMesh&&(he.setOptional(P,N,"batchingTexture"),he.setValue(P,"batchingTexture",N._matricesTexture,C),he.setOptional(P,N,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",N._indirectTexture,C),he.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",N._colorsTexture,C));const da=H.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&Pt.update(N,H,un),(Ge||yt.receiveShadow!==N.receiveShadow)&&(yt.receiveShadow=N.receiveShadow,he.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zn.envMap.value=xt,zn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(zn.envMapIntensity.value=U.environmentIntensity),Ge&&(he.setValue(P,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&qh(zn,ha),et&&G.fog===!0&&at.refreshFogUniforms(zn,et),at.refreshMaterialUniforms(zn,G,Y,B,f.state.transmissionRenderTarget[b.id]),Os.upload(P,Wl(yt),zn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(P,Wl(yt),zn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(P,"center",N.center),he.setValue(P,"modelViewMatrix",N.modelViewMatrix),he.setValue(P,"normalMatrix",N.normalMatrix),he.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let fa=0,$h=en.length;fa<$h;fa++){const ql=en[fa];I.update(ql,un),I.bind(ql,un)}}return un}function qh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Yh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,H){Lt.get(b.texture).__webglTexture=U,Lt.get(b.depthTexture).__webglTexture=H;const G=Lt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const H=Lt.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){A=b,y=U,w=H;let G=!0,N=null,et=!1,lt=!1;if(b){const xt=Lt.get(b);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(xt.__hasExternalTextures)C.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&Lt.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const wt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?N=wt[U][H]:N=wt[U],et=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?N=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[H]:N=wt,v.copy(b.viewport),E.copy(b.scissor),O=b.scissorTest}else v.copy(it).multiplyScalar(Y).floor(),E.copy(ct).multiplyScalar(Y).floor(),O=Dt;if(Tt.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&Tt.drawBuffers(b,N),Tt.viewport(v),Tt.scissor(E),Tt.setScissorTest(O),et){const xt=Lt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,H)}else if(lt){const xt=Lt.get(b.texture),At=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,At)}R=-1},this.readRenderTargetPixels=function(b,U,H,G,N,et,lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Tt.bindFramebuffer(P.FRAMEBUFFER,gt);try{const xt=b.texture,At=xt.format,wt=xt.type;if(!Ut.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&H>=0&&H<=b.height-N&&P.readPixels(U,H,G,N,It.convert(At),It.convert(wt),et)}finally{const xt=A!==null?Lt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(b,U,H,G,N,et,lt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const xt=b.texture,At=xt.format,wt=xt.type;if(!Ut.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&H>=0&&H<=b.height-N){Tt.bindFramebuffer(P.FRAMEBUFFER,gt);const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(U,H,G,N,It.convert(At),It.convert(wt),0);const $t=A!==null?Lt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,$t);const ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bd(P,ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(St),P.deleteSync(ee),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,H=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),N=Math.floor(b.image.width*G),et=Math.floor(b.image.height*G),lt=U!==null?U.x:0,gt=U!==null?U.y:0;C.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,lt,gt,N,et),Tt.unbindTexture()},this.copyTextureToTexture=function(b,U,H=null,G=null,N=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let et,lt,gt,xt,At,wt;H!==null?(et=H.max.x-H.min.x,lt=H.max.y-H.min.y,gt=H.min.x,xt=H.min.y):(et=b.image.width,lt=b.image.height,gt=0,xt=0),G!==null?(At=G.x,wt=G.y):(At=0,wt=0);const St=It.convert(U.format),$t=It.convert(U.type);C.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ee=P.getParameter(P.UNPACK_ROW_LENGTH),ce=P.getParameter(P.UNPACK_IMAGE_HEIGHT),He=P.getParameter(P.UNPACK_SKIP_PIXELS),Xt=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES),Me=b.isCompressedTexture?b.mipmaps[N]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,xt),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,At,wt,et,lt,St,$t,Me.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,At,wt,Me.width,Me.height,St,Me.data):P.texSubImage2D(P.TEXTURE_2D,N,At,wt,et,lt,St,$t,Me),P.pixelStorei(P.UNPACK_ROW_LENGTH,ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(P.UNPACK_SKIP_PIXELS,He),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H=null,G=null,N=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let et,lt,gt,xt,At,wt,St,$t,ee;const ce=b.isCompressedTexture?b.mipmaps[N]:b.image;H!==null?(et=H.max.x-H.min.x,lt=H.max.y-H.min.y,gt=H.max.z-H.min.z,xt=H.min.x,At=H.min.y,wt=H.min.z):(et=ce.width,lt=ce.height,gt=ce.depth,xt=0,At=0,wt=0),G!==null?(St=G.x,$t=G.y,ee=G.z):(St=0,$t=0,ee=0);const He=It.convert(U.format),Xt=It.convert(U.type);let yt;if(U.isData3DTexture)C.setTexture3D(U,0),yt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),yt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Me=P.getParameter(P.UNPACK_ROW_LENGTH),qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),un=P.getParameter(P.UNPACK_SKIP_PIXELS),Ui=P.getParameter(P.UNPACK_SKIP_ROWS),Ge=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(yt,N,St,$t,ee,et,lt,gt,He,Xt,ce.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,N,St,$t,ee,et,lt,gt,He,ce.data):P.texSubImage3D(yt,N,St,$t,ee,et,lt,gt,He,Xt,ce),P.pixelStorei(P.UNPACK_ROW_LENGTH,Me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ui),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge),N===0&&U.generateMipmaps&&P.generateMipmap(yt),Tt.unbindTexture()},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){y=0,w=0,A=null,Tt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_l?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===ia?"display-p3":"srgb"}}class xl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new xl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qg extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class t0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const we=new F;class $s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bs extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Cr=new F,ji=new F,Zi=new F,Ji=new Ot,Pr=new Ot,Xu=new ie,bs=new F,Lr=new F,As=new F,zc=new Ot,Xa=new Ot,kc=new Ot;class qa extends be{constructor(t=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new cn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new t0(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new $s(n,3,0,!1)),Ki.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Zi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ws(bs.set(-.5,-.5,0),Zi,a,ji,i,s),ws(Lr.set(.5,-.5,0),Zi,a,ji,i,s),ws(As.set(.5,.5,0),Zi,a,ji,i,s),zc.set(0,0),Xa.set(1,0),kc.set(1,1);let o=t.ray.intersectTriangle(bs,Lr,As,!1,Cr);if(o===null&&(ws(Lr.set(-.5,.5,0),Zi,a,ji,i,s),Xa.set(0,1),o=t.ray.intersectTriangle(bs,As,Lr,!1,Cr),o===null))return;const l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:sn.getInterpolation(Cr,bs,Lr,As,zc,Xa,kc,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ws(r,t,e,n,i,s){Ji.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Pr.x=s*Ji.x-i*Ji.y,Pr.y=i*Ji.x+s*Ji.y):Pr.copy(Ji),r.copy(t),r.x+=Pr.x,r.y+=Pr.y,r.applyMatrix4(Xu)}class qu extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hc=new ie,$o=new Lu,Rs=new ra,Cs=new F;class e0 extends be{constructor(t=new cn,e=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,t.ray.intersectsSphere(Rs)===!1)return;Hc.copy(i).invert(),$o.copy(t.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,_=m;g<_;g++){const f=c.getX(g);Cs.fromBufferAttribute(d,f),Gc(Cs,f,l,i,t,e,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,_=m;g<_;g++)Cs.fromBufferAttribute(d,g),Gc(Cs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gc(r,t,e,n,i,s,a){const o=$o.distanceSqToPoint(r);if(o<e){const l=new F;$o.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ya extends Ce{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends cn{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/i,m=new F,g=new Ot;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){const p=s+f/n*a;m.x=d*Math.cos(p),m.y=d*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const f=_*(n+1);for(let p=0;p<n;p++){const M=p+f,x=M,T=M+n+1,y=M+n+2,w=M+1;o.push(x,T,w),o.push(T,y,w)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class er extends cn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new F,h=new F,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let y=0;y<=e;y++){const w=y/e;d.x=-t*Math.cos(i+w*s)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+w*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),f.push(w+T,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=u[p][M+1],T=u[p][M],y=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&m.push(x,T,w),(p!==n-1||l<Math.PI)&&m.push(T,y,w)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $a extends Di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yu extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ka=new ie,Vc=new F,Wc=new F;class n0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xc=new ie,Dr=new F,ja=new F;class i0 extends n0{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class qc extends Yu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class r0 extends Yu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class s0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function Dn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $u(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vr={duration:.5,overwrite:!1,delay:0},Sl,Se,re,on=1e8,Qt=1/on,Ko=Math.PI*2,a0=Ko/4,o0=0,Ku=Math.sqrt,l0=Math.cos,c0=Math.sin,xe=function(t){return typeof t=="string"},ue=function(t){return typeof t=="function"},On=function(t){return typeof t=="number"},yl=function(t){return typeof t>"u"},Tn=function(t){return typeof t=="object"},Fe=function(t){return t!==!1},El=function(){return typeof window<"u"},Ps=function(t){return ue(t)||xe(t)},ju=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ae=Array.isArray,u0=/random\([^)]+\)/g,h0=/,\s*/g,$c=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Za=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ju=/[+-]=-?[.\d]+/,d0=/[^,'"\[\]\s]+/gi,f0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,gn,jo,Tl,Qe={},Ks={},Qu,th=function(t){return(Ks=gr(t,Qe))&&ke},bl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Wr=function(t,e){return!e&&console.warn(t)},eh=function(t,e){return t&&(Qe[t]=e)&&Ks&&(Ks[t]=e)||Qe},Xr=function(){return 0},p0={suppressEvents:!0,isStart:!0,kill:!1},zs={suppressEvents:!0,kill:!1},m0={suppressEvents:!0},Al={},Qn=[],Zo={},nh,Xe={},Ja={},Kc=30,ks=[],wl="",Rl=function(t){var e=t[0],n,i;if(Tn(e)||ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ks.length;i--&&!ks[i].targetTest(e););n=ks[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Th(t[i],n)))||t.splice(i,1);return t},Ai=function(t){return t._gsap||Rl(ln(t))[0]._gsap},ih=function(t,e,n){return(n=t[e])&&ue(n)?t[e]():yl(n)&&t.getAttribute&&t.getAttribute(e)||n},Oe=function(t,e){return(t=t.split(",")).forEach(e)||t},de=function(t){return Math.round(t*1e5)/1e5||0},se=function(t){return Math.round(t*1e7)/1e7||0},or=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},js=function(){var t=Qn.length,e=Qn.slice(0),n,i;for(Zo={},Qn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cl=function(t){return!!(t._initted||t._startAt||t.add)},rh=function(t,e,n,i){Qn.length&&!Se&&js(),t.render(e,n,!!(Se&&e<0&&Cl(t))),Qn.length&&!Se&&js()},sh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(d0).length<2?e:xe(t)?t.trim():t},ah=function(t){return t},tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},g0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},gr=function(t,e){for(var n in e)t[n]=e[n];return t},jc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Tn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Zs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zr=function(t){var e=t.parent||ae,n=t.keyframes?g0(Ae(t.keyframes)):tn;if(Fe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},v0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},oh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},oa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ii=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},wi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},x0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jo=function(t,e,n,i){return t._startAt&&(Se?t._startAt.revert(zs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},M0=function r(t){return!t||t._ts&&r(t.parent)},Zc=function(t){return t._repeat?vr(t._tTime,t=t.duration()+t._rDelay)*t:0},vr=function(t,e){var n=Math.floor(t=se(t/e));return t&&n===t?n-1:n},Js=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},la=function(t){return t._end=se(t._start+(t._tDur/Math.abs(t._ts||t._rts||Qt)||0))},ca=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),la(t),n._dirty||wi(n,t)),t},lh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Js(t.rawTime(),e),(!e._dur||es(0,e.totalDuration(),n)-e._tTime>Qt)&&e.render(n,!0)),wi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Qt}},Sn=function(t,e,n,i){return e.parent&&ii(e),e._start=se((On(n)?n:n||t!==ae?rn(t,n,e):t._time)+e._delay),e._end=se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),oh(t,e,"_first","_last",t._sort?"_start":0),Qo(e)||(t._recent=e),i||lh(t,e),t._ts<0&&ca(t,t._tTime),t},ch=function(t,e){return(Qe.ScrollTrigger||bl("scrollTrigger",e))&&Qe.ScrollTrigger.create(e,t)},uh=function(t,e,n,i,s){if(Ll(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Se&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&nh!==Ye.frame)return Qn.push(t),t._lazy=[s,i],1},S0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Qo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},y0=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&S0(t)&&!(!t._initted&&Qo(t))||(t._ts<0||t._dp._ts<0)&&!Qo(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=es(0,t._tDur,e),u=vr(l,o),t._yoyo&&u&1&&(a=1-a),u!==vr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Se||i||t._zTime===Qt||!e&&t._zTime){if(!t._initted&&uh(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Qt:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Jo(t,e,n,!0),t._onUpdate&&!n&&$e(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$e(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ii(t,1),!n&&!Se&&($e(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},E0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},xr=function(t,e,n,i){var s=t._repeat,a=se(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:se(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ca(t,t._tTime=t._tDur*o),t.parent&&la(t),n||wi(t.parent,t),t},Jc=function(t){return t instanceof Ue?wi(t):xr(t,t._dur)},T0={_start:0,endTime:Xr,totalDuration:Xr},rn=function r(t,e,n){var i=t.labels,s=t._recent||T0,a=t.duration()>=on?s.endTime(!1):t._dur,o,l,c;return xe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ae(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},kr=function(t,e,n){var i=On(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fe(l.vars.inherit)&&l.parent;a.immediateRender=Fe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new me(e[0],a,e[s+1])},oi=function(t,e){return t||t===0?e(t):e},es=function(t,e,n){return n<t?t:n>e?e:n},Te=function(t,e){return!xe(t)||!(e=f0.exec(t))?"":e[1]},b0=function(t,e,n){return oi(n,function(i){return es(t,e,i)})},tl=[].slice,hh=function(t,e){return t&&Tn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Tn(t[0]))&&!t.nodeType&&t!==gn},A0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return xe(i)&&!e||hh(i,1)?(s=n).push.apply(s,ln(i)):n.push(i)})||n},ln=function(t,e,n){return re&&!e&&re.selector?re.selector(t):xe(t)&&!n&&(jo||!Mr())?tl.call((e||Tl).querySelectorAll(t),0):Ae(t)?A0(t,n):hh(t)?tl.call(t,0):t?[t]:[]},el=function(t){return t=ln(t)[0]||Wr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ln(e,n.querySelectorAll?n:n===t?Wr("Invalid scope")||Tl.createElement("div"):t)}},dh=function(t){return t.sort(function(){return .5-Math.random()})},fh=function(t){if(ue(t))return t;var e=Tn(t)?t:{each:t},n=Ri(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,d=i;return xe(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,m,g){var _=(g||e).length,f=a[_],p,M,x,T,y,w,A,R,L;if(!f){if(L=e.grid==="auto"?0:(e.grid||[1,on])[1],!L){for(A=-on;A<(A=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(f=a[_]=[],p=l?Math.min(L,_)*u-.5:i%L,M=L===on?0:l?_*d/L-.5:i/L|0,A=0,R=on,w=0;w<_;w++)x=w%L-p,T=M-(w/L|0),f[w]=y=c?Math.abs(c==="y"?T:x):Ku(x*x+T*T),y>A&&(A=y),y<R&&(R=y);i==="random"&&dh(f),f.max=A-R,f.min=R,f.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(i==="edges"?-1:1),f.b=_<0?s-_:s,f.u=Te(e.amount||e.each)||0,n=n&&_<0?z0(n):n}return _=(f[h]-f.min)/f.max||0,se(f.b+(n?n(_):_)*f.v)+f.u}},nl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(On(n)?0:Te(n))}},ph=function(t,e){var n=Ae(t),i,s;return!n&&Tn(t)&&(i=n=t.radius||on,t.values?(t=ln(t.values),(s=!On(t[0]))&&(i*=i)):t=nl(t.increment)),oi(e,n?ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=on,u=0,d=t.length,h,m;d--;)s?(h=t[d].x-o,m=t[d].y-l,h=h*h+m*m):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:a,s||u===a||On(a)?u:u+Te(a)}:nl(t))},mh=function(t,e,n,i){return oi(Ae(t)?!e:n===!0?!!(n=0):!i,function(){return Ae(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},w0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},R0=function(t,e){return function(n){return t(parseFloat(n))+(e||Te(n))}},C0=function(t,e,n){return gh(t,e,0,1,n)},_h=function(t,e,n){return oi(n,function(i){return t[~~e(i)]})},P0=function r(t,e,n){var i=e-t;return Ae(t)?_h(t,r(0,t.length),e):oi(n,function(s){return(i+(s-t)%i)%i+t})},L0=function r(t,e,n){var i=e-t,s=i*2;return Ae(t)?_h(t,r(0,t.length-1),e):oi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},qr=function(t){return t.replace(u0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(h0);return mh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},gh=function(t,e,n,i,s){var a=e-t,o=i-n;return oi(s,function(l){return n+((l-t)/a*o||0)})},D0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=xe(t),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ae(t)&&!Ae(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=gr(Ae(t)?[]:{},t));if(!u){for(l in e)Pl.call(o,t,l,"get",e[l]);s=function(g){return Ul(g,o)||(a?t.p:t)}}}return oi(n,s)},Qc=function(t,e,n){var i=t.labels,s=on,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},$e=function(t,e,n){var i=t.vars,s=i[e],a=re,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Qn.length&&js(),o&&(re=o),u=l?s.apply(c,l):s.call(c),re=a,u},Fr=function(t){return ii(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Se),t.progress()<1&&$e(t,"onInterrupt"),t},ir,vh=[],xh=function(t){if(t)if(t=!t.name&&t.default||t,El()||t.headless){var e=t.name,n=ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Xr,render:Ul,add:Pl,kill:K0,modifier:$0,rawVars:0},a={targetTest:0,get:0,getSetter:Il,aliases:{},register:0};if(Mr(),t!==i){if(Xe[e])return;tn(i,tn(Zs(t,s),a)),gr(i.prototype,gr(s,Zs(t,a))),Xe[i.prop=e]=i,t.targetTest&&(ks.push(i),Al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}eh(e,i),t.register&&t.register(ke,i,Be)}else vh.push(t)},Jt=255,Or={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Qa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Jt+.5|0},Mh=function(t,e,n){var i=t?On(t)?[t>>16,t>>8&Jt,t&Jt]:0:Or.black,s,a,o,l,c,u,d,h,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Or[t])i=Or[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Jt,i&Jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Jt,t&Jt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match($c),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Qa(l+1/3,s,a),i[1]=Qa(l,s,a),i[2]=Qa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Zu),n&&i.length<4&&(i[3]=1),i}else i=t.match($c)||Or.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Jt,a=i[1]/Jt,o=i[2]/Jt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===s?(a-o)/m+(a<o?6:0):d===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Sh=function(t){var e=[],n=[],i=-1;return t.split(ti).forEach(function(s){var a=s.match(nr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},tu=function(t,e,n){var i="",s=(t+i).match(ti),a=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Mh(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Sh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ti,"1").split(nr),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ti),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ti=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Or)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),I0=/hsl[a]?\(/,yh=function(t){var e=t.join(" "),n;if(ti.lastIndex=0,ti.test(e))return n=I0.test(e),t[1]=tu(t[1],n),t[0]=tu(t[0],n,Sh(t[1])),!0},Yr,Ye=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,m,g=function _(f){var p=r()-i,M=f===!0,x,T,y,w;if((p>t||p<0)&&(n+=p-e),i+=p,y=i-n,x=y-a,(x>0||M)&&(w=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=x+(x>=s?4:s-x),T=1),M||(l=c(_)),T)for(m=0;m<o.length;m++)o[m](y,h,w,f)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return h/(1e3/(f||60))},wake:function(){Qu&&(!jo&&El()&&(gn=jo=window,Tl=gn.document||{},Qe.gsap=ke,(gn.gsapVersions||(gn.gsapVersions=[])).push(ke.version),th(Ks||gn.GreenSockGlobals||!gn.gsap&&gn||{}),vh.forEach(xh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(f){return setTimeout(f,a-d.time*1e3+1|0)},Yr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yr=0,c=Xr},lagSmoothing:function(f,p){t=f||1/0,e=Math.min(p||33,t)},fps:function(f){s=1e3/(f||240),a=d.time*1e3+s},add:function(f,p,M){var x=p?function(T,y,w,A){f(T,y,w,A),d.remove(x)}:f;return d.remove(f),o[M?"unshift":"push"](x),Mr(),x},remove:function(f,p){~(p=o.indexOf(f))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},d}(),Mr=function(){return!Yr&&Ye.wake()},kt={},U0=/^[\d.\-M][\d.\-,\s]/,N0=/["']/g,F0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(N0,"").trim():+c,i=l.substr(o+1).trim();return e},O0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},B0=function(t){var e=(t+"").split("("),n=kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[F0(e[1])]:O0(t).split(",").map(sh)):kt._CE&&U0.test(t)?kt._CE("",t):n},z0=function(t){return function(e){return 1-t(1-e)}},Ri=function(t,e){return t&&(ue(t)?t:kt[t]||B0(t))||e},Ii=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Oe(t,function(o){kt[o]=Qe[o]=s,kt[a=o.toLowerCase()]=n;for(var l in s)kt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=kt[o+"."+l]=s[l]}),s},Eh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},to=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ko*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*c0((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Eh(o);return s=Ko/s,l.config=function(c,u){return r(t,c,u)},l},eo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Eh(n);return i.config=function(s){return r(t,s)},i};Oe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ii(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;Ii("Elastic",to("in"),to("out"),to());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ii("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ii("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ii("Circ",function(r){return-(Ku(1-r*r)-1)});Ii("Sine",function(r){return r===1?1:-l0(r*a0)+1});Ii("Back",eo("in"),eo("out"),eo());kt.SteppedEase=kt.steps=Qe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Qt;return function(o){return((i*es(0,a,o)|0)+s)*n}}};Vr.ease=kt["quad.out"];Oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wl+=r+","+r+"Params,"});var Th=function(t,e){this.id=o0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ih,this.set=e?e.getSetter:Il},$r=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xr(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),Yr||Ye.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ca(this,n),!s._dp||s.parent||lh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Qt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?vr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qt?0:this._rts,this.totalTime(es(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),la(this),x0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=se(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Fe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=m0);var i=Se;return Se=n,Cl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Se=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(rn(this,n),Fe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fe(i)),this._dur||(this._zTime=-Qt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Qt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ue(n)?n:ah,l=function(){var u=i.then;i.then=null,s&&s(),ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Fr(this)},r}();tn($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var Ue=function(r){$u(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fe(n.sortChildren),ae&&Sn(n.parent||ae,Dn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ch(Dn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return kr(0,arguments,this),this},e.from=function(i,s,a){return kr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return kr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,zr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new me(i,s,rn(this,a),1),this},e.call=function(i,s,a){return Sn(this,me.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new me(i,a,rn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,zr(a).immediateRender=Fe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,zr(o).immediateRender=Fe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:se(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,_,f,p,M,x,T,y,w,A;if(this!==ae&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,T=this._start,x=this._ts,p=!x,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,s,a);if(h=se(u%f),u===l?(_=this._repeat,h=c):(y=se(u/f),_=~~y,_&&_===y&&(h=c,_--),h>c&&(h=c)),y=vr(this._tTime,f),!o&&this._tTime&&y!==_&&this._tTime-y*f-this._dur<=0&&(y=_),w&&_&1&&(h=c-h,A=1),_!==y&&!this._lock){var R=w&&y&1,L=R===(w&&_&1);if(_<y&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(A?0:se(_*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&$e(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=E0(this,se(o),se(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&($e(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Qt);break}}m=g}else{m=this._last;for(var v=i<0?i:h;m;){if(g=m._prev,(m._act||v<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(v-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(v-m._start)*m._ts,s,a||Se&&Cl(m)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=v?-Qt:Qt);break}}m=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Qt)._zTime=h>=o?1:-1,this._ts))return this._start=T,la(this),this.render(i,s,a);this._onUpdate&&!s&&$e(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ii(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&($e(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(On(s)||(s=rn(this,s,i)),!(i instanceof $r)){if(Ae(i))return i.forEach(function(o){return a.add(o,s)}),this;if(xe(i))return this.addLabel(i,s);if(ue(i))i=me.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-on);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof me?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return xe(i)?this.removeLabel(i):ue(i)?this.killTweensOf(i):(i.parent===this&&oa(this,i),i===this._recent&&(this._recent=this._last),wi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=se(Ye.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=rn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=me.delayedCall(0,s||Xr,a);return o.data="isPause",this._hasPause=1,Sn(this,o,rn(this,i))},e.removePause=function(i){var s=this._first;for(i=rn(this,i);s;)s._start===i&&s.data==="isPause"&&ii(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Yn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ln(i),l=this._first,c=On(s),u;l;)l instanceof me?_0(l._targets,o)&&(c?(!Yn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=rn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=me.to(a,tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Qt,onStart:function(){if(a.pause(),!m){var f=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==f&&xr(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,tn({startAt:{time:rn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Qc(this,rn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Qc(this,rn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Qt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=se(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return wi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=on,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Sn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=se(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;xr(a,a===ae&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ae._ts&&(rh(ae,Js(i,ae)),nh=Ye.frame),Ye.frame>=Kc){Kc+=Je.autoSleep||120;var s=ae._first;if((!s||!s._ts)&&Je.autoSleep&&Ye._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ye.sleep()}}},t}($r);tn(Ue.prototype,{_lock:0,_hasPause:0,_forcing:0});var k0=function(t,e,n,i,s,a,o){var l=new Be(this._pt,t,e,0,1,Ph,null,s),c=0,u=0,d,h,m,g,_,f,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=qr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),h=n.match(Za)||[];d=Za.exec(i);)g=d[0],_=i.substring(c,d.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(f=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:f,c:g.charAt(1)==="="?or(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},c=Za.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ju.test(i)||p)&&(l.e=0),this._pt=l,l},Pl=function(t,e,n,i,s,a,o,l,c,u){ue(i)&&(i=i(s||0,t,a));var d=t[e],h=n!=="get"?n:ue(d)?c?t[e.indexOf("set")||!ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=ue(d)?c?X0:Rh:Dl,g;if(xe(i)&&(~i.indexOf("random(")&&(i=qr(i)),i.charAt(1)==="="&&(g=or(h,i)+(Te(h)||0),(g||g===0)&&(i=g))),!u||h!==i||il)return!isNaN(h*i)&&i!==""?(g=new Be(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?Y0:Ch,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&bl(e,i),k0.call(this,t,e,h,i,m,l||Je.stringFilter,c))},H0=function(t,e,n,i,s){if(ue(t)&&(t=Hr(t,s,e,n,i)),!Tn(t)||t.style&&t.nodeType||Ae(t)||ju(t))return xe(t)?Hr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Hr(t[o],s,e,n,i);return a},bh=function(t,e,n,i,s,a){var o,l,c,u;if(Xe[t]&&(o=new Xe[t]).init(s,o.rawVars?e[t]:H0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Be(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ir))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Yn,il,Ll=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,f=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:f,x=t._overwrite==="auto"&&!Sl,T=t.timeline,y=i.easeReverse||d,w,A,R,L,v,E,O,D,V,X,B,Y,z;if(T&&(!h||!s)&&(s="none"),t._ease=Ri(s,Vr.ease),t._rEase=y&&(Ri(y)||t._ease),t._from=!T&&!!i.runBackwards,t._from&&(t.ratio=1),!T||h&&!i.stagger){if(D=f[0]?Ai(f[0]).harness:0,Y=D&&i[D.prop],w=Zs(i,Al),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?zs:p0),_._lazy=0),a){if(ii(t._startAt=me.set(f,tn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Fe(l),startAt:null,delay:0,onUpdate:c&&function(){return $e(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se||!o&&!m)&&t._startAt.revert(zs),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),R=tn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Fe(l),immediateRender:o,stagger:0,parent:p},w),Y&&(R[D.prop]=Y),ii(t._startAt=me.set(f,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se?t._startAt.revert(zs):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Qt,Qt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Fe(l)||l&&!g,A=0;A<f.length;A++){if(v=f[A],O=v._gsap||Rl(f)[A]._gsap,t._ptLookup[A]=X={},Zo[O.id]&&Qn.length&&js(),B=M===f?A:M.indexOf(v),D&&(V=new D).init(v,Y||w,t,B,M)!==!1&&(t._pt=L=new Be(t._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(st){X[st]=L}),V.priority&&(E=1)),!D||Y)for(R in w)Xe[R]&&(V=bh(R,w,t,B,v,M))?V.priority&&(E=1):X[R]=L=Pl.call(t,v,R,"get",w[R],B,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(v,t._op[A]),x&&t._pt&&(Yn=t,ae.killTweensOf(v,X,t.globalTime(e)),z=!t.parent,Yn=0),t._pt&&l&&(Zo[O.id]=1)}E&&Lh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,h&&e<=0&&T.render(on,!0,!0)},G0=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,m;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,m=t._targets.length;m--;){if(u=h[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return il=1,t.vars[e]="+=0",Ll(t,o),il=0,l?Wr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=de(n)+Te(d.e)),d.b&&(d.b=u.s+Te(d.b))},V0=function(t,e){var n=t[0]?Ai(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=gr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},W0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ae(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Hr=function(t,e,n,i,s){return ue(t)?t.call(e,n,i,s):xe(t)&&~t.indexOf("random(")?qr(t):t},Ah=wl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wh={};Oe(Ah+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wh[r]=1});var me=function(r){$u(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zr(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,f=l.scrollTrigger,p=i.parent||ae,M=(Ae(n)||ju(n)?On(n[0]):"length"in i)?[n]:ln(n),x,T,y,w,A,R,L,v;if(o._targets=M.length?Rl(M):Wr("GSAP target "+n+" not found. https://gsap.com",!Je.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||h||Ps(c)||Ps(u)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Ue({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),x.kill(),x.parent=x._dp=Dn(o),x._start=0,h||Ps(c)||Ps(u)){if(w=M.length,L=h&&fh(h),Tn(h))for(A in h)~Ah.indexOf(A)&&(v||(v={}),v[A]=h[A]);for(T=0;T<w;T++)y=Zs(i,wh),y.stagger=0,E&&(y.easeReverse=E),v&&gr(y,v),R=M[T],y.duration=+Hr(c,Dn(o),T,R,M),y.delay=(+Hr(u,Dn(o),T,R,M)||0)-o._delay,!h&&w===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),x.to(R,y,L?L(T,R,M):0),x._ease=kt.none;x.duration()?c=u=0:o.timeline=0}else if(g){zr(tn(x.vars.defaults,{ease:"none"})),x._ease=Ri(g.ease||i.ease||"none");var O=0,D,V,X;if(Ae(g))g.forEach(function(B){return x.to(M,B,">")}),x.duration();else{y={};for(A in g)A==="ease"||A==="easeEach"||W0(A,g[A],y,g.easeEach);for(A in y)for(D=y[A].sort(function(B,Y){return B.t-Y.t}),O=0,T=0;T<D.length;T++)V=D[T],X={ease:V.e,duration:(V.t-(T?D[T-1].t:0))/100*c},X[A]=V.v,x.to(M,X,O),O+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return m===!0&&!Sl&&(Yn=Dn(o),ae.killTweensOf(M),Yn=0),Sn(p,Dn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===se(p._time)&&Fe(d)&&M0(Dn(o))&&p.data!=="nested")&&(o._tTime=-Qt,o.render(Math.max(0,-u)||0)),f&&ch(Dn(o),f),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Qt&&!u?l:i<Qt?0:i,h,m,g,_,f,p,M,x;if(!c)y0(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=se(d%_),d===l?(g=this._repeat,h=c):(f=se(d/_),g=~~f,g&&g===f?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),f=vr(this._tTime,_),h===o&&!a&&this._initted&&g===f)return this._tTime=d,this;g!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(se(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(uh(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==f))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var T=h<o;if(T!==this._inv){var y=T?o:c-o;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(T?-1:1)/y:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!f&&($e(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Jo(this,i,s,a),$e(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!s&&this.parent&&$e(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Jo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ii(this,1),!s&&!(u&&!o)&&(d||o||p)&&($e(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Yr||Ye.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ll(this,c),u=this._ease(c/this._dur),G0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(ca(this,0),this.parent||oh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Se),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yn&&Yn.vars.overwrite!==!0)._first||Fr(this),this.parent&&a!==this.timeline.totalDuration()&&xr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ln(i):o,c=this._ptLookup,u=this._pt,d,h,m,g,_,f,p;if((!s||s==="all")&&v0(o,l))return s==="all"&&(this._pt=0),Fr(this);for(d=this._op=this._op||[],s!=="all"&&(xe(s)&&(_={},Oe(s,function(M){return _[M]=1}),s=_),s=V0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,m={}):(m=d[p]=d[p]||{},g=s);for(_ in g)f=h&&h[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&oa(this,f,"_pt"),delete h[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Fr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return kr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return kr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ae.killTweensOf(i,s,a)},t}($r);tn(me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Oe("staggerTo,staggerFrom,staggerFromTo",function(r){me[r]=function(){var t=new Ue,e=tl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Dl=function(t,e,n){return t[e]=n},Rh=function(t,e,n){return t[e](n)},X0=function(t,e,n,i){return t[e](i.fp,n)},q0=function(t,e,n){return t.setAttribute(e,n)},Il=function(t,e){return ue(t[e])?Rh:yl(t[e])&&t.setAttribute?q0:Dl},Ch=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Y0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ph=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ul=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$0=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},K0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?oa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},j0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Be=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ch,this.d=l||this,this.set=c||Dl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=j0,this.m=n,this.mt=s,this.tween=i},r}();Oe(wl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Al[r]=1});Qe.TweenMax=Qe.TweenLite=me;Qe.TimelineLite=Qe.TimelineMax=Ue;ae=new Ue({sortChildren:!1,defaults:Vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Je.stringFilter=yh;var Ci=[],Hs={},Z0=[],eu=0,J0=0,no=function(t){return(Hs[t]||Z0).map(function(e){return e()})},rl=function(){var t=Date.now(),e=[];t-eu>2&&(no("matchMediaInit"),Ci.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=gn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),no("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),eu=t,no("matchMedia"))},Dh=function(){function r(e,n){this.selector=n&&el(n),this.data=[],this._r=[],this.isReverted=!1,this.id=J0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ue(n)&&(s=i,i=n,n=ue);var a=this,o=function(){var c=re,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=el(s)),re=a,d=i.apply(a,arguments),ue(d)&&a._r.push(d),re=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ue?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof me)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ci.length;a--;)Ci[a].id===this.id&&Ci.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Q0=function(){function r(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Tn(n)||(n={matches:n});var a=new Dh(0,s||this.scope),o=a.conditions={},l,c,u;re&&!a.selector&&(a.selector=re.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=gn.matchMedia(n[c]),l&&(Ci.indexOf(a)<0&&Ci.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rl):l.addEventListener("change",rl)));return u&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Qs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xh(i)})},timeline:function(t){return new Ue(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){xe(t)&&(t=ln(t)[0]);var s=Ai(t||{}).get,a=n?ah:sh;return n==="native"&&(n=""),t&&(e?a((Xe[e]&&Xe[e].get||s)(t,e,n,i)):function(o,l,c){return a((Xe[o]&&Xe[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ln(t),t.length>1){var i=t.map(function(u){return ke.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var a=Xe[e],o=Ai(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;ir._pt=0,d.init(t,n?u+n:u,ir,0,[t]),d.render(1,d),ir._pt&&Ul(1,ir)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=ke.to(t,tn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ri(t.ease,Vr.ease)),jc(Vr,t||{})},config:function(t){return jc(Je,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xe[o]&&!Qe[o]&&Wr(e+" effect requires "+o+" plugin.")}),Ja[e]=function(o,l,c){return n(ln(o),tn(l||{},s),c)},a&&(Ue.prototype[e]=function(o,l,c){return this.add(Ja[e](o,Tn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){kt[t]=Ri(e)},parseEase:function(t,e){return arguments.length?Ri(t,e):kt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ue(t),i,s;for(n.smoothChildTiming=Fe(t.smoothChildTiming),ae.remove(n),n._dp=0,n._time=n._tTime=ae._time,i=ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof me&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(ae,n,0),n},context:function(t,e){return t?new Dh(t,e):re},matchMedia:function(t){return new Q0(t)},matchMediaRefresh:function(){return Ci.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||rl()},addEventListener:function(t,e){var n=Hs[t]||(Hs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Hs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:P0,wrapYoyo:L0,distribute:fh,random:mh,snap:ph,normalize:C0,getUnit:Te,clamp:b0,splitColor:Mh,toArray:ln,selector:el,mapRange:gh,pipe:w0,unitize:R0,interpolate:D0,shuffle:dh},install:th,effects:Ja,ticker:Ye,updateRoot:Ue.updateRoot,plugins:Xe,globalTimeline:ae,core:{PropTween:Be,globals:eh,Tween:me,Timeline:Ue,Animation:$r,getCache:Ai,_removeLinkedListItem:oa,reverting:function(){return Se},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return Sl=t}}};Oe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qs[r]=me[r]});Ye.add(Ue.updateRoot);ir=Qs.to({},{duration:0});var tv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ev=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=tv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},io=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(xe(s)&&(l={},Oe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}ev(o,s)}}}},ke=Qs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Se?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},io("roundProps",nl),io("modifiers"),io("snap",ph))||Qs;me.version=Ue.version=ke.version="3.15.0";Qu=1;El()&&Mr();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nu,$n,lr,Nl,Ti,iu,Fl,nv=function(){return typeof window<"u"},Bn={},xi=180/Math.PI,cr=Math.PI/180,Qi=Math.atan2,ru=1e8,Ol=/([A-Z])/g,iv=/(left|right|width|margin|padding|x)/i,rv=/[\s,\(]\S/,yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},av=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ov=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ih=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Uh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},cv=function(t,e,n){return t.style[e]=n},uv=function(t,e,n){return t.style.setProperty(e,n)},hv=function(t,e,n){return t._gsap[e]=n},dv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},fv=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},pv=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},oe="transform",ze=oe+"Origin",mv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Bn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=In(i,o)}):this.tfm[t]=a.x?a[t]:In(i,t),t===ze&&(this.tfm.zOrigin=a.zOrigin);else return yn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ze,e,"")),t=oe}(s||e)&&this.props.push(t,e,s[t])},Nh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_v=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ol,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Fl(),(!s||!s.isStart)&&!n[oe]&&(Nh(n),i.zOrigin&&n[ze]&&(n[ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fh=function(t,e){var n={target:t,props:[],revert:_v,save:mv};return t._gsap||ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Oh,al=function(t,e){var n=$n.createElementNS?$n.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$n.createElement(t);return n&&n.style?n:$n.createElement(t)},Ke=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ol,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Sr(e)||e,1)||""},su="O,Moz,ms,Ms,Webkit".split(","),Sr=function(t,e,n){var i=e||Ti,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(su[a]+t in s););return a<0?null:(a===3?"ms":a>=0?su[a]:"")+t},ol=function(){nv()&&window.document&&(nu=window,$n=nu.document,lr=$n.documentElement,Ti=al("div")||{style:{}},al("div"),oe=Sr(oe),ze=oe+"Origin",Ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Oh=!!Sr("perspective"),Fl=ke.core.reverting,Nl=1)},au=function(t){var e=t.ownerSVGElement,n=al("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),lr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),lr.removeChild(n),s},ou=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bh=function(t){var e,n;try{e=t.getBBox()}catch{e=au(t),n=1}return e&&(e.width||e.height)||n||(e=au(t)),e&&!e.width&&!e.x&&!e.y?{x:+ou(t,["x","cx","x1"])||0,y:+ou(t,["y","cy","y1"])||0,width:0,height:0}:e},zh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bh(t))},ri=function(t,e){if(e){var n=t.style,i;e in Bn&&e!==ze&&(e=oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ol,"-$1").toLowerCase())):n.removeAttribute(e)}},Kn=function(t,e,n,i,s,a){var o=new Be(t._pt,e,n,0,1,a?Uh:Ih);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},lu={deg:1,rad:1,turn:1},gv={grid:1,flex:1},si=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ti.style,l=iv.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,_,f,p;if(i===a||!s||lu[i]||lu[a])return s;if(a!=="px"&&!h&&(s=r(t,e,n,"px")),p=t.getCTM&&zh(t),(m||a==="%")&&(Bn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],de(m?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===$n||!_.appendChild)&&(_=$n.body),f=_._gsap,f&&m&&f.width&&l&&f.time===Ye.time&&!f.uncache)return de(s/f.width*d);if(m&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,g=t[u],M?t.style[e]=M:ri(t,e)}else(m||a==="%")&&!gv[Ke(_,"display")]&&(o.position=Ke(t,"position")),_===t&&(o.position="static"),_.appendChild(Ti),g=Ti[u],_.removeChild(Ti),o.position="absolute";return l&&m&&(f=Ai(_),f.time=Ye.time,f.width=_[u]),de(h?g*s/d:g&&s?d/g*s:0)},In=function(t,e,n,i){var s;return Nl||ol(),e in yn&&e!=="transform"&&(e=yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(s=jr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ea(Ke(t,ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ta[e]&&ta[e](t,e,n)||Ke(t,e)||ih(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?si(t,e,s,n)+n:s},vv=function(t,e,n,i){if(!n||n==="none"){var s=Sr(e,t,1),a=s&&Ke(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Ke(t,"borderTopColor"))}var o=new Be(this._pt,t.style,e,0,1,Ph),l=0,c=0,u,d,h,m,g,_,f,p,M,x,T,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ke(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ke(t,e)||i,_?t.style[e]=_:ri(t,e)),u=[n,i],yh(u),n=u[0],i=u[1],h=n.match(nr)||[],y=i.match(nr)||[],y.length){for(;d=nr.exec(i);)f=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),f!==(_=h[c++]||"")&&(m=parseFloat(_)||0,T=_.substr((m+"").length),f.charAt(1)==="="&&(f=or(m,f)+T),p=parseFloat(f),x=f.substr((p+"").length),l=nr.lastIndex-x.length,x||(x=x||Je.units[e]||T,l===i.length&&(i+=x,o.e+=x)),T!==x&&(m=si(t,e,_,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:m,c:p-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Uh:Ih;return Ju.test(i)&&(o.e=0),this._pt=o,o},cu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=cu[n]||n,e[1]=cu[i]||i,e.join(" ")},Mv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Bn[o]&&(l=1,o=o==="transformOrigin"?ze:oe),ri(n,o);l&&(ri(n,oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",jr(n,1),a.uncache=1,Nh(i)))}},ta={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Be(t._pt,e,n,0,0,Mv);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Kr=[1,0,0,1,0,0],kh={},Hh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},uu=function(t){var e=Ke(t,oe);return Hh(e)?Kr:e.substr(7).match(Zu).map(de)},Bl=function(t,e){var n=t._gsap||Ai(t),i=t.style,s=uu(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Kr:s):(s===Kr&&!t.offsetParent&&t!==lr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,lr.appendChild(t)),s=uu(t),l?i.display=l:ri(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):lr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ll=function(t,e,n,i,s,a){var o=t._gsap,l=s||Bl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,m=l[0],g=l[1],_=l[2],f=l[3],p=l[4],M=l[5],x=e.split(" "),T=parseFloat(x[0])||0,y=parseFloat(x[1])||0,w,A,R,L;n?l!==Kr&&(A=m*f-g*_)&&(R=T*(f/A)+y*(-_/A)+(_*M-f*p)/A,L=T*(-g/A)+y*(m/A)-(m*M-g*p)/A,T=R,y=L):(w=Bh(t),T=w.x+(~x[0].indexOf("%")?T/100*w.width:T),y=w.y+(~(x[1]||x[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&o.smooth?(p=T-c,M=y-u,o.xOffset=d+(p*m+M*_)-p,o.yOffset=h+(p*g+M*f)-M):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=y,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ze]="0px 0px",a&&(Kn(a,o,"xOrigin",c,T),Kn(a,o,"yOrigin",u,y),Kn(a,o,"xOffset",d,o.xOffset),Kn(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+y)},jr=function(t,e){var n=t._gsap||new Th(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Ke(t,ze)||"0",u,d,h,m,g,_,f,p,M,x,T,y,w,A,R,L,v,E,O,D,V,X,B,Y,z,st,it,ct,Dt,zt,q,Z;return u=d=h=_=f=p=M=x=T=0,m=g=1,n.svg=!!(t.getCTM&&zh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[oe]!=="none"?l[oe]:"")),i.scale=i.rotate=i.translate="none"),A=Bl(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),ll(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,w=n.yOrigin||0,A!==Kr&&(E=A[0],O=A[1],D=A[2],V=A[3],u=X=A[4],d=B=A[5],A.length===6?(m=Math.sqrt(E*E+O*O),g=Math.sqrt(V*V+D*D),_=E||O?Qi(O,E)*xi:0,M=D||V?Qi(D,V)*xi+_:0,M&&(g*=Math.abs(Math.cos(M*cr))),n.svg&&(u-=y-(y*E+w*D),d-=w-(y*O+w*V))):(Z=A[6],zt=A[7],it=A[8],ct=A[9],Dt=A[10],q=A[11],u=A[12],d=A[13],h=A[14],R=Qi(Z,Dt),f=R*xi,R&&(L=Math.cos(-R),v=Math.sin(-R),Y=X*L+it*v,z=B*L+ct*v,st=Z*L+Dt*v,it=X*-v+it*L,ct=B*-v+ct*L,Dt=Z*-v+Dt*L,q=zt*-v+q*L,X=Y,B=z,Z=st),R=Qi(-D,Dt),p=R*xi,R&&(L=Math.cos(-R),v=Math.sin(-R),Y=E*L-it*v,z=O*L-ct*v,st=D*L-Dt*v,q=V*v+q*L,E=Y,O=z,D=st),R=Qi(O,E),_=R*xi,R&&(L=Math.cos(R),v=Math.sin(R),Y=E*L+O*v,z=X*L+B*v,O=O*L-E*v,B=B*L-X*v,E=Y,X=z),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,p=180-p),m=de(Math.sqrt(E*E+O*O+D*D)),g=de(Math.sqrt(B*B+Z*Z)),R=Qi(X,B),M=Math.abs(R)>2e-4?R*xi:0,T=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hh(Ke(t,oe)),Y&&t.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=de(m),n.scaleY=de(g),n.rotation=de(_)+o,n.rotationX=de(f)+o,n.rotationY=de(p)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ze]=ea(c)),n.xOffset=n.yOffset=0,n.force3D=Je.force3D,n.renderTransform=n.svg?yv:Oh?Gh:Sv,n.uncache=0,n},ea=function(t){return(t=t.split(" "))[0]+" "+t[1]},ro=function(t,e,n){var i=Te(e);return de(parseFloat(e)+parseFloat(si(t,"x",n+"px",i)))+i},Sv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Gh(t,e)},mi="0deg",Ir="0px",_i=") ",Gh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,f=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,T="",y=p==="auto"&&t&&t!==1||p===!0;if(x&&(d!==mi||u!==mi)){var w=parseFloat(u)*cr,A=Math.sin(w),R=Math.cos(w),L;w=parseFloat(d)*cr,L=Math.cos(w),a=ro(M,a,A*L*-x),o=ro(M,o,-Math.sin(w)*-x),l=ro(M,l,R*L*-x+x)}f!==Ir&&(T+="perspective("+f+_i),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(y||a!==Ir||o!==Ir||l!==Ir)&&(T+=l!==Ir||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_i),c!==mi&&(T+="rotate("+c+_i),u!==mi&&(T+="rotateY("+u+_i),d!==mi&&(T+="rotateX("+d+_i),(h!==mi||m!==mi)&&(T+="skew("+h+", "+m+_i),(g!==1||_!==1)&&(T+="scale("+g+", "+_+_i),M.style[oe]=T||"translate(0, 0)"},yv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,f=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(a),T=parseFloat(o),y,w,A,R,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cr,c*=cr,y=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=cr,L=Math.tan(c-u),L=Math.sqrt(1+L*L),A*=L,R*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),y*=L,w*=L)),y=de(y),w=de(w),A=de(A),R=de(R)):(y=d,R=h,w=A=0),(x&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(x=si(m,"x",a,"px"),T=si(m,"y",o,"px")),(g||_||f||p)&&(x=de(x+g-(g*y+_*A)+f),T=de(T+_-(g*w+_*R)+p)),(i||s)&&(L=m.getBBox(),x=de(x+i/100*L.width),T=de(T+s/100*L.height)),L="matrix("+y+","+w+","+A+","+R+","+x+","+T+")",m.setAttribute("transform",L),M&&(m.style[oe]=L)},Ev=function(t,e,n,i,s){var a=360,o=xe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?xi:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*ru)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*ru)%a-~~(c/a)*a)),t._pt=h=new Be(t._pt,e,n,i,c,sv),h.e=u,h.u="deg",t._props.push(n),h},hu=function(t,e){for(var n in e)t[n]=e[n];return t},Tv=function(t,e,n){var i=hu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[oe]=e,o=jr(n,1),ri(n,oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[oe],a[oe]=e,o=jr(n,1),a[oe]=c);for(l in Bn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Te(c),g=Te(u),d=m!==g?si(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Be(t._pt,o,l,d,h-d,sl),t._pt.u=g||0,t._props.push(l));hu(o,i)};Oe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ta[t>1?"border"+r:r]=function(o,l,c,u,d){var h,m;if(arguments.length<4)return h=a.map(function(g){return In(o,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,m,d)}});var Vh={name:"css",register:ol,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,d,h,m,g,_,f,p,M,x,T,y,w,A,R,L;Nl||ol(),this.styles=this.styles||Fh(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Xe[_]&&bh(_,e,n,i,t,s)))){if(m=typeof u,g=ta[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=qr(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ti.lastIndex=0,ti.test(c)||(f=Te(c),p=Te(u),p?f!==p&&(c=si(t,_,c,p)+p):f&&(u+=f)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],xe(c)&&~c.indexOf("random(")&&(c=qr(c)),Te(c+"")||c==="auto"||(c+=Je.units[_]||Te(In(t,_))||""),(c+"").charAt(1)==="="&&(c=In(t,_))):c=In(t,_),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),_ in yn&&(_==="autoAlpha"&&(h===1&&In(t,"visibility")==="hidden"&&d&&(h=0),R.push("visibility",0,o.visibility),Kn(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Bn,x){if(this.styles.save(_),L=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Ke(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Ke(t,"perspective"),v?t.style.perspective=v:ri(t,"perspective")}d=parseFloat(u)}if(T||(y=t._gsap,y.renderTransform&&!e.parseTransform||jr(t,e.parseTransform),w=e.smoothOrigin!==!1&&y.smooth,T=this._pt=new Be(this._pt,o,oe,0,1,y.renderTransform,y,0,-1),T.dep=1),_==="scale")this._pt=new Be(this._pt,y,"scaleY",y.scaleY,(M?or(y.scaleY,M+d):d)-y.scaleY||0,sl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ze,0,o[ze]),u=xv(u),y.svg?ll(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&Kn(this,y,"zOrigin",y.zOrigin,p),Kn(this,o,_,ea(c),ea(u)));continue}else if(_==="svgOrigin"){ll(t,u,1,w,0,this);continue}else if(_ in kh){Ev(this,y,_,h,M?or(h,M+u):u);continue}else if(_==="smoothOrigin"){Kn(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){Tv(this,u,t);continue}}else _ in o||(_=Sr(_)||_);if(x||(d||d===0)&&(h||h===0)&&!rv.test(u)&&_ in o)f=(c+"").substr((h+"").length),d||(d=0),p=Te(u)||(_ in Je.units?Je.units[_]:f),f!==p&&(h=si(t,_,c,p)),this._pt=new Be(this._pt,x?y:o,_,h,(M?or(h,M+d):d)-h,!x&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?lv:sl),this._pt.u=p||0,x&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=ov):f!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=av);else if(_ in o)vv.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){bl(_,u);continue}x||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}A&&Lh(this)},render:function(t,e){if(e.tween._time||!Fl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:yn,getSetter:function(t,e,n){var i=yn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==ze&&(t._gsap.x||In(t,"x"))?n&&iu===n?e==="scale"?dv:hv:(iu=n||{})&&(e==="scale"?fv:pv):t.style&&!yl(t.style[e])?cv:~e.indexOf("-")?uv:Il(t,e)},core:{_removeProperty:ri,_getMatrix:Bl}};ke.utils.checkPrefix=Sr;ke.core.getStyleSaver=Fh;(function(r,t,e,n){var i=Oe(r+","+t+","+e,function(s){Bn[s]=1});Oe(t,function(s){Je.units[s]="deg",kh[s]=1}),yn[i[13]]=r+","+t,Oe(n,function(s){var a=s.split(":");yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Je.units[r]="px"});ke.registerPlugin(Vh);var bi=ke.registerPlugin(Vh)||ke;bi.core.Tween;const bv=[{title:"Languages",color:"var(--accent)",items:["Python","Java","JavaScript","PHP","SQL","Kotlin","React.js"]},{title:"Machine Learning",color:"var(--accent-2)",items:["Regression","Classification","CNNs","RNNs","Recommenders"]},{title:"Data & BI",color:"var(--accent-3)",items:["Power BI","SSIS","SSAS","ETL","OLAP","Data Warehousing"]},{title:"Databases",color:"var(--accent)",items:["MongoDB","MySQL","SQL Server"]},{title:"Tools",color:"var(--accent-2)",items:["Git","Jupyter","Scikit-learn","Android Studio","Figma"]},{title:"Cloud & Certs",color:"var(--accent-3)",items:["AWS Educate","Gen AI","ML Foundations","Cloud 101"]}],Wh={mas:`<svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" aria-label="MAS Holdings">
    <rect x="1" y="1" width="118" height="42" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
    <text x="60" y="30" text-anchor="middle" font-family="Syne, sans-serif" font-weight="800" font-size="22" letter-spacing="2" fill="currentColor">MAS</text>
  </svg>`},ur=(()=>{const r="#6c5cff",t="#00e5c8",e="#ff5c8a",n="rgba(255,255,255,.28)",i="rgba(255,255,255,.08)",s=h=>`<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#0b0d16"/><rect width="320" height="24" fill="rgba(255,255,255,.03)"/><circle cx="15" cy="12" r="3.5" fill="${t}"/><rect x="26" y="9" width="66" height="6" rx="3" fill="${n}"/>${h}</svg>`,a=(h,m)=>`<rect x="${h}" y="34" width="88" height="40" rx="7" fill="${m}22" stroke="${m}" stroke-opacity=".55"/><rect x="${h+10}" y="44" width="40" height="7" rx="3" fill="rgba(255,255,255,.55)"/><rect x="${h+10}" y="57" width="24" height="6" rx="3" fill="rgba(255,255,255,.28)"/>`,o=()=>[.5,.7,.4,.85,.6,.9,.55,.72,.45].map((h,m)=>{const g=24+m*31,_=70*h;return`<rect x="${g}" y="${150-_}" width="18" height="${_}" rx="3" fill="${m%3===2?t:r}"/>`}).join("")+`<line x1="16" y1="150" x2="304" y2="150" stroke="${i}"/>`,l=()=>[210,150,118,88,58].map((h,m)=>{const g=42+m*24;return`<rect x="18" y="${g}" width="40" height="9" rx="4" fill="rgba(255,255,255,.22)"/><rect x="66" y="${g-1}" width="${h}" height="11" rx="5" fill="${m%2?t:r}"/>`}).join(""),c=()=>`<circle cx="78" cy="106" r="40" fill="none" stroke="${i}" stroke-width="16"/><circle cx="78" cy="106" r="40" fill="none" stroke="${r}" stroke-width="16" stroke-dasharray="150 101" transform="rotate(-90 78 106)"/><circle cx="78" cy="106" r="40" fill="none" stroke="${t}" stroke-width="16" stroke-dasharray="55 196" stroke-dashoffset="-150" transform="rotate(-90 78 106)"/>`+[r,t,e].map((h,m)=>`<rect x="150" y="${50+m*30}" width="11" height="11" rx="2" fill="${h}"/><rect x="170" y="${52+m*30}" width="118" height="7" rx="3" fill="rgba(255,255,255,.25)"/><rect x="170" y="${63+m*30}" width="72" height="5" rx="2.5" fill="rgba(255,255,255,.13)"/>`).join(""),u=()=>{const h="24,120 58,92 92,104 126,72 160,86 194,56 228,76 262,46 300,62";return[46,76,106,136].map(m=>`<line x1="18" y1="${m}" x2="302" y2="${m}" stroke="${i}"/>`).join("")+`<polyline points="24,150 ${h} 300,150" fill="${r}22"/><polyline points="${h}" fill="none" stroke="${t}" stroke-width="2.5"/><rect x="16" y="34" width="70" height="8" rx="4" fill="rgba(255,255,255,.25)"/>`},d=()=>`<rect x="60" y="34" width="200" height="134" rx="10" fill="rgba(255,255,255,.05)" stroke="${i}"/><rect x="60" y="34" width="200" height="26" rx="10" fill="${r}22"/><rect x="118" y="43" width="84" height="8" rx="4" fill="rgba(255,255,255,.5)"/><rect x="74" y="72" width="172" height="14" rx="7" fill="rgba(255,255,255,.05)" stroke="${i}"/>`+[0,1,2].map(h=>`<rect x="${74+h*58}" y="94" width="52" height="15" rx="4" fill="rgba(255,255,255,.05)" stroke="${i}"/><path d="M${74+h*58+40} 99 l4 5 4 -5" stroke="${t}" fill="none" stroke-width="1.5"/>`).join("")+[0,1,2,3].map(h=>`<rect x="74" y="${120+h*11}" width="172" height="7" rx="2" fill="${h===0?r+"55":"rgba(255,255,255,.05)"}"/>`).join("");return{capex:s(a(14,r)+a(116,t)+a(218,e)+o()),machine:s(l()),recon:s(c()),solution:s(u()),app:s(d())}})(),Av=[{logo:Wh.mas,role:"Associate Data Scientist",org:"MAS Holdings",place:"Innovation & Technology · Malabe, Sri Lanka",period:"2025 — Present · 11 months",current:!0,points:["Started with Twinery — MAS’s innovation arm — for the first 4 months, then moved into the MCAP / Machine Build team where I currently work.","Build interactive Power BI dashboards for CapEx tracking, savings analysis, machine distribution and inventory reconciliation across production divisions.","Integrate and reconcile machine inventory reports against physical scan data to surface matched, missing and mismatched assets — improving machine governance.","Developed a low-code Power Apps tool for structured operational data capture, and handle end-to-end data cleaning, modelling and DAX in Excel + Power BI."],tags:["Power BI","Power Apps","DAX","Data Modeling","Excel"]}],wv=[{viz:"capex",title:"CapEx & Savings Dashboard",tool:"Power BI",desc:"Interactive dashboard tracking approved capital expenditure, purchase orders, budget utilization and savings across divisions. KPI cards, budgeted-vs-unbudgeted analysis and monthly trends help management spot unbudgeted spend and evaluate investment performance.",tags:["Power BI","DAX","Finance"]},{viz:"machine",title:"Machine Analysis Dashboard",tool:"Power BI",desc:"Fleet analytics categorizing the sewing and non-sewing machine base by brand, type, division and ownership status — giving plants clear visibility of machine distribution and utilization across manufacturing units.",tags:["Power BI","Data Modeling"]},{viz:"recon",title:"Machine Reconciliation",tool:"Power BI",desc:"Reconciliation of inventory reports against physical machine-scan data to flag matched, missing and mismatched machines across factories — surfacing inventory gaps and strengthening asset governance.",tags:["Power BI","Data Integration"]},{viz:"solution",title:"Solution Box Dashboard",tool:"Power BI",desc:"Analytics for engineering-improvement solutions, aggregating operational savings metrics across divisions to rank high-impact solutions and support data-driven evaluation.",tags:["Power BI","Analytics","Savings"]},{viz:"app",title:"CapEx Guide — Power App",tool:"Power Apps",desc:"A low-code app for structured machine / CapEx data capture — a searchable machine catalog with type, brand and operator-position filters — reducing manual effort and standardizing operational data collection.",tags:["Power Apps","Low-Code","Workflow"]}],Rv=[{title:"Business Intelligence Platform",meta:"SLIIT · Mar–Jun 2025",tags:["SSIS","SSAS","Power BI"],desc:"End-to-end BI solution on the Microsoft stack: a custom data warehouse, ETL pipelines with Slowly Changing Dimensions, an OLAP cube (drill-down / roll-up / slice / dice), and an interactive Power BI dashboard for executive and user-level insight."},{title:"Game Sales Prediction",meta:"Data Mining · Academic",tags:["Python","Scikit-learn","Random Forest"],desc:"Predicted global video-game sales from genre, platform and release year. Benchmarked multiple models, selected a Random Forest Regressor for its accuracy, and deployed the trained model in a small prediction app."},{title:"E-Commerce Platform",meta:"MERN Stack · 2023",tags:["MongoDB","Express","React","Node"],desc:"Full-stack e-commerce site with backend API development, user authentication and order management. Built in an Agile team using GitHub for version control and collaboration."},{title:"Android Game",meta:"Mobile · 2023",tags:["Kotlin","Android"],desc:"Kotlin-based Android game with smooth UI/UX, touch controls and animation logic, tuned for seamless performance on mid-range devices."}],Cv=[{degree:"B.Sc. (Hons) in Information Technology",field:"Specializing in Data Science",school:"SLIIT — Sri Lanka Institute of Information Technology, Malabe",period:"2022 — 2025",note:"Second Class (Lower Division)"},{degree:"Higher Diploma in Information Technology",field:"",school:"SLIIT — Sri Lanka Institute of Information Technology, Malabe",period:"Completed Dec 2024",note:""},{degree:"G.C.E. Advanced Level",field:"Physical Science Stream",school:"St. Sylvester's College, Kandy",period:"2019",note:""},{degree:"G.C.E. Ordinary Level",field:"",school:"St. Sylvester's College, Kandy",period:"2016",note:""}],Pv=["DATA SCIENCE","MACHINE LEARNING","BUSINESS INTELLIGENCE","ETL","PYTHON","POWER BI","FULL-STACK"],du=["/photos/education.jpg","/photos/team1_web.jpg","/photos/me1_web.jpg","/photos/team2_web.jpg","/photos/about.jpg"],Lv=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Dv(){const r=document.getElementById("skills-grid");r.innerHTML=bv.map(o=>`
    <div class="skill-card reveal">
      <h3><span class="dot" style="background:${o.color}"></span>${o.title}</h3>
      <ul>${o.items.map(l=>`<li>${l}</li>`).join("")}</ul>
    </div>`).join("");const t=document.getElementById("marquee-track"),e=Pv.map((o,l)=>`<span class="${l%2?"solid":""}">${o} ✦</span>`).join("");t.innerHTML=e+e;const n=document.getElementById("exp-list");n.innerHTML=Av.map(o=>`
    <article class="exp-card reveal">
      <div class="exp-logo">${o.logo}</div>
      <div class="exp-body">
        <div class="exp-top">
          <h3>${o.role} <span class="exp-org">· ${o.org}</span></h3>
          ${o.current?'<span class="exp-badge">Current</span>':""}
        </div>
        <div class="exp-meta">${o.place} &nbsp;·&nbsp; ${o.period}</div>
        <ul class="exp-points">${o.points.map(l=>`<li>${l}</li>`).join("")}</ul>
        <div class="exp-tags">${o.tags.map(l=>`<span>${l}</span>`).join("")}</div>
      </div>
    </article>`).join("");const i=document.getElementById("mas-work");i.innerHTML=wv.map(o=>`
    <article class="mas-card reveal">
      <div class="mas-card-img viz">
        ${ur[o.viz]||""}
        <span class="mas-card-tool">${o.tool}</span>
      </div>
      <div class="mas-card-body">
        <h4>${o.title}</h4>
        <p>${o.desc}</p>
        <div class="mas-card-tags">${o.tags.map(l=>`<span>${l}</span>`).join("")}</div>
      </div>
    </article>`).join("");const s=document.getElementById("work-list");s.innerHTML=Rv.map((o,l)=>`
    <div class="work-item reveal">
      <span class="w-idx">0${l+1}</span>
      <div>
        <div class="w-title">${o.title}</div>
        <div class="w-tags">${o.tags.map(c=>`<span>#${c}</span>`).join("")}</div>
        <div class="w-desc">${o.desc}</div>
      </div>
      <div style="text-align:right">
        <div class="w-meta">${o.meta}</div>
        <div class="w-arrow">↗</div>
      </div>
    </div>`).join(""),s.querySelectorAll(".work-item").forEach(o=>{o.addEventListener("click",()=>o.classList.toggle("open"))});const a=document.getElementById("edu-timeline");a.innerHTML=Cv.map(o=>`
    <div class="edu-item reveal">
      <div class="edu-dot"></div>
      <div class="edu-period">${o.period}</div>
      <h3 class="edu-degree">${o.degree}</h3>
      ${o.field?`<div class="edu-field">${o.field}</div>`:""}
      <div class="edu-school">${o.school}</div>
      ${o.note?`<span class="edu-note">${o.note}</span>`:""}
    </div>`).join(""),document.querySelectorAll("#dp-plates .lp-frame[data-viz]").forEach(o=>{const l=ur[o.getAttribute("data-viz")];l&&o.insertAdjacentHTML("afterbegin",l)}),document.getElementById("year").textContent="2026"}function Iv(){const r=document.getElementById("gallery-stage"),t=document.createElement("div");t.className="gallery-ring",r.appendChild(t);const e=du.length,n=380;du.forEach((_,f)=>{const p=document.createElement("div");p.className="g-card",p.innerHTML=`<img src="${_}" alt="moment ${f+1}" loading="lazy" />`;const M=360/e*f;p.style.transform=`rotateY(${M}deg) translateZ(${n}px)`,t.appendChild(p)});let i=0,s=-6,a=0,o=!1,l=0,c=0,u=.12;function d(){o||(a+=u),i+=(a-i)*.08,t.style.transform=`rotateX(${s}deg) rotateY(${i}deg)`,requestAnimationFrame(d)}d();const h=(_,f)=>{o=!0,l=_,c=f},m=(_,f)=>{o&&(a+=(_-l)*.4,s=Math.max(-30,Math.min(30,s-(f-c)*.2)),l=_,c=f)},g=()=>{o=!1};r.addEventListener("mousedown",_=>h(_.clientX,_.clientY)),window.addEventListener("mousemove",_=>m(_.clientX,_.clientY)),window.addEventListener("mouseup",g),r.addEventListener("touchstart",_=>h(_.touches[0].clientX,_.touches[0].clientY),{passive:!0}),r.addEventListener("touchmove",_=>m(_.touches[0].clientX,_.touches[0].clientY),{passive:!0}),r.addEventListener("touchend",g)}function Uv(){const r=document.getElementById("webgl"),t=new Jg({canvas:r,antialias:!0,alpha:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Qg;e.fog=new xl(329226,.032);const n=new qe(62,window.innerWidth/window.innerHeight,.1,120),i=8,s=9,a=(i-1)*s,o=8;let l={a:7101695,b:58824};n.position.z=o;const c=3400,u=new Float32Array(c*3),d=new Float32Array(c*3),h=new Bt(l.a),m=new Bt(l.b);for(let Q=0;Q<c;Q++){const nt=Q*3,vt=4+Math.random()*13,Et=Math.random()*Math.PI*2;u[nt]=Math.cos(Et)*vt,u[nt+1]=Math.sin(Et)*vt*.72,u[nt+2]=o+8-Math.random()*(a+24);const P=h.clone().lerp(m,Math.random());d[nt]=P.r,d[nt+1]=P.g,d[nt+2]=P.b}const g=new cn;g.setAttribute("position",new je(u,3)),g.setAttribute("color",new je(d,3));const _=new qu({size:.05,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Br}),f=new e0(g,_);e.add(f),e.add(new r0(5595248,.55));const p=new qc(16773836,2.4,260);e.add(p);function M(Q){const nt=document.createElement("canvas");nt.width=nt.height=256;const vt=nt.getContext("2d"),Et=vt.createRadialGradient(128,128,0,128,128,128);return Et.addColorStop(0,Q),Et.addColorStop(.25,Q),Et.addColorStop(1,"rgba(0,0,0,0)"),vt.fillStyle=Et,vt.fillRect(0,0,256,256),new Ya(nt)}function x(){const Q=document.createElement("canvas");Q.width=1024,Q.height=512;const nt=Q.getContext("2d"),vt=nt.createLinearGradient(0,0,0,512);vt.addColorStop(0,"#12365f"),vt.addColorStop(.5,"#164a86"),vt.addColorStop(1,"#0e2b4d"),nt.fillStyle=vt,nt.fillRect(0,0,1024,512),nt.fillStyle="#2f7d3a";for(let Et=0;Et<80;Et++){const P=Math.random()*1024,le=70+Math.random()*372,bt=14+Math.random()*58;nt.beginPath(),nt.ellipse(P,le,bt,bt*(.5+Math.random()),Math.random()*6,0,7),nt.fill()}return nt.fillStyle="#e6eef2",nt.fillRect(0,0,1024,24),nt.fillRect(0,488,1024,24),new Ya(Q)}function T(){const Q=document.createElement("canvas");Q.width=Q.height=128;const nt=Q.getContext("2d");return nt.strokeStyle="rgba(255,90,90,0.9)",nt.lineWidth=6,nt.beginPath(),nt.arc(64,64,40,0,7),nt.stroke(),nt.fillStyle="#ff5c5c",nt.beginPath(),nt.arc(64,64,18,0,7),nt.fill(),nt.fillStyle="rgba(255,120,120,0.35)",nt.beginPath(),nt.arc(64,64,56,0,7),nt.fill(),new Ya(Q)}const y=-2,w=new Ie(new er(3,40,40),new Ys({color:16763479}));w.position.set(-5.5,2.6,y),e.add(w),p.position.copy(w.position);const A=new qa(new Bs({map:M("rgba(255,200,90,0.95)"),transparent:!0,blending:Br,depthWrite:!1}));A.scale.set(17,17,1),A.position.copy(w.position),e.add(A);const R=[{z:-13,r:.7,x:3.6,y:-1.2,color:11569754},{z:-22,r:1.1,x:-4.2,y:1.5,color:14262374},{z:-31,r:.9,x:4.4,y:1,color:12607546},{z:-40,r:1.7,x:-5,y:-1.9,color:14725232,ring:!0},{z:-49,r:1.2,x:4.6,y:1.7,color:9090264}],L=[];R.forEach(Q=>{const nt=new Ie(new er(Q.r,32,32),new $a({color:Q.color,roughness:1,metalness:0}));if(nt.position.set(Q.x,Q.y,Q.z),e.add(nt),L.push(nt),Q.ring){const vt=new Ie(new Ml(Q.r*1.4,Q.r*2.2,48),new Ys({color:14271386,side:xn,transparent:!0,opacity:.5}));vt.rotation.set(Math.PI*.42,.3,0),nt.add(vt)}});const v=-58,E=2.6,O=new Nr;O.position.set(0,0,v),e.add(O),O.add(new Ie(new er(E,48,48),new $a({map:x(),roughness:1,metalness:0})));const D=new qa(new Bs({map:M("rgba(120,180,255,0.55)"),transparent:!0,blending:Br,depthWrite:!1}));D.scale.set(E*4,E*4,1),O.add(D);const V=new qc(13623551,1.8,80);V.position.set(8,6,v+16),e.add(V);const X=7*Math.PI/180,B=80*Math.PI/180,Y=new F(E*Math.cos(X)*Math.sin(B),E*Math.sin(X),E*Math.cos(X)*Math.cos(B)),z=new qa(new Bs({map:T(),transparent:!0,depthWrite:!1}));z.position.copy(Y),z.scale.set(.6,.6,1),O.add(z);const st=-B,it=document.createElement("div");it.id="sl-label",it.style.cssText="position:fixed;z-index:3;transform:translate(-50%,-150%);pointer-events:none;opacity:0;transition:opacity .3s ease;text-align:center;white-space:nowrap;font-family:var(--font-mono),monospace;text-shadow:0 2px 14px rgba(0,0,0,.95)",it.innerHTML='<div style="font-size:.95rem;letter-spacing:.14em;color:#ff6b6b">📍 SRI LANKA</div><div style="font-size:.72rem;color:#cfd6e6;margin-top:2px">Pilimathalawa, Kandy · home</div>',document.body.appendChild(it);const ct=6.2,Dt=new Ie(new er(.7,32,32),new $a({color:12434877,roughness:1,metalness:0}));e.add(Dt),window.__setScene=(Q,nt,vt)=>{l.a=Q,l.b=nt;const Et=new Bt(Q),P=new Bt(nt),le=g.attributes.color;for(let bt=0;bt<c;bt++){const Ut=Et.clone().lerp(P,Math.random());le.array[bt*3]=Ut.r,le.array[bt*3+1]=Ut.g,le.array[bt*3+2]=Ut.b}le.needsUpdate=!0,vt!=null&&e.fog&&e.fog.color.set(vt)};const zt={x:0,y:0};window.addEventListener("mousemove",Q=>{zt.x=Q.clientX/window.innerWidth-.5,zt.y=Q.clientY/window.innerHeight-.5});let q=0;window.addEventListener("scroll",()=>{q=window.scrollY});const Z=new s0,_t=(Q,nt,vt)=>{const Et=Math.max(0,Math.min(1,(vt-Q)/(nt-Q)));return Et*Et*(3-2*Et)},ut=new F;function Rt(){const Q=Z.getElapsedTime();f.rotation.z=Q*.015;const nt=q/(document.body.scrollHeight-window.innerHeight||1),vt=_t(.82,1,nt);let Et=o-nt*a;Et=Et*(1-vt)+(v+6.4)*vt,n.position.z+=(Et-n.position.z)*.06;const P=zt.x*3*(1-vt),le=-zt.y*2*(1-vt);n.position.x+=(P-n.position.x)*.05,n.position.y+=(le-n.position.y)*.05,n.lookAt(n.position.x*.3*(1-vt),n.position.y*.3*(1-vt),n.position.z-9),w.rotation.y+=.0012,L.forEach((Tt,Zt)=>{Tt.rotation.y+=.003+Zt*9e-4});const bt=Q*.3;if(Dt.position.set(O.position.x+Math.cos(bt)*ct,O.position.y+Math.sin(bt*.5)*1.4,O.position.z+Math.sin(bt)*ct),Dt.rotation.y+=.003,O.scale.setScalar(1+vt*.18),vt<.06)O.rotation.y+=.0016;else{let Tt=(st-O.rotation.y)%(Math.PI*2);Tt>Math.PI&&(Tt-=Math.PI*2),Tt<-Math.PI&&(Tt+=Math.PI*2),O.rotation.y+=Tt*.07}z.scale.setScalar(.55+Math.sin(Q*3)*.08+vt*.25),t.render(e,n),z.getWorldPosition(ut);const Ut=ut.clone().project(n);it.style.left=(Ut.x*.5+.5)*window.innerWidth+"px",it.style.top=(-Ut.y*.5+.5)*window.innerHeight+"px",it.style.opacity=vt>.3&&Ut.z<1?String(Math.min(1,vt)):"0",requestAnimationFrame(Rt)}Rt(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2))})}function Nv(){bi.timeline({delay:.2}).to(".hero-title .line span",{y:"0%",duration:1.1,stagger:.12,ease:"power4.out"}).to(".hero-tag",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.7").to(".hero-sub",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.6").to(".hero-actions",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.6"),bi.set([".hero-tag",".hero-sub",".hero-actions"],{y:24});const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(bi.to(i.target,{opacity:1,y:0,duration:.9,ease:"power3.out"}),i.target.classList.add("shown"),t.unobserve(i.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(n=>t.observe(n));const e=new IntersectionObserver(n=>{n.forEach(i=>{if(!i.isIntersecting)return;const s=i.target,a=+s.dataset.count;bi.to({v:0},{v:a,duration:1.6,ease:"power2.out",onUpdate(){s.textContent=Math.round(this.targets()[0].v)}}),e.unobserve(s)})},{threshold:.6});document.querySelectorAll(".num[data-count]").forEach(n=>e.observe(n))}function Fv(){document.querySelectorAll("[data-tilt]").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=(t.clientX-e.left)/e.width,i=(t.clientY-e.top)/e.height;bi.to(r,{rotateY:(n-.5)*16,rotateX:-(i-.5)*16,duration:.4,ease:"power2.out",transformPerspective:800}),r.style.setProperty("--mx",n*100+"%"),r.style.setProperty("--my",i*100+"%")}),r.addEventListener("mouseleave",()=>bi.to(r,{rotateY:0,rotateX:0,duration:.6,ease:"power2.out"}))})}function Ov(){if(window.matchMedia("(hover: none)").matches)return;const r=document.getElementById("cursor"),t=document.getElementById("cursor-dot");let e=0,n=0,i=0,s=0;window.addEventListener("mousemove",a=>{e=a.clientX,n=a.clientY,t.style.left=e+"px",t.style.top=n+"px"}),function a(){i+=(e-i)*.15,s+=(n-s)*.15,r.style.left=i+"px",r.style.top=s+"px",requestAnimationFrame(a)}(),document.querySelectorAll("a, button, [data-hover], .work-item, .skill-card, .exp-card").forEach(a=>{a.addEventListener("mouseenter",()=>r.classList.add("grow")),a.addEventListener("mouseleave",()=>r.classList.remove("grow"))})}function Bv(){function t(e){const n=document.querySelector(e);if(!n)return;const i=n.getBoundingClientRect().top+window.scrollY-84;window.scrollTo({top:i,behavior:"smooth"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",n=>{const i=e.getAttribute("href");i.length<2||(n.preventDefault(),t(i),history.replaceState(null,"",i))})}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{})}function zv(){const r=document.getElementById("scroll-fill"),t=document.querySelectorAll("main .section"),e=document.querySelectorAll(".nav-links a");window.addEventListener("scroll",()=>{const n=window.scrollY/(document.body.scrollHeight-window.innerHeight||1);r.style.width=n*100+"%";let i="";t.forEach(s=>{window.scrollY>=s.offsetTop-200&&(i=s.id)}),e.forEach(s=>s.classList.toggle("active",s.getAttribute("href")==="#"+i))})}function kv(){const r=document.getElementById("hype");document.getElementById("hype-stage");const t=document.getElementById("hype-shots"),e=document.getElementById("hype-bars"),n=document.getElementById("hype-launch"),i=document.getElementById("hype-close");if(!r||!t)return;const s=[{t:"hook"},{t:"photo",img:"/photos/about.jpg",name:"NIPUNA",sub:"DATA SCIENTIST"},{t:"tag",big:`B.Sc. (Hons)
DATA SCIENCE`,small:"SLIIT · Second Class ✦"},{t:"tag",big:`ASSOCIATE
DATA SCIENTIST`,small:"@ MAS HOLDINGS",badge:!0},{t:"viz",viz:"capex",stamp:"POWER BI"},{t:"viz",viz:"machine",stamp:"MACHINE ANALYTICS"},{t:"viz",viz:"recon",stamp:"RECONCILIATION"},{t:"viz",viz:"app",stamp:"POWER APPS"},{t:"number",num:"5",label:"DATA PRODUCTS BUILT"},{t:"number",num:"11",label:"MONTHS @ MAS"},{t:"skills",items:["PYTHON","POWER BI","MACHINE LEARNING","SQL","REACT","DAX"]},{t:"hero",big:`MAIN CHARACTER
ENERGY`},{t:"end"}],a={hook:1700,photo:1900,tag:1700,cut:650,viz:900,number:1500,skills:2100,hero:1900,end:999999};s.forEach(y=>{const w=document.createElement("div");w.className="hype-shot shot-"+y.t,y.t==="hook"?w.innerHTML='<div class="hs-inner"><div class="hk-pov slam">POV:</div><div class="hk-sub slam d1">you just met</div><div class="hk-big glitch d2">THE WIZARD<br>OF DATA</div></div>':y.t==="photo"?(w.innerHTML=`<img class="hs-img kenburns" src="${y.img}" alt=""><div class="hs-grad"></div><div class="hs-inner"><div class="hs-name slam">${y.name}</div><div class="hs-sub slam d1">${y.sub}</div></div>`,w.style.placeItems="end center",w.style.paddingBottom="70px"):y.t==="tag"?w.innerHTML=`<div class="hs-inner">${y.badge?`<div class="tg-badge slam">${Wh.mas}</div>`:""}<div class="tg-big slam ${y.badge?"d1":""}">${y.big}</div><div class="tg-small slam d2">${y.small}</div></div>`:y.t==="cut"?w.innerHTML=`<img class="hs-img cut" src="${y.img}" alt=""><div class="hs-grad"></div><div class="hs-stamp slam">${y.stamp}</div>`:y.t==="viz"?w.innerHTML=`<div class="hs-viz cut">${ur[y.viz]||""}</div><div class="hs-stamp slam">${y.stamp}</div>`:y.t==="number"?w.innerHTML=`<div class="hs-inner"><div class="num pop">${y.num}</div><div class="num-label slam d1">${y.label}</div></div>`:y.t==="skills"?w.innerHTML=`<div class="sk-wrap">${y.items.map((A,R)=>`<span class="sk-word" style="animation-delay:${.1+R*.2}s">${A}</span>`).join("")}</div>`:y.t==="hero"?w.innerHTML=`<div class="hero-big glitch">${y.big}</div>`:y.t==="end"&&(w.innerHTML=`<div class="hs-inner"><div class="end-name slam">NIPUNA ABEYSEKARA</div><div class="end-cta slam d1">LET'S WORK TOGETHER</div><a class="end-mail slam d2" href="mailto:nipunaabeysekara2001@gmail.com">nipunaabeysekara2001@gmail.com</a><div class="end-actions"><button class="ea-primary" data-replay>↻ Replay</button><button data-close>✕ Close</button></div></div>`),t.appendChild(w)});const o=[...t.children],l=s.filter(y=>y.t!=="end").length;for(let y=0;y<l;y++){const w=document.createElement("div");w.className="seg",w.innerHTML="<i></i>",e.appendChild(w)}const c=[...e.children].map(y=>y.firstChild);let u=null;function d(y){try{u=u||new(window.AudioContext||window.webkitAudioContext);const w=u.createOscillator(),A=u.createGain();w.type="sine",w.frequency.setValueAtTime(y,u.currentTime),w.frequency.exponentialRampToValueAtTime(55,u.currentTime+.18),A.gain.setValueAtTime(1e-4,u.currentTime),A.gain.exponentialRampToValueAtTime(.22,u.currentTime+.012),A.gain.exponentialRampToValueAtTime(1e-4,u.currentTime+.28),w.connect(A).connect(u.destination),w.start(),w.stop(u.currentTime+.3)}catch{}}let h=!1,m=!1,g=null,_=null;const f=y=>new Promise(w=>{_=w,g=setTimeout(()=>{_=null,w()},y)}),p=()=>{if(g&&(clearTimeout(g),g=null),_){const y=_;_=null,y()}};async function M(){if(!h){h=!0,m=!1,document.body.classList.add("hype-on"),r.setAttribute("aria-hidden","false"),c.forEach(y=>{y.style.transition="none",y.style.width="0%"});for(let y=0;y<s.length&&!m;y++){o.forEach(A=>A.classList.remove("on")),o[y].offsetWidth,o[y].classList.add("on");const w=a[s[y].t]||1500;d(s[y].t==="cut"?200:s[y].t==="number"?150:120),s[y].t!=="end"&&c[y]&&(c[y].style.transition="none",c[y].style.width="0%",c[y].offsetWidth,c[y].style.transition=`width ${w}ms linear`,c[y].style.width="100%"),await f(w)}h=!1}}function x(){m=!0,p(),h=!1,document.body.classList.remove("hype-on"),r.setAttribute("aria-hidden","true"),o.forEach(y=>y.classList.remove("on"))}function T(){m=!0,p(),h=!1,setTimeout(M,60)}n&&n.addEventListener("click",M),i&&i.addEventListener("click",x),t.addEventListener("click",y=>{y.target.hasAttribute("data-close")&&x(),y.target.hasAttribute("data-replay")&&T()}),window.addEventListener("keydown",y=>{y.key==="Escape"&&document.body.classList.contains("hype-on")&&x()})}function Hv(){const r=document.getElementById("wizard"),t=document.getElementById("wiz-scenes"),e=document.getElementById("wiz-flash"),n=document.getElementById("wiz-progress-fill"),i=document.getElementById("wiz-embers"),s=document.getElementById("wiz-skip"),a=document.getElementById("dp-trailer");if(!r||!t)return;const o=[{html:'<div><div class="wiz-kicker wiz-pop">✦ The Daily Prophet ✦</div><div class="wiz-sub wiz-ink d1">— presents —</div></div>',dur:2e3},{html:'<div><div class="wiz-line wiz-ink">RAW DATA,</div><div class="wiz-line wiz-ink d1">REAL DECISIONS.</div></div>',dur:2600},{html:'<div><div class="wiz-frame wiz-pop"><img src="/photos/about.jpg" alt=""></div><div class="wiz-cap wiz-ink d1">Nipuna Abeysekara</div></div>',dur:2800},{html:'<div><div class="wiz-kicker wiz-pop">Powers Discovered</div><div class="wiz-words" style="margin-top:22px"><span class="wiz-word">POWER BI</span><span class="wiz-word" style="animation-delay:.3s">MACHINE LEARNING</span><span class="wiz-word" style="animation-delay:.6s">POWER APPS</span></div></div>',dur:2600},{html:`<div><div class="wiz-kicker wiz-pop">The Enchanted Ledgers</div><div class="wiz-plates" style="margin-top:26px"><div class="wiz-plate">${ur.capex}</div><div class="wiz-plate">${ur.machine}</div><div class="wiz-plate">${ur.recon}</div></div></div>`,dur:2800},{html:'<div><div class="wiz-line wiz-ink">From SLIIT…</div><div class="wiz-line wiz-ink d1">…to MAS Holdings.</div></div>',dur:2400},{html:'<div class="wiz-masthead wiz-pop">THE WIZARD<br>OF DATA</div>',dur:2400},{end:!0,html:'<div><div class="wiz-kicker wiz-pop">✦ Fin ✦</div><div class="wiz-end-name wiz-ink d1">NIPUNA ABEYSEKARA</div><div class="wiz-end-role">Associate Data Scientist · MAS Holdings</div><div class="wiz-owl">Owl post — <a href="mailto:nipunaabeysekara2001@gmail.com">nipunaabeysekara2001@gmail.com</a></div><div class="wiz-actions"><button class="wa-primary" data-replay>↻ Replay</button><button data-close>Return to the paper ✕</button></div></div>',dur:999999}];o.forEach(y=>{const w=document.createElement("div");w.className="wiz-scene",w.innerHTML=y.html,t.appendChild(w)});const l=[...t.children];if(i&&!i.childElementCount)for(let y=0;y<30;y++){const w=document.createElement("span");w.className="dp-ember";const A=3+Math.random()*6;w.style.left=Math.random()*100+"%",w.style.width=w.style.height=A+"px",w.style.animationDuration=7+Math.random()*9+"s",w.style.animationDelay=-Math.random()*12+"s",w.style.setProperty("--drift",Math.random()*120-60+"px"),i.appendChild(w)}let c=null;function u(y){try{c=c||new(window.AudioContext||window.webkitAudioContext),[y,y*1.5,y*2].forEach((w,A)=>{const R=c.createOscillator(),L=c.createGain();R.type="sine",R.frequency.value=w;const v=c.currentTime+A*.02;L.gain.setValueAtTime(1e-4,v),L.gain.exponentialRampToValueAtTime(.12,v+.02),L.gain.exponentialRampToValueAtTime(1e-4,v+.9),R.connect(L).connect(c.destination),R.start(v),R.stop(v+.95)})}catch{}}let d=!1,h=!1,m=null,g=null;const _=y=>new Promise(w=>{g=w,m=setTimeout(()=>{g=null,w()},y)}),f=()=>{if(m&&(clearTimeout(m),m=null),g){const y=g;g=null,y()}};function p(){e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}async function M(){if(!d){d=!0,h=!1,document.body.classList.add("wiz-on"),r.setAttribute("aria-hidden","false");for(let y=0;y<o.length&&!h;y++)p(),u(o[y].end?523:660+y*30),l.forEach(w=>w.classList.remove("on")),l[y].offsetWidth,l[y].classList.add("on"),o[y].end||(n.style.width=y/(o.length-2)*100+"%"),await _(o[y].dur);d=!1}}function x(){h=!0,f(),d=!1,document.body.classList.remove("wiz-on"),r.setAttribute("aria-hidden","true"),l.forEach(y=>y.classList.remove("on")),n.style.width="0%"}function T(){h=!0,f(),d=!1,setTimeout(M,70)}a&&a.addEventListener("click",M),s&&s.addEventListener("click",x),t.addEventListener("click",y=>{y.target.hasAttribute("data-close")&&x(),y.target.hasAttribute("data-replay")&&T()}),window.addEventListener("keydown",y=>{y.key==="Escape"&&document.body.classList.contains("wiz-on")&&x()})}function Gv(){const t=document.getElementById("cine"),e=document.getElementById("cine-caption"),n=document.getElementById("cine-chapter"),i=document.getElementById("cine-title"),s=document.getElementById("cine-detail"),a=document.getElementById("cine-progress-fill"),o=document.getElementById("cine-skip"),l=document.getElementById("watch-intro"),c=document.getElementById("prophet"),u=document.getElementById("dp-watch"),d=[{id:"hero",chapter:"Prologue",title:"Nipuna Abeysekara",detail:"Associate Data Scientist at MAS Holdings · B.Sc. (Hons) Data Science graduate.",hold:4200},{id:"about",chapter:"Chapter 01",title:"About",detail:"Turning messy data into clear, decision-ready insight — across the full analytics stack.",hold:4200},{id:"experience",chapter:"Chapter 02",title:"Experience",detail:"At MAS Innovation & Technology: Power BI dashboards, machine reconciliation and Power Apps.",hold:4600},{id:"skills",chapter:"Chapter 03",title:"Skills & Tooling",detail:"Python · Power BI · DAX · machine learning · MERN full-stack.",hold:4e3},{id:"work",chapter:"Chapter 04",title:"Selected Work",detail:"CapEx, machine analysis, reconciliation & a Power App — plus academic BI, ML and full-stack builds.",hold:4800},{id:"education",chapter:"Chapter 05",title:"Education",detail:"B.Sc. (Hons) Information Technology, Data Science — SLIIT, Second Class.",hold:4200},{id:"gallery",chapter:"Chapter 06",title:"Moments",detail:"A few frames from the journey — and the work behind it.",hold:4e3},{id:"contact",chapter:"Finale",title:"Let's work together",detail:"nipunaabeysekara2001@gmail.com",hold:4600}],h=[{sel:".dp-title",chapter:"Extra! Extra!",title:"The Daily Prophet",detail:"A special dispatch on a rising data scientist.",hold:4200},{sel:".dp-headline",chapter:"Front Page",title:"The Wizard of Data",detail:"SLIIT graduate Nipuna Abeysekara turns raw factory data into decisions with moving dashboards.",hold:4800},{sel:".living-photo",chapter:"The Sorcerer",title:"Nipuna Abeysekara",detail:"Associate Data Scientist — from Twinery to the MCAP / Machine Build team.",hold:4600},{sel:".dp-box",chapter:"The Grimoire",title:"Powers & Enchantments",detail:"Python · Power BI · DAX · Machine Learning · Power Apps.",hold:4200},{sel:".dp-feature-title",chapter:"Special Report",title:"The Enchanted Ledgers",detail:"CapEx, machine census, reconciliation, Solution Box & a Power App.",hold:4800},{sel:".dp-classified",chapter:"Owl Post",title:"Send an Owl",detail:"nipunaabeysekara2001@gmail.com",hold:4600}];let m=!1,g=!1,_=!1,f=null,p=null,M=null;function x(D){return new Promise(V=>{p=V,f=setTimeout(()=>{p=null,V()},D)})}function T(){if(f&&(clearTimeout(f),f=null),p){const D=p;p=null,D()}}function y(D){return D.sel?document.querySelector(D.sel):document.getElementById(D.id)}function w(D,V){const X=y(D);if(X)if(V==="prophet"){const B=X.getBoundingClientRect().top-c.getBoundingClientRect().top+c.scrollTop-window.innerHeight*.24;c.scrollTo({top:Math.max(0,B),behavior:"smooth"})}else{const B=D.id==="hero"?0:X.getBoundingClientRect().top+window.scrollY-84;window.scrollTo({top:B,behavior:"smooth"})}}function A(D){n.textContent=D.chapter,i.textContent=D.title,s.textContent=D.detail,e.classList.add("show")}const R=D=>{m&&D.preventDefault()};async function L(D,V){if(m)return;const X=document.body.classList.contains("prophet-mode");if(D==="site"&&X||D==="prophet"&&!X)return;m=!0,g=!1,_=!!V;const B=D==="prophet"?h:d;document.body.classList.add("cinema"),t.classList.toggle("prophet-reel",D==="prophet");const Y=document.getElementById("cine-idle-note");Y&&(Y.textContent=V?"Playing intro — press Esc or Skip to stop anytime":"Showreel playing — press any key, scroll or click to explore on your own"),window.addEventListener("wheel",R,{passive:!1}),window.addEventListener("touchmove",R,{passive:!1});for(let z=0;z<B.length&&!(g||(w(B[z],D),a.style.width=z/(B.length-1)*100+"%",await x(1200),g));z++)A(B[z]),await x(B[z].hold||4e3),e.classList.remove("show"),await x(500);v()}function v(){m=!1,document.body.classList.remove("cinema","cinema-idle"),t.classList.remove("prophet-reel"),e.classList.remove("show"),a.style.width="0%",window.removeEventListener("wheel",R,{passive:!1}),window.removeEventListener("touchmove",R,{passive:!1}),O()}function E(){m&&(g=!0,T())}function O(){clearTimeout(M),M=setTimeout(()=>{m||L(document.body.classList.contains("prophet-mode")?"prophet":"site",!1)},6e4)}["mousemove","mousedown","keydown","wheel","touchstart","scroll"].forEach(D=>{window.addEventListener(D,()=>{m?!_&&D!=="scroll"&&D!=="mousemove"&&E():O()},{passive:!0})}),c&&c.addEventListener("scroll",()=>{m||O()},{passive:!0}),o&&o.addEventListener("click",E),l&&l.addEventListener("click",()=>L("site",!0)),u&&u.addEventListener("click",()=>L("prophet",!0)),window.addEventListener("keydown",D=>{D.key==="Escape"&&E()}),O()}function Vv(){const r=document.getElementById("theme-switch"),t=document.getElementById("theme-switch-btn"),e=document.getElementById("theme-menu"),n=document.getElementById("theme-switch-label"),i=document.getElementById("prophet"),s=document.getElementById("dp-exit"),a=document.getElementById("dp-date");if(a){const R=new Date,L=["January","February","March","April","May","June","July","August","September","October","November","December"],v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];a.textContent=`${v[R.getDay()]}, ${R.getDate()} ${L[R.getMonth()]} ${R.getFullYear()}`}const o=document.getElementById("dp-embers");if(o&&!o.childElementCount)for(let R=0;R<28;R++){const L=document.createElement("span");L.className="dp-ember";const v=3+Math.random()*6;L.style.left=Math.random()*100+"%",L.style.width=L.style.height=v+"px",L.style.animationDuration=7+Math.random()*9+"s",L.style.animationDelay=-Math.random()*12+"s",L.style.setProperty("--drift",Math.random()*120-60+"px"),o.appendChild(L)}const l=document.getElementById("dp-audio"),c=document.getElementById("dp-music"),u=.32;let d=null,h=localStorage.getItem("dp-music")!=="off",m=!0;l&&l.addEventListener("error",()=>{m=!1});function g(R,L){l&&(clearInterval(d),d=setInterval(()=>{Math.abs(l.volume-R)<=.04?(l.volume=R,clearInterval(d),L&&L()):l.volume+=l.volume<R?.04:-.04},40))}function _(){if(!l||!m||!h)return;l.volume=0;const R=l.play();R&&R.catch&&R.catch(()=>{}),g(u)}function f(){l&&g(0,()=>l.pause())}function p(){c&&c.classList.toggle("muted",!h)}p(),c&&c.addEventListener("click",R=>{R.stopPropagation(),h=!h,localStorage.setItem("dp-music",h?"on":"off"),p(),h&&document.body.classList.contains("prophet-mode")?_():f()});let M=!1;function x(R){if(R)M=!1,document.body.classList.remove("prophet-exit"),document.body.classList.add("prophet-mode"),i.setAttribute("aria-hidden","false"),i.scrollTop=0,_();else{if(f(),M)return;M=!0,document.body.classList.add("prophet-exit"),window.setTimeout(()=>{document.body.classList.remove("prophet-mode","prophet-exit"),i.setAttribute("aria-hidden","true"),M=!1},680)}}const T={scifi:[7101695,58824,329226],realm:[10165276,13148746,723208],dark:[2792847,14721339,263946]},y={scifi:"Sci-Fi",realm:"Iron Realm",dark:"Dark"};function w(R){e&&e.querySelectorAll("button[data-theme]").forEach(L=>L.classList.toggle("active",L.dataset.theme===R))}function A(R){if(R==="prophet"){x(!0),r&&r.classList.remove("open");return}document.body.classList.contains("prophet-mode")&&x(!1),document.body.classList.remove("theme-realm","theme-dark"),R==="realm"&&document.body.classList.add("theme-realm"),R==="dark"&&document.body.classList.add("theme-dark");const L=T[R]||T.scifi;window.__setScene&&window.__setScene(L[0],L[1],L[2]),n&&(n.textContent=y[R]||R),w(R),r&&r.classList.remove("open")}t&&t.addEventListener("click",R=>{R.stopPropagation();const L=r.classList.toggle("open");t.setAttribute("aria-expanded",L?"true":"false")}),e&&e.addEventListener("click",R=>{const L=R.target.closest("button[data-theme]");L&&(R.stopPropagation(),A(L.dataset.theme))}),document.addEventListener("click",()=>{r&&r.classList.remove("open")}),s&&s.addEventListener("click",()=>x(!1)),window.addEventListener("keydown",R=>{R.key==="Escape"&&document.body.classList.contains("prophet-mode")&&x(!1)})}function Wv(r){const t=document.getElementById("loader-fill"),e=document.getElementById("loader-pct"),n=document.getElementById("loader");let i=0;const s=setInterval(()=>{i+=Math.random()*18,i>=100&&(i=100,clearInterval(s),setTimeout(a,250)),t.style.width=i+"%",e.textContent=Math.round(i)},120);function a(){n.classList.add("done"),r()}}Dv();Iv();Uv();Fv();Ov();zv();Bv();Vv();Gv();kv();Hv();Lv?(document.getElementById("loader").classList.add("done"),document.querySelectorAll(".hero-tag, .hero-sub, .hero-actions").forEach(r=>{r.style.opacity=1,r.style.transform="none"}),document.querySelectorAll(".hero-title .line span").forEach(r=>{r.style.transform="none"}),document.querySelectorAll(".num[data-count]").forEach(r=>{r.textContent=r.dataset.count})):Wv(Nv);
