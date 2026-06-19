var sE=Object.defineProperty,aE=Object.defineProperties;var lE=Object.getOwnPropertyDescriptors;var jm=Object.getOwnPropertySymbols;var cE=Object.prototype.hasOwnProperty,dE=Object.prototype.propertyIsEnumerable;var Hm=(n,t,e)=>t in n?sE(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||={})cE.call(t,e)&&Hm(n,e,t[e]);if(jm)for(var e of jm(t))dE.call(t,e)&&Hm(n,e,t[e]);return n},$=(n,t)=>aE(n,lE(t));var He=null,Ss=!1,Yn=1,uE=null,ce=Symbol("SIGNAL");function S(n){let t=He;return He=n,t}function Ms(){return He}var tn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wn(n){if(Ss)throw new Error("");if(He===null)return;He.consumerOnSignalRead(n);let t=He.producersTail;if(t!==void 0&&t.producer===n)return;let e,r=He.recomputing;if(r&&(e=t!==void 0?t.nextProducer:He.producers,e!==void 0&&e.producer===n)){He.producersTail=e,e.lastReadVersion=n.version,e.knownValidAtEpoch=Yn;return}let i=n.consumersTail;if(i!==void 0&&i.consumer===He&&(!r||i.knownValidAtEpoch===Yn))return;let o=Yr(He),s={producer:n,consumer:He,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:Yn,lastReadVersion:n.version,nextConsumer:void 0};He.producersTail=s,t!==void 0?t.nextProducer=s:He.producers=s,o&&Wm(n,s)}function Um(){Yn++}function Xn(n){if(!(Yr(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Yn)){if(!n.producerMustRecompute(n)&&!Qn(n)){qr(n);return}n.producerRecomputeValue(n),qr(n)}}function Oc(n){if(n.consumers===void 0)return;let t=Ss;Ss=!0;try{for(let e=n.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||zm(r)}}finally{Ss=t}}function Fc(){return He?.consumerAllowSignalWrites!==!1}function zm(n){n.dirty=!0,Oc(n),n.consumerMarkedDirty?.(n)}function qr(n){n.dirty=!1,n.lastCleanEpoch=Yn}function Ft(n){return n&&$m(n),S(n)}function $m(n){if(n.producersTail?.knownValidAtEpoch===Yn){let t=n.producers;for(;t!==void 0;)t.knownValidAtEpoch=null,t=t.nextProducer}n.producersTail=void 0,n.recomputing=!0}function nn(n,t){S(t),n&&Gm(n)}function Gm(n){n.recomputing=!1;let t=n.producersTail,e=t!==void 0?t.nextProducer:n.producers;if(e!==void 0){if(Yr(n))do e=Pc(e);while(e!==void 0);t!==void 0?t.nextProducer=void 0:n.producers=void 0}}function Qn(n){for(let t=n.producers;t!==void 0;t=t.nextProducer){let e=t.producer,r=t.lastReadVersion;if(r!==e.version||(Xn(e),r!==e.version))return!0}return!1}function rn(n){if(Yr(n)){let t=n.producers;for(;t!==void 0;)t=Pc(t)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function Wm(n,t){let e=n.consumersTail,r=Yr(n);if(e!==void 0?(t.nextConsumer=e.nextConsumer,e.nextConsumer=t):(t.nextConsumer=void 0,n.consumers=t),t.prevConsumer=e,n.consumersTail=t,!r)for(let i=n.producers;i!==void 0;i=i.nextProducer)Wm(i.producer,i)}function Pc(n){let t=n.producer,e=n.nextProducer,r=n.nextConsumer,i=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:t.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(t.consumers=r,!Yr(t)){let o=t.producers;for(;o!==void 0;)o=Pc(o)}return e}function Yr(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Yi(n){uE?.(n)}function Ki(n,t){return Object.is(n,t)}function Zi(n,t){let e=Object.create(fE);e.computation=n,t!==void 0&&(e.equal=t);let r=()=>{if(Xn(e),wn(e),e.value===Ot)throw e.error;return e.value};return r[ce]=e,Yi(e),r}var Kn=Symbol("UNSET"),Zn=Symbol("COMPUTING"),Ot=Symbol("ERRORED"),fE=$(_({},tn),{value:Kn,dirty:!0,error:null,equal:Ki,kind:"computed",producerMustRecompute(n){return n.value===Kn||n.value===Zn},producerRecomputeValue(n){if(n.value===Zn)throw new Error("");let t=n.value;n.value=Zn;let e=Ft(n),r,i=!1;try{r=n.computation(),S(null),i=t!==Kn&&t!==Ot&&r!==Ot&&n.equal(t,r)}catch(o){r=Ot,n.error=o}finally{nn(n,e)}if(i){n.value=t;return}n.value=r,n.version++}});function hE(){throw new Error}var qm=hE;function Ym(n){qm(n)}function Lc(n){qm=n}var mE=null;function Vc(n,t){let e=Object.create(Xi);e.value=n,t!==void 0&&(e.equal=t);let r=()=>Km(e);return r[ce]=e,Yi(e),[r,s=>Jn(e,s),s=>Ts(e,s)]}function Km(n){return wn(n),n.value}function Jn(n,t){Fc()||Ym(n),n.equal(n.value,t)||(n.value=t,pE(n))}function Ts(n,t){Fc()||Ym(n),Jn(n,t(n.value))}var Xi=$(_({},tn),{equal:Ki,value:void 0,kind:"signal"});function pE(n){n.version++,Um(),Oc(n),mE?.(n)}var Bc=$(_({},tn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function jc(n){if(n.dirty=!1,n.version>0&&!Qn(n))return;n.version++;let t=Ft(n);try{n.cleanup(),n.fn()}finally{nn(n,t)}}var Hc;function ks(){return Hc}function Pt(n){let t=Hc;return Hc=n,t}var Zm=Symbol("NotFound");function Kr(n){return n===Zm||n?.name==="\u0275NotFound"}function Uc(n,t,e){let r=Object.create(gE);r.source=n,r.computation=t,e!=null&&(r.equal=e);let o=()=>{if(Xn(r),wn(r),r.value===Ot)throw r.error;return r.value};return o[ce]=r,Yi(r),o}function Xm(n,t){Xn(n),Jn(n,t),qr(n)}function Qm(n,t){if(Xn(n),n.value===Ot)throw n.error;Ts(n,t),qr(n)}var gE=$(_({},tn),{value:Kn,dirty:!0,error:null,equal:Ki,kind:"linkedSignal",producerMustRecompute(n){return n.value===Kn||n.value===Zn},producerRecomputeValue(n){if(n.value===Zn)throw new Error("");let t=n.value;n.value=Zn;let e=Ft(n),r,i=!1;try{let o=n.source(),s=t!==Kn&&t!==Ot,a=s?{source:n.sourceValue,value:t}:void 0;r=n.computation(o,a),n.sourceValue=o,S(null),i=s&&r!==Ot&&n.equal(t,r)}catch(o){r=Ot,n.error=o}finally{nn(n,e)}if(i){n.value=t;return}n.value=r,n.version++}});function Jm(n){let t=S(null);try{return n()}finally{S(t)}}function z(n){return typeof n=="function"}function Zr(n){let e=n(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var As=Zr(n=>function(e){n(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function er(n,t){if(n){let e=n.indexOf(t);0<=e&&n.splice(e,1)}}var X=class n{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(z(r))try{r()}catch(o){t=o instanceof As?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{ep(o)}catch(s){t=t??[],s instanceof As?t=[...t,...s.errors]:t.push(s)}}if(t)throw new As(t)}}add(t){var e;if(t&&t!==this)if(this.closed)ep(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}}_hasParent(t){let{_parentage:e}=this;return e===t||Array.isArray(e)&&e.includes(t)}_addParent(t){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t}_removeParent(t){let{_parentage:e}=this;e===t?this._parentage=null:Array.isArray(e)&&er(e,t)}remove(t){let{_finalizers:e}=this;e&&er(e,t),t instanceof n&&t._removeParent(this)}};X.EMPTY=(()=>{let n=new X;return n.closed=!0,n})();var zc=X.EMPTY;function Ns(n){return n instanceof X||n&&"closed"in n&&z(n.remove)&&z(n.add)&&z(n.unsubscribe)}function ep(n){z(n)?n():n.unsubscribe()}var Et={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Xr={setTimeout(n,t,...e){let{delegate:r}=Xr;return r?.setTimeout?r.setTimeout(n,t,...e):setTimeout(n,t,...e)},clearTimeout(n){let{delegate:t}=Xr;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Rs(n){Xr.setTimeout(()=>{let{onUnhandledError:t}=Et;if(t)t(n);else throw n})}function Qi(){}var tp=$c("C",void 0,void 0);function np(n){return $c("E",void 0,n)}function rp(n){return $c("N",n,void 0)}function $c(n,t,e){return{kind:n,value:t,error:e}}var tr=null;function Qr(n){if(Et.useDeprecatedSynchronousErrorHandling){let t=!tr;if(t&&(tr={errorThrown:!1,error:null}),n(),t){let{errorThrown:e,error:r}=tr;if(tr=null,e)throw r}}else n()}function ip(n){Et.useDeprecatedSynchronousErrorHandling&&tr&&(tr.errorThrown=!0,tr.error=n)}var nr=class extends X{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Ns(t)&&t.add(this)):this.destination=bE}static create(t,e,r){return new wt(t,e,r)}next(t){this.isStopped?Wc(rp(t),this):this._next(t)}error(t){this.isStopped?Wc(np(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Wc(tp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},yE=Function.prototype.bind;function Gc(n,t){return yE.call(n,t)}var qc=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:e}=this;if(e.next)try{e.next(t)}catch(r){Os(r)}}error(t){let{partialObserver:e}=this;if(e.error)try{e.error(t)}catch(r){Os(r)}else Os(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(e){Os(e)}}},wt=class extends nr{constructor(t,e,r){super();let i;if(z(t)||!t)i={next:t??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&Et.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=()=>this.unsubscribe(),i={next:t.next&&Gc(t.next,o),error:t.error&&Gc(t.error,o),complete:t.complete&&Gc(t.complete,o)}):i=t}this.destination=new qc(i)}};function Os(n){Et.useDeprecatedSynchronousErrorHandling?ip(n):Rs(n)}function vE(n){throw n}function Wc(n,t){let{onStoppedNotification:e}=Et;e&&Xr.setTimeout(()=>e(n,t))}var bE={closed:!0,next:Qi,error:vE,complete:Qi};var Jr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Cn(n){return n}function op(n){return n.length===0?Cn:n.length===1?n[0]:function(e){return n.reduce((r,i)=>i(r),e)}}var W=(()=>{class n{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new n;return r.source=this,r.operator=e,r}subscribe(e,r,i){let o=DE(e)?e:new wt(e,r,i);return Qr(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=sp(r),new r((i,o)=>{let s=new wt({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[Jr](){return this}pipe(...e){return op(e)(this)}toPromise(e){return e=sp(e),new e((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return n.create=t=>new n(t),n})();function sp(n){var t;return(t=n??Et.Promise)!==null&&t!==void 0?t:Promise}function _E(n){return n&&z(n.next)&&z(n.error)&&z(n.complete)}function DE(n){return n&&n instanceof nr||_E(n)&&Ns(n)}function EE(n){return z(n?.lift)}function Q(n){return t=>{if(EE(t))return t.lift(function(e){try{return n(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(n,t,e,r,i){return new Yc(n,t,e,r,i)}var Yc=class extends nr{constructor(t,e,r,i,o,s){super(t),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){t.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var ap=Zr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var M=(()=>{class n extends W{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new Fs(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new ap}next(e){Qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){Qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){Qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:o}=this;return r||i?zc:(this.currentObservers=null,o.push(e),new X(()=>{this.currentObservers=null,er(o,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:o}=this;r?e.error(i):o&&e.complete()}asObservable(){let e=new W;return e.source=this,e}}return n.create=(t,e)=>new Fs(t,e),n})(),Fs=class extends M{constructor(t,e){super(),this.destination=t,this.source=e}next(t){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,t)}error(t){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,t)}complete(){var t,e;(e=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||e===void 0||e.call(t)}_subscribe(t){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(t))!==null&&r!==void 0?r:zc}};var rr=class extends M{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let e=super._subscribe(t);return!e.closed&&t.next(this._value),e}getValue(){let{hasError:t,thrownError:e,_value:r}=this;if(t)throw e;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var Ji={now(){return(Ji.delegate||Date).now()},delegate:void 0};var Ps=class extends M{constructor(t=1/0,e=1/0,r=Ji){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;e||(r.push(t),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!t.closed;s+=r?1:2)t.next(o[s]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){let{_bufferSize:t,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*t;if(t<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=e.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var Ls=class extends X{constructor(t,e){super()}schedule(t,e=0){return this}};var eo={setInterval(n,t,...e){let{delegate:r}=eo;return r?.setInterval?r.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){let{delegate:t}=eo;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var Vs=class extends Ls{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var r;if(this.closed)return this;this.state=t;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(t,e,r=0){return eo.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&eo.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r=!1,i;try{this.work(t)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:t,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,er(r,this),t!=null&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}};var ei=class n{constructor(t,e=n.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,r){return new this.schedulerActionCtor(this,t).schedule(r,e)}};ei.now=Ji.now;var Bs=class extends ei{constructor(t,e=ei.now){super(t,e),this.actions=[],this._active=!1}flush(t){let{actions:e}=this;if(this._active){e.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}};var to=new Bs(Vs),lp=to;var ir=new W(n=>n.complete());function js(n){return n&&z(n.schedule)}function Kc(n){return n[n.length-1]}function cp(n){return z(Kc(n))?n.pop():void 0}function xn(n){return js(Kc(n))?n.pop():void 0}function dp(n,t){return typeof Kc(n)=="number"?n.pop():t}function fp(n,t,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(n,t||[])).next())})}function up(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function or(n){return this instanceof or?(this.v=n,this):new or(n)}function hp(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(n,t||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(h){return function(p){return Promise.resolve(p).then(h,f)}}function a(h,p){r[h]&&(i[h]=function(D){return new Promise(function(C,P){o.push([h,D,C,P])>1||l(h,D)})},p&&(i[h]=p(i[h])))}function l(h,p){try{c(r[h](p))}catch(D){m(o[0][3],D)}}function c(h){h.value instanceof or?Promise.resolve(h.value.v).then(d,f):m(o[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function m(h,p){h(p),o.shift(),o.length&&l(o[0][0],o[0][1])}}function mp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof up=="function"?up(n):n[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=n[o]&&function(s){return new Promise(function(a,l){s=n[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Hs=n=>n&&typeof n.length=="number"&&typeof n!="function";function Us(n){return z(n?.then)}function zs(n){return z(n[Jr])}function $s(n){return Symbol.asyncIterator&&z(n?.[Symbol.asyncIterator])}function Gs(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function wE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ws=wE();function qs(n){return z(n?.[Ws])}function Ys(n){return hp(this,arguments,function*(){let e=n.getReader();try{for(;;){let{value:r,done:i}=yield or(e.read());if(i)return yield or(void 0);yield yield or(r)}}finally{e.releaseLock()}})}function Ks(n){return z(n?.getReader)}function de(n){if(n instanceof W)return n;if(n!=null){if(zs(n))return CE(n);if(Hs(n))return xE(n);if(Us(n))return IE(n);if($s(n))return pp(n);if(qs(n))return SE(n);if(Ks(n))return ME(n)}throw Gs(n)}function CE(n){return new W(t=>{let e=n[Jr]();if(z(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function xE(n){return new W(t=>{for(let e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()})}function IE(n){return new W(t=>{n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,Rs)})}function SE(n){return new W(t=>{for(let e of n)if(t.next(e),t.closed)return;t.complete()})}function pp(n){return new W(t=>{TE(n,t).catch(e=>t.error(e))})}function ME(n){return pp(Ys(n))}function TE(n,t){var e,r,i,o;return fp(this,void 0,void 0,function*(){try{for(e=mp(n);r=yield e.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}t.complete()})}function rt(n,t,e,r=0,i=!1){let o=t.schedule(function(){e(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(o),!i)return o}function Zs(n,t=0){return Q((e,r)=>{e.subscribe(te(r,i=>rt(r,n,()=>r.next(i),t),()=>rt(r,n,()=>r.complete(),t),i=>rt(r,n,()=>r.error(i),t)))})}function Xs(n,t=0){return Q((e,r)=>{r.add(n.schedule(()=>e.subscribe(r),t))})}function gp(n,t){return de(n).pipe(Xs(t),Zs(t))}function yp(n,t){return de(n).pipe(Xs(t),Zs(t))}function vp(n,t){return new W(e=>{let r=0;return t.schedule(function(){r===n.length?e.complete():(e.next(n[r++]),e.closed||this.schedule())})})}function bp(n,t){return new W(e=>{let r;return rt(e,t,()=>{r=n[Ws](),rt(e,t,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){e.error(s);return}o?e.complete():e.next(i)},0,!0)}),()=>z(r?.return)&&r.return()})}function Qs(n,t){if(!n)throw new Error("Iterable cannot be null");return new W(e=>{rt(e,t,()=>{let r=n[Symbol.asyncIterator]();rt(e,t,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function _p(n,t){return Qs(Ys(n),t)}function Dp(n,t){if(n!=null){if(zs(n))return gp(n,t);if(Hs(n))return vp(n,t);if(Us(n))return yp(n,t);if($s(n))return Qs(n,t);if(qs(n))return bp(n,t);if(Ks(n))return _p(n,t)}throw Gs(n)}function on(n,t){return t?Dp(n,t):de(n)}function sr(...n){let t=xn(n);return on(n,t)}var Ep=Zr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Zc(n,t){let e=typeof t=="object";return new Promise((r,i)=>{let o=new wt({next:s=>{r(s),o.unsubscribe()},error:i,complete:()=>{e?r(t.defaultValue):i(new Ep)}});n.subscribe(o)})}function wp(n){return n instanceof Date&&!isNaN(n)}function be(n,t){return Q((e,r)=>{let i=0;e.subscribe(te(r,o=>{r.next(n.call(t,o,i++))}))})}var{isArray:kE}=Array;function AE(n,t){return kE(t)?n(...t):n(t)}function Cp(n){return be(t=>AE(n,t))}var{isArray:NE}=Array,{getPrototypeOf:RE,prototype:OE,keys:FE}=Object;function xp(n){if(n.length===1){let t=n[0];if(NE(t))return{args:t,keys:null};if(PE(t)){let e=FE(t);return{args:e.map(r=>t[r]),keys:e}}}return{args:n,keys:null}}function PE(n){return n&&typeof n=="object"&&RE(n)===OE}function Ip(n,t){return n.reduce((e,r,i)=>(e[r]=t[i],e),{})}function Sp(n,t,e,r,i,o,s,a){let l=[],c=0,d=0,f=!1,m=()=>{f&&!l.length&&!c&&t.complete()},h=D=>c<r?p(D):l.push(D),p=D=>{o&&t.next(D),c++;let C=!1;de(e(D,d++)).subscribe(te(t,P=>{i?.(P),o?h(P):t.next(P)},()=>{C=!0},void 0,()=>{if(C)try{for(c--;l.length&&c<r;){let P=l.shift();s?rt(t,s,()=>p(P)):p(P)}m()}catch(P){t.error(P)}}))};return n.subscribe(te(t,h,()=>{f=!0,m()})),()=>{a?.()}}function ti(n,t,e=1/0){return z(t)?ti((r,i)=>be((o,s)=>t(r,o,i,s))(de(n(r,i))),e):(typeof t=="number"&&(e=t),Q((r,i)=>Sp(r,i,n,e)))}function Js(n=1/0){return ti(Cn,n)}function Mp(){return Js(1)}function Xc(...n){return Mp()(on(n,xn(n)))}function Qc(n){return new W(t=>{de(n()).subscribe(t)})}function Jc(...n){let t=cp(n),{args:e,keys:r}=xp(n),i=new W(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;de(e[d]).subscribe(te(o,m=>{f||(f=!0,c--),a[d]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Ip(r,a):a),o.complete())}))}});return t?i.pipe(Cp(t)):i}function Tp(n=0,t,e=lp){let r=-1;return t!=null&&(js(t)?e=t:r=t),new W(i=>{let o=wp(n)?+n-e.now():n;o<0&&(o=0);let s=0;return e.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function ar(...n){let t=xn(n),e=dp(n,1/0),r=n;return r.length?r.length===1?de(r[0]):Js(e)(on(r,t)):ir}function Re(n,t){return Q((e,r)=>{let i=0;e.subscribe(te(r,o=>n.call(t,o,i++)&&r.next(o)))})}function kp(n){return Q((t,e)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};t.subscribe(te(e,c=>{r=!0,i=c,o||de(n(c)).subscribe(o=te(e,a,l))},()=>{s=!0,(!r||!o||o.closed)&&e.complete()}))})}function ea(n,t=to){return kp(()=>Tp(n,t))}function ed(n,t){return z(t)?ti(n,t,1):ti(n,1)}function td(n,t=to){return Q((e,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+n,d=t.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}e.subscribe(te(r,c=>{o=c,s=t.now(),i||(i=t.schedule(l,n),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function nd(n){return n<=0?()=>ir:Q((t,e)=>{let r=0;t.subscribe(te(e,i=>{++r<=n&&(e.next(i),n<=r&&e.complete())}))})}function ta(n,t=Cn){return n=n??LE,Q((e,r)=>{let i,o=!0;e.subscribe(te(r,s=>{let a=t(s);(o||!n(i,a))&&(o=!1,i=a,r.next(s))}))})}function LE(n,t){return n===t}function ni(n){return Q((t,e)=>{try{t.subscribe(e)}finally{e.add(n)}})}function na(){return Q((n,t)=>{let e,r=!1;n.subscribe(te(t,i=>{let o=e;e=i,r&&t.next([o,i]),r=!0}))})}function Ap(n={}){let{connector:t=()=>new M,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=n;return o=>{let s,a,l,c=0,d=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,d=f=!1},p=()=>{let D=s;h(),D?.unsubscribe()};return Q((D,C)=>{c++,!f&&!d&&m();let P=l=l??t();C.add(()=>{c--,c===0&&!f&&!d&&(a=rd(p,i))}),P.subscribe(C),!s&&c>0&&(s=new wt({next:xe=>P.next(xe),error:xe=>{f=!0,m(),a=rd(h,e,xe),P.error(xe)},complete:()=>{d=!0,m(),a=rd(h,r),P.complete()}}),de(D).subscribe(s))})(o)}}function rd(n,t,...e){if(t===!0){n();return}if(t===!1)return;let r=new wt({next:()=>{r.unsubscribe(),n()}});return de(t(...e)).subscribe(r)}function ra(n,t,e){let r,i=!1;return n&&typeof n=="object"?{bufferSize:r=1/0,windowTime:t=1/0,refCount:i=!1,scheduler:e}=n:r=n??1/0,Ap({connector:()=>new Ps(r,t,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function id(n){return Re((t,e)=>n<=e)}function lr(...n){let t=xn(n);return Q((e,r)=>{(t?Xc(n,e,t):Xc(n,e)).subscribe(r)})}function ri(n,t){return Q((e,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();e.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;de(n(l,d)).subscribe(i=te(r,f=>r.next(t?t(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function ze(n){return Q((t,e)=>{de(n).subscribe(te(e,()=>e.complete(),Qi)),!e.closed&&t.subscribe(e)})}function od(n,t=!1){return Q((e,r)=>{let i=0;e.subscribe(te(r,o=>{let s=n(o,i++);(s||t)&&r.next(o),!s&&r.complete()}))})}function sd(n,t,e){let r=z(n)||t||e?{next:n,error:t,complete:e}:n;return r?Q((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Cn}var da="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",b=class extends Error{code;constructor(t,e){super(mr(t,e)),this.code=t}};function VE(n){return`NG0${Math.abs(n)}`}function mr(n,t){return`${VE(n)}${t?": "+t:""}`}function se(n){for(let t in n)if(n[t]===se)return t;throw Error("")}function Pp(n,t){for(let e in t)t.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(n[e]=t[e])}function ua(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ua).join(", ")}]`;if(n==null)return""+n;let t=n.overriddenName||n.name;if(t)return`${t}`;let e=n.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function fa(n,t){return n?t?`${n} ${t}`:n:t||""}var BE=se({__forward_ref__:se});function ot(n){return n.__forward_ref__=ot,n}function Oe(n){return bd(n)?n():n}function bd(n){return typeof n=="function"&&n.hasOwnProperty(BE)&&n.__forward_ref__===ot}function B(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ha(n){return jE(n,ma)}function jE(n,t){return n.hasOwnProperty(t)&&n[t]||null}function HE(n){let t=n?.[ma]??null;return t||null}function ld(n){return n&&n.hasOwnProperty(oa)?n[oa]:null}var ma=se({\u0275prov:se}),oa=se({\u0275inj:se}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,e){this._desc=t,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=B({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function _d(n){return n&&!!n.\u0275providers}var Dd=se({\u0275cmp:se}),Ed=se({\u0275dir:se}),wd=se({\u0275pipe:se});var ro=se({\u0275fac:se}),pr=se({__NG_ELEMENT_ID__:se}),Np=se({__NG_ENV_ID__:se});function Sn(n){return xd(n,"@Component"),n[Dd]||null}function Cd(n){return xd(n,"@Directive"),n[Ed]||null}function Lp(n){return xd(n,"@Pipe"),n[wd]||null}function xd(n,t){if(n==null)throw new b(-919,!1)}function pa(n){return typeof n=="string"?n:n==null?"":String(n)}var Vp=se({ngErrorCode:se}),UE=se({ngErrorMessage:se}),zE=se({ngTokenPath:se});function Id(n,t){return Bp("",-200,t)}function ga(n,t){throw new b(-201,!1)}function Bp(n,t,e){let r=new b(t,n);return r[Vp]=t,r[UE]=n,e&&(r[zE]=e),r}function $E(n){return n[Vp]}var cd;function jp(){return cd}function Ze(n){let t=cd;return cd=n,t}function Sd(n,t,e){let r=ha(n);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(t!==void 0)return t;ga(n,"")}var Mn=globalThis;var GE={},cr=GE,WE="__NG_DI_FLAG__",dd=class{injector;constructor(t){this.injector=t}retrieve(t,e){let r=dr(e)||0;try{return this.injector.get(t,r&8?null:cr,r)}catch(i){if(Kr(i))return i;throw i}}};function qE(n,t=0){let e=ks();if(e===void 0)throw new b(-203,!1);if(e===null)return Sd(n,void 0,t);{let r=YE(t),i=e.retrieve(n,r);if(Kr(i)){if(r.optional)return null;throw i}return i}}function R(n,t=0){return(jp()||qE)(Oe(n),t)}function u(n,t){return R(n,dr(t))}function dr(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function YE(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function ud(n){let t=[];for(let e=0;e<n.length;e++){let r=Oe(n[e]);if(Array.isArray(r)){if(r.length===0)throw new b(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=KE(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}t.push(R(i,o))}else t.push(R(r))}return t}function KE(n){return n[WE]}function ur(n,t){let e=n.hasOwnProperty(ro);return e?n[ro]:null}function Hp(n,t,e){if(n.length!==t.length)return!1;for(let r=0;r<n.length;r++){let i=n[r],o=t[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function Up(n){return n.flat(Number.POSITIVE_INFINITY)}function ya(n,t){n.forEach(e=>Array.isArray(e)?ya(e,t):t(e))}function Md(n,t,e){t>=n.length?n.push(e):n.splice(t,0,e)}function ao(n,t){return t>=n.length-1?n.pop():n.splice(t,1)[0]}function zp(n,t){let e=[];for(let r=0;r<n;r++)e.push(t);return e}function $p(n,t,e,r){let i=n.length;if(i==t)n.push(e,r);else if(i===1)n.push(r,n[0]),n[0]=e;else{for(i--,n.push(n[i-1],n[i]);i>t;){let o=i-2;n[i]=n[o],i--}n[t]=e,n[t+1]=r}}function va(n,t,e){let r=si(n,t);return r>=0?n[r|1]=e:(r=~r,$p(n,r,t,e)),r}function ba(n,t){let e=si(n,t);if(e>=0)return n[e|1]}function si(n,t){return ZE(n,t,1)}function ZE(n,t,e){let r=0,i=n.length>>e;for(;i!==r;){let o=r+(i-r>>1),s=n[o<<e];if(t===s)return o<<e;s>t?i=o:r=o+1}return~(i<<e)}var Tn={},it=[],gr=new g(""),lo=new g("",-1),Td=new g(""),oi=class{get(t,e=cr){if(e===cr){let i=Bp("",-201);throw i.name="\u0275NotFound",i}return e}};function ln(n){return{\u0275providers:n}}function Gp(n){return ln([{provide:gr,multi:!0,useValue:n}])}function Wp(...n){return{\u0275providers:kd(!0,n),\u0275fromNgModule:!0}}function kd(n,...t){let e=[],r=new Set,i,o=s=>{e.push(s)};return ya(t,s=>{let a=s;sa(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&qp(i,o),e}function qp(n,t){for(let e=0;e<n.length;e++){let{ngModule:r,providers:i}=n[e];Ad(i,o=>{t(o,r)})}}function sa(n,t,e,r){if(n=Oe(n),!n)return!1;let i=null,o=ld(n),s=!o&&Sn(n);if(!o&&!s){let l=n.ngModule;if(o=ld(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=n}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)sa(c,t,e,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;ya(o.imports,d=>{sa(d,t,e,r)&&(c||=[],c.push(d))}),c!==void 0&&qp(c,t)}if(!a){let c=ur(i)||(()=>new i);t({provide:i,useFactory:c,deps:it},i),t({provide:Td,useValue:i,multi:!0},i),t({provide:gr,useValue:()=>R(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=n;Ad(l,d=>{t(d,c)})}}else return!1;return i!==n&&n.providers!==void 0}function Ad(n,t){for(let e of n)_d(e)&&(e=e.\u0275providers),Array.isArray(e)?Ad(e,t):t(e)}var XE=se({provide:String,useValue:se});function Yp(n){return n!==null&&typeof n=="object"&&XE in n}function QE(n){return!!(n&&n.useExisting)}function JE(n){return!!(n&&n.useFactory)}function fr(n){return typeof n=="function"}function Kp(n){return!!n.useClass}var co=new g(""),ia={},Rp={},ad;function ai(){return ad===void 0&&(ad=new oi),ad}var _e=class{},hr=class extends _e{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,hd(t,s=>this.processProvider(s)),this.records.set(lo,ii(void 0,this)),i.has("environment")&&this.records.set(_e,ii(void 0,this));let o=this.records.get(co);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Td,it,{self:!0}))}retrieve(t,e){let r=dr(e)||0;try{return this.get(t,cr,r)}catch(i){if(Kr(i))return i;throw i}}destroy(){no(this),this._destroyed=!0;let t=S(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),S(t)}}onDestroy(t){return no(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){no(this);let e=Pt(this),r=Ze(void 0),i;try{return t()}finally{Pt(e),Ze(r)}}get(t,e=cr,r){if(no(this),t.hasOwnProperty(Np))return t[Np](this);let i=dr(r),o,s=Pt(this),a=Ze(void 0);try{if(!(i&4)){let c=this.records.get(t);if(c===void 0){let d=iw(t)&&ha(t);d&&this.injectableDefInScope(d)?c=ii(fd(t),ia):c=null,this.records.set(t,c)}if(c!=null)return this.hydrate(t,c,i)}let l=i&2?ai():this.parent;return e=i&8&&e===cr?null:e,l.get(t,e)}catch(l){let c=$E(l);throw c===-200||c===-201?new b(c,null):l}finally{Ze(a),Pt(s)}}resolveInjectorInitializers(){let t=S(null),e=Pt(this),r=Ze(void 0),i;try{let o=this.get(gr,it,{self:!0});for(let s of o)s()}finally{Pt(e),Ze(r),S(t)}}toString(){return"R3Injector[...]"}processProvider(t){t=Oe(t);let e=fr(t)?t:Oe(t&&t.provide),r=tw(t);if(!fr(t)&&t.multi===!0){let i=this.records.get(e);i||(i=ii(void 0,ia,!0),i.factory=()=>ud(i.multi),this.records.set(e,i)),e=t,i.multi.push(t)}this.records.set(e,r)}hydrate(t,e,r){let i=S(null);try{if(e.value===Rp)throw Id("");return e.value===ia&&(e.value=Rp,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&rw(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{S(i)}}injectableDefInScope(t){if(!t.providedIn)return!1;let e=Oe(t.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(t){let e=this._onDestroyHooks.indexOf(t);e!==-1&&this._onDestroyHooks.splice(e,1)}};function fd(n){let t=ha(n),e=t!==null?t.factory:ur(n);if(e!==null)return e;if(n instanceof g)throw new b(-204,!1);if(n instanceof Function)return ew(n);throw new b(-204,!1)}function ew(n){if(n.length>0)throw new b(-204,!1);let e=HE(n);return e!==null?()=>e.factory(n):()=>new n}function tw(n){if(Yp(n))return ii(void 0,n.useValue);{let t=Nd(n);return ii(t,ia)}}function Nd(n,t,e){let r;if(fr(n)){let i=Oe(n);return ur(i)||fd(i)}else if(Yp(n))r=()=>Oe(n.useValue);else if(JE(n))r=()=>n.useFactory(...ud(n.deps||[]));else if(QE(n))r=(i,o)=>R(Oe(n.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Oe(n&&(n.useClass||n.provide));if(nw(n))r=()=>new i(...ud(n.deps));else return ur(i)||fd(i)}return r}function no(n){if(n.destroyed)throw new b(-205,!1)}function ii(n,t,e=!1){return{factory:n,value:t,multi:e?[]:void 0}}function nw(n){return!!n.deps}function rw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function iw(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function hd(n,t){for(let e of n)Array.isArray(e)?hd(e,t):e&&_d(e)?hd(e.\u0275providers,t):t(e)}function xt(n,t){let e;n instanceof hr?(no(n),e=n):e=new dd(n);let r,i=Pt(e),o=Ze(void 0);try{return t()}finally{Pt(i),Ze(o)}}function Zp(){return jp()!==void 0||ks()!=null}var It=0,x=1,k=2,Se=3,st=4,Le=5,yr=6,li=7,De=8,Vt=9,St=10,le=11,ci=12,Rd=13,kn=14,Ue=15,An=16,vr=17,Bt=18,jt=19,Od=20,sn=21,_a=22,In=23,Xe=24,br=25,Ht=26,ve=27,Xp=1,Fd=6,Nn=7,uo=8,_r=9,me=10;function cn(n){return Array.isArray(n)&&typeof n[Xp]=="object"}function at(n){return Array.isArray(n)&&n[Xp]===!0}function Pd(n){return(n.flags&4)!==0}function dn(n){return n.componentOffset>-1}function di(n){return(n.flags&1)===1}function Ut(n){return!!n.template}function ui(n){return(n[k]&512)!==0}function Dr(n){return(n[k]&256)===256}var Ld="svg",Qp="math";function lt(n){for(;Array.isArray(n);)n=n[It];return n}function Vd(n,t){return lt(t[n])}function ct(n,t){return lt(t[n.index])}function Da(n,t){return n.data[t]}function Jp(n,t){return n[t]}function dt(n,t){let e=t[n];return cn(e)?e:e[It]}function eg(n){return(n[k]&4)===4}function Ea(n){return(n[k]&128)===128}function tg(n){return at(n[Se])}function ut(n,t){return t==null?null:n[t]}function Bd(n){n[vr]=0}function jd(n){n[k]&1024||(n[k]|=1024,Ea(n)&&Er(n))}function ng(n,t){for(;n>0;)t=t[kn],n--;return t}function fo(n){return!!(n[k]&9216||n[Xe]?.dirty)}function wa(n){n[St].changeDetectionScheduler?.notify(8),n[k]&64&&(n[k]|=1024),fo(n)&&Er(n)}function Er(n){n[St].changeDetectionScheduler?.notify(0);let t=an(n);for(;t!==null&&!(t[k]&8192||(t[k]|=8192,!Ea(t)));)t=an(t)}function Ca(n,t){if(Dr(n))throw new b(911,!1);n[sn]===null&&(n[sn]=[]),n[sn].push(t)}function rg(n,t){if(n[sn]===null)return;let e=n[sn].indexOf(t);e!==-1&&n[sn].splice(e,1)}function an(n){let t=n[Se];return at(t)?t[Se]:t}function Hd(n){return n[li]??=[]}function Ud(n){return n.cleanup??=[]}function ig(n,t,e,r){let i=Hd(t);i.push(e),n.firstCreatePass&&Ud(n).push(r,i.length-1)}var L={lFrame:pg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var md=!1;function og(){return L.lFrame.elementDepthCount}function sg(){L.lFrame.elementDepthCount++}function zd(){L.lFrame.elementDepthCount--}function xa(){return L.bindingsEnabled}function $d(){return L.skipHydrationRootTNode!==null}function Gd(n){return L.skipHydrationRootTNode===n}function Wd(){L.skipHydrationRootTNode=null}function A(){return L.lFrame.lView}function pe(){return L.lFrame.tView}function Ia(n){return L.lFrame.contextLView=n,n[De]}function Sa(n){return L.lFrame.contextLView=null,n}function Ae(){let n=qd();for(;n!==null&&n.type===64;)n=n.parent;return n}function qd(){return L.lFrame.currentTNode}function ag(){let n=L.lFrame,t=n.currentTNode;return n.isParent?t:t.parent}function fi(n,t){let e=L.lFrame;e.currentTNode=n,e.isParent=t}function Yd(){return L.lFrame.isParent}function Kd(){L.lFrame.isParent=!1}function lg(){return L.lFrame.contextLView}function Zd(){return md}function io(n){let t=md;return md=n,t}function Xd(){let n=L.lFrame,t=n.bindingRootIndex;return t===-1&&(t=n.bindingRootIndex=n.tView.bindingStartIndex),t}function cg(n){return L.lFrame.bindingIndex=n}function wr(){return L.lFrame.bindingIndex++}function Qd(n){let t=L.lFrame,e=t.bindingIndex;return t.bindingIndex=t.bindingIndex+n,e}function dg(){return L.lFrame.inI18n}function ug(n,t){let e=L.lFrame;e.bindingIndex=e.bindingRootIndex=n,Ma(t)}function fg(){return L.lFrame.currentDirectiveIndex}function Ma(n){L.lFrame.currentDirectiveIndex=n}function hg(n){let t=L.lFrame.currentDirectiveIndex;return t===-1?null:n[t]}function Ta(){return L.lFrame.currentQueryIndex}function ho(n){L.lFrame.currentQueryIndex=n}function ow(n){let t=n[x];return t.type===2?t.declTNode:t.type===1?n[Le]:null}function Jd(n,t,e){if(e&4){let i=t,o=n;for(;i=i.parent,i===null&&!(e&1);)if(i=ow(o),i===null||(o=o[kn],i.type&10))break;if(i===null)return!1;t=i,n=o}let r=L.lFrame=mg();return r.currentTNode=t,r.lView=n,!0}function ka(n){let t=mg(),e=n[x];L.lFrame=t,t.currentTNode=e.firstChild,t.lView=n,t.tView=e,t.contextLView=n,t.bindingIndex=e.bindingStartIndex,t.inI18n=!1}function mg(){let n=L.lFrame,t=n===null?null:n.child;return t===null?pg(n):t}function pg(n){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=t),t}function gg(){let n=L.lFrame;return L.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var eu=gg;function Aa(){let n=gg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function yg(n){return(L.lFrame.contextLView=ng(n,L.lFrame.contextLView))[De]}function un(){return L.lFrame.selectedIndex}function Rn(n){L.lFrame.selectedIndex=n}function mo(){let n=L.lFrame;return Da(n.tView,n.selectedIndex)}function hi(){L.lFrame.currentNamespace=Ld}function Na(){sw()}function sw(){L.lFrame.currentNamespace=null}function tu(){return L.lFrame.currentNamespace}var vg=!0;function Ra(){return vg}function po(n){vg=n}function pd(n,t=null,e=null,r){let i=bg(n,t,e,r);return i.resolveInjectorInitializers(),i}function bg(n,t=null,e=null,r,i=new Set){let o=[e||it,Wp(n)],s;return new hr(o,t||ai(),s||null,i)}var q=class n{static THROW_IF_NOT_FOUND=cr;static NULL=new oi;static create(t,e){if(Array.isArray(t))return pd({name:""},e,t,"");{let r=t.name??"";return pd({name:r},t.parent,t.providers,r)}}static \u0275prov=B({token:n,providedIn:"any",factory:()=>R(lo)});static __NG_ELEMENT_ID__=-1},V=new g(""),Ve=(()=>{class n{static __NG_ELEMENT_ID__=aw;static __NG_ENV_ID__=e=>e}return n})(),aa=class extends Ve{_lView;constructor(t){super(),this._lView=t}get destroyed(){return Dr(this._lView)}onDestroy(t){let e=this._lView;return Ca(e,t),()=>rg(e,t)}};function aw(){return new aa(A())}var _g=!1,Dg=new g(""),Cr=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new rr(!1);debugTaskTracker=u(Dg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new W(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=B({token:n,providedIn:"root",factory:()=>new n})}return n})(),gd=class extends M{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Zp()&&(this.destroyRef=u(Ve,{optional:!0})??void 0,this.pendingTasks=u(Cr,{optional:!0})??void 0)}emit(t){let e=S(null);try{super.next(t)}finally{S(e)}}subscribe(t,e,r){let i=t,o=e||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return t instanceof X&&t.add(a),a}wrapInTimeout(t){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},K=gd;function la(...n){}function nu(n){let t,e;function r(){n=la;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{n(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{n(),r()})),()=>r()}function Eg(n){return queueMicrotask(()=>n()),()=>{n=la}}var ru="isAngularZone",oo=ru+"_ID",lw=0,T=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new K(!1);onMicrotaskEmpty=new K(!1);onStable=new K(!1);onError=new K(!1);constructor(t){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=_g}=t;if(typeof Zone>"u")throw new b(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,uw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ru)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new b(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new b(909,!1)}run(t,e,r){return this._inner.run(t,e,r)}runTask(t,e,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,t,cw,la,la);try{return o.runTask(s,e,r)}finally{o.cancelTask(s)}}runGuarded(t,e,r){return this._inner.runGuarded(t,e,r)}runOutsideAngular(t){return this._outer.run(t)}},cw={};function iu(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function dw(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function t(){nu(()=>{n.callbackScheduled=!1,yd(n),n.isCheckStableRunning=!0,iu(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{t()}):n._outer.run(()=>{t()}),yd(n)}function uw(n){let t=()=>{dw(n)},e=lw++;n._inner=n._inner.fork({name:"angular",properties:{[ru]:!0,[oo]:e,[oo+e]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(fw(l))return r.invokeTask(o,s,a,l);try{return Op(n),r.invokeTask(o,s,a,l)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&t(),Fp(n)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Op(n),r.invoke(o,s,a,l,c)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!hw(l)&&t(),Fp(n)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,yd(n),iu(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function yd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Op(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Fp(n){n._nesting--,iu(n)}var so=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new K;onMicrotaskEmpty=new K;onStable=new K;onError=new K;run(t,e,r){return t.apply(e,r)}runGuarded(t,e,r){return t.apply(e,r)}runOutsideAngular(t){return t()}runTask(t,e,r,i){return t.apply(e,r)}};function fw(n){return wg(n,"__ignore_ng_zone__")}function hw(n){return wg(n,"__scheduler_tick__")}function wg(n,t){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[t]===!0}var Ct=class{_console=console;handleError(t){this._console.error("ERROR",t)}},fn=new g("",{factory:()=>{let n=u(T),t=u(_e),e;return r=>{n.runOutsideAngular(()=>{t.destroyed&&!e?setTimeout(()=>{throw r}):(e??=t.get(Ct),e.handleError(r))})}}}),Cg={provide:gr,useValue:()=>{let n=u(Ct,{optional:!0})},multi:!0},mw=new g("",{factory:()=>{let n=u(V).defaultView;if(!n)return;let t=u(fn),e=o=>{t(o.reason),o.preventDefault()},r=o=>{o.error?t(o.error):t(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{n.addEventListener("unhandledrejection",e),n.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(Ve).onDestroy(()=>{n.removeEventListener("error",r),n.removeEventListener("unhandledrejection",e)})}});function ou(){return ln([Gp(()=>{u(mw)})])}function j(n,t){let[e,r,i]=Vc(n,t?.equal),o=e,s=o[ce];return o.set=r,o.update=i,o.asReadonly=Oa.bind(o),o}function Oa(){let n=this[ce];if(n.readonlyFn===void 0){let t=()=>this();t[ce]=n,n.readonlyFn=t}return n.readonlyFn}var hn=new g("",{factory:()=>pw}),pw="ng";var Fa=new g(""),xr=new g("",{providedIn:"platform",factory:()=>"unknown"}),go=new g(""),mn=new g("",{factory:()=>u(V).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var mi=(()=>{class n{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=gw}return n})();function gw(){return new mi(A(),Ae())}var Lt=class{},yo=new g("",{factory:()=>!0});var su=new g(""),Pa=(()=>{class n{static \u0275prov=B({token:n,providedIn:"root",factory:()=>new vd})}return n})(),vd=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let e=t.zone,r=this.queues.get(e);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let e=t.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[e,r]of this.queues)e===null?t||=this.flushQueue(r):t||=e.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let e=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},ca=class{[ce];constructor(t){this[ce]=t}destroy(){this[ce].destroy()}};function Me(n,t){let e=t?.injector??u(q),r=t?.manualCleanup!==!0?e.get(Ve):null,i,o=e.get(mi,null,{optional:!0}),s=e.get(Lt);return o!==null?(i=bw(o.view,s,n),r instanceof aa&&r._lView===o.view&&(r=null)):i=_w(n,e.get(Pa),s),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new ca(i)}var xg=$(_({},Bc),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let n=io(!1);try{jc(this)}finally{io(n)}},cleanup(){if(!this.cleanupFns?.length)return;let n=S(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],S(n)}}}),yw=$(_({},xg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(rn(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.scheduler.remove(this)}}),vw=$(_({},xg),{consumerMarkedDirty(){this.view[k]|=8192,Er(this.view),this.notifier.notify(13)},destroy(){if(rn(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.view[In]?.delete(this)}});function bw(n,t,e){let r=Object.create(vw);return r.view=n,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=t,r.fn=Ig(r,e),n[In]??=new Set,n[In].add(r),r.consumerMarkedDirty(r),r}function _w(n,t,e){let r=Object.create(yw);return r.fn=Ig(r,n),r.scheduler=t,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Ig(n,t){return()=>{t(e=>(n.cleanupFns??=[]).push(e))}}function $e(n){return typeof n=="function"&&n[ce]!==void 0}var vo=(()=>{class n{internalPendingTasks=u(Cr);scheduler=u(Lt);errorHandler=u(fn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();try{e().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=B({token:n,providedIn:"root",factory:()=>new n})}return n})();function sl(n){return{toString:n}.toString()}var Ga=class{previousValue;currentValue;firstChange;constructor(t,e,r){this.previousValue=t,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}};function dy(n,t,e,r){t!==null?t.applyValueToInputSignal(t,r):n[e]=r}var Be=(()=>{let n=()=>uy;return n.ngInherit=!0,n})();function uy(n){return n.type.prototype.ngOnChanges&&(n.setInput=Fw),Ow}function Ow(){let n=fy(this),t=n?.current;if(t){let e=n.previous;if(e===Tn)n.previous=t;else for(let r in t)e[r]=t[r];n.current=null,this.ngOnChanges(t)}}function Fw(n,t,e,r,i){let o=this.declaredInputs[r],s=fy(n)||Pw(n,{previous:Tn,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Ga(c&&c.currentValue,e,l===Tn),dy(n,t,i,e)}var yu="__ngSimpleChanges__";function fy(n){return Object.hasOwn(n,yu)&&n[yu]||null}function Pw(n,t){return n[yu]=t}var Sg=[];var oe=function(n,t=null,e){for(let r=0;r<Sg.length;r++){let i=Sg[r];i(n,t,e)}},J=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(J||{});function Lw(n,t,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=t.type.prototype;if(r){let s=uy(t);(e.preOrderHooks??=[]).push(n,s),(e.preOrderCheckHooks??=[]).push(n,s)}i&&(e.preOrderHooks??=[]).push(0-n,i),o&&((e.preOrderHooks??=[]).push(n,o),(e.preOrderCheckHooks??=[]).push(n,o))}function hy(n,t){for(let e=t.directiveStart,r=t.directiveEnd;e<r;e++){let o=n.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(n.contentHooks??=[]).push(-e,s),a&&((n.contentHooks??=[]).push(e,a),(n.contentCheckHooks??=[]).push(e,a)),l&&(n.viewHooks??=[]).push(-e,l),c&&((n.viewHooks??=[]).push(e,c),(n.viewCheckHooks??=[]).push(e,c)),d!=null&&(n.destroyHooks??=[]).push(e,d)}}function Ha(n,t,e){my(n,t,3,e)}function Ua(n,t,e,r){(n[k]&3)===e&&my(n,t,e,r)}function au(n,t){let e=n[k];(e&3)===t&&(e&=16383,e+=1,n[k]=e)}function my(n,t,e,r){let i=r!==void 0?n[vr]&65535:0,o=r??-1,s=t.length-1,a=0;for(let l=i;l<s;l++)if(typeof t[l+1]=="number"){if(a=t[l],r!=null&&a>=r)break}else t[l]<0&&(n[vr]+=65536),(a<o||o==-1)&&(Vw(n,e,t,l),n[vr]=(n[vr]&4294901760)+l+2),l++}function Mg(n,t){oe(J.LifecycleHookStart,n,t);let e=S(null);try{t.call(n)}finally{S(e),oe(J.LifecycleHookEnd,n,t)}}function Vw(n,t,e,r){let i=e[r]<0,o=e[r+1],s=i?-e[r]:e[r],a=n[s];i?n[k]>>14<n[vr]>>16&&(n[k]&3)===t&&(n[k]+=16384,Mg(a,o)):Mg(a,o)}var gi=-1,Ir=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,e,r,i){this.factory=t,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function Bw(n){return(n.flags&8)!==0}function jw(n){return(n.flags&16)!==0}function Hw(n,t,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],s=e[r++],a=e[r++];n.setAttribute(t,s,a,o)}else{let o=i,s=e[++r];Uw(o)?n.setProperty(t,o,s):n.setAttribute(t,o,s),r++}}return r}function py(n){return n===3||n===4||n===6}function Uw(n){return n.charCodeAt(0)===64}function vi(n,t){if(!(t===null||t.length===0))if(n===null||n.length===0)n=t.slice();else{let e=-1;for(let r=0;r<t.length;r++){let i=t[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?Tg(n,e,i,null,t[++r]):Tg(n,e,i,null,null))}}return n}function Tg(n,t,e,r,i){let o=0,s=n.length;if(t===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===e){i!==null&&(n[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(n.splice(s,0,t),o=s+1),n.splice(o++,0,e),i!==null&&n.splice(o++,0,i)}function gy(n){return n!==gi}function Wa(n){return n&32767}function zw(n){return n>>16}function qa(n,t){let e=zw(n),r=t;for(;e>0;)r=r[kn],e--;return r}var vu=!0;function kg(n){let t=vu;return vu=n,t}var $w=256,yy=$w-1,vy=5,Gw=0,zt={};function Ww(n,t,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:e.hasOwnProperty(pr)&&(r=e[pr]),r==null&&(r=e[pr]=Gw++);let i=r&yy,o=1<<i;t.data[n+(i>>vy)]|=o}function Ya(n,t){let e=by(n,t);if(e!==-1)return e;let r=t[x];r.firstCreatePass&&(n.injectorIndex=t.length,lu(r.data,n),lu(t,null),lu(r.blueprint,null));let i=Qu(n,t),o=n.injectorIndex;if(gy(i)){let s=Wa(i),a=qa(i,t),l=a[x].data;for(let c=0;c<8;c++)t[o+c]=a[s+c]|l[s+c]}return t[o+8]=i,o}function lu(n,t){n.push(0,0,0,0,0,0,0,0,t)}function by(n,t){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||t[n.injectorIndex+8]===null?-1:n.injectorIndex}function Qu(n,t){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let e=0,r=null,i=t;for(;i!==null;){if(r=Cy(i),r===null)return gi;if(e++,i=i[kn],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return gi}function bu(n,t,e){Ww(n,t,e)}function qw(n,t){if(t==="class")return n.classes;if(t==="style")return n.styles;let e=n.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(py(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===t)return e[i+1];i=i+2}}}return null}function _y(n,t,e){if(e&8||n!==void 0)return n;ga(t,"NodeInjector")}function Dy(n,t,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=n[Vt],o=Ze(void 0);try{return i?i.get(t,r,e&8):Sd(t,r,e&8)}finally{Ze(o)}}return _y(r,t,e)}function Ey(n,t,e,r=0,i){if(n!==null){if(t[k]&2048&&!(r&2)){let s=Xw(n,t,e,r,zt);if(s!==zt)return s}let o=wy(n,t,e,r,zt);if(o!==zt)return o}return Dy(t,e,r,i)}function wy(n,t,e,r,i){let o=Kw(e);if(typeof o=="function"){if(!Jd(t,n,r))return r&1?_y(i,e,r):Dy(t,e,r,i);try{let s;if(s=o(r),s==null&&!(r&8))ga(e);else return s}finally{eu()}}else if(typeof o=="number"){let s=null,a=by(n,t),l=gi,c=r&1?t[Ue][Le]:null;for((a===-1||r&4)&&(l=a===-1?Qu(n,t):t[a+8],l===gi||!Ng(r,!1)?a=-1:(s=t[x],a=Wa(l),t=qa(l,t)));a!==-1;){let d=t[x];if(Ag(o,a,d.data)){let f=Yw(a,t,e,s,r,c);if(f!==zt)return f}l=t[a+8],l!==gi&&Ng(r,t[x].data[a+8]===c)&&Ag(o,a,t)?(s=d,a=Wa(l),t=qa(l,t)):a=-1}}return i}function Yw(n,t,e,r,i,o){let s=t[x],a=s.data[n+8],l=r==null?dn(a)&&vu:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=za(a,s,e,l,c);return d!==null?Eo(t,s,d,a,i):zt}function za(n,t,e,r,i){let o=n.providerIndexes,s=t.data,a=o&1048575,l=n.directiveStart,c=n.directiveEnd,d=o>>20,f=r?a:a+d,m=i?a+d:c;for(let h=f;h<m;h++){let p=s[h];if(h<l&&e===p||h>=l&&p.type===e)return h}if(i){let h=s[l];if(h&&Ut(h)&&h.type===e)return l}return null}function Eo(n,t,e,r,i){let o=n[e],s=t.data;if(o instanceof Ir){let a=o;if(a.resolving)throw Id("");let l=kg(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?Ze(a.injectImpl):null,m=Jd(n,r,0);try{o=n[e]=a.factory(void 0,i,s,n,r),t.firstCreatePass&&e>=r.directiveStart&&Lw(e,s[e],t)}finally{f!==null&&Ze(f),kg(l),a.resolving=!1,eu()}}return o}function Kw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let t=n.hasOwnProperty(pr)?n[pr]:void 0;return typeof t=="number"?t>=0?t&yy:Zw:t}function Ag(n,t,e){let r=1<<n;return!!(e[t+(n>>vy)]&r)}function Ng(n,t){return!(n&2)&&!(n&1&&t)}var On=class{_tNode;_lView;constructor(t,e){this._tNode=t,this._lView=e}get(t,e,r){return Ey(this._tNode,this._lView,t,dr(r),e)}};function Zw(){return new On(Ae(),A())}function gn(n){return sl(()=>{let t=n.prototype.constructor,e=t[ro]||_u(t),r=Object.prototype,i=Object.getPrototypeOf(n.prototype).constructor;for(;i&&i!==r;){let o=i[ro]||_u(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function _u(n){return bd(n)?()=>{let t=_u(Oe(n));return t&&t()}:ur(n)}function Xw(n,t,e,r,i){let o=n,s=t;for(;o!==null&&s!==null&&s[k]&2048&&!ui(s);){let a=wy(o,s,e,r|2,zt);if(a!==zt)return a;let l=o.parent;if(!l){let c=s[Od];if(c){let d=c.get(e,zt,r&-5);if(d!==zt)return d}l=Cy(s),s=s[kn]}o=l}return i}function Cy(n){let t=n[x],e=t.type;return e===2?t.declTNode:e===1?n[Le]:null}function Ju(n){return qw(Ae(),n)}function O(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function Qw(){return wi(Ae(),A())}function wi(n,t){return new N(ct(n,t))}var N=(()=>{class n{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=Qw}return n})();function xy(n){return n instanceof N?n.nativeElement:n}function Jw(){return this._results[Symbol.iterator]()}var Sr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new M}constructor(t=!1){this._emitDistinctChangesOnly=t}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){this.dirty=!1;let r=Up(t);(this._changesDetected=!Hp(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Jw};function Iy(n){return(n.flags&128)===128}var ef=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(ef||{}),Sy=new Map,eC=0;function tC(){return eC++}function nC(n){Sy.set(n[jt],n)}function Du(n){Sy.delete(n[jt])}var Rg="__ngContext__";function bi(n,t){cn(t)?(n[Rg]=t[jt],nC(t)):n[Rg]=t}function My(n){return ky(n[ci])}function Ty(n){return ky(n[st])}function ky(n){for(;n!==null&&!at(n);)n=n[st];return n}var Eu;function tf(n){Eu=n}function nf(){if(Eu!==void 0)return Eu;if(typeof document<"u")return document;throw new b(210,!1)}var Ay="r";var Ny="di";var Ry=!1,Oy=new g("",{factory:()=>Ry});var Og=new WeakMap;function rC(n,t){if(n==null||typeof n!="object")return;let e=Og.get(n);e||(e=new WeakSet,Og.set(n,e)),e.add(t)}var iC=(n,t,e,r)=>{};function oC(n,t,e,r){iC(n,t,e,r)}function al(n){return(n.flags&32)===32}var sC=()=>null;function Fy(n,t,e=!1){return sC(n,t,e)}function Py(n,t){let e=n.contentQueries;if(e!==null){let r=S(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],s=e[i+1];if(s!==-1){let a=n.data[s];ho(o),a.contentQueries(2,t[s],s)}}}finally{S(r)}}}function wu(n,t,e){ho(0);let r=S(null);try{t(n,e)}finally{S(r)}}function rf(n,t,e){if(Pd(t)){let r=S(null);try{let i=t.directiveStart,o=t.directiveEnd;for(let s=i;s<o;s++){let a=n.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{S(r)}}}var kt=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(kt||{});var La;function aC(){if(La===void 0&&(La=null,Mn.trustedTypes))try{La=Mn.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return La}function ll(n){return aC()?.createHTML(n)||n}var Va;function lC(){if(Va===void 0&&(Va=null,Mn.trustedTypes))try{Va=Mn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Va}function Fg(n){return lC()?.createHTML(n)||n}var pn=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${da})`}},Cu=class extends pn{getTypeName(){return"HTML"}},xu=class extends pn{getTypeName(){return"Style"}},Iu=class extends pn{getTypeName(){return"Script"}},Su=class extends pn{getTypeName(){return"URL"}},Mu=class extends pn{getTypeName(){return"ResourceURL"}};function Wt(n){return n instanceof pn?n.changingThisBreaksApplicationSecurity:n}function Ln(n,t){let e=Ly(n);if(e!=null&&e!==t){if(e==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${e} (see ${da})`)}return e===t}function Ly(n){return n instanceof pn&&n.getTypeName()||null}function of(n){return new Cu(n)}function sf(n){return new xu(n)}function af(n){return new Iu(n)}function lf(n){return new Su(n)}function cf(n){return new Mu(n)}function cC(n){let t=new ku(n);return dC()?new Tu(t):t}var Tu=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let e=new window.DOMParser().parseFromString(ll(t),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(t):(e.firstChild?.remove(),e)}catch{return null}}},ku=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let e=this.inertDocument.createElement("template");return e.innerHTML=ll(t),e}};function dC(){try{return!!new window.DOMParser().parseFromString(ll(""),"text/html")}catch{return!1}}var uC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function cl(n){return n=String(n),n.match(uC)?n:"unsafe:"+n}function yn(n){let t={};for(let e of n.split(","))t[e]=!0;return t}function To(...n){let t={};for(let e of n)for(let r in e)e.hasOwnProperty(r)&&(t[r]=!0);return t}var Vy=yn("area,br,col,hr,img,wbr"),By=yn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),jy=yn("rp,rt"),fC=To(jy,By),hC=To(By,yn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),mC=To(jy,yn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Pg=To(Vy,hC,mC,fC),Hy=yn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),pC=yn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),gC=yn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),yC=To(Hy,pC,gC),vC=yn("script,style,template"),Au=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let e=t.firstChild,r=!0,i=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?r=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,r&&e.firstChild){i.push(e),e=DC(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=_C(e);if(o){e=o;break}e=i.pop()}}return this.buf.join("")}startElement(t){let e=Lg(t).toLowerCase();if(!Pg.hasOwnProperty(e))return this.sanitizedSomething=!0,!vC.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let r=t.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!yC.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;Hy[a]&&(l=cl(l)),this.buf.push(" ",s,'="',Vg(l),'"')}return this.buf.push(">"),!0}endElement(t){let e=Lg(t).toLowerCase();Pg.hasOwnProperty(e)&&!Vy.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(t){this.buf.push(Vg(t))}};function bC(n,t){return(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function _C(n){let t=n.nextSibling;if(t&&n!==t.previousSibling)throw Uy(t);return t}function DC(n){let t=n.firstChild;if(t&&bC(n,t))throw Uy(t);return t}function Lg(n){let t=n.nodeName;return typeof t=="string"?t:"FORM"}function Uy(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var EC=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,wC=/([^\#-~ |!])/g;function Vg(n){return n.replace(/&/g,"&amp;").replace(EC,function(t){let e=t.charCodeAt(0),r=t.charCodeAt(1);return"&#"+((e-55296)*1024+(r-56320)+65536)+";"}).replace(wC,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ba;function dl(n,t){let e=null;try{Ba=Ba||cC(n);let r=t?String(t):"";e=Ba.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=e.innerHTML,e=Ba.getInertBodyElement(r)}while(r!==o);let a=new Au().sanitizeChildren(Bg(e)||e);return ll(a)}finally{if(e){let r=Bg(e)||e;for(;r.firstChild;)r.firstChild.remove()}}}function Bg(n){return"content"in n&&CC(n)?n.content:null}function CC(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var xC=/>|->|<!--|-->|--!>|<!-$/g,IC=/(<|>)/g,SC="\u200B$1\u200B";function MC(n){return n.replace(xC,t=>t.replace(IC,SC))}function TC(n,t){return n.createText(t)}function kC(n,t,e){n.setValue(t,e)}function AC(n,t){return n.createComment(MC(t))}function zy(n,t,e){return n.createElement(t,e)}function Ka(n,t,e,r,i){n.insertBefore(t,e,r,i)}function $y(n,t,e){n.appendChild(t,e)}function jg(n,t,e,r,i){r!==null?Ka(n,t,e,r,i):$y(n,t,e)}function Gy(n,t,e,r){n.removeChild(null,t,e,r)}function NC(n,t,e){n.setAttribute(t,"style",e)}function RC(n,t,e){e===""?n.removeAttribute(t,"class"):n.setAttribute(t,"class",e)}function Wy(n,t,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&Hw(n,t,r),i!==null&&RC(n,t,i),o!==null&&NC(n,t,o)}var ht=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(ht||{});function ko(n){let t=OC();return t?Fg(t.sanitize(ht.HTML,n)||""):Ln(n,"HTML")?Fg(Wt(n)):dl(nf(),pa(n))}function OC(){let n=A();return n&&n[St].sanitizer}function FC(n,t,e){let r=n.length;for(;;){let i=n.indexOf(t,e);if(i===-1)return i;if(i===0||n.charCodeAt(i-1)<=32){let o=t.length;if(i+o===r||n.charCodeAt(i+o)<=32)return i}e=i+1}}var qy="ng-template";function PC(n,t,e,r){let i=0;if(r){for(;i<t.length&&typeof t[i]=="string";i+=2)if(t[i]==="class"&&FC(t[i+1].toLowerCase(),e,0)!==-1)return!0}else if(df(n))return!1;if(i=t.indexOf(1,i),i>-1){let o;for(;++i<t.length&&typeof(o=t[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function df(n){return n.type===4&&n.value!==qy}function LC(n,t,e){let r=n.type===4&&!e?qy:n.value;return t===r}function VC(n,t,e){let r=4,i=n.attrs,o=i!==null?HC(i):0,s=!1;for(let a=0;a<t.length;a++){let l=t[a];if(typeof l=="number"){if(!s&&!Mt(r)&&!Mt(l))return!1;if(s&&Mt(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!LC(n,l,e)||l===""&&t.length===1){if(Mt(r))return!1;s=!0}}else if(r&8){if(i===null||!PC(n,i,l,e)){if(Mt(r))return!1;s=!0}}else{let c=t[++a],d=BC(l,i,df(n),e);if(d===-1){if(Mt(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(Mt(r))return!1;s=!0}}}}return Mt(r)||s}function Mt(n){return(n&1)===0}function BC(n,t,e,r){if(t===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<t.length;){let s=t[i];if(s===n)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=t[++i];for(;typeof a=="string";)a=t[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return UC(t,n)}function Yy(n,t,e=!1){for(let r=0;r<t.length;r++)if(VC(n,t[r],e))return!0;return!1}function jC(n){let t=n.attrs;if(t!=null){let e=t.indexOf(5);if((e&1)===0)return t[e+1]}return null}function HC(n){for(let t=0;t<n.length;t++){let e=n[t];if(py(e))return t}return n.length}function UC(n,t){let e=n.indexOf(4);if(e>-1)for(e++;e<n.length;){let r=n[e];if(typeof r=="number")return-1;if(r===t)return e;e++}return-1}function zC(n,t){e:for(let e=0;e<t.length;e++){let r=t[e];if(n.length===r.length){for(let i=0;i<n.length;i++)if(n[i]!==r[i])continue e;return!0}}return!1}function Hg(n,t){return n?":not("+t.trim()+")":t}function $C(n){let t=n[0],e=1,r=2,i="",o=!1;for(;e<n.length;){let s=n[e];if(typeof s=="string")if(r&2){let a=n[++e];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!Mt(s)&&(t+=Hg(o,i),i=""),r=s,o=o||!Mt(r);e++}return i!==""&&(t+=Hg(o,i)),t}function GC(n){return n.map($C).join(",")}function WC(n){let t=[],e=[],r=1,i=2;for(;r<n.length;){let o=n[r];if(typeof o=="string")i===2?o!==""&&t.push(o,n[++r]):i===8&&e.push(o);else{if(!Mt(i))break;i=o}r++}return e.length&&t.push(1,...e),t}var mt={},$t=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})($t||{}),qC;function uf(n,t){return qC(n,t)}var zL=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Nu=new WeakMap;function Ky(n){return n?n[kn]??n:null}var bo=new WeakSet;function YC(n,t,e){let r=Nu.get(n);if(!r||r.length===0)return;let i=t.parentNode,o=t.previousSibling,s=Ky(e);for(let a=r.length-1;a>=0;a--){let{el:l,declarationView:c}=r[a],d=l.parentNode;l===t?(r.splice(a,1),bo.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(s===null||c===null||s===c)&&(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function KC(n,t,e){let r=Ky(e),i=Nu.get(n);i?i.some(o=>o.el===t)||i.push({el:t,declarationView:r}):Nu.set(n,[{el:t,declarationView:r}])}var Fn=new Set,ul=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(ul||{}),qt=new g(""),Ug=new Set;function vn(n){Ug.has(n)||(Ug.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var fl=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=B({token:n,providedIn:"root",factory:()=>new n})}return n})(),ff=[0,1,2,3],hf=(()=>{class n{ngZone=u(T);scheduler=u(Lt);errorHandler=u(Ct,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(qt,{optional:!0})}execute(){let e=this.sequences.size>0;e&&oe(J.AfterRenderHooksStart),this.executing=!0;for(let r of ff)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&oe(J.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[br]??=[]).push(e),Er(r),r[k]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(ul.AFTER_NEXT_RENDER,e):e()}static \u0275prov=B({token:n,providedIn:"root",factory:()=>new n})}return n})(),wo=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,e,r,i,o,s=null){this.impl=t,this.hooks=e,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[br];t&&(this.view[br]=t.filter(e=>e!==this))}};function Ar(n,t){let e=t?.injector??u(q);return vn("NgAfterNextRender"),XC(n,e,t,!0)}function ZC(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function XC(n,t,e,r){let i=t.get(fl);i.impl??=t.get(hf);let o=t.get(qt,null,{optional:!0}),s=e?.manualCleanup!==!0?t.get(Ve):null,a=t.get(mi,null,{optional:!0}),l=new wo(i.impl,ZC(n),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var mf=new g("",{factory:()=>{let n=u(_e),t=new Set;return n.onDestroy(()=>t.clear()),{queue:t,isScheduled:!1,scheduler:null,injector:n}}});function Zy(n,t,e){let r=n.get(mf);if(Array.isArray(t))for(let i of t)r.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);else r.queue.add(t),e?.detachedLeaveAnimationFns?.push(t);r.scheduler&&r.scheduler(n)}function QC(n,t){let e=n.get(mf);if(Array.isArray(t))for(let r of t)e.queue.delete(r);else e.queue.delete(t)}function JC(n,t){let e=n.get(mf);if(t.detachedLeaveAnimationFns){for(let r of t.detachedLeaveAnimationFns)e.queue.delete(r);t.detachedLeaveAnimationFns=void 0}}function ex(n,t){for(let[e,r]of t)Zy(n,r.animateFns)}function zg(n,t,e,r){let i=n?.[Ht]?.enter;t!==null&&i&&i.has(e.index)&&ex(r,i)}function $g(n,t,e,r){try{e.get(lo)}catch{return r(!1)}let i=n?.[Ht];i?.enter?.has(t.index)&&QC(e,i.enter.get(t.index).animateFns);let o=tx(n,t,i);if(o.size===0){let s=!1;if(n){let a=[];hl(n,t,a),s=a.length>0}if(!s)return r(!1)}n&&Fn.add(n[jt]),Zy(e,()=>nx(n,t,i||void 0,o,r),i||void 0)}function tx(n,t,e){let r=new Map,i=e?.leave;if(i&&i.has(t.index)&&r.set(t.index,i.get(t.index)),n&&i)for(let[o,s]of i){if(r.has(o))continue;let l=n[x].data[o].parent;for(;l;){if(l===t){r.set(o,s);break}l=l.parent}}return r}function nx(n,t,e,r,i){let o=[];if(e&&e.leave)for(let[s]of r){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let l of a.animateFns){let{promise:c}=l();o.push(c)}e.detachedLeaveAnimationFns=void 0}if(n&&hl(n,t,o),o.length>0){let s=e||n?.[Ht];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),ix(n,s.running,i)}else Promise.allSettled(o).then(()=>{n&&Fn.delete(n[jt]),i(!0)})}else n&&Fn.delete(n[jt]),i(!1)}function hl(n,t,e){if(t.type&12){let i=n[t.index];if(at(i))for(let o=me;o<i.length;o++){let s=i[o];s[x].type===2&&rx(s,e)}}let r=t.child;for(;r;)hl(n,r,e),r=r.next}function rx(n,t){let e=n[Ht];if(e&&e.leave)for(let i of e.leave.values())for(let o of i.animateFns){let{promise:s}=o();t.push(s)}let r=n[x].firstChild;for(;r;)hl(n,r,t),r=r.next}function ix(n,t,e){t.then(()=>{n[Ht]?.running===t&&(n[Ht].running=void 0,Fn.delete(n[jt])),e(!0)})}function pi(n,t,e,r,i,o,s,a){if(i!=null){let l,c=!1;at(i)?l=i:cn(i)&&(c=!0,i=i[It]);let d=lt(i);n===0&&r!==null?(zg(a,r,o,e),s==null?$y(t,r,d):Ka(t,r,d,s||null,!0)):n===1&&r!==null?(zg(a,r,o,e),Ka(t,r,d,s||null,!0),YC(o,d,a)):n===2?(a?.[Ht]?.leave?.has(o.index)&&KC(o,d,a),bo.delete(d),$g(a,o,e,f=>{if(bo.has(d)){bo.delete(d);return}Gy(t,d,c,f)})):n===3&&(bo.delete(d),$g(a,o,e,()=>{t.destroyNode(d)})),l!=null&&mx(t,n,e,l,o,r,s)}}function ox(n,t){Xy(n,t),t[It]=null,t[Le]=null}function sx(n,t,e,r,i,o){r[It]=i,r[Le]=t,pl(n,r,e,1,i,o)}function Xy(n,t){t[St].changeDetectionScheduler?.notify(9),pl(n,t,t[le],2,null,null)}function ax(n){let t=n[ci];if(!t)return cu(n[x],n);for(;t;){let e=null;if(cn(t))e=t[ci];else{let r=t[me];r&&(e=r)}if(!e){for(;t&&!t[st]&&t!==n;)cn(t)&&cu(t[x],t),t=t[Se];t===null&&(t=n),cn(t)&&cu(t[x],t),e=t&&t[st]}t=e}}function pf(n,t){let e=n[_r],r=e.indexOf(t);e.splice(r,1)}function ml(n,t){if(Dr(t))return;let e=t[le];e.destroyNode&&pl(n,t,e,3,null,null),ax(t)}function cu(n,t){if(Dr(t))return;let e=S(null);try{t[k]&=-129,t[k]|=256,t[Xe]&&rn(t[Xe]),cx(n,t),lx(n,t),t[x].type===1&&t[le].destroy();let r=t[An];if(r!==null&&at(t[Se])){r!==t[Se]&&pf(r,t);let i=t[Bt];i!==null&&i.detachView(n)}Du(t)}finally{S(e)}}function lx(n,t){let e=n.cleanup,r=t[li];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[e[s+1]];e[s].call(a)}r!==null&&(t[li]=null);let i=t[sn];if(i!==null){t[sn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=t[In];if(o!==null){t[In]=null;for(let s of o)s.destroy()}}function cx(n,t){let e;if(n!=null&&(e=n.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=t[e[r]];if(!(i instanceof Ir)){let o=e[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];oe(J.LifecycleHookStart,a,l);try{l.call(a)}finally{oe(J.LifecycleHookEnd,a,l)}}else{oe(J.LifecycleHookStart,i,o);try{o.call(i)}finally{oe(J.LifecycleHookEnd,i,o)}}}}}function Qy(n,t,e){return dx(n,t.parent,e)}function dx(n,t,e){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return e[It];if(dn(r)){let{encapsulation:i}=n.data[r.directiveStart+r.componentOffset];if(i===kt.None||i===kt.Emulated)return null}return ct(r,e)}function Jy(n,t,e){return fx(n,t,e)}function ux(n,t,e){return n.type&40?ct(n,e):null}var fx=ux,Gg;function gf(n,t,e,r){let i=Qy(n,r,t),o=t[le],s=r.parent||t[Le],a=Jy(s,r,t);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)jg(o,i,e[l],a,!1);else jg(o,i,e,a,!1);Gg!==void 0&&Gg(o,r,t,e,i)}function _o(n,t){if(t!==null){let e=t.type;if(e&3)return ct(t,n);if(e&4)return Ru(-1,n[t.index]);if(e&8){let r=t.child;if(r!==null)return _o(n,r);{let i=n[t.index];return at(i)?Ru(-1,i):lt(i)}}else{if(e&128)return _o(n,t.next);if(e&32)return uf(t,n)()||lt(n[t.index]);{let r=ev(n,t);if(r!==null){if(Array.isArray(r))return r[0];let i=an(n[Ue]);return _o(i,r)}else return _o(n,t.next)}}}return null}function ev(n,t){if(t!==null){let r=n[Ue][Le],i=t.projection;return r.projection[i]}return null}function Ru(n,t){let e=me+n+1;if(e<t.length){let r=t[e],i=r[x].firstChild;if(i!==null)return _o(r,i)}return t[Nn]}function yf(n,t,e,r,i,o,s){for(;e!=null;){let a=r[Vt];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(s&&t===0&&(l&&bi(lt(l),r),e.flags|=2),!al(e))if(c&8)yf(n,t,e.child,r,i,o,!1),pi(t,n,a,i,l,e,o,r);else if(c&32){let d=uf(e,r),f;for(;f=d();)pi(t,n,a,i,f,e,o,r);pi(t,n,a,i,l,e,o,r)}else c&16?tv(n,t,r,e,i,o):pi(t,n,a,i,l,e,o,r);e=s?e.projectionNext:e.next}}function pl(n,t,e,r,i,o){yf(e,r,n.firstChild,t,i,o,!1)}function hx(n,t,e){let r=t[le],i=Qy(n,e,t),o=e.parent||t[Le],s=Jy(o,e,t);tv(r,0,t,e,i,s)}function tv(n,t,e,r,i,o){let s=e[Ue],l=s[Le].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];pi(t,n,e[Vt],i,d,r,o,e)}else{let c=l,d=s[Se];Iy(r)&&(c.flags|=128),yf(n,t,c,d,i,o,!0)}}function mx(n,t,e,r,i,o,s){let a=r[Nn],l=lt(r);a!==l&&pi(t,n,e,o,a,i,s);for(let c=me;c<r.length;c++){let d=r[c];pl(d[x],d,n,t,o,a)}}function px(n,t,e,r,i){if(t)i?n.addClass(e,r):n.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:$t.DashCase;i==null?n.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=$t.Important),n.setStyle(e,r,i,o))}}function vf(n,t,e,r,i,o,s,a,l,c,d){let f=ve+r,m=f+i,h=gx(f,m),p=typeof c=="function"?c():c;return h[x]={type:n,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:t,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1,ssrId:d}}function gx(n,t){let e=[];for(let r=0;r<t;r++)e.push(r<n?null:mt);return e}function yx(n){let t=n.tView;return t===null||t.incompleteFirstPass?n.tView=vf(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):t}function bf(n,t,e,r,i,o,s,a,l,c,d){let f=t.blueprint.slice();return f[It]=i,f[k]=r|4|128|8|64|1024,(c!==null||n&&n[k]&2048)&&(f[k]|=2048),Bd(f),f[Se]=f[kn]=n,f[De]=e,f[St]=s||n&&n[St],f[le]=a||n&&n[le],f[Vt]=l||n&&n[Vt]||null,f[Le]=o,f[jt]=tC(),f[yr]=d,f[Od]=c,f[Ue]=t.type==2?n[Ue]:f,f}function vx(n,t,e){let r=ct(t,n),i=yx(e),o=n[St].rendererFactory,s=_f(n,bf(n,i,null,nv(e),r,t,null,o.createRenderer(r,e),null,null,null));return n[t.index]=s}function nv(n){let t=16;return n.signals?t=4096:n.onPush&&(t=64),t}function rv(n,t,e,r){if(e===0)return-1;let i=t.length;for(let o=0;o<e;o++)t.push(r),n.blueprint.push(r),n.data.push(null);return i}function _f(n,t){return n[ci]?n[Rd][st]=t:n[ci]=t,n[Rd]=t,t}function w(n=1){iv(pe(),A(),un()+n,!1)}function iv(n,t,e,r){if(!r)if((t[k]&3)===3){let o=n.preOrderCheckHooks;o!==null&&Ha(t,o,e)}else{let o=n.preOrderHooks;o!==null&&Ua(t,o,0,e)}Rn(e)}var gl=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(gl||{});function Mr(n,t,e,r){let i=S(null);try{let[o,s,a]=n.inputs[e],l=null;(s&gl.SignalBased)!==0&&(l=t[o][ce]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(t,r)),n.setInput!==null?n.setInput(t,l,r,e,o):dy(t,l,o,r)}finally{S(i)}}function ov(n,t,e,r,i){let o=un(),s=r&2;try{Rn(-1),s&&t.length>ve&&iv(n,t,ve,!1);let a=s?J.TemplateUpdateStart:J.TemplateCreateStart;oe(a,i,e),e(r,i)}finally{Rn(o);let a=s?J.TemplateUpdateEnd:J.TemplateCreateEnd;oe(a,i,e)}}function yl(n,t,e){xx(n,t,e),(e.flags&64)===64&&Ix(n,t,e)}function Ao(n,t,e=ct){let r=t.localNames;if(r!==null){let i=t.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?e(t,n):n[s];n[i++]=a}}}function bx(n,t,e,r){let o=r.get(Oy,Ry)||e===kt.ShadowDom||e===kt.ExperimentalIsolatedShadowDom,s=n.selectRootElement(t,o);if(s.tagName.toLowerCase()==="script")throw new b(905,!1);return _x(s),s}function _x(n){Dx(n)}var Dx=()=>null;function Ex(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function wx(n,t,e,r,i,o){let s=t[x];if(Cf(n,s,t,e,r)){dn(n)&&Cx(t,n.index);return}n.type&3&&(e=Ex(e)),sv(n,t,e,r,i,o)}function sv(n,t,e,r,i,o){if(n.type&3){let s=ct(n,t);r=o!=null?o(r,n.value||"",e):r,i.setProperty(s,e,r)}else n.type&12}function Cx(n,t){let e=dt(t,n);e[k]&16||(e[k]|=64)}function xx(n,t,e){let r=e.directiveStart,i=e.directiveEnd;dn(e)&&vx(t,e,n.data[r+e.componentOffset]),n.firstCreatePass||Ya(e,t);let o=e.initialInputs;for(let s=r;s<i;s++){let a=n.data[s],l=Eo(t,n,s,e);if(bi(l,t),o!==null&&kx(t,s-r,l,a,e,o),Ut(a)){let c=dt(e.index,t);c[De]=Eo(t,n,s,e)}}}function Ix(n,t,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,s=fg();try{Rn(o);for(let a=r;a<i;a++){let l=n.data[a],c=t[a];Ma(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&Sx(l,c)}}finally{Rn(-1),Ma(s)}}function Sx(n,t){n.hostBindings!==null&&n.hostBindings(1,t)}function Df(n,t){let e=n.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];Yy(t,o.selectors,!1)&&(r??=[],Ut(o)?r.unshift(o):r.push(o))}return r}function Mx(n,t,e,r,i,o){let s=ct(n,t);Tx(t[le],s,o,n.value,e,r,i)}function Tx(n,t,e,r,i,o,s){if(o==null)s?.(o,r||"",i),n.removeAttribute(t,i,e);else{let a=s==null?pa(o):s(o,r||"",i);n.setAttribute(t,i,a,e)}}function kx(n,t,e,r,i,o){let s=o[t];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Mr(r,e,l,c)}}function Ef(n,t,e,r,i){let o=ve+e,s=t[x],a=i(s,t,n,r,e);t[o]=a,fi(n,!0);let l=n.type===2;return l?(Wy(t[le],a,n),(og()===0||di(n))&&bi(a,t),sg()):bi(a,t),Ra()&&(!l||!al(n))&&gf(s,t,a,n),n}function wf(n){let t=n;return Yd()?Kd():(t=t.parent,fi(t,!1)),t}function Ax(n,t){let e=n[Vt];if(!e)return;let r;try{r=e.get(fn,null)}catch{r=null}r?.(t)}function Cf(n,t,e,r,i){let o=n.inputs?.[r],s=n.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=t.data[c];Mr(f,e[c],d,i),a=!0}if(o)for(let l of o){let c=e[l],d=t.data[l];Mr(d,c,r,i),a=!0}return a}function Nx(n,t,e,r,i,o){let s=null,a=null,l=null,c=!1,d=n.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,a,l]=d,a!==null&&l!==null&&n.hostDirectiveInputs?.hasOwnProperty(i)){let f=n.hostDirectiveInputs[i];for(let m=0;m<f.length;m+=2){let h=f[m];if(h>=a&&h<=l){let p=t.data[h],D=f[m+1];Mr(p,e[h],D,o),c=!0}else if(h>l)break}}return s!==null&&r.inputs.hasOwnProperty(i)&&(Mr(r,e[s],i,o),c=!0),c}function Rx(n,t){let e=dt(t,n),r=e[x];Ox(r,e);let i=e[It];i!==null&&e[yr]===null&&(e[yr]=Fy(i,e[Vt])),oe(J.ComponentStart);try{xf(r,e,e[De])}finally{oe(J.ComponentEnd,e[De])}}function Ox(n,t){for(let e=t.length;e<n.blueprint.length;e++)t.push(n.blueprint[e])}function xf(n,t,e){ka(t);try{let r=n.viewQuery;r!==null&&wu(1,r,e);let i=n.template;i!==null&&ov(n,t,i,1,e),n.firstCreatePass&&(n.firstCreatePass=!1),t[Bt]?.finishViewCreation(n),n.staticContentQueries&&Py(n,t),n.staticViewQueries&&wu(2,n.viewQuery,e);let o=n.components;o!==null&&Fx(t,o)}catch(r){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),r}finally{t[k]&=-5,Aa()}}function Fx(n,t){for(let e=0;e<t.length;e++)Rx(n,t[e])}function No(n,t,e,r){let i=S(null);try{let o=t.tView,a=n[k]&4096?4096:16,l=bf(n,o,e,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=n[t.index];l[An]=c;let d=n[Bt];return d!==null&&(l[Bt]=d.createEmbeddedView(o)),xf(o,l,e),l}finally{S(i)}}function _i(n,t){return!t||t.firstChild===null||Iy(n)}function Co(n,t,e,r,i=!1){for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=t[e.index];o!==null&&r.push(lt(o)),at(o)&&av(o,r);let s=e.type;if(s&8)Co(n,t,e.child,r);else if(s&32){let a=uf(e,t),l;for(;l=a();)r.push(l)}else if(s&16){let a=ev(t,e);if(Array.isArray(a))r.push(...a);else{let l=an(t[Ue]);Co(l[x],l,a,r,!0)}}e=i?e.projectionNext:e.next}return r}function av(n,t){for(let e=me;e<n.length;e++){let r=n[e],i=r[x].firstChild;i!==null&&Co(r[x],r,i,t)}n[Nn]!==n[It]&&t.push(n[Nn])}function lv(n){if(n[br]!==null){for(let t of n[br])t.impl.addSequence(t);n[br].length=0}}var cv=[];function Px(n){return n[Xe]??Lx(n)}function Lx(n){let t=cv.pop()??Object.create(Bx);return t.lView=n,t}function Vx(n){n.lView[Xe]!==n&&(n.lView=null,cv.push(n))}var Bx=$(_({},tn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Er(n.lView)},consumerOnSignalRead(){this.lView[Xe]=this}});function jx(n){let t=n[Xe]??Object.create(Hx);return t.lView=n,t}var Hx=$(_({},tn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let t=an(n.lView);for(;t&&!dv(t[x]);)t=an(t);t&&jd(t)},consumerOnSignalRead(){this.lView[Xe]=this}});function dv(n){return n.type!==2}function uv(n){if(n[In]===null)return;let t=!0;for(;t;){let e=!1;for(let r of n[In])r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=e&&!!(n[k]&8192)}}var Ux=100;function fv(n,t=0){let r=n[St].rendererFactory,i=!1;i||r.begin?.();try{zx(n,t)}finally{i||r.end?.()}}function zx(n,t){let e=Zd();try{io(!0),Ou(n,t);let r=0;for(;fo(n);){if(r===Ux)throw new b(103,!1);r++,Ou(n,1)}}finally{io(e)}}function $x(n,t,e,r){if(Dr(t))return;let i=t[k],o=!1,s=!1;ka(t);let a=!0,l=null,c=null;o||(dv(n)?(c=Px(t),l=Ft(c)):Ms()===null?(a=!1,c=jx(t),l=Ft(c)):t[Xe]&&(rn(t[Xe]),t[Xe]=null));try{Bd(t),cg(n.bindingStartIndex),e!==null&&ov(n,t,e,2,r);let d=(i&3)===3;if(!o)if(d){let h=n.preOrderCheckHooks;h!==null&&Ha(t,h,null)}else{let h=n.preOrderHooks;h!==null&&Ua(t,h,0,null),au(t,0)}if(s||Gx(t),uv(t),hv(t,0),n.contentQueries!==null&&Py(n,t),!o)if(d){let h=n.contentCheckHooks;h!==null&&Ha(t,h)}else{let h=n.contentHooks;h!==null&&Ua(t,h,1),au(t,1)}qx(n,t);let f=n.components;f!==null&&pv(t,f,0);let m=n.viewQuery;if(m!==null&&wu(2,m,r),!o)if(d){let h=n.viewCheckHooks;h!==null&&Ha(t,h)}else{let h=n.viewHooks;h!==null&&Ua(t,h,2),au(t,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),t[_a]){for(let h of t[_a])h();t[_a]=null}o||(lv(t),t[k]&=-73)}catch(d){throw o||Er(t),d}finally{c!==null&&(nn(c,l),a&&Vx(c)),Aa()}}function hv(n,t){for(let e=My(n);e!==null;e=Ty(e))for(let r=me;r<e.length;r++){let i=e[r];mv(i,t)}}function Gx(n){for(let t=My(n);t!==null;t=Ty(t)){if(!(t[k]&2))continue;let e=t[_r];for(let r=0;r<e.length;r++){let i=e[r];jd(i)}}}function Wx(n,t,e){oe(J.ComponentStart);let r=dt(t,n);try{mv(r,e)}finally{oe(J.ComponentEnd,r[De])}}function mv(n,t){Ea(n)&&Ou(n,t)}function Ou(n,t){let r=n[x],i=n[k],o=n[Xe],s=!!(t===0&&i&16);if(s||=!!(i&64&&t===0),s||=!!(i&1024),s||=!!(o?.dirty&&Qn(o)),s||=!1,o&&(o.dirty=!1),n[k]&=-9217,s)$x(r,n,r.template,n[De]);else if(i&8192){let a=S(null);try{uv(n),hv(n,1);let l=r.components;l!==null&&pv(n,l,1),lv(n)}finally{S(a)}}}function pv(n,t,e){for(let r=0;r<t.length;r++)Wx(n,t[r],e)}function qx(n,t){let e=n.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)Rn(~i);else{let o=i,s=e[++r],a=e[++r];ug(s,o);let l=t[o];oe(J.HostBindingsUpdateStart,l);try{a(2,l)}finally{oe(J.HostBindingsUpdateEnd,l)}}}}finally{Rn(-1)}}function If(n,t){let e=Zd()?64:1088;for(n[St].changeDetectionScheduler?.notify(t);n;){n[k]|=e;let r=an(n);if(ui(n)&&!r)return n;n=r}return null}function gv(n,t,e,r){return[n,!0,0,t,null,r,null,e,null,null]}function yv(n,t){let e=me+t;if(e<n.length)return n[e]}function Ro(n,t,e,r=!0){let i=t[x];if(Yx(i,t,n,e),r){let s=Ru(e,n),a=t[le],l=a.parentNode(n[Nn]);l!==null&&sx(i,n[Le],a,t,l,s)}let o=t[yr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function vv(n,t){let e=xo(n,t);return e!==void 0&&ml(e[x],e),e}function xo(n,t){if(n.length<=me)return;let e=me+t,r=n[e];if(r){let i=r[An];i!==null&&i!==n&&pf(i,r),t>0&&(n[e-1][st]=r[st]);let o=ao(n,me+t);ox(r[x],r);let s=o[Bt];s!==null&&s.detachView(o[x]),r[Se]=null,r[st]=null,r[k]&=-129}return r}function Yx(n,t,e,r){let i=me+r,o=e.length;r>0&&(e[i-1][st]=t),r<o-me?(t[st]=e[i],Md(e,me+r,t)):(e.push(t),t[st]=null),t[Se]=e;let s=t[An];s!==null&&e!==s&&bv(s,t);let a=t[Bt];a!==null&&a.insertView(n),wa(t),t[k]|=128}function bv(n,t){let e=n[_r],r=t[Se];if(cn(r))n[k]|=2;else{let i=r[Se][Ue];t[Ue]!==i&&(n[k]|=2)}e===null?n[_r]=[t]:e.push(t)}var Pn=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,e=t[x];return Co(e,t,e.firstChild,[])}constructor(t,e){this._lView=t,this._cdRefInjectingView=e}get context(){return this._lView[De]}set context(t){this._lView[De]=t}get destroyed(){return Dr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[Se];if(at(t)){let e=t[uo],r=e?e.indexOf(this):-1;r>-1&&(xo(t,r),ao(e,r))}this._attachedToViewContainer=!1}ml(this._lView[x],this._lView)}onDestroy(t){Ca(this._lView,t)}markForCheck(){If(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[k]&=-129}reattach(){wa(this._lView),this._lView[k]|=128}detectChanges(){this._lView[k]|=1024,fv(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new b(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=ui(this._lView),e=this._lView[An];e!==null&&!t&&pf(e,this._lView),Xy(this._lView[x],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new b(902,!1);this._appRef=t;let e=ui(this._lView),r=this._lView[An];r!==null&&!e&&bv(r,this._lView),wa(this._lView)}};var Gt=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=Kx;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=No(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new Pn(o)}}return n})();function Kx(){return vl(Ae(),A())}function vl(n,t){return n.type&4?new Gt(t,n,wi(n,t)):null}function Ci(n,t,e,r,i){let o=n.data[t];if(o===null)o=Zx(n,t,e,r,i),dg()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let s=ag();o.injectorIndex=s===null?-1:s.injectorIndex}return fi(o,!0),o}function Zx(n,t,e,r,i){let o=qd(),s=Yd(),a=s?o:o&&o.parent,l=n.data[t]=Qx(n,a,e,t,r,i);return Xx(n,l,o,s),l}function Xx(n,t,e,r){n.firstChild===null&&(n.firstChild=t),e!==null&&(r?e.child==null&&t.parent!==null&&(e.child=t):e.next===null&&(e.next=t,t.prev=e))}function Qx(n,t,e,r,i,o){let s=t?t.injectorIndex:-1,a=0;return $d()&&(a|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,namespace:tu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Jx(n){let t=n[Fd]??[],r=n[Se][le],i=[];for(let o of t)o.data[Ny]!==void 0?i.push(o):e0(o,r);n[Fd]=i}function e0(n,t){let e=0,r=n.firstChild;if(r){let i=n.data[Ay];for(;e<i;){let o=r.nextSibling;Gy(t,r,!1),r=o,e++}}}var t0=()=>null,n0=()=>null;function Za(n,t){return t0(n,t)}function _v(n,t,e){return n0(n,t,e)}var Dv=class{},Ie=class{},Ee=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>r0()}return n})();function r0(){let n=A(),t=Ae(),e=dt(t.index,n);return(cn(e)?e:n)[le]}var Ev=(()=>{class n{static \u0275prov=B({token:n,providedIn:"root",factory:()=>null})}return n})();function wv(n){return n.debugInfo?.className||n.type.name||null}var $a={},Xa=class{injector;parentInjector;constructor(t,e){this.injector=t,this.parentInjector=e}get(t,e,r){let i=this.injector.get(t,$a,r);return i!==$a||e===$a?i:this.parentInjector.get(t,e,r)}};function Cv(n,t,e){return n[t]=e}function i0(n,t){return n[t]}function ft(n,t,e){if(e===mt)return!1;let r=n[t];return Object.is(r,e)?!1:(n[t]=e,!0)}function Wg(n,t,e,r){let i=ft(n,t,e);return ft(n,t+1,r)||i}function o0(n,t,e,r,i,o){let s=Wg(n,t,e,r);return Wg(n,t+2,i,o)||s}function yi(n,t,e){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&rC(i,o);let s=dn(n)?dt(n.index,t):t;If(s,5);let a=t[De],l=qg(t,a,e,i),c=r.__ngNextListenerFn__;for(;c;)l=qg(t,a,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function qg(n,t,e,r){let i=S(null);try{return oe(J.OutputStart,t,e),e(r)!==!1}catch(o){return Ax(n,o),!1}finally{oe(J.OutputEnd,t,e),S(i)}}function xv(n,t,e,r,i,o,s,a){let l=di(n),c=!1,d=null;if(!r&&l&&(d=a0(t,e,o,n.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=ct(n,e),m=r?r(f):f;oC(e,m,o,a),r||(a.__ngNativeEl__=f);let h=i.listen(m,o,a);if(!s0(o)){let p=r?D=>r(lt(D[n.index])):n.index;Iv(p,t,e,o,a,h,!1)}}return c}function s0(n){return n.startsWith("animation")||n.startsWith("transition")}function a0(n,t,e,r){let i=n.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===e&&i[o+1]===r){let a=t[li],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Iv(n,t,e,r,i,o,s){let a=t.firstCreatePass?Ud(t):null,l=Hd(e),c=l.length;l.push(i,o),a&&a.push(r,n,c,(c+1)*(s?-1:1))}function Yg(n,t,e,r,i){let o=null,s=null,a=null,l=!1,c=n.directiveToIndex.get(e.type);if(typeof c=="number"?o=c:[o,s,a]=c,s!==null&&a!==null&&n.hostDirectiveOutputs?.hasOwnProperty(r)){let d=n.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let m=d[f];if(m>=s&&m<=a)l=!0,Qa(n,t,m,d[f+1],r,i);else if(m>a)break}}return e.outputs.hasOwnProperty(r)&&(l=!0,Qa(n,t,o,r,r,i)),l}function Qa(n,t,e,r,i,o){let s=t[e],a=t[x],c=a.data[e].outputs[r],f=s[c].subscribe(o);Iv(n.index,a,t,i,o,f,!0)}function Vn(){l0()}function l0(){let n=A(),t=pe(),e=Ae();if(t.firstCreatePass&&d0(t,e),e.controlDirectiveIndex===-1)return;vn("NgSignalForms");let r=n[e.controlDirectiveIndex];t.data[e.controlDirectiveIndex].controlDef.create(r,new Ja(n,t,e))}function Bn(){c0()}function c0(){let n=A(),t=pe(),e=mo();if(e.controlDirectiveIndex===-1)return;let r=t.data[e.controlDirectiveIndex].controlDef,i=n[e.controlDirectiveIndex];r.update(i,new Ja(n,t,e))}var Ja=class{lView;tView;tNode;hasPassThrough;constructor(t,e,r){this.lView=t,this.tView=e,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return ct(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(t,e){let r=this.tView.data[this.tNode.customControlIndex];Yg(this.tNode,this.lView,r,t,yi(this.tNode,this.lView,e))}listenToCustomControlModel(t){let e=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];Yg(this.tNode,this.lView,r,e,yi(this.tNode,this.lView,t))}listenToDom(t,e){xv(this.tNode,this.tView,this.lView,void 0,this.lView[le],t,e,yi(this.tNode,this.lView,e))}setInputOnDirectives(t,e){let r=this.tNode.inputs?.[t],i=this.tNode.hostDirectiveInputs?.[t];if(!r&&!i)return!1;let o=!1;if(r)for(let s of r){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],l=this.lView[s];Mr(a,l,t,e),o=!0}if(i)for(let s=0;s<i.length;s+=2){let a=i[s];if(a===this.tNode.controlDirectiveIndex)continue;let l=i[s+1],c=this.tView.data[a],d=this.lView[a];Mr(c,d,l,e),o=!0}return o}setCustomControlModelInput(t){let e=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";Nx(this.tNode,this.tView,this.lView,e,r,t)}customControlHasInput(t){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[t]===!0}_buildCustomControlInputCache(t){let e={};for(let r in t.inputs)e[r]=!0;if(t.hostDirectives!==null){let r=[...t.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let s in i.inputs)e[i.inputs[s]]=!0;let o=Kg(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let l=o.inputs[a+1]||o.inputs[a];e[l]=!0}let s=Kg(o.directive);s!==null&&r.push(...s)}}}return e}};function Kg(n){return typeof n=="function"&&"\u0275dir"in n?n.\u0275dir.hostDirectives??null:null}function d0(n,t,e){for(let i=t.directiveStart;i<t.directiveEnd;i++)if(n.data[i].controlDef){t.controlDirectiveIndex=i;break}if(t.controlDirectiveIndex===-1)return;let r=n.data[t.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(t.inputs?.[r.passThroughInput]?.length??0)>1){t.flags|=4096;return}u0(n,t)}function u0(n,t){for(let e=t.directiveStart;e<t.directiveEnd;e++){let r=n.data[e];if(!(t.directiveToIndex&&!t.directiveToIndex.has(r.type))){if(Zg(r,"value")){t.flags|=1024,t.customControlIndex=e;return}if(Zg(r,"checked")){t.flags|=2048,t.customControlIndex=e;return}}}if(t.hostDirectiveInputs!==null&&t.hostDirectiveOutputs!==null&&t.directiveToIndex!==null){let e=(r,i)=>{let o=t.hostDirectiveInputs[r],s=t.hostDirectiveOutputs[r+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let l=o[a];for(let c=0;c<s.length;c+=2){let d=s[c];if(l===d)for(let f of t.directiveToIndex.values()){if(!Array.isArray(f))continue;let[m,h,p]=f;if(l>=h&&l<=p)return t.flags|=i,t.customControlIndex=m,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function Zg(n,t){return f0(n,t)&&h0(n,t+"Change")}function f0(n,t){return t in n.inputs}function h0(n,t){return t in n.outputs}var Fu=Symbol("BINDING");var Nr=new g("");function el(n,t,e){let r=e?n.styles:null,i=e?n.classes:null,o=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")o=a;else if(o==1)i=fa(i,a);else if(o==2){let l=a,c=t[++s];r=fa(r,l+": "+c+";")}}e?n.styles=r:n.stylesWithoutHost=r,e?n.classes=i:n.classesWithoutHost=i}function Ne(n,t=0){let e=A();if(e===null)return R(n,t);let r=Ae();return Ey(r,e,Oe(n),t)}function Sv(n,t,e,r,i){let o=r===null?null:{"":-1},s=i(n,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}g0(n,t,e,a,o,l,c)}o!==null&&r!==null&&m0(e,r,o)}function m0(n,t,e){let r=n.localNames=[];for(let i=0;i<t.length;i+=2){let o=e[t[i+1]];if(o==null)throw new b(-301,!1);r.push(t[i],o)}}function p0(n,t,e){t.componentOffset=e,(n.components??=[]).push(t.index)}function g0(n,t,e,r,i,o,s){let a=r.length,l=null;for(let m=0;m<a;m++){let h=r[m];l===null&&Ut(h)&&(l=h,p0(n,e,m)),bu(Ya(e,t),n,h.type)}E0(e,n.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=r[m];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,f=rv(n,t,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=r[m];if(e.mergedAttrs=vi(e.mergedAttrs,h.hostAttrs),v0(n,e,t,f,h),D0(f,h,i),s!==null&&s.has(h)){let[D,C]=s.get(h);e.directiveToIndex.set(h.type,[f,D+e.directiveStart,C+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let p=h.type.prototype;!c&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((n.preOrderHooks??=[]).push(e.index),c=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}y0(n,e,o)}function y0(n,t,e){for(let r=t.directiveStart;r<t.directiveEnd;r++){let i=n.data[r];if(e===null||!e.has(i))Xg(0,t,i,r),Xg(1,t,i,r),Jg(t,r,!1);else{let o=e.get(i);Qg(0,t,o,r),Qg(1,t,o,r),Jg(t,r,!0)}}}function Xg(n,t,e,r){let i=n===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;n===0?s=t.inputs??={}:s=t.outputs??={},s[o]??=[],s[o].push(r),Mv(t,o)}}function Qg(n,t,e,r){let i=n===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;n===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),Mv(t,s)}}function Mv(n,t){t==="class"?n.flags|=8:t==="style"&&(n.flags|=16)}function Jg(n,t,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=n;if(r===null||!e&&i===null||e&&o===null||df(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===t){s??=[],s.push(l,r[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===t){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function v0(n,t,e,r,i){n.data[r]=i;let o=i.factory||(i.factory=ur(i.type,!0)),s=new Ir(o,Ut(i),Ne,null);n.blueprint[r]=s,e[r]=s,b0(n,t,r,rv(n,e,i.hostVars,mt),i)}function b0(n,t,e,r,i){let o=i.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~t.index;_0(s)!=a&&s.push(a),s.push(e,r,o)}}function _0(n){let t=n.length;for(;t>0;){let e=n[--t];if(typeof e=="number"&&e<0)return e}return 0}function D0(n,t,e){if(e){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)e[t.exportAs[r]]=n;Ut(t)&&(e[""]=n)}}function E0(n,t,e){n.flags|=1,n.directiveStart=t,n.directiveEnd=t+e,n.providerIndexes=t}function Sf(n,t,e,r,i,o,s,a){let l=t[x],c=l.consts,d=ut(c,s),f=Ci(l,n,e,r,d);return o&&Sv(l,t,f,ut(c,a),i),f.mergedAttrs=vi(f.mergedAttrs,f.attrs),f.attrs!==null&&el(f,f.attrs,!1),f.mergedAttrs!==null&&el(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Mf(n,t){hy(n,t),Pd(t)&&n.queries.elementEnd(t)}function w0(n,t,e,r,i,o){let s=t.consts,a=ut(s,i),l=Ci(t,n,e,r,a);if(l.mergedAttrs=vi(l.mergedAttrs,l.attrs),o!=null){let c=ut(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&el(l,l.attrs,!1),l.mergedAttrs!==null&&el(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}var Tv=typeof ShadowRoot<"u",C0=typeof Document<"u";function x0(n){return Object.keys(n).map(t=>{let[e,r,i]=n[t],o={propName:e,templateName:t,isSignal:(r&gl.SignalBased)!==0};return i&&(o.transform=i),o})}function I0(n){return Object.keys(n).map(t=>({propName:n[t],templateName:t}))}function S0(n,t,e){let r=t instanceof _e?t:t?.injector;return r&&n.getStandaloneInjector!==null&&(r=n.getStandaloneInjector(r)||r),r?new Xa(e,r):e}function M0(n){let t=n.get(Ie,null);if(t===null)throw new b(407,!1);let e=n.get(Ev,null),r=n.get(Lt,null),i=n.get(qt,null,{optional:!0});return{rendererFactory:t,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function T0(n,t){let e=kv(n);return zy(t,e,e==="svg"?Ld:e==="math"?Qp:null)}function kv(n){return(n.selectors[0][0]||"div").toLowerCase()}var Di=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=x0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=I0(this.componentDef.outputs),this.cachedOutputs}constructor(t,e){this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=GC(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!e}create(t,e,r,i,o,s){oe(J.DynamicComponentStart);let a=S(null);try{let l=this.componentDef,c=S0(l,i||this.ngModule,t),d=M0(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(wv(l),()=>this.createComponentRef(d,c,e,r,o,s)):this.createComponentRef(d,c,e,r,o,s)}finally{S(a)}}createComponentRef(t,e,r,i,o,s){let a=this.componentDef,l=k0(i,a,s,o),c=t.rendererFactory.createRenderer(null,a),d=i?bx(c,i,a.encapsulation,e):T0(a,c),f=e.get(Nr,null),m=A0(d,()=>e.get(V,null)??nf());f&&f.addHost(m);let h=s?.some(ey)||o?.some(C=>typeof C!="function"&&C.bindings.some(ey)),p=bf(null,l,null,512|nv(a),null,null,t,c,e,null,Fy(d,e,!0));f&&Tv&&m instanceof ShadowRoot&&Ca(p,()=>{f.removeHost(m)}),p[ve]=d,ka(p);let D=null;try{let C=Sf(ve,p,2,"#host",()=>l.directiveRegistry,!0,0);Wy(c,d,C),bi(d,p),yl(l,p,C),rf(l,C,p),Mf(l,C),r!==void 0&&R0(C,this.ngContentSelectors,r),D=dt(C.index,p),p[De]=D[De],xf(l,p,null)}catch(C){throw D!==null&&Du(D),Du(p),C}finally{oe(J.DynamicComponentEnd),Aa()}return new tl(this.componentType,p,!!h)}};function k0(n,t,e,r){let i=n?["ng-version","22.0.2"]:WC(t.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Fu].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let m of f.bindings){a+=m[Fu].requiredVars;let h=d+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[t];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,m=Cd(f);l.push(m)}return vf(0,null,N0(o,s),1,a,l,null,null,null,[i],null)}function A0(n,t){let e=n.getRootNode?.();return C0&&e instanceof Document?e.head:e&&Tv&&e instanceof ShadowRoot?e:t().head}function N0(n,t){return!n&&!t?null:e=>{if(e&1&&n)for(let r of n)r.create();if(e&2&&t)for(let r of t)r.update()}}function ey(n){let t=n[Fu].kind;return t==="input"||t==="twoWay"}var tl=class extends Dv{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=Da(e[x],ve),this.location=wi(this._tNode,e),this.instance=dt(this._tNode.index,e)[De],this.hostView=this.changeDetectorRef=new Pn(e,void 0),this.componentType=t}setInput(t,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),e))return;let i=this._rootLView,o=Cf(r,i[x],i,t,e);this.previousInputValues.set(t,e);let s=dt(r.index,i);If(s,1)}get injector(){return new On(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function R0(n,t,e){let r=n.projection=[];for(let i=0;i<t.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var pt=(()=>{class n{static __NG_ELEMENT_ID__=O0}return n})();function O0(){let n=Ae();return Av(n,A())}var Pu=class n extends pt{_lContainer;_hostTNode;_hostLView;constructor(t,e,r){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=r}get element(){return wi(this._hostTNode,this._hostLView)}get injector(){return new On(this._hostTNode,this._hostLView)}get parentInjector(){let t=Qu(this._hostTNode,this._hostLView);if(gy(t)){let e=qa(t,this._hostLView),r=Wa(t),i=e[x].data[r+8];return new On(i,e)}else return new On(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let e=ty(this._lContainer);return e!==null&&e[t]||null}get length(){return this._lContainer.length-me}createEmbeddedView(t,e,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=Za(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,i,_i(this._hostTNode,s)),a}createComponent(t,e,r,i,o,s,a){let l,c=e||{};l=c.index,r=c.injector,i=c.projectableNodes,o=c.environmentInjector||c.ngModuleRef,s=c.directives,a=c.bindings;let d=new Di(Sn(t)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let P=this.parentInjector.get(_e,null);P&&(o=P)}let m=Sn(d.componentType??{}),h=Za(this._lContainer,m?.id??null),p=h?.firstChild??null,D=d.create(f,i,p,o,s,a);return this.insertImpl(D.hostView,l,_i(this._hostTNode,h)),D}insert(t,e){return this.insertImpl(t,e,!0)}insertImpl(t,e,r){let i=t._lView;if(tg(i)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let l=i[Se],c=new n(l,l[Le],l[Se]);c.detach(c.indexOf(t))}}let o=this._adjustIndex(e),s=this._lContainer;return Ro(s,i,o,r),t.attachToViewContainerRef(),Md(du(s),o,t),t}move(t,e){return this.insert(t,e)}indexOf(t){let e=ty(this._lContainer);return e!==null?e.indexOf(t):-1}remove(t){let e=this._adjustIndex(t,-1),r=xo(this._lContainer,e);r&&(ao(du(this._lContainer),e),ml(r[x],r))}detach(t){let e=this._adjustIndex(t,-1),r=xo(this._lContainer,e);return r&&ao(du(this._lContainer),e)!=null?new Pn(r):null}_adjustIndex(t,e=0){return t??this.length+e}};function ty(n){return n[uo]}function du(n){return n[uo]||(n[uo]=[])}function Av(n,t){let e,r=t[n.index];return at(r)?e=r:(e=gv(r,t,null,n),t[n.index]=e,_f(t,e)),P0(e,t,n,r),new Pu(e,n,t)}function F0(n,t){let e=n[le],r=e.createComment(""),i=ct(t,n),o=e.parentNode(i);return Ka(e,o,r,e.nextSibling(i),!1),r}var P0=B0,L0=()=>!1;function V0(n,t,e){return L0(n,t,e)}function B0(n,t,e,r){if(n[Nn])return;let i;e.type&8?i=lt(r):i=F0(t,e),n[Nn]=i}var Lu=class n{queryList;matches=null;constructor(t){this.queryList=t}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Vu=class n{queries;constructor(t=[]){this.queries=t}createEmbeddedView(t){let e=t.queries;if(e!==null){let r=t.contentQueries!==null?t.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new n(i)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)kf(t,e).matches!==null&&this.queries[e].setDirty()}},nl=class{flags;read;predicate;constructor(t,e,r=null){this.flags=e,this.read=r,typeof t=="string"?this.predicate=$0(t):this.predicate=t}},Bu=class n{queries;constructor(t=[]){this.queries=t}elementStart(t,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(t,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new n(e):null}template(t,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},ju=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(t,e=-1){this.metadata=t,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new n(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(t,e,j0(e,o)),this.matchTNodeWithReadOption(t,e,za(e,t,o,!1,!1))}else r===Gt?e.type&4&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,za(e,t,r,!1,!1))}matchTNodeWithReadOption(t,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===N||i===pt||i===Gt&&e.type&4)this.addMatch(e.index,-2);else{let o=za(e,t,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(t,e){this.matches===null?this.matches=[t,e]:this.matches.push(t,e)}};function j0(n,t){let e=n.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===t)return e[r+1]}return null}function H0(n,t){return n.type&11?wi(n,t):n.type&4?vl(n,t):null}function U0(n,t,e,r){return e===-1?H0(t,n):e===-2?z0(n,t,r):Eo(n,n[x],e,t)}function z0(n,t,e){if(e===N)return wi(t,n);if(e===Gt)return vl(t,n);if(e===pt)return Av(t,n)}function Nv(n,t,e,r){let i=t[Bt].queries[r];if(i.matches===null){let o=n.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(U0(t,d,s[l+1],e.metadata.read))}}i.matches=a}return i.matches}function Hu(n,t,e,r){let i=n.queries.getByIndex(e),o=i.matches;if(o!==null){let s=Nv(n,t,i,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=t[-l];for(let f=me;f<d.length;f++){let m=d[f];m[An]===m[Se]&&Hu(m[x],m,c,r)}if(d[_r]!==null){let f=d[_r];for(let m=0;m<f.length;m++){let h=f[m];Hu(h[x],h,c,r)}}}}}return r}function Tf(n,t){return n[Bt].queries[t].queryList}function Rv(n,t,e){let r=new Sr((e&4)===4);return ig(n,t,r,r.destroy),(t[Bt]??=new Vu).queries.push(new Lu(r))-1}function Ov(n,t,e){let r=pe();return r.firstCreatePass&&(Pv(r,new nl(n,t,e),-1),(t&2)===2&&(r.staticViewQueries=!0)),Rv(r,A(),t)}function Fv(n,t,e,r){let i=pe();if(i.firstCreatePass){let o=Ae();Pv(i,new nl(t,e,r),o.index),G0(i,n),(e&2)===2&&(i.staticContentQueries=!0)}return Rv(i,A(),e)}function $0(n){return n.split(",").map(t=>t.trim())}function Pv(n,t,e){n.queries===null&&(n.queries=new Bu),n.queries.track(new ju(t,e))}function G0(n,t){let e=n.contentQueries||(n.contentQueries=[]),r=e.length?e[e.length-1]:-1;t!==r&&e.push(n.queries.length-1,t)}function kf(n,t){return n.queries.getByIndex(t)}function Lv(n,t){let e=n[x],r=kf(e,t);return r.crossesNgTemplate?Hu(e,n,t,[]):Nv(e,n,r,t)}function Vv(n,t,e){let r,i=Zi(()=>{r._dirtyCounter();let o=W0(r,n);if(t&&o===void 0)throw new b(-951,!1);return o});return r=i[ce],r._dirtyCounter=j(0),r._flatValue=void 0,i}function Af(n){return Vv(!0,!1,n)}function Nf(n){return Vv(!0,!0,n)}function Bv(n,t){let e=n[ce];e._lView=A(),e._queryIndex=t,e._queryList=Tf(e._lView,t),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function W0(n,t){let e=n._lView,r=n._queryIndex;if(e===void 0||r===void 0||e[k]&4)return t?void 0:it;let i=Tf(e,r),o=Lv(e,r);return i.reset(o,xy),t?i.first:i._changesDetected||n._flatValue===void 0?n._flatValue=i.toArray():n._flatValue}function Rr(n){return!!n&&typeof n.then=="function"}function Rf(n){return!!n&&typeof n.subscribe=="function"}var Tr=class{};var Io=class extends Tr{injector;instance=null;constructor(t){super();let e=new hr([...t.providers,{provide:Tr,useValue:this}],t.parent||ai(),t.debugName,new Set(["environment"]));this.injector=e,t.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function jv(n,t,e=null){return new Io({providers:n,parent:t,debugName:e,runEnvironmentInitializers:!0}).injector}var q0=(()=>{class n{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=kd(!1,e.type),i=r.length>0?jv([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=B({token:n,providedIn:"environment",factory:()=>new n(R(_e))})}return n})();function Z(n){return sl(()=>{let t=Hv(n),e=$(_({},t),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==ef.Eager,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&n.dependencies||null,getStandaloneInjector:t.standalone?i=>i.get(q0).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||kt.Emulated,styles:n.styles||it,_:null,schemas:n.schemas||null,tView:null,id:""});t.standalone&&vn("NgStandalone"),Uv(e);let r=n.dependencies;return e.directiveDefs=ny(r,Y0),e.pipeDefs=ny(r,Lp),e.id=X0(e),e})}function Y0(n){return Sn(n)||Cd(n)}function K0(n,t){if(n==null)return Tn;let e={};for(let r in n)if(n.hasOwnProperty(r)){let i=n[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=gl.None,l=null),e[o]=[r,a,l],t[o]=s}return e}function Z0(n){if(n==null)return Tn;let t={};for(let e in n)n.hasOwnProperty(e)&&(t[n[e]]=e);return t}function H(n){return sl(()=>{let t=Hv(n);return Uv(t),t})}function Hv(n){let t={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:t,inputConfig:n.inputs||Tn,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||it,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:K0(n.inputs,t),outputs:Z0(n.outputs),debugInfo:null}}function Uv(n){n.features?.forEach(t=>t(n))}function ny(n,t){return n?()=>{let e=typeof n=="function"?n():n,r=[];for(let i of e){let o=t(i);o!==null&&r.push(o)}return r}:null}function X0(n){let t=0,e=typeof n.consts=="function"?"":n.consts,r=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,e,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of r.join("|"))t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var zv=new g("");var Of=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(zv,{optional:!0})??[];injector=u(q);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=xt(this.injector,i);if(Rr(o))e.push(o);else if(Rf(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function bl(n){return t=>{t.controlDef={create:(e,r)=>{e?.\u0275ngControlCreate(r)},update:(e,r)=>{e?.\u0275ngControlUpdate?.(r)},passThroughInput:n}}}function Q0(n){return Object.getPrototypeOf(n.prototype).constructor}function Qe(n){let t=Q0(n.type),e=!0,r=[n];for(;t;){let i;if(Ut(n))i=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new b(903,!1);i=t.\u0275dir}if(i){if(e){r.push(i);let s=n;s.inputs=uu(n.inputs),s.declaredInputs=uu(n.declaredInputs),s.outputs=uu(n.outputs);let a=i.hostBindings;a&&rI(n,a);let l=i.viewQuery,c=i.contentQueries;if(l&&tI(n,l),c&&nI(n,c),J0(n,i),Pp(n.outputs,i.outputs),Ut(i)&&i.data.animation){let d=n.data;d.animation=(d.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(n),a===Qe&&(e=!1)}}t=Object.getPrototypeOf(t)}eI(r)}function J0(n,t){for(let e in t.inputs){if(!t.inputs.hasOwnProperty(e)||n.inputs.hasOwnProperty(e))continue;let r=t.inputs[e];r!==void 0&&(n.inputs[e]=r,n.declaredInputs[e]=t.declaredInputs[e])}}function eI(n){let t=0,e=null;for(let r=n.length-1;r>=0;r--){let i=n[r];i.hostVars=t+=i.hostVars,i.hostAttrs=vi(i.hostAttrs,e=vi(e,i.hostAttrs))}}function uu(n){return n===Tn?{}:n===it?[]:n}function tI(n,t){let e=n.viewQuery;e?n.viewQuery=(r,i)=>{t(r,i),e(r,i)}:n.viewQuery=t}function nI(n,t){let e=n.contentQueries;e?n.contentQueries=(r,i,o)=>{t(r,i,o),e(r,i,o)}:n.contentQueries=t}function rI(n,t){let e=n.hostBindings;e?n.hostBindings=(r,i)=>{t(r,i),e(r,i)}:n.hostBindings=t}function $v(n,t,e,r,i,o,s,a){if(e.firstCreatePass){n.mergedAttrs=vi(n.mergedAttrs,n.attrs);let d=n.tView=vf(2,n,i,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,n),d.queries=e.queries.embeddedTView(n))}a&&(n.flags|=a),fi(n,!1);let l=oI(e,t,n,r);Ra()&&gf(e,t,l,n),bi(l,t);let c=gv(l,t,l,n);t[r+ve]=c,_f(t,c),V0(c,n,t)}function iI(n,t,e,r,i,o,s,a,l,c,d){let f=e+ve,m;return t.firstCreatePass?(m=Ci(t,f,4,s||null,a||null),xa()&&Sv(t,n,m,ut(t.consts,c),Df),hy(t,m)):m=t.data[f],$v(m,n,t,e,r,i,o,l),di(m)&&yl(t,n,m),c!=null&&Ao(n,m,d),m}function So(n,t,e,r,i,o,s,a,l,c,d){let f=e+ve,m;if(t.firstCreatePass){if(m=Ci(t,f,4,s||null,a||null),c!=null){let h=ut(t.consts,c);m.localNames=[];for(let p=0;p<h.length;p+=2)m.localNames.push(h[p],-1)}}else m=t.data[f];return $v(m,n,t,e,r,i,o,l),c!=null&&Ao(n,m,d),m}function gt(n,t,e,r,i,o,s,a){let l=A(),c=pe(),d=ut(c.consts,o);return iI(l,c,n,t,e,r,i,d,void 0,s,a),gt}var oI=sI;function sI(n,t,e,r){return po(!0),t[le].createComment("")}var Ff=new g("");var Pf=new g("");function Gv(){Lc(()=>{let n="";throw new b(600,n)})}var aI=10;var At=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(fn);afterRenderManager=u(fl);zonelessEnabled=u(yo);rootEffectScheduler=u(Pa);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new M;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Cr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(be(e=>!e))}constructor(){u(qt,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(_e);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=q.NULL){return this._injector.get(T).run(()=>{if(oe(J.BootstrapComponentStart),!this._injector.get(Of).done){let P="";throw new b(405,P)}let a=Sn(e),l=this._injector.get(Tr),c=new Di(a,l);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:m}=lI(r),h=d||c.selector,p=c.create(i,[],h,l.injector,f,m),D=p.location.nativeElement,C=p.injector.get(Ff,null);return C?.registerApplication(D),p.onDestroy(()=>{this.detachView(p.hostView),Do(this.components,p),C?.unregisterApplication(D)}),this._loadComponent(p),oe(J.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){oe(J.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ul.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw oe(J.ChangeDetectionEnd),new b(101,!1);let e=S(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,S(e),this.afterTick.next(),oe(J.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ie,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<aI;){oe(J.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{oe(J.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!fo(i))continue;let o=r&&!this.zonelessEnabled?0:1;fv(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>fo(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;Do(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(Pf,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Do(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new b(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function lI(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function Do(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function ge(n,t,e,r){let i=A(),o=wr();if(ft(i,o,t)){let s=pe(),a=mo();Mx(a,i,n,t,e,r)}return ge}var Uu=class{destroy(t){}updateValue(t,e){}swap(t,e){let r=Math.min(t,e),i=Math.max(t,e),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(t,e){this.attach(e,this.detach(t))}};function fu(n,t,e,r,i){return n===e&&Object.is(t,r)?1:Object.is(i(n,t),i(e,r))?-1:0}function cI(n,t,e,r){let i,o,s=0,a=n.length-1,l=void 0;if(Array.isArray(t)){S(r);let c=t.length-1;for(S(null);s<=a&&s<=c;){let d=n.at(s),f=t[s],m=fu(s,d,s,f,e);if(m!==0){m<0&&n.updateValue(s,f),s++;continue}let h=n.at(a),p=t[c],D=fu(a,h,c,p,e);if(D!==0){D<0&&n.updateValue(a,p),a--,c--;continue}let C=e(s,d),P=e(a,h),xe=e(s,f);if(Object.is(xe,P)){let nt=e(c,p);Object.is(nt,C)?(n.swap(s,a),n.updateValue(a,p),c--,a--):n.move(a,s),n.updateValue(s,f),s++;continue}if(i??=new rl,o??=iy(n,s,a,e),zu(n,i,s,xe))n.updateValue(s,f),s++,a++;else if(o.has(xe))i.set(C,n.detach(s)),a--;else{let nt=n.create(s,t[s]);n.attach(s,nt),s++,a++}}for(;s<=c;)ry(n,i,e,s,t[s]),s++}else if(t!=null){S(r);let c=t[Symbol.iterator]();S(null);let d=c.next();for(;!d.done&&s<=a;){let f=n.at(s),m=d.value,h=fu(s,f,s,m,e);if(h!==0)h<0&&n.updateValue(s,m),s++,d=c.next();else{i??=new rl,o??=iy(n,s,a,e);let p=e(s,m);if(zu(n,i,s,p))n.updateValue(s,m),s++,a++,d=c.next();else if(!o.has(p))n.attach(s,n.create(s,m)),s++,a++,d=c.next();else{let D=e(s,f);i.set(D,n.detach(s)),a--}}}for(;!d.done;)ry(n,i,e,n.length,d.value),d=c.next()}for(;s<=a;)n.destroy(n.detach(a--));i?.forEach(c=>{n.destroy(c)})}function zu(n,t,e,r){return t!==void 0&&t.has(r)?(n.attach(e,t.get(r)),t.delete(r),!0):!1}function ry(n,t,e,r,i){if(zu(n,t,r,e(r,i)))n.updateValue(r,i);else{let o=n.create(r,i);n.attach(r,o)}}function iy(n,t,e,r){let i=new Set;for(let o=t;o<=e;o++)i.add(r(o,n.at(o)));return i}var rl=class{kvMap=new Map;_vMap=void 0;has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let e=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(t,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,e){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(t,e)}forEach(t){for(let[e,r]of this.kvMap)if(t(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),t(r,e)}}};function ue(n,t,e,r,i,o,s,a){vn("NgControlFlow");let l=A(),c=pe(),d=ut(c.consts,o);return So(l,c,n,t,e,r,i,d,256,s,a),Lf}function Lf(n,t,e,r,i,o,s,a){vn("NgControlFlow");let l=A(),c=pe(),d=ut(c.consts,o);return So(l,c,n,t,e,r,i,d,512,s,a),Lf}function fe(n,t){vn("NgControlFlow");let e=A(),r=wr(),i=e[r]!==mt?e[r]:-1,o=i!==-1?il(e,ve+i):void 0,s=0;if(ft(e,r,n)){let a=S(null);try{if(o!==void 0&&vv(o,s),n!==-1){let l=ve+n,c=il(e,l),d=qu(e[x],l),f=_v(c,d,e),m=No(e,d,t,{dehydratedView:f});Ro(c,m,s,_i(d,f))}}finally{S(a)}}else if(o!==void 0){let a=yv(o,s);a!==void 0&&(a[De]=t)}}var $u=class{lContainer;$implicit;$index;constructor(t,e,r){this.lContainer=t,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-me}};function _l(n,t){return t}var Gu=class{hasEmptyBlock;trackByFn;liveCollection;constructor(t,e,r){this.hasEmptyBlock=t,this.trackByFn=e,this.liveCollection=r}};function Oo(n,t,e,r,i,o,s,a,l,c,d,f,m){vn("NgControlFlow");let h=A(),p=pe(),D=l!==void 0,C=A(),P=a?s.bind(C[Ue][De]):s,xe=new Gu(D,P);C[ve+n]=xe,So(h,p,n+1,t,e,r,i,ut(p.consts,o),256),D&&So(h,p,n+2,l,c,d,f,ut(p.consts,m),512)}var Wu=class extends Uu{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(t,e,r){super(),this.lContainer=t,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-me}at(t){return this.getLView(t)[De].$implicit}attach(t,e){let r=e[yr];this.needsIndexUpdate||=t!==this.length,Ro(this.lContainer,e,t,_i(this.templateTNode,r)),dI(this.lContainer,t)}detach(t){return this.needsIndexUpdate||=t!==this.length-1,uI(this.lContainer,t),fI(this.lContainer,t)}create(t,e){let r=Za(this.lContainer,this.templateTNode.tView.ssrId);return No(this.hostLView,this.templateTNode,new $u(this.lContainer,e,t),{dehydratedView:r})}destroy(t){ml(t[x],t)}updateValue(t,e){this.getLView(t)[De].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[De].$index=t}getLView(t){return hI(this.lContainer,t)}};function Fo(n){let t=S(null),e=un();try{let r=A(),i=r[x],o=r[e],s=e+1,a=il(r,s);if(o.liveCollection===void 0){let c=qu(i,s);o.liveCollection=new Wu(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(cI(l,n,o.trackByFn,t),l.updateIndexes(),o.hasEmptyBlock){let c=wr(),d=l.length===0;if(ft(r,c,d)){let f=e+2,m=il(r,f);if(d){let h=qu(i,f),p=_v(m,h,r),D=No(r,h,void 0,{dehydratedView:p});Ro(m,D,0,_i(h,p))}else i.firstUpdatePass&&Jx(m),vv(m,0)}}}finally{S(t)}}function il(n,t){return n[t]}function dI(n,t){if(n.length<=me)return;let e=me+t,r=n[e],i=r?r[Ht]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Vt];JC(o,i),Fn.delete(r[jt]),i.detachedLeaveAnimationFns=void 0}}function uI(n,t){if(n.length<=me)return;let e=me+t,r=n[e],i=r?r[Ht]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function fI(n,t){return xo(n,t)}function hI(n,t){return yv(n,t)}function qu(n,t){return Da(n,t)}function Y(n,t,e){let r=A(),i=wr();if(ft(r,i,t)){let o=pe(),s=mo();wx(s,r,n,t,r[le],e)}return Y}function Yu(n,t,e,r,i){Cf(t,n,e,i?"class":"style",r)}function v(n,t,e,r){let i=A(),o=i[x],s=n+ve,a=o.firstCreatePass?Sf(s,i,2,t,Df,xa(),e,r):o.data[s];if(dn(a)){let l=i[St].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(wv(c),()=>(oy(n,t,i,a,r),v))}}return oy(n,t,i,a,r),v}function oy(n,t,e,r,i){if(Ef(r,e,n,t,Wv),di(r)){let o=e[x];yl(o,e,r),rf(o,r,e)}i!=null&&Ao(e,r)}function y(){let n=pe(),t=Ae(),e=wf(t);return n.firstCreatePass&&Mf(n,e),Gd(e)&&Wd(),zd(),e.classesWithoutHost!=null&&Bw(e)&&Yu(n,e,A(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&jw(e)&&Yu(n,e,A(),e.stylesWithoutHost,!1),y}function ae(n,t,e,r){return v(n,t,e,r),y(),ae}function We(n,t,e,r){let i=A(),o=i[x],s=n+ve,a=o.firstCreatePass?w0(s,o,2,t,e,r):o.data[s];return Ef(a,i,n,t,Wv),r!=null&&Ao(i,a),We}function qe(){let n=Ae(),t=wf(n);return Gd(t)&&Wd(),zd(),qe}function Yt(n,t,e,r){return We(n,t,e,r),qe(),Yt}var Wv=(n,t,e,r,i)=>(po(!0),zy(t[le],r,tu()));function Vf(n,t,e){let r=A(),i=r[x],o=n+ve,s=i.firstCreatePass?Sf(o,r,8,"ng-container",Df,xa(),t,e):i.data[o];if(Ef(s,r,n,"ng-container",mI),di(s)){let a=r[x];yl(a,r,s),rf(a,s,r)}return e!=null&&Ao(r,s),Vf}function Bf(){let n=pe(),t=Ae(),e=wf(t);return n.firstCreatePass&&Mf(n,e),Bf}function Dl(n,t,e){return Vf(n,t,e),Bf(),Dl}var mI=(n,t,e,r,i)=>(po(!0),AC(t[le],""));function jf(){return A()}function Nt(n,t,e){let r=A(),i=wr();if(ft(r,i,t)){let o=pe(),s=mo();sv(s,r,n,t,r[le],e)}return Nt}var Po="en-US";var pI=Po;function qv(n){typeof n=="string"&&(pI=n.toLowerCase().replace(/_/g,"-"))}function he(n,t,e){let r=A(),i=pe(),o=Ae();return gI(i,r,r[le],o,n,t,e),he}function gI(n,t,e,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=yi(r,t,o),xv(r,n,t,s,e,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let m=d[f],h=d[f+1];l??=yi(r,t,o),Qa(r,t,m,h,i,l)}if(c&&c.length)for(let f of c)l??=yi(r,t,o),Qa(r,t,f,i,i,l)}}function we(n=1){return yg(n)}function yI(n,t){let e=null,r=jC(n);for(let i=0;i<t.length;i++){let o=t[i];if(o==="*"){e=i;continue}if(r===null?Yy(n,o,!0):zC(r,o))return i}return e}function Te(n){let t=A()[Ue][Le];if(!t.projection){let e=n?n.length:1,r=t.projection=zp(e,null),i=r.slice(),o=t.child;for(;o!==null;){if(o.type!==128){let s=n?yI(o,n):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function ee(n,t=0,e,r,i,o){let s=A(),a=pe(),l=r?n+1:null;l!==null&&So(s,a,l,r,i,o,null,e);let c=Ci(a,ve+n,16,null,e||null);c.projection===null&&(c.projection=t),Kd();let f=!s[yr]||$d();s[Ue][Le].projection[c.projection]===null&&l!==null?vI(s,a,l):f&&!al(c)&&hx(a,s,c)}function vI(n,t,e){let r=ve+e,i=t.data[r],o=n[r],s=Za(o,i.tView.ssrId),a=No(n,i,void 0,{dehydratedView:s});Ro(o,a,0,_i(i,s))}function jn(n,t,e,r){return Fv(n,t,e,r),jn}function yt(n,t,e){return Ov(n,t,e),yt}function ne(n){let t=A(),e=pe(),r=Ta();ho(r+1);let i=kf(e,r);if(n.dirty&&eg(t)===((i.metadata.flags&2)===2)){if(i.matches===null)n.reset([]);else{let o=Lv(t,r);n.reset(o,xy),n.notifyOnChanges()}return!0}return!1}function re(){return Tf(A(),Ta())}function El(n,t,e,r,i){return Bv(t,Fv(n,e,r,i)),El}function wl(n,t,e,r){return Bv(n,Ov(t,e,r)),wl}function Cl(n=1){ho(Ta()+n)}function vt(n){let t=lg();return Jp(t,ve+n)}function ja(n,t){return n<<17|t<<2}function kr(n){return n>>17&32767}function bI(n){return(n&2)==2}function _I(n,t){return n&131071|t<<17}function Ku(n){return n|2}function Ei(n){return(n&131068)>>2}function hu(n,t){return n&-131069|t<<2}function DI(n){return(n&1)===1}function Zu(n){return n|1}function EI(n,t,e,r,i,o){let s=o?t.classBindings:t.styleBindings,a=kr(s),l=Ei(s);n[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||si(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let m=kr(n[a+1]);n[r+1]=ja(m,a),m!==0&&(n[m+1]=hu(n[m+1],r)),n[a+1]=_I(n[a+1],r)}else n[r+1]=ja(a,0),a!==0&&(n[a+1]=hu(n[a+1],r)),a=r;else n[r+1]=ja(l,0),a===0?a=r:n[l+1]=hu(n[l+1],r),l=r;c&&(n[r+1]=Ku(n[r+1])),sy(n,d,r,!0),sy(n,d,r,!1),wI(t,d,n,r,o),s=ja(a,l),o?t.classBindings=s:t.styleBindings=s}function wI(n,t,e,r,i){let o=i?n.residualClasses:n.residualStyles;o!=null&&typeof t=="string"&&si(o,t)>=0&&(e[r+1]=Zu(e[r+1]))}function sy(n,t,e,r){let i=n[e+1],o=t===null,s=r?kr(i):Ei(i),a=!1;for(;s!==0&&(a===!1||o);){let l=n[s],c=n[s+1];CI(l,t)&&(a=!0,n[s+1]=r?Zu(c):Ku(c)),s=r?kr(c):Ei(c)}a&&(n[e+1]=r?Ku(i):Zu(i))}function CI(n,t){return n===null||t==null||(Array.isArray(n)?n[1]:n)===t?!0:Array.isArray(n)&&typeof t=="string"?si(n,t)>=0:!1}var Tt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function xI(n){return n.substring(Tt.key,Tt.keyEnd)}function II(n){return SI(n),Yv(n,Kv(n,0,Tt.textEnd))}function Yv(n,t){let e=Tt.textEnd;return e===t?-1:(t=Tt.keyEnd=MI(n,Tt.key=t,e),Kv(n,t,e))}function SI(n){Tt.key=0,Tt.keyEnd=0,Tt.value=0,Tt.valueEnd=0,Tt.textEnd=n.length}function Kv(n,t,e){for(;t<e&&n.charCodeAt(t)<=32;)t++;return t}function MI(n,t,e){for(;t<e&&n.charCodeAt(t)>32;)t++;return t}function ie(n,t){return kI(n,t,null,!0),ie}function bn(n){AI(LI,TI,n,!0)}function TI(n,t){for(let e=II(t);e>=0;e=Yv(t,e))va(n,xI(t),!0)}function kI(n,t,e,r){let i=A(),o=pe(),s=Qd(2);if(o.firstUpdatePass&&Xv(o,n,s,r),t!==mt&&ft(i,s,t)){let a=o.data[un()];Qv(o,a,i,i[le],n,i[s+1]=BI(t,e),r,s)}}function AI(n,t,e,r){let i=pe(),o=Qd(2);i.firstUpdatePass&&Xv(i,null,o,r);let s=A();if(e!==mt&&ft(s,o,e)){let a=i.data[un()];if(Jv(a,r)&&!Zv(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=fa(l,e||"")),Yu(i,a,s,e,r)}else VI(i,a,s,s[le],s[o+1],s[o+1]=PI(n,t,e),r,o)}}function Zv(n,t){return t>=n.expandoStartIndex}function Xv(n,t,e,r){let i=n.data;if(i[e+1]===null){let o=i[un()],s=Zv(n,e);Jv(o,r)&&t===null&&!s&&(t=!1),t=NI(i,o,t,r),EI(i,o,t,e,s,r)}}function NI(n,t,e,r){let i=hg(n),o=r?t.residualClasses:t.residualStyles;if(i===null)(r?t.classBindings:t.styleBindings)===0&&(e=mu(null,n,t,e,r),e=Mo(e,t.attrs,r),o=null);else{let s=t.directiveStylingLast;if(s===-1||n[s]!==i)if(e=mu(i,n,t,e,r),o===null){let l=RI(n,t,r);l!==void 0&&Array.isArray(l)&&(l=mu(null,n,t,l[1],r),l=Mo(l,t.attrs,r),OI(n,t,r,l))}else o=FI(n,t,r)}return o!==void 0&&(r?t.residualClasses=o:t.residualStyles=o),e}function RI(n,t,e){let r=e?t.classBindings:t.styleBindings;if(Ei(r)!==0)return n[kr(r)]}function OI(n,t,e,r){let i=e?t.classBindings:t.styleBindings;n[kr(i)]=r}function FI(n,t,e){let r,i=t.directiveEnd;for(let o=1+t.directiveStylingLast;o<i;o++){let s=n[o].hostAttrs;r=Mo(r,s,e)}return Mo(r,t.attrs,e)}function mu(n,t,e,r,i){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=t[a],r=Mo(r,o.hostAttrs,i),o!==n);)a++;return n!==null&&(e.directiveStylingLast=a),r}function Mo(n,t,e){let r=e?1:2,i=-1;if(t!==null)for(let o=0;o<t.length;o++){let s=t[o];typeof s=="number"?i=s:i===r&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),va(n,s,e?!0:t[++o]))}return n===void 0?null:n}function PI(n,t,e){if(e==null||e==="")return it;let r=[],i=Wt(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)n(r,i[o],!0);else if(i instanceof Set)for(let o of i)n(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&n(r,o,i[o]);else typeof i=="string"&&t(r,i);return r}function LI(n,t,e){let r=String(t);r!==""&&!r.includes(" ")&&va(n,r,e)}function VI(n,t,e,r,i,o,s,a){i===mt&&(i=it);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let m=l<i.length?i[l+1]:void 0,h=c<o.length?o[c+1]:void 0,p=null,D;d===f?(l+=2,c+=2,m!==h&&(p=f,D=h)):f===null||d!==null&&d<f?(l+=2,p=d):(c+=2,p=f,D=h),p!==null&&Qv(n,t,e,r,p,D,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function Qv(n,t,e,r,i,o,s,a){if(!(t.type&3))return;let l=n.data,c=l[a+1],d=DI(c)?ay(l,t,e,i,Ei(c),s):void 0;if(!ol(d)){ol(o)||bI(c)&&(o=ay(l,null,e,i,a,s));let f=Vd(un(),e);px(r,s,f,i,o)}}function ay(n,t,e,r,i,o){let s=t===null,a;for(;i>0;){let l=n[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,m=e[i+1];m===mt&&(m=f?it:void 0);let h=f?ba(m,r):d===r?m:void 0;if(c&&!ol(h)&&(h=ba(l,r)),ol(h)&&(a=h,s))return a;let p=n[i+1];i=s?kr(p):Ei(p)}if(t!==null){let l=o?t.residualClasses:t.residualStyles;l!=null&&(a=ba(l,r))}return a}function ol(n){return n!==void 0}function BI(n,t){return n==null||n===""||(typeof t=="string"?n=n+t:typeof n=="object"&&(n=ua(Wt(n)))),n}function Jv(n,t){return(n.flags&(t?8:16))!==0}function F(n,t=""){let e=A(),r=pe(),i=n+ve,o=r.firstCreatePass?Ci(r,i,1,t,null):r.data[i],s=jI(r,e,o,t);e[i]=s,Ra()&&gf(r,e,s,o),fi(o,!1)}var jI=(n,t,e,r)=>(po(!0),TC(t[le],r));function eb(n,t,e,r=""){return ft(n,wr(),e)?t+pa(e)+r:mt}function Rt(n){return Lo("",n),Rt}function Lo(n,t,e){let r=A(),i=eb(r,n,t,e);return i!==mt&&HI(r,un(),i),Lo}function HI(n,t,e){let r=Vd(t,n);kC(n[le],r,e)}function Hf(n,t,e=""){return eb(A(),n,t,e)}function ly(n,t,e){let r=pe();r.firstCreatePass&&tb(t,r.data,r.blueprint,Ut(n),e)}function tb(n,t,e,r,i){if(n=Oe(n),Array.isArray(n))for(let o=0;o<n.length;o++)tb(n[o],t,e,r,i);else{let o=pe(),s=A(),a=Ae(),l=fr(n)?n:Oe(n.provide),c=Nd(n),d=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(fr(n)||!n.multi){let h=new Ir(c,i,Ne,null),p=gu(l,t,i?d:d+m,f);p===-1?(bu(Ya(a,s),o,l),pu(o,n,t.length),t.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[p]=h,s[p]=h)}else{let h=gu(l,t,d+m,f),p=gu(l,t,d,d+m),D=h>=0&&e[h],C=p>=0&&e[p];if(i&&!C||!i&&!D){bu(Ya(a,s),o,l);let P=$I(i?zI:UI,e.length,i,r,c,n);!i&&C&&(e[p].providerFactory=P),pu(o,n,t.length,0),t.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(P),s.push(P)}else{let P=nb(e[i?p:h],c,!i&&r);pu(o,n,h>-1?h:p,P)}!i&&r&&C&&e[p].componentProviders++}}}function pu(n,t,e,r){let i=fr(t),o=Kp(t);if(i||o){let l=(o?Oe(t.useClass):t).prototype.ngOnDestroy;if(l){let c=n.destroyHooks||(n.destroyHooks=[]);if(!i&&t.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function nb(n,t,e){return e&&n.componentProviders++,n.multi.push(t)-1}function gu(n,t,e,r){for(let i=e;i<r;i++)if(t[i]===n)return i;return-1}function UI(n,t,e,r,i){return Xu(this.multi,[])}function zI(n,t,e,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Eo(r,r[x],this.providerFactory.index,i);s=l.slice(0,a),Xu(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Xu(o,s);return s}function Xu(n,t){for(let e=0;e<n.length;e++){let r=n[e];t.push(r())}return t}function $I(n,t,e,r,i,o){let s=new Ir(n,e,Ne,null);return s.multi=[],s.index=t,s.componentProviders=0,nb(s,i,r&&!e),s}function Ce(n,t){return e=>{e.providersResolver=(r,i)=>ly(r,i?i(n):n,!1),t&&(e.viewProvidersResolver=(r,i)=>ly(r,i?i(t):t,!0))}}function Uf(n,t,e){return WI(A(),Xd(),n,t,e)}function zf(n,t,e,r,i,o,s){let a=Xd()+n,l=A(),c=o0(l,a,e,r,i,o);return ft(l,a+4,s)||c?Cv(l,a+5,t(e,r,i,o,s)):i0(l,a+5)}function GI(n,t){let e=n[t];return e===mt?void 0:e}function WI(n,t,e,r,i,o){let s=t+e;return ft(n,s,i)?Cv(n,s+1,o?r.call(o,i):r(i)):GI(n,s+1)}function Or(n,t){return vl(n,t)}var rb=(()=>{class n{applicationErrorHandler=u(fn);appRef=u(At);taskService=u(Cr);ngZone=u(T);zonelessEnabled=u(yo);tracing=u(qt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new X;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(oo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(su,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Eg:nu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(oo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function $f(){return vn("NgZoneless"),ln([...Gf(),[]])}function Gf(){return[{provide:Lt,useExisting:rb},{provide:T,useClass:so},{provide:yo,useValue:!0}]}function qI(){return typeof $localize<"u"&&$localize.locale||Po}var xl=new g("",{factory:()=>u(xl,{optional:!0,skipSelf:!0})||qI()});function E(n,t){return Zi(n,t?.equal)}function I(n){return Jm(n)}var YI=n=>n;function Hn(n,t){if(typeof n=="function"){let e=Uc(n,YI,t?.equal);return ib(e,t?.debugName)}else{let e=Uc(n.source,n.computation,n.equal);return ib(e,n.debugName)}}function ib(n,t){let e=n[ce],r=n;return r.set=i=>Xm(e,i),r.update=i=>Qm(e,i),r.asReadonly=Oa.bind(n),r}var cb=Symbol("InputSignalNode#UNSET"),hS=$(_({},Xi),{transformFn:void 0,applyValueToInputSignal(n,t){Jn(n,t)}});function db(n,t){let e=Object.create(hS);e.value=n,e.transformFn=t?.transform;function r(){if(wn(e),e.value===cb){let i=null;throw new b(-950,i)}return e.value}return r[ce]=e,r}var xi=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>Ju(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function ob(n,t){return db(n,t)}function mS(n){return db(cb,n)}var Kt=(ob.required=mS,ob);function sb(n,t){return Af(t)}function pS(n,t){return Nf(t)}var Bo=(sb.required=pS,sb);function ab(n,t){return Af(t)}function gS(n,t){return Nf(t)}var ub=(ab.required=gS,ab);var yS=1e4;var QU=yS-1e3;var bt=(()=>{class n{static __NG_ELEMENT_ID__=vS}return n})();function vS(n){return bS(Ae(),A(),(n&16)===16)}function bS(n,t,e){if(dn(n)&&!e){let r=dt(n.index,t);return new Pn(r,r)}else if(n.type&175){let r=t[Ue];return new Pn(r,t)}return null}var qf=new g(""),_S=new g("");function Vo(n){return!n.moduleRef}function DS(n){let t=Vo(n)?n.r3Injector:n.moduleRef.injector,e=t.get(T);return e.run(()=>{Vo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let r=t.get(fn),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),Vo(n)){let o=()=>t.destroy(),s=n.platformInjector.get(qf);s.add(o),t.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(qf);s.add(o),n.moduleRef.onDestroy(()=>{Do(n.allPlatformModules,n.moduleRef),i.unsubscribe(),s.delete(o)})}return wS(r,e,()=>{let o=t.get(Cr),s=o.add(),a=t.get(Of);return a.runInitializers(),a.donePromise.then(()=>{let l=t.get(xl,Po);if(qv(l||Po),!t.get(_S,!0))return Vo(n)?t.get(At):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Vo(n)){let d=t.get(At);return n.rootComponent!==void 0&&d.bootstrap(n.rootComponent),d}else return ES?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var ES;function wS(n,t,e){try{let r=e();return Rr(r)?r.catch(i=>{throw t.runOutsideAngular(()=>n(i)),i}):r}catch(r){throw t.runOutsideAngular(()=>n(r)),r}}var Il=null;function CS(n=[],t){return q.create({name:t,providers:[{provide:co,useValue:"platform"},{provide:qf,useValue:new Set([()=>Il=null])},...n]})}function xS(n=[]){if(Il)return Il;let t=CS(n);return Il=t,Gv(),IS(t),t}function IS(n){let t=n.get(Fa,null);xt(n,()=>{t?.forEach(e=>e())})}function fb(n){let{rootComponent:t,appProviders:e,platformProviders:r,platformRef:i}=n;oe(J.BootstrapApplicationStart);try{let o=i?.injector??xS(r),s=[Gf(),Cg,...e||[]],a=new Io({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return DS({r3Injector:a.injector,platformInjector:o,rootComponent:t})}catch(o){return Promise.reject(o)}finally{oe(J.BootstrapApplicationEnd)}}function U(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function Fr(n,t=NaN){return!isNaN(parseFloat(n))&&!isNaN(Number(n))?Number(n):t}var Wf=Symbol("NOT_SET"),hb=new Set,SS=$(_({},Xi),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Wf,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(n){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Wf&&!Qn(this))return this.signal;try{for(let i of this.cleanup??hb)i()}finally{this.cleanup?.clear()}let t=[];n!==void 0&&t.push(n),t.push(this.registerCleanupFn);let e=Ft(this),r;try{r=this.userFn.apply(null,t)}finally{nn(this,e)}return(this.value===Wf||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Yf=class extends wo{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(t,e,r,i,o,s=null){super(t,[void 0,void 0,void 0,void 0],r,!1,o.get(Ve),s),this.scheduler=i;for(let a of ff){let l=e[a];if(l===void 0)continue;let c=Object.create(SS);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(wn(c),c.value),c.signal[ce]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();super.destroy();for(let t of this.nodes)if(t)try{for(let e of t.cleanup??hb)e()}finally{rn(t)}}};function Sl(n,t){let e=t?.injector??u(q),r=e.get(Lt),i=e.get(fl),o=e.get(qt,null,{optional:!0});i.impl??=e.get(hf);let s=n;typeof s=="function"&&(s={mixedReadWrite:n});let a=e.get(mi,null,{optional:!0}),l=new Yf(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,e,o?.snapshot(null));return i.impl.register(l),l}function Ml(n,t){let e=Sn(n),r=t.elementInjector||ai();return new Di(e).create(r,t.projectableNodes,t.hostElement,t.environmentInjector,t.directives,t.bindings)}var mb=null;function _t(){return mb}function Kf(n){mb??=n}var jo=class{},Ii=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:()=>u(pb),providedIn:"platform"})}return n})();var pb=(()=>{class n extends Ii{_location;_history;_doc=u(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _t().getBaseHref(this._doc)}onPopState(e){let r=_t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=_t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function vb(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function gb(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function Un(n){return n&&n[0]!=="?"?`?${n}`:n}var Tl=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:()=>u(TS),providedIn:"root"})}return n})(),MS=new g(""),TS=(()=>{class n extends Tl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return vb(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+Un(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+Un(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+Un(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||n)(R(Ii),R(MS,8))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kl=(()=>{class n{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=NS(gb(yb(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+Un(r))}normalize(e){return n.stripTrailingSlash(AS(this._basePath,yb(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Un(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Un(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=Un;static joinWithSlash=vb;static stripTrailingSlash=gb;static \u0275fac=function(r){return new(r||n)(R(Tl))};static \u0275prov=B({token:n,factory:()=>kS(),providedIn:"root"})}return n})();function kS(){return new kl(R(Tl))}function AS(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function yb(n){return n.replace(/\/index\.html$/,"")}function NS(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Ho=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||n)(Ne(pt))};static \u0275dir=H({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return n})();function Uo(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}var Zf="browser";function bb(n){return n===Zf}var zo=class{_doc;constructor(t){this._doc=t}manager},Al=(()=>{class n extends zo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||n)(R(V))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Ol=new g(""),eh=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof Al));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof Al);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new b(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||n)(R(Ol),R(T))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Xf="ng-app-id";function _b(n){for(let t of n)t.remove()}function Db(n,t){let e=t.createElement("style");return e.textContent=n,e}function LS(n,t,e,r){let i=n.head?.querySelectorAll(`style[${Xf}="${t}"],link[${Xf}="${t}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Xf),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Jf(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var th=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,LS(e,r,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,Db);r?.forEach(i=>this.addUsage(i,this.external,Jf))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(_b(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])_b(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,Db(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Jf(r,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===e?o.remove():i.push(o);r.elements=i}}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||n)(R(V),R(hn),R(mn,8),R(xr))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Qf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},nh=/%COMP%/g;var wb="%COMP%",VS=`_nghost-${wb}`,BS=`_ngcontent-${wb}`,jS=!0,HS=new g("",{factory:()=>jS});function US(n){return BS.replace(nh,n)}function zS(n){return VS.replace(nh,n)}function Cb(n,t){return t.map(e=>e.replace(nh,n))}var rh=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new $o(e,s,a,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof Rl?i.applyToHost(e):i instanceof Go&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case kt.Emulated:o=new Rl(l,c,r,this.appId,d,s,a,f);break;case kt.ShadowDom:return new Nl(l,e,r,s,a,this.nonce,f,c);case kt.ExperimentalIsolatedShadowDom:return new Nl(l,e,r,s,a,this.nonce,f);default:o=new Go(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||n)(R(eh),R(Nr),R(hn),R(HS),R(V),R(T),R(mn),R(qt,8))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),$o=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,r,i){this.eventManager=t,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Qf[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Eb(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(Eb(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){e.remove()}selectRootElement(t,e){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new b(-5104,!1);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,i){if(i){e=i+":"+e;let o=Qf[i];o?t.setAttributeNS(o,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){let i=Qf[r];i?t.removeAttributeNS(i,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,i){i&($t.DashCase|$t.Important)?t.style.setProperty(e,r,i&$t.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&$t.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t!=null&&(t[e]=r)}setValue(t,e){t.nodeValue=e}listen(t,e,r,i){if(typeof t=="string"&&(t=_t().getGlobalEventTarget(this.doc,t),!t))throw new b(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,i)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Eb(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Nl=class extends $o{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,r,i,o,s,a,l){super(t,i,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=Cb(r.id,c);for(let f of c){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let d=r.getExternalStyles?.();if(d)for(let f of d){let m=Jf(f,i);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Go=class extends $o{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,r,i,o,s,a,l){super(t,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?Cb(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Rl=class extends Go{contentAttr;hostAttr;constructor(t,e,r,i,o,s,a,l){let c=i+"-"+r.id;super(t,e,r,o,s,a,l,c),this.contentAttr=US(c),this.hostAttr=zS(c)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}};var Fl=class n extends jo{supportsDOMEvents=!0;static makeCurrent(){Kf(new n)}onAndCancel(t,e,r,i){return t.addEventListener(e,r,i),()=>{t.removeEventListener(e,r,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=$S();return e==null?null:GS(e)}resetBaseElement(){Wo=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Uo(document.cookie,t)}},Wo=null;function $S(){return Wo=Wo||document.head.querySelector("base"),Wo?Wo.getAttribute("href"):null}function GS(n){return new URL(n,document.baseURI).pathname}var xb=["alt","control","meta","shift"],WS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qS={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ib=(()=>{class n extends zo{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,r,i,o){let s=n.parseEventName(r),a=n.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_t().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),xb.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(e,r){let i=WS[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),xb.forEach(s=>{if(s!==i){let a=qS[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||n)(R(V))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();async function ih(n,t,e){let r=_({rootComponent:n},YS(t,e));return fb(r)}function YS(n,t){return{platformRef:t?.platformRef,appProviders:[...JS,...n?.providers??[]],platformProviders:QS}}function KS(){Fl.makeCurrent()}function ZS(){return new Ct}function XS(){return tf(document),document}var QS=[{provide:xr,useValue:Zf},{provide:Fa,useValue:KS,multi:!0},{provide:V,useFactory:XS}];var JS=[{provide:co,useValue:"root"},{provide:Ct,useFactory:ZS},{provide:Ol,useClass:Al,multi:!0},{provide:Ol,useClass:Ib,multi:!0},rh,{provide:Nr,useClass:th},{provide:th,useExisting:Nr},eh,{provide:Ie,useExisting:rh},[]];var Dn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(t,e){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(t,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ll=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Vl=class{encodeKey(t){return Sb(t)}encodeValue(t){return Sb(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function eM(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var tM=/%(\d[a-f0-9])/gi,nM={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Sb(n){return encodeURIComponent(n).replace(tM,(t,e)=>nM[e]??t)}function Pl(n){return`${n}`}var _n=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Vl,t.fromString){if(t.fromObject)throw new b(2805,!1);this.map=eM(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let r=t.fromObject[e],i=Array.isArray(r)?r.map(Pl):[Pl(r)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Pl(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(Pl(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function rM(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Mb(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Tb(n){return typeof Blob<"u"&&n instanceof Blob}function kb(n){return typeof FormData<"u"&&n instanceof FormData}function iM(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var oh="Content-Type",Ab="Accept",Rb="text/plain",Ob="application/json",oM=`${Ob}, ${Rb}, */*`,Si=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,r,i){this.url=e,this.method=t.toUpperCase();let o;if(rM(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Dn,this.context??=new Ll,!this.params)this.params=new _n,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,l="",c=e.indexOf("#");c!==-1&&(l=e.substring(c),a=e.substring(0,c));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Mb(this.body)||Tb(this.body)||kb(this.body)||iM(this.body)?this.body:this.body instanceof _n?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||kb(this.body)?null:Tb(this.body)?this.body.type||null:Mb(this.body)?null:typeof this.body=="string"?Rb:this.body instanceof _n?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ob:null}clone(t={}){let e=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=t.keepalive??this.keepalive,s=t.priority||this.priority,a=t.cache||this.cache,l=t.mode||this.mode,c=t.redirect||this.redirect,d=t.credentials||this.credentials,f=t.referrer??this.referrer,m=t.integrity||this.integrity,h=t.referrerPolicy||this.referrerPolicy,p=t.transferCache??this.transferCache,D=t.timeout??this.timeout,C=t.body!==void 0?t.body:this.body,P=t.withCredentials??this.withCredentials,xe=t.reportProgress??this.reportProgress,nt=t.reportUploadProgress??this.reportUploadProgress,Gr=t.reportDownloadProgress??this.reportDownloadProgress,Wi=t.headers||this.headers,Wn=t.params||this.params,Is=t.context??this.context;return t.setHeaders!==void 0&&(Wi=Object.keys(t.setHeaders).reduce((Wr,qn)=>Wr.set(qn,t.setHeaders[qn]),Wi)),t.setParams&&(Wn=Object.keys(t.setParams).reduce((Wr,qn)=>Wr.set(qn,t.setParams[qn]),Wn)),new n(e,r,C,{params:Wn,headers:Wi,context:Is,reportProgress:xe,reportUploadProgress:nt,reportDownloadProgress:Gr,responseType:i,withCredentials:P,transferCache:p,keepalive:o,cache:a,priority:s,timeout:D,mode:l,redirect:c,credentials:d,referrer:f,integrity:m,referrerPolicy:h})}},Mi=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Mi||{}),Ti=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,r="OK"){this.headers=t.headers||new Dn,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Bl=class n extends Ti{constructor(t={}){super(t)}type=Mi.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},qo=class n extends Ti{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Mi.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},Pr=class extends Ti{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},sM=200;var aM=/^\)\]\}',?\n/,v8=1024*1024,Fb=new g("",{factory:()=>null}),jl=(()=>{class n{fetchImpl=u(ah,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(T);destroyRef=u(Ve);maxResponseSize=u(Fb);handle(e){return new W(r=>{let i=new AbortController;this.doRequest(e,i.signal,r).then(lh,s=>r.error(new Pr({error:s})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),i.abort()}})}async doRequest(e,r,i){let o=this.createRequestInit(e),s;try{let C=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,_({signal:r},o)));lM(C),i.next({type:Mi.Sent}),s=await C}catch(C){i.error(new Pr({error:C,status:C.status??0,statusText:C.statusText,url:e.urlWithParams,headers:C.headers}));return}let a=new Dn(s.headers),l=s.statusText,c=s.url||e.urlWithParams,d=s.status,f=null,m=e.reportProgress||e.reportDownloadProgress;if(m&&i.next(new Bl({headers:a,status:d,statusText:l,url:c})),s.body){let C=s.headers.get("content-length"),P=C!==null?Number(C):NaN;this.maxResponseSize!==null&&Number.isFinite(P)&&P>this.maxResponseSize&&Nb(this.maxResponseSize);let xe=[],nt=s.body.getReader(),Gr=0,Wi,Wn,Is=typeof Zone<"u"&&Zone.current,Wr=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await nt.cancel(),Wr=!0;break}let{done:qi,value:Rc}=await nt.read();if(qi)break;if(xe.push(Rc),Gr+=Rc.length,this.maxResponseSize!==null&&Gr>this.maxResponseSize&&(await nt.cancel(),Nb(this.maxResponseSize)),m){Wn=e.responseType==="text"?(Wn??"")+(Wi??=new TextDecoder).decode(Rc,{stream:!0}):void 0;let Bm=()=>i.next({type:Mi.DownloadProgress,total:Number.isFinite(P)?P:void 0,loaded:Gr,partialText:Wn});Is?Is.run(Bm):Bm()}}}),Wr){i.complete();return}let qn=this.concatChunks(xe,Gr);try{let qi=s.headers.get(oh)??"";f=this.parseBody(e,qn,qi,d)}catch(qi){i.error(new Pr({error:qi,headers:new Dn(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?sM:0);let h=d>=200&&d<300,p=s.redirected,D=s.type;h?(i.next(new qo({body:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:D})),i.complete()):i.error(new Pr({error:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:D}))}parseBody(e,r,i,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(r).replace(aM,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new b(2824,!1);let r={},i;if(i=e.credentials,e.withCredentials&&(i="include"),e.headers.forEach((o,s)=>r[o]=s.join(",")),e.headers.has(Ab)||(r[Ab]=oM),!e.headers.has(oh)){let o=e.detectContentTypeHeader();o!==null&&(r[oh]=o)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,r){let i=new Uint8Array(r),o=0;for(let s of e)i.set(s,o),o+=s.length;return i}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),ah=class{};function lh(){}function lM(n){n.then(lh,lh)}function Nb(n){throw new b(2825,!1)}function cM(n,t){return t(n)}function dM(n,t,e){return(r,i)=>xt(e,()=>t(r,o=>n(o,i)))}var Pb=new g("",{factory:()=>[]}),Lb=new g(""),Vb=new g("",{factory:()=>!0});var ch=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(jl),i},providedIn:"root"})}return n})();var Hl=(()=>{class n{backend;injector;chain=null;pendingTasks=u(vo);contributeToStability=u(Vb);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Pb),...this.injector.get(Lb,[])]));this.chain=r.reduceRight((i,o)=>dM(i,o,this.injector),cM)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ni(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||n)(R(ch),R(_e))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dh=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(Hl),i},providedIn:"root"})}return n})();function sh(n,t){return _({body:t},n)}var Ul=(()=>{class n{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof Si)o=e;else{let l;i.headers instanceof Dn?l=i.headers:l=new Dn(i.headers);let c;i.params&&(i.params instanceof _n?c=i.params:c=new _n({fromObject:i.params})),o=new Si(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=sr(o).pipe(ed(l=>this.handler.handle(l)));if(e instanceof Si||i.observe==="events")return s;let a=s.pipe(Re(l=>l instanceof qo));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(be(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new b(2806,!1);return l.body}));case"blob":return a.pipe(be(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new b(2807,!1);return l.body}));case"text":return a.pipe(be(l=>{if(l.body!==null&&typeof l.body!="string")throw new b(2808,!1);return l.body}));default:return a.pipe(be(l=>l.body))}case"response":return a;default:throw new b(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new _n().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,sh(i,r))}post(e,r,i={}){return this.request("POST",e,sh(i,r))}put(e,r,i={}){return this.request("PUT",e,sh(i,r))}static \u0275fac=function(r){return new(r||n)(R(dh))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var uM=new g("",{factory:()=>!0}),fM="XSRF-TOKEN",hM=new g("",{factory:()=>fM}),mM="X-XSRF-TOKEN",pM=new g("",{factory:()=>mM}),gM=(()=>{class n{cookieName=u(hM);doc=u(V);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Uo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Bb=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(gM),i},providedIn:"root"})}return n})();function yM(n,t){if(!u(uM)||n.method==="GET"||n.method==="HEAD")return t(n);try{let i=u(Ii).href,{origin:o}=new URL(i),{origin:s}=new URL(n.url,o);if(o!==s)return t(n)}catch{return t(n)}let e=u(Bb).getToken(),r=u(pM);return e!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,e)})),t(n)}function uh(...n){let t=[Ul,jl,Hl,{provide:dh,useExisting:Hl},{provide:ch,useFactory:()=>u(jl)},{provide:Pb,useValue:yM,multi:!0}];for(let e of n)t.push(...e.\u0275providers);return ln(t)}var fh=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(vM),i},providedIn:"root"})}return n})(),vM=(()=>{class n extends fh{_doc=u(V);sanitize(e,r){if(r==null)return null;switch(e){case ht.NONE:return r;case ht.HTML:return Ln(r,"HTML")?Wt(r):dl(this._doc,String(r)).toString();case ht.STYLE:return Ln(r,"Style")?Wt(r):r;case ht.SCRIPT:if(Ln(r,"Script"))return Wt(r);throw new b(5200,!1);case ht.URL:return Ln(r,"URL")?Wt(r):cl(String(r));case ht.RESOURCE_URL:if(Ln(r,"ResourceURL"))return Wt(r);throw new b(5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(e){return of(e)}bypassSecurityTrustStyle(e){return sf(e)}bypassSecurityTrustScript(e){return af(e)}bypassSecurityTrustUrl(e){return lf(e)}bypassSecurityTrustResourceUrl(e){return cf(e)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Wb=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(r){return new(r||n)(Ne(Ee),Ne(N))};static \u0275dir=H({type:n})}return n})(),bM=(()=>{class n extends Wb{static \u0275fac=(()=>{let e;return function(i){return(e||(e=gn(n)))(i||n)}})();static \u0275dir=H({type:n,features:[Qe]})}return n})(),es=new g("");var _M={provide:es,useExisting:ot(()=>qb),multi:!0};function DM(){let n=_t()?_t().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var EM=new g(""),qb=(()=>{class n extends Wb{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!DM())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(r){return new(r||n)(Ne(Ee),Ne(N),Ne(EM,8))};static \u0275dir=H({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&he("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Ce([_M]),Qe]})}return n})();function ph(n){return n==null||gh(n)===0}function gh(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Lr=new g(""),Yb=new g(""),wM=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Zt=class{static min(t){return CM(t)}static max(t){return xM(t)}static required(t){return Kb(t)}static requiredTrue(t){return IM(t)}static email(t){return SM(t)}static minLength(t){return MM(t)}static maxLength(t){return TM(t)}static pattern(t){return kM(t)}static nullValidator(t){return $l()}static compose(t){return t_(t)}static composeAsync(t){return n_(t)}};function CM(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function xM(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Kb(n){return ph(n.value)?{required:!0}:null}function IM(n){return n.value===!0?null:{required:!0}}function SM(n){return ph(n.value)||wM.test(n.value)?null:{email:!0}}function MM(n){return t=>{let e=t.value?.length??gh(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function TM(n){return t=>{let e=t.value?.length??gh(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function kM(n){if(!n)return $l;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(ph(r.value))return null;let i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function $l(n){return null}function Zb(n){return n!=null}function Xb(n){return Rr(n)?on(n):n}function Qb(n){let t={};return n.forEach(e=>{t=e!=null?_(_({},t),e):t}),Object.keys(t).length===0?null:t}function Jb(n,t){return t.map(e=>e(n))}function AM(n){return!n.validate}function e_(n){return n.map(t=>AM(t)?t:e=>t.validate(e))}function t_(n){if(!n)return null;let t=n.filter(Zb);return t.length==0?null:function(e){return Qb(Jb(e,t))}}function yh(n){return n!=null?t_(e_(n)):null}function n_(n){if(!n)return null;let t=n.filter(Zb);return t.length==0?null:function(e){let r=Jb(e,t).map(Xb);return Jc(r).pipe(be(Qb))}}function vh(n){return n!=null?n_(e_(n)):null}function jb(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function r_(n){return n._rawValidators}function i_(n){return n._rawAsyncValidators}function hh(n){return n?Array.isArray(n)?n:[n]:[]}function Gl(n,t){return Array.isArray(n)?n.includes(t):n===t}function Hb(n,t){let e=hh(t);return hh(n).forEach(i=>{Gl(e,i)||e.push(i)}),e}function Ub(n,t){return hh(t).filter(e=>!Gl(n,e))}var Wl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=yh(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=vh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},Ni=class extends Wl{name;get formDirective(){return null}get path(){return null}};var Yo="VALID",zl="INVALID",ki="PENDING",Ko="DISABLED",zn=class{},ql=class extends zn{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Xo=class extends zn{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Qo=class extends zn{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Ai=class extends zn{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Yl=class extends zn{source;constructor(t){super(),this.source=t}},Ri=class extends zn{source;constructor(t){super(),this.source=t}};function o_(n){return(Xl(n)?n.validators:n)||null}function NM(n){return Array.isArray(n)?yh(n):n||null}function s_(n,t){return(Xl(t)?t.asyncValidators:n)||null}function RM(n){return Array.isArray(n)?vh(n):n||null}function Xl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function OM(n,t,e){let r=n.controls;if(!(t?Object.keys(r):r).length)throw new b(1e3,"");if(!a_(r,e))throw new b(1001,"")}function FM(n,t,e){n._forEachChild((r,i)=>{if(e[i]===void 0)throw new b(-1002,"")})}var Oi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=j(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return I(this.statusReactive)}set status(t){I(()=>this.statusReactive.set(t))}_status=E(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===Yo}get invalid(){return this.status===zl}get pending(){return this.status===ki}get disabled(){return this.status===Ko}get enabled(){return this.status!==Ko}errors;get pristine(){return I(this.pristineReactive)}set pristine(t){I(()=>this.pristineReactive.set(t))}_pristine=E(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return I(this.touchedReactive)}set touched(t){I(()=>this.touchedReactive.set(t))}_touched=E(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Hb(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Hb(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ub(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ub(t,this._rawAsyncValidators))}hasValidator(t){return Gl(this._rawValidators,t)}hasAsyncValidator(t){return Gl(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched($(_({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new Qo(!0,r))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),t.onlySelf||this._parent?._updateTouched(t,r),e&&t.emitEvent!==!1&&this._events.next(new Qo(!1,r))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let r=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty($(_({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new Xo(!1,r))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,r),e&&t.emitEvent!==!1&&this._events.next(new Xo(!0,r))}markAsPending(t={}){this.status=ki;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ai(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending($(_({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Ko,this.errors=null,this._forEachChild(i=>{i.disable($(_({},t),{onlySelf:!0}))}),this._updateValue();let r=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ql(this.value,r)),this._events.next(new Ai(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Yo,this._forEachChild(r=>{r.enable($(_({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors($(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Yo||this.status===ki)&&this._runAsyncValidator(r,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ql(this.value,e)),this._events.next(new Ai(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity($(_({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ko:Yo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ki,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let r=Xb(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){let r=e?this.get(e):this;return r?.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new Ai(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,r)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?Ko:this.errors?zl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ki)?ki:this._anyControlsHaveStatus(zl)?zl:Yo}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new Xo(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Qo(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Xl(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=NM(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=RM(this._rawAsyncValidators)}_updateHasRequiredValidator(){I(()=>this._hasRequired.set(this.hasValidator(Zt.required)))}};function a_(n,t){return Object.hasOwn(n,t)}function bh(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function l_(n){if(n.tagName!=="INPUT")return!1;let t=n.type;return t==="number"||t==="range"||t==="date"||t==="month"}function c_(n){return n.tagName==="INPUT"||n.tagName==="TEXTAREA"}function ts(n,t,e,r){switch(e){case"name":n.setAttribute(t,e,r);break;case"disabled":case"readonly":case"required":r?n.setAttribute(t,e,""):n.removeAttribute(t,e);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?n.setAttribute(t,e,r.toString()):n.removeAttribute(t,e);break}}var mh=class{kind;context;control;message;constructor({kind:t,context:e,control:r}){this.kind=t,this.context=e,this.control=r}};var PM=(()=>{class n{_validator=$l;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):$l,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,features:[Be]})}return n})();var LM={provide:Lr,useExisting:ot(()=>d_),multi:!0};var d_=(()=>{class n extends PM{required;inputName="required";normalizeInput=U;createValidator=e=>Kb;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=gn(n)))(i||n)}})();static \u0275dir=H({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&ge("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Ce([LM]),Qe]})}return n})();var u_=new g(""),f_=new g("",{factory:()=>VM}),VM="always";function zb(n,t,e=!0){let r=()=>{};t?.valueAccessor?.registerOnChange(r),t?.valueAccessor?.registerOnTouched(r),Zl(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Kl(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function h_(n,t){let e=r_(n);t.validator!==null?n.setValidators(jb(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let r=i_(n);t.asyncValidator!==null?n.setAsyncValidators(jb(r,t.asyncValidator)):typeof r=="function"&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();Kl(t._rawValidators,i),Kl(t._rawAsyncValidators,i)}function Zl(n,t){let e=!1;if(n!==null){if(t.validator!==null){let i=r_(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==t.validator);o.length!==i.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let i=i_(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==t.asyncValidator);o.length!==i.length&&(e=!0,n.setAsyncValidators(o))}}}let r=()=>{};return Kl(t._rawValidators,r),Kl(t._rawAsyncValidators,r),e}function m_(n,t){n==null,h_(n,t)}function BM(n,t){return Zl(n,t)}function jM(n){return Object.getPrototypeOf(n.constructor)===bM}function p_(n,t){n._syncPendingControls(),t.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function _h(n,t){if(!t)return null;Array.isArray(t);let e,r,i;return t.forEach(o=>{o.constructor===qb?e=o:jM(o)?r=o:i=o}),i||r||e||null}function HM(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var $n=class extends Wl{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Ri&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=_h(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,r){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=r,this.injector?.get(Ve)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(bt);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new X,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof Ri&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),t.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=bh(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof d_))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,t.setCustomControlModelInput(r.value)),this.bindControlProperty(t,i,"touched",r.touched),this.bindControlProperty(t,i,"dirty",r.dirty),this.bindControlProperty(t,i,"valid",r.valid),this.bindControlProperty(t,i,"invalid",r.invalid),this.bindControlProperty(t,i,"pending",r.pending),this.bindControlProperty(t,i,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(t,i,"required",this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let s=this._convertErrors(o);t.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,r,i){if(e[r]===i)return;e[r]=i;let o=t.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&ts(this.renderer,t.nativeElement,r,i)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([r,i])=>new mh({context:i,kind:r,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,r=E(()=>{let i=t();return i.length===0?null:i.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Me(()=>{e=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var Jo=class extends Oi{constructor(t,e,r){super(o_(e),s_(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){let r=this._find(t);return r||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){I(()=>{FM(this,!0,t),Object.keys(t).forEach(r=>{OM(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(r=>{let i=this._find(r);i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t?t[i]:null,$(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ri(this))}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return a_(this.controls,t)?this.controls[t]:null}};var UM={provide:Ni,useExisting:ot(()=>ns)},Zo=Promise.resolve(),ns=(()=>{class n extends Ni{callSetDisabledState;get submitted(){return I(this.submittedReactive)}_submitted=E(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new Jo({},yh(e),vh(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Zo.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Zo.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Zo.then(()=>{let r=this._findContainer(e.path),i=new Jo({});m_(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Zo.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){Zo.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),p_(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Yl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||n)(Ne(Lr,10),Ne(Yb,10),Ne(f_,8))};static \u0275dir=H({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&he("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ce([UM]),Qe]})}return n})();function $b(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Gb(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var zM=class extends Oi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,r){super(o_(e),s_(r,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Gb(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){I(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ri(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){$b(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){$b(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Gb(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var $M=n=>n instanceof zM;var GM=(()=>{class n extends Ni{callSetDisabledState;get submitted(){return I(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=E(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Zl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return e._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){zb(e.control||null,e,!1),HM(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,p_(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Yl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(zb(r||null,e),$M(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);m_(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&BM(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){h_(this.form,this),this._oldForm&&Zl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||n)(Ne(Lr,10),Ne(Yb,10),Ne(f_,8))};static \u0275dir=H({type:n,features:[Qe,Be]})}return n})();var WM={provide:Ni,useExisting:ot(()=>rs)},rs=(()=>{class n extends GM{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=gn(n)))(i||n)}})();static \u0275dir=H({type:n,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&he("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ce([WM]),Qe]})}return n})();var Dh=0;function qM(){return Dh}function Gn(n,t){return(...e)=>{try{return Dh=t,n(...e)}finally{Dh=0}}}function YM(n){return!n}function g_(n){return n}function Xt(n){return Array.isArray(n)}function Jl(n){return(typeof n=="object"||typeof n=="function")&&n!=null}var Vr=Symbol(),ac=Symbol(),os=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(y_(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(r=>y_(this.predicates,r)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}},ec=class extends os{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let r=e(t);return r&&r!==ac})}},Pi=class n extends os{ignore;static ignoreNull(t){return new n(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,r)=>{let i=r(t);return i===void 0||i===ac?e:Xt(i)?[...e,...this.ignore?i.filter(o=>!this.ignore(o)):i]:this.ignore&&this.ignore(i)?e:[...e,i]},[])}},Eh=class extends Pi{constructor(t){super(t,void 0)}},wh=class extends os{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let r=0;r<this.fns.length;r++){let i=this.fns[r](t);i!==ac&&(e=this.key.reducer.reduce(e,i))}return e}};function y_(n,t){return n.length===0?t:e=>{for(let r of n){let i=e.stateOf(r.path),o=I(i.structure.pathKeys).length-r.depth;for(let s=0;s<o;s++)i=i.structure.parent;if(!r.fn(i.context))return ac}return t(e)}}var Li=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new ec(t),this.disabledReasons=new Eh(t),this.readonly=new ec(t),this.syncErrors=Pi.ignoreNull(t),this.syncTreeErrors=Pi.ignoreNull(t),this.asyncErrors=Pi.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new wh(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let r=t.metadata.get(e);this.getMetadata(e).mergeIn(r)}}},tc=class{depth;constructor(t){this.depth=t}build(){return new nc(this,[],0)}},Vi=class n extends tc{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Vr){let e=this.getCurrent().children;e.size>(e.has(Vr)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:Gn(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ss(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},ss=class extends tc{logic=new Li([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(Gn(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(Gn(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(Gn(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(Gn(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(Gn(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(Gn(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(Gn(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Vi(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}},nc=class n{builder;predicates;depth;logic;constructor(t,e,r){this.builder=t,this.predicates=e,this.depth=r,this.logic=t?KM(t,e,r):new Li([])}getChild(t){let e=this.builder?__(this.builder,t):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:r,predicates:i}=e[0];return new n(r,[...this.predicates,...i.map(o=>xh(o,this.depth))],this.depth+1)}else{let r=e.map(({builder:i,predicates:o})=>new n(i,[...this.predicates,...o.map(s=>xh(s,this.depth))],this.depth+1));return new Ch(r)}}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}},Ch=class n{all;logic;constructor(t){this.all=t,this.logic=new Li([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new n(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function __(n,t){if(n instanceof Vi)return n.all.flatMap(({builder:e,predicate:r})=>{let i=__(e,t);return r?i.map(({builder:o,predicates:s})=>({builder:o,predicates:[...s,r]})):i});if(n instanceof ss)return[...t!==Vr&&n.children.has(Vr)?[{builder:n.getChild(Vr),predicates:[]}]:[],...n.children.has(t)?[{builder:n.getChild(t),predicates:[]}]:[]];throw new b(1909,!1)}function KM(n,t,e){let r=new Li(t);if(n instanceof Vi){let i=n.all.map(({builder:o,predicate:s})=>new nc(o,s?[...t,xh(s,e)]:t,e));for(let o of i)r.mergeIn(o.logic)}else if(n instanceof ss)r.mergeIn(n.logic);else throw new b(1909,!1);return r}function xh(n,t){return $(_({},n),{depth:t})}var D_=Symbol("PATH"),En=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,ZM);logicBuilder;constructor(t,e,r,i){this.keys=t,this.parent=r,this.keyInParent=i,this.root=e??this,r||(this.logicBuilder=Vi.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new n([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let r=t.compile();this.builder.mergeIn(r.builder,e)}static unwrapFieldPath(t){return t[D_]}static newRoot(){return new n([],void 0,void 0,void 0)}},ZM={get(n,t){return t===D_?n:n.getChild(t).fieldPathProxy}},Ql,is=new Map,rc=class n{schemaFn;constructor(t){this.schemaFn=t}compile(){if(is.has(this))return is.get(this);let t=En.newRoot();is.set(this,t);let e=Ql;try{Ql=t,this.schemaFn(t.fieldPathProxy)}finally{Ql=e}return t}static create(t){return t instanceof n?t:new n(t)}static rootCompile(t){try{return is.clear(),t===void 0?En.newRoot():t instanceof n?t.compile():new n(t).compile()}finally{is.clear()}}};function XM(n){return n instanceof rc||typeof n=="function"}function Ph(n){if(Ql!==En.unwrapFieldPath(n).root)throw new b(1908,!1)}function Bi(n,t,e){return Ph(n),En.unwrapFieldPath(n).builder.addMetadataRule(t,e),t}var Br={list(){return{reduce:(n,t)=>t===void 0?n:[...n,t],getInitial:()=>[]}},min(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t<n?t:n,getInitial:()=>{}}},max(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:t>n?t:n,getInitial:()=>{}}},or(){return{reduce:(n,t)=>n||t,getInitial:()=>!1}},and(){return{reduce:(n,t)=>n&&t,getInitial:()=>!0}},override:QM};function QM(n){return{reduce:(t,e)=>e,getInitial:()=>n?.()}}var Lh=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),ic=class{reducer;create;brand;[Lh];constructor(t,e){this.reducer=t,this.create=e}};function Qt(n){return new ic(n??Br.override())}function Vh(){return Qt()}var Bh=Qt(Br.or()),jh=Vh();var Hh=Qt(Br.max()),E_=Vh();var w_=Qt(Br.max()),C_=Qt(Br.min()),x_=Qt(Br.list());function et(n,t){if(n===t)return!0;if(!n||!t||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!Object.is(n[e],t[e]))return!1;return!0}function JM(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var Ih=class{node;constructor(t){this.node=t}rawSyncTreeErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:et});syncErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...eT(this.node.submitState.submissionErrors())],{equal:et});syncValid=E(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),YM));syncTreeErrors=E(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:et});rawAsyncErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:et});asyncErrors=E(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t==="pending"||t.fieldTree===this.node.fieldTree),{equal:et});parseErrors=E(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:et});errors=E(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!=="pending")],{equal:et});errorSummary=E(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,r)=>[...r,...e.errorSummary()]);return I(()=>t.sort(tT)),t},{equal:et});pending=E(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(t,e)=>e||t.validationState.asyncErrors().includes("pending")));status=E(()=>{if(this.shouldSkipValidation())return"valid";let t=JM(this);return this.node.structure.reduceChildren(t,(e,r)=>r==="invalid"||e.validationState.status()==="invalid"?"invalid":r==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=E(()=>this.status()==="valid");invalid=E(()=>this.status()==="invalid");shouldSkipValidation=E(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function eT(n){return n===void 0?[]:Xt(n)?n:[n]}function Uh(n,t){if(Xt(n))for(let e of n)e.fieldTree??=t;else n&&(n.fieldTree??=t);return n}function v_(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function tT(n,t){let e=v_(n),r=v_(t);return e===r?0:e===void 0||r===void 0?e===void 0?1:-1:e.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Sh=Qt(),Mh=class{node;cache=new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=E(()=>{let r=En.unwrapFieldPath(t),i=this.node,o=qM();for(;o>0||!i.structure.logic.hasLogic(r.root.builder);)if(o--,i=i.structure.parent,i===void 0)throw new b(1900,!1);for(let s of r.keys)if(i=i.structure.getChild(s),i===void 0)throw new b(1901,!1);return i.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=E(()=>{let t=this.key();if(!Xt(I(this.node.structure.parent.value)))throw new b(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Oi)throw new b(1907,!1);return e}},Th=class{node;metadata=new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&I(()=>xt(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let e=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,E(()=>e.compute(this.node.context)));this.metadata.set(t,r)}}))}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new b(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,E(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}},nT={get(n,t,e){let r=n(),i=r.structure.getChild(t);if(i!==void 0)return i.fieldTree;let o=I(r.value);if(Xt(o)){if(t==="length")return r.value().length;if(t===Symbol.iterator)return()=>(r.value(),Array.prototype[Symbol.iterator].apply(r.fieldTree))}if(Jl(o)&&t===Symbol.iterator)return function*(){for(let s in e)yield[s,e[s]]}},getOwnPropertyDescriptor(n,t){let e=I(n().value),r=Reflect.getOwnPropertyDescriptor(e,t);return r&&!r.configurable&&(r.configurable=!0),r},ownKeys(n){let t=I(n().value);return typeof t=="object"&&t!==null?Reflect.ownKeys(t):[]}};function rT(n,t){let e=E(()=>n()[t()]);return e[ce]=n[ce],e.set=r=>{Object.is(I(e),r)||n.update(i=>iT(i,r,t()))},e.update=r=>{e.set(r(I(e)))},e.asReadonly=()=>e,e}function iT(n,t,e){if(Xt(n)){let r=[...n];return r[e]=t,r}else return $(_({},n),{[e]:t})}var Fi=Symbol(""),I_=E(()=>!1),oc=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=q.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,r){this.logic=t,this.node=e,this.createChildNode=r}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>I(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return I(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||I(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),r=I(this.childrenMap)?.byPropertyKey.get(e)?.reader;return r||(r=this.createReader(e)),r()}reduceChildren(t,e,r){let i=this.childrenMap();if(!i)return t;let o=t;for(let s of i.byPropertyKey.values()){if(r?.(o))break;o=e(I(s.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,r){if(t==="root")return{keyInParent:S_,isOrphaned:I_};let i=this.parent,o=r,s=E(()=>{if(i.structure.isOrphaned())return Fi;let c=i.structure.childrenMap();if(!c)return Fi;let d=c.byPropertyKey.get(o);if(d&&d.node===this.node)return o;if(e===void 0)return Fi;for(let[f,m]of c.byPropertyKey)if(m.node===this.node)return o=f;return Fi}),a=E(()=>s()===Fi);return{keyInParent:E(()=>{let c=s();if(c===Fi)throw e===void 0?new b(-1902,!1):new b(1904,!1);return c}),isOrphaned:a}}createChildrenMap(){return Hn({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,r){if(!Jl(t)||!r&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let i,o=Xt(t);e!==void 0&&(o?i=sT(e,t,this.identitySymbol):i=aT(e,t));for(let s of Object.keys(t)){let a,l=t[s];if(l===void 0){e.byPropertyKey.has(s)&&(i??=_({},e),i.byPropertyKey.delete(s));continue}o&&Jl(l)&&!Xt(l)&&(a=l[this.identitySymbol]??=Symbol(""));let c;a&&(e.byTrackingKey?.has(a)||(i??=_({},e),i.byTrackingKey??=new Map,i.byTrackingKey.set(a,this.createChildNode(s,a,o))),c=(i??e).byTrackingKey.get(a));let d=e.byPropertyKey.get(s);d===void 0?(i??=_({},e),i.byPropertyKey.set(s,{reader:this.createReader(s),node:c??this.createChildNode(s,a,o)})):c&&c!==d.node&&(i??=_({},e),d.node=c)}return i??e}createReader(t){return E(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}},kh=class extends oc{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return oT}get keyInParent(){return S_}isOrphaned=I_;childrenMap;constructor(t,e,r,i,o){super(e,t,o),this.fieldManager=r,this.value=i,this.childrenMap=this.createChildrenMap()}},Ah=class extends oc{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,r,i,o,s){super(e,t,s),this.logic=e,this.parent=r,this.root=this.parent.structure.root;let a=this.createKeyOrOrphanSignals("child",i,o);this.isOrphaned=a.isOrphaned,this.keyInParent=a.keyInParent,this.pathKeys=E(()=>[...r.structure.pathKeys(),this.keyInParent()]),this.value=rT(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var oT=E(()=>[]),S_=E(()=>{throw new b(1905,!1)});function sT(n,t,e){let r,i=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let s=0;s<t.length;s++){let a=t[s];i.delete(s.toString()),Jl(a)&&a.hasOwnProperty(e)&&o.delete(a[e])}if(i.size>0){r??=_({},n);for(let s of i)r.byPropertyKey.delete(s)}if(o.size>0){r??=_({},n);for(let s of o)r.byTrackingKey?.delete(s)}return r}function aT(n,t){let e;for(let r of n.byPropertyKey.keys())t.hasOwnProperty(r)||(e??=_({},n),e.byPropertyKey.delete(r));return e}var Nh=class{node;selfSubmitting=j(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=Hn({source:this.node.structure.value,computation:()=>[]})}submitting=E(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},as=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Mh(this)}fieldProxy=new Proxy(()=>this,nT);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new Th(this),this.submitState=new Nh(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){let t=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(b_,void 0);return t||this.structure.children().map(e=>e.getBindingForFocus()).reduce(b_,void 0)}pendingSync=Hn({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(E_)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(C_)}get min(){let t=this.metadata(jh)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(w_)}get pattern(){return this.metadata(x_)??lT}get required(){return this.metadata(Bh)??cT}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||I(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){I(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){I(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[Lh]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=Hn(this.value);t.rawSet=t.set,t.set=r=>{t.rawSet(r),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=r=>{e(r),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=I(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,r=t(e.signal);if(r&&(this.pendingSync.set(e),await r,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,r,i){return i.newRoot(t,e,r,i)}createStructure(t){return t.kind==="root"?new kh(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new Ah(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,r){let i,o;return r?(i=this.pathNode.getChild(Vr),o=this.structure.logic.getChild(Vr)):(i=this.pathNode.getChild(t),o=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:i,logic:o,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}},lT=E(()=>[]),cT=E(()=>!1);function b_(n,t){return n?t&&n.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:n:t}var Rh=class{node;selfTouched=j(!1);selfDirty=j(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=j([]);constructor(t){this.node=t}dirty=E(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,r)=>r||e.nodeState.dirty(),g_)});touched=E(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,r)=>r||e.nodeState.touched(),g_)});disabledReasons=E(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:et});disabled=E(()=>!!this.disabledReasons().length);readonly=E(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=E(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=E(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=E(()=>{if(this.node.logicNode.logic.hasMetadata(Sh)){let e=this.node.logicNode.logic.getMetadata(Sh).compute(this.node.context);if(e)return r=>e(this.node.context,r)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=E(()=>this.hidden()||this.disabled()||this.readonly())},Oh=class{newRoot(t,e,r,i){return new as({kind:"root",fieldManager:t,value:e,pathNode:r,logic:r.builder.build(),fieldAdapter:i})}newChild(t){return new as(t)}createNodeState(t){return new Rh(t)}createValidationState(t){return new Ih(t)}createStructure(t,e){return t.createStructure(e)}},Fh=class{injector;rootName;submitOptions;constructor(t,e,r){this.injector=t,this.rootName=e??`${this.injector.get(hn)}.form${dT++}`,this.submitOptions=r}structures=new Set;createFieldManagementEffect(t){Me(()=>{let e=new Set;this.markStructuresLive(t,e);for(let r of this.structures)e.has(r)||(this.structures.delete(r),I(()=>r.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let r of t.children())this.markStructuresLive(r.structure,e)}},dT=0,M_=new g("");function uT(n){let t,e,r;return n.length===3?[t,e,r]=n:n.length===2?XM(n[1])?[t,e]=n:[t,r]=n:[t]=n,[t,e,r]}function zh(...n){let[t,e,r]=uT(n),i=r?.injector??u(q),o=xt(i,()=>rc.rootCompile(e)),s=new Fh(i,r?.name,r?.submission),a=r?.adapter??new Oh,l=as.newRoot(s,t,o,a);s.createFieldManagementEffect(l.structure);let{experimentalWebMcpTool:c}=r??{};if(c){let d=xt(i,()=>u(M_,{optional:!0}));d&&xt(i,()=>d(l.fieldTree,{name:c.name,description:c.description}))}return l.fieldTree}async function T_(n,t){let e=I(n);if(I(e.submitState.submitting))return!1;let r=t===void 0?e.structure.root.fieldProxy:n,i={root:e.structure.root.fieldProxy,submitted:n};t=typeof t=="function"?{action:t}:t??e.structure.fieldManager.submitOptions;let o=t?.action;if(!o)throw new b(1915,!1);e.markAsTouched();let s=t?.onInvalid,a=fT(e,t?.ignoreValidators);try{if(a){e.submitState.selfSubmitting.set(!0);let l=await I(()=>o?.(r,i));return l&&hT(e,l),!l||Xt(l)&&l.length===0}else I(()=>s?.(r,i));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function fT(n,t){switch(t){case"all":return!0;case"none":return I(n.valid);default:return!I(n.invalid)}}function hT(n,t){Xt(t)||(t=[t]);let e=new Map;for(let r of t){let i=Uh(r,n.fieldTree),o=i.fieldTree(),s=e.get(o);s||(s=[],e.set(o,s)),s.push(i)}for(let[r,i]of e)r.submitState.submissionErrors.set(i)}var sc=class{kind="compat";control;fieldTree;context;message;constructor({context:t,kind:e,control:r}){this.context=t,this.kind=e,this.control=r}};function k_(n){if(n.length===0)return null;let t={};for(let e of n)t[e.kind]=e instanceof sc?e.context:e;return t}function A_(n,t){return n===null?[]:Object.entries(n).map(([e,r])=>new sc({context:r,kind:e,control:t}))}var mT=new g("");function lc(n,t){return n instanceof Function?n(t):n}function pT(n){return typeof n=="number"?isNaN(n):n===""||n===!1||n==null}function N_(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function P_(n,t){Ph(n),En.unwrapFieldPath(n).builder.addSyncErrorRule(r=>Uh(t(r),r.fieldTree))}function gT(n){return new $h(n)}function yT(n,t){return new Gh(n,t)}var ls=class{__brand=void 0;kind="";fieldTree;message;constructor(t){t&&Object.assign(this,t)}},$h=class extends ls{kind="required"},Gh=class extends ls{min;kind="min";constructor(t,e){super(e),this.min=t}};var cc=class extends ls{kind="parse"};function Yh(n,t,e){let r=Qt();Bi(n,r,i=>{if(!(e?.when&&!e.when(i)))return typeof t=="function"?t(i):t}),Bi(n,Hh,({state:i})=>i.metadata(r)()),Bi(n,jh,()=>Hh),P_(n,i=>{let o=i.value();if(o===null||Number.isNaN(o))return;let s=i.state.metadata(r)();if(!(s===void 0||Number.isNaN(s))&&o<s)return e?.error?lc(e.error,i):yT(s,{message:lc(e?.message,i)})})}function Kh(n,t){let e=Bi(n,Qt(),r=>t?.when?t.when(r):!0);Bi(n,Bh,({state:r})=>r.metadata(e)()),P_(n,r=>{if(r.state.metadata(e)()&&pT(r.value()))return t?.error?lc(t.error,r):gT({message:lc(t?.message,r)})})}function vT(n,t,e){let r=Hn({source:n,computation:()=>[],equal:et}),i=s=>{let a=e(s);r.set(N_(a.error)),a.value!==void 0&&t(a.value),r.set(N_(a.error))},o=()=>{r.set([])};return{errors:r.asReadonly(),setRawValue:i,reset:o}}var Wh=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return k_(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new b(1910,!1)}valueAccessor=null;hasValidator(t){return t===Zt.required?this.field().required():!1}updateValueAndValidity(){}},qh={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},bT=(()=>{let n={};for(let t of Object.keys(qh))n[qh[t]]=t;return n})();function Zh(n,t){let e=bT[t];return n[e]?.()}var Xh=Object.values(qh);function dc(){return{}}function jr(n,t,e){return n[t]!==e?(n[t]=e,!0):!1}function _T(n,t,e){let r;if(L_(n)&&e.isBadInput(n))return{error:new cc};switch(n.type){case"checkbox":return{value:n.checked};case"number":case"range":case"datetime-local":if(r=I(t),typeof r=="number"||r===null)return{value:n.value===""?null:n.valueAsNumber};break;case"date":case"month":case"time":case"week":if(r=I(t),r===null||r instanceof Date)return{value:n.valueAsDate};if(typeof r=="number")return{value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(r??=I(t),typeof r=="number"||r===null)){if(n.value==="")return{value:null};let i=Number(n.value);return Number.isNaN(i)?{error:new cc}:{value:i}}return{value:n.value}}function R_(n,t){switch(n.type){case"checkbox":n.checked=t;return;case"radio":n.checked=t===n.value;return;case"number":case"range":case"datetime-local":if(typeof t=="number"){O_(n,t);return}else if(t===null){n.value="";return}break;case"date":case"month":case"time":case"week":if(t===null||t instanceof Date){n.valueAsDate=t;return}else if(typeof t=="number"){O_(n,t);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof t=="number"){n.value=isNaN(t)?"":String(t);return}if(t===null){n.value="";return}}n.value=t}function O_(n,t){isNaN(t)?n.value="":n.valueAsNumber=t}function L_(n){return n.tagName==="INPUT"}function DT(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function ET(n,t){let e=n.getUTCFullYear(),r=String(n.getUTCMonth()+1).padStart(2,"0");if(t==="month")return`${e}-${r}`;let i=String(n.getUTCDate()).padStart(2,"0");return`${e}-${r}-${i}`}function V_(n,t,e){return t instanceof Date&&(n==="min"||n==="max")&&(e==="date"||e==="month")?ET(t,e):t}function wT(n,t){n.listenToCustomControlModel(r=>t.state().controlValue.set(r)),n.listenToCustomControlOutput("touch",()=>t.state().markAsTouched()),t.registerAsBinding(n.customControl);let e=dc();return()=>{let r=t.state(),i=r.controlValue();jr(e,"controlValue",i)&&n.setCustomControlModelInput(i);for(let o of Xh){let s;if(o==="errors"?s=t.errors():s=Zh(r,o),jr(e,o,s)&&(n.setInputOnDirectives(o,s),t.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let a=V_(o,s,t.nativeFormElement.type);ts(t.renderer,t.nativeFormElement,o,a)}}}}function CT(n){return typeof n=="object"&&n!==null}function xT(n,t){let e=dc();t.controlValueAccessor.registerOnChange(i=>{e.controlValue=i,t.state().controlValue.set(i)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let r=t.injector.get(Lr,null,{optional:!0,self:!0});if(r){let i;for(let l of r)CT(l)&&l.registerOnValidatorChange&&(i??=j(0),l.registerOnValidatorChange(()=>{i.update(c=>c+1)}));let o=r.map(l=>typeof l=="function"?l:l.validate.bind(l)),s=Zt.compose(o),a=E(()=>{i?.();let l=s?s(t.interopNgControl.control):null;return A_(l,t.interopNgControl.control)});t.parseErrorsSource.set(a)}return t.registerAsBinding({reset:()=>{let i=t.state().value();e.controlValue=i,I(()=>t.controlValueAccessor.writeValue(i))}}),()=>{let i=t.state(),o=i.value();jr(e,"controlValue",o)&&I(()=>t.controlValueAccessor.writeValue(o));for(let s of Xh){let a=Zh(i,s);if(jr(e,s,a)){let l=n.setInputOnDirectives(s,a);s==="disabled"&&t.controlValueAccessor.setDisabledState?I(()=>t.controlValueAccessor.setDisabledState(a)):!l&&t.elementAcceptsNativeProperty(s)&&ts(t.renderer,t.nativeFormElement,s,a)}}}}function IT(n,t,e){if(typeof MutationObserver!="function")return;let r=new MutationObserver(i=>{i.some(o=>ST(o))&&t()});r.observe(n,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>r.disconnect())}function ST(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return!1;for(let t of n.addedNodes)if(!(t instanceof Comment))return!0;for(let t of n.removedNodes)if(!(t instanceof Comment))return!0;return!1}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function MT(n,t,e,r){let i=!1,o=t.nativeFormElement,s=vT(()=>t.state().value(),l=>t.state().controlValue.set(l),l=>_T(o,t.state().value,r));e.set(s.errors),t.onReset=()=>{s.reset();let l=t.state().value();a.controlValue=l,R_(o,l)},n.listenToDom("input",()=>s.setRawValue(void 0)),n.listenToDom("blur",()=>t.state().markAsTouched()),L_(o)&&DT(o)&&r.watchValidity(t.destroyRef,o,()=>s.setRawValue(void 0)),t.registerAsBinding(),o.tagName==="SELECT"&&IT(o,()=>{i&&(o.value=t.state().controlValue())},t.destroyRef);let a=dc();return()=>{let l=t.state();for(let d of Xh){let f=Zh(l,d);if(jr(a,d,f)&&(n.setInputOnDirectives(d,f),t.elementAcceptsNativeProperty(d))){let m=V_(d,f,o.type);ts(t.renderer,o,d,m)}}let c=l.controlValue();jr(a,"controlValue",c)&&R_(o,c),i=!0}}var B_=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:e=>TT.\u0275fac(e),providedIn:"root"})}return n})(),TT=(()=>{class n extends B_{document=u(V);cspNonce=u(mn,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,r,i){let o=r.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let s=a=>{let l=a;(l.animationName==="ng-valid"||l.animationName==="ng-invalid")&&i()};r.addEventListener("animationstart",s),e.onDestroy(()=>{r.removeEventListener("animationstart",s)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let r=this.document.createElement("style");return this.cspNonce&&(r.nonce=this.cspNonce),r.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(r):e.appendChild(r),r}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=gn(n)))(i||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),kT=Symbol(),F_=new g(""),j_=(()=>{class n{field=Kt.required({alias:"formField"});state=E(()=>this.field()());renderer=u(Ee);destroyRef=u(Ve);injector=u(q);element=u(N).nativeElement;elementIsNativeFormElement=bh(this.element);elementAcceptsTextualValues=c_(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(es,{optional:!0,self:!0});config=u(mT,{optional:!0});validityMonitor=u(B_);parseErrorsSource=j(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Wh(this.state)}parseErrors=E(()=>this.parseErrorsSource()?.().map(e=>$(_({},e),{fieldTree:I(this.state).fieldTree,formField:this}))??[],{equal:et});errors=E(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:et});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:_h(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([i,o])=>[i,E(()=>o(this))]);if(e.length===0)return;let r=dc();Sl({write:()=>{for(let[i,o]of e){let s=o();jr(r,i,s)&&(s?this.renderer.addClass(this.element,i):this.renderer.removeClass(this.element,i))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new b(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=r=>e.focus(r)),e?.reset&&(this.resetter=()=>e.reset()),Me(r=>{let i=this.state();i.nodeState.formFieldBindings.update(o=>[...o,this]),r(()=>{i.nodeState.formFieldBindings.update(o=>o.filter(s=>s!==this))})},{injector:this.injector})}[kT];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=xT(e,this);else if(e.customControl)this.\u0275ngControlUpdate=wT(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=MT(e,this,this.parseErrorsSource,this.validityMonitor);else throw new b(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this._elementAcceptsMinMax??=l_(this.element);case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ce([{provide:F_,useExisting:n},{provide:$n,useFactory:()=>u(n).interopNgControl},{provide:u_,useFactory:()=>u(F_,{self:!0})}]),bl("formField")]})}return n})(),H_=(()=>{class n{fieldTree=Kt.required({alias:"formRoot"});onSubmit(e){e.preventDefault(),I(()=>{let r=this.fieldTree();r().structure.fieldManager.submitOptions&&T_(r)})}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(r,i){r&1&&he("submit",function(s){return i.onSubmit(s)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return n})();function cs(n){return n.buttons===0||n.detail===0}function ds(n){let t=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Qh;function U_(){if(Qh==null){let n=typeof document<"u"?document.head:null;Qh=!!(n&&(n.createShadowRoot||n.attachShadow))}return Qh}function Jh(n){if(U_()){let t=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Fe(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var em;try{em=typeof Intl<"u"&&Intl.v8BreakIterator}catch{em=!1}var ye=(()=>{class n{_platformId=u(xr);isBrowser=this._platformId?bb(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||em)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var us;function z_(){if(us==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>us=!0}))}finally{us=us||!1}return us}function ji(n){return z_()?n:!!n.capture}function Hr(n,t=0){return $_(n)?Number(n):arguments.length===2?t:0}function $_(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function tt(n){return n instanceof N?n.nativeElement:n}var G_=new g("cdk-input-modality-detector-options"),W_={ignoreKeys:[18,17,224,91,16]},q_=650,tm={passive:!0,capture:!0},Y_=(()=>{class n{_platform=u(ye);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new rr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Fe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<q_||(this._modality.next(cs(e)?"keyboard":"mouse"),this._mostRecentTarget=Fe(e))};_onTouchstart=e=>{if(ds(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Fe(e)};constructor(){let e=u(T),r=u(V),i=u(G_,{optional:!0});if(this._options=_(_({},W_),i),this.modalityDetected=this._modality.pipe(id(1)),this.modalityChanged=this.modalityDetected.pipe(ta()),this._platform.isBrowser){let o=u(Ie).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,tm),o.listen(r,"mousedown",this._onMousedown,tm),o.listen(r,"touchstart",this._onTouchstart,tm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),fs=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(fs||{}),K_=new g("cdk-focus-monitor-default-options"),uc=ji({passive:!0,capture:!0}),nm=(()=>{class n{_ngZone=u(T);_platform=u(ye);_inputModalityDetector=u(Y_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(V);_stopInputModalityDetector=new M;constructor(){let e=u(K_,{optional:!0});this._detectionMode=e?.detectionMode||fs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=Fe(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=tt(e);if(!this._platform.isBrowser||i.nodeType!==1)return sr();let o=Jh(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new M,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let r=tt(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=tt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===fs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===fs.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?q_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=Fe(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,uc),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,uc)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ze(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,uc),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,uc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var fc=new WeakMap,Ye=(()=>{class n{_appRef;_injector=u(q);_environmentInjector=u(_e);load(e){let r=this._appRef=this._appRef||this._injector.get(At),i=fc.get(r);i||(i={loaders:new Set,refs:[]},fc.set(r,i),r.onDestroy(()=>{fc.get(r)?.refs.forEach(o=>o.destroy()),fc.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Ml(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var rm=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),hc;function AT(){if(hc===void 0&&(hc=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(hc=n.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return hc}function NT(n){return AT()?.createHTML(n)||n}function Z_(n,t,e){let r=e.sanitize(ht.HTML,t);n.innerHTML=NT(r||"")}function im(n){return Array.isArray(n)?n:[n]}var X_=new Set,Ur,om=(()=>{class n{_platform=u(ye);_nonce=u(mn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):OT}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&RT(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function RT(n,t){if(!X_.has(n))try{Ur||(Ur=document.createElement("style"),t&&Ur.setAttribute("nonce",t),Ur.setAttribute("type","text/css"),document.head.appendChild(Ur)),Ur.sheet&&(Ur.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),X_.add(n))}catch(e){console.error(e)}}function OT(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Q_=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),J_=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),FT=0,sm=(()=>{class n{_ngZone=u(T);_defaultOptions=u(J_,{optional:!0});_liveElement;_document=u(V);_sanitizer=u(fh);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(Q_,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...r){let i=this._defaultOptions,o,s;return r.length===1&&typeof r[0]=="number"?s=r[0]:[o,s]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),s==null&&i&&(s=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Z_(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",r=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${FT++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var PT=200,mc=class{_letterKeyStream=new M;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new M;selectedItem=this._selectedItem;constructor(t,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:PT;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(sd(e=>this._pressedLetters.push(e)),td(t),Re(()=>this._pressedLetters.length>0),be(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Jt(n,...t){return t.length?t.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var pc=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=X.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Sr?this._itemChangesSubscription=t.changes.subscribe(r=>this._itemsChanged(r.toArray())):$e(t)&&(this._effectRef=Me(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new M;change=new M;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mc(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Jt(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),r=typeof t=="number"?t:e.indexOf(t),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+t*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let r=this._getItemsArray();if(r[t]){for(;this._skipPredicateFn(r[t]);)if(t+=e,!r[t])return;this.setActiveItem(t)}}_getItemsArray(){return $e(this._items)?this._items():this._items instanceof Sr?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let r=t.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var hs=class extends pc{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var rD=new Map,Pe=class n{_appId=u(hn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){this._appId!=="ng"&&(t+=this._appId);let r=rD.get(t);return r===void 0?r=0:r++,rD.set(t,r),`${t}${e?n._infix+"-":""}${r}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})};function cm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Hi,iD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function dm(){if(Hi)return Hi;if(typeof document!="object"||!document)return Hi=new Set(iD),Hi;let n=document.createElement("input");return Hi=new Set(iD.filter(t=>(n.setAttribute("type",t),n.type===t))),Hi}var LT=new g("MATERIAL_ANIMATIONS"),oD=null;function VT(){return u(LT,{optional:!0})?.animationsDisabled||u(go,{optional:!0})==="NoopAnimations"?"di-disabled":(oD??=u(om).matchMedia("(prefers-reduced-motion)").matches,oD?"reduced-motion":"enabled")}function Ke(){return VT()!=="enabled"}function ke(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ui(n){return n!=null&&`${n}`!="false"}var Dt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Dt||{}),um=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Dt.HIDDEN;constructor(t,e,r,i=!1){this._renderer=t,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},sD=ji({passive:!0,capture:!0}),fm=class{_events=new Map;addHandler(t,e,r,i){let o=this._events.get(e);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,sD)})}removeHandler(t,e,r){let i=this._events.get(t);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,sD)))}_delegateEventHandler=t=>{let e=Fe(t);e&&this._events.get(t.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(t))})}},ms={enterDuration:225,exitDuration:150},BT=800,aD=ji({passive:!0,capture:!0}),lD=["mousedown","touchstart"],cD=["mouseup","mouseleave","touchend","touchcancel"],jT=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),ps=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fm;constructor(t,e,r,i,o){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=tt(r)),o&&o.get(Ye).load(jT)}fadeInRipple(t,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},ms),r.animation);r.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let s=r.radius||HT(t,e,i),a=t-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,h=f.transitionDuration,p=m==="none"||h==="0s"||h==="0s, 0s"||i.width===0&&i.height===0,D=new um(this,d,r,p);d.style.transform="scale3d(1, 1, 1)",D.state=Dt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=D);let C=null;return!p&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{C&&(C.fallbackTimer=null),clearTimeout(nt),this._finishRippleTransition(D)},xe=()=>this._destroyRipple(D),nt=setTimeout(xe,c+100);d.addEventListener("transitionend",P),d.addEventListener("transitioncancel",xe),C={onTransitionEnd:P,onTransitionCancel:xe,fallbackTimer:nt}}),this._activeRipples.set(D,C),(p||!c)&&this._finishRippleTransition(D),D}fadeOutRipple(t){if(t.state===Dt.FADING_OUT||t.state===Dt.HIDDEN)return;let e=t.element,r=_(_({},ms),t.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",t.state=Dt.FADING_OUT,(t._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=tt(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,lD.forEach(r=>{n._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{cD.forEach(e=>{this._triggerElement.addEventListener(e,this,aD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Dt.FADING_IN?this._startFadeOutTransition(t):t.state===Dt.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:r}=t.config;t.state=Dt.VISIBLE,!r&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Dt.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=cs(t),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+BT;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!ds(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===Dt.VISIBLE||t.config.terminateOnPointerUp&&t.state===Dt.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(lD.forEach(e=>n._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(cD.forEach(e=>t.removeEventListener(e,this,aD)),this._pointerUpEventsRegistered=!1))}};function HT(n,t,e){let r=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(r*r+i*i)}var hm=new g("mat-ripple-global-options"),gc=(()=>{class n{_elementRef=u(N);_animationsDisabled=Ke();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(T),r=u(ye),i=u(hm,{optional:!0}),o=u(q);this._globalOptions=i||{},this._rippleRenderer=new ps(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,_(_({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var UT={capture:!0},zT=["focus","mousedown","mouseenter","touchstart"],mm="mat-ripple-loader-uninitialized",pm="mat-ripple-loader-class-name",dD="mat-ripple-loader-centered",yc="mat-ripple-loader-disabled",uD=(()=>{class n{_document=u(V);_animationsDisabled=Ke();_globalRippleOptions=u(hm,{optional:!0});_platform=u(ye);_ngZone=u(T);_injector=u(q);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ie).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zT.map(r=>e.listen(this._document,r,this._onInteraction,UT)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(mm,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(pm))&&e.setAttribute(pm,r.className||""),r.centered&&e.setAttribute(dD,""),r.disabled&&e.setAttribute(yc,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(yc,""):e.removeAttribute(yc)}_onInteraction=e=>{let r=Fe(e);if(r instanceof HTMLElement){let i=r.closest(`[${mm}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(pm)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ms.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??ms.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(yc),rippleConfig:{centered:e.hasAttribute(dD),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new ps(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(mm)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var zi=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return n})();var $T=new g("MAT_BUTTON_CONFIG");function fD(n){return n==null?void 0:Fr(n)}var hD=(()=>{class n{_elementRef=u(N);_ngZone=u(T);_animationsDisabled=Ke();_config=u($T,{optional:!0});_focusMonitor=u(nm);_cleanupClick;_renderer=u(Ee);_rippleLoader=u(uD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Kt(!1,{transform:U});constructor(){u(Ye).load(zi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(ge("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),bn(i.color?"mat-"+i.color:""),ie("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",fD],_tabindex:[2,"tabindex","_tabindex",fD],showProgress:[1,"showProgress"]}})}return n})();var GT=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(V)}),WT=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function mD(n){let t=n?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?WT.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var en=(()=>{class n{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new K;constructor(){let e=u(GT,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(mD(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var qT=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],YT=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function KT(n,t){n&1&&(We(0,"div",2),ee(1,3),qe())}var pD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),gD=(()=>{class n extends hD{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ZT(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?pD.get(this._appearance):null,o=pD.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Qe],ngContentSelectors:YT,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Te(qT),Yt(0,"span",0),ee(1),We(2,"span",1),ee(3,1),qe(),ee(4,2),ue(5,KT,2,0,"div",2),Yt(6,"span",3)(7,"span",4)),r&2&&(ie("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab),w(5),fe(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function ZT(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var XT=["*"],yD=(()=>{class n{labelPosition="after";static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:XT,decls:1,vars:0,template:function(r,i){r&1&&(Te(),ee(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var QT=["input"],JT=["label"],ek=["*"],gm={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},tk=new g("mat-checkbox-default-options",{providedIn:"root",factory:()=>gm}),je=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(je||{}),ym=class{source;checked},vD=(()=>{class n{_elementRef=u(N);_changeDetectorRef=u(bt);_ngZone=u(T);_animationsDisabled=Ke();_options=u(tk,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let r=new ym;return r.source=this,r.checked=e,r}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new K;indeterminateChange=new K;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=je.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ye).load(zi);let e=u(new xi("tabindex"),{optional:!0});this._options=this._options||gm,this.color=this._options.color||gm.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Pe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let r=e!=this._indeterminate();this._indeterminate.set(e),r&&(e?this._transitionCheckState(je.Indeterminate):this._transitionCheckState(this.checked?je.Checked:je.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=j(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let r=this._currentCheckState,i=this._getAnimationTargetElement();if(!(r===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(r,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?je.Checked:je.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,r){if(this._animationsDisabled)return"";switch(e){case je.Init:if(r===je.Checked)return this._animationClasses.uncheckedToChecked;if(r==je.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case je.Unchecked:return r===je.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case je.Checked:return r===je.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case je.Indeterminate:return r===je.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let r=this._inputElement;r&&(r.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-checkbox"]],viewQuery:function(r,i){if(r&1&&yt(QT,5)(JT,5),r&2){let o;ne(o=re())&&(i._inputElement=o.first),ne(o=re())&&(i._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(r,i){r&2&&(Nt("id",i.id),ge("tabindex",null)("aria-label",null)("aria-labelledby",null),bn(i.color?"mat-"+i.color:"mat-accent"),ie("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",U],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",U],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Fr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],checked:[2,"checked","checked",U],disabled:[2,"disabled","disabled",U],indeterminate:[2,"indeterminate","indeterminate",U]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ce([{provide:es,useExisting:ot(()=>n),multi:!0},{provide:Lr,useExisting:n,multi:!0}]),Be],ngContentSelectors:ek,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(r,i){if(r&1&&(Te(),v(0,"div",3),he("click",function(s){return i._preventBubblingFromLabel(s)}),v(1,"div",4,0)(3,"div",5),he("click",function(){return i._onTouchTargetClick()}),y(),v(4,"input",6,1),he("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(s){return i._onInteractionEvent(s)}),y(),ae(6,"div",7),v(7,"div",8),hi(),v(8,"svg",9),ae(9,"path",10),y(),Na(),ae(10,"div",11),y(),ae(11,"div",12),y(),v(12,"label",13,2),ee(14),y()()),r&2){let o=vt(2);Y("labelPosition",i.labelPosition),w(4),ie("mdc-checkbox--selected",i.checked),Y("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),ge("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),w(7),Y("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),w(),Y("for",i.inputId)}},dependencies:[gc,yD],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var vc=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}positions;update(t,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(r=>this._trackTile(r))}_trackTile(t){let e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new vm(this.rowIndex,e)}_findMatchingGap(t){if(t>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${t} is wider than grid with cols="${this.tracker.length}".`);let e=-1,r=-1;do{if(this.columnIndex+t>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}r=this._findGapEndIndex(e),this.columnIndex=e+1}while(r-e<t||r==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let e=t+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(t,e){for(let r=0;r<e.colspan;r++)this.tracker[t+r]=e.rowspan}},vm=class{row;col;constructor(t,e){this.row=t,this.col=e}};var bD=["*"];var rk=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,_D=new g("MAT_GRID_LIST"),Em=(()=>{class n{_element=u(N);_gridList=u(_D,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(Hr(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(Hr(e))}_setStyle(e,r){this._element.nativeElement.style[e]=r}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,i){r&2&&ge("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:bD,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,i){r&1&&(Te(),We(0,"div",0),ee(1),qe())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return n})();var ik=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,gs=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(t,e,r,i){this._gutterSize=DD(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=r,this._direction=i}getBaseTileSize(t,e){return`(${t}% - (${this._gutterSize} * ${e}))`}getTilePosition(t,e){return e===0?"0":zr(`(${t} + ${this._gutterSize}) * ${e}`)}getTileSize(t,e){return`(${t} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(t,e,r){let i=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(t,r,i,o),this.setRowStyles(t,e,i,o)}setColStyles(t,e,r,i){let o=this.getBaseTileSize(r,i),s=this._direction==="rtl"?"right":"left";t._setStyle(s,this.getTilePosition(o,e)),t._setStyle("width",zr(this.getTileSize(o,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}},bm=class extends gs{fixedRowHeight;constructor(t){super(),this.fixedRowHeight=t}init(t,e,r,i){super.init(t,e,r,i),this.fixedRowHeight=DD(this.fixedRowHeight),ik.test(this.fixedRowHeight)}setRowStyles(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",zr(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",zr(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},_m=class extends gs{rowHeightRatio;baseTileHeight;constructor(t){super(),this._parseRatio(t)}setRowStyles(t,e,r,i){let o=r/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,i),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",zr(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",zr(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(t){let e=t.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},Dm=class extends gs{setRowStyles(t,e){let r=100/this._rowspan,i=(this._rows-1)/this._rows,o=this.getBaseTileSize(r,i);t._setStyle("top",this.getTilePosition(o,e)),t._setStyle("height",zr(this.getTileSize(o,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function zr(n){return`calc(${n})`}function DD(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var ok="fit",ED=(()=>{class n{_element=u(N);_dir=u(en,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(Hr(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let r=`${e??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===ok?this._tileStyler=new Dm:e&&e.indexOf(":")>-1?this._tileStyler=new _m(e):this._tileStyler=new bm(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new vc);let e=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,e,this.cols,i),r.forEach((o,s)=>{let a=e.positions[s];this._tileStyler.setStyle(o,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-grid-list"]],contentQueries:function(r,i,o){if(r&1&&jn(o,Em,5),r&2){let s;ne(s=re())&&(i._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,i){r&2&&ge("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Ce([{provide:_D,useExisting:n}])],ngContentSelectors:bD,decls:2,vars:0,template:function(r,i){r&1&&(Te(),We(0,"div"),ee(1),qe())},styles:[rk],encapsulation:2})}return n})();var sk=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),ak={passive:!0},wD=(()=>{class n{_platform=u(ye);_ngZone=u(T);_renderer=u(Ie).createRenderer(null,null);_styleLoader=u(Ye);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ir;this._styleLoader.load(sk);let r=tt(e),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new M,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,ak)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(e){let r=tt(e),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((e,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var CD=new g("MAT_INPUT_VALUE_ACCESSOR");var wm=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new W(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),r.unsubscribe(),this._elementObservables.delete(t)}}).pipe(Re(e=>e.some(r=>r.target===t)),ra({bufferSize:1,refCount:!0}),ze(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xD=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=u(T);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new wm(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var lk=["notch"],ck=["*"],ID=["iconPrefixContainer"],SD=["textPrefixContainer"],MD=["iconSuffixContainer"],TD=["textSuffixContainer"],dk=["textField"],uk=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],fk=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function hk(n,t){n&1&&ae(0,"span",21)}function mk(n,t){if(n&1&&(v(0,"label",20),ee(1,1),ue(2,hk,1,0,"span",21),y()),n&2){let e=we(2);Y("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ge("for",e._control.disableAutomaticLabeling?null:e._control.id),w(2),fe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function pk(n,t){if(n&1&&ue(0,mk,3,5,"label",20),n&2){let e=we();fe(e._hasFloatingLabel()?0:-1)}}function gk(n,t){n&1&&ae(0,"div",7)}function yk(n,t){}function vk(n,t){if(n&1&&gt(0,yk,0,0,"ng-template",13),n&2){we(2);let e=vt(1);Y("ngTemplateOutlet",e)}}function bk(n,t){if(n&1&&(v(0,"div",9),ue(1,vk,1,1,null,13),y()),n&2){let e=we();Y("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),w(),fe(e._forceDisplayInfixLabel()?-1:1)}}function _k(n,t){n&1&&(v(0,"div",10,2),ee(2,2),y())}function Dk(n,t){n&1&&(v(0,"div",11,3),ee(2,3),y())}function Ek(n,t){}function wk(n,t){if(n&1&&gt(0,Ek,0,0,"ng-template",13),n&2){we();let e=vt(1);Y("ngTemplateOutlet",e)}}function Ck(n,t){n&1&&(v(0,"div",14,4),ee(2,4),y())}function xk(n,t){n&1&&(v(0,"div",15,5),ee(2,5),y())}function Ik(n,t){n&1&&ae(0,"div",16)}function Sk(n,t){n&1&&(v(0,"div",18),ee(1,6),y())}function Mk(n,t){if(n&1&&(v(0,"mat-hint",22),F(1),y()),n&2){let e=we(2);Y("id",e._hintLabelId),w(),Rt(e.hintLabel)}}function Tk(n,t){if(n&1&&(v(0,"div",19),ue(1,Mk,2,2,"mat-hint",22),ee(2,7),ae(3,"div",23),ee(4,8),y()),n&2){let e=we();w(),fe(e.hintLabel?1:-1)}}var ys=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["mat-label"]]})}return n})(),PD=new g("MatError"),xm=(()=>{class n{id=u(Pe).getId("mat-mdc-error-");static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(r,i){r&2&&Nt("id",i.id)},inputs:{id:"id"},features:[Ce([{provide:PD,useExisting:n}])]})}return n})(),Cm=(()=>{class n{align="start";id=u(Pe).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Nt("id",i.id),ge("align",null),ie("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),kk=new g("MatPrefix");var Ak=new g("MatSuffix");var LD=new g("FloatingLabelParent"),kD=(()=>{class n{_elementRef=u(N);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(xD);_ngZone=u(T);_parent=u(LD);_resizeSubscription=new X;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Nk(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Nk(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var AD="mdc-line-ripple--active",bc="mdc-line-ripple--deactivating",ND=(()=>{class n{_elementRef=u(N);_cleanupTransitionEnd;constructor(){let e=u(T),r=u(Ee);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(bc),e.add(AD)}deactivate(){this._elementRef.nativeElement.classList.add(bc)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(bc);e.propertyName==="opacity"&&i&&r.remove(AD,bc)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),RD=(()=>{class n{_elementRef=u(N);_ngZone=u(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&yt(lk,5),r&2){let o;ne(o=re())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:ck,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Te(),Yt(0,"div",1),We(1,"div",2,0),ee(3),qe(),Yt(4,"div",3))},encapsulation:2})}return n})(),vs=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n})}return n})();var bs=new g("MatFormField"),Rk=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),OD="fill",Ok="auto",FD="fixed",Fk="translateY(-50%)",Im=(()=>{class n{_elementRef=u(N);_changeDetectorRef=u(bt);_platform=u(ye);_idGenerator=u(Pe);_ngZone=u(T);_defaults=u(Rk,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Bo("iconPrefixContainer");_textPrefixContainerSignal=Bo("textPrefixContainer");_iconSuffixContainerSignal=Bo("iconSuffixContainer");_textSuffixContainerSignal=Bo("textSuffixContainer");_prefixSuffixContainers=E(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ub(ys);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ui(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ok}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||OD;this._appearanceSignal.set(r)}_appearanceSignal=j(OD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||FD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||FD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ke();constructor(){let e=this._defaults,r=u(en);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Me(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=E(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(lr([void 0,void 0]),be(()=>[r.errorState,r.userAriaDescribedBy]),na(),Re(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ar(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Sl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=E(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let r=this._control?this._control.ngControl:null;return r&&r[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(s=>s&&!o.includes(s)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${Fk} translateX(${h}))`,D=s+a+l+c;return[p,D]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(El(o,i._labelChild,ys,5),jn(o,vs,5)(o,kk,5)(o,Ak,5)(o,PD,5)(o,Cm,5)),r&2){Cl();let s;ne(s=re())&&(i._formFieldControl=s.first),ne(s=re())&&(i._prefixChildren=s),ne(s=re())&&(i._suffixChildren=s),ne(s=re())&&(i._errorChildren=s),ne(s=re())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(wl(i._iconPrefixContainerSignal,ID,5)(i._textPrefixContainerSignal,SD,5)(i._iconSuffixContainerSignal,MD,5)(i._textSuffixContainerSignal,TD,5),yt(dk,5)(ID,5)(SD,5)(MD,5)(TD,5)(kD,5)(RD,5)(ND,5)),r&2){Cl(4);let o;ne(o=re())&&(i._textField=o.first),ne(o=re())&&(i._iconPrefixContainer=o.first),ne(o=re())&&(i._textPrefixContainer=o.first),ne(o=re())&&(i._iconSuffixContainer=o.first),ne(o=re())&&(i._textSuffixContainer=o.first),ne(o=re())&&(i._floatingLabel=o.first),ne(o=re())&&(i._notchedOutline=o.first),ne(o=re())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&ie("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ce([{provide:bs,useExisting:n},{provide:LD,useExisting:n}])],ngContentSelectors:fk,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Te(uk),gt(0,pk,1,1,"ng-template",null,0,Or),v(2,"div",6,1),he("click",function(s){return i._control.onContainerClick(s)}),ue(4,gk,1,0,"div",7),v(5,"div",8),ue(6,bk,2,2,"div",9),ue(7,_k,3,0,"div",10),ue(8,Dk,3,0,"div",11),v(9,"div",12),ue(10,wk,1,1,null,13),ee(11),y(),ue(12,Ck,3,0,"div",14),ue(13,xk,3,0,"div",15),y(),ue(14,Ik,1,0,"div",16),y(),v(15,"div",17),ue(16,Sk,2,0,"div",18)(17,Tk,5,1,"div",19),y()),r&2){let o;w(2),ie("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),w(2),fe(!i._hasOutline()&&!i._control.disabled?4:-1),w(2),fe(i._hasOutline()?6:-1),w(),fe(i._hasIconPrefix?7:-1),w(),fe(i._hasTextPrefix?8:-1),w(2),fe(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),w(2),fe(i._hasTextSuffix?12:-1),w(),fe(i._hasIconSuffix?13:-1),w(),fe(i._hasOutline()?-1:14),w(),ie("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();w(),fe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[kD,RD,Ho,ND,Cm],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var _c=(()=>{class n{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var $i=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,r,i,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var Pk=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Lk=new g("MAT_INPUT_CONFIG"),VD=(()=>{class n{_elementRef=u(N);_platform=u(ye);ngControl=u($n,{optional:!0,self:!0});_autofillMonitor=u(wD);_ngZone=u(T);_formField=u(bs,{optional:!0});_renderer=u(Ee);_uid=u(Pe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Lk,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ui(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Zt.required)??!1}set required(e){this._required=Ui(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&dm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ui(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>dm().has(e));constructor(){let e=u(ns,{optional:!0}),r=u(rs,{optional:!0}),i=u(_c),o=u(CD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?$e(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $i(i,this.ngControl,r,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Me(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=e,e?r.setAttribute("placeholder",e):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Pk.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,r=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let r=e.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&he("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(Nt("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),ge("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),ie("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},exportAs:["matInput"],features:[Ce([{provide:vs,useExisting:n}]),Be]})}return n})();var _s=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(t=!1,e,r=!0,i){this._multiple=t,this._emitChanges=r,this.compareWith=i,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(r=>this._markSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...t){this._verifyValueAssignment(t),t.forEach(r=>this._unmarkSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...t){this._verifyValueAssignment(t);let e=this.selected,r=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!r.has(this._getConcreteValue(o,r))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let r of e)if(this.compareWith(t,r))return r;return t}else return t}};var Vk=20,BD=(()=>{class n{_ngZone=u(T);_platform=u(ye);_renderer=u(Ie).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Vk){return this._platform.isBrowser?new W(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(ea(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):sr()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(Re(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,e)&&r.push(o)}),r}_targetContainsElement(e,r){let i=tt(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Bk=20,Ds=(()=>{class n{_platform=u(ye);_listeners;_viewportSize=null;_change=new M;_document=u(V);constructor(){let e=u(T),r=u(Ie).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=Bk){return e>0?this._change.pipe(ea(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Es=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Sm=class extends Es{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,r,i,o,s){super(),this.component=t,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=s||null}},ws=class extends Es{templateRef;viewContainerRef;context;injector;constructor(t,e,r,i){super(),this.templateRef=t,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},Mm=class extends Es{element;constructor(t){super(),this.element=t instanceof N?t.nativeElement:t}},Tm=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Sm)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof ws)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof Mm)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Dc=class extends Tm{outletElement;_appRef;_defaultInjector;constructor(t,e,r){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=r}attachComponentPortal(t){let e;if(t.viewContainerRef){let r=t.injector||t.viewContainerRef.injector,i=r.get(Tr,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=t.injector||this._defaultInjector||q.NULL,o=i.get(_e,r.injector);e=Ml(t.component,{elementInjector:i,environmentInjector:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,r=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=t,r}attachDomPortal=t=>{let e=t.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Ec=class{enable(){}disable(){}attach(){}};function km(n,t){return t.some(e=>{let r=n.bottom<e.top,i=n.top>e.bottom,o=n.right<e.left,s=n.left>e.right;return r||i||o||s})}function jD(n,t){return t.some(e=>{let r=n.top<e.top,i=n.bottom>e.bottom,o=n.left<e.left,s=n.right>e.right;return r||i||o||s})}function Sc(n,t){return new wc(n.get(BD),n.get(Ds),n.get(T),t)}var wc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,r,i){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();km(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Cs=class{positionStrategy;scrollStrategy=new Ec;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let r of e)t[r]!==void 0&&(this[r]=t[r])}}};var Cc=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var WD=(()=>{class n{_attachedOverlays=[];_document=u(V);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),qD=(()=>{class n extends WD{_ngZone=u(T);_renderer=u(Ie).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),YD=(()=>{class n extends WD{_platform=u(ye);_ngZone=u(T);_renderer=u(Ie).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Fe(e)};_clickListener=e=>{let r=Fe(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(HD(a.overlayElement,r)||HD(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function HD(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=t;for(;r;){if(r===n)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var KD=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),ZD=(()=>{class n{_platform=u(ye);_containerElement;_document=u(V);_styleLoader=u(Ye);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||cm()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),cm()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(KD)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Am=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,r,i){this._renderer=e,this._ngZone=r,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Nm(n){return n&&n.nodeType===1}var xc=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=X.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(t,e,r,i,o,s,a,l,c,d=!1,f,m){this._portalOutlet=t,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=m,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ar(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=_(_({},this._config),t),this._updateElementSize()}setDirection(t){this._config=$(_({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ke(this._config.width),t.height=ke(this._config.height),t.minWidth=ke(this._config.minWidth),t.minHeight=ke(this._config.minHeight),t.maxWidth=ke(this._config.maxWidth),t.maxHeight=ke(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Nm(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Am(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,r){let i=im(e||[]).filter(o=>!!o);i.length&&(r?t.classList.add(...i):t.classList.remove(...i))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Ar(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},UD="cdk-overlay-connected-position-bounding-box",jk=/([A-Za-z%]+)$/;function XD(n,t){return new Ic(t,n.get(Ds),n.get(V),n.get(ye),n.get(ZD))}var Ic=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=X.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(UD),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(t,i,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&$r(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(UD),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof N?this._origin.nativeElement:Nm(this._origin)?this._origin:null}_getOriginPoint(t,e,r){let i;if(r.originX=="center")i=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;i=r.originX=="start"?s:a}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=t.top+t.height/2:o=r.originY=="top"?t.top:t.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(t,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:t.x+i,y:t.y+o}}_getOverlayFit(t,e,r,i){let o=$D(e),{x:s,y:a}=t,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,m=0-a,h=a+o.height-r.height,p=this._subtractOverflows(o.width,d,f),D=this._subtractOverflows(o.height,m,h),C=p*D;return{visibleArea:C,isCompletelyWithinViewport:o.width*o.height===C,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(t,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,s=zD(this._overlayRef.getConfig().minHeight),a=zD(this._overlayRef.getConfig().minWidth),l=t.fitsInViewportVertically||s!=null&&s<=i,c=t.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(t,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let i=$D(e),o=this._viewportRect,s=Math.max(t.x+i.width-o.width,0),a=Math.max(t.y+i.height-o.height,0),l=Math.max(o.top-r.top-t.y,0),c=Math.max(o.left-r.left-t.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=t.x<this._getViewportMarginStart()?o.left-r.left-t.x:0,i.height<=o.height?f=l||-a:f=t.y<this._getViewportMarginTop()?o.top-r.top-t.y:0,this._previousPushAmount={x:d,y:f},{x:t.x+d,y:t.y+f}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Hk(this._lastScrollVisibility,r)){let i=new Cc(t,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=t.overlayY;t.overlayX==="center"?r="center":this._isRtl()?r=t.overlayX==="start"?"right":"left":r=t.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(t,e){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(e.overlayY==="top")s=t.y,o=r.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=r.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let h=Math.min(r.bottom-t.y+r.top,t.y),p=this._lastBoundingBoxSize.height;o=h*2,s=t.y-h,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-p/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,m;if(c)m=r.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=t.x-this._getViewportMarginStart();else if(l)f=t.x,d=r.right-t.x-this._getViewportMarginEnd();else{let h=Math.min(r.right-t.x+r.left,t.x),p=this._lastBoundingBoxSize.width;d=h*2,f=t.x-h,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=t.x-p/2)}return{top:s,left:f,bottom:a,right:m,width:d,height:o}}_setBoundingBoxStyles(t,e){let r=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=ke(r.width),i.height=ke(r.height),i.top=ke(r.top)||"auto",i.bottom=ke(r.bottom)||"auto",i.left=ke(r.left)||"auto",i.right=ke(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=ke(o)),s&&(i.maxWidth=ke(s))}this._lastBoundingBoxSize=r,$r(this._boundingBox.style,i)}_resetBoundingBoxStyles(){$r(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){$r(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();$r(r,this._getExactOverlayY(e,t,d)),$r(r,this._getExactOverlayX(e,t,d))}else r.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=ke(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=ke(s.maxWidth):o&&(r.maxWidth="")),$r(this._pane.style,r)}_getExactOverlayY(t,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),t.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=ke(o.y);return i}_getExactOverlayX(t,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=t.overlayX==="end"?"left":"right":s=t.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=ke(o.x);return i}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:jD(t,r),isOriginOutsideView:km(t,r),isOverlayClipped:jD(e,r),isOverlayOutsideView:km(e,r)}}_subtractOverflows(t,...e){return e.reduce((r,i)=>r-Math.max(i,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+t-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&im(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof N)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,r=t.height||0;return{top:t.y,bottom:t.y+r,left:t.x,right:t.x+e,height:r,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let r=e.getBoundingClientRect();return t&&(e.style.display=""),r}};function $r(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function zD(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(jk);return!e||e==="px"?parseFloat(t):null}return n||null}function $D(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Hk(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var xs=new g("OVERLAY_DEFAULT_CONFIG");function QD(n,t){n.get(Ye).load(KD);let e=n.get(ZD),r=n.get(V),i=n.get(Pe),o=n.get(At),s=n.get(en),a=n.get(Ee,null,{optional:!0})||n.get(Ie).createRenderer(null,null),l=new Cs(t),c=n.get(xs,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in r.body?l.usePopover=t?.usePopover??c:l.usePopover=!1;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Nm(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new xc(new Dc(d,o,n),f,d,l,n.get(T),n.get(qD),r,n.get(kl),n.get(YD),t?.disableAnimations??n.get(go,null,{optional:!0})==="NoopAnimations",n.get(_e),a)}var Uk=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],zk=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=u(q);return()=>Sc(n)}}),Gi=(()=>{class n{elementRef=u(N);static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),JD=new g("cdk-connected-overlay-default-config"),Mc=(()=>{class n{_dir=u(en,{optional:!0});_injector=u(q);_overlayRef;_templatePortal;_backdropSubscription=X.EMPTY;_attachSubscription=X.EMPTY;_detachSubscription=X.EMPTY;_positionSubscription=X.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(zk);_ngZone=u(T);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new K;positionChange=new K;attach=new K;detach=new K;overlayKeydown=new K;overlayOutsideClick=new K;constructor(){let e=u(Gt),r=u(pt),i=u(JD,{optional:!0}),o=u(xs,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ws(e,r),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Uk);let e=this._overlayRef=QD(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(r=>{this.overlayKeydown.next(r),r.keyCode===27&&!this.disableClose&&!Jt(r)&&(r.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(r=>{let i=this._getOriginElement(),o=Fe(r);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(r)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),r=new Cs({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(r.height=this.height),(this.minWidth||this.minWidth===0)&&(r.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(r.minHeight=this.minHeight),this.backdropClass&&(r.backdropClass=this.backdropClass),this.panelClass&&(r.panelClass=this.panelClass),r}_updatePositionStrategy(e){let r=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(r).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=XD(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Gi?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Gi?this.origin.elementRef.nativeElement:this.origin instanceof N?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(r=>this.backdropClick.emit(r)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(od(()=>this.positionChange.observers.length>0)).subscribe(r=>{this._ngZone.run(()=>this.positionChange.emit(r)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",U],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",U],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",U],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",U],push:[2,"cdkConnectedOverlayPush","push",U],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",U],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",U],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Be]})}return n})();var eE=(()=>{class n{_animationsDisabled=Ke();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&ie("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var Gk=["text"],Wk=[[["mat-icon"]],"*"],qk=["mat-icon","*"];function Yk(n,t){if(n&1&&ae(0,"mat-pseudo-checkbox",1),n&2){let e=we();Y("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Kk(n,t){if(n&1&&ae(0,"mat-pseudo-checkbox",3),n&2){let e=we();Y("disabled",e.disabled)}}function Zk(n,t){if(n&1&&(v(0,"span",4),F(1),y()),n&2){let e=we();w(),Lo("(",e.group.label,")")}}var Om=new g("MAT_OPTION_PARENT_COMPONENT"),Fm=new g("MatOptgroup");var Rm=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},Ac=(()=>{class n{_element=u(N);_changeDetectorRef=u(bt);_parent=u(Om,{optional:!0});group=u(Fm,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(Pe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new K;_text;_stateChanges=new M;constructor(){let e=u(Ye);e.load(zi),e.load(rm),this._signalDisableRipple=!!this._parent&&$e(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Jt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Rm(this,e))}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&yt(Gk,7),r&2){let o;ne(o=re())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&he("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(Nt("id",i.id),ge("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),ie("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",U]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:qk,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(Te(Wk),ue(0,Yk,1,2,"mat-pseudo-checkbox",1),ee(1),v(2,"span",2,0),ee(4,1),y(),ue(5,Kk,1,1,"mat-pseudo-checkbox",3),ue(6,Zk,2,1,"span",4),ae(7,"div",5)),r&2&&(fe(i.multiple?0:-1),w(5),fe(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),w(),fe(i.group&&i.group._inert?6:-1),w(),Y("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[eE,gc],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function tE(n,t,e){if(e.length){let r=t.toArray(),i=e.toArray(),o=0;for(let s=0;s<n+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function nE(n,t,e,r){return n<e?n:n+t>e+r?Math.max(0,n-r+t):e}var Xk=["trigger"],Qk=["panel"],Jk=[[["mat-select-trigger"]],"*"],eA=["mat-select-trigger","*"];function tA(n,t){if(n&1&&(v(0,"span",4),F(1),y()),n&2){let e=we();w(),Rt(e.placeholder)}}function nA(n,t){n&1&&ee(0)}function rA(n,t){if(n&1&&(v(0,"span",11),F(1),y()),n&2){let e=we(2);w(),Rt(e.triggerValue)}}function iA(n,t){if(n&1&&(v(0,"span",5),ue(1,nA,1,0)(2,rA,2,1,"span",11),y()),n&2){let e=we();w(),fe(e.customTrigger?1:2)}}function oA(n,t){if(n&1){let e=jf();v(0,"div",12,1),he("keydown",function(i){Ia(e);let o=we();return Sa(o._handleKeydown(i))}),ee(2,1),y()}if(n&2){let e=we();bn(e.panelClass),ie("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),ge("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var sA=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=u(q);return()=>Sc(n)}}),aA=new g("MAT_SELECT_CONFIG"),lA=new g("MatSelectTrigger"),Pm=class{source;value;constructor(t,e){this.source=t,this.value=e}},rE=(()=>{class n{_viewportRuler=u(Ds);_changeDetectorRef=u(bt);_elementRef=u(N);_dir=u(en,{optional:!0});_idGenerator=u(Pe);_renderer=u(Ee);_parentFormField=u(bs,{optional:!0});ngControl=u($n,{self:!0,optional:!0});_liveAnnouncer=u(sm);_defaultOptions=u(aA,{optional:!0});_animationsDisabled=Ke();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let r=this.options.toArray()[e];if(r){let i=this.panel.nativeElement,o=tE(e,this.options,this.optionGroups),s=r._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=nE(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Pm(this,e)}_scrollStrategyFactory=u(sA);_panelOpen=!1;_compareWith=(e,r)=>e===r;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=j(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Zt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Qc(()=>{let e=this.options;return e?e.changes.pipe(lr(e),ri(()=>ar(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(ri(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(Re(e=>e),be(()=>{}));_closedStream=this.openedChange.pipe(Re(e=>!e),be(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let e=u(_c),r=u(ns,{optional:!0}),i=u(rs,{optional:!0}),o=u(new xi("tabindex"),{optional:!0}),s=u(xs,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new $i(e,this.ngControl,i,r,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new _s(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ze(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ze(this._destroy)).subscribe(e=>{e.added.forEach(r=>r.select()),e.removed.forEach(r=>r.deselect())}),this.options.changes.pipe(lr(null),ze(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),r=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}r&&(this._previousControl!==r.control&&(this._previousControl!==void 0&&r.disabled!==null&&r.disabled!==this.disabled&&(this.disabled=r.disabled),this._previousControl=r.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(nd(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{r(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,r=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(r=>r.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let r=e.keyCode,i=r===40||r===38||r===37||r===39,o=r===13||r===32,s=this._keyManager;if(!s.isTyping()&&o&&!Jt(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let r=this._keyManager,i=e.keyCode,o=i===40||i===38,s=r.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&r.activeItem&&!Jt(e))e.preventDefault(),r.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=r.activeItemIndex;r.onKeydown(e),this._multiple&&o&&e.shiftKey&&r.activeItem&&r.activeItemIndex!==a&&r.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Jt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(r=>r.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(r=>this._selectOptionByValue(r)),this._sortValues();else{let r=this._selectOptionByValue(e);r?this._keyManager.updateActiveItem(r):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let r=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return r&&this._selectionModel.select(r),r}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Gi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new hs(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ar(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ze(e)).subscribe(r=>{this._onSelect(r.source,r.isUserInput),r.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ar(...this.options.map(r=>r._stateChanges)).pipe(ze(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,r){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),r&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),r&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((r,i)=>this.sortComparator?this.sortComparator(r,i,e):e.indexOf(r)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let r;this.multiple?r=this.selected.map(i=>i.value):r=this.selected?this.selected.value:e,this._value=r,this.valueChange.emit(r),this._onChange(r),this.selectionChange.emit(this._getChangeEvent(r)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let r=0;r<this.options.length;r++)if(!this.options.get(r).disabled){e=r;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,r=e?e+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(e){let r=Fe(e);r&&(r.tagName==="MAT-OPTION"||r.classList.contains("cdk-overlay-backdrop")||r.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-select"]],contentQueries:function(r,i,o){if(r&1&&jn(o,lA,5)(o,Ac,5)(o,Fm,5),r&2){let s;ne(s=re())&&(i.customTrigger=s.first),ne(s=re())&&(i.options=s),ne(s=re())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&yt(Xk,5)(Qk,5)(Mc,5),r&2){let o;ne(o=re())&&(i.trigger=o.first),ne(o=re())&&(i.panel=o.first),ne(o=re())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(r,i){r&1&&he("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),r&2&&(ge("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),ie("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Fr(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",U],placeholder:"placeholder",required:[2,"required","required",U],multiple:[2,"multiple","multiple",U],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",U],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Fr],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",U]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ce([{provide:vs,useExisting:n},{provide:Om,useExisting:n}]),Be],ngContentSelectors:eA,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(r,i){if(r&1&&(Te(Jk),v(0,"div",2,0),he("click",function(){return i.open()}),v(3,"div",3),ue(4,tA,2,1,"span",4)(5,iA,3,1,"span",5),y(),v(6,"div",6)(7,"div",7),hi(),v(8,"svg",8),ae(9,"path",9),y()()()(),gt(10,oA,3,16,"ng-template",10),he("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(s){return i._handleOverlayKeydown(s)})),r&2){let o=vt(1);w(3),ge("id",i._valueId),w(),fe(i.empty?4:5),w(6),Y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Gi,Mc],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var cA=n=>({options:n});function dA(n,t){if(n&1&&(v(0,"div",4)(1,"div",5),ae(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"div",10)(7,"div",11)(8,"div",12)(9,"div",13)(10,"div",14)(11,"div",15)(12,"div",16)(13,"div",17),y(),ae(14,"div",18),y()),n&2){let e=we();w(14),Y("innerHtml",e.options().message,ko)}}var Vm=new g("BUSY_OPTIONS"),uA=(()=>{class n{delay;minDuration;backdrop;message;wrapperClass;templateRef;constructor(){let e=u(Vm,{optional:!0});e||(e={}),this.delay=e.delay||0,this.minDuration=e.minDuration||0,this.backdrop=e.backdrop!==void 0?e.backdrop:!0,this.message=e.message||"Please Wait...",this.wrapperClass=e.wrapperClass||""}static \u0275fac=function(r){return new(r||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fA=(()=>{class n{options=Kt.required();tracker=Kt.required();static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["cg-busy"]],inputs:{options:[1,"options"],tracker:[1,"tracker"]},decls:5,vars:9,consts:[["defaultTemplate",""],[3,"hidden"],[1,"cg-busy-backdrop","cg-busy-backdrop-animation",3,"hidden"],[1,"cg-busy-template",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"cg-busy-default-sign"],[1,"cg-busy-default-spinner"],[1,"bar1"],[1,"bar2"],[1,"bar3"],[1,"bar4"],[1,"bar5"],[1,"bar6"],[1,"bar7"],[1,"bar8"],[1,"bar9"],[1,"bar10"],[1,"bar11"],[1,"bar12"],[1,"cg-busy-default-text",3,"innerHtml"]],template:function(r,i){if(r&1&&(v(0,"div",1),ae(1,"div",2),Dl(2,3),y(),gt(3,dA,15,1,"ng-template",null,0,Or)),r&2){let o=vt(4);bn(Hf("cg-busy cg-busy-animation ",i.options().wrapperClass)),Y("hidden",!i.tracker().active()),w(),Y("hidden",!i.options().backdrop),w(),Y("ngTemplateOutlet",i.options().templateRef?i.options().templateRef:o)("ngTemplateOutletContext",Uf(7,cA,i.options()))}},dependencies:[Ho],styles:[`.cg-busy,.cg-busy .cg-busy-template,.cg-busy .cg-busy-backdrop{position:absolute;inset:0;width:100%;height:100%}.cg-busy{z-index:1001;text-align:center}.cg-busy-animation.ng-hide-add,.cg-busy-animation.ng-hide-remove{transition:all .3s ease;display:block!important}.cg-busy-animation.ng-hide-remove{opacity:0;transform:translateY(-40px)}.cg-busy-animation.ng-hide-remove.ng-hide-remove-active,.cg-busy-animation.ng-hide-add{opacity:1;transform:translate(0)}.cg-busy-animation.ng-hide-add.ng-hide-add-active{opacity:0;transform:translateY(-40px)}.cg-busy-backdrop{background-color:#fff;opacity:.7}.cg-busy-backdrop-animation.ng-hide-add,.cg-busy-backdrop-animation.ng-hide-remove{transition:opacity .3s ease;display:block!important}.cg-busy-backdrop-animation.ng-hide{opacity:0}.cg-busy-default-sign{display:inline-block;position:relative;z-index:1002;padding-bottom:6px;color:#333;text-shadow:0 1px 1px rgba(255,255,255,.75);background-color:#e9eeee;border:1px solid #dddddd;border-top-width:0;border-radius:0 0 7px 7px;box-shadow:inset 0 1px #fff3,0 1px 2px #0000000d}.cg-busy-default-text{margin:13px 12px 6px 49px;font-size:16px;color:#555;text-align:left;max-width:400px}.cg-busy-default-spinner{position:absolute;width:25px;height:25px;display:inline-block;top:12px;left:14px}.cg-busy-default-spinner div{width:12%;height:26%;background:#000;position:absolute;left:44.5%;top:37%;opacity:0;animation:cg-busy-spinner-anim 1s linear infinite;border-radius:50px;box-shadow:0 0 3px #0003}.cg-busy-default-spinner div.bar1{transform:rotate(0) translateY(-142%);animation-delay:0s}.cg-busy-default-spinner div.bar2{transform:rotate(30deg) translateY(-142%);animation-delay:-.9167s}.cg-busy-default-spinner div.bar3{transform:rotate(60deg) translateY(-142%);animation-delay:-.833s}.cg-busy-default-spinner div.bar4{transform:rotate(90deg) translateY(-142%);animation-delay:-.75s}.cg-busy-default-spinner div.bar5{transform:rotate(120deg) translateY(-142%);animation-delay:-.667s}.cg-busy-default-spinner div.bar6{transform:rotate(150deg) translateY(-142%);animation-delay:-.5833s}.cg-busy-default-spinner div.bar7{transform:rotate(180deg) translateY(-142%);animation-delay:-.5s}.cg-busy-default-spinner div.bar8{transform:rotate(210deg) translateY(-142%);animation-delay:-.41667s}.cg-busy-default-spinner div.bar9{transform:rotate(240deg) translateY(-142%);animation-delay:-.333s}.cg-busy-default-spinner div.bar10{transform:rotate(270deg) translateY(-142%);animation-delay:-.25s}.cg-busy-default-spinner div.bar11{transform:rotate(300deg) translateY(-142%);animation-delay:-.1667s}.cg-busy-default-spinner div.bar12{transform:rotate(330deg) translateY(-142%);animation-delay:-.0833s}@keyframes cg-busy-spinner-anim{0%{opacity:1}to{opacity:.25}}
`],encapsulation:2})}return n})(),Lm=class n{promises;subscriptions;delayPromise=null;durationPromise=null;active=j(!1);injector=u(q);constructor(){this.promises=[],this.subscriptions=[]}static isPromise(t){return t&&(t instanceof Promise||t instanceof W||t instanceof X||$e(t))}callThen(t,e){if(t.finally)t.finally(e);else if(t.then)t.then(e,e);else if(t instanceof W)t.pipe(ni(e));else if(t instanceof X)t.add(e);else if($e(t))Me(()=>{let r=t();I(()=>e(!!r))},{injector:this.injector});else throw new Error("cgBusy expects a Promise ,an Observable, a Subscription, a number or a boolean")}reset(t){this.promises=[],t.promises.forEach(e=>{!e||e.$cgBusyFulfilled||this.addPromiseLikeThing(e)}),this.promises.length!==0&&(t.delay?this.delayPromise=window.setTimeout(()=>{this.delayPromise=null,this.updateActive(),this.createMinDuration(t)},t.delay):this.createMinDuration(t),this.updateActive())}createMinDuration(t){t.minDuration&&(this.durationPromise=window.setTimeout(()=>{this.durationPromise=null,this.updateActive()},t.minDuration))}addPromiseLikeThing(t){if(!n.isPromise(t))throw new Error("cgBusy expects a Promise ,an Observable, a Subscription, a Signal, a number or a boolean");this.promises.indexOf(t)===-1&&(this.promises.push(t),this.callThen(t,(e=!1)=>{e?(t.$cgBusyFulfilled=!1,!this.promises.includes(t)&&this.promises.push(t)):(t.$cgBusyFulfilled=!0,this.promises.includes(t)&&this.promises.splice(this.promises.indexOf(t),1)),this.delayPromise&&this.promises.length===0&&(clearTimeout(this.delayPromise),this.delayPromise=null),this.updateActive()}))}updateActive(){this.active.set(!this.delayPromise&&(!!this.durationPromise||this.promises.length>0))}destroy(){this.delayPromise&&(clearTimeout(this.delayPromise),this.delayPromise=null),this.durationPromise&&(clearTimeout(this.durationPromise),this.durationPromise=null),this.promises=[]}},iE=(()=>{class n{cgBusy=Kt.required();cgBusyConfig=Kt();tracker=new Lm;fakePromise;fakePromiseResolve;$options=E(()=>_(_({},this.defaultOptions),this.cgBusyConfig()));$promise=[];componentRef;viewContainer=u(pt);defaultOptions=u(uA);renderer=u(Ee);el=u(N);constructor(){this.renderer.setStyle(this.el.nativeElement.parentNode,"position","relative"),this.componentRef=this.viewContainer.createComponent(fA),this.componentRef.setInput("tracker",this.tracker),Me(()=>{this.componentRef.setInput("options",this.$options()),I(()=>this.tracker.reset({promises:this.$promise,delay:this.$options().delay||0,minDuration:this.$options().minDuration||0}))}),Me(()=>{this.fakePromise&&(this.fakePromiseResolve&&this.fakePromiseResolve(),this.fakePromise=void 0,this.fakePromiseResolve=void 0);let e=this.cgBusy();Number.isFinite(e)||e===!0||e===!1?(this.fakePromise=new Promise(r=>{this.fakePromiseResolve=r,e||r()}),this.$promise=[this.fakePromise]):Array.isArray(e)?this.$promise=e:this.$promise=[e],I(()=>this.tracker.reset({promises:this.$promise,delay:this.$options().delay||0,minDuration:this.$options().minDuration||0}))})}ngOnDestroy(){this.tracker.destroy(),this.componentRef.destroy(),this.$promise=[],this.fakePromise=void 0,this.fakePromiseResolve=void 0}static \u0275fac=function(r){return new(r||n)};static \u0275dir=H({type:n,selectors:[["","cgBusy",""]],inputs:{cgBusy:[1,"cgBusy"],cgBusyConfig:[1,"cgBusyConfig"]},exportAs:["cgBusy"]})}return n})();var hA=(n,t,e,r,i)=>({templateRef:n,message:t,backdrop:e,delay:r,minDuration:i}),mA=(n,t)=>t.id;function pA(n,t){if(n&1&&(v(0,"mat-error"),F(1),y()),n&2){let e=t.$implicit;w(),Rt(e.message)}}function gA(n,t){if(n&1&&(v(0,"mat-error"),F(1),y()),n&2){let e=t.$implicit;w(),Rt(e.message)}}function yA(n,t){if(n&1&&(v(0,"mat-option",9),F(1),y()),n&2){let e=t.$implicit;Y("value",e),w(),Rt(e.label)}}function vA(n,t){if(n&1&&(v(0,"div",14),ae(1,"div",15),y()),n&2){let e=t.options;w(),Y("innerHtml",e.message,ko)}}var Nc=class n{promiseTypes=[{id:0,label:"Promise",value:this.getHttp.bind(this)},{id:1,label:"Observable",value:this.getHttpObserver.bind(this)},{id:1,label:"Subscription",value:this.getHttpSubscription.bind(this)},{id:5,label:"Signal",value:this.getSignal.bind(this)},{id:5,label:"Signal Delayed",value:this.getSignalDelay.bind(this)},{id:2,label:"Number",value:1},{id:3,label:"Number `falsy`",value:0},{id:4,label:"Boolean",value:!0},{id:5,label:"Boolean false",value:!1}];model=j({delay:0,minDuration:0,message:"Please Wait...",backdrop:!0,showCustomTemplate:!1,promiseType:this.promiseTypes[0]});modelForm=zh(this.model,t=>{Kh(t.delay,{message:"Delay is required"}),Kh(t.minDuration,{message:"MinDuration is required"}),Yh(t.delay,0,{message:"Minimum value for Delay is 0"}),Yh(t.minDuration,0,{message:"Minimum value for MinDuration is 0"})},{submission:{action:async()=>{let t=this.modelForm.promiseType().value().value;typeof t=="function"?this.promise=t():this.promise=t}}});promise=!1;http=u(Ul);getHttp(){return Zc(this.http.get("https://httpbin.org/delay/3"))}getHttpObserver(){return this.http.get("https://httpbin.org/delay/3")}getHttpSubscription(){return this.http.get("https://httpbin.org/delay/3").subscribe(()=>{})}getSignal(){let t=j(!0);return setTimeout(()=>{t.set(!1)},3e3),t}getSignalDelay(){let t=j(!1);return setTimeout(()=>{t.set(!0)},3e3),setTimeout(()=>{t.set(!1)},6e3),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=Z({type:n,selectors:[["app-cg-busy"]],decls:103,vars:16,consts:[["customTemplate",""],[1,"layout-column","flex"],[1,"layout-column","layout-gt-md-row","layout-align-space-between","flex"],[1,"flex","layout-column",3,"formRoot"],[1,"mat-headline"],["matInput","","type","number",3,"formField"],["matInput","","type","text",3,"formField"],[3,"formField"],["id","promiseType",3,"formField"],[3,"value"],[1,"layout-row","layout-align-end-center"],["type","submit","mat-raised-button","",3,"disabled"],[1,"flex"],["cols","4","rowHeight","40px","gutterSize","5",3,"cgBusy","cgBusyConfig"],[1,"custom-template"],[1,"custom-message",3,"innerHtml"]],template:function(e,r){if(e&1&&(v(0,"div",1)(1,"div")(2,"h2"),F(3,"angular-busy2"),y(),v(4,"p"),F(5,"Show busy/loading indicators on any Observable, Subscription, Promise, Boolean, Number"),y()(),v(6,"div",2)(7,"form",3)(8,"label",4),F(9,"Demo Options"),y(),v(10,"mat-form-field")(11,"mat-label"),F(12,"Delay (ms)"),y(),ae(13,"input",5),Vn(),Oo(14,pA,2,1,"mat-error",null,_l),y(),v(16,"mat-form-field")(17,"mat-label"),F(18,"Min Duration (ms)"),y(),ae(19,"input",5),Vn(),Oo(20,gA,2,1,"mat-error",null,_l),y(),v(22,"mat-form-field")(23,"mat-label"),F(24,"Message"),y(),ae(25,"input",6),Vn(),y(),v(26,"mat-checkbox",7),F(27,"Show Backdrop"),y(),Vn(),v(28,"mat-checkbox",7),F(29,"Show Custom Template"),y(),Vn(),v(30,"mat-form-field")(31,"mat-label"),F(32,"Promise type"),y(),v(33,"mat-select",8),Oo(34,yA,2,2,"mat-option",9,mA),y(),Vn(),y(),v(36,"div",10)(37,"button",11),F(38,"Demo"),y()()(),v(39,"div",12)(40,"mat-grid-list",13)(41,"mat-grid-tile")(42,"b"),F(43,"#"),y()(),v(44,"mat-grid-tile")(45,"b"),F(46,"First Name"),y()(),v(47,"mat-grid-tile")(48,"b"),F(49,"Last Name"),y()(),v(50,"mat-grid-tile")(51,"b"),F(52,"Username"),y()(),v(53,"mat-grid-tile")(54,"div"),F(55,"1"),y()(),v(56,"mat-grid-tile")(57,"div"),F(58,"Mark"),y()(),v(59,"mat-grid-tile")(60,"div"),F(61,"Otto"),y()(),v(62,"mat-grid-tile")(63,"div"),F(64,"@mdo"),y()(),v(65,"mat-grid-tile")(66,"div"),F(67,"2"),y()(),v(68,"mat-grid-tile")(69,"div"),F(70,"Mark"),y()(),v(71,"mat-grid-tile")(72,"div"),F(73,"Otto"),y()(),v(74,"mat-grid-tile")(75,"div"),F(76,"@TwBootstrap"),y()(),v(77,"mat-grid-tile")(78,"div"),F(79,"3"),y()(),v(80,"mat-grid-tile")(81,"div"),F(82,"Jacob"),y()(),v(83,"mat-grid-tile")(84,"div"),F(85,"Thornton"),y()(),v(86,"mat-grid-tile")(87,"div"),F(88,"@fat"),y()(),v(89,"mat-grid-tile")(90,"div"),F(91,"4"),y()(),v(92,"mat-grid-tile")(93,"div"),F(94,"Larry"),y()(),v(95,"mat-grid-tile")(96,"div"),F(97,"the Bird"),y()(),v(98,"mat-grid-tile")(99,"div"),F(100,"@twitter"),y()()()()()(),gt(101,vA,2,1,"ng-template",null,0,Or)),e&2){let i=vt(102);w(7),Y("formRoot",r.modelForm),w(6),Y("formField",r.modelForm.delay),Bn(),w(),Fo(r.modelForm.delay().errors()),w(5),Y("formField",r.modelForm.minDuration),Bn(),w(),Fo(r.modelForm.minDuration().errors()),w(5),Y("formField",r.modelForm.message),Bn(),w(),Y("formField",r.modelForm.backdrop),Bn(),w(2),Y("formField",r.modelForm.showCustomTemplate),Bn(),w(5),Y("formField",r.modelForm.promiseType),Bn(),w(),Fo(r.promiseTypes),w(3),Y("disabled",!r.modelForm().valid()),w(3),Y("cgBusy",r.promise)("cgBusyConfig",zf(10,hA,r.modelForm.showCustomTemplate().value()?i:null,r.modelForm.message().value(),r.modelForm.backdrop().value(),r.modelForm.delay().value(),r.modelForm.minDuration().value()))}},dependencies:[iE,j_,H_,gD,vD,xm,Im,ED,Em,VD,ys,Ac,rE],styles:['mat-grid-list[_ngcontent-%COMP%]{min-width:400px}.custom-template[_ngcontent-%COMP%]{background:url("./media/finalfantasy-TPUY5RPS.gif") no-repeat 50% 20px;width:100%;height:100%;position:absolute}.custom-message[_ngcontent-%COMP%]{text-align:center;font-size:26px;position:absolute;top:100px;width:100%;text-shadow:1px 1px 2px white,-1px -1px 2px white,-4px 4px 4px white,-4px 4px 4px white}.mat-select[_ngcontent-%COMP%]{margin-top:25px}.flex[_ngcontent-%COMP%]{flex:1 auto}.layout-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.layout-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}@media(min-width:1280px){.layout-gt-md-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}}.layout-align-space-between[_ngcontent-%COMP%]{justify-content:space-between}.layout-align-end-center[_ngcontent-%COMP%]{align-items:center;justify-content:flex-end}[_nghost-%COMP%]{padding:8px;width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}']})};var oE={providers:[ou(),$f(),uh(),{provide:Vm,useValue:{minDuration:1e4}}]};ih(Nc,oE).catch(n=>console.log(n));
