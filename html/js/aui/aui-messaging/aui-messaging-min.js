YUI.add("aui-messaging",function(e,t){var n=e.Lang,r=n.isString,i,s=e.Env,o=YUI.Env,u=e.config.win,a=u.location,f=!!u.postMessage,l="_A=",c="=A_",h=".*?",p=c+"\\d+&",d=new RegExp(p+"("+h+")"+l),v=new RegExp(p+h+l);fnPostMessage=function(t,r,i){if(r){n.isObject(t)&&(t=e.QueryString.stringify(t));try{i=e.one(i),i=i&&i.getDOM().contentWindow}catch(o){}i=i||u.parent;if(f)r=r.replace(/([^:]+:\/\/[^\/?]+).*/,"$1"),i.postMessage(t,r);else{var a=r.split("#"),h=a[1]||"";h=h.replace(v,"");var p=n.now()+ ++s._uidx;h=c+p+"&"+t+l+h,a[1]=h,i.location=a.join("#")}}},fnReceiveMessage=function(t,r,i){if(f){var s=Messaging._callbackFn;s&&(o.remove(u,"message",s),Messaging._callbackFn=null);if(t){var a=e.rbind(Messaging._validateCallback,Messaging,r,t);Messaging._callbackFn=a,o.add(u,"message",a)}}else{var l=Messaging._INTERVAL_ID;l&&(e.clearInterval(l),Messaging._INTERVAL_ID=null),t&&(n.isUndefined(i)&&(i=100,n.isNumber(r)&&(i=r)),Messaging._INTERVAL_ID=e.setInterval(Messaging._pollHash,i,Messaging,t))}},Messaging={post:fnPostMessage,receive:fnReceiveMessage,_formatEventObject:function(e){var t=this;return e.responseData=t._getResponseData(e.data),e},_getResponseData:function(t){var n=this,r=t;return r&&/\w+=\w+/.test(r)&&(r=e.QueryString.parse(r)),r},_pollHash:function(e){var t=Messaging,n=a.hash;if(n!=i&&v.test(n)){i=n;var r=n.match(d);r=r&&r[1]||"";var s={data:r};t._formatEventObject(s),e.call(Messaging,s)}},_validateCallback:function(e,t,i){var s=Messaging,o=e.origin,u=!1;n.isFunction(t)?u=t(o):r(t)&&(u=t==o),u&&(s._formatEventObject(e),i.call(Messaging,e))}},e.postMessage=fnPostMessage,e.receiveMessage=fnReceiveMessage,e.Messaging=Messaging},"2.0.0",{requires:["querystring","aui-timer"]});
