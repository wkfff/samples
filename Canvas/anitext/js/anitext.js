function lerp(e,t,a){return t*a+e*(1-a)}function lerpn(e,t,a){return a=a*a*(3-2*a),t*a+e*(1-a)}function lerp1(e,t,a){return a=Math.sqrt(a),t*a+e*(1-a)}function lerps(e,t,a){return a=Math.sin(1.5708*a),t*a+e*(1-a)}function lerp2(e,t,a){return a*=a,t*a+e*(1-a)}requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};var aniText={textcolor:6710886,size:25,inrotationspeed:25,outrotationspeed:15,appearscalespeed:15,gap:0,showdelay:100,staycount:200,wlst:[],lasty:-100,target:"",link:void 0,linkrect:[0,0,0,0]},sW,sH;aniText.create=function(e,t){aniText.canvas=document.getElementById(e),sW=aniText.canvas.width,sH=aniText.canvas.height,aniText.canvas.addEventListener("mousemove",function(e){e=e||event;var t=(e.target||e.srcElement,aniText.linkrect);aniText.canvas.style.cursor=e.x>t[0]&&e.x<t[2]&&e.y>t[1]&&e.y<t[3]&&void 0!=aniText.link?"pointer":""}),aniText.canvas.addEventListener("mousedown",function(e){if(e=e||event,e.target||e.srcElement,"pointer"==aniText.canvas.style.cursor){var t=window.open(aniText.link,aniText.target);t.focus()}}),aniText.ctx=aniText.canvas.getContext("2d"),aniText.ctx.shadowColor="#000",aniText.ctx.shadowOffsetX=0,aniText.ctx.shadowOffsetY=0,aniText.ctx.shadowBlur=20,aniText.canvas.style.cursor="pointer",xhr=new XMLHttpRequest,xhr.open("GET",t,!1),xhr.send();var a=xhr.responseXML;if("words"==a.documentElement.nodeName){for(var a=a.documentElement,n=0;n<a.childNodes.length;n++){var i=a.childNodes[n];if("settings"==i.tagName)for(var r=0;r<i.attributes.length;r++){var s=i.attributes[r];switch(s.nodeName){case"textcolor":aniText.textcolor=s.value.replace(/0x/,"#");break;case"size":aniText.size=parseInt(s.value);break;case"inrotationspeed":aniText.inrotationspeed=parseInt(s.value);break;case"outrotationspeed":aniText.outrotationspeed=parseInt(s.value);break;case"appearscalespeed":aniText.appearscalespeed=parseInt(s.value);break;case"showdelay":aniText.showdelay=parseInt(s.value);break;case"staycount":aniText.staycount=parseInt(s.value);break;case"gap":aniText.gap=parseInt(s.value)}}else if("word"==i.tagName){for(var o={color:aniText.textcolor,size:aniText.size,inrotationspeed:aniText.inrotationspeed,outrotationspeed:aniText.outrotationspeed,appearscalespeed:aniText.appearscalespeed,gap:aniText.gap},r=0;r<i.attributes.length;r++){var s=i.attributes[r];switch(s.nodeName){case"text":o.text=s.value;break;case"color":o.color=s.value.replace(/0x/,"#");break;case"size":o.size=parseInt(s.value);break;case"inrotationspeed":o.inrotationspeed=parseInt(s.value);break;case"outrotationspeed":o.outrotationspeed=parseInt(s.value);break;case"appearscalespeed":o.appearscalespeed=parseInt(s.value);break;case"gap":o.gap=parseInt(s.value);break;case"link":o.link=s.value;break;case"target":o.target=s.value}}o.w=[],o.r=[],o.d=[],o.s=[],o.z=[],o.q=[],o.index=aniText.wlst.length,o.cgap=o.gap+4,aniText.ctx.font="bold "+o.size+"px 'Century Gothic'";for(var x=0;x<o.text.length;x++)o.w[x]=aniText.ctx.measureText(o.text[x]).width,o.q[x]=0;o.tw=aniText.ctx.measureText(o.text).width+o.cgap*o.text.length+20,o.t=[o.index*aniText.showdelay],o.t.push(o.t[0]+aniText.showdelay),o.t.push(o.t[1]+aniText.staycount-aniText.showdelay),o.t.push(o.t[2]+aniText.showdelay),aniText.rndLine(o),aniText.wlst.push(o)}}aniText.t0=+new Date,aniText.draw()}},aniText.rndLine=function(e){e.x=Math.random()*sW,e.tw>sW&&(e.x=sW/2),e.x-e.tw/2<0&&(e.x=e.tw/2),e.x+e.tw/2>sW&&(e.x=sW-e.tw/2),e.draw=!1;for(var t=0;t<e.text.length;t++)e.r[t]=2*(Math.random()-.5)*3.1415927,e.d[t]=Math.random()/3,e.s[t]=.7*Math.random(),e.z[t]=Math.random()<.5?1:-1;do e.y=Math.random()*(sH-40)+20;while(Math.abs(aniText.lasty-e.y)<20);aniText.lasty=e.y,e.rect=[e.x-e.tw/2,e.y-20,e.x+e.tw/2,e.y+20]},aniText.draw=function(){aniText.ctx.clearRect(0,0,sW,sH);for(var e=(+new Date-aniText.t0)/30,t=aniText.wlst.length*aniText.showdelay,a=e%t,n=aniText.wlst.length-1,i=0;n>=i;i++){var r=aniText.wlst[i];if(a>=r.t[0]&&a<r.t[1]){r.draw=!0,aniText.ctx.fillStyle=r.color,aniText.ctx.font="bold "+r.size+"px 'Century Gothic'";for(var s=-r.tw/2+10,o=(a-r.t[0])/(r.t[1]-r.t[0]),x=0;x<r.text.length;x++){aniText.ctx.save();var l=o-r.d[x],c=o*(.3+r.d[x]*Math.pow(25/r.inrotationspeed,2.5)),d=lerp1(c>1?1:c,1-r.d[x]*r.inrotationspeed/aniText.showdelay,o);r.q[x]=lerp(r.r[x],.001*Math.sign(r.r[x]),d);var p=o*(1+r.d[x]*Math.pow(25/r.appearscalespeed,2.6)),T=lerp2(r.s[x],1,p>1?1:p);aniText.ctx.globalAlpha=Math.pow(d,.3),aniText.ctx.translate(r.x+s,r.y),aniText.ctx.rotate(r.q[x]),aniText.ctx.scale(T,T),aniText.ctx.fillText(r.text[x],.1>l?-100:.15>l?lerp1(-100,-90,(l-.1)/.05):.2>l?lerp2(-90,-125,(l-.15)/.05):.3>l?lerpn(-125,10,(l-.2)/.1):.4>l?lerp(10,-5,(l-.3)/.1):o<r.d[x]+.6?lerp1(-5,0,(o-r.d[x]-.4)/.2):0,0),aniText.ctx.restore(),s+=r.w[x]+r.cgap}}else if(a>=r.t[1]&&a<r.t[2]||i==n&&e>t&&a>=r.t[1]%t&&a<r.t[2]%t){r.draw=!0,aniText.link!=r.link&&(aniText.link=r.link,aniText.target=r.target,aniText.linkrect=r.rect),aniText.ctx.fillStyle=r.color,aniText.ctx.font="bold "+r.size+"px 'Century Gothic'",aniText.ctx.globalAlpha=1;for(var o=(a-r.t[1]%t)/(r.t[2]%t-r.t[1]%t),s=-r.tw/2+10,x=0;x<r.text.length;x++)aniText.ctx.save(),aniText.ctx.translate(r.x+s,r.y),aniText.ctx.rotate(lerp(r.q[x],.001*Math.sign(r.r[x]),o)),Math.random()<.01&&r.inrotationspeed>50&&console.log(r.q[x]+" / "+Math.sign(r.r[x])),aniText.ctx.fillText(r.text[x],0,0),aniText.ctx.restore(),s+=r.w[x]+r.cgap}else if(a>=r.t[2]&&a<r.t[3]||i>n-2&&e>t&&a>=r.t[2]%t&&a<r.t[3]%t){r.draw=!0,aniText.ctx.fillStyle=r.color,aniText.ctx.font="bold "+r.size+"px 'Century Gothic'";for(var o=i>n-2?(a-r.t[2]%t)/(r.t[3]%t-r.t[2]%t):(a-r.t[2])/(r.t[3]-r.t[2]),s=-r.tw/2+10,x=0;x<r.text.length;x++){aniText.ctx.save();var l=o-r.d[x],c=o*(1-r.d[x]*Math.pow(r.outrotationspeed/25,2.2)),d=lerp2(c>1?0:1-c,0,o),T=lerp(1,r.s[x],o);aniText.ctx.globalAlpha=o>r.d[x]+.666?0:1,aniText.ctx.translate(r.x+s,r.y),aniText.ctx.rotate(lerp2(r.r[x],0,d)),aniText.ctx.scale(T,T),aniText.ctx.fillText(r.text[x],r.z[x]*(o<r.d[x]+.1?lerp2(0,30,o/(r.d[x]+.1)):o<r.d[x]+.2?lerp2(30,0,(o-r.d[x]-.1)/.1):o<r.d[x]+.666?lerp1(0,180,(o-r.d[x]-.2)/.466):100),0),aniText.ctx.restore(),s+=r.w[x]+r.cgap}}else r.draw&&aniText.rndLine(r)}requestAnimationFrame(aniText.draw)};