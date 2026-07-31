var bE=Object.defineProperty,_E=Object.defineProperties;var DE=Object.getOwnPropertyDescriptors;var Ym=Object.getOwnPropertySymbols;var EE=Object.prototype.hasOwnProperty,SE=Object.prototype.propertyIsEnumerable;var Km=(n,e,t)=>e in n?bE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_=(n,e)=>{for(var t in e||={})EE.call(e,t)&&Km(n,t,e[t]);if(Ym)for(var t of Ym(e))SE.call(e,t)&&Km(n,t,e[t]);return n},G=(n,e)=>_E(n,DE(e));var $e=null,Rs=!1,Yn=1,wE=null,ce=Symbol("SIGNAL");function N(n){let e=$e;return $e=n,e}function Os(){return $e}var rn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Sn(n){if(Rs)throw new Error("");if($e===null)return;$e.consumerOnSignalRead(n);let e=$e.producersTail;if(e!==void 0&&e.producer===n)return;let t,r=$e.recomputing;if(r&&(t=e!==void 0?e.nextProducer:$e.producers,t!==void 0&&t.producer===n)){$e.producersTail=t,t.lastReadVersion=n.version,t.knownValidAtEpoch=Yn;return}let i=n.consumersTail;if(i!==void 0&&i.consumer===$e&&(!r||i.knownValidAtEpoch===Yn))return;let o=Zr($e),s={producer:n,consumer:$e,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:Yn,lastReadVersion:n.version,nextConsumer:void 0};$e.producersTail=s,e!==void 0?e.nextProducer=s:$e.producers=s,o&&ep(n,s)}function Zm(){Yn++}function Xn(n){if(!(Zr(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Yn)){if(!n.producerMustRecompute(n)&&!Qn(n)){Kr(n);return}n.producerRecomputeValue(n),Kr(n)}}function Hc(n){if(n.consumers===void 0)return;let e=Rs;Rs=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||Xm(r)}}finally{Rs=e}}function Uc(){return $e?.consumerAllowSignalWrites!==!1}function Xm(n){n.dirty=!0,Hc(n),n.consumerMarkedDirty?.(n)}function Kr(n){n.dirty=!1,n.lastCleanEpoch=Yn}function Ft(n){return n&&Qm(n),N(n)}function Qm(n){if(n.producersTail?.knownValidAtEpoch===Yn){let e=n.producers;for(;e!==void 0;)e.knownValidAtEpoch=null,e=e.nextProducer}n.producersTail=void 0,n.recomputing=!0}function on(n,e){N(e),n&&Jm(n)}function Jm(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(Zr(n))do t=zc(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Qn(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,r=e.lastReadVersion;if(r!==t.version||(Xn(t),r!==t.version))return!0}return!1}function sn(n){if(Zr(n)){let e=n.producers;for(;e!==void 0;)e=zc(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function ep(n,e){let t=n.consumersTail,r=Zr(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!r)for(let i=n.producers;i!==void 0;i=i.nextProducer)ep(i.producer,i)}function zc(n){let e=n.producer,t=n.nextProducer,r=n.nextConsumer,i=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:e.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(e.consumers=r,!Zr(e)){let o=e.producers;for(;o!==void 0;)o=zc(o)}return t}function Zr(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Qi(n){wE?.(n)}function Ji(n,e){return Object.is(n,e)}function eo(n,e){let t=Object.create(CE);t.computation=n,e!==void 0&&(t.equal=e);let r=()=>{if(Xn(t),Sn(t),t.value===Ot)throw t.error;return t.value};return r[ce]=t,Qi(t),r}var Kn=Symbol("UNSET"),Zn=Symbol("COMPUTING"),Ot=Symbol("ERRORED"),CE=G(_({},rn),{value:Kn,dirty:!0,error:null,equal:Ji,kind:"computed",producerMustRecompute(n){return n.value===Kn||n.value===Zn},producerRecomputeValue(n){if(n.value===Zn)throw new Error("");let e=n.value;n.value=Zn;let t=Ft(n),r,i=!1;try{r=n.computation(),N(null),i=e!==Kn&&e!==Ot&&r!==Ot&&n.equal(e,r)}catch(o){r=Ot,n.error=o}finally{on(n,t)}if(i){n.value=e;return}n.value=r,n.version++}});function xE(){throw new Error}var tp=xE;function np(n){tp(n)}function $c(n){tp=n}var IE=null;function Gc(n,e){let t=Object.create(to);t.value=n,e!==void 0&&(t.equal=e);let r=()=>rp(t);return r[ce]=t,Qi(t),[r,s=>Jn(t,s),s=>Fs(t,s)]}function rp(n){return Sn(n),n.value}function Jn(n,e){Uc()||np(n),n.equal(n.value,e)||(n.value=e,NE(n))}function Fs(n,e){Uc()||np(n),Jn(n,e(n.value))}var to=G(_({},rn),{equal:Ji,value:void 0,kind:"signal"});function NE(n){n.version++,Zm(),Hc(n),IE?.(n)}var Wc=G(_({},rn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function qc(n){if(n.dirty=!1,n.version>0&&!Qn(n))return;n.version++;let e=Ft(n);try{n.cleanup(),n.fn()}finally{on(n,e)}}var Yc;function Ps(){return Yc}function Pt(n){let e=Yc;return Yc=n,e}var ip=Symbol("NotFound");function Xr(n){return n===ip||n?.name==="\u0275NotFound"}function Kc(n,e,t){let r=Object.create(ME);r.source=n,r.computation=e,t!=null&&(r.equal=t);let o=()=>{if(Xn(r),Sn(r),r.value===Ot)throw r.error;return r.value};return o[ce]=r,Qi(r),o}function Zc(n,e){Xn(n),Jn(n,e),Kr(n)}function op(n,e){if(Xn(n),n.value===Ot)throw n.error;Fs(n,e),Kr(n)}var ME=G(_({},rn),{value:Kn,dirty:!0,error:null,equal:Ji,kind:"linkedSignal",producerMustRecompute(n){return n.value===Kn||n.value===Zn},producerRecomputeValue(n){if(n.value===Zn)throw new Error("");let e=n.value;n.value=Zn;let t=Ft(n),r,i=!1;try{let o=n.source(),s=e!==Kn&&e!==Ot,a=s?{source:n.sourceValue,value:e}:void 0;r=n.computation(o,a),n.sourceValue=o,N(null),i=s&&r!==Ot&&n.equal(e,r)}catch(o){r=Ot,n.error=o}finally{on(n,t)}if(i){n.value=e;return}n.value=r,n.version++}});function sp(n){let e=N(null);try{return n()}finally{N(e)}}function $(n){return typeof n=="function"}function Qr(n){let t=n(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ls=Qr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function er(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var X=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if($(r))try{r()}catch(o){e=o instanceof Ls?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{ap(o)}catch(s){e=e??[],s instanceof Ls?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Ls(e)}}add(e){var t;if(e&&e!==this)if(this.closed)ap(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&er(t,e)}remove(e){let{_finalizers:t}=this;t&&er(t,e),e instanceof n&&e._removeParent(this)}};X.EMPTY=(()=>{let n=new X;return n.closed=!0,n})();var Xc=X.EMPTY;function Vs(n){return n instanceof X||n&&"closed"in n&&$(n.remove)&&$(n.add)&&$(n.unsubscribe)}function ap(n){$(n)?n():n.unsubscribe()}var Et={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Jr={setTimeout(n,e,...t){let{delegate:r}=Jr;return r?.setTimeout?r.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Jr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Bs(n){Jr.setTimeout(()=>{let{onUnhandledError:e}=Et;if(e)e(n);else throw n})}function no(){}var lp=Qc("C",void 0,void 0);function cp(n){return Qc("E",void 0,n)}function dp(n){return Qc("N",n,void 0)}function Qc(n,e,t){return{kind:n,value:e,error:t}}var tr=null;function ei(n){if(Et.useDeprecatedSynchronousErrorHandling){let e=!tr;if(e&&(tr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:r}=tr;if(tr=null,t)throw r}}else n()}function up(n){Et.useDeprecatedSynchronousErrorHandling&&tr&&(tr.errorThrown=!0,tr.error=n)}var nr=class extends X{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Vs(e)&&e.add(this)):this.destination=AE}static create(e,t,r){return new St(e,t,r)}next(e){this.isStopped?ed(dp(e),this):this._next(e)}error(e){this.isStopped?ed(cp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ed(lp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TE=Function.prototype.bind;function Jc(n,e){return TE.call(n,e)}var td=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(r){js(r)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(r){js(r)}else js(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){js(t)}}},St=class extends nr{constructor(e,t,r){super();let i;if($(e)||!e)i={next:e??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Et.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&Jc(e.next,o),error:e.error&&Jc(e.error,o),complete:e.complete&&Jc(e.complete,o)}):i=e}this.destination=new td(i)}};function js(n){Et.useDeprecatedSynchronousErrorHandling?up(n):Bs(n)}function kE(n){throw n}function ed(n,e){let{onStoppedNotification:t}=Et;t&&Jr.setTimeout(()=>t(n,e))}var AE={closed:!0,next:no,error:kE,complete:no};var ti=typeof Symbol=="function"&&Symbol.observable||"@@observable";function wn(n){return n}function fp(n){return n.length===0?wn:n.length===1?n[0]:function(t){return n.reduce((r,i)=>i(r),t)}}var B=class n{constructor(e){e&&(this._subscribe=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}subscribe(e,t,r){let i=OE(e)?e:new St(e,t,r);return ei(()=>{let{operator:o,source:s}=this;i.add(o?o.call(i,s):s?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e,t){return t=hp(t),new t((r,i)=>{let o=new St({next:s=>{try{e(s)}catch(a){i(a),o.unsubscribe()}},error:i,complete:r});this.subscribe(o)})}_subscribe(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)}[ti](){return this}pipe(...e){return fp(e)(this)}toPromise(e){return e=hp(e),new e((t,r)=>{let i;this.subscribe(o=>i=o,o=>r(o),()=>t(i))})}};B.create=n=>new B(n);function hp(n){var e;return(e=n??Et.Promise)!==null&&e!==void 0?e:Promise}function RE(n){return n&&$(n.next)&&$(n.error)&&$(n.complete)}function OE(n){return n&&n instanceof nr||RE(n)&&Vs(n)}function FE(n){return $(n?.lift)}function Q(n){return e=>{if(FE(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(n,e,t,r,i){return new nd(n,e,t,r,i)}var nd=class extends nr{constructor(e,t,r,i,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(l){e.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var mp=Qr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=class extends B{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let t=new Hs(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new mp}next(e){ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(e)}})}error(e){ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:t}=this;for(;t.length;)t.shift().error(e)}})}complete(){ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:t,isStopped:r,observers:i}=this;return t||r?Xc:(this.currentObservers=null,i.push(e),new X(()=>{this.currentObservers=null,er(i,e)}))}_checkFinalizedStatuses(e){let{hasError:t,thrownError:r,isStopped:i}=this;t?e.error(r):i&&e.complete()}asObservable(){let e=new B;return e.source=this,e}};x.create=(n,e)=>new Hs(n,e);var Hs=class extends x{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,e)}error(e){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&r!==void 0?r:Xc}};var rr=class extends x{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:r}=this;if(e)throw t;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var ro={now(){return(ro.delegate||Date).now()},delegate:void 0};var Us=class extends x{constructor(e=1/0,t=1/0,r=ro){super(),this._bufferSize=e,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,t)}next(e){let{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;t||(r.push(e),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(e),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!e.closed;s+=r?1:2)e.next(o[s]);return this._checkFinalizedStatuses(e),t}_trimBuffer(){let{_bufferSize:e,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*e;if(e<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=t.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var zs=class extends X{constructor(e,t){super()}schedule(e,t=0){return this}};var io={setInterval(n,e,...t){let{delegate:r}=io;return r?.setInterval?r.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=io;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var $s=class extends zs{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var r;if(this.closed)return this;this.state=e;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,t)),this.pending=!0,this.delay=t,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,r=0){return io.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return t;t!=null&&io.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(e,t);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r=!1,i;try{this.work(e)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,er(r,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var rd=(()=>{class n{constructor(t,r=n.now){this.schedulerActionCtor=t,this.now=r}schedule(t,r=0,i){return new this.schedulerActionCtor(this,t).schedule(i,r)}}return n.now=ro.now,n})();var Gs=class extends rd{constructor(e,t=rd.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let r;this._active=!0;do if(r=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}};var oo=new Gs($s),pp=oo;var ir=new B(n=>n.complete());function Ws(n){return n&&$(n.schedule)}function id(n){return n[n.length-1]}function gp(n){return $(id(n))?n.pop():void 0}function Cn(n){return Ws(id(n))?n.pop():void 0}function yp(n,e){return typeof id(n)=="number"?n.pop():e}function bp(n,e,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(n,e||[])).next())})}function vp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function or(n){return this instanceof or?(this.v=n,this):new or(n)}function _p(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(h){return function(p){return Promise.resolve(p).then(h,f)}}function a(h,p){r[h]&&(i[h]=function(D){return new Promise(function(C,P){o.push([h,D,C,P])>1||l(h,D)})},p&&(i[h]=p(i[h])))}function l(h,p){try{c(r[h](p))}catch(D){m(o[0][3],D)}}function c(h){h.value instanceof or?Promise.resolve(h.value.v).then(d,f):m(o[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function m(h,p){h(p),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Dp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof vp=="function"?vp(n):n[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=n[o]&&function(s){return new Promise(function(a,l){s=n[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var qs=(n=>n&&typeof n.length=="number"&&typeof n!="function");function Ys(n){return $(n?.then)}function Ks(n){return $(n[ti])}function Zs(n){return Symbol.asyncIterator&&$(n?.[Symbol.asyncIterator])}function Xs(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function PE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Qs=PE();function Js(n){return $(n?.[Qs])}function ea(n){return _p(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:r,done:i}=yield or(t.read());if(i)return yield or(void 0);yield yield or(r)}}finally{t.releaseLock()}})}function ta(n){return $(n?.getReader)}function de(n){if(n instanceof B)return n;if(n!=null){if(Ks(n))return LE(n);if(qs(n))return VE(n);if(Ys(n))return BE(n);if(Zs(n))return Ep(n);if(Js(n))return jE(n);if(ta(n))return HE(n)}throw Xs(n)}function LE(n){return new B(e=>{let t=n[ti]();if($(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function VE(n){return new B(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function BE(n){return new B(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Bs)})}function jE(n){return new B(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Ep(n){return new B(e=>{UE(n,e).catch(t=>e.error(t))})}function HE(n){return Ep(ea(n))}function UE(n,e){var t,r,i,o;return bp(this,void 0,void 0,function*(){try{for(t=Dp(n);r=yield t.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}e.complete()})}function st(n,e,t,r=0,i=!1){let o=e.schedule(function(){t(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(o),!i)return o}function na(n,e=0){return Q((t,r)=>{t.subscribe(te(r,i=>st(r,n,()=>r.next(i),e),()=>st(r,n,()=>r.complete(),e),i=>st(r,n,()=>r.error(i),e)))})}function ra(n,e=0){return Q((t,r)=>{r.add(n.schedule(()=>t.subscribe(r),e))})}function Sp(n,e){return de(n).pipe(ra(e),na(e))}function wp(n,e){return de(n).pipe(ra(e),na(e))}function Cp(n,e){return new B(t=>{let r=0;return e.schedule(function(){r===n.length?t.complete():(t.next(n[r++]),t.closed||this.schedule())})})}function xp(n,e){return new B(t=>{let r;return st(t,e,()=>{r=n[Qs](),st(t,e,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){t.error(s);return}o?t.complete():t.next(i)},0,!0)}),()=>$(r?.return)&&r.return()})}function ia(n,e){if(!n)throw new Error("Iterable cannot be null");return new B(t=>{st(t,e,()=>{let r=n[Symbol.asyncIterator]();st(t,e,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function Ip(n,e){return ia(ea(n),e)}function Np(n,e){if(n!=null){if(Ks(n))return Sp(n,e);if(qs(n))return Cp(n,e);if(Ys(n))return wp(n,e);if(Zs(n))return ia(n,e);if(Js(n))return xp(n,e);if(ta(n))return Ip(n,e)}throw Xs(n)}function an(n,e){return e?Np(n,e):de(n)}function sr(...n){let e=Cn(n);return an(n,e)}var Mp=Qr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function od(n,e){let t=typeof e=="object";return new Promise((r,i)=>{let o=new St({next:s=>{r(s),o.unsubscribe()},error:i,complete:()=>{t?r(e.defaultValue):i(new Mp)}});n.subscribe(o)})}function Tp(n){return n instanceof Date&&!isNaN(n)}function De(n,e){return Q((t,r)=>{let i=0;t.subscribe(te(r,o=>{r.next(n.call(e,o,i++))}))})}var{isArray:zE}=Array;function $E(n,e){return zE(e)?n(...e):n(e)}function kp(n){return De(e=>$E(n,e))}var{isArray:GE}=Array,{getPrototypeOf:WE,prototype:qE,keys:YE}=Object;function Ap(n){if(n.length===1){let e=n[0];if(GE(e))return{args:e,keys:null};if(KE(e)){let t=YE(e);return{args:t.map(r=>e[r]),keys:t}}}return{args:n,keys:null}}function KE(n){return n&&typeof n=="object"&&WE(n)===qE}function Rp(n,e){return n.reduce((t,r,i)=>(t[r]=e[i],t),{})}function Op(n,e,t,r,i,o,s,a){let l=[],c=0,d=0,f=!1,m=()=>{f&&!l.length&&!c&&e.complete()},h=D=>c<r?p(D):l.push(D),p=D=>{o&&e.next(D),c++;let C=!1;de(t(D,d++)).subscribe(te(e,P=>{i?.(P),o?h(P):e.next(P)},()=>{C=!0},void 0,()=>{if(C)try{for(c--;l.length&&c<r;){let P=l.shift();s?st(e,s,()=>p(P)):p(P)}m()}catch(P){e.error(P)}}))};return n.subscribe(te(e,h,()=>{f=!0,m()})),()=>{a?.()}}function ni(n,e,t=1/0){return $(e)?ni((r,i)=>De((o,s)=>e(r,o,i,s))(de(n(r,i))),t):(typeof e=="number"&&(t=e),Q((r,i)=>Op(r,i,n,t)))}function oa(n=1/0){return ni(wn,n)}function Fp(){return oa(1)}function sd(...n){return Fp()(an(n,Cn(n)))}function ad(n){return new B(e=>{de(n()).subscribe(e)})}function ld(...n){let e=gp(n),{args:t,keys:r}=Ap(n),i=new B(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;de(t[d]).subscribe(te(o,m=>{f||(f=!0,c--),a[d]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Rp(r,a):a),o.complete())}))}});return e?i.pipe(kp(e)):i}function Pp(n=0,e,t=pp){let r=-1;return e!=null&&(Ws(e)?t=e:r=e),new B(i=>{let o=Tp(n)?+n-t.now():n;o<0&&(o=0);let s=0;return t.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function ar(...n){let e=Cn(n),t=yp(n,1/0),r=n;return r.length?r.length===1?de(r[0]):oa(t)(an(r,e)):ir}function Fe(n,e){return Q((t,r)=>{let i=0;t.subscribe(te(r,o=>n.call(e,o,i++)&&r.next(o)))})}function Lp(n){return Q((e,t)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,t.next(c)}s&&t.complete()},l=()=>{o=null,s&&t.complete()};e.subscribe(te(t,c=>{r=!0,i=c,o||de(n(c)).subscribe(o=te(t,a,l))},()=>{s=!0,(!r||!o||o.closed)&&t.complete()}))})}function sa(n,e=oo){return Lp(()=>Pp(n,e))}function cd(n,e){return $(e)?ni(n,e,1):ni(n,1)}function dd(n,e=oo){return Q((t,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+n,d=e.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}t.subscribe(te(r,c=>{o=c,s=e.now(),i||(i=e.schedule(l,n),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function ud(n){return n<=0?()=>ir:Q((e,t)=>{let r=0;e.subscribe(te(t,i=>{++r<=n&&(t.next(i),n<=r&&t.complete())}))})}function aa(n,e=wn){return n=n??ZE,Q((t,r)=>{let i,o=!0;t.subscribe(te(r,s=>{let a=e(s);(o||!n(i,a))&&(o=!1,i=a,r.next(s))}))})}function ZE(n,e){return n===e}function ri(n){return Q((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function la(){return Q((n,e)=>{let t,r=!1;n.subscribe(te(e,i=>{let o=t;t=i,r&&e.next([o,i]),r=!0}))})}function Vp(n={}){let{connector:e=()=>new x,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=n;return o=>{let s,a,l,c=0,d=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,d=f=!1},p=()=>{let D=s;h(),D?.unsubscribe()};return Q((D,C)=>{c++,!f&&!d&&m();let P=l=l??e();C.add(()=>{c--,c===0&&!f&&!d&&(a=fd(p,i))}),P.subscribe(C),!s&&c>0&&(s=new St({next:xe=>P.next(xe),error:xe=>{f=!0,m(),a=fd(h,t,xe),P.error(xe)},complete:()=>{d=!0,m(),a=fd(h,r),P.complete()}}),de(D).subscribe(s))})(o)}}function fd(n,e,...t){if(e===!0){n();return}if(e===!1)return;let r=new St({next:()=>{r.unsubscribe(),n()}});return de(e(...t)).subscribe(r)}function ca(n,e,t){let r,i=!1;return n&&typeof n=="object"?{bufferSize:r=1/0,windowTime:e=1/0,refCount:i=!1,scheduler:t}=n:r=n??1/0,Vp({connector:()=>new Us(r,e,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function hd(n){return Fe((e,t)=>n<=t)}function lr(...n){let e=Cn(n);return Q((t,r)=>{(e?sd(n,t,e):sd(n,t)).subscribe(r)})}function ii(n,e){return Q((t,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();t.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;de(n(l,d)).subscribe(i=te(r,f=>r.next(e?e(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function We(n){return Q((e,t)=>{de(n).subscribe(te(t,()=>t.complete(),no)),!t.closed&&e.subscribe(t)})}function md(n,e=!1){return Q((t,r)=>{let i=0;t.subscribe(te(r,o=>{let s=n(o,i++);(s||e)&&r.next(o),!s&&r.complete()}))})}function pd(n,e,t){let r=$(n)||e||t?{next:n,error:e,complete:t}:n;return r?Q((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):wn}var ga="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",b=class extends Error{code;constructor(e,t){super(mr(e,t)),this.code=e}};function XE(n){return`NG0${Math.abs(n)}`}function mr(n,e){return`${XE(n)}${e?": "+e:""}`}function se(n){for(let e in n)if(n[e]===se)return e;throw Error("")}function $p(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function ya(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ya).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function va(n,e){return n?e?`${n} ${e}`:n:e||""}var QE=se({__forward_ref__:se});function lt(n){return n.__forward_ref__=lt,n}function Pe(n){return Md(n)?n():n}function Md(n){return typeof n=="function"&&n.hasOwnProperty(QE)&&n.__forward_ref__===lt}function j(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ba(n){return JE(n,_a)}function JE(n,e){return n.hasOwnProperty(e)&&n[e]||null}function eS(n){let e=n?.[_a]??null;return e||null}function yd(n){return n&&n.hasOwnProperty(ua)?n[ua]:null}var _a=se({\u0275prov:se}),ua=se({\u0275inj:se}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=j({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Td(n){return n&&!!n.\u0275providers}var ho=se({\u0275cmp:se}),mo=se({\u0275dir:se}),kd=se({\u0275pipe:se});var lo=se({\u0275fac:se}),pr=se({__NG_ELEMENT_ID__:se}),Bp=se({__NG_ENV_ID__:se});function Nn(n){return Rd(n,"@Component"),n[ho]||null}function Ad(n){return Rd(n,"@Directive"),n[mo]||null}function Gp(n){return Rd(n,"@Pipe"),n[kd]||null}function Rd(n,e){if(n==null)throw new b(-919,!1)}function Da(n){return typeof n=="string"?n:n==null?"":String(n)}var Wp=se({ngErrorCode:se}),tS=se({ngErrorMessage:se}),nS=se({ngTokenPath:se});function Od(n,e){return qp("",-200,e)}function Ea(n,e){throw new b(-201,!1)}function qp(n,e,t){let r=new b(e,n);return r[Wp]=e,r[tS]=n,t&&(r[nS]=t),r}function rS(n){return n[Wp]}var vd;function Yp(){return vd}function Qe(n){let e=vd;return vd=n,e}function Fd(n,e,t){let r=ba(n);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(e!==void 0)return e;Ea(n,"")}var Mn=globalThis;var iS={},cr=iS,oS="__NG_DI_FLAG__",bd=class{injector;constructor(e){this.injector=e}retrieve(e,t){let r=dr(t)||0;try{return this.injector.get(e,r&8?null:cr,r)}catch(i){if(Xr(i))return i;throw i}}};function sS(n,e=0){let t=Ps();if(t===void 0)throw new b(-203,!1);if(t===null)return Fd(n,void 0,e);{let r=aS(e),i=t.retrieve(n,r);if(Xr(i)){if(r.optional)return null;throw i}return i}}function R(n,e=0){return(Yp()||sS)(Pe(n),e)}function u(n,e){return R(n,dr(e))}function dr(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function aS(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function _d(n){let e=[];for(let t=0;t<n.length;t++){let r=Pe(n[t]);if(Array.isArray(r)){if(r.length===0)throw new b(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=lS(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}e.push(R(i,o))}else e.push(R(r))}return e}function lS(n){return n[oS]}function ur(n,e){let t=n.hasOwnProperty(lo);return t?n[lo]:null}function Kp(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++){let i=n[r],o=e[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function Zp(n){return n.flat(Number.POSITIVE_INFINITY)}function Sa(n,e){n.forEach(t=>Array.isArray(t)?Sa(t,e):e(t))}function Pd(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function po(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Xp(n,e){let t=[];for(let r=0;r<n;r++)t.push(e);return t}function Qp(n,e,t,r){let i=n.length;if(i==e)n.push(t,r);else if(i===1)n.push(r,n[0]),n[0]=t;else{for(i--,n.push(n[i-1],n[i]);i>e;){let o=i-2;n[i]=n[o],i--}n[e]=t,n[e+1]=r}}function wa(n,e,t){let r=li(n,e);return r>=0?n[r|1]=t:(r=~r,Qp(n,r,e,t)),r}function Ca(n,e){let t=li(n,e);if(t>=0)return n[t|1]}function li(n,e){return cS(n,e,1)}function cS(n,e,t){let r=0,i=n.length>>t;for(;i!==r;){let o=r+(i-r>>1),s=n[o<<t];if(e===s)return o<<t;s>e?i=o:r=o+1}return~(i<<t)}var Tn={},at=[],gr=new g(""),go=new g("",-1),Ld=new g(""),si=class{get(e,t=cr){if(t===cr){let i=qp("",-201);throw i.name="\u0275NotFound",i}return t}};function Vt(n){return{\u0275providers:n}}function Jp(n){return Vt([{provide:gr,multi:!0,useValue:n}])}function eg(...n){return{\u0275providers:Vd(!0,n),\u0275fromNgModule:!0}}function Vd(n,...e){let t=[],r=new Set,i,o=s=>{t.push(s)};return Sa(e,s=>{let a=s;fa(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&tg(i,o),t}function tg(n,e){for(let t=0;t<n.length;t++){let{ngModule:r,providers:i}=n[t];Bd(i,o=>{e(o,r)})}}function fa(n,e,t,r){if(n=Pe(n),!n)return!1;let i=null,o=yd(n),s=!o&&Nn(n);if(!o&&!s){let l=n.ngModule;if(o=yd(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=n}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)fa(c,e,t,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;Sa(o.imports,d=>{fa(d,e,t,r)&&(c||=[],c.push(d))}),c!==void 0&&tg(c,e)}if(!a){let c=ur(i)||(()=>new i);e({provide:i,useFactory:c,deps:at},i),e({provide:Ld,useValue:i,multi:!0},i),e({provide:gr,useValue:()=>R(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=n;Bd(l,d=>{e(d,c)})}}else return!1;return i!==n&&n.providers!==void 0}function Bd(n,e){for(let t of n)Td(t)&&(t=t.\u0275providers),Array.isArray(t)?Bd(t,e):e(t)}var dS=se({provide:String,useValue:se});function ng(n){return n!==null&&typeof n=="object"&&dS in n}function uS(n){return!!(n&&n.useExisting)}function fS(n){return!!(n&&n.useFactory)}function fr(n){return typeof n=="function"}function rg(n){return!!n.useClass}var yo=new g(""),da={},jp={},gd;function ci(){return gd===void 0&&(gd=new si),gd}var Ee=class{},hr=class extends Ee{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,Ed(e,s=>this.processProvider(s)),this.records.set(go,oi(void 0,this)),i.has("environment")&&this.records.set(Ee,oi(void 0,this));let o=this.records.get(yo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Ld,at,{self:!0}))}retrieve(e,t){let r=dr(t)||0;try{return this.get(e,cr,r)}catch(i){if(Xr(i))return i;throw i}}destroy(){so(this),this._destroyed=!0;let e=N(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(e)}}onDestroy(e){return so(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){so(this);let t=Pt(this),r=Qe(void 0),i;try{return e()}finally{Pt(t),Qe(r)}}get(e,t=cr,r){if(so(this),e.hasOwnProperty(Bp))return e[Bp](this);let i=dr(r),o,s=Pt(this),a=Qe(void 0);try{if(!(i&4)){let c=this.records.get(e);if(c===void 0){let d=yS(e)&&ba(e);d&&this.injectableDefInScope(d)?c=oi(Dd(e),da):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c,i)}let l=i&2?ci():this.parent;return t=i&8&&t===cr?null:t,l.get(e,t)}catch(l){let c=rS(l);throw c===-200||c===-201?new b(c,null):l}finally{Qe(a),Pt(s)}}resolveInjectorInitializers(){let e=N(null),t=Pt(this),r=Qe(void 0),i;try{let o=this.get(gr,at,{self:!0});for(let s of o)s()}finally{Pt(t),Qe(r),N(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=Pe(e);let t=fr(e)?e:Pe(e&&e.provide),r=mS(e);if(!fr(e)&&e.multi===!0){let i=this.records.get(t);i||(i=oi(void 0,da,!0),i.factory=()=>_d(i.multi),this.records.set(t,i)),t=e,i.multi.push(e)}this.records.set(t,r)}hydrate(e,t,r){let i=N(null);try{if(t.value===jp)throw Od("");return t.value===da&&(t.value=jp,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&gS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{N(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Pe(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Dd(n){let e=ba(n),t=e!==null?e.factory:ur(n);if(t!==null)return t;if(n instanceof g)throw new b(-204,!1);if(n instanceof Function)return hS(n);throw new b(-204,!1)}function hS(n){if(n.length>0)throw new b(-204,!1);let t=eS(n);return t!==null?()=>t.factory(n):()=>new n}function mS(n){if(ng(n))return oi(void 0,n.useValue);{let e=jd(n);return oi(e,da)}}function jd(n,e,t){let r;if(fr(n)){let i=Pe(n);return ur(i)||Dd(i)}else if(ng(n))r=()=>Pe(n.useValue);else if(fS(n))r=()=>n.useFactory(..._d(n.deps||[]));else if(uS(n))r=(i,o)=>R(Pe(n.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Pe(n&&(n.useClass||n.provide));if(pS(n))r=()=>new i(..._d(n.deps));else return ur(i)||Dd(i)}return r}function so(n){if(n.destroyed)throw new b(-205,!1)}function oi(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function pS(n){return!!n.deps}function gS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function yS(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function Ed(n,e){for(let t of n)Array.isArray(t)?Ed(t,e):t&&Td(t)?Ed(t.\u0275providers,e):e(t)}function Ct(n,e){let t;n instanceof hr?(so(n),t=n):t=new bd(n);let r,i=Pt(t),o=Qe(void 0);try{return e()}finally{Pt(i),Qe(o)}}function ig(){return Yp()!==void 0||Ps()!=null}var xt=0,I=1,T=2,Ne=3,ct=4,je=5,yr=6,di=7,Se=8,Bt=9,It=10,le=11,ui=12,Hd=13,kn=14,Ge=15,An=16,vr=17,jt=18,Ht=19,Ud=20,ln=21,xa=22,In=23,Je=24,br=25,Ut=26,_e=27,og=1,zd=6,_r=7,vo=8,Dr=9,pe=10;function dn(n){return Array.isArray(n)&&typeof n[og]=="object"}function dt(n){return Array.isArray(n)&&n[og]===!0}function $d(n){return(n.flags&4)!==0}function un(n){return n.componentOffset>-1}function fi(n){return(n.flags&1)===1}function zt(n){return!!n.template}function hi(n){return(n[T]&512)!==0}function Er(n){return(n[T]&256)===256}var he=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(he||{}),ao,ai="svg",Ia="math",sg="",Hp="*",Sd=()=>Object.create(null);function vS(){return ao||(ao=Sd(),xn(he.HTML,void 0,[["iframe",["srcdoc"]],["*",["innerHTML","outerHTML"]]]),xn(he.STYLE,void 0,[["*",["style"]]]),xn(he.URL,void 0,[["*",["formAction"]],["area",["href"]],["a",["href","xlink:href"]],["form",["action"]],["img",["src"]],["video",["src"]]]),xn(he.URL,Ia,[["*",["href","xlink:href"]]]),xn(he.RESOURCE_URL,void 0,[["base",["href"]],["embed",["src"]],["frame",["src"]],["iframe",["src"]],["link",["href"]],["object",["codebase","data"]]]),xn(he.URL,ai,[["a",["href","xlink:href"]]]),xn(he.ATTRIBUTE_NO_BINDING,ai,[["animate",["attributeName","values","to","from"]],["set",["to","attributeName"]],["animateMotion",["attributeName"]],["animateTransform",["attributeName"]]]),xn(he.ATTRIBUTE_NO_BINDING,void 0,[["unknown",["attributeName","values","to","from","sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]],["iframe",["sandbox","allow","allowFullscreen","referrerPolicy","csp","fetchPriority","credentialless"]]]),ao)}function xn(n,e,t){let r=e??sg;for(let[i,o]of t){let s=i.toLowerCase();for(let a of o){let l=a.toLowerCase(),c=ao[l]??=Sd(),d=c[r]??=Sd();d[s]=n}}}function ag(n,e,t){let i=vS()[e.toLowerCase()];if(!i)return he.NONE;let o=n.toLowerCase(),s;if(t){let a=i[t];a&&(s=a[o]??a[Hp])}if(s===void 0){let a=i[sg];a&&(s=a[o]??a[Hp])}return s??he.NONE}function Le(n){for(;Array.isArray(n);)n=n[xt];return n}function Gd(n,e){return Le(e[n])}function et(n,e){return Le(e[n.index])}function Na(n,e){return n.data[e]}function lg(n,e){return n[e]}function ut(n,e){let t=e[n];return dn(t)?t:t[xt]}function cg(n){return(n[T]&4)===4}function Ma(n){return(n[T]&128)===128}function dg(n){return dt(n[Ne])}function ft(n,e){return e==null?null:n[e]}function Wd(n){n[vr]=0}function qd(n){n[T]&1024||(n[T]|=1024,Ma(n)&&Sr(n))}function ug(n,e){for(;n>0;)e=e[kn],n--;return e}function bo(n){return!!(n[T]&9216||n[Je]?.dirty)}function Ta(n){n[It].changeDetectionScheduler?.notify(8),n[T]&64&&(n[T]|=1024),bo(n)&&Sr(n)}function Sr(n){n[It].changeDetectionScheduler?.notify(0);let e=cn(n);for(;e!==null&&!(e[T]&8192||(e[T]|=8192,!Ma(e)));)e=cn(e)}function ka(n,e){if(Er(n))throw new b(911,!1);n[ln]===null&&(n[ln]=[]),n[ln].push(e)}function fg(n,e){if(n[ln]===null)return;let t=n[ln].indexOf(e);t!==-1&&n[ln].splice(t,1)}function cn(n){let e=n[Ne];return dt(e)?e[Ne]:e}function Yd(n){return n[di]??=[]}function Kd(n){return n.cleanup??=[]}function hg(n,e,t,r){let i=Yd(e);i.push(t),n.firstCreatePass&&Kd(n).push(r,i.length-1)}var L={lFrame:wg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var wd=!1;function mg(){return L.lFrame.elementDepthCount}function pg(){L.lFrame.elementDepthCount++}function Zd(){L.lFrame.elementDepthCount--}function Aa(){return L.bindingsEnabled}function Xd(){return L.skipHydrationRootTNode!==null}function Qd(n){return L.skipHydrationRootTNode===n}function Jd(){L.skipHydrationRootTNode=null}function k(){return L.lFrame.lView}function ge(){return L.lFrame.tView}function Ra(n){return L.lFrame.contextLView=n,n[Se]}function Oa(n){return L.lFrame.contextLView=null,n}function Re(){let n=eu();for(;n!==null&&n.type===64;)n=n.parent;return n}function eu(){return L.lFrame.currentTNode}function gg(){let n=L.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function mi(n,e){let t=L.lFrame;t.currentTNode=n,t.isParent=e}function tu(){return L.lFrame.isParent}function nu(){L.lFrame.isParent=!1}function yg(){return L.lFrame.contextLView}function ru(){return wd}function co(n){let e=wd;return wd=n,e}function iu(){let n=L.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function vg(n){return L.lFrame.bindingIndex=n}function wr(){return L.lFrame.bindingIndex++}function ou(n){let e=L.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function bg(){return L.lFrame.inI18n}function _g(n,e){let t=L.lFrame;t.bindingIndex=t.bindingRootIndex=n,Fa(e)}function Dg(){return L.lFrame.currentDirectiveIndex}function Fa(n){L.lFrame.currentDirectiveIndex=n}function Eg(n){let e=L.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Pa(){return L.lFrame.currentQueryIndex}function _o(n){L.lFrame.currentQueryIndex=n}function bS(n){let e=n[I];return e.type===2?e.declTNode:e.type===1?n[je]:null}function su(n,e,t){if(t&4){let i=e,o=n;for(;i=i.parent,i===null&&!(t&1);)if(i=bS(o),i===null||(o=o[kn],i.type&10))break;if(i===null)return!1;e=i,n=o}let r=L.lFrame=Sg();return r.currentTNode=e,r.lView=n,!0}function La(n){let e=Sg(),t=n[I];L.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Sg(){let n=L.lFrame,e=n===null?null:n.child;return e===null?wg(n):e}function wg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Cg(){let n=L.lFrame;return L.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var au=Cg;function Va(){let n=Cg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function xg(n){return(L.lFrame.contextLView=ug(n,L.lFrame.contextLView))[Se]}function $t(){return L.lFrame.selectedIndex}function Rn(n){L.lFrame.selectedIndex=n}function pi(){let n=L.lFrame;return Na(n.tView,n.selectedIndex)}function gi(){L.lFrame.currentNamespace=ai}function Ba(){_S()}function _S(){L.lFrame.currentNamespace=null}function lu(){return L.lFrame.currentNamespace}var Ig=!0;function ja(){return Ig}function Do(n){Ig=n}function Cd(n,e=null,t=null,r){let i=Ng(n,e,t,r);return i.resolveInjectorInitializers(),i}function Ng(n,e=null,t=null,r,i=new Set){let o=[t||at,eg(n)],s;return new hr(o,e||ci(),s||null,i)}var q=class n{static THROW_IF_NOT_FOUND=cr;static NULL=new si;static create(e,t){if(Array.isArray(e))return Cd({name:""},t,e,"");{let r=e.name??"";return Cd({name:r},e.parent,e.providers,r)}}static \u0275prov=j({token:n,providedIn:"any",factory:()=>R(go)});static __NG_ELEMENT_ID__=-1},V=new g(""),Ae=class{static __NG_ELEMENT_ID__=DS;static __NG_ENV_ID__=e=>e},ha=class extends Ae{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Er(this._lView)}onDestroy(e){let t=this._lView;return ka(t,e),()=>fg(t,e)}};function DS(){return new ha(k())}var Mg=!1,Tg=new g(""),Cr=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new rr(!1);debugTaskTracker=u(Tg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new B(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=j({token:n,providedIn:"root",factory:()=>new n})}return n})(),xd=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,ig()&&(this.destroyRef=u(Ae,{optional:!0})??void 0,this.pendingTasks=u(Cr,{optional:!0})??void 0)}emit(e){let t=N(null);try{super.next(e)}finally{N(t)}}subscribe(e,t,r){let i=e,o=t||(()=>null),s=r;if(e&&typeof e=="object"){let l=e;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return e instanceof X&&e.add(a),a}wrapInTimeout(e){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},K=xd;function ma(...n){}function cu(n){let e,t;function r(){n=ma;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),r()})),()=>r()}function kg(n){return queueMicrotask(()=>n()),()=>{n=ma}}var du="isAngularZone",uo=du+"_ID",ES=0,M=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new K(!1);onMicrotaskEmpty=new K(!1);onStable=new K(!1);onError=new K(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Mg}=e;if(typeof Zone>"u")throw new b(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,CS(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(du)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new b(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new b(909,!1)}run(e,t,r){return this._inner.run(e,t,r)}runTask(e,t,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,e,SS,ma,ma);try{return o.runTask(s,t,r)}finally{o.cancelTask(s)}}runGuarded(e,t,r){return this._inner.runGuarded(e,t,r)}runOutsideAngular(e){return this._outer.run(e)}},SS={};function uu(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function wS(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){cu(()=>{n.callbackScheduled=!1,Id(n),n.isCheckStableRunning=!0,uu(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Id(n)}function CS(n){let e=()=>{wS(n)},t=ES++;n._inner=n._inner.fork({name:"angular",properties:{[du]:!0,[uo]:t,[uo+t]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(xS(l))return r.invokeTask(o,s,a,l);try{return Up(n),r.invokeTask(o,s,a,l)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),zp(n)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Up(n),r.invoke(o,s,a,l,c)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!IS(l)&&e(),zp(n)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Id(n),uu(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Id(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Up(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function zp(n){n._nesting--,uu(n)}var fo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new K;onMicrotaskEmpty=new K;onStable=new K;onError=new K;run(e,t,r){return e.apply(t,r)}runGuarded(e,t,r){return e.apply(t,r)}runOutsideAngular(e){return e()}runTask(e,t,r,i){return e.apply(t,r)}};function xS(n){return Ag(n,"__ignore_ng_zone__")}function IS(n){return Ag(n,"__scheduler_tick__")}function Ag(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var wt=class{_console=console;handleError(e){this._console.error("ERROR",e)}},fn=new g("",{factory:()=>{let n=u(M),e=u(Ee),t;return r=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw r}):(t??=e.get(wt),t.handleError(r))})}}}),Rg={provide:gr,useValue:()=>{let n=u(wt,{optional:!0})},multi:!0},NS=new g("",{factory:()=>{let n=u(V).defaultView;if(!n)return;let e=u(fn),t=o=>{e(o.reason),o.preventDefault()},r=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(Ae).onDestroy(()=>{n.removeEventListener("error",r),n.removeEventListener("unhandledrejection",t)})}});function fu(){return Vt([Jp(()=>{u(NS)})])}function H(n,e){let[t,r,i]=Gc(n,e?.equal),o=t,s=o[ce];return o.set=r,o.update=i,o.asReadonly=Ha.bind(o),o}function Ha(){let n=this[ce];if(n.readonlyFn===void 0){let e=()=>this();e[ce]=n,n.readonlyFn=e}return n.readonlyFn}var hn=new g("",{factory:()=>MS}),MS="ng";var Ua=new g(""),xr=new g("",{providedIn:"platform",factory:()=>"unknown"}),Eo=new g(""),mn=new g("",{factory:()=>u(V).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var yi=(()=>{class n{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=TS}return n})();function TS(){return new yi(k(),Re())}var Lt=class{},So=new g("",{factory:()=>!0});var hu=new g(""),za=(()=>{class n{static \u0275prov=j({token:n,providedIn:"root",factory:()=>new Nd})}return n})(),Nd=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,r=this.queues.get(t);r.has(e)&&(r.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(e)||r.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,r]of this.queues)t===null?e||=this.flushQueue(r):e||=t.run(()=>this.flushQueue(r));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let r of e)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},pa=class{[ce];constructor(e){this[ce]=e}destroy(){this[ce].destroy()}};function Me(n,e){let t=e?.injector??u(q),r=e?.manualCleanup!==!0?t.get(Ae):null,i,o=t.get(yi,null,{optional:!0}),s=t.get(Lt);return o!==null?(i=RS(o.view,s,n),r instanceof ha&&r._lView===o.view&&(r=null)):i=OS(n,t.get(za),s),i.injector=t,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new pa(i)}var Og=G(_({},Wc),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let n=co(!1);try{qc(this)}finally{co(n)}},cleanup(){if(!this.cleanupFns?.length)return;let n=N(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],N(n)}}}),kS=G(_({},Og),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(sn(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.scheduler.remove(this)}}),AS=G(_({},Og),{consumerMarkedDirty(){this.view[T]|=8192,Sr(this.view),this.notifier.notify(13)},destroy(){if(sn(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.view[In]?.delete(this)}});function RS(n,e,t){let r=Object.create(AS);return r.view=n,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=e,r.fn=Fg(r,t),n[In]??=new Set,n[In].add(r),r.consumerMarkedDirty(r),r}function OS(n,e,t){let r=Object.create(kS);return r.fn=Fg(r,n),r.scheduler=e,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Fg(n,e){return()=>{e(t=>(n.cleanupFns??=[]).push(t))}}function He(n){return typeof n=="function"&&n[ce]!==void 0}var wo=(()=>{class n{internalPendingTasks=u(Cr);scheduler=u(Lt);errorHandler=u(fn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();try{t().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=j({token:n,providedIn:"root",factory:()=>new n})}return n})();function fl(n){return{toString:n}.toString()}var J=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(J||{}),Qa=class{previousValue;currentValue;firstChange;constructor(e,t,r){this.previousValue=e,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function _y(n,e,t,r){e!==null?e.applyValueToInputSignal(e,r):n[t]=r}var Dy=null,Ue=(()=>{Dy=Pg;let n=()=>Pg;return n.ngInherit=!0,n})();function YS(){return Dy}function Pg(n){return n.type.prototype.ngOnChanges&&(n.setInput=ZS),KS}function KS(){let n=Ey(this),e=n?.current;if(e){let t=n.previous;if(t===Tn)n.previous=e;else for(let r in e)t[r]=e[r];n.current=null,this.ngOnChanges(e)}}function ZS(n,e,t,r,i){let o=this.declaredInputs[r],s=Ey(n)||XS(n,{previous:Tn,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Qa(c&&c.currentValue,t,l===Tn),_y(n,e,i,t)}var wu="__ngSimpleChanges__";function Ey(n){return Object.hasOwn(n,wu)&&n[wu]||null}function XS(n,e){return n[wu]=e}var Lg=[];var oe=function(n,e=null,t){for(let r=0;r<Lg.length;r++){let i=Lg[r];i(n,e,t)}};function QS(n,e,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=e.type.prototype;if(r){let s=YS()(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}i&&(t.preOrderHooks??=[]).push(0-n,i),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function Sy(n,e){for(let t=e.directiveStart,r=e.directiveEnd;t<r;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),l&&(n.viewHooks??=[]).push(-t,l),c&&((n.viewHooks??=[]).push(t,c),(n.viewCheckHooks??=[]).push(t,c)),d!=null&&(n.destroyHooks??=[]).push(t,d)}}function Ya(n,e,t){wy(n,e,3,t)}function Ka(n,e,t,r){(n[T]&3)===t&&wy(n,e,t,r)}function mu(n,e){let t=n[T];(t&3)===e&&(t&=16383,t+=1,n[T]=t)}function wy(n,e,t,r){let i=r!==void 0?n[vr]&65535:0,o=r??-1,s=e.length-1,a=0;for(let l=i;l<s;l++)if(typeof e[l+1]=="number"){if(a=e[l],r!=null&&a>=r)break}else e[l]<0&&(n[vr]+=65536),(a<o||o==-1)&&(JS(n,t,e,l),n[vr]=(n[vr]&4294901760)+l+2),l++}function Vg(n,e){oe(J.LifecycleHookStart,n,e);let t=N(null);try{e.call(n)}finally{N(t),oe(J.LifecycleHookEnd,n,e)}}function JS(n,e,t,r){let i=t[r]<0,o=t[r+1],s=i?-t[r]:t[r],a=n[s];i?n[T]>>14<n[vr]>>16&&(n[T]&3)===e&&(n[T]+=16384,Vg(a,o)):Vg(a,o)}var bi=-1,Nr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,r,i){this.factory=e,this.name=i,this.canSeeViewProviders=t,this.injectImpl=r}};function ew(n){return(n.flags&8)!==0}function tw(n){return(n.flags&16)!==0}function nw(n,e,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],s=t[r++],a=t[r++];n.setAttribute(e,s,a,o)}else{let o=i,s=t[++r];rw(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),r++}}return r}function Cy(n){return n===3||n===4||n===6}function rw(n){return n.charCodeAt(0)===64}function Di(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let r=0;r<e.length;r++){let i=e[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?Bg(n,t,i,null,e[++r]):Bg(n,t,i,null,null))}}return n}function Bg(n,e,t,r,i){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){i!==null&&(n[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),i!==null&&n.splice(o++,0,i)}function xy(n){return n!==bi}function Ja(n){return n&32767}function iw(n){return n>>16}function el(n,e){let t=iw(n),r=e;for(;t>0;)r=r[kn],t--;return r}var Cu=!0;function jg(n){let e=Cu;return Cu=n,e}var ow=256,Iy=ow-1,Ny=5,sw=0,Gt={};function aw(n,e,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:t.hasOwnProperty(pr)&&(r=t[pr]),r==null&&(r=t[pr]=sw++);let i=r&Iy,o=1<<i;e.data[n+(i>>Ny)]|=o}function tl(n,e){let t=My(n,e);if(t!==-1)return t;let r=e[I];r.firstCreatePass&&(n.injectorIndex=e.length,pu(r.data,n),pu(e,null),pu(r.blueprint,null));let i=sf(n,e),o=n.injectorIndex;if(xy(i)){let s=Ja(i),a=el(i,e),l=a[I].data;for(let c=0;c<8;c++)e[o+c]=a[s+c]|l[s+c]}return e[o+8]=i,o}function pu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function My(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function sf(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,r=null,i=e;for(;i!==null;){if(r=Oy(i),r===null)return bi;if(t++,i=i[kn],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return bi}function xu(n,e,t){aw(n,e,t)}function lw(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let r=t.length,i=0;for(;i<r;){let o=t[i];if(Cy(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof t[i]=="string";)i++;else{if(o===e)return t[i+1];i=i+2}}}return null}function Ty(n,e,t){if(t&8||n!==void 0)return n;Ea(e,"NodeInjector")}function ky(n,e,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let i=n[Bt],o=Qe(void 0);try{return i?i.get(e,r,t&8):Fd(e,r,t&8)}finally{Qe(o)}}return Ty(r,e,t)}function Ay(n,e,t,r=0,i){if(n!==null){if(e[T]&2048&&!(r&2)){let s=fw(n,e,t,r,Gt);if(s!==Gt)return s}let o=Ry(n,e,t,r,Gt);if(o!==Gt)return o}return ky(e,t,r,i)}function Ry(n,e,t,r,i){let o=dw(t);if(typeof o=="function"){if(!su(e,n,r))return r&1?Ty(i,t,r):ky(e,t,r,i);try{let s;if(s=o(r),s==null&&!(r&8))Ea(t);else return s}finally{au()}}else if(typeof o=="number"){let s=null,a=My(n,e),l=bi,c=r&1?e[Ge][je]:null;for((a===-1||r&4)&&(l=a===-1?sf(n,e):e[a+8],l===bi||!Ug(r,!1)?a=-1:(s=e[I],a=Ja(l),e=el(l,e)));a!==-1;){let d=e[I];if(Hg(o,a,d.data)){let f=cw(a,e,t,s,r,c);if(f!==Gt)return f}l=e[a+8],l!==bi&&Ug(r,e[I].data[a+8]===c)&&Hg(o,a,e)?(s=d,a=Ja(l),e=el(l,e)):a=-1}}return i}function cw(n,e,t,r,i,o){let s=e[I],a=s.data[n+8],l=r==null?un(a)&&Cu:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Za(a,s,t,l,c);return d!==null?No(e,s,d,a,i):Gt}function Za(n,e,t,r,i){let o=n.providerIndexes,s=e.data,a=o&1048575,l=n.directiveStart,c=n.directiveEnd,d=o>>20,f=r?a:a+d,m=i?a+d:c;for(let h=f;h<m;h++){let p=s[h];if(h<l&&t===p||h>=l&&p.type===t)return h}if(i){let h=s[l];if(h&&zt(h)&&h.type===t)return l}return null}function No(n,e,t,r,i){let o=n[t],s=e.data;if(o instanceof Nr){let a=o;if(a.resolving)throw Od("");let l=jg(a.canSeeViewProviders);a.resolving=!0;let c=s[t].type||s[t],d,f=a.injectImpl?Qe(a.injectImpl):null,m=su(n,r,0);try{o=n[t]=a.factory(void 0,i,s,n,r),e.firstCreatePass&&t>=r.directiveStart&&QS(t,s[t],e)}finally{f!==null&&Qe(f),jg(l),a.resolving=!1,au()}}return o}function dw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(pr)?n[pr]:void 0;return typeof e=="number"?e>=0?e&Iy:uw:e}function Hg(n,e,t){let r=1<<n;return!!(t[e+(n>>Ny)]&r)}function Ug(n,e){return!(n&2)&&!(n&1&&e)}var On=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,r){return Ay(this._tNode,this._lView,e,dr(r),t)}};function uw(){return new On(Re(),k())}function gn(n){return fl(()=>{let e=n.prototype.constructor,t=e[lo]||Iu(e),r=Object.prototype,i=Object.getPrototypeOf(n.prototype).constructor;for(;i&&i!==r;){let o=i[lo]||Iu(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function Iu(n){return Md(n)?()=>{let e=Iu(Pe(n));return e&&e()}:ur(n)}function fw(n,e,t,r,i){let o=n,s=e;for(;o!==null&&s!==null&&s[T]&2048&&!hi(s);){let a=Ry(o,s,t,r|2,Gt);if(a!==Gt)return a;let l=o.parent;if(!l){let c=s[Ud];if(c){let d=c.get(t,Gt,r&-5);if(d!==Gt)return d}l=Oy(s),s=s[kn]}o=l}return i}function Oy(n){let e=n[I],t=e.type;return t===2?e.declTNode:t===1?n[je]:null}function af(n){return lw(Re(),n)}function O(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function hw(){return xi(Re(),k())}function xi(n,e){return new A(et(n,e))}var A=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=hw}return n})();function Fy(n){return n instanceof A?n.nativeElement:n}function mw(){return this._results[Symbol.iterator]()}var Mr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let r=Zp(e);(this._changesDetected=!Kp(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=mw};function Py(n){return(n.flags&128)===128}var lf=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(lf||{}),Ly=new Map,pw=0;function gw(){return pw++}function yw(n){Ly.set(n[Ht],n)}function Nu(n){Ly.delete(n[Ht])}var zg="__ngContext__";function Ei(n,e){dn(e)?(n[zg]=e[Ht],yw(e)):n[zg]=e}function Vy(n){return jy(n[ui])}function By(n){return jy(n[ct])}function jy(n){for(;n!==null&&!dt(n);)n=n[ct];return n}var Mu;function cf(n){Mu=n}function df(){if(Mu!==void 0)return Mu;if(typeof document<"u")return document;throw new b(210,!1)}var Hy="r";var Uy="di";var zy=!1,$y=new g("",{factory:()=>zy});var $g=new WeakMap;function vw(n,e){if(n==null||typeof n!="object")return;let t=$g.get(n);t||(t=new WeakSet,$g.set(n,t)),t.add(e)}var bw=(n,e,t,r)=>{};function _w(n,e,t,r){bw(n,e,t,r)}function hl(n){return(n.flags&32)===32}var Dw=()=>null;function Gy(n,e,t=!1){return Dw(n,e,t)}function Wy(n,e){let t=n.contentQueries;if(t!==null){let r=N(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],s=t[i+1];if(s!==-1){let a=n.data[s];_o(o),a.contentQueries(2,e[s],s)}}}finally{N(r)}}}function Tu(n,e,t){_o(0);let r=N(null);try{e(n,t)}finally{N(r)}}function uf(n,e,t){if($d(e)){let r=N(null);try{let i=e.directiveStart,o=e.directiveEnd;for(let s=i;s<o;s++){let a=n.data[s];if(a.contentQueries){let l=t[s];a.contentQueries(1,l,s)}}}finally{N(r)}}}var Tt=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(Tt||{});var Ew={"http://www.w3.org/2000/svg":ai,"http://www.w3.org/1998/Math/MathML":Ia},$a;function Sw(){if($a===void 0&&($a=null,Mn.trustedTypes))try{$a=Mn.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return $a}function ml(n){return Sw()?.createHTML(n)||n}var Ga;function ww(){if(Ga===void 0&&(Ga=null,Mn.trustedTypes))try{Ga=Mn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Ga}function Gg(n){return ww()?.createHTML(n)||n}var pn=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ga})`}},ku=class extends pn{getTypeName(){return"HTML"}},Au=class extends pn{getTypeName(){return"Style"}},Ru=class extends pn{getTypeName(){return"Script"}},Ou=class extends pn{getTypeName(){return"URL"}},Fu=class extends pn{getTypeName(){return"ResourceURL"}};function Yt(n){return n instanceof pn?n.changingThisBreaksApplicationSecurity:n}function Ln(n,e){let t=qy(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${ga})`)}return t===e}function qy(n){return n instanceof pn&&n.getTypeName()||null}function ff(n){return new ku(n)}function hf(n){return new Au(n)}function mf(n){return new Ru(n)}function pf(n){return new Ou(n)}function gf(n){return new Fu(n)}function Cw(n){let e=new Lu(n);return xw()?new Pu(e):e}var Pu=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(ml(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch{return null}}},Lu=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=ml(e),t}};function xw(){try{return!!new window.DOMParser().parseFromString(ml(""),"text/html")}catch{return!1}}var Iw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function pl(n){return n=String(n),n.match(Iw)?n:"unsafe:"+n}function yn(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function Fo(...n){let e={};for(let t of n)for(let r in t)t.hasOwnProperty(r)&&(e[r]=!0);return e}var Yy=yn("area,br,col,hr,img,wbr"),Ky=yn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Zy=yn("rp,rt"),Nw=Fo(Zy,Ky),Mw=Fo(Ky,yn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Tw=Fo(Zy,yn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Wg=Fo(Yy,Mw,Tw,Nw),Xy=yn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),kw=yn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Aw=yn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Rw=Fo(Xy,kw,Aw),Ow=yn("script,style,template"),Vu=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,r=!0,i=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){i.push(t),t=Lw(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=Pw(t);if(o){t=o;break}t=i.pop()}}return this.buf.join("")}startElement(e){let t=qg(e).toLowerCase();if(!Wg.hasOwnProperty(t))return this.sanitizedSomething=!0,!Ow.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let r=e.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!Rw.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;Xy[a]&&(l=pl(l)),this.buf.push(" ",s,'="',Yg(l),'"')}return this.buf.push(">"),!0}endElement(e){let t=qg(e).toLowerCase();Wg.hasOwnProperty(t)&&!Yy.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(Yg(e))}};function Fw(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Pw(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw Qy(e);return e}function Lw(n){let e=n.firstChild;if(e&&Fw(n,e))throw Qy(e);return e}function qg(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function Qy(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var Vw=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Bw=/([^\#-~ |!])/g;function Yg(n){return n.replace(/&/g,"&amp;").replace(Vw,function(e){let t=e.charCodeAt(0),r=e.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(Bw,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Wa;function gl(n,e){let t=null;try{Wa=Wa||Cw(n);let r=e?String(e):"";t=Wa.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=t.innerHTML,t=Wa.getInertBodyElement(r)}while(r!==o);let a=new Vu().sanitizeChildren(Kg(t)||t);return ml(a)}finally{if(t){let r=Kg(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function Kg(n){return"content"in n&&jw(n)?n.content:null}function jw(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var Hw=/^>|^->|<!--|-->|--!>|<!-$/g,Uw=/(<|>)/g,zw="\u200B$1\u200B";function $w(n){return n.replace(Hw,e=>e.replace(Uw,zw))}function Gw(n,e){return n.createText(e)}function Ww(n,e,t){n.setValue(e,t)}function qw(n,e){return n.createComment($w(e))}function Jy(n,e,t){return n.createElement(e,t)}function Ir(n,e,t,r,i){n.insertBefore(e,t,r,i)}function ev(n,e,t){n.appendChild(e,t)}function Zg(n,e,t,r,i){r!==null?Ir(n,e,t,r,i):ev(n,e,t)}function tv(n,e,t,r){n.removeChild(null,e,t,r)}function Yw(n,e,t){n.setAttribute(e,"style",t)}function Kw(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function nv(n,e,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&nw(n,e,r),i!==null&&Kw(n,e,i),o!==null&&Yw(n,e,o)}function Zw(n,e=!0){if(n[0]!=":")return[null,n];let t=n.indexOf(":",1);if(t===-1){if(e)throw new Error(`Unsupported format "${n}" expecting ":namespace:name"`);return[null,n]}return[n.slice(1,t),n.slice(t+1)]}function Po(n,e,t){if(e!==void 0&&t!==void 0&&Qw(e,t)!==he.HTML)return n;let r=Xw();return r?Gg(r.sanitize(he.HTML,n)||""):Ln(n,"HTML")?Gg(Yt(n)):gl(df(),Da(n))}function Xw(){let n=k();return n&&n[It].sanitizer}function Qw(n,e){let[t,r]=Jw(n);return ag(r,e,t)}function Jw(n){n=n.toLowerCase();let e=Zw(n,!1);if(e[0])return e;let r=$t()===-1?null:pi(),i=r?.namespace;if(n==="#host"&&r?.type===2){let o=et(r,k());if(o.tagName&&(n=o.tagName.toLowerCase()),i==null){let s=o.namespaceURI;i=s&&Ew[s]}}return[i,n]}function eC(n,e,t){let r=n.length;for(;;){let i=n.indexOf(e,t);if(i===-1)return i;if(i===0||n.charCodeAt(i-1)<=32){let o=e.length;if(i+o===r||n.charCodeAt(i+o)<=32)return i}t=i+1}}var rv="ng-template";function tC(n,e,t,r){let i=0;if(r){for(;i<e.length&&typeof e[i]=="string";i+=2)if(e[i]==="class"&&eC(e[i+1].toLowerCase(),t,0)!==-1)return!0}else if(yf(n))return!1;if(i=e.indexOf(1,i),i>-1){let o;for(;++i<e.length&&typeof(o=e[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function yf(n){return n.type===4&&n.value!==rv}function nC(n,e,t){let r=n.type===4&&!t?rv:n.value;return e===r}function rC(n,e,t){let r=4,i=n.attrs,o=i!==null?sC(i):0,s=!1;for(let a=0;a<e.length;a++){let l=e[a];if(typeof l=="number"){if(!s&&!Nt(r)&&!Nt(l))return!1;if(s&&Nt(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!nC(n,l,t)||l===""&&e.length===1){if(Nt(r))return!1;s=!0}}else if(r&8){if(i===null||!tC(n,i,l,t)){if(Nt(r))return!1;s=!0}}else{let c=e[++a],d=iC(l,i,yf(n),t);if(d===-1){if(Nt(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(Nt(r))return!1;s=!0}}}}return Nt(r)||s}function Nt(n){return(n&1)===0}function iC(n,e,t,r){if(e===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<e.length;){let s=e[i];if(s===n)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++i];for(;typeof a=="string";)a=e[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return aC(e,n)}function iv(n,e,t=!1){for(let r=0;r<e.length;r++)if(rC(n,e[r],t))return!0;return!1}function oC(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function sC(n){for(let e=0;e<n.length;e++){let t=n[e];if(Cy(t))return e}return n.length}function aC(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let r=n[t];if(typeof r=="number")return-1;if(r===e)return t;t++}return-1}function lC(n,e){e:for(let t=0;t<e.length;t++){let r=e[t];if(n.length===r.length){for(let i=0;i<n.length;i++)if(n[i]!==r[i])continue e;return!0}}return!1}function Xg(n,e){return n?":not("+e.trim()+")":e}function cC(n){let e=n[0],t=1,r=2,i="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(r&2){let a=n[++t];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!Nt(s)&&(e+=Xg(o,i),i=""),r=s,o=o||!Nt(r);t++}return i!==""&&(e+=Xg(o,i)),e}function dC(n){return n.map(cC).join(",")}function uC(n){let e=[],t=[],r=1,i=2;for(;r<n.length;){let o=n[r];if(typeof o=="string")i===2?o!==""&&e.push(o,n[++r]):i===8&&t.push(o);else{if(!Nt(i))break;i=o}r++}return t.length&&e.push(1,...t),e}var mt={},Wt=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Wt||{}),fC;function vf(n,e){return fC(n,e)}var cV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Bu=new WeakMap;function ov(n){return n?n[kn]??n:null}var Co=new WeakSet;function hC(n,e,t){let r=Bu.get(n);if(!r||r.length===0)return;let i=e.parentNode,o=e.previousSibling,s=ov(t);for(let a=r.length-1;a>=0;a--){let{el:l,declarationView:c}=r[a],d=l.parentNode;l===e?(r.splice(a,1),Co.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(s===null||c===null||s===c)&&(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function mC(n,e,t){let r=ov(t),i=Bu.get(n);i?i.some(o=>o.el===e)||i.push({el:e,declarationView:r}):Bu.set(n,[{el:e,declarationView:r}])}var Fn=new Set,yl=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(yl||{}),Kt=new g(""),Qg=new Set;function vn(n){Qg.has(n)||(Qg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var vl=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=j({token:n,providedIn:"root",factory:()=>new n})}return n})(),bf=[0,1,2,3],_f=(()=>{class n{ngZone=u(M);scheduler=u(Lt);errorHandler=u(wt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Kt,{optional:!0})}execute(){let t=this.sequences.size>0;t&&oe(J.AfterRenderHooksStart),this.executing=!0;for(let r of bf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&oe(J.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[br]??=[]).push(t),Sr(r),r[T]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(yl.AFTER_NEXT_RENDER,t):t()}static \u0275prov=j({token:n,providedIn:"root",factory:()=>new n})}return n})(),Mo=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,r,i,o,s=null){this.impl=e,this.hooks=t,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[br];e&&(this.view[br]=e.filter(t=>t!==this))}};function Rr(n,e){let t=e?.injector??u(q);return vn("NgAfterNextRender"),gC(n,t,e,!0)}function pC(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function gC(n,e,t,r){let i=e.get(vl);i.impl??=e.get(_f);let o=e.get(Kt,null,{optional:!0}),s=t?.manualCleanup!==!0?e.get(Ae):null,a=e.get(yi,null,{optional:!0}),l=new Mo(i.impl,pC(n),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var Df=new g("",{factory:()=>{let n=u(Ee),e=new Set;return n.onDestroy(()=>e.clear()),{queue:e,isScheduled:!1,scheduler:null,injector:n}}});function sv(n,e,t){let r=n.get(Df);if(Array.isArray(e))for(let i of e)r.queue.add(i),t?.detachedLeaveAnimationFns?.push(i);else r.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);r.scheduler&&r.scheduler(n)}function yC(n,e){let t=n.get(Df);if(Array.isArray(e))for(let r of e)t.queue.delete(r);else t.queue.delete(e)}function vC(n,e){let t=n.get(Df);if(e.detachedLeaveAnimationFns){for(let r of e.detachedLeaveAnimationFns)t.queue.delete(r);e.detachedLeaveAnimationFns=void 0}}function bC(n,e){for(let[t,r]of e)sv(n,r.animateFns)}function Jg(n,e,t,r){let i=n?.[Ut]?.enter;e!==null&&i&&i.has(t.index)&&bC(r,i)}function ey(n,e,t,r){try{t.get(go)}catch{return r(!1)}let i=n?.[Ut];i?.enter?.has(e.index)&&yC(t,i.enter.get(e.index).animateFns);let o=_C(n,e,i);if(o.size===0){let s=!1;if(n){let a=[];bl(n,e,a),s=a.length>0}if(!s)return r(!1)}n&&Fn.add(n[Ht]),sv(t,()=>DC(n,e,i||void 0,o,r),i||void 0)}function _C(n,e,t){let r=new Map,i=t?.leave;if(i&&i.has(e.index)&&r.set(e.index,i.get(e.index)),n&&i)for(let[o,s]of i){if(r.has(o))continue;let l=n[I].data[o].parent;for(;l;){if(l===e){r.set(o,s);break}l=l.parent}}return r}function DC(n,e,t,r,i){let o=[];if(t&&t.leave)for(let[s]of r){if(!t.leave.has(s))continue;let a=t.leave.get(s);for(let l of a.animateFns){let{promise:c}=l();o.push(c)}t.detachedLeaveAnimationFns=void 0}if(n&&bl(n,e,o),o.length>0){let s=t||n?.[Ut];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),SC(n,s.running,i)}else Promise.allSettled(o).then(()=>{n&&Fn.delete(n[Ht]),i(!0)})}else n&&Fn.delete(n[Ht]),i(!1)}function bl(n,e,t){if(e.type&12){let i=n[e.index];if(dt(i))for(let o=pe;o<i.length;o++){let s=i[o];s[I].type===2&&EC(s,t)}}let r=e.child;for(;r;)bl(n,r,t),r=r.next}function EC(n,e){let t=n[Ut];if(t&&t.leave)for(let i of t.leave.values())for(let o of i.animateFns){let{promise:s}=o();e.push(s)}let r=n[I].firstChild;for(;r;)bl(n,r,e),r=r.next}function SC(n,e,t){e.then(()=>{n[Ut]?.running===e&&(n[Ut].running=void 0,Fn.delete(n[Ht])),t(!0)})}function vi(n,e,t,r,i,o,s,a){if(i!=null){let l,c=!1;dt(i)?l=i:dn(i)&&(c=!0,i=i[xt]);let d=Le(i);n===0&&r!==null?(Jg(a,r,o,t),s==null?ev(e,r,d):Ir(e,r,d,s||null,!0)):n===1&&r!==null?(Jg(a,r,o,t),Ir(e,r,d,s||null,!0),hC(o,d,a)):n===2?(a?.[Ut]?.leave?.has(o.index)&&mC(o,d,a),Co.delete(d),ey(a,o,t,f=>{if(Co.has(d)){Co.delete(d);return}tv(e,d,c,f)})):n===3&&(Co.delete(d),ey(a,o,t,()=>{e.destroyNode(d)})),l!=null&&OC(e,n,t,l,o,r,s)}}function wC(n,e){av(n,e),e[xt]=null,e[je]=null}function CC(n,e,t,r,i,o){r[xt]=i,r[je]=e,Dl(n,r,t,1,i,o)}function av(n,e){e[It].changeDetectionScheduler?.notify(9),Dl(n,e,e[le],2,null,null)}function xC(n){let e=n[ui];if(!e)return gu(n[I],n);for(;e;){let t=null;if(dn(e))t=e[ui];else{let r=e[pe];r&&(t=r)}if(!t){for(;e&&!e[ct]&&e!==n;)dn(e)&&gu(e[I],e),e=e[Ne];e===null&&(e=n),dn(e)&&gu(e[I],e),t=e&&e[ct]}e=t}}function Ef(n,e){let t=n[Dr],r=t.indexOf(e);t.splice(r,1)}function _l(n,e){if(Er(e))return;let t=e[le];t.destroyNode&&Dl(n,e,t,3,null,null),xC(e)}function gu(n,e){if(Er(e))return;let t=N(null);try{e[T]&=-129,e[T]|=256,e[Je]&&sn(e[Je]),NC(n,e),IC(n,e),e[I].type===1&&e[le].destroy();let r=e[An];if(r!==null&&dt(e[Ne])){r!==e[Ne]&&Ef(r,e);let i=e[jt];i!==null&&i.detachView(n)}Nu(e)}finally{N(t)}}function IC(n,e){let t=n.cleanup,r=e[di];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[t[s+1]];t[s].call(a)}r!==null&&(e[di]=null);let i=e[ln];if(i!==null){e[ln]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=e[In];if(o!==null){e[In]=null;for(let s of o)s.destroy()}}function NC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=e[t[r]];if(!(i instanceof Nr)){let o=t[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];oe(J.LifecycleHookStart,a,l);try{l.call(a)}finally{oe(J.LifecycleHookEnd,a,l)}}else{oe(J.LifecycleHookStart,i,o);try{o.call(i)}finally{oe(J.LifecycleHookEnd,i,o)}}}}}function lv(n,e,t){return MC(n,e.parent,t)}function MC(n,e,t){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return t[xt];if(un(r)){let{encapsulation:i}=n.data[r.directiveStart+r.componentOffset];if(i===Tt.None||i===Tt.Emulated)return null}return et(r,t)}function cv(n,e,t){return kC(n,e,t)}function TC(n,e,t){return n.type&40?et(n,t):null}var kC=TC,ty;function Sf(n,e,t,r){let i=lv(n,r,e),o=e[le],s=r.parent||e[je],a=cv(s,r,e);if(i!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)Zg(o,i,t[l],a,!1);else Zg(o,i,t,a,!1);ty!==void 0&&ty(o,r,e,t,i)}function xo(n,e){if(e!==null){let t=e.type;if(t&3)return et(e,n);if(t&4)return ju(-1,n[e.index]);if(t&8){let r=e.child;if(r!==null)return xo(n,r);{let i=n[e.index];return dt(i)?ju(-1,i):Le(i)}}else{if(t&128)return xo(n,e.next);if(t&32)return vf(e,n)()||Le(n[e.index]);{let r=dv(n,e);if(r!==null){if(Array.isArray(r))return r[0];let i=cn(n[Ge]);return xo(i,r)}else return xo(n,e.next)}}}return null}function dv(n,e){if(e!==null){let r=n[Ge][je],i=e.projection;return r.projection[i]}return null}function ju(n,e){let t=pe+n+1;if(t<e.length){let r=e[t],i=r[I].firstChild;if(i!==null)return xo(r,i)}return e[_r]}function wf(n,e,t,r,i,o,s){for(;t!=null;){let a=r[Bt];if(t.type===128){t=t.next;continue}let l=r[t.index],c=t.type;if(s&&e===0&&(l&&Ei(Le(l),r),t.flags|=2),!hl(t))if(c&8)wf(n,e,t.child,r,i,o,!1),vi(e,n,a,i,l,t,o,r);else if(c&32){let d=vf(t,r),f;for(;f=d();)vi(e,n,a,i,f,t,o,r);vi(e,n,a,i,l,t,o,r)}else c&16?uv(n,e,r,t,i,o):vi(e,n,a,i,l,t,o,r);t=s?t.projectionNext:t.next}}function Dl(n,e,t,r,i,o){n.type===3?AC(t,r,e,i,o):wf(t,r,n.firstChild,e,i,o,!1)}function AC(n,e,t,r,i){let s=t[I].firstChild,a=s.next,l=Le(t[s.index]),c=Le(t[a.index]),d=a.index+1,f=t[d];if(e===1||e===0)r!==null&&(f&&f.hasChildNodes()?Ir(n,r,f,i,!0):(Ir(n,r,l,i,!0),Ir(n,r,c,i,!0)));else if(e===2){if(f||(f=document.createDocumentFragment(),t[d]=f),l&&l.parentNode===f)return;let m=l;for(;m!==null;){let h=m.nextSibling;if(f.appendChild(m),m===c)break;m=h}}}function RC(n,e,t){let r=e[le],i=lv(n,t,e),o=t.parent||e[je],s=cv(o,t,e);uv(r,0,e,t,i,s)}function uv(n,e,t,r,i,o){let s=t[Ge],l=s[je].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];vi(e,n,t[Bt],i,d,r,o,t)}else{let c=l,d=s[Ne];Py(r)&&(c.flags|=128),wf(n,e,c,d,i,o,!0)}}function OC(n,e,t,r,i,o,s){let a=r[_r],l=Le(r);if(a!==l&&vi(e,n,t,o,a,i,s),(r[T]&4)===0)for(let c=pe;c<r.length;c++){let d=r[c];Dl(d[I],d,n,e,o,a)}}function FC(n,e,t,r,i){if(e)i?n.addClass(t,r):n.removeClass(t,r);else{let o=r.indexOf("-")===-1?void 0:Wt.DashCase;i==null?n.removeStyle(t,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=Wt.Important),n.setStyle(t,r,i,o))}}function Cf(n,e,t,r,i,o,s,a,l,c,d){let f=_e+r,m=f+i,h=PC(f,m),p=typeof c=="function"?c():c;return h[I]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1,ssrId:d}}function PC(n,e){let t=[];for(let r=0;r<e;r++)t.push(r<n?null:mt);return t}function LC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Cf(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function xf(n,e,t,r,i,o,s,a,l,c,d){let f=e.blueprint.slice();return f[xt]=i,f[T]=r|4|128|8|64|1024,(c!==null||n&&n[T]&2048)&&(f[T]|=2048),Wd(f),f[Ne]=f[kn]=n,f[Se]=t,f[It]=s||n&&n[It],f[le]=a||n&&n[le],f[Bt]=l||n&&n[Bt]||null,f[je]=o,f[Ht]=gw(),f[yr]=d,f[Ud]=c,f[Ge]=e.type==2?n[Ge]:f,f}function VC(n,e,t){let r=et(e,n),i=LC(t),o=n[It].rendererFactory,s=If(n,xf(n,i,null,fv(t),r,e,null,o.createRenderer(r,t),null,null,null));return n[e.index]=s}function fv(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function hv(n,e,t,r){if(t===0)return-1;let i=e.length;for(let o=0;o<t;o++)e.push(r),n.blueprint.push(r),n.data.push(null);return i}function If(n,e){return n[ui]?n[Hd][ct]=e:n[ui]=e,n[Hd]=e,e}function S(n=1){mv(ge(),k(),$t()+n,!1)}function mv(n,e,t,r){if(!r)if((e[T]&3)===3){let o=n.preOrderCheckHooks;o!==null&&Ya(e,o,t)}else{let o=n.preOrderHooks;o!==null&&Ka(e,o,0,t)}Rn(t)}var El=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(El||{});function Tr(n,e,t,r){let i=N(null);try{let[o,s,a]=n.inputs[t],l=null;(s&El.SignalBased)!==0&&(l=e[o][ce]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(e,r)),n.setInput!==null?n.setInput(e,l,r,t,o):_y(e,l,o,r)}finally{N(i)}}function pv(n,e,t,r,i){let o=$t(),s=r&2;try{Rn(-1),s&&e.length>_e&&mv(n,e,_e,!1);let a=s?J.TemplateUpdateStart:J.TemplateCreateStart;oe(a,i,t),t(r,i)}finally{Rn(o);let a=s?J.TemplateUpdateEnd:J.TemplateCreateEnd;oe(a,i,t)}}function Sl(n,e,t){GC(n,e,t),(t.flags&64)===64&&WC(n,e,t)}function Lo(n,e,t=et){let r=e.localNames;if(r!==null){let i=e.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?t(e,n):n[s];n[i++]=a}}}function BC(n,e,t,r){let o=r.get($y,zy)||t===Tt.ShadowDom||t===Tt.ExperimentalIsolatedShadowDom,s=n.selectRootElement(e,o);return jC(s),s}function jC(n){HC(n)}var HC=()=>null;function UC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function zC(n,e,t,r,i,o){let s=e[I];if(kf(n,s,e,t,r)){un(n)&&$C(e,n.index);return}n.type&3&&(t=UC(t)),gv(n,e,t,r,i,o)}function gv(n,e,t,r,i,o){if(n.type&3){let s=et(n,e);r=o!=null?o(r,n.value||"",t):r,i.setProperty(s,t,r)}else n.type&12}function $C(n,e){let t=ut(e,n);t[T]&16||(t[T]|=64)}function GC(n,e,t){let r=t.directiveStart,i=t.directiveEnd;un(t)&&VC(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||tl(t,e);let o=t.initialInputs;for(let s=r;s<i;s++){let a=n.data[s],l=No(e,n,s,t);if(Ei(l,e),o!==null&&ZC(e,s-r,l,a,t,o),zt(a)){let c=ut(t.index,e);c[Se]=No(e,n,s,t)}}}function WC(n,e,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,s=Dg();try{Rn(o);for(let a=r;a<i;a++){let l=n.data[a],c=e[a];Fa(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&qC(l,c)}}finally{Rn(-1),Fa(s)}}function qC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Nf(n,e){let t=n.directiveRegistry,r=null;if(t)for(let i=0;i<t.length;i++){let o=t[i];iv(e,o.selectors,!1)&&(r??=[],zt(o)?r.unshift(o):r.push(o))}return r}function YC(n,e,t,r,i,o){let s=et(n,e);KC(e[le],s,o,n.value,t,r,i)}function KC(n,e,t,r,i,o,s){if(o==null)s?.(o,r||"",i),n.removeAttribute(e,i,t);else{let a=s==null?Da(o):s(o,r||"",i);n.setAttribute(e,i,a,t)}}function ZC(n,e,t,r,i,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Tr(r,t,l,c)}}function Mf(n,e,t,r,i){let o=_e+t,s=e[I],a=i(s,e,n,r,t);e[o]=a,mi(n,!0);let l=n.type===2;return l?(nv(e[le],a,n),(mg()===0||fi(n))&&Ei(a,e),pg()):Ei(a,e),ja()&&(!l||!hl(n))&&Sf(s,e,a,n),n}function Tf(n){let e=n;return tu()?nu():(e=e.parent,mi(e,!1)),e}function XC(n,e){let t=n[Bt];if(!t)return;let r;try{r=t.get(fn,null)}catch{r=null}r?.(e)}function kf(n,e,t,r,i){let o=n.inputs?.[r],s=n.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=e.data[c];Tr(f,t[c],d,i),a=!0}if(o)for(let l of o){let c=t[l],d=e.data[l];Tr(d,c,r,i),a=!0}return a}function QC(n,e,t,r,i,o){let s=null,a=null,l=null,c=!1,d=n.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,a,l]=d,a!==null&&l!==null&&n.hostDirectiveInputs?.hasOwnProperty(i)){let f=n.hostDirectiveInputs[i];for(let m=0;m<f.length;m+=2){let h=f[m];if(h>=a&&h<=l){let p=e.data[h],D=f[m+1];Tr(p,t[h],D,o),c=!0}else if(h>l)break}}return s!==null&&r.inputs.hasOwnProperty(i)&&(Tr(r,t[s],i,o),c=!0),c}function JC(n,e){let t=ut(e,n),r=t[I];ex(r,t);let i=t[xt];i!==null&&t[yr]===null&&(t[yr]=Gy(i,t[Bt])),oe(J.ComponentStart);try{Af(r,t,t[Se])}finally{oe(J.ComponentEnd,t[Se])}}function ex(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Af(n,e,t){La(e);try{let r=n.viewQuery;r!==null&&Tu(1,r,t);let i=n.template;i!==null&&pv(n,e,i,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[jt]?.finishViewCreation(n),n.staticContentQueries&&Wy(n,e),n.staticViewQueries&&Tu(2,n.viewQuery,t);let o=n.components;o!==null&&tx(e,o)}catch(r){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),r}finally{e[T]&=-5,Va()}}function tx(n,e){for(let t=0;t<e.length;t++)JC(n,e[t])}function Vo(n,e,t,r){let i=N(null);try{let o=e.tView,a=n[T]&4096?4096:16,l=xf(n,o,t,a,null,e,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=n[e.index];l[An]=c;let d=n[jt];return d!==null&&(l[jt]=d.createEmbeddedView(o)),Af(o,l,t),l}finally{N(i)}}function Si(n,e){return!e||e.firstChild===null||Py(n)}function To(n,e,t,r,i=!1){if(n.type===3){let o=n.firstChild,s=o.next,a=Le(e[o.index]),l=Le(e[s.index]),c=a;for(;c!==null&&(r.push(c),c!==l);)c=c.nextSibling;return r}for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=e[t.index];if(o!==null)if(dt(o)){let a=o[_r];a!==o[xt]&&r.push(Le(o)),o[T]&4||yv(o,r),r.push(a)}else r.push(Le(o));let s=t.type;if(s&8)To(n,e,t.child,r);else if(s&32){let a=vf(t,e),l;for(;l=a();)r.push(l)}else if(s&16){let a=dv(e,t);if(Array.isArray(a))r.push(...a);else{let l=cn(e[Ge]);To(l[I],l,a,r,!0)}}t=i?t.projectionNext:t.next}return r}function yv(n,e){for(let t=pe;t<n.length;t++){let r=n[t],i=r[I].firstChild;i!==null&&To(r[I],r,i,e)}}function vv(n){if(n[br]!==null){for(let e of n[br])e.impl.addSequence(e);n[br].length=0}}var bv=[];function nx(n){return n[Je]??rx(n)}function rx(n){let e=bv.pop()??Object.create(ox);return e.lView=n,e}function ix(n){n.lView[Je]!==n&&(n.lView=null,bv.push(n))}var ox=G(_({},rn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Sr(n.lView)},consumerOnSignalRead(){this.lView[Je]=this}});function sx(n){let e=n[Je]??Object.create(ax);return e.lView=n,e}var ax=G(_({},rn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=cn(n.lView);for(;e&&!_v(e[I]);)e=cn(e);e&&qd(e)},consumerOnSignalRead(){this.lView[Je]=this}});function _v(n){return n.type!==2}function Dv(n){if(n[In]===null)return;let e=!0;for(;e;){let t=!1;for(let r of n[In])r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));e=t&&!!(n[T]&8192)}}var lx=100;function Ev(n,e=0){let r=n[It].rendererFactory,i=!1;i||r.begin?.();try{cx(n,e)}finally{i||r.end?.()}}function cx(n,e){let t=ru();try{co(!0),Hu(n,e);let r=0;for(;bo(n);){if(r===lx)throw new b(103,!1);r++,Hu(n,1)}}finally{co(t)}}function dx(n,e,t,r){if(Er(e))return;let i=e[T],o=!1,s=!1;La(e);let a=!0,l=null,c=null;o||(_v(n)?(c=nx(e),l=Ft(c)):Os()===null?(a=!1,c=sx(e),l=Ft(c)):e[Je]&&(sn(e[Je]),e[Je]=null));try{Wd(e),vg(n.bindingStartIndex),t!==null&&pv(n,e,t,2,r);let d=(i&3)===3;if(!o)if(d){let h=n.preOrderCheckHooks;h!==null&&Ya(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Ka(e,h,0,null),mu(e,0)}if(s||ux(e),Dv(e),Sv(e,0),n.contentQueries!==null&&Wy(n,e),!o)if(d){let h=n.contentCheckHooks;h!==null&&Ya(e,h)}else{let h=n.contentHooks;h!==null&&Ka(e,h,1),mu(e,1)}hx(n,e);let f=n.components;f!==null&&Cv(e,f,0);let m=n.viewQuery;if(m!==null&&Tu(2,m,r),!o)if(d){let h=n.viewCheckHooks;h!==null&&Ya(e,h)}else{let h=n.viewHooks;h!==null&&Ka(e,h,2),mu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[xa]){for(let h of e[xa])h();e[xa]=null}o||(vv(e),e[T]&=-73)}catch(d){throw o||Sr(e),d}finally{c!==null&&(on(c,l),a&&ix(c)),Va()}}function Sv(n,e){for(let t=Vy(n);t!==null;t=By(t))for(let r=pe;r<t.length;r++){let i=t[r];wv(i,e)}}function ux(n){for(let e=Vy(n);e!==null;e=By(e)){if(!(e[T]&2))continue;let t=e[Dr];for(let r=0;r<t.length;r++){let i=t[r];qd(i)}}}function fx(n,e,t){oe(J.ComponentStart);let r=ut(e,n);try{wv(r,t)}finally{oe(J.ComponentEnd,r[Se])}}function wv(n,e){Ma(n)&&Hu(n,e)}function Hu(n,e){let r=n[I],i=n[T],o=n[Je],s=!!(e===0&&i&16);if(s||=!!(i&64&&e===0),s||=!!(i&1024),s||=!!(o?.dirty&&Qn(o)),s||=!1,o&&(o.dirty=!1),n[T]&=-9217,s)dx(r,n,r.template,n[Se]);else if(i&8192){let a=N(null);try{Dv(n),Sv(n,1);let l=r.components;l!==null&&Cv(n,l,1),vv(n)}finally{N(a)}}}function Cv(n,e,t){for(let r=0;r<e.length;r++)fx(n,e[r],t)}function hx(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)Rn(~i);else{let o=i,s=t[++r],a=t[++r];_g(s,o);let l=e[o];oe(J.HostBindingsUpdateStart,l);try{a(2,l)}finally{oe(J.HostBindingsUpdateEnd,l)}}}}finally{Rn(-1)}}function Rf(n,e){let t=ru()?64:1088;for(n[It].changeDetectionScheduler?.notify(e);n;){n[T]|=t;let r=cn(n);if(hi(n)&&!r)return n;n=r}return null}function xv(n,e,t,r){return[n,!0,0,e,null,r,null,t,null,null]}function Iv(n,e){let t=pe+e;if(t<n.length)return n[t]}function Bo(n,e,t,r=!0){let i=e[I];if(mx(i,e,n,t),r){let s=ju(t,n),a=e[le],l=a.parentNode(n[_r]);l!==null&&CC(i,n[je],a,e,l,s)}let o=e[yr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Nv(n,e){let t=ko(n,e);return t!==void 0&&_l(t[I],t),t}function ko(n,e){if(n.length<=pe)return;let t=pe+e,r=n[t];if(r){let i=r[An];i!==null&&i!==n&&Ef(i,r),e>0&&(n[t-1][ct]=r[ct]);let o=po(n,pe+e);wC(r[I],r);let s=o[jt];s!==null&&s.detachView(o[I]),r[Ne]=null,r[ct]=null,r[T]&=-129}return r}function mx(n,e,t,r){let i=pe+r,o=t.length;r>0&&(t[i-1][ct]=e),r<o-pe?(e[ct]=t[i],Pd(t,pe+r,e)):(t.push(e),e[ct]=null),e[Ne]=t;let s=e[An];s!==null&&t!==s&&Mv(s,e);let a=e[jt];a!==null&&a.insertView(n),Ta(e),e[T]|=128}function Mv(n,e){let t=n[Dr],r=e[Ne];if(dn(r))n[T]|=2;else{let i=r[Ne][Ge];e[Ge]!==i&&(n[T]|=2)}t===null?n[Dr]=[e]:t.push(e)}var Pn=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[I];return To(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Se]}set context(e){this._lView[Se]=e}get destroyed(){return Er(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ne];if(dt(e)){let t=e[vo],r=t?t.indexOf(this):-1;r>-1&&(ko(e,r),po(t,r))}this._attachedToViewContainer=!1}_l(this._lView[I],this._lView)}onDestroy(e){ka(this._lView,e)}markForCheck(){Rf(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[T]&=-129}reattach(){Ta(this._lView),this._lView[T]|=128}detectChanges(){this._lView[T]|=1024,Ev(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new b(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=hi(this._lView),t=this._lView[An];t!==null&&!e&&Ef(t,this._lView),av(this._lView[I],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new b(902,!1);this._appRef=e;let t=hi(this._lView),r=this._lView[An];r!==null&&!t&&Mv(r,this._lView),Ta(this._lView)}};var qt=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=px;constructor(t,r,i){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,i){let o=Vo(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:i});return new Pn(o)}}return n})();function px(){return wl(Re(),k())}function wl(n,e){return n.type&4?new qt(e,n,xi(n,e)):null}function Ii(n,e,t,r,i){let o=n.data[e];if(o===null)o=gx(n,e,t,r,i),bg()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let s=gg();o.injectorIndex=s===null?-1:s.injectorIndex}return mi(o,!0),o}function gx(n,e,t,r,i){let o=eu(),s=tu(),a=s?o:o&&o.parent,l=n.data[e]=vx(n,a,t,e,r,i);return yx(n,l,o,s),l}function yx(n,e,t,r){n.firstChild===null&&(n.firstChild=e),t!==null&&(r?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function vx(n,e,t,r,i,o){let s=e?e.injectorIndex:-1,a=0;return Xd()&&(a|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,namespace:lu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function bx(n){let e=n[zd]??[],r=n[Ne][le],i=[];for(let o of e)o.data[Uy]!==void 0?i.push(o):_x(o,r);n[zd]=i}function _x(n,e){let t=0,r=n.firstChild;if(r){let i=n.data[Hy];for(;t<i;){let o=r.nextSibling;tv(e,r,!1),r=o,t++}}}var Dx=()=>null,Ex=()=>null;function nl(n,e){return Dx(n,e)}function Tv(n,e,t){return Ex(n,e,t)}var kv=class{},Ie=class{},ye=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>Sx()};function Sx(){let n=k(),e=Re(),t=ut(e.index,n);return(dn(t)?t:n)[le]}var Av=(()=>{class n{static \u0275prov=j({token:n,providedIn:"root",factory:()=>null})}return n})();function Rv(n){return n.debugInfo?.className||n.type.name||null}var Xa={},rl=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,r){let i=this.injector.get(e,Xa,r);return i!==Xa||t===Xa?i:this.parentInjector.get(e,t,r)}};function Ov(n,e,t){return n[e]=t}function wx(n,e){return n[e]}function ht(n,e,t){if(t===mt)return!1;let r=n[e];return Object.is(r,t)?!1:(n[e]=t,!0)}function ny(n,e,t,r){let i=ht(n,e,t);return ht(n,e+1,r)||i}function Cx(n,e,t,r,i,o){let s=ny(n,e,t,r);return ny(n,e+2,i,o)||s}function _i(n,e,t){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&vw(i,o);let s=un(n)?ut(n.index,e):e;Rf(s,5);let a=e[Se],l=ry(e,a,t,i),c=r.__ngNextListenerFn__;for(;c;)l=ry(e,a,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function ry(n,e,t,r){let i=N(null);try{return oe(J.OutputStart,e,t),t(r)!==!1}catch(o){return XC(n,o),!1}finally{oe(J.OutputEnd,e,t),N(i)}}function Fv(n,e,t,r,i,o,s,a){let l=fi(n),c=!1,d=null;if(!r&&l&&(d=Ix(e,t,o,n.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=et(n,t),m=r?r(f):f;_w(t,m,o,a),r||(a.__ngNativeEl__=f);let h=i.listen(m,o,a);if(!xx(o)){let p=r?D=>r(Le(D[n.index])):n.index;Pv(p,e,t,o,a,h,!1)}}return c}function xx(n){return n.startsWith("animation")||n.startsWith("transition")}function Ix(n,e,t,r){let i=n.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===t&&i[o+1]===r){let a=e[di],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Pv(n,e,t,r,i,o,s){let a=e.firstCreatePass?Kd(e):null,l=Yd(t),c=l.length;l.push(i,o),a&&a.push(r,n,c,(c+1)*(s?-1:1))}function iy(n,e,t,r,i){let o=null,s=null,a=null,l=!1,c=n.directiveToIndex.get(t.type);if(typeof c=="number"?o=c:[o,s,a]=c,s!==null&&a!==null&&n.hostDirectiveOutputs?.hasOwnProperty(r)){let d=n.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let m=d[f];if(m>=s&&m<=a)l=!0,il(n,e,m,d[f+1],r,i);else if(m>a)break}}return t.outputs.hasOwnProperty(r)&&(l=!0,il(n,e,o,r,r,i)),l}function il(n,e,t,r,i,o){let s=e[t],a=e[I],c=a.data[t].outputs[r],f=s[c].subscribe(o);Pv(n.index,a,e,i,o,f,!0)}function Vn(){Nx()}function Nx(){let n=k(),e=ge(),t=Re();if(e.firstCreatePass&&Tx(e,t),t.controlDirectiveIndex===-1)return;vn("NgSignalForms");let r=n[t.controlDirectiveIndex];e.data[t.controlDirectiveIndex].controlDef.create(r,new ol(n,e,t))}function Bn(){Mx()}function Mx(){let n=k(),e=ge(),t=pi();if(t.controlDirectiveIndex===-1)return;let r=e.data[t.controlDirectiveIndex].controlDef,i=n[t.controlDirectiveIndex];r.update(i,new ol(n,e,t))}var ol=class{lView;tView;tNode;hasPassThrough;constructor(e,t,r){this.lView=e,this.tView=t,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return et(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(e,t){let r=this.tView.data[this.tNode.customControlIndex];iy(this.tNode,this.lView,r,e,_i(this.tNode,this.lView,t))}listenToCustomControlModel(e){let t=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];iy(this.tNode,this.lView,r,t,_i(this.tNode,this.lView,e))}listenToDom(e,t){Fv(this.tNode,this.tView,this.lView,void 0,this.lView[le],e,t,_i(this.tNode,this.lView,t))}setInputOnDirectives(e,t){let r=this.tNode.inputs?.[e],i=this.tNode.hostDirectiveInputs?.[e];if(!r&&!i)return!1;let o=!1;if(r)for(let s of r){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],l=this.lView[s];Tr(a,l,e,t),o=!0}if(i)for(let s=0;s<i.length;s+=2){let a=i[s];if(a===this.tNode.controlDirectiveIndex)continue;let l=i[s+1],c=this.tView.data[a],d=this.lView[a];Tr(c,d,l,t),o=!0}return o}setCustomControlModelInput(e){let t=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";QC(this.tNode,this.tView,this.lView,t,r,e)}customControlHasInput(e){if(this.tNode.customControlIndex===-1)return!1;let t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[e]===!0}_buildCustomControlInputCache(e){let t={};for(let r in e.inputs)t[r]=!0;if(e.hostDirectives!==null){let r=[...e.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let s in i.inputs)t[i.inputs[s]]=!0;let o=oy(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let l=o.inputs[a+1]||o.inputs[a];t[l]=!0}let s=oy(o.directive);s!==null&&r.push(...s)}}}return t}};function oy(n){return typeof n=="function"&&"\u0275dir"in n?n.\u0275dir.hostDirectives??null:null}function Tx(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++)if(n.data[i].controlDef){e.controlDirectiveIndex=i;break}if(e.controlDirectiveIndex===-1)return;let r=n.data[e.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(e.inputs?.[r.passThroughInput]?.length??0)>1){e.flags|=4096;return}kx(n,e)}function kx(n,e){for(let t=e.directiveStart;t<e.directiveEnd;t++){let r=n.data[t];if(!(e.directiveToIndex&&!e.directiveToIndex.has(r.type))){if(sy(r,"value")){e.flags|=1024,e.customControlIndex=t;return}if(sy(r,"checked")){e.flags|=2048,e.customControlIndex=t;return}}}if(e.hostDirectiveInputs!==null&&e.hostDirectiveOutputs!==null&&e.directiveToIndex!==null){let t=(r,i)=>{let o=e.hostDirectiveInputs[r],s=e.hostDirectiveOutputs[r+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let l=o[a];for(let c=0;c<s.length;c+=2){let d=s[c];if(l===d)for(let f of e.directiveToIndex.values()){if(!Array.isArray(f))continue;let[m,h,p]=f;if(l>=h&&l<=p)return e.flags|=i,e.customControlIndex=m,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function sy(n,e){return Ax(n,e)&&Rx(n,e+"Change")}function Ax(n,e){return e in n.inputs}function Rx(n,e){return e in n.outputs}var Uu=Symbol("BINDING");var Or=new g("");function sl(n,e,t){let r=t?n.styles:null,i=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)i=va(i,a);else if(o==2){let l=a,c=e[++s];r=va(r,l+": "+c+";")}}t?n.styles=r:n.stylesWithoutHost=r,t?n.classes=i:n.classesWithoutHost=i}function Oe(n,e=0){let t=k();if(t===null)return R(n,e);let r=Re();return Ay(r,t,Pe(n),e)}function Lv(n,e,t,r,i){let o=r===null?null:{"":-1},s=i(n,t);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}Px(n,e,t,a,o,l,c)}o!==null&&r!==null&&Ox(t,r,o)}function Ox(n,e,t){let r=n.localNames=[];for(let i=0;i<e.length;i+=2){let o=t[e[i+1]];if(o==null)throw new b(-301,!1);r.push(e[i],o)}}function Fx(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Px(n,e,t,r,i,o,s){let a=r.length,l=null;for(let m=0;m<a;m++){let h=r[m];l===null&&zt(h)&&(l=h,Fx(n,t,m)),xu(tl(t,e),n,h.type)}Ux(t,n.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=r[m];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,f=hv(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=r[m];if(t.mergedAttrs=Di(t.mergedAttrs,h.hostAttrs),Vx(n,t,e,f,h),Hx(f,h,i),s!==null&&s.has(h)){let[D,C]=s.get(h);t.directiveToIndex.set(h.type,[f,D+t.directiveStart,C+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let p=h.type.prototype;!c&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),c=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),d=!0),f++}Lx(n,t,o)}function Lx(n,e,t){for(let r=e.directiveStart;r<e.directiveEnd;r++){let i=n.data[r];if(t===null||!t.has(i))ay(0,e,i,r),ay(1,e,i,r),cy(e,r,!1);else{let o=t.get(i);ly(0,e,o,r),ly(1,e,o,r),cy(e,r,!0)}}}function ay(n,e,t,r){let i=n===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(r),Vv(e,o)}}function ly(n,e,t,r){let i=n===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),Vv(e,s)}}function Vv(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function cy(n,e,t){let{attrs:r,inputs:i,hostDirectiveInputs:o}=n;if(r===null||!t&&i===null||t&&o===null||yf(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!t&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===e){s??=[],s.push(l,r[a+1]);break}}else if(t&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===e){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function Vx(n,e,t,r,i){n.data[r]=i;let o=i.factory||(i.factory=ur(i.type,!0)),s=new Nr(o,zt(i),Oe,null);n.blueprint[r]=s,t[r]=s,Bx(n,e,r,hv(n,t,i.hostVars,mt),i)}function Bx(n,e,t,r,i){let o=i.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;jx(s)!=a&&s.push(a),s.push(t,r,o)}}function jx(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Hx(n,e,t){if(t){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)t[e.exportAs[r]]=n;zt(e)&&(t[""]=n)}}function Ux(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Of(n,e,t,r,i,o,s,a){let l=e[I],c=l.consts,d=ft(c,s),f=Ii(l,n,t,r,d);return o&&Lv(l,e,f,ft(c,a),i),f.mergedAttrs=Di(f.mergedAttrs,f.attrs),f.attrs!==null&&sl(f,f.attrs,!1),f.mergedAttrs!==null&&sl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Ff(n,e){Sy(n,e),$d(e)&&n.queries.elementEnd(e)}function zx(n,e,t,r,i,o){let s=e.consts,a=ft(s,i),l=Ii(e,n,t,r,a);if(l.mergedAttrs=Di(l.mergedAttrs,l.attrs),o!=null){let c=ft(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&sl(l,l.attrs,!1),l.mergedAttrs!==null&&sl(l,l.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,l),l}var Bv=typeof ShadowRoot<"u",$x=typeof Document<"u";function Gx(n){return Object.keys(n).map(e=>{let[t,r,i]=n[e],o={propName:t,templateName:e,isSignal:(r&El.SignalBased)!==0};return i&&(o.transform=i),o})}function Wx(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function qx(n,e,t){let r=e instanceof Ee?e:e?.injector;return r&&n.getStandaloneInjector!==null&&(r=n.getStandaloneInjector(r)||r),r?new rl(t,r):t}function Yx(n){let e=n.get(Ie,null);if(e===null)throw new b(407,!1);let t=n.get(Av,null),r=n.get(Lt,null),i=n.get(Kt,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function Kx(n,e){let t=jv(n);return Jy(e,t,t==="svg"?ai:t==="math"?Ia:null)}function Zx(n){if(n?.toLowerCase()==="script")throw new b(905,!1)}function jv(n){return(n.selectors[0][0]||"div").toLowerCase()}var wi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Gx(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Wx(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=dC(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,r,i,o,s){oe(J.DynamicComponentStart);let a=N(null);try{let l=this.componentDef,c=qx(l,i||this.ngModule,e),d=Yx(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Rv(l),()=>this.createComponentRef(d,c,t,r,o,s)):this.createComponentRef(d,c,t,r,o,s)}finally{N(a)}}createComponentRef(e,t,r,i,o,s){let a=this.componentDef,l=Xx(i,a,s,o),c=e.rendererFactory.createRenderer(null,a),d=i?BC(c,i,a.encapsulation,t):Kx(a,c);Zx(d?.tagName);let f=t.get(Or,null),m=Qx(d,()=>t.get(V,null)??df());f&&f.addHost(m);let h=s?.some(dy)||o?.some(C=>typeof C!="function"&&C.bindings.some(dy)),p=xf(null,l,null,512|fv(a),null,null,e,c,t,null,Gy(d,t,!0));f&&Bv&&m instanceof ShadowRoot&&ka(p,()=>{f.removeHost(m)}),p[_e]=d,La(p);let D=null;try{let C=Of(_e,p,2,"#host",()=>l.directiveRegistry,!0,0);nv(c,d,C),Ei(d,p),Sl(l,p,C),uf(l,C,p),Ff(l,C),r!==void 0&&e0(C,this.ngContentSelectors,r),D=ut(C.index,p),p[Se]=D[Se],Af(l,p,null)}catch(C){throw D!==null&&Nu(D),Nu(p),C}finally{oe(J.DynamicComponentEnd),Va()}return new al(this.componentType,p,!!h)}};function Xx(n,e,t,r){let i=n?["ng-version","22.1.0"]:uC(e.selectors[0]),o=null,s=null,a=0;if(t)for(let d of t)a+=d[Uu].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let m of f.bindings){a+=m[Uu].requiredVars;let h=d+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[e];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,m=Ad(f);l.push(m)}return Cf(0,null,Jx(o,s),1,a,l,null,null,null,[i],null)}function Qx(n,e){let t=n.getRootNode?.();return $x&&t instanceof Document?t.head:t&&Bv&&t instanceof ShadowRoot?t:e().head}function Jx(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let r of n)r.create();if(t&2&&e)for(let r of e)r.update()}}function dy(n){let e=n[Uu].kind;return e==="input"||e==="twoWay"}var al=class extends kv{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=Na(t[I],_e),this.location=xi(this._tNode,t),this.instance=ut(this._tNode.index,t)[Se],this.hostView=this.changeDetectorRef=new Pn(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let i=this._rootLView,o=kf(r,i[I],i,e,t);this.previousInputValues.set(e,t);let s=ut(r.index,i);Rf(s,1)}get injector(){return new On(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function e0(n,e,t){let r=n.projection=[];for(let i=0;i<e.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}var pt=(()=>{class n{static __NG_ELEMENT_ID__=t0}return n})();function t0(){let n=Re();return Hv(n,k())}var zu=class n extends pt{_lContainer;_hostTNode;_hostLView;constructor(e,t,r){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=r}get element(){return xi(this._hostTNode,this._hostLView)}get injector(){return new On(this._hostTNode,this._hostLView)}get parentInjector(){let e=sf(this._hostTNode,this._hostLView);if(xy(e)){let t=el(e,this._hostLView),r=Ja(e),i=t[I].data[r+8];return new On(i,t)}else return new On(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=uy(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-pe}createEmbeddedView(e,t,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=nl(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,i,Si(this._hostTNode,s)),a}createComponent(e,t,r,i,o,s,a){let l,c=t||{};l=c.index,r=c.injector,i=c.projectableNodes,o=c.environmentInjector||c.ngModuleRef,s=c.directives,a=c.bindings;let d=new wi(Nn(e)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let P=this.parentInjector.get(Ee,null);P&&(o=P)}let m=Nn(d.componentType??{}),h=nl(this._lContainer,m?.id??null),p=h?.firstChild??null,D=d.create(f,i,p,o,s,a);return this.insertImpl(D.hostView,l,Si(this._hostTNode,h)),D}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,r){let i=e._lView;if(dg(i)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let l=i[Ne],c=new n(l,l[je],l[Ne]);c.detach(c.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return Bo(s,i,o,r),e.attachToViewContainerRef(),Pd(yu(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=uy(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),r=ko(this._lContainer,t);r&&(po(yu(this._lContainer),t),_l(r[I],r))}detach(e){let t=this._adjustIndex(e,-1),r=ko(this._lContainer,t);return r&&po(yu(this._lContainer),t)!=null?new Pn(r):null}_adjustIndex(e,t=0){return e??this.length+t}};function uy(n){return n[vo]}function yu(n){return n[vo]||(n[vo]=[])}function Hv(n,e){let t,r=e[n.index];return dt(r)?t=r:(t=xv(r,e,null,n),e[n.index]=t,If(e,t)),r0(t,e,n,r),new zu(t,n,e)}function n0(n,e){let t=n[le],r=t.createComment(""),i=et(e,n),o=t.parentNode(i);return Ir(t,o,r,t.nextSibling(i),!1),r}var r0=s0,i0=()=>!1;function o0(n,e,t){return i0(n,e,t)}function s0(n,e,t,r){if(n[_r])return;let i;t.type&8?i=Le(r):i=n0(e,t),n[_r]=i}var $u=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Gu=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let r=e.contentQueries!==null?e.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new n(i)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Lf(e,t).matches!==null&&this.queries[t].setDirty()}},ll=class{flags;read;predicate;constructor(e,t,r=null){this.flags=t,this.read=r,typeof e=="string"?this.predicate=u0(e):this.predicate=e}},Wu=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(e,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},qu=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=e.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(e,t,a0(t,o)),this.matchTNodeWithReadOption(e,t,Za(t,e,o,!1,!1))}else r===qt?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Za(t,e,r,!1,!1))}matchTNodeWithReadOption(e,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===A||i===pt||i===qt&&t.type&4)this.addMatch(t.index,-2);else{let o=Za(t,e,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function a0(n,e){let t=n.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===e)return t[r+1]}return null}function l0(n,e){return n.type&11?xi(n,e):n.type&4?wl(n,e):null}function c0(n,e,t,r){return t===-1?l0(e,n):t===-2?d0(n,e,r):No(n,n[I],t,e)}function d0(n,e,t){if(t===A)return xi(e,n);if(t===qt)return wl(e,n);if(t===pt)return Hv(e,n)}function Uv(n,e,t,r){let i=e[jt].queries[r];if(i.matches===null){let o=n.data,s=t.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(c0(e,d,s[l+1],t.metadata.read))}}i.matches=a}return i.matches}function Yu(n,e,t,r){let i=n.queries.getByIndex(t),o=i.matches;if(o!==null){let s=Uv(n,e,i,t);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=e[-l];for(let f=pe;f<d.length;f++){let m=d[f];m[An]===m[Ne]&&Yu(m[I],m,c,r)}if(d[Dr]!==null){let f=d[Dr];for(let m=0;m<f.length;m++){let h=f[m];Yu(h[I],h,c,r)}}}}}return r}function Pf(n,e){return n[jt].queries[e].queryList}function zv(n,e,t){let r=new Mr((t&4)===4);return hg(n,e,r,r.destroy),(e[jt]??=new Gu).queries.push(new $u(r))-1}function $v(n,e,t){let r=ge();return r.firstCreatePass&&(Wv(r,new ll(n,e,t),-1),(e&2)===2&&(r.staticViewQueries=!0)),zv(r,k(),e)}function Gv(n,e,t,r){let i=ge();if(i.firstCreatePass){let o=Re();Wv(i,new ll(e,t,r),o.index),f0(i,n),(t&2)===2&&(i.staticContentQueries=!0)}return zv(i,k(),t)}function u0(n){return n.split(",").map(e=>e.trim())}function Wv(n,e,t){n.queries===null&&(n.queries=new Wu),n.queries.track(new qu(e,t))}function f0(n,e){let t=n.contentQueries||(n.contentQueries=[]),r=t.length?t[t.length-1]:-1;e!==r&&t.push(n.queries.length-1,e)}function Lf(n,e){return n.queries.getByIndex(e)}function qv(n,e){let t=n[I],r=Lf(t,e);return r.crossesNgTemplate?Yu(t,n,e,[]):Uv(t,n,r,e)}function Yv(n,e,t){let r,i=eo(()=>{r._dirtyCounter();let o=h0(r,n);if(e&&o===void 0)throw new b(-951,!1);return o});return r=i[ce],r._dirtyCounter=H(0),r._flatValue=void 0,i}function Vf(n){return Yv(!0,!1,n)}function Bf(n){return Yv(!0,!0,n)}function Kv(n,e){let t=n[ce];t._lView=k(),t._queryIndex=e,t._queryList=Pf(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function h0(n,e){let t=n._lView,r=n._queryIndex;if(t===void 0||r===void 0||t[T]&4)return e?void 0:at;let i=Pf(t,r),o=qv(t,r);return i.reset(o,Fy),e?i.first:i._changesDetected||n._flatValue===void 0?n._flatValue=i.toArray():n._flatValue}function Fr(n){return!!n&&typeof n.then=="function"}function jf(n){return!!n&&typeof n.subscribe=="function"}var kr=class{};var Ao=class extends kr{injector;instance=null;constructor(e){super();let t=new hr([...e.providers,{provide:kr,useValue:this}],e.parent||ci(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Zv(n,e,t=null){return new Ao({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var m0=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=Vd(!1,t.type),i=r.length>0?Zv([r],this._injector,""):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=j({token:n,providedIn:"environment",factory:()=>new n(R(Ee))})}return n})();function Z(n){return fl(()=>{let e=Xv(n),t=G(_({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==lf.Eager,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?i=>i.get(m0).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Tt.Emulated,styles:n.styles||at,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&vn("NgStandalone"),Qv(t);let r=n.dependencies;return t.directiveDefs=fy(r,p0),t.pipeDefs=fy(r,Gp),t.id=v0(t),t})}function p0(n){return Nn(n)||Ad(n)}function g0(n,e){if(n==null)return Tn;let t={};for(let r in n)if(n.hasOwnProperty(r)){let i=n[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=El.None,l=null),t[o]=[r,a,l],e[o]=s}return t}function y0(n){if(n==null)return Tn;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function U(n){return fl(()=>{let e=Xv(n);return Qv(e),e})}function Xv(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Tn,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||at,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:g0(n.inputs,e),outputs:y0(n.outputs),debugInfo:null}}function Qv(n){n.features?.forEach(e=>e(n))}function fy(n,e){return n?()=>{let t=typeof n=="function"?n():n,r=[];for(let i of t){let o=e(i);o!==null&&r.push(o)}return r}:null}function v0(n){let e=0,t=typeof n.consts=="function"?"":n.consts,r=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of r.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var Jv=new g("");var Hf=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=u(Jv,{optional:!0})??[];injector=u(q);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=Ct(this.injector,i);if(Fr(o))t.push(o);else if(jf(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});t.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function Cl(n){return e=>{e.controlDef={create:(t,r)=>{t?.\u0275ngControlCreate(r)},update:(t,r)=>{t?.\u0275ngControlUpdate?.(r)},passThroughInput:n}}}function b0(n){return Object.getPrototypeOf(n.prototype).constructor}function tt(n){let e=b0(n.type),t=!0,r=[n];for(;e&&e!==Function.prototype&&e!==Object.prototype;){let i,o=Object.hasOwn(e,ho)?e[ho]:void 0,s=Object.hasOwn(e,mo)?e[mo]:void 0;if(zt(n))i=o??s;else{if(o)throw new b(903,!1);i=s}if(i){if(t){r.push(i);let l=n;l.inputs=vu(n.inputs),l.declaredInputs=vu(n.declaredInputs),l.outputs=vu(n.outputs);let c=i.hostBindings;c&&w0(n,c);let d=i.viewQuery,f=i.contentQueries;if(d&&E0(n,d),f&&S0(n,f),_0(n,i),$p(n.outputs,i.outputs),zt(i)&&i.data.animation){let m=n.data;m.animation=(m.animation||[]).concat(i.data.animation)}}let a=i.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(n),c===tt&&(t=!1)}}e=Object.getPrototypeOf(e)}D0(r)}function _0(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let r=e.inputs[t];r!==void 0&&(n.inputs[t]=r,n.declaredInputs[t]=e.declaredInputs[t])}}function D0(n){let e=0,t=null;for(let r=n.length-1;r>=0;r--){let i=n[r];i.hostVars=e+=i.hostVars,i.hostAttrs=Di(i.hostAttrs,t=Di(t,i.hostAttrs))}}function vu(n){return n===Tn?{}:n===at?[]:n}function E0(n,e){let t=n.viewQuery;t?n.viewQuery=(r,i)=>{e(r,i),t(r,i)}:n.viewQuery=e}function S0(n,e){let t=n.contentQueries;t?n.contentQueries=(r,i,o)=>{e(r,i,o),t(r,i,o)}:n.contentQueries=e}function w0(n,e){let t=n.hostBindings;t?n.hostBindings=(r,i)=>{e(r,i),t(r,i)}:n.hostBindings=e}function eb(n,e,t,r,i,o,s,a){if(t.firstCreatePass){n.mergedAttrs=Di(n.mergedAttrs,n.attrs);let d=n.tView=Cf(2,n,i,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),d.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),mi(n,!1);let l=x0(t,e,n,r);ja()&&Sf(t,e,l,n),Ei(l,e);let c=xv(l,e,l,n);e[r+_e]=c,If(e,c),o0(c,n,e)}function C0(n,e,t,r,i,o,s,a,l,c,d){let f=t+_e,m;return e.firstCreatePass?(m=Ii(e,f,4,s||null,a||null),Aa()&&Lv(e,n,m,ft(e.consts,c),Nf),Sy(e,m)):m=e.data[f],eb(m,n,e,t,r,i,o,l),fi(m)&&Sl(e,n,m),c!=null&&Lo(n,m,d),m}function Ro(n,e,t,r,i,o,s,a,l,c,d){let f=t+_e,m;if(e.firstCreatePass){if(m=Ii(e,f,4,s||null,a||null),c!=null){let h=ft(e.consts,c);m.localNames=[];for(let p=0;p<h.length;p+=2)m.localNames.push(h[p],-1)}}else m=e.data[f];return eb(m,n,e,t,r,i,o,l),c!=null&&Lo(n,m,d),m}function gt(n,e,t,r,i,o,s,a){let l=k(),c=ge(),d=ft(c.consts,o);return C0(l,c,n,e,t,r,i,d,void 0,s,a),gt}var x0=I0;function I0(n,e,t,r){return Do(!0),e[le].createComment("")}var Uf=new g("");var zf=new g("");function tb(){$c(()=>{let n="";throw new b(600,n)})}var N0=10;var kt=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(fn);afterRenderManager=u(vl);zonelessEnabled=u(So);rootEffectScheduler=u(za);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Cr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(De(t=>!t))}constructor(){u(Kt,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=u(Ee);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,i=q.NULL){return this._injector.get(M).run(()=>{if(oe(J.BootstrapComponentStart),!this._injector.get(Hf).done){let P="";throw new b(405,P)}let a=Nn(t),l=this._injector.get(kr),c=new wi(a,l);this.componentTypes.push(t);let{hostElement:d,directives:f,bindings:m}=M0(r),h=d||c.selector,p=c.create(i,[],h,l.injector,f,m),D=p.location.nativeElement,C=p.injector.get(Uf,null);return C?.registerApplication(D),p.onDestroy(()=>{this.detachView(p.hostView),Io(this.components,p),C?.unregisterApplication(D)}),this._loadComponent(p),oe(J.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){oe(J.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(yl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw oe(J.ChangeDetectionEnd),new b(101,!1);let t=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(t),this.afterTick.next(),oe(J.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ie,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<N0;){oe(J.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{oe(J.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!bo(i))continue;let o=r&&!this.zonelessEnabled?0:1;Ev(i,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>bo(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;Io(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(t),this._injector.get(zf,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Io(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new b(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function M0(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function Io(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function ve(n,e,t,r){let i=k(),o=wr();if(ht(i,o,e)){let s=ge(),a=pi();YC(a,i,n,e,t,r)}return ve}var Ku=class{destroy(e){}updateValue(e,t){}swap(e,t){let r=Math.min(e,t),i=Math.max(e,t),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(e,t){this.attach(t,this.detach(e))}};function bu(n,e,t,r,i){return n===t&&Object.is(e,r)?1:Object.is(i(n,e),i(t,r))?-1:0}function T0(n,e,t,r){let i,o,s=0,a=n.length-1,l=void 0;if(Array.isArray(e)){N(r);let c=e.length-1;for(N(null);s<=a&&s<=c;){let d=n.at(s),f=e[s],m=bu(s,d,s,f,t);if(m!==0){m<0&&n.updateValue(s,f),s++;continue}let h=n.at(a),p=e[c],D=bu(a,h,c,p,t);if(D!==0){D<0&&n.updateValue(a,p),a--,c--;continue}let C=t(s,d),P=t(a,h),xe=t(s,f);if(Object.is(xe,P)){let ot=t(c,p);Object.is(ot,C)?(n.swap(s,a),n.updateValue(a,p),c--,a--):n.move(a,s),n.updateValue(s,f),s++;continue}if(i??=new cl,o??=my(n,s,a,t),Zu(n,i,s,xe))n.updateValue(s,f),s++,a++;else if(o.has(xe))i.set(C,n.detach(s)),a--;else{let ot=n.create(s,e[s]);n.attach(s,ot),s++,a++}}for(;s<=c;)hy(n,i,t,s,e[s]),s++}else if(e!=null){N(r);let c=e[Symbol.iterator]();N(null);let d=c.next();for(;!d.done&&s<=a;){let f=n.at(s),m=d.value,h=bu(s,f,s,m,t);if(h!==0)h<0&&n.updateValue(s,m),s++,d=c.next();else{i??=new cl,o??=my(n,s,a,t);let p=t(s,m);if(Zu(n,i,s,p))n.updateValue(s,m),s++,a++,d=c.next();else if(!o.has(p))n.attach(s,n.create(s,m)),s++,a++,d=c.next();else{let D=t(s,f);i.set(D,n.detach(s)),a--}}}for(;!d.done;)hy(n,i,t,n.length,d.value),d=c.next()}for(;s<=a;)n.destroy(n.detach(a--));i?.forEach(c=>{n.destroy(c)})}function Zu(n,e,t,r){return e!==void 0&&e.has(r)?(n.attach(t,e.get(r)),e.delete(r),!0):!1}function hy(n,e,t,r,i){if(Zu(n,e,r,t(r,i)))n.updateValue(r,i);else{let o=n.create(r,i);n.attach(r,o)}}function my(n,e,t,r){let i=new Set;for(let o=e;o<=t;o++)i.add(r(o,n.at(o)));return i}var cl=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let r=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,r]of this.kvMap)if(e(r,t),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),e(r,t)}}};function ue(n,e,t,r,i,o,s,a){vn("NgControlFlow");let l=k(),c=ge(),d=ft(c.consts,o);return Ro(l,c,n,e,t,r,i,d,256,s,a),$f}function $f(n,e,t,r,i,o,s,a){vn("NgControlFlow");let l=k(),c=ge(),d=ft(c.consts,o);return Ro(l,c,n,e,t,r,i,d,512,s,a),$f}function fe(n,e){vn("NgControlFlow");let t=k(),r=wr(),i=t[r]!==mt?t[r]:-1,o=i!==-1?dl(t,_e+i):void 0,s=0;if(ht(t,r,n)){let a=N(null);try{if(o!==void 0&&Nv(o,s),n!==-1){let l=_e+n,c=dl(t,l),d=ef(t[I],l),f=Tv(c,d,t),m=Vo(t,d,e,{dehydratedView:f});Bo(c,m,s,Si(d,f))}}finally{N(a)}}else if(o!==void 0){let a=Iv(o,s);a!==void 0&&(a[Se]=e)}}var Xu=class{lContainer;$implicit;$index;constructor(e,t,r){this.lContainer=e,this.$implicit=t,this.$index=r}get $count(){return this.lContainer.length-pe}};function xl(n,e){return e}var Qu=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,r){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=r}};function jo(n,e,t,r,i,o,s,a,l,c,d,f,m){vn("NgControlFlow");let h=k(),p=ge(),D=l!==void 0,C=k(),P=a?s.bind(C[Ge][Se]):s,xe=new Qu(D,P);C[_e+n]=xe,Ro(h,p,n+1,e,t,r,i,ft(p.consts,o),256),D&&Ro(h,p,n+2,l,c,d,f,ft(p.consts,m),512)}var Ju=class extends Ku{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,r){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=r}get length(){return this.lContainer.length-pe}at(e){return this.getLView(e)[Se].$implicit}attach(e,t){let r=t[yr];this.needsIndexUpdate||=e!==this.length,Bo(this.lContainer,t,e,Si(this.templateTNode,r)),k0(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,A0(this.lContainer,e),R0(this.lContainer,e)}create(e,t){let r=nl(this.lContainer,this.templateTNode.tView.ssrId);return Vo(this.hostLView,this.templateTNode,new Xu(this.lContainer,t,e),{dehydratedView:r})}destroy(e){_l(e[I],e)}updateValue(e,t){this.getLView(e)[Se].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Se].$index=e}getLView(e){return O0(this.lContainer,e)}};function Ho(n){let e=N(null),t=$t();try{let r=k(),i=r[I],o=r[t],s=t+1,a=dl(r,s);if(o.liveCollection===void 0){let c=ef(i,s);o.liveCollection=new Ju(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(T0(l,n,o.trackByFn,e),l.updateIndexes(),o.hasEmptyBlock){let c=wr(),d=l.length===0;if(ht(r,c,d)){let f=t+2,m=dl(r,f);if(d){let h=ef(i,f),p=Tv(m,h,r),D=Vo(r,h,void 0,{dehydratedView:p});Bo(m,D,0,Si(h,p))}else i.firstUpdatePass&&bx(m),Nv(m,0)}}}finally{N(e)}}function dl(n,e){return n[e]}function k0(n,e){if(n.length<=pe)return;let t=pe+e,r=n[t],i=r?r[Ut]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Bt];vC(o,i),Fn.delete(r[Ht]),i.detachedLeaveAnimationFns=void 0}}function A0(n,e){if(n.length<=pe)return;let t=pe+e,r=n[t],i=r?r[Ut]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function R0(n,e){return ko(n,e)}function O0(n,e){return Iv(n,e)}function ef(n,e){return Na(n,e)}function Y(n,e,t){let r=k(),i=wr();if(ht(r,i,e)){let o=ge(),s=pi();zC(s,r,n,e,r[le],t)}return Y}function tf(n,e,t,r,i){kf(e,n,t,i?"class":"style",r)}function v(n,e,t,r){let i=k(),o=i[I],s=n+_e,a=o.firstCreatePass?Of(s,i,2,e,Nf,Aa(),t,r):o.data[s];if(un(a)){let l=i[It].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Rv(c),()=>(py(n,e,i,a,r),v))}}return py(n,e,i,a,r),v}function py(n,e,t,r,i){if(Mf(r,t,n,e,nb),fi(r)){let o=t[I];Sl(o,t,r),uf(o,r,t)}i!=null&&Lo(t,r)}function y(){let n=ge(),e=Re(),t=Tf(e);return n.firstCreatePass&&Ff(n,t),Qd(t)&&Jd(),Zd(),t.classesWithoutHost!=null&&ew(t)&&tf(n,t,k(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&tw(t)&&tf(n,t,k(),t.stylesWithoutHost,!1),y}function ae(n,e,t,r){return v(n,e,t,r),y(),ae}function Ye(n,e,t,r){let i=k(),o=i[I],s=n+_e,a=o.firstCreatePass?zx(s,o,2,e,t,r):o.data[s];return Mf(a,i,n,e,nb),r!=null&&Lo(i,a),Ye}function Ke(){let n=Re(),e=Tf(n);return Qd(e)&&Jd(),Zd(),Ke}function Zt(n,e,t,r){return Ye(n,e,t,r),Ke(),Zt}var nb=(n,e,t,r,i)=>(Do(!0),Jy(e[le],r,lu()));function Gf(n,e,t){let r=k(),i=r[I],o=n+_e,s=i.firstCreatePass?Of(o,r,8,"ng-container",Nf,Aa(),e,t):i.data[o];if(Mf(s,r,n,"ng-container",F0),fi(s)){let a=r[I];Sl(a,r,s),uf(a,s,r)}return t!=null&&Lo(r,s),Gf}function Wf(){let n=ge(),e=Re(),t=Tf(e);return n.firstCreatePass&&Ff(n,t),Wf}function Il(n,e,t){return Gf(n,e,t),Wf(),Il}var F0=(n,e,t,r,i)=>(Do(!0),qw(e[le],""));function qf(){return k()}function At(n,e,t){let r=k(),i=wr();if(ht(r,i,e)){let o=ge(),s=pi();gv(s,r,n,e,r[le],t)}return At}var Uo="en-US";var P0=Uo;function rb(n){typeof n=="string"&&(P0=n.toLowerCase().replace(/_/g,"-"))}function me(n,e,t){let r=k(),i=ge(),o=Re();return L0(i,r,r[le],o,n,e,t),me}function L0(n,e,t,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=_i(r,e,o),Fv(r,n,e,s,t,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let m=d[f],h=d[f+1];l??=_i(r,e,o),il(r,e,m,h,i,l)}if(c&&c.length)for(let f of c)l??=_i(r,e,o),il(r,e,f,i,i,l)}}function we(n=1){return xg(n)}function V0(n,e){let t=null,r=oC(n);for(let i=0;i<e.length;i++){let o=e[i];if(o==="*"){t=i;continue}if(r===null?iv(n,o,!0):lC(r,o))return i}return t}function Te(n){let e=k()[Ge][je];if(!e.projection){let t=n?n.length:1,r=e.projection=Xp(t,null),i=r.slice(),o=e.child;for(;o!==null;){if(o.type!==128){let s=n?V0(o,n):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function ee(n,e=0,t,r,i,o){let s=k(),a=ge(),l=r?n+1:null;l!==null&&Ro(s,a,l,r,i,o,null,t);let c=Ii(a,_e+n,16,null,t||null);c.projection===null&&(c.projection=e),nu();let f=!s[yr]||Xd();s[Ge][je].projection[c.projection]===null&&l!==null?B0(s,a,l):f&&!hl(c)&&RC(a,s,c)}function B0(n,e,t){let r=_e+t,i=e.data[r],o=n[r],s=nl(o,i.tView.ssrId),a=Vo(n,i,void 0,{dehydratedView:s});Bo(o,a,0,Si(i,s))}function jn(n,e,t,r){return Gv(n,e,t,r),jn}function yt(n,e,t){return $v(n,e,t),yt}function ne(n){let e=k(),t=ge(),r=Pa();_o(r+1);let i=Lf(t,r);if(n.dirty&&cg(e)===((i.metadata.flags&2)===2)){if(i.matches===null)n.reset([]);else{let o=qv(e,r);n.reset(o,Fy),n.notifyOnChanges()}return!0}return!1}function re(){return Pf(k(),Pa())}function Nl(n,e,t,r,i){return Kv(e,Gv(n,t,r,i)),Nl}function Ml(n,e,t,r){return Kv(n,$v(e,t,r)),Ml}function Tl(n=1){_o(Pa()+n)}function vt(n){let e=yg();return lg(e,_e+n)}function qa(n,e){return n<<17|e<<2}function Ar(n){return n>>17&32767}function j0(n){return(n&2)==2}function H0(n,e){return n&131071|e<<17}function nf(n){return n|2}function Ci(n){return(n&131068)>>2}function _u(n,e){return n&-131069|e<<2}function U0(n){return(n&1)===1}function rf(n){return n|1}function z0(n,e,t,r,i,o){let s=o?e.classBindings:e.styleBindings,a=Ar(s),l=Ci(s);n[r]=t;let c=!1,d;if(Array.isArray(t)){let f=t;d=f[1],(d===null||li(f,d)>0)&&(c=!0)}else d=t;if(i)if(l!==0){let m=Ar(n[a+1]);n[r+1]=qa(m,a),m!==0&&(n[m+1]=_u(n[m+1],r)),n[a+1]=H0(n[a+1],r)}else n[r+1]=qa(a,0),a!==0&&(n[a+1]=_u(n[a+1],r)),a=r;else n[r+1]=qa(l,0),a===0?a=r:n[l+1]=_u(n[l+1],r),l=r;c&&(n[r+1]=nf(n[r+1])),gy(n,d,r,!0),gy(n,d,r,!1),$0(e,d,n,r,o),s=qa(a,l),o?e.classBindings=s:e.styleBindings=s}function $0(n,e,t,r,i){let o=i?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&li(o,e)>=0&&(t[r+1]=rf(t[r+1]))}function gy(n,e,t,r){let i=n[t+1],o=e===null,s=r?Ar(i):Ci(i),a=!1;for(;s!==0&&(a===!1||o);){let l=n[s],c=n[s+1];G0(l,e)&&(a=!0,n[s+1]=r?rf(c):nf(c)),s=r?Ar(c):Ci(c)}a&&(n[t+1]=r?nf(i):rf(i))}function G0(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?li(n,e)>=0:!1}var Mt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function W0(n){return n.substring(Mt.key,Mt.keyEnd)}function q0(n){return Y0(n),ib(n,ob(n,0,Mt.textEnd))}function ib(n,e){let t=Mt.textEnd;return t===e?-1:(e=Mt.keyEnd=K0(n,Mt.key=e,t),ob(n,e,t))}function Y0(n){Mt.key=0,Mt.keyEnd=0,Mt.value=0,Mt.valueEnd=0,Mt.textEnd=n.length}function ob(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function K0(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function ie(n,e){return X0(n,e,null,!0),ie}function bn(n){Q0(iI,Z0,n,!0)}function Z0(n,e){for(let t=q0(e);t>=0;t=ib(e,t))wa(n,W0(e),!0)}function X0(n,e,t,r){let i=k(),o=ge(),s=ou(2);if(o.firstUpdatePass&&ab(o,n,s,r),e!==mt&&ht(i,s,e)){let a=o.data[$t()];lb(o,a,i,i[le],n,i[s+1]=sI(e,t),r,s)}}function Q0(n,e,t,r){let i=ge(),o=ou(2);i.firstUpdatePass&&ab(i,null,o,r);let s=k();if(t!==mt&&ht(s,o,t)){let a=i.data[$t()];if(cb(a,r)&&!sb(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(t=va(l,t||"")),tf(i,a,s,t,r)}else oI(i,a,s,s[le],s[o+1],s[o+1]=rI(n,e,t),r,o)}}function sb(n,e){return e>=n.expandoStartIndex}function ab(n,e,t,r){let i=n.data;if(i[t+1]===null){let o=i[$t()],s=sb(n,t);cb(o,r)&&e===null&&!s&&(e=!1),e=J0(i,o,e,r),z0(i,o,e,t,s,r)}}function J0(n,e,t,r){let i=Eg(n),o=r?e.residualClasses:e.residualStyles;if(i===null)(r?e.classBindings:e.styleBindings)===0&&(t=Du(null,n,e,t,r),t=Oo(t,e.attrs,r),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==i)if(t=Du(i,n,e,t,r),o===null){let l=eI(n,e,r);l!==void 0&&Array.isArray(l)&&(l=Du(null,n,e,l[1],r),l=Oo(l,e.attrs,r),tI(n,e,r,l))}else o=nI(n,e,r)}return o!==void 0&&(r?e.residualClasses=o:e.residualStyles=o),t}function eI(n,e,t){let r=t?e.classBindings:e.styleBindings;if(Ci(r)!==0)return n[Ar(r)]}function tI(n,e,t,r){let i=t?e.classBindings:e.styleBindings;n[Ar(i)]=r}function nI(n,e,t){let r,i=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<i;o++){let s=n[o].hostAttrs;r=Oo(r,s,t)}return Oo(r,e.attrs,t)}function Du(n,e,t,r,i){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],r=Oo(r,o.hostAttrs,i),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),r}function Oo(n,e,t){let r=t?1:2,i=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?i=s:i===r&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),wa(n,s,t?!0:e[++o]))}return n===void 0?null:n}function rI(n,e,t){if(t==null||t==="")return at;let r=[],i=Yt(t);if(Array.isArray(i))for(let o=0;o<i.length;o++)n(r,i[o],!0);else if(i instanceof Set)for(let o of i)n(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&n(r,o,i[o]);else typeof i=="string"&&e(r,i);return r}function iI(n,e,t){let r=String(e);r!==""&&!r.includes(" ")&&wa(n,r,t)}function oI(n,e,t,r,i,o,s,a){i===mt&&(i=at);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let m=l<i.length?i[l+1]:void 0,h=c<o.length?o[c+1]:void 0,p=null,D;d===f?(l+=2,c+=2,m!==h&&(p=f,D=h)):f===null||d!==null&&d<f?(l+=2,p=d):(c+=2,p=f,D=h),p!==null&&lb(n,e,t,r,p,D,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function lb(n,e,t,r,i,o,s,a){if(!(e.type&3))return;let l=n.data,c=l[a+1],d=U0(c)?yy(l,e,t,i,Ci(c),s):void 0;if(!ul(d)){ul(o)||j0(c)&&(o=yy(l,null,t,i,a,s));let f=Gd($t(),t);FC(r,s,f,i,o)}}function yy(n,e,t,r,i,o){let s=e===null,a;for(;i>0;){let l=n[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,m=t[i+1];m===mt&&(m=f?at:void 0);let h=f?Ca(m,r):d===r?m:void 0;if(c&&!ul(h)&&(h=Ca(l,r)),ul(h)&&(a=h,s))return a;let p=n[i+1];i=s?Ar(p):Ci(p)}if(e!==null){let l=o?e.residualClasses:e.residualStyles;l!=null&&(a=Ca(l,r))}return a}function ul(n){return n!==void 0}function sI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ya(Yt(n)))),n}function cb(n,e){return(n.flags&(e?8:16))!==0}function F(n,e=""){let t=k(),r=ge(),i=n+_e,o=r.firstCreatePass?Ii(r,i,1,e,null):r.data[i],s=aI(r,t,o,e);t[i]=s,ja()&&Sf(r,t,s,o),mi(o,!1)}var aI=(n,e,t,r)=>(Do(!0),Gw(e[le],r));function db(n,e,t,r=""){return ht(n,wr(),t)?e+Da(t)+r:mt}function Rt(n){return zo("",n),Rt}function zo(n,e,t){let r=k(),i=db(r,n,e,t);return i!==mt&&lI(r,$t(),i),zo}function lI(n,e,t){let r=Gd(e,n);Ww(n[le],r,t)}function Yf(n,e,t=""){return db(k(),n,e,t)}function vy(n,e,t){let r=ge();r.firstCreatePass&&ub(e,r.data,r.blueprint,zt(n),t)}function ub(n,e,t,r,i){if(n=Pe(n),Array.isArray(n))for(let o=0;o<n.length;o++)ub(n[o],e,t,r,i);else{let o=ge(),s=k(),a=Re(),l=fr(n)?n:Pe(n.provide),c=jd(n),d=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(fr(n)||!n.multi){let h=new Nr(c,i,Oe,null),p=Su(l,e,i?d:d+m,f);p===-1?(xu(tl(a,s),o,l),Eu(o,n,e.length),e.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(h),s.push(h)):(t[p]=h,s[p]=h)}else{let h=Su(l,e,d+m,f),p=Su(l,e,d,d+m),D=h>=0&&t[h],C=p>=0&&t[p];if(i&&!C||!i&&!D){xu(tl(a,s),o,l);let P=uI(i?dI:cI,t.length,i,r,c,n);!i&&C&&(t[p].providerFactory=P),Eu(o,n,e.length,0),e.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(P),s.push(P)}else{let P=fb(t[i?p:h],c,!i&&r);Eu(o,n,h>-1?h:p,P)}!i&&r&&C&&t[p].componentProviders++}}}function Eu(n,e,t,r){let i=fr(e),o=rg(e);if(i||o){let l=(o?Pe(e.useClass):e).prototype.ngOnDestroy;if(l){let c=n.destroyHooks||(n.destroyHooks=[]);if(!i&&e.multi){let d=c.indexOf(t);d===-1?c.push(t,[r,l]):c[d+1].push(r,l)}else c.push(t,l)}}}function fb(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Su(n,e,t,r){for(let i=t;i<r;i++)if(e[i]===n)return i;return-1}function cI(n,e,t,r,i){return of(this.multi,[])}function dI(n,e,t,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=No(r,r[I],this.providerFactory.index,i);s=l.slice(0,a),of(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],of(o,s);return s}function of(n,e){for(let t=0;t<n.length;t++){let r=n[t];e.push(r())}return e}function uI(n,e,t,r,i,o){let s=new Nr(n,t,Oe,null);return s.multi=[],s.index=e,s.componentProviders=0,fb(s,i,r&&!t),s}function Ce(n,e){return t=>{t.providersResolver=(r,i)=>vy(r,i?i(n):n,!1),e&&(t.viewProvidersResolver=(r,i)=>vy(r,i?i(e):e,!0))}}function Kf(n,e,t){return hI(k(),iu(),n,e,t)}function Zf(n,e,t,r,i,o,s){let a=iu()+n,l=k(),c=Cx(l,a,t,r,i,o);return ht(l,a+4,s)||c?Ov(l,a+5,e(t,r,i,o,s)):wx(l,a+5)}function fI(n,e){let t=n[e];return t===mt?void 0:t}function hI(n,e,t,r,i,o){let s=e+t;return ht(n,s,i)?Ov(n,s+1,o?r.call(o,i):r(i)):fI(n,s+1)}function Pr(n,e){return wl(n,e)}var hb=(()=>{class n{applicationErrorHandler=u(fn);appRef=u(kt);taskService=u(Cr);ngZone=u(M);zonelessEnabled=u(So);tracing=u(Kt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new X;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(uo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(hu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?kg:cu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(uo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function Xf(){return vn("NgZoneless"),Vt([...Qf(),[]])}function Qf(){return[{provide:Lt,useExisting:hb},{provide:M,useClass:fo},{provide:So,useValue:!0}]}function mI(){return typeof $localize<"u"&&$localize.locale||Uo}var kl=new g("",{factory:()=>u(kl,{optional:!0,skipSelf:!0})||mI()});function E(n,e){return eo(n,e?.equal)}function w(n){return sp(n)}var mb=class n extends Error{_brand;constructor(e){super(e)}static IDLE=new n("IDLE");static LOADING=new n("LOADING")},pI=n=>n;function Hn(n,e){if(typeof n=="function"){let t=Kc(n,pI,e?.equal);return pb(t,e?.debugName,e?.set)}else{let t=Kc(n.source,n.computation,n.equal);return pb(t,n.debugName,n.set)}}function pb(n,e,t){let r=n[ce],i=n;if(t!==void 0){let o=s=>Zc(r,s);i.set=s=>t(s,o),i.update=s=>t(s(w(n)),o)}else i.set=o=>Zc(r,o),i.update=o=>op(r,o);return i.asReadonly=Ha.bind(n),i}var gb=!1;function Jf(){return gb}function Al(n){gb=n}var Db=Symbol("InputSignalNode#UNSET"),RI=G(_({},to),{transformFn:void 0,applyValueToInputSignal(n,e){Jn(n,e)}});function Eb(n,e){let t=Object.create(RI);t.value=n,t.transformFn=e?.transform;function r(){if(Sn(t),t.value===Db){let i=null;throw new b(-950,i)}return t.value}return r[ce]=t,r}var Ni=class{attributeName;constructor(e){this.attributeName=e}__NG_ELEMENT_ID__=()=>af(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function yb(n,e){return Eb(n,e)}function OI(n){return Eb(Db,n)}var Xt=(yb.required=OI,yb);function vb(n,e){return Vf(e)}function FI(n,e){return Bf(e)}var Go=(vb.required=FI,vb);function bb(n,e){return Vf(e)}function PI(n,e){return Bf(e)}var Sb=(bb.required=PI,bb);var LI=1e4;var Dz=LI-1e3;var bt=(()=>{class n{static __NG_ELEMENT_ID__=VI}return n})();function VI(n){return BI(Re(),k(),(n&16)===16)}function BI(n,e,t){if(un(n)&&!t){let r=ut(n.index,e);return new Pn(r,r)}else if(n.type&175){let r=e[Ge];return new Pn(r,e)}return null}var th=new g(""),jI=new g("");function $o(n){return!n.moduleRef}function HI(n){let e=$o(n)?n.r3Injector:n.moduleRef.injector,t=e.get(M);return t.run(()=>{$o(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let r=e.get(fn),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:r})}),$o(n)){let o=()=>e.destroy(),s=n.platformInjector.get(th);s.add(o),e.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(th);s.add(o),n.moduleRef.onDestroy(()=>{Io(n.allPlatformModules,n.moduleRef),i.unsubscribe(),s.delete(o)})}return zI(r,t,()=>{let o=e.get(Cr),s=o.add(),a=e.get(Hf);return a.runInitializers(),a.donePromise.then(()=>{let l=e.get(kl,Uo);if(rb(l||Uo),!e.get(jI,!0))return $o(n)?e.get(kt):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if($o(n)){let d=e.get(kt);return n.rootComponent!==void 0&&d.bootstrap(n.rootComponent),d}else return UI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var UI;function zI(n,e,t){try{let r=t();return Fr(r)?r.catch(i=>{throw e.runOutsideAngular(()=>n(i)),i}):r}catch(r){throw e.runOutsideAngular(()=>n(r)),r}}var Rl=null;function $I(n=[],e){return q.create({name:e,providers:[{provide:yo,useValue:"platform"},{provide:th,useValue:new Set([()=>Rl=null])},...n]})}function GI(n=[]){if(Rl)return Rl;let e=$I(n);return Rl=e,tb(),WI(e),e}function WI(n){let e=n.get(Ua,null);Ct(n,()=>{e?.forEach(t=>t())})}function wb(n){let{rootComponent:e,appProviders:t,platformProviders:r,platformRef:i}=n;oe(J.BootstrapApplicationStart);try{let o=i?.injector??GI(r),s=[Qf(),Rg,...t||[]],a=new Ao({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return HI({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{oe(J.BootstrapApplicationEnd)}}function z(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function Lr(n,e=NaN){return!isNaN(parseFloat(n))&&!isNaN(Number(n))?Number(n):e}var eh=Symbol("NOT_SET"),Cb=new Set,qI=G(_({},to),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:eh,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(n){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==eh&&!Qn(this))return this.signal;try{for(let i of this.cleanup??Cb)i()}finally{this.cleanup?.clear()}let e=[];n!==void 0&&e.push(n),e.push(this.registerCleanupFn);let t=Ft(this),r;try{r=this.userFn.apply(null,e)}finally{on(this,t)}return(this.value===eh||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),nh=class extends Mo{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(e,t,r,i,o,s=null){super(e,[void 0,void 0,void 0,void 0],r,!1,o.get(Ae),s),this.scheduler=i;for(let a of bf){let l=t[a];if(l===void 0)continue;let c=Object.create(qI);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Sn(c),c.value),c.signal[ce]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();super.destroy();for(let e of this.nodes)if(e)try{for(let t of e.cleanup??Cb)t()}finally{sn(e)}}};function Ol(n,e){let t=e?.injector??u(q),r=t.get(Lt),i=t.get(vl),o=t.get(Kt,null,{optional:!0});i.impl??=t.get(_f);let s=n;typeof s=="function"&&(s={mixedReadWrite:n});let a=t.get(yi,null,{optional:!0}),l=new nh(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,t,o?.snapshot(null));return i.impl.register(l),l}function Fl(n,e){let t=Nn(n),r=e.elementInjector||ci();return new wi(t).create(r,e.projectableNodes,e.hostElement,e.environmentInjector,e.directives,e.bindings)}var xb=null;function _t(){return xb}function rh(n){xb??=n}var Wo=class{},Mi=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:()=>u(Ib),providedIn:"platform"})}return n})();var Ib=(()=>{class n extends Mi{_location;_history;_doc=u(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _t().getBaseHref(this._doc)}onPopState(t){let r=_t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=_t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Tb(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Nb(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Un(n){return n&&n[0]!=="?"?`?${n}`:n}var Pl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:()=>u(KI),providedIn:"root"})}return n})(),YI=new g(""),KI=(()=>{class n extends Pl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Tb(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+Un(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let s=this.prepareExternalUrl(i+Un(o));this._platformLocation.pushState(t,r,s)}replaceState(t,r,i,o){let s=this.prepareExternalUrl(i+Un(o));this._platformLocation.replaceState(t,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||n)(R(Mi),R(YI,8))};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ll=(()=>{class n{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=QI(Nb(Mb(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+Un(r))}normalize(t){return n.stripTrailingSlash(XI(this._basePath,Mb(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Un(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Un(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=Un;static joinWithSlash=Tb;static stripTrailingSlash=Nb;static \u0275fac=function(r){return new(r||n)(R(Pl))};static \u0275prov=j({token:n,factory:()=>ZI(),providedIn:"root"})}return n})();function ZI(){return new Ll(R(Pl))}function XI(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Mb(n){return n.replace(/\/index\.html$/,"")}function QI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var qo=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(q);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||n)(Oe(pt))};static \u0275dir=U({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ue]})}return n})();function Yo(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===e)return decodeURIComponent(o)}return null}var ih="browser";function kb(n){return n===ih}var Ko=class{_doc;constructor(e){this._doc=e}manager},Vl=(()=>{class n extends Ko{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||n)(R(V))};static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})(),Hl=new g(""),lh=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(s=>{s.manager=this});let i=t.filter(s=>!(s instanceof Vl));this._plugins=i.slice().reverse();let o=t.find(s=>s instanceof Vl);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new b(-5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||n)(R(Hl),R(M))};static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})(),oh="ng-app-id";function Ab(n){for(let e of n)e.remove()}function Rb(n,e){let t=e.createElement("style");return t.textContent=n,t}function rN(n,e,t,r){let i=n.head?.querySelectorAll(`style[${oh}="${e}"],link[${oh}="${e}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(oh),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function ah(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var ch=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,rN(t,r,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,Rb);r?.forEach(i=>this.addUsage(i,this.external,ah))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(Ab(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ab(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,Rb(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,ah(r,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===t?o.remove():i.push(o);r.elements=i}}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||n)(R(V),R(hn),R(mn,8),R(xr))};static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})(),sh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},dh=/%COMP%/g;var Fb="%COMP%",iN=`_nghost-${Fb}`,oN=`_ngcontent-${Fb}`,sN=!0,aN=new g("",{factory:()=>sN}),lN=new g("");function cN(n){return oN.replace(dh,n)}function dN(n){return iN.replace(dh,n)}function Pb(n,e){return e.map(t=>t.replace(dh,n))}var uh=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,r,i,o,s,a,l=null,c=null,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.cssVarNamespace=d??"",this.defaultRenderer=new Zo(t,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof jl?i.applyToHost(t):i instanceof Xo&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Tt.Emulated:o=new jl(l,c,r,this.appId,d,s,a,f,this.cssVarNamespace);break;case Tt.ShadowDom:return new Bl(l,t,r,s,a,this.nonce,f,this.cssVarNamespace,c);case Tt.ExperimentalIsolatedShadowDom:return new Bl(l,t,r,s,a,this.nonce,f,this.cssVarNamespace);default:o=new Xo(l,c,r,d,s,a,f,this.cssVarNamespace);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||n)(R(lh),R(Or),R(hn),R(aN),R(V),R(M),R(mn),R(Kt,8),R(lN,8))};static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})(),Zo=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,r,i,o=""){this.eventManager=e,this.doc=t,this.ngZone=r,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(sh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Ob(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){e&&(Ob(e)?e.content:e).insertBefore(t,r)}removeChild(e,t){t.remove()}selectRootElement(e,t){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new b(-5104,!1);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,i){if(i){t=i+":"+t;let o=sh[i];o?e.setAttributeNS(o,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){let i=sh[r];i?e.removeAttributeNS(i,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,r,i){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||i&(Wt.DashCase|Wt.Important)?e.style.setProperty(t,r,i&Wt.Important?"important":""):e.style[t]=r}removeStyle(e,t,r){let i=t.startsWith("--");i&&(t=t.replace("%NS%",this.cssVarNamespace)),i||r&Wt.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,r){e!=null&&(e[t]=r)}setValue(e,t){e.nodeValue=t}listen(e,t,r,i){if(typeof e=="string"&&(e=_t().getGlobalEventTarget(this.doc,e),!e))throw new b(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,i)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Ob(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Bl=class extends Zo{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,r,i,o,s,a,l,c){super(e,i,o,a,l),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=Pb(r.id,d).map(m=>m.replace(/%NS%/g,l));for(let m of d){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=m,this.shadowRoot.appendChild(h)}let f=r.getExternalStyles?.();if(f)for(let m of f){let h=ah(m,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Xo=class extends Zo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,r,i,o,s,a,l,c){super(e,o,s,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let d=r.styles,f=c?Pb(c,d):d;this.styles=f.map(m=>m.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},jl=class extends Xo{contentAttr;hostAttr;constructor(e,t,r,i,o,s,a,l,c){let d=i+"-"+r.id;super(e,t,r,o,s,a,l,c,d),this.contentAttr=cN(d),this.hostAttr=dN(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}};var Ul=class n extends Wo{supportsDOMEvents=!0;static makeCurrent(){rh(new n)}onAndCancel(e,t,r,i){return e.addEventListener(t,r,i),()=>{e.removeEventListener(t,r,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=uN();return t==null?null:fN(t)}resetBaseElement(){Qo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Yo(document.cookie,e)}},Qo=null;function uN(){return Qo=Qo||document.head.querySelector("base"),Qo?Qo.getAttribute("href"):null}function fN(n){return new URL(n,document.baseURI).pathname}var Lb=["alt","control","meta","shift"],hN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},mN={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Vb=(()=>{class n extends Ko{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,r,i,o){let s=n.parseEventName(r),a=n.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_t().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Lb.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(t,r){let i=hN[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Lb.forEach(s=>{if(s!==i){let a=mN[s];a(t)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{n.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||n)(R(V))};static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})();async function fh(n,e,t){let r=_({rootComponent:n},pN(e,t));return wb(r)}function pN(n,e){return{platformRef:e?.platformRef,appProviders:[..._N,...n?.providers??[]],platformProviders:bN}}function gN(){Ul.makeCurrent()}function yN(){return new wt}function vN(){return cf(document),document}var bN=[{provide:xr,useValue:ih},{provide:Ua,useValue:gN,multi:!0},{provide:V,useFactory:vN}];var _N=[{provide:yo,useValue:"root"},{provide:wt,useFactory:yN},{provide:Hl,useClass:Vl,multi:!0},{provide:Hl,useClass:Vb,multi:!0},uh,{provide:Or,useClass:ch},{provide:ch,useExisting:Or},lh,{provide:Ie,useExisting:uh},[]];var Dn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init();for(let[t,r]of e.headers.entries())this.headers.set(t,r),this.normalizedNames.set(t,e.normalizedNames.get(t))}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,t);let i=e.op==="a"?(this.headers.get(t)||[]).slice():[];i.push(...r),this.headers.set(t,i);break;case"d":let o=e.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(t);if(!a)return;a=a.filter(l=>s.indexOf(l)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(e,t){let r=e.toLowerCase();this.maybeSetNormalizedName(e,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(e,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=e.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(e,i)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var $l=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}},Gl=class{encodeKey(e){return Bb(e)}encodeValue(e){return Bb(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function DN(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,o)),e.decodeValue(i.slice(o+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var EN=/%(\d[a-f0-9])/gi,SN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Bb(n){return encodeURIComponent(n).replace(EN,(e,t)=>SN[t]??e)}function zl(n){return`${n}`}var _n=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Gl,e.fromString){if(e.fromObject)throw new b(2805,!1);this.map=DN(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let r=e.fromObject[t],i=Array.isArray(r)?r.map(zl):[zl(r)];this.map.set(t,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(r=>{let i=e[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[e,t]of this.cloneFrom.map.entries())this.map.set(e,t);this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=e.op==="a"?(this.map.get(e.param)||[]).slice():[];t.push(zl(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let r=(this.map.get(e.param)||[]).slice(),i=r.indexOf(zl(e.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null}}};function wN(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function jb(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Hb(n){return typeof Blob<"u"&&n instanceof Blob}function Ub(n){return typeof FormData<"u"&&n instanceof FormData}function CN(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var hh="Content-Type",zb="Accept",Gb="text/plain",Wb="application/json",xN=`${Wb}, ${Gb}, */*`,Ti=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(e,t,r,i){this.url=t,this.method=e.toUpperCase();let o;if(wN(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Dn,this.context??=new $l,!this.params)this.params=new _n,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t,l="",c=t.indexOf("#");c!==-1&&(l=t.substring(c),a=t.substring(0,c));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||jb(this.body)||Hb(this.body)||Ub(this.body)||CN(this.body)?this.body:this.body instanceof _n?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ub(this.body)?null:Hb(this.body)?this.body.type||null:jb(this.body)?null:typeof this.body=="string"?Gb:this.body instanceof _n?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Wb:null}clone(e={}){let t=e.method||this.method,r=e.url||this.url,i=e.responseType||this.responseType,o=e.keepalive??this.keepalive,s=e.priority||this.priority,a=e.cache||this.cache,l=e.mode||this.mode,c=e.redirect||this.redirect,d=e.credentials||this.credentials,f=e.referrer??this.referrer,m=e.integrity||this.integrity,h=e.referrerPolicy||this.referrerPolicy,p=e.transferCache??this.transferCache,D=e.timeout??this.timeout,C=e.body!==void 0?e.body:this.body,P=e.withCredentials??this.withCredentials,xe=e.reportProgress??this.reportProgress,ot=e.reportUploadProgress??this.reportUploadProgress,qr=e.reportDownloadProgress??this.reportDownloadProgress,Zi=e.headers||this.headers,Wn=e.params||this.params,As=e.context??this.context;return e.setHeaders!==void 0&&(Zi=Object.keys(e.setHeaders).reduce((Yr,qn)=>Yr.set(qn,e.setHeaders[qn]),Zi)),e.setParams&&(Wn=Object.keys(e.setParams).reduce((Yr,qn)=>Yr.set(qn,e.setParams[qn]),Wn)),new n(t,r,C,{params:Wn,headers:Zi,context:As,reportProgress:xe,reportUploadProgress:ot,reportDownloadProgress:qr,responseType:i,withCredentials:P,transferCache:p,keepalive:o,cache:a,priority:s,timeout:D,mode:l,redirect:c,credentials:d,referrer:f,integrity:m,referrerPolicy:h})}},ki=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ki||{}),Ai=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(e,t=200,r="OK"){this.headers=e.headers||new Dn,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.redirected=e.redirected,this.responseType=e.responseType,this.ok=this.status>=200&&this.status<300}},Wl=class n extends Ai{constructor(e={}){super(e)}type=ki.ResponseHeader;clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Jo=class n extends Ai{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=ki.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected,responseType:e.responseType??this.responseType})}},Vr=class extends Ai{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},IN=200;var NN=/^\)\]\}',?\n/,H8=1024*1024,qb=new g("",{factory:()=>null}),ql=(()=>{class n{fetchImpl=u(ph,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=u(M);destroyRef=u(Ae);maxResponseSize=u(qb);handle(t){return new B(r=>{let i=new AbortController;this.doRequest(t,i.signal,r).then(gh,s=>r.error(new Vr({error:s})));let o;return t.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{o!==void 0&&clearTimeout(o),i.abort()}})}async doRequest(t,r,i){let o=this.createRequestInit(t),s;try{let C=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,_({signal:r},o)));MN(C),i.next({type:ki.Sent}),s=await C}catch(C){i.error(new Vr({error:C,status:C.status??0,statusText:C.statusText,url:t.urlWithParams,headers:C.headers}));return}let a=new Dn(s.headers),l=s.statusText,c=s.url||t.urlWithParams,d=s.status,f=null,m=t.reportProgress||t.reportDownloadProgress;if(m&&i.next(new Wl({headers:a,status:d,statusText:l,url:c})),s.body){let C=s.headers.get("content-length"),P=C!==null?Number(C):NaN;this.maxResponseSize!==null&&Number.isFinite(P)&&P>this.maxResponseSize&&$b(this.maxResponseSize);let xe=[],ot=s.body.getReader(),qr=0,Zi,Wn,As=typeof Zone<"u"&&Zone.current,Yr=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await ot.cancel(),Yr=!0;break}let{done:Xi,value:jc}=await ot.read();if(Xi)break;if(xe.push(jc),qr+=jc.length,this.maxResponseSize!==null&&qr>this.maxResponseSize&&(await ot.cancel(),$b(this.maxResponseSize)),m){Wn=t.responseType==="text"?(Wn??"")+(Zi??=new TextDecoder).decode(jc,{stream:!0}):void 0;let qm=()=>i.next({type:ki.DownloadProgress,total:Number.isFinite(P)?P:void 0,loaded:qr,partialText:Wn});As?As.run(qm):qm()}}}),Yr){i.complete();return}let qn=this.concatChunks(xe,qr);try{let Xi=s.headers.get(hh)??"";f=this.parseBody(t,qn,Xi,d)}catch(Xi){i.error(new Vr({error:Xi,headers:new Dn(s.headers),status:s.status,statusText:s.statusText,url:s.url||t.urlWithParams}));return}}d===0&&(d=f?IN:0);let h=d>=200&&d<300,p=s.redirected,D=s.type;h?(i.next(new Jo({body:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:D})),i.complete()):i.error(new Vr({error:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:D}))}parseBody(t,r,i,o){switch(t.responseType){case"json":let s=new TextDecoder().decode(r).replace(NN,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new b(2824,!1);let r={},i;if(i=t.credentials,t.withCredentials&&(i="include"),t.headers.forEach((o,s)=>r[o]=s.join(",")),t.headers.has(zb)||(r[zb]=xN),!t.headers.has(hh)){let o=t.detectContentTypeHeader();o!==null&&(r[hh]=o)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:i,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,r){let i=new Uint8Array(r),o=0;for(let s of t)i.set(s,o),o+=s.length;return i}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),ph=class{};function gh(){}function MN(n){n.then(gh,gh)}function $b(n){throw new b(-2825,!1)}var TN=new g("",{factory:()=>!0}),kN="XSRF-TOKEN",AN=new g("",{factory:()=>kN}),RN="X-XSRF-TOKEN",ON=new g("",{factory:()=>RN}),FN=(()=>{class n{cookieName=u(AN);doc=u(V);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Yo(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Yb=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(FN),i},providedIn:"root"})}return n})();function Kb(n,e){if(!u(TN)||n.method==="GET"||n.method==="HEAD")return e(n);try{let i=u(Mi).href,{origin:o}=new URL(i),{origin:s}=new URL(n.url,o);if(o!==s)return e(n)}catch{return e(n)}let t=u(Yb).getToken(),r=u(ON);return t!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,t)})),e(n)}function PN(n,e){return e(n)}function LN(n,e,t){return(r,i)=>Ct(t,()=>e(r,o=>n(o,i)))}var Zb=new g("",{factory:()=>[Kb]}),Xb=new g(""),Qb=new g("",{factory:()=>!0});var yh=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(ql),i},providedIn:"root"})}return n})();var Yl=(()=>{class n{backend;injector;chain=null;pendingTasks=u(wo);contributeToStability=u(Qb);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Zb),...this.injector.get(Xb,[])]));this.chain=i.reduceRight((o,s)=>LN(o,s,this.injector),PN)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return w(()=>r(t,o=>this.backend.handle(o))).pipe(ri(i))}else return w(()=>r(t,i=>this.backend.handle(i)))}static \u0275fac=function(r){return new(r||n)(R(yh),R(Ee))};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vh=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(Yl),i},providedIn:"root"})}return n})();function mh(n,e){return _({body:e},n)}var Kl=(()=>{class n{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof Ti)o=t;else{let l;i.headers instanceof Dn?l=i.headers:l=new Dn(i.headers);let c;i.params&&(i.params instanceof _n?c=i.params:c=new _n({fromObject:i.params})),o=new Ti(t,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=sr(o).pipe(cd(l=>this.handler.handle(l)));if(t instanceof Ti||i.observe==="events")return s;let a=s.pipe(Fe(l=>l instanceof Jo));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(De(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new b(2806,!1);return l.body}));case"blob":return a.pipe(De(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new b(2807,!1);return l.body}));case"text":return a.pipe(De(l=>{if(l.body!==null&&typeof l.body!="string")throw new b(2808,!1);return l.body}));default:return a.pipe(De(l=>l.body))}case"response":return a;default:throw new b(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new _n().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,mh(i,r))}post(t,r,i={}){return this.request("POST",t,mh(i,r))}put(t,r,i={}){return this.request("PUT",t,mh(i,r))}static \u0275fac=function(r){return new(r||n)(R(vh))};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bh(...n){let e=[Kl,ql,Yl,{provide:vh,useExisting:Yl},{provide:yh,useFactory:()=>u(ql)},{provide:Zb,useValue:Kb,multi:!0}];for(let t of n)e.push(...t.\u0275providers);return Vt(e)}var _h=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:function(r){let i=null;return r?i=new(r||n):i=R(VN),i},providedIn:"root"})}return n})(),VN=(()=>{class n extends _h{_doc=u(V);sanitize(t,r){if(r==null)return null;switch(t){case he.NONE:return r;case he.HTML:return Ln(r,"HTML")?Yt(r):gl(this._doc,String(r)).toString();case he.STYLE:return Ln(r,"Style")?Yt(r):r;case he.SCRIPT:if(Ln(r,"Script"))return Yt(r);throw new b(5200,!1);case he.URL:return Ln(r,"URL")?Yt(r):pl(String(r));case he.RESOURCE_URL:if(Ln(r,"ResourceURL"))return Yt(r);throw new b(-5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(t){return ff(t)}bypassSecurityTrustStyle(t){return hf(t)}bypassSecurityTrustScript(t){return mf(t)}bypassSecurityTrustUrl(t){return pf(t)}bypassSecurityTrustResourceUrl(t){return gf(t)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var o_=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||n)(Oe(ye),Oe(A))};static \u0275dir=U({type:n})}return n})(),BN=(()=>{class n extends o_{static \u0275fac=(()=>{let t;return function(i){return(t||(t=gn(n)))(i||n)}})();static \u0275dir=U({type:n,features:[tt]})}return n})(),ss=new g("");var jN={provide:ss,useExisting:lt(()=>s_),multi:!0};function HN(){let n=_t()?_t().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var UN=new g(""),s_=(()=>{class n extends o_{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!HN())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||n)(Oe(ye),Oe(A),Oe(UN,8))};static \u0275dir=U({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&me("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Ce([jN]),tt]})}return n})();function Sh(n){return n==null||wh(n)===0}function wh(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Br=new g(""),a_=new g(""),zN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Qt=class{static min(e){return $N(e)}static max(e){return GN(e)}static required(e){return l_(e)}static requiredTrue(e){return WN(e)}static email(e){return qN(e)}static minLength(e){return YN(e)}static maxLength(e){return KN(e)}static pattern(e){return ZN(e)}static nullValidator(e){return Xl()}static compose(e){return m_(e)}static composeAsync(e){return p_(e)}};function $N(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function GN(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function l_(n){return Sh(n.value)?{required:!0}:null}function WN(n){return n.value===!0?null:{required:!0}}function qN(n){return Sh(n.value)||zN.test(n.value)?null:{email:!0}}function YN(n){return e=>{let t=e.value?.length??wh(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function KN(n){return e=>{let t=e.value?.length??wh(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function ZN(n){if(!n)return Xl;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(Sh(r.value))return null;let i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function Xl(n){return null}function c_(n){return n!=null}function d_(n){return Fr(n)?an(n):n}function u_(n){let e={};return n.forEach(t=>{e=t!=null?_(_({},e),t):e}),Object.keys(e).length===0?null:e}function f_(n,e){return e.map(t=>t(n))}function XN(n){return!n.validate}function h_(n){return n.map(e=>XN(e)?e:t=>e.validate(t))}function m_(n){if(!n)return null;let e=n.filter(c_);return e.length==0?null:function(t){return u_(f_(t,e))}}function Ch(n){return n!=null?m_(h_(n)):null}function p_(n){if(!n)return null;let e=n.filter(c_);return e.length==0?null:function(t){let r=f_(t,e).map(d_);return ld(r).pipe(De(u_))}}function xh(n){return n!=null?p_(h_(n)):null}function Jb(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function g_(n){return n._rawValidators}function y_(n){return n._rawAsyncValidators}function Dh(n){return n?Array.isArray(n)?n:[n]:[]}function Ql(n,e){return Array.isArray(n)?n.includes(e):n===e}function e_(n,e){let t=Dh(e);return Dh(n).forEach(i=>{Ql(t,i)||t.push(i)}),t}function t_(n,e){return Dh(e).filter(t=>!Ql(n,t))}var Jl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ch(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=xh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Fi=class extends Jl{name;get formDirective(){return null}get path(){return null}};var es="VALID",Zl="INVALID",Ri="PENDING",ts="DISABLED",zn=class{},ec=class extends zn{value;source;constructor(e,t){super(),this.value=e,this.source=t}},rs=class extends zn{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},is=class extends zn{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Oi=class extends zn{status;source;constructor(e,t){super(),this.status=e,this.source=t}},tc=class extends zn{source;constructor(e){super(),this.source=e}},Pi=class extends zn{source;constructor(e){super(),this.source=e}};function v_(n){return(ic(n)?n.validators:n)||null}function QN(n){return Array.isArray(n)?Ch(n):n||null}function b_(n,e){return(ic(e)?e.asyncValidators:n)||null}function JN(n){return Array.isArray(n)?xh(n):n||null}function ic(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function eM(n,e,t){let r=n.controls;if(!(e?Object.keys(r):r).length)throw new b(1e3,"");if(!__(r,t))throw new b(1001,"")}function tM(n,e,t){n._forEachChild((r,i)=>{if(t[i]===void 0)throw new b(-1002,"")})}var Li=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=H(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return w(this.statusReactive)}set status(e){w(()=>this.statusReactive.set(e))}_status=E(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===es}get invalid(){return this.status===Zl}get pending(){return this.status===Ri}get disabled(){return this.status===ts}get enabled(){return this.status!==ts}errors;get pristine(){return w(this.pristineReactive)}set pristine(e){w(()=>this.pristineReactive.set(e))}_pristine=E(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return w(this.touchedReactive)}set touched(e){w(()=>this.touchedReactive.set(e))}_touched=E(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(e_(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(e_(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(t_(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(t_(e,this._rawAsyncValidators))}hasValidator(e){return Ql(this._rawValidators,e)}hasAsyncValidator(e){return Ql(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(G(_({},e),{sourceControl:r})),t&&e.emitEvent!==!1&&this._events.next(new is(!0,r))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:r})}),e.onlySelf||this._parent?._updateTouched(e,r),t&&e.emitEvent!==!1&&this._events.next(new is(!1,r))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(G(_({},e),{sourceControl:r})),t&&e.emitEvent!==!1&&this._events.next(new rs(!1,r))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,r),t&&e.emitEvent!==!1&&this._events.next(new rs(!0,r))}markAsPending(e={}){this.status=Ri;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Oi(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(G(_({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ts,this.errors=null,this._forEachChild(i=>{i.disable(G(_({},e),{onlySelf:!0}))}),this._updateValue();let r=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ec(this.value,r)),this._events.next(new Oi(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(_({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=es,this._forEachChild(r=>{r.enable(G(_({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(G(_({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===es||this.status===Ri)&&this._runAsyncValidator(r,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ec(this.value,t)),this._events.next(new Oi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(G(_({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ts:es}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Ri,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let r=d_(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){let r=t?this.get(t):this;return r?.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,r){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||r)&&this._events.next(new Oi(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,r)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?ts:this.errors?Zl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ri)?Ri:this._anyControlsHaveStatus(Zl)?Zl:es}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new rs(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new is(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ic(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=QN(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=JN(this._rawAsyncValidators)}_updateHasRequiredValidator(){w(()=>this._hasRequired.set(this.hasValidator(Qt.required)))}};function __(n,e){return Object.hasOwn(n,e)}function Ih(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function D_(n){if(n.tagName!=="INPUT")return!1;let e=n.type;return e==="number"||e==="range"||e==="date"||e==="month"}function E_(n){return n.tagName==="INPUT"||n.tagName==="TEXTAREA"}function as(n,e,t,r){switch(t){case"name":n.setAttribute(e,t,r);break;case"disabled":case"readonly":case"required":r?n.setAttribute(e,t,""):n.removeAttribute(e,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?n.setAttribute(e,t,r.toString()):n.removeAttribute(e,t);break}}var Eh=class{kind;context;control;message;constructor({kind:e,context:t,control:r}){this.kind=e,this.context=t,this.control=r}};var nM=(()=>{class n{_validator=Xl;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):Xl,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,features:[Ue]})}return n})();var rM={provide:Br,useExisting:lt(()=>S_),multi:!0};var S_=(()=>{class n extends nM{required;inputName="required";normalizeInput=z;createValidator=t=>l_;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=gn(n)))(i||n)}})();static \u0275dir=U({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&ve("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Ce([rM]),tt]})}return n})();var w_=new g(""),C_=new g("",{factory:()=>iM}),iM="always";function n_(n,e,t=!0){let r=()=>{};e?.valueAccessor?.registerOnChange(r),e?.valueAccessor?.registerOnTouched(r),rc(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function nc(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function x_(n,e){let t=g_(n);e.validator!==null?n.setValidators(Jb(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let r=y_(n);e.asyncValidator!==null?n.setAsyncValidators(Jb(r,e.asyncValidator)):typeof r=="function"&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();nc(e._rawValidators,i),nc(e._rawAsyncValidators,i)}function rc(n,e){let t=!1;if(n!==null){if(e.validator!==null){let i=g_(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.validator);o.length!==i.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let i=y_(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.asyncValidator);o.length!==i.length&&(t=!0,n.setAsyncValidators(o))}}}let r=()=>{};return nc(e._rawValidators,r),nc(e._rawAsyncValidators,r),t}function I_(n,e){n==null,x_(n,e)}function oM(n,e){return rc(n,e)}function sM(n){return Object.getPrototypeOf(n.constructor)===BN}function N_(n,e){n._syncPendingControls(),e.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function Nh(n,e){if(!e)return null;Array.isArray(e);let t,r,i;return e.forEach(o=>{o.constructor===s_?t=o:sM(o)?r=o:i=o}),i||r||t||null}function aM(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var $n=class extends Jl{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Nh(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,r){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(Ae)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(bt);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new X,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof Pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),e.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ih(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof S_))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,e.setCustomControlModelInput(r.value)),this.bindControlProperty(e,i,"touched",r.touched),this.bindControlProperty(e,i,"dirty",r.dirty),this.bindControlProperty(e,i,"valid",r.valid),this.bindControlProperty(e,i,"invalid",r.invalid),this.bindControlProperty(e,i,"pending",r.pending),this.bindControlProperty(e,i,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(e,i,"required",this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let s=this._convertErrors(o);e.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,r,i){if(t[r]===i)return;t[r]=i;let o=e.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&as(this.renderer,e.nativeElement,r,i)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([r,i])=>new Eh({context:i,kind:r,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,r=E(()=>{let i=e();return i.length===0?null:i.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>t).bind(this),Me(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var os=class extends Li{constructor(e,t,r){super(v_(t),b_(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){let r=this._find(e);return r||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){w(()=>{tM(this,!0,e),Object.keys(e).forEach(r=>{eM(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(r=>{let i=this._find(r);i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e?e[i]:null,G(_({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Pi(this))}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return __(this.controls,e)?this.controls[e]:null}};var lM={provide:Fi,useExisting:lt(()=>ls)},ns=Promise.resolve(),ls=(()=>{class n extends Fi{callSetDisabledState;get submitted(){return w(this.submittedReactive)}_submitted=E(()=>this.submittedReactive());submittedReactive=H(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new os({},Ch(t),xh(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ns.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ns.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){ns.then(()=>{let r=this._findContainer(t.path),i=new os({});I_(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ns.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){ns.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),N_(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new tc(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(r){return new(r||n)(Oe(Br,10),Oe(a_,10),Oe(C_,8))};static \u0275dir=U({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&me("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ce([lM]),tt]})}return n})();function r_(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function i_(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var cM=class extends Li{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,r){super(v_(t),b_(r,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ic(t)&&(t.nonNullable||t.initialValueIsDefault)&&(i_(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){w(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Pi(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){r_(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){r_(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){i_(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var dM=n=>n instanceof cM;var uM=(()=>{class n extends Fi{callSetDisabledState;get submitted(){return w(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=E(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(rc(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){n_(t.control||null,t,!1),aM(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,N_(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new tc(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(n_(r||null,t),dM(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);I_(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&oM(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){x_(this.form,this),this._oldForm&&rc(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||n)(Oe(Br,10),Oe(a_,10),Oe(C_,8))};static \u0275dir=U({type:n,features:[tt,Ue]})}return n})();var fM={provide:Fi,useExisting:lt(()=>cs)},cs=(()=>{class n extends uM{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=gn(n)))(i||n)}})();static \u0275dir=U({type:n,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&me("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ce([fM]),tt]})}return n})();var R_=Symbol("FIELD_TREE"),Mh=0;function hM(){return Mh}function Gn(n,e){return(...t)=>{try{return Mh=e,n(...t)}finally{Mh=0}}}function mM(n){return!n}function M_(n){return n}function Jt(n){return Array.isArray(n)}function sc(n){return(typeof n=="object"||typeof n=="function")&&n!=null}var jr=Symbol(),mc=Symbol(),us=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(T_(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(r=>T_(this.predicates,r)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}},ac=class extends us{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let r=t(e);return r&&r!==mc})}},Bi=class n extends us{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,r)=>{let i=r(e);return i===void 0||i===mc?t:Jt(i)?[...t,...this.ignore?i.filter(o=>!this.ignore(o)):i]:this.ignore&&this.ignore(i)?t:[...t,i]},[])}},Th=class extends Bi{constructor(e){super(e,void 0)}},kh=class extends us{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let r=0;r<this.fns.length;r++){let i=this.fns[r](e);i!==mc&&(t=this.key.reducer.reduce(t,i))}return t}};function T_(n,e){return n.length===0?e:t=>{for(let r of n){let i=t.stateOf(r.path),o=w(i.structure.pathKeys).length-r.depth;for(let s=0;s<o;s++)i=i.structure.parent;if(!r.fn(i.context))return mc}return e(t)}}var ji=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ac(e),this.disabledReasons=new Th(e),this.readonly=new ac(e),this.syncErrors=Bi.ignoreNull(e),this.syncTreeErrors=Bi.ignoreNull(e),this.asyncErrors=Bi.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new kh(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let r=e.metadata.get(t);this.getMetadata(t).mergeIn(r)}}},lc=class{depth;constructor(e){this.depth=e}build(){return new cc(this,[],0)}},Hi=class n extends lc{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===jr){let t=this.getCurrent().children;t.size>(t.has(jr)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:Gn(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new fs(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},fs=class extends lc{logic=new ji([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(Gn(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(Gn(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(Gn(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(Gn(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(Gn(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(Gn(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(Gn(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new Hi(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}},cc=class n{builder;predicates;depth;logic;constructor(e,t,r){this.builder=e,this.predicates=t,this.depth=r,this.logic=e?pM(e,t,r):new ji([])}getChild(e){let t=this.builder?O_(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:r,predicates:i}=t[0];return new n(r,[...this.predicates,...i.map(o=>Rh(o,this.depth))],this.depth+1)}else{let r=t.map(({builder:i,predicates:o})=>new n(i,[...this.predicates,...o.map(s=>Rh(s,this.depth))],this.depth+1));return new Ah(r)}}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}},Ah=class n{all;logic;constructor(e){this.all=e,this.logic=new ji([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function O_(n,e){if(n instanceof Hi)return n.all.flatMap(({builder:t,predicate:r})=>{let i=O_(t,e);return r?i.map(({builder:o,predicates:s})=>({builder:o,predicates:[...s,r]})):i});if(n instanceof fs)return[...e!==jr&&n.children.has(jr)?[{builder:n.getChild(jr),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new b(1909,!1)}function pM(n,e,t){let r=new ji(e);if(n instanceof Hi){let i=n.all.map(({builder:o,predicate:s})=>new cc(o,s?[...e,Rh(s,t)]:e,t));for(let o of i)r.mergeIn(o.logic)}else if(n instanceof fs)r.mergeIn(n.logic);else throw new b(1909,!1);return r}function Rh(n,e){return G(_({},n),{depth:e})}var F_=Symbol("PATH"),En=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,gM);logicBuilder;constructor(e,t,r,i){this.keys=e,this.parent=r,this.keyInParent=i,this.root=t??this,r||(this.logicBuilder=Hi.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let r=e.compile();this.builder.mergeIn(r.builder,t)}static unwrapFieldPath(e){return e[F_]}static newRoot(){return new n([],void 0,void 0,void 0)}},gM={get(n,e){return e===F_?n:n.getChild(e).fieldPathProxy}},oc,ds=new Map,dc=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ds.has(this))return ds.get(this);let e=En.newRoot();ds.set(this,e);let t=oc;try{oc=e,this.schemaFn(e.fieldPathProxy)}finally{oc=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ds.clear(),e===void 0?En.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ds.clear()}}};function yM(n){return n instanceof dc||typeof n=="function"}function $h(n){if(oc!==En.unwrapFieldPath(n).root)throw new b(1908,!1)}function Ui(n,e,t){return $h(n),En.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var Hr={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:vM};function vM(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var Gh=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),uc=class{reducer;create;brand;[Gh];constructor(e,t){this.reducer=e,this.create=t}};function en(n){return new uc(n??Hr.override())}function Wh(){return en()}var qh=en(Hr.or()),Yh=Wh();var Kh=en(Hr.max()),P_=Wh();var L_=en(Hr.max()),V_=en(Hr.min()),B_=en(Hr.list());function rt(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function bM(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var Oh=class{node;constructor(e){this.node=e}rawSyncTreeErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:rt});syncErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),..._M(this.node.submitState.submissionErrors())],{equal:rt});syncValid=E(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),mM));syncTreeErrors=E(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:rt});rawAsyncErrors=E(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:rt});asyncErrors=E(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e==="pending"||e.fieldTree===this.node.fieldTree),{equal:rt});parseErrors=E(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:rt});errors=E(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!=="pending")],{equal:rt});errorSummary=E(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,r)=>[...r,...t.errorSummary()]);return w(()=>e.sort(DM)),e},{equal:rt});pending=E(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(e,t)=>t||e.validationState.pending()));status=E(()=>{if(this.shouldSkipValidation())return"valid";let e=bM(this);return this.node.structure.reduceChildren(e,(t,r)=>r==="invalid"||t.validationState.status()==="invalid"?"invalid":r==="unknown"||t.validationState.status()==="unknown"?"unknown":"valid",t=>t==="invalid")});valid=E(()=>this.status()==="valid");invalid=E(()=>this.status()==="invalid");shouldSkipValidation=E(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function _M(n){return n===void 0?[]:Jt(n)?n:[n]}function Zh(n,e){if(Jt(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function k_(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function DM(n,e){let t=k_(n),r=k_(e);return t===r?0:t===void 0||r===void 0?t===void 0?1:-1:t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Fh=en(),Ph=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=E(()=>{let r=En.unwrapFieldPath(e),i=this.node,o=hM();for(;o>0||!i.structure.logic.hasLogic(r.root.builder);)if(o--,i=i.structure.parent,i===void 0)throw new b(1900,!1);for(let s of r.keys)if(i=i.structure.getChild(s),i===void 0)throw new b(1901,!1);return i.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=E(()=>{let e=this.key();if(!Jt(w(this.node.structure.parent.value)))throw new b(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Li)throw new b(1907,!1);return t}},Lh=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Jf();e&&Al(!1);try{w(()=>Ct(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let r=this.node.logicNode.logic.getMetadata(t),i=t.create(this.node,E(()=>r.compute(this.node.context)));this.metadata.set(t,i)}}))}finally{e&&Al(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new b(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,E(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}},EM={get(n,e,t){if(e===R_)return!0;let r=n(),i=r.structure.getChild(e);if(i!==void 0)return i.fieldTree;let o=w(r.value);if(Jt(o)){if(e==="length")return r.value().length;if(e===Symbol.iterator)return()=>(r.value(),Array.prototype[Symbol.iterator].apply(r.fieldTree))}if(sc(o)&&e===Symbol.iterator)return function*(){for(let s in t)yield[s,t[s]]}},getOwnPropertyDescriptor(n,e){let t=w(n().value),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&!r.configurable&&(r.configurable=!0),r},ownKeys(n){let e=w(n().value);return typeof e=="object"&&e!==null?Reflect.ownKeys(e):[]}};function SM(n,e){let t=E(()=>n()[e()]);return t[ce]=n[ce],t.set=r=>{Object.is(w(t),r)||n.update(i=>wM(i,r,e()))},t.update=r=>{t.set(r(w(t)))},t.asReadonly=()=>t,t}function wM(n,e,t){if(Jt(n)){let r=[...n];return r[t]=e,r}else return G(_({},n),{[t]:e})}var Vi=Symbol(""),j_=E(()=>!1),fc=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=q.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,r){this.logic=e,this.node=t,this.createChildNode=r}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>w(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return w(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||w(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),r=w(this.childrenMap)?.byPropertyKey.get(t)?.reader;return r||(r=this.createReader(t)),r()}reduceChildren(e,t,r){let i=this.childrenMap();if(!i)return e;let o=e;for(let s of i.byPropertyKey.values()){if(r?.(o))break;o=t(w(s.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,r){if(e==="root")return{keyInParent:H_,isOrphaned:j_};let i=this.parent,o=r,s=E(()=>{if(i.structure.isOrphaned())return Vi;let c=i.structure.childrenMap();if(!c)return Vi;let d=c.byPropertyKey.get(o);if(d&&d.node===this.node)return o;if(t===void 0)return Vi;for(let[f,m]of c.byPropertyKey)if(m.node===this.node)return o=f;return Vi}),a=E(()=>s()===Vi);return{keyInParent:E(()=>{let c=s();if(c===Vi)throw t===void 0?new b(-1902,!1):new b(1904,!1);return c}),isOrphaned:a}}createChildrenMap(){return Hn({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,r){if(!sc(e)||!r&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let i,o=Jt(e);t!==void 0&&(o?i=xM(t,e,this.identitySymbol):i=IM(t,e));for(let s of Object.keys(e)){let a,l=e[s];if(l===void 0){t.byPropertyKey.has(s)&&(i??=_({},t),i.byPropertyKey.delete(s));continue}o&&sc(l)&&!Jt(l)&&(a=l[this.identitySymbol]??=Symbol(""));let c;a&&(t.byTrackingKey?.has(a)||(i??=_({},t),i.byTrackingKey??=new Map,i.byTrackingKey.set(a,this.createChildNode(s,a,o))),c=(i??t).byTrackingKey.get(a));let d=t.byPropertyKey.get(s);d===void 0?(i??=_({},t),i.byPropertyKey.set(s,{reader:this.createReader(s),node:c??this.createChildNode(s,a,o)})):c&&c!==d.node&&(i??=_({},t),d.node=c)}return i??t}createReader(e){return E(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}},Vh=class extends fc{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return CM}get keyInParent(){return H_}isOrphaned=j_;childrenMap;constructor(e,t,r,i,o){super(t,e,o),this.fieldManager=r,this.value=i,this.childrenMap=this.createChildrenMap()}},Bh=class extends fc{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,r,i,o,s){super(t,e,s),this.logic=t,this.parent=r,this.root=this.parent.structure.root;let a=this.createKeyOrOrphanSignals("child",i,o);this.isOrphaned=a.isOrphaned,this.keyInParent=a.keyInParent,this.pathKeys=E(()=>[...r.structure.pathKeys(),this.keyInParent()]),this.value=SM(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var CM=E(()=>[]),H_=E(()=>{throw new b(1905,!1)});function xM(n,e,t){let r,i=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let s=0;s<e.length;s++){let a=e[s];i.delete(s.toString()),o&&sc(a)&&Object.hasOwn(a,t)&&o.delete(a[t])}if(i.size>0){r??=_({},n);for(let s of i)r.byPropertyKey.delete(s)}if(o&&o.size>0){r??=_({},n);for(let s of o)r.byTrackingKey.delete(s)}return r}function IM(n,e){let t;for(let r of n.byPropertyKey.keys())e.hasOwnProperty(r)||(t??=_({},n),t.byPropertyKey.delete(r));return t}var jh=class{node;selfSubmitting=H(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Hn({source:this.node.structure.value,computation:()=>[]})}submitting=E(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},hs=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Ph(this)}fieldProxy=new Proxy(()=>this,EM);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new Lh(this),this.submitState=new jh(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){let e=this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(A_,void 0);return e||this.structure.children().map(t=>t.getBindingForFocus()).reduce(A_,void 0)}pendingSync=Hn({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(P_)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(V_)}get min(){let e=this.metadata(Yh)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(L_)}get pattern(){return this.metadata(B_)??NM}get required(){return this.metadata(qh)??MM}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||w(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){w(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){w(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[Gh]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Hn(this.value);e.rawSet=e.set,e.set=r=>{e.rawSet(r),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=r=>{t(r),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=w(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,r=e(t.signal);if(r&&(this.pendingSync.set(t),await r,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,r,i){return i.newRoot(e,t,r,i)}createStructure(e){return e.kind==="root"?new Vh(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new Bh(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,r){let i,o;return r?(i=this.pathNode.getChild(jr),o=this.structure.logic.getChild(jr)):(i=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:i,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}},NM=E(()=>[]),MM=E(()=>!1);function A_(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var Hh=class{node;selfTouched=H(!1);selfDirty=H(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=H([]);constructor(e){this.node=e}dirty=E(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,r)=>r||t.nodeState.dirty(),M_)});touched=E(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,r)=>r||t.nodeState.touched(),M_)});disabledReasons=E(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:rt});disabled=E(()=>!!this.disabledReasons().length);readonly=E(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=E(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=E(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=E(()=>{if(this.node.logicNode.logic.hasMetadata(Fh)){let t=this.node.logicNode.logic.getMetadata(Fh).compute(this.node.context);if(t)return r=>t(this.node.context,r)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=E(()=>this.hidden()||this.disabled()||this.readonly())},Uh=class{newRoot(e,t,r,i){return new hs({kind:"root",fieldManager:e,value:t,pathNode:r,logic:r.builder.build(),fieldAdapter:i})}newChild(e){return new hs(e)}createNodeState(e){return new Hh(e)}createValidationState(e){return new Oh(e)}createStructure(e,t){return e.createStructure(t)}},zh=class{injector;rootName;submitOptions;constructor(e,t,r){this.injector=e,this.rootName=t??`${this.injector.get(hn)}.form${TM++}`,this.submitOptions=r}structures=new Set;createFieldManagementEffect(e){Me(()=>{let t=new Set;this.markStructuresLive(e,t);for(let r of this.structures)t.has(r)||(this.structures.delete(r),w(()=>r.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let r of e.children())this.markStructuresLive(r.structure,t)}},TM=0,U_=new g("");function kM(n){let e,t,r;return n.length===3?[e,t,r]=n:n.length===2?yM(n[1])?[e,t]=n:[e,r]=n:[e]=n,[e,t,r]}function Xh(...n){let[e,t,r]=kM(n),i=r?.injector??u(q),o=Ct(i,()=>dc.rootCompile(t)),s=new zh(i,r?.name,r?.submission),a=r?.adapter??new Uh,l=hs.newRoot(s,e,o,a);s.createFieldManagementEffect(l.structure);let{experimentalWebMcpTool:c}=r??{};if(c){let d=Ct(i,()=>u(U_,{optional:!0}));d&&Ct(i,()=>d(l.fieldTree,{name:c.name,description:c.description}))}return l.fieldTree}async function z_(n,e){let t=w(n);if(w(t.submitState.submitting))return!1;let r=e===void 0?t.structure.root.fieldProxy:n,i={root:t.structure.root.fieldProxy,submitted:n};e=typeof e=="function"?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new b(1915,!1);t.markAsTouched();let s=e?.onInvalid,a=AM(t,e?.ignoreValidators);try{if(a){t.submitState.selfSubmitting.set(!0);let l=await w(()=>o?.(r,i));return l&&RM(t,l),!l||Jt(l)&&l.length===0}else w(()=>s?.(r,i));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function AM(n,e){switch(e){case"all":return!0;case"none":return w(n.valid);default:return!w(n.invalid)}}function RM(n,e){Jt(e)||(e=[e]);let t=new Map;for(let r of e){let i=Zh(r,n.fieldTree),o=i.fieldTree(),s=t.get(o);s||(s=[],t.set(o,s)),s.push(i)}for(let[r,i]of t)r.submitState.submissionErrors.set(i)}var hc=class{kind="compat";control;fieldTree;context;message;constructor({context:e,kind:t,control:r}){this.context=e,this.kind=t,this.control=r}};function $_(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof hc?t.context:t;return e}function G_(n,e){return n===null?[]:Object.entries(n).map(([t,r])=>new hc({context:r,kind:t,control:e}))}var OM=new g("");function pc(n,e){return n instanceof Function?n(e):n}function FM(n){return typeof n=="number"?isNaN(n):n===""||n===!1||n==null}function W_(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function K_(n,e){$h(n),En.unwrapFieldPath(n).builder.addSyncErrorRule(r=>Zh(e(r),r.fieldTree))}function PM(n){return new Qh(n)}function LM(n,e){return new Jh(n,e)}var ms=class{__brand=void 0;kind="";fieldTree;message;constructor(e){e&&Object.assign(this,e)}},Qh=class extends ms{kind="required"},Jh=class extends ms{min;kind="min";constructor(e,t){super(t),this.min=e}};var gc=class extends ms{kind="parse"};function nm(n,e,t){let r=en();Ui(n,r,i=>{if(!(t?.when&&!t.when(i)))return typeof e=="function"?e(i):e}),Ui(n,Kh,({state:i})=>i.metadata(r)()),Ui(n,Yh,()=>Kh),K_(n,i=>{let o=i.value();if(o===null||Number.isNaN(o))return;let s=i.state.metadata(r)();if(!(s===void 0||Number.isNaN(s))&&o<s)return t?.error?pc(t.error,i):LM(s,{message:pc(t?.message,i)})})}function rm(n,e){let t=Ui(n,en(),r=>e?.when?e.when(r):!0);Ui(n,qh,({state:r})=>r.metadata(t)()),K_(n,r=>{if(r.state.metadata(t)()&&FM(r.value()))return e?.error?pc(e.error,r):PM({message:pc(e?.message,r)})})}function VM(n,e,t){let r=Hn({source:n,computation:()=>[],equal:rt}),i=s=>{let a=t(s);r.set(W_(a.error)),a.value!==void 0&&e(a.value),r.set(W_(a.error))},o=()=>{r.set([])};return{errors:r.asReadonly(),setRawValue:i,reset:o}}var em=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return $_(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new b(1910,!1)}valueAccessor=null;hasValidator(e){return e===Qt.required?this.field().required():!1}updateValueAndValidity(){}},tm={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},BM=(()=>{let n={};for(let e of Object.keys(tm))n[tm[e]]=e;return n})();function im(n,e){let t=BM[e];return n[t]?.()}var om=Object.values(tm);function yc(){return{}}function Ur(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function jM(n,e,t){let r;if(Z_(n)&&t.isBadInput(n))return{error:new gc};switch(n.type){case"checkbox":return{value:n.checked};case"number":case"range":case"datetime-local":if(r=w(e),typeof r=="number"||r===null)return{value:n.value===""?null:n.valueAsNumber};break;case"date":case"month":case"time":case"week":if(r=w(e),r===null||r instanceof Date)return{value:n.valueAsDate};if(typeof r=="number")return{value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(r??=w(e),typeof r=="number"||r===null)){if(n.value==="")return{value:null};let i=Number(n.value);return Number.isNaN(i)?{error:new gc}:{value:i}}return{value:n.value}}function q_(n,e){switch(n.type){case"checkbox":n.checked=e;return;case"radio":n.checked=e===n.value;return;case"number":case"range":case"datetime-local":if(typeof e=="number"){Y_(n,e);return}else if(e===null){n.value="";return}break;case"date":case"month":case"time":case"week":if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e=="number"){Y_(n,e);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof e=="number"){n.value=isNaN(e)?"":String(e);return}if(e===null){n.value="";return}}n.value=e}function Y_(n,e){isNaN(e)?n.value="":n.valueAsNumber=e}function Z_(n){return n.tagName==="INPUT"}function HM(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function UM(n,e){let t=n.getUTCFullYear(),r=String(n.getUTCMonth()+1).padStart(2,"0");if(e==="month")return`${t}-${r}`;let i=String(n.getUTCDate()).padStart(2,"0");return`${t}-${r}-${i}`}function X_(n,e,t){return e instanceof Date&&(n==="min"||n==="max")&&(t==="date"||t==="month")?UM(e,t):e}function zM(n,e){n.listenToCustomControlModel(r=>e.state().controlValue.set(r)),n.listenToCustomControlOutput("touch",()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=yc();return()=>{let r=e.state(),i=r.controlValue();Ur(t,"controlValue",i)&&n.setCustomControlModelInput(i);for(let o of om){let s;if(o==="errors"?s=e.errors():s=im(r,o),Ur(t,o,s)&&(n.setInputOnDirectives(o,s),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let a=X_(o,s,e.nativeFormElement.type);as(e.renderer,e.nativeFormElement,o,a)}}}}function $M(n){return typeof n=="object"&&n!==null}function GM(n,e){let t=yc();e.controlValueAccessor.registerOnChange(i=>{t.controlValue=i,e.state().controlValue.set(i)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let r=e.injector.get(Br,null,{optional:!0,self:!0});if(r){let i;for(let l of r)$M(l)&&l.registerOnValidatorChange&&(i??=H(0),l.registerOnValidatorChange(()=>{i.update(c=>c+1)}));let o=r.map(l=>typeof l=="function"?l:l.validate.bind(l)),s=Qt.compose(o),a=E(()=>{i?.();let l=s?s(e.interopNgControl.control):null;return G_(l,e.interopNgControl.control)});e.parseErrorsSource.set(a)}return e.registerAsBinding({reset:()=>{let i=e.state().value();t.controlValue=i,w(()=>e.controlValueAccessor.writeValue(i))}}),()=>{let i=e.state(),o=i.controlValue();Ur(t,"controlValue",o)&&w(()=>e.controlValueAccessor.writeValue(o));for(let s of om){let a=im(i,s);if(Ur(t,s,a)){let l=n.setInputOnDirectives(s,a);s==="disabled"&&e.controlValueAccessor.setDisabledState?w(()=>e.controlValueAccessor.setDisabledState(a)):!l&&e.elementAcceptsNativeProperty(s)&&as(e.renderer,e.nativeFormElement,s,a)}}}}function WM(n,e,t){if(typeof MutationObserver!="function")return;let r=new MutationObserver(i=>{i.some(o=>qM(o))&&e()});r.observe(n,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>r.disconnect())}function qM(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function YM(n,e,t,r){let i=!1,o=e.nativeFormElement,s=VM(()=>e.state().value(),l=>e.state().controlValue.set(l),l=>jM(o,e.state().value,r));t.set(s.errors),e.onReset=()=>{s.reset();let l=e.state().value();a.controlValue=l,q_(o,l)},n.listenToDom("input",()=>s.setRawValue(void 0)),n.listenToDom("blur",()=>e.state().markAsTouched()),Z_(o)&&HM(o)&&r.watchValidity(e.destroyRef,o,()=>s.setRawValue(void 0)),e.registerAsBinding(),o.tagName==="SELECT"&&WM(o,()=>{i&&(o.value=e.state().controlValue())},e.destroyRef);let a=yc();return()=>{let l=e.state();for(let d of om){let f=im(l,d);if(Ur(a,d,f)&&(n.setInputOnDirectives(d,f),e.elementAcceptsNativeProperty(d))){let m=X_(d,f,o.type);as(e.renderer,o,d,m)}}let c=l.controlValue();Ur(a,"controlValue",c)&&q_(o,c),i=!0}}var Q_=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:t=>KM.\u0275fac(t),providedIn:"root"})}return n})(),KM=(()=>{class n extends Q_{document=u(V);cspNonce=u(mn,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,r,i){let o=r.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let s=a=>{let l=a;(l.animationName==="ng-valid"||l.animationName==="ng-invalid")&&i()};r.addEventListener("animationstart",s),t.onDestroy(()=>{r.removeEventListener("animationstart",s)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let r=this.document.createElement("style");return this.cspNonce&&(r.nonce=this.cspNonce),r.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(r):t.appendChild(r),r}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=gn(n)))(i||n)}})();static \u0275prov=j({token:n,factory:n.\u0275fac})}return n})(),ZM=Symbol(),zi=new g(""),J_=(()=>{class n{field=Xt.required({alias:"formField"});state=E(()=>this.field()());renderer=u(ye);destroyRef=u(Ae);injector=u(q);element=u(A).nativeElement;elementIsNativeFormElement=Ih(this.element);elementAcceptsTextualValues=E_(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=u(ss,{optional:!0,self:!0});config=u(OM,{optional:!0});validityMonitor=u(Q_);parseErrorsSource=H(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new em(this.state)}parseErrors=E(()=>this.parseErrorsSource()?.().map(t=>G(_({},t),{fieldTree:w(this.state).fieldTree,formField:this}))??[],{equal:rt});errors=E(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:rt});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Nh(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([i,o])=>[i,E(()=>o(this))]);if(t.length===0)return;let r=yc();Ol({write:()=>{for(let[i,o]of t){let s=o();Ur(r,i,s)&&(s?this.renderer.addClass(this.element,i):this.renderer.removeClass(this.element,i))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new b(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=r=>t.focus(r)),t?.reset&&(this.resetter=()=>t.reset()),Me(r=>{let i=this.state();i.nodeState.formFieldBindings.update(o=>[...o,this]),r(()=>{i.nodeState.formFieldBindings.update(o=>o.filter(s=>s!==this))})},{injector:this.injector})}[ZM];\u0275ngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=GM(t,this);else if(t.customControl)this.\u0275ngControlUpdate=zM(t,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=YM(t,this,this.parseErrorsSource,this.validityMonitor);else throw new b(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case"min":case"max":return this._elementAcceptsMinMax??=D_(this.element);case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ce([{provide:zi,useExisting:n},{provide:$n,useFactory:()=>u(n).interopNgControl},{provide:w_,useFactory:()=>u(zi,{self:!0})}]),Cl("formField")]})}return n})(),eD=(()=>{class n{fieldTree=Xt.required({alias:"formRoot"});onSubmit(t){t.preventDefault(),w(()=>{let r=this.fieldTree();r().structure.fieldManager.submitOptions&&z_(r)})}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(r,i){r&1&&me("submit",function(s){return i.onSubmit(s)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return n})();function ps(n){return n.buttons===0||n.detail===0}function gs(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var sm;function tD(){if(sm==null){let n=typeof document<"u"?document.head:null;sm=!!(n&&(n.createShadowRoot||n.attachShadow))}return sm}function am(n){if(tD()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Ve(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var lm;try{lm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{lm=!1}var be=(()=>{class n{_platformId=u(xr);isBrowser=this._platformId?kb(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||lm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var ys;function nD(){if(ys==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ys=!0}))}finally{ys=ys||!1}return ys}function $i(n){return nD()?n:!!n.capture}function zr(n,e=0){return rD(n)?Number(n):arguments.length===2?e:0}function rD(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function it(n){return n instanceof A?n.nativeElement:n}var iD=new g("cdk-input-modality-detector-options"),oD={ignoreKeys:[18,17,224,91,16]},sD=650,cm={passive:!0,capture:!0},aD=(()=>{class n{_platform=u(be);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new rr(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ve(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<sD||(this._modality.next(ps(t)?"keyboard":"mouse"),this._mostRecentTarget=Ve(t))};_onTouchstart=t=>{if(gs(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ve(t)};constructor(){let t=u(M),r=u(V),i=u(iD,{optional:!0});if(this._options=_(_({},oD),i),this.modalityDetected=this._modality.pipe(hd(1)),this.modalityChanged=this.modalityDetected.pipe(aa()),this._platform.isBrowser){let o=u(Ie).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,cm),o.listen(r,"mousedown",this._onMousedown,cm),o.listen(r,"touchstart",this._onTouchstart,cm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),vs=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(vs||{}),lD=new g("cdk-focus-monitor-default-options"),vc=$i({passive:!0,capture:!0}),dm=(()=>{class n{_ngZone=u(M);_platform=u(be);_inputModalityDetector=u(aD);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(V);_stopInputModalityDetector=new x;constructor(){let t=u(lD,{optional:!0});this._detectionMode=t?.detectionMode||vs.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=Ve(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=it(t);if(!this._platform.isBrowser||i.nodeType!==1)return sr();let o=am(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new x,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let r=it(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=it(t),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===vs.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===vs.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?sD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=Ve(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,vc),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,vc)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(We(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vc),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var bc=new WeakMap,Ze=(()=>{class n{_appRef;_injector=u(q);_environmentInjector=u(Ee);load(t){let r=this._appRef=this._appRef||this._injector.get(kt),i=bc.get(r);i||(i={loaders:new Set,refs:[]},bc.set(r,i),r.onDestroy(()=>{bc.get(r)?.refs.forEach(o=>o.destroy()),bc.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(Fl(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var um=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),_c;function XM(){if(_c===void 0&&(_c=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{_c=n.trustedTypes.createPolicy("angular#components",{createHTML:e=>e})}catch(e){console.error(e)}}return _c}function QM(n){return XM()?.createHTML(n)||n}function cD(n,e,t){let r=t.sanitize(he.HTML,e);n.innerHTML=QM(r||"")}function fm(n){return Array.isArray(n)?n:[n]}var dD=new Set,$r,hm=(()=>{class n{_platform=u(be);_nonce=u(mn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):eT}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&JM(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function JM(n,e){if(!dD.has(n))try{$r||($r=document.createElement("style"),e&&$r.setAttribute("nonce",e),$r.setAttribute("type","text/css"),document.head.appendChild($r)),$r.sheet&&($r.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),dD.add(n))}catch(t){console.error(t)}}function eT(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var uD=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),fD=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),tT=0,mm=(()=>{class n{_ngZone=u(M);_defaultOptions=u(fD,{optional:!0});_liveElement;_document=u(V);_sanitizer=u(_h);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=u(uD,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...r){let i=this._defaultOptions,o,s;return r.length===1&&typeof r[0]=="number"?s=r[0]:[o,s]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),s==null&&i&&(s=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:cD(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",r=this._document.getElementsByClassName(t),i=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(t),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${tT++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(t){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");s?s.indexOf(t)===-1&&o.setAttribute("aria-owns",s+" "+t):o.setAttribute("aria-owns",t)}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var nT=200,Dc=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(e,t){let r=typeof t?.debounceInterval=="number"?t.debounceInterval:nT;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(pd(t=>this._pressedLetters.push(t)),dd(e),Fe(()=>this._pressedLetters.length>0),De(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function tn(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ec=class{_items;_activeItemIndex=H(-1);_activeItem=H(null);_wrap=!1;_typeaheadSubscription=X.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof Mr?this._itemChangesSubscription=e.changes.subscribe(r=>this._itemsChanged(r.toArray())):He(e)&&(this._effectRef=Me(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new x;change=new x;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Dc(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!e[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||tn(e,"shiftKey"))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),r=typeof e=="number"?e:t.indexOf(e),i=t[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let r=1;r<=t.length;r++){let i=(this._activeItemIndex()+e*r+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let r=this._getItemsArray();if(r[e]){for(;this._skipPredicateFn(r[e]);)if(e+=t,!r[e])return;this.setActiveItem(e)}}_getItemsArray(){return He(this._items)?this._items():this._items instanceof Mr?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let r=e.indexOf(t);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var bs=class extends Ec{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var gD=new Map,Be=class n{_appId=u(hn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!=="ng"&&(e+=this._appId);let r=gD.get(e);return r===void 0?r=0:r++,gD.set(e,r),`${e}${t?n._infix+"-":""}${r}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})};function ym(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Gi,yD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function vm(){if(Gi)return Gi;if(typeof document!="object"||!document)return Gi=new Set(yD),Gi;let n=document.createElement("input");return Gi=new Set(yD.filter(e=>(n.setAttribute("type",e),n.type===e))),Gi}var rT=new g("MATERIAL_ANIMATIONS"),vD=null;function iT(){return u(rT,{optional:!0})?.animationsDisabled||u(Eo,{optional:!0})==="NoopAnimations"?"di-disabled":(vD??=u(hm).matchMedia("(prefers-reduced-motion)").matches,vD?"reduced-motion":"enabled")}function Xe(){return iT()!=="enabled"}function ke(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Wi(n){return n!=null&&`${n}`!="false"}var Dt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Dt||{}),bm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Dt.HIDDEN;constructor(e,t,r,i=!1){this._renderer=e,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},bD=$i({passive:!0,capture:!0}),_m=class{_events=new Map;addHandler(e,t,r,i){let o=this._events.get(t);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,bD)})}removeHandler(e,t,r){let i=this._events.get(e);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,bD)))}_delegateEventHandler=e=>{let t=Ve(e);t&&this._events.get(e.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(e))})}},_s={enterDuration:225,exitDuration:150},oT=800,_D=$i({passive:!0,capture:!0}),DD=["mousedown","touchstart"],ED=["mouseup","mouseleave","touchend","touchcancel"],sT=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Ds=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _m;constructor(e,t,r,i,o){this._target=e,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=it(r)),o&&o.get(Ze).load(sT)}fadeInRipple(e,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},_s),r.animation);r.centered&&(e=i.left+i.width/2,t=i.top+i.height/2);let s=r.radius||aT(e,t,i),a=e-i.left,l=t-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,h=f.transitionDuration,p=m==="none"||h==="0s"||h==="0s, 0s"||i.width===0&&i.height===0,D=new bm(this,d,r,p);d.style.transform="scale3d(1, 1, 1)",D.state=Dt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=D);let C=null;return!p&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{C&&(C.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(D)},xe=()=>this._destroyRipple(D),ot=setTimeout(xe,c+100);d.addEventListener("transitionend",P),d.addEventListener("transitioncancel",xe),C={onTransitionEnd:P,onTransitionCancel:xe,fallbackTimer:ot}}),this._activeRipples.set(D,C),(p||!c)&&this._finishRippleTransition(D),D}fadeOutRipple(e){if(e.state===Dt.FADING_OUT||e.state===Dt.HIDDEN)return;let t=e.element,r=_(_({},_s),e.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",e.state=Dt.FADING_OUT,(e._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=it(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,DD.forEach(r=>{n._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ED.forEach(t=>{this._triggerElement.addEventListener(t,this,_D)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===Dt.FADING_IN?this._startFadeOutTransition(e):e.state===Dt.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:r}=e.config;e.state=Dt.VISIBLE,!r&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=Dt.HIDDEN,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=ps(e),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+oT;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!gs(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===Dt.VISIBLE||e.config.terminateOnPointerUp&&e.state===Dt.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(DD.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(ED.forEach(t=>e.removeEventListener(t,this,_D)),this._pointerUpEventsRegistered=!1))}};function aT(n,e,t){let r=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),i=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(r*r+i*i)}var Dm=new g("mat-ripple-global-options"),Sc=(()=>{class n{_elementRef=u(A);_animationsDisabled=Xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=u(M),r=u(be),i=u(Dm,{optional:!0}),o=u(q);this._globalOptions=i||{},this._rippleRenderer=new Ds(this,t,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,i){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,_(_({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var lT={capture:!0},cT=["focus","mousedown","mouseenter","touchstart"],Em="mat-ripple-loader-uninitialized",Sm="mat-ripple-loader-class-name",SD="mat-ripple-loader-centered",wc="mat-ripple-loader-disabled",wD=(()=>{class n{_document=u(V);_animationsDisabled=Xe();_globalRippleOptions=u(Dm,{optional:!0});_platform=u(be);_ngZone=u(M);_injector=u(q);_eventCleanups;_hosts=new Map;constructor(){let t=u(Ie).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>cT.map(r=>t.listen(this._document,r,this._onInteraction,lT)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(Em,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(Sm))&&t.setAttribute(Sm,r.className||""),r.centered&&t.setAttribute(SD,""),r.disabled&&t.setAttribute(wc,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute(wc,""):t.removeAttribute(wc)}_onInteraction=t=>{let r=Ve(t);if(r instanceof HTMLElement){let i=r.closest(`[${Em}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(Sm)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??_s.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??_s.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(wc),rippleConfig:{centered:t.hasAttribute(SD),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Ds(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:a,renderer:l,hasSetUpEvents:c}),t.removeAttribute(Em)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var qi=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var dT=new g("MAT_BUTTON_CONFIG");function CD(n){return n==null?void 0:Lr(n)}var xD=(()=>{class n{_elementRef=u(A);_ngZone=u(M);_animationsDisabled=Xe();_config=u(dT,{optional:!0});_focusMonitor=u(dm);_cleanupClick;_renderer=u(ye);_rippleLoader=u(wD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Xt(!1,{transform:z});constructor(){u(Ze).load(qi);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(ve("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),bn(i.color?"mat-"+i.color:""),ie("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",z],disabled:[2,"disabled","disabled",z],ariaDisabled:[2,"aria-disabled","ariaDisabled",z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",z],tabIndex:[2,"tabIndex","tabIndex",CD],_tabindex:[2,"tabindex","_tabindex",CD],showProgress:[1,"showProgress"]}})}return n})();var uT=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(V)}),fT=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ID(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?fT.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var nn=(()=>{class n{get value(){return this.valueSignal()}valueSignal=H("ltr");change=new K;constructor(){let t=u(uT,{optional:!0});if(t){let r=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(ID(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var hT=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],mT=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function pT(n,e){n&1&&(Ye(0,"div",2),ee(1,3),Ke())}var ND=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),MD=(()=>{class n extends xD{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=gT(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?ND.get(this._appearance):null,o=ND.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[tt],ngContentSelectors:mT,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Te(hT),Zt(0,"span",0),ee(1),Ye(2,"span",1),ee(3,1),Ke(),ee(4,2),ue(5,pT,2,0,"div",2),Zt(6,"span",3)(7,"span",4)),r&2&&(ie("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab),S(5),fe(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
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
`],encapsulation:2})}return n})();function gT(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var yT=["*"],TD=(()=>{class n{labelPosition="after";static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:yT,decls:1,vars:0,template:function(r,i){r&1&&(Te(),ee(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var vT=["input"],bT=["label"],_T=["*"],wm={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},DT=new g("mat-checkbox-default-options",{providedIn:"root",factory:()=>wm}),ze=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(ze||{}),Cm=class{source;checked},kD=(()=>{class n{_elementRef=u(A);_changeDetectorRef=u(bt);_ngZone=u(M);_animationsDisabled=Xe();_options=u(DT,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let r=new Cm;return r.source=this,r.checked=t,r}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new K;indeterminateChange=new K;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ze.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ze).load(qi);let t=u(new Ni("tabindex"),{optional:!0});this._options=this._options||wm,this.color=this._options.color||wm.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=u(Be).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let r=t!=this._indeterminate();this._indeterminate.set(t),r&&(t?this._transitionCheckState(ze.Indeterminate):this._transitionCheckState(this.checked?ze.Checked:ze.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=H(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let r=this._currentCheckState,i=this._getAnimationTargetElement();if(!(r===t||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(r,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!=="noop"?(this.indeterminate&&t!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ze.Checked:ze.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,r){if(this._animationsDisabled)return"";switch(t){case ze.Init:if(r===ze.Checked)return this._animationClasses.uncheckedToChecked;if(r==ze.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ze.Unchecked:return r===ze.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ze.Checked:return r===ze.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ze.Indeterminate:return r===ze.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){let r=this._inputElement;r&&(r.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(t){t.target&&this._labelElement.nativeElement.contains(t.target)&&t.stopPropagation()}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-checkbox"]],viewQuery:function(r,i){if(r&1&&yt(vT,5)(bT,5),r&2){let o;ne(o=re())&&(i._inputElement=o.first),ne(o=re())&&(i._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(r,i){r&2&&(At("id",i.id),ve("tabindex",null)("aria-label",null)("aria-labelledby",null),bn(i.color?"mat-"+i.color:"mat-accent"),ie("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",z],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",z],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",z],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?void 0:Lr(t)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",z],checked:[2,"checked","checked",z],disabled:[2,"disabled","disabled",z],indeterminate:[2,"indeterminate","indeterminate",z]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ce([{provide:ss,useExisting:lt(()=>n),multi:!0},{provide:Br,useExisting:n,multi:!0}]),Ue],ngContentSelectors:_T,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(r,i){if(r&1&&(Te(),v(0,"div",3),me("click",function(s){return i._preventBubblingFromLabel(s)}),v(1,"div",4,0)(3,"div",5),me("click",function(){return i._onTouchTargetClick()}),y(),v(4,"input",6,1),me("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(s){return i._onInteractionEvent(s)}),y(),ae(6,"div",7),v(7,"div",8),gi(),v(8,"svg",9),ae(9,"path",10),y(),Ba(),ae(10,"div",11),y(),ae(11,"div",12),y(),v(12,"label",13,2),ee(14),y()()),r&2){let o=vt(2);Y("labelPosition",i.labelPosition),S(4),ie("mdc-checkbox--selected",i.checked),Y("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),ve("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),S(7),Y("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),S(),Y("for",i.inputId)}},dependencies:[Sc,TD],styles:[`.mdc-checkbox {
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
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
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
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
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
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
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
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Cc=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(r=>this._trackTile(r))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new xm(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,r=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(t);continue}r=this._findGapEndIndex(t),this.columnIndex=t+1}while(r-t<e||r==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let r=0;r<t.colspan;r++)this.tracker[e+r]=t.rowspan}},xm=class{row;col;constructor(e,t){this.row=e,this.col=t}};var AD=["*"];var ST=`.mat-grid-list {
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
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
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
`,RD=new g("MAT_GRID_LIST"),Tm=(()=>{class n{_element=u(A);_gridList=u(RD,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(zr(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(zr(t))}_setStyle(t,r){this._element.nativeElement.style[t]=r}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,i){r&2&&ve("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:AD,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,i){r&1&&(Te(),Ye(0,"div",0),ee(1),Ke())},styles:[`.mat-grid-list {
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
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
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
`],encapsulation:2})}return n})();var wT=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,Es=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,r,i){this._gutterSize=OD(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=r,this._direction=i}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":Gr(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,r){let i=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,r,i,o),this.setRowStyles(e,t,i,o)}setColStyles(e,t,r,i){let o=this.getBaseTileSize(r,i),s=this._direction==="rtl"?"right":"left";e._setStyle(s,this.getTilePosition(o,t)),e._setStyle("width",Gr(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},Im=class extends Es{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,r,i){super.init(e,t,r,i),this.fixedRowHeight=OD(this.fixedRowHeight),wT.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",Gr(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",Gr(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},Nm=class extends Es{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,r,i){let o=r/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,i),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",Gr(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",Gr(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},Mm=class extends Es{setRowStyles(e,t){let r=100/this._rowspan,i=(this._rows-1)/this._rows,o=this.getBaseTileSize(r,i);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",Gr(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function Gr(n){return`calc(${n})`}function OD(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var CT="fit",FD=(()=>{class n{_element=u(A);_dir=u(nn,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(zr(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let r=`${t??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===CT?this._tileStyler=new Mm:t&&t.indexOf(":")>-1?this._tileStyler=new Nm(t):this._tileStyler=new Im(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Cc);let t=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,t,this.cols,i),r.forEach((o,s)=>{let a=t.positions[s];this._tileStyler.setStyle(o,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-grid-list"]],contentQueries:function(r,i,o){if(r&1&&jn(o,Tm,5),r&2){let s;ne(s=re())&&(i._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,i){r&2&&ve("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Ce([{provide:RD,useExisting:n}])],ngContentSelectors:AD,decls:2,vars:0,template:function(r,i){r&1&&(Te(),Ye(0,"div"),ee(1),Ke())},styles:[ST],encapsulation:2})}return n})();var xT=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),IT={passive:!0},PD=(()=>{class n{_platform=u(be);_ngZone=u(M);_renderer=u(Ie).createRenderer(null,null);_styleLoader=u(Ze);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return ir;this._styleLoader.load(xT);let r=it(t),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new x,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,IT)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(t){let r=it(t),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((t,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var LD=new g("MAT_INPUT_VALUE_ACCESSOR");var km=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new B(t=>{let r=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),r.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Fe(t=>t.some(r=>r.target===e)),ca({bufferSize:1,refCount:!0}),We(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},VD=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=u(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new km(i)),this._observers.get(i).observe(t)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var NT=["notch"],MT=["*"],BD=["iconPrefixContainer"],jD=["textPrefixContainer"],HD=["iconSuffixContainer"],UD=["textSuffixContainer"],TT=["textField"],kT=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],AT=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function RT(n,e){n&1&&ae(0,"span",21)}function OT(n,e){if(n&1&&(v(0,"label",20),ee(1,1),ue(2,RT,1,0,"span",21),y()),n&2){let t=we(2);Y("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),ve("for",t._control.disableAutomaticLabeling?null:t._control.id),S(2),fe(!t.hideRequiredMarker&&t._control.required?2:-1)}}function FT(n,e){if(n&1&&ue(0,OT,3,5,"label",20),n&2){let t=we();fe(t._hasFloatingLabel()?0:-1)}}function PT(n,e){n&1&&ae(0,"div",7)}function LT(n,e){}function VT(n,e){if(n&1&&gt(0,LT,0,0,"ng-template",13),n&2){we(2);let t=vt(1);Y("ngTemplateOutlet",t)}}function BT(n,e){if(n&1&&(v(0,"div",9),ue(1,VT,1,1,null,13),y()),n&2){let t=we();Y("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),S(),fe(t._forceDisplayInfixLabel()?-1:1)}}function jT(n,e){n&1&&(v(0,"div",10,2),ee(2,2),y())}function HT(n,e){n&1&&(v(0,"div",11,3),ee(2,3),y())}function UT(n,e){}function zT(n,e){if(n&1&&gt(0,UT,0,0,"ng-template",13),n&2){we();let t=vt(1);Y("ngTemplateOutlet",t)}}function $T(n,e){n&1&&(v(0,"div",14,4),ee(2,4),y())}function GT(n,e){n&1&&(v(0,"div",15,5),ee(2,5),y())}function WT(n,e){n&1&&ae(0,"div",16)}function qT(n,e){n&1&&(v(0,"div",18),ee(1,6),y())}function YT(n,e){if(n&1&&(v(0,"mat-hint",22),F(1),y()),n&2){let t=we(2);Y("id",t._hintLabelId),S(),Rt(t.hintLabel)}}function KT(n,e){if(n&1&&(v(0,"div",19),ue(1,YT,2,2,"mat-hint",22),ee(2,7),ae(3,"div",23),ee(4,8),y()),n&2){let t=we();S(),fe(t.hintLabel?1:-1)}}var Ss=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["mat-label"]]})}return n})(),KD=new g("MatError"),Rm=(()=>{class n{id=u(Be).getId("mat-mdc-error-");static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(r,i){r&2&&At("id",i.id)},inputs:{id:"id"},features:[Ce([{provide:KD,useExisting:n}])]})}return n})(),Am=(()=>{class n{align="start";id=u(Be).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(At("id",i.id),ve("align",null),ie("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),ZT=new g("MatPrefix");var XT=new g("MatSuffix");var ZD=new g("FloatingLabelParent"),zD=(()=>{class n{_elementRef=u(A);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(VD);_ngZone=u(M);_parent=u(ZD);_resizeSubscription=new X;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return QT(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function QT(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let r=t.scrollWidth;return t.remove(),r}var $D="mdc-line-ripple--active",xc="mdc-line-ripple--deactivating",GD=(()=>{class n{_elementRef=u(A);_cleanupTransitionEnd;constructor(){let t=u(M),r=u(ye);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(xc),t.add($D)}deactivate(){this._elementRef.nativeElement.classList.add(xc)}_handleTransitionEnd=t=>{let r=this._elementRef.nativeElement.classList,i=r.contains(xc);t.propertyName==="opacity"&&i&&r.remove($D,xc)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),WD=(()=>{class n{_elementRef=u(A);_ngZone=u(M);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,r=t.querySelector(".mdc-floating-label");r?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let r=this._notch.nativeElement;!this.open||!t?r.style.width="":r.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&yt(NT,5),r&2){let o;ne(o=re())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&ie("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:MT,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Te(),Zt(0,"div",1),Ye(1,"div",2,0),ee(3),Ke(),Zt(4,"div",3))},encapsulation:2})}return n})(),ws=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n})}return n})();var Cs=new g("MatFormField"),JT=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),qD="fill",ek="auto",YD="fixed",tk="translateY(-50%)",Om=(()=>{class n{_elementRef=u(A);_changeDetectorRef=u(bt);_platform=u(be);_idGenerator=u(Be);_ngZone=u(M);_defaults=u(JT,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Go("iconPrefixContainer");_textPrefixContainerSignal=Go("textPrefixContainer");_iconSuffixContainerSignal=Go("iconSuffixContainer");_textSuffixContainerSignal=Go("textSuffixContainer");_prefixSuffixContainers=E(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Sb(Ss);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Wi(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ek}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let r=t||this._defaults?.appearance||qD;this._appearanceSignal.set(r)}_appearanceSignal=H(qD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||YD}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||YD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Xe();constructor(){let t=this._defaults,r=u(nn);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Me(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=E(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let r=this._control,i="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(i+t.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(lr([void 0,void 0]),De(()=>[r.errorState,r.userAriaDescribedBy]),la(),Fe(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(We(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ar(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Ol({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=E(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let r=this._control?this._control.ngControl:null;return r&&r[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||t;i=t.concat(r.filter(s=>s&&!o.includes(s)))}else i=t;this._control.setDescribedByIds(i),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${tk} translateX(${h}))`,D=s+a+l+c;return[p,D]}_writeOutlinedLabelStyles(t){if(t!==null){let[r,i]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let r=t.getRootNode();return r&&r!==t}return document.documentElement.contains(t)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(Nl(o,i._labelChild,Ss,5),jn(o,ws,5)(o,ZT,5)(o,XT,5)(o,KD,5)(o,Am,5)),r&2){Tl();let s;ne(s=re())&&(i._formFieldControl=s.first),ne(s=re())&&(i._prefixChildren=s),ne(s=re())&&(i._suffixChildren=s),ne(s=re())&&(i._errorChildren=s),ne(s=re())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(Ml(i._iconPrefixContainerSignal,BD,5)(i._textPrefixContainerSignal,jD,5)(i._iconSuffixContainerSignal,HD,5)(i._textSuffixContainerSignal,UD,5),yt(TT,5)(BD,5)(jD,5)(HD,5)(UD,5)(zD,5)(WD,5)(GD,5)),r&2){Tl(4);let o;ne(o=re())&&(i._textField=o.first),ne(o=re())&&(i._iconPrefixContainer=o.first),ne(o=re())&&(i._textPrefixContainer=o.first),ne(o=re())&&(i._iconSuffixContainer=o.first),ne(o=re())&&(i._textSuffixContainer=o.first),ne(o=re())&&(i._floatingLabel=o.first),ne(o=re())&&(i._notchedOutline=o.first),ne(o=re())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&ie("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ce([{provide:Cs,useExisting:n},{provide:ZD,useExisting:n}])],ngContentSelectors:AT,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Te(kT),gt(0,FT,1,1,"ng-template",null,0,Pr),v(2,"div",6,1),me("click",function(s){return i._control.onContainerClick(s)}),ue(4,PT,1,0,"div",7),v(5,"div",8),ue(6,BT,2,2,"div",9),ue(7,jT,3,0,"div",10),ue(8,HT,3,0,"div",11),v(9,"div",12),ue(10,zT,1,1,null,13),ee(11),y(),ue(12,$T,3,0,"div",14),ue(13,GT,3,0,"div",15),y(),ue(14,WT,1,0,"div",16),y(),v(15,"div",17),ue(16,qT,2,0,"div",18)(17,KT,5,1,"div",19),y()),r&2){let o;S(2),ie("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),S(2),fe(!i._hasOutline()&&!i._control.disabled?4:-1),S(2),fe(i._hasOutline()?6:-1),S(),fe(i._hasIconPrefix?7:-1),S(),fe(i._hasTextPrefix?8:-1),S(2),fe(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),S(2),fe(i._hasTextSuffix?12:-1),S(),fe(i._hasIconSuffix?13:-1),S(),fe(i._hasOutline()?-1:14),S(),ie("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();S(),fe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[zD,WD,qo,GD,Am],styles:[`.mdc-text-field {
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
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
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

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
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

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
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
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
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
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
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
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})}return n})();var Ic=(()=>{class n{isErrorState(t,r){return!!(t&&t.invalid&&(t.touched||r&&r.submitted))}isSignalErrorState(t){if(!t)return!1;let r=t().invalid(),i=t().touched();return r&&i}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Yi=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(e,t,r,i,o){this._defaultMatcher=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,t?He(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let e=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==e&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(e){if(this.formField&&e?.isSignalErrorState)return e.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return e?.isErrorState(r,t)??!1}};var nk=["button","checkbox","file","hidden","image","radio","range","reset","submit"],rk=new g("MAT_INPUT_CONFIG"),XD=(()=>{class n{_elementRef=u(A);_platform=u(be);ngControl=u($n,{optional:!0,self:!0});_autofillMonitor=u(PD);_ngZone=u(M);_formField=u(Cs,{optional:!0});_renderer=u(ye);_uid=u(Be).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(rk,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Wi(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Qt.required)??!1}set required(t){this._required=Wi(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&vm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Wi(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>vm().has(t));constructor(){let t=u(ls,{optional:!0}),r=u(cs,{optional:!0}),i=u(Ic),o=u(LD,{optional:!0,self:!0}),s=u(zi,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();o?He(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Yi(i,s||this.ngControl,r,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Me(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=t,t?r.setAttribute("placeholder",t):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){nk.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,r=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let r=t.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&me("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(At("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),ve("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),ie("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",z]},exportAs:["matInput"],features:[Ce([{provide:ws,useExisting:n}]),Ue]})}return n})();var xs=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new x;bulk={select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)};constructor(e=!1,t,r=!0,i){this._multiple=e,this._emitChanges=r,this.compareWith=i,t&&t.length&&(e?t.forEach(o=>this._markSelected(o)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(r=>this._markSelected(r));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(r=>this._unmarkSelected(r));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);let t=this.selected,r=new Set(e.map(o=>this._getConcreteValue(o)));e.forEach(o=>this._markSelected(o)),t.filter(o=>!r.has(this._getConcreteValue(o,r))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let r of t)if(this.compareWith(e,r))return r;return e}else return e}};var ik=20,QD=(()=>{class n{_ngZone=u(M);_platform=u(be);_renderer=u(Ie).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let r=this.scrollContainers.get(t);r&&(r.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ik){return this._platform.isBrowser?new B(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(sa(t)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):sr()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(t,r){let i=this.getAncestorScrollContainers(t);return this.scrolled(r).pipe(Fe(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&r.push(o)}),r}_targetContainsElement(t,r){let i=it(r),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var ok=20,Is=(()=>{class n{_platform=u(be);_listeners;_viewportSize=null;_change=new x;_document=u(V);constructor(){let t=u(M),r=u(Ie).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,r=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect(),s=-o.top||t.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||t.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(t=ok){return t>0?this._change.pipe(sa(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Ns=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},Fm=class extends Ns{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,r,i,o,s){super(),this.component=e,this.viewContainerRef=t,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=s||null}},Ms=class extends Ns{templateRef;viewContainerRef;context;injector;constructor(e,t,r,i){super(),this.templateRef=e,this.viewContainerRef=t,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},Pm=class extends Ns{element;constructor(e){super(),this.element=e instanceof A?e.nativeElement:e}},Lm=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof Fm)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Ms)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Pm)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Nc=class extends Lm{outletElement;_appRef;_defaultInjector;constructor(e,t,r){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=r}attachComponentPortal(e){let t;if(e.viewContainerRef){let r=e.injector||e.viewContainerRef.injector,i=r.get(kr,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let r=this._appRef,i=e.injector||this._defaultInjector||q.NULL,o=i.get(Ee,r.injector);t=Fl(e.component,{elementInjector:i,environmentInjector:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),r.attachView(t.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,r=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(r);i!==-1&&t.remove(i)}),this._attachedPortal=e,r}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(r,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Mc=class{enable(){}disable(){}attach(){}};function Vm(n,e){return e.some(t=>{let r=n.bottom<t.top,i=n.top>t.bottom,o=n.right<t.left,s=n.left>t.right;return r||i||o||s})}function JD(n,e){return e.some(t=>{let r=n.top<t.top,i=n.bottom>t.bottom,o=n.left<t.left,s=n.right>t.right;return r||i||o||s})}function Oc(n,e){return new Tc(n.get(QD),n.get(Is),n.get(M),e)}var Tc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,r,i){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=r,this._config=i}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Vm(t,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ts=class{positionStrategy;scrollStrategy=new Mc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let r of t)e[r]!==void 0&&(this[r]=e[r])}}};var kc=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var oE=(()=>{class n{_attachedOverlays=[];_document=u(V);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let r=this._attachedOverlays.indexOf(t);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,r,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),sE=(()=>{class n extends oE{_ngZone=u(M);_renderer=u(Ie).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),aE=(()=>{class n extends oE{_platform=u(be);_ngZone=u(M);_renderer=u(Ie).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Ve(t)};_clickListener=t=>{let r=Ve(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(eE(a.overlayElement,r)||eE(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function eE(n,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,r=e;for(;r;){if(r===n)return!0;r=t&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var lE=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})(),cE=(()=>{class n{_platform=u(be);_containerElement;_document=u(V);_styleLoader=u(Ze);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||ym()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(t),ym()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(lE)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Bm=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,r,i){this._renderer=t,this._ngZone=r,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function jm(n){return n&&n.nodeType===1}var Ac=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=X.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(e,t,r,i,o,s,a,l,c,d=!1,f,m){this._portalOutlet=e,this._host=t,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=m,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Rr(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=_(_({},this._config),e),this._updateElementSize()}setDirection(e){this._config=G(_({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=ke(this._config.width),e.height=ke(this._config.height),e.minWidth=ke(this._config.minWidth),e.minHeight=ke(this._config.minHeight),e.maxWidth=ke(this._config.maxWidth),e.maxHeight=ke(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;jm(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Bm(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,r){let i=fm(t||[]).filter(o=>!!o);i.length&&(r?e.classList.add(...i):e.classList.remove(...i))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=Rr(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},tE="cdk-overlay-connected-position-bounding-box",sk=/([A-Za-z%]+)$/;function dE(n,e){return new Rc(e,n.get(Is),n.get(V),n.get(be),n.get(cE))}var Rc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=X.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,r,i,o){this._viewportRuler=t,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(tE),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(e,i,a),c=this._getOverlayPoint(l,t,a),d=this._getOverlayFit(c,t,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Wr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(tE),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof A?this._origin.nativeElement:jm(this._origin)?this._origin:null}_getOriginPoint(e,t,r){let i;if(r.originX=="center")i=e.left+e.width/2;else{let s=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;i=r.originX=="start"?s:a}t.left<0&&(i-=t.left);let o;return r.originY=="center"?o=e.top+e.height/2:o=r.originY=="top"?e.top:e.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(e,t,r){let i;r.overlayX=="center"?i=-t.width/2:r.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return r.overlayY=="center"?o=-t.height/2:o=r.overlayY=="top"?0:-t.height,{x:e.x+i,y:e.y+o}}_getOverlayFit(e,t,r,i){let o=rE(t),{x:s,y:a}=e,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,m=0-a,h=a+o.height-r.height,p=this._subtractOverflows(o.width,d,f),D=this._subtractOverflows(o.height,m,h),C=p*D;return{visibleArea:C,isCompletelyWithinViewport:o.width*o.height===C,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(e,t,r){if(this._hasFlexibleDimensions){let i=r.bottom-t.y,o=r.right-t.x,s=nE(this._overlayRef.getConfig().minHeight),a=nE(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||s!=null&&s<=i,c=e.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(e,t,r){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let i=rE(t),o=this._viewportRect,s=Math.max(e.x+i.width-o.width,0),a=Math.max(e.y+i.height-o.height,0),l=Math.max(o.top-r.top-e.y,0),c=Math.max(o.left-r.left-e.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=e.x<this._getViewportMarginStart()?o.left-r.left-e.x:0,i.height<=o.height?f=l||-a:f=e.y<this._getViewportMarginTop()?o.top-r.top-e.y:0,this._previousPushAmount={x:d,y:f},{x:e.x+d,y:e.y+f}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!ak(this._lastScrollVisibility,r)){let i=new kc(e,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=e.overlayY;e.overlayX==="center"?r="center":this._isRtl()?r=e.overlayX==="start"?"right":"left":r=e.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(e,t){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(t.overlayY==="top")s=e.y,o=r.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=r.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let h=Math.min(r.bottom-e.y+r.top,e.y),p=this._lastBoundingBoxSize.height;o=h*2,s=e.y-h,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=e.y-p/2)}let l=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,c=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,f,m;if(c)m=r.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(l)f=e.x,d=r.right-e.x-this._getViewportMarginEnd();else{let h=Math.min(r.right-e.x+r.left,e.x),p=this._lastBoundingBoxSize.width;d=h*2,f=e.x-h,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=e.x-p/2)}return{top:s,left:f,bottom:a,right:m,width:d,height:o}}_setBoundingBoxStyles(e,t){let r=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=ke(r.width),i.height=ke(r.height),i.top=ke(r.top)||"auto",i.bottom=ke(r.bottom)||"auto",i.left=ke(r.left)||"auto",i.right=ke(r.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=ke(o)),s&&(i.maxWidth=ke(s))}this._lastBoundingBoxSize=r,Wr(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Wr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Wr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Wr(r,this._getExactOverlayY(t,e,d)),Wr(r,this._getExactOverlayX(t,e,d))}else r.position="static";let a="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=ke(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=ke(s.maxWidth):o&&(r.maxWidth="")),Wr(this._pane.style,r)}_getExactOverlayY(e,t,r){let i={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),e.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=ke(o.y);return i}_getExactOverlayX(e,t,r){let i={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=e.overlayX==="end"?"left":"right":s=e.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=ke(o.x);return i}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:JD(e,r),isOriginOutsideView:Vm(e,r),isOverlayClipped:JD(t,r),isOverlayOutsideView:Vm(t,r)}}_subtractOverflows(e,...t){return t.reduce((r,i)=>r-Math.max(i,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+e-this._getViewportMarginEnd(),bottom:r.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&fm(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof A)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,r=e.height||0;return{top:e.y,bottom:e.y+r,left:e.x,right:e.x+t,height:r,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let r=t.getBoundingClientRect();return e&&(t.style.display=""),r}};function Wr(n,e){for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function nE(n){if(typeof n!="number"&&n!=null){let[e,t]=n.split(sk);return!t||t==="px"?parseFloat(e):null}return n||null}function rE(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ak(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var ks=new g("OVERLAY_DEFAULT_CONFIG");function uE(n,e){n.get(Ze).load(lE);let t=n.get(cE),r=n.get(V),i=n.get(Be),o=n.get(kt),s=n.get(nn),a=n.get(ye,null,{optional:!0})||n.get(Ie).createRenderer(null,null),l=new Ts(e),c=n.get(ks,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,!r.body||!("showPopover"in r.body)?l.usePopover=!1:l.usePopover=e?.usePopover??c;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return jm(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):t.getContainerElement().appendChild(f),new Ac(new Nc(d,o,n),f,d,l,n.get(M),n.get(sE),r,n.get(Ll),n.get(aE),e?.disableAnimations??n.get(Eo,null,{optional:!0})==="NoopAnimations",n.get(Ee),a)}var lk=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ck=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=u(q);return()=>Oc(n)}}),Ki=(()=>{class n{elementRef=u(A);static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),fE=new g("cdk-connected-overlay-default-config"),Fc=(()=>{class n{_dir=u(nn,{optional:!0});_injector=u(q);_overlayRef;_templatePortal;_backdropSubscription=X.EMPTY;_attachSubscription=X.EMPTY;_detachSubscription=X.EMPTY;_positionSubscription=X.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(ck);_ngZone=u(M);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new K;positionChange=new K;attach=new K;detach=new K;overlayKeydown=new K;overlayOutsideClick=new K;constructor(){let t=u(qt),r=u(pt),i=u(fE,{optional:!0}),o=u(ks,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ms(t,r),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=lk);let t=this._overlayRef=uE(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(r=>{this.overlayKeydown.next(r),r.keyCode===27&&!this.disableClose&&!tn(r)&&(r.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(r=>{let i=this._getOriginElement(),o=Ve(r);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(r)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),r=new Ts({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(r.height=this.height),(this.minWidth||this.minWidth===0)&&(r.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(r.minHeight=this.minHeight),this.backdropClass&&(r.backdropClass=this.backdropClass),this.panelClass&&(r.panelClass=this.panelClass),r}_updatePositionStrategy(t){let r=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(r).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=dE(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Ki?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ki?this.origin.elementRef.nativeElement:this.origin instanceof A?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(r=>this.backdropClick.emit(r)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(md(()=>this.positionChange.observers.length>0)).subscribe(r=>{this._ngZone.run(()=>this.positionChange.emit(r)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",z],push:[2,"cdkConnectedOverlayPush","push",z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ue]})}return n})();var hE=(()=>{class n{_animationsDisabled=Xe();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&ie("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
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
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
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
`],encapsulation:2})}return n})();var uk=["text"],fk=[[["mat-icon"]],"*"],hk=["mat-icon","*"];function mk(n,e){if(n&1&&ae(0,"mat-pseudo-checkbox",1),n&2){let t=we();Y("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function pk(n,e){if(n&1&&ae(0,"mat-pseudo-checkbox",3),n&2){let t=we();Y("disabled",t.disabled)}}function gk(n,e){if(n&1&&(v(0,"span",4),F(1),y()),n&2){let t=we();S(),zo("(",t.group.label,")")}}var Um=new g("MAT_OPTION_PARENT_COMPONENT"),zm=new g("MatOptgroup");var Hm=class{source;isUserInput;constructor(e,t=!1){this.source=e,this.isUserInput=t}},Vc=(()=>{class n{_element=u(A);_changeDetectorRef=u(bt);_parent=u(Um,{optional:!0});group=u(zm,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(Be).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=H(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new K;_text;_stateChanges=new x;constructor(){let t=u(Ze);t.load(qi),t.load(um),this._signalDisableRipple=!!this._parent&&He(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!tn(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Hm(this,t))}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&yt(uk,7),r&2){let o;ne(o=re())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&me("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(At("id",i.id),ve("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),ie("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:hk,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(Te(fk),ue(0,mk,1,2,"mat-pseudo-checkbox",1),ee(1),v(2,"span",2,0),ee(4,1),y(),ue(5,pk,1,1,"mat-pseudo-checkbox",3),ue(6,gk,2,1,"span",4),ae(7,"div",5)),r&2&&(fe(i.multiple?0:-1),S(5),fe(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),S(),fe(i.group&&i.group._inert?6:-1),S(),Y("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[hE,Sc],styles:[`.mat-mdc-option {
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
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
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
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function mE(n,e,t){if(t.length){let r=e.toArray(),i=t.toArray(),o=0;for(let s=0;s<n+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function pE(n,e,t,r){return n<t?n:n+e>t+r?Math.max(0,n-r+e):t}var yk=["trigger"],vk=["panel"],bk=[[["mat-select-trigger"]],"*"],_k=["mat-select-trigger","*"];function Dk(n,e){if(n&1&&(v(0,"span",4),F(1),y()),n&2){let t=we();S(),Rt(t.placeholder)}}function Ek(n,e){n&1&&ee(0)}function Sk(n,e){if(n&1&&(v(0,"span",11),F(1),y()),n&2){let t=we(2);S(),Rt(t.triggerValue)}}function wk(n,e){if(n&1&&(v(0,"span",5),ue(1,Ek,1,0)(2,Sk,2,1,"span",11),y()),n&2){let t=we();S(),fe(t.customTrigger?1:2)}}function Ck(n,e){if(n&1){let t=qf();v(0,"div",12,1),me("keydown",function(i){Ra(t);let o=we();return Oa(o._handleKeydown(i))}),ee(2,1),y()}if(n&2){let t=we();bn(t.panelClass),ie("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._parentFormField?.color==="primary")("mat-accent",t._parentFormField?.color==="accent")("mat-warn",t._parentFormField?.color==="warn")("mat-undefined",!t._parentFormField?.color),ve("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var xk=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=u(q);return()=>Oc(n)}}),Ik=new g("MAT_SELECT_CONFIG"),Nk=new g("MatSelectTrigger"),$m=class{source;value;constructor(e,t){this.source=e,this.value=t}},gE=(()=>{class n{_viewportRuler=u(Is);_changeDetectorRef=u(bt);_elementRef=u(A);_dir=u(nn,{optional:!0});_idGenerator=u(Be);_renderer=u(ye);_parentFormField=u(Cs,{optional:!0});ngControl=u($n,{self:!0,optional:!0});_liveAnnouncer=u(mm);_defaultOptions=u(Ik,{optional:!0});_animationsDisabled=Xe();_popoverLocation;_initialized=new x;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let r=this.options.toArray()[t];if(r){let i=this.panel.nativeElement,o=mE(t,this.options,this.optionGroups),s=r._getHostElement();t===0&&o===1?i.scrollTop=0:i.scrollTop=pE(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new $m(this,t)}_scrollStrategyFactory=u(xk);_panelOpen=!1;_compareWith=(t,r)=>t===r;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new x;_errorStateTracker;stateChanges=new x;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Qt.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ad(()=>{let t=this.options;return t?t.changes.pipe(lr(t),ii(()=>ar(...t.map(r=>r.onSelectionChange)))):this._initialized.pipe(ii(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(Fe(t=>t),De(()=>{}));_closedStream=this.openedChange.pipe(Fe(t=>!t),De(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let t=u(Ic),r=u(ls,{optional:!0}),i=u(cs,{optional:!0}),o=u(new Ni("tabindex"),{optional:!0}),s=u(ks,{optional:!0}),a=u(zi,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Yi(t,a||this.ngControl,i,r,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new xs(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(We(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(We(this._destroy)).subscribe(t=>{t.added.forEach(r=>r.select()),t.removed.forEach(r=>r.deselect())}),this.options.changes.pipe(lr(null),We(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),r=this.ngControl;if(t!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}r&&(this._previousControl!==r.control&&(this._previousControl!==void 0&&r.disabled!==null&&r.disabled!==this.disabled&&(this.disabled=r.disabled),this._previousControl=r.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ud(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{r(),clearTimeout(i),this._cleanupDetach=void 0};let t=this.panel.nativeElement,r=this._renderer.listen(t,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(r=>r.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let r=t.keyCode,i=r===40||r===38||r===37||r===39,o=r===13||r===32,s=this._keyManager;if(!s.isTyping()&&o&&!tn(t)||(this.multiple||t.altKey)&&i)t.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(t);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(t){let r=this._keyManager,i=t.keyCode,o=i===40||i===38,s=r.isTyping();if(o&&t.altKey)t.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&r.activeItem&&!tn(t))t.preventDefault(),r.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&t.ctrlKey){t.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=r.activeItemIndex;r.onKeydown(t),this._multiple&&o&&t.shiftKey&&r.activeItem&&r.activeItemIndex!==a&&r.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!tn(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(r=>r.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(r=>this._selectOptionByValue(r)),this._sortValues();else{let r=this._selectOptionByValue(t);r?this._keyManager.updateActiveItem(r):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let r=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,t)}catch{return!1}});return r&&this._selectionModel.select(r),r}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Ki?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new bs(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=ar(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(We(t)).subscribe(r=>{this._onSelect(r.source,r.isUserInput),r.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ar(...this.options.map(r=>r._stateChanges)).pipe(We(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,r){let i=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(i!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),r&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),r&&this.focus())),i!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((r,i)=>this.sortComparator?this.sortComparator(r,i,t):t.indexOf(r)-t.indexOf(i)),this.stateChanges.next()}}_propagateChanges(t){let r;this.multiple?r=this.selected.map(i=>i.value):r=this.selected?this.selected.value:t,this._value=r,this.valueChange.emit(r),this._onChange(r),this.selectionChange.emit(this._getChangeEvent(r)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let r=0;r<this.options.length;r++)if(!this.options.get(r).disabled){t=r;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,r=t?t+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(t){let r=Ve(t);r&&(r.tagName==="MAT-OPTION"||r.classList.contains("cdk-overlay-backdrop")||r.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["mat-select"]],contentQueries:function(r,i,o){if(r&1&&jn(o,Nk,5)(o,Vc,5)(o,zm,5),r&2){let s;ne(s=re())&&(i.customTrigger=s.first),ne(s=re())&&(i.options=s),ne(s=re())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&yt(yk,5)(vk,5)(Fc,5),r&2){let o;ne(o=re())&&(i.trigger=o.first),ne(o=re())&&(i.panel=o.first),ne(o=re())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(r,i){r&1&&me("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),r&2&&(ve("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),ie("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",z],disableRipple:[2,"disableRipple","disableRipple",z],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Lr(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",z],placeholder:"placeholder",required:[2,"required","required",z],multiple:[2,"multiple","multiple",z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Lr],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ce([{provide:ws,useExisting:n},{provide:Um,useExisting:n}]),Ue],ngContentSelectors:_k,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(r,i){if(r&1&&(Te(bk),v(0,"div",2,0),me("click",function(){return i.open()}),v(3,"div",3),ue(4,Dk,2,1,"span",4)(5,wk,3,1,"span",5),y(),v(6,"div",6)(7,"div",7),gi(),v(8,"svg",8),ae(9,"path",9),y()()()(),gt(10,Ck,3,16,"ng-template",10),me("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(s){return i._handleOverlayKeydown(s)})),r&2){let o=vt(1);S(3),ve("id",i._valueId),S(),fe(i.empty?4:5),S(6),Y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ki,Fc],styles:[`@keyframes _mat-select-enter {
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
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
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
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
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
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Mk=n=>({options:n});function Tk(n,e){if(n&1&&(v(0,"div",4)(1,"div",5),ae(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"div",10)(7,"div",11)(8,"div",12)(9,"div",13)(10,"div",14)(11,"div",15)(12,"div",16)(13,"div",17),y(),ae(14,"div",18),y()),n&2){let t=we();S(14),Y("innerHtml",t.options().message,Po)}}var Wm=new g("BUSY_OPTIONS"),kk=(()=>{class n{delay;minDuration;backdrop;message;wrapperClass;templateRef;constructor(){let t=u(Wm,{optional:!0});t||(t={}),this.delay=t.delay||0,this.minDuration=t.minDuration||0,this.backdrop=t.backdrop!==void 0?t.backdrop:!0,this.message=t.message||"Please Wait...",this.wrapperClass=t.wrapperClass||""}static \u0275fac=function(r){return new(r||n)};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ak=(()=>{class n{options=Xt.required();tracker=Xt.required();static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Z({type:n,selectors:[["cg-busy"]],inputs:{options:[1,"options"],tracker:[1,"tracker"]},decls:5,vars:9,consts:[["defaultTemplate",""],[3,"hidden"],[1,"cg-busy-backdrop","cg-busy-backdrop-animation",3,"hidden"],[1,"cg-busy-template",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"cg-busy-default-sign"],[1,"cg-busy-default-spinner"],[1,"bar1"],[1,"bar2"],[1,"bar3"],[1,"bar4"],[1,"bar5"],[1,"bar6"],[1,"bar7"],[1,"bar8"],[1,"bar9"],[1,"bar10"],[1,"bar11"],[1,"bar12"],[1,"cg-busy-default-text",3,"innerHtml"]],template:function(r,i){if(r&1&&(v(0,"div",1),ae(1,"div",2),Il(2,3),y(),gt(3,Tk,15,1,"ng-template",null,0,Pr)),r&2){let o=vt(4);bn(Yf("cg-busy cg-busy-animation ",i.options().wrapperClass)),Y("hidden",!i.tracker().active()),S(),Y("hidden",!i.options().backdrop),S(),Y("ngTemplateOutlet",i.options().templateRef?i.options().templateRef:o)("ngTemplateOutletContext",Kf(7,Mk,i.options()))}},dependencies:[qo],styles:[`.cg-busy,.cg-busy .cg-busy-template,.cg-busy .cg-busy-backdrop{position:absolute;inset:0;width:100%;height:100%}.cg-busy{z-index:1001;text-align:center}.cg-busy-animation.ng-hide-add,.cg-busy-animation.ng-hide-remove{transition:all .3s ease;display:block!important}.cg-busy-animation.ng-hide-remove{opacity:0;transform:translateY(-40px)}.cg-busy-animation.ng-hide-remove.ng-hide-remove-active,.cg-busy-animation.ng-hide-add{opacity:1;transform:translate(0)}.cg-busy-animation.ng-hide-add.ng-hide-add-active{opacity:0;transform:translateY(-40px)}.cg-busy-backdrop{background-color:#fff;opacity:.7}.cg-busy-backdrop-animation.ng-hide-add,.cg-busy-backdrop-animation.ng-hide-remove{transition:opacity .3s ease;display:block!important}.cg-busy-backdrop-animation.ng-hide{opacity:0}.cg-busy-default-sign{display:inline-block;position:relative;z-index:1002;padding-bottom:6px;color:#333;text-shadow:0 1px 1px rgba(255,255,255,.75);background-color:#e9eeee;border:1px solid #dddddd;border-top-width:0;border-radius:0 0 7px 7px;box-shadow:inset 0 1px #fff3,0 1px 2px #0000000d}.cg-busy-default-text{margin:13px 12px 6px 49px;font-size:16px;color:#555;text-align:left;max-width:400px}.cg-busy-default-spinner{position:absolute;width:25px;height:25px;display:inline-block;top:12px;left:14px}.cg-busy-default-spinner div{width:12%;height:26%;background:#000;position:absolute;left:44.5%;top:37%;opacity:0;animation:cg-busy-spinner-anim 1s linear infinite;border-radius:50px;box-shadow:0 0 3px #0003}.cg-busy-default-spinner div.bar1{transform:rotate(0) translateY(-142%);animation-delay:0s}.cg-busy-default-spinner div.bar2{transform:rotate(30deg) translateY(-142%);animation-delay:-.9167s}.cg-busy-default-spinner div.bar3{transform:rotate(60deg) translateY(-142%);animation-delay:-.833s}.cg-busy-default-spinner div.bar4{transform:rotate(90deg) translateY(-142%);animation-delay:-.75s}.cg-busy-default-spinner div.bar5{transform:rotate(120deg) translateY(-142%);animation-delay:-.667s}.cg-busy-default-spinner div.bar6{transform:rotate(150deg) translateY(-142%);animation-delay:-.5833s}.cg-busy-default-spinner div.bar7{transform:rotate(180deg) translateY(-142%);animation-delay:-.5s}.cg-busy-default-spinner div.bar8{transform:rotate(210deg) translateY(-142%);animation-delay:-.41667s}.cg-busy-default-spinner div.bar9{transform:rotate(240deg) translateY(-142%);animation-delay:-.333s}.cg-busy-default-spinner div.bar10{transform:rotate(270deg) translateY(-142%);animation-delay:-.25s}.cg-busy-default-spinner div.bar11{transform:rotate(300deg) translateY(-142%);animation-delay:-.1667s}.cg-busy-default-spinner div.bar12{transform:rotate(330deg) translateY(-142%);animation-delay:-.0833s}@keyframes cg-busy-spinner-anim{0%{opacity:1}to{opacity:.25}}
`],encapsulation:2})}return n})(),Gm=class n{promises;subscriptions;delayPromise=null;durationPromise=null;active=H(!1);injector=u(q);constructor(){this.promises=[],this.subscriptions=[]}static isPromise(e){return e&&(e instanceof Promise||e instanceof B||e instanceof X||He(e))}callThen(e,t){if(e.finally)e.finally(t);else if(e.then)e.then(t,t);else if(e instanceof B)e.pipe(ri(t));else if(e instanceof X)e.add(t);else if(He(e))Me(()=>{let r=e();w(()=>t(!!r))},{injector:this.injector});else throw new Error("cgBusy expects a Promise ,an Observable, a Subscription, a number or a boolean")}reset(e){if(this.promises=[],e.promises.forEach(t=>{!t||t.$cgBusyFulfilled||this.addPromiseLikeThing(t)}),this.promises.length===0){setTimeout(()=>this.updateActive());return}e.delay?this.delayPromise=window.setTimeout(()=>{this.delayPromise=null,this.updateActive(),this.createMinDuration(e)},e.delay):this.createMinDuration(e),setTimeout(()=>this.updateActive())}createMinDuration(e){e.minDuration&&(this.durationPromise=window.setTimeout(()=>{this.durationPromise=null,this.updateActive()},e.minDuration))}addPromiseLikeThing(e){if(!n.isPromise(e))throw new Error("cgBusy expects a Promise ,an Observable, a Subscription, a Signal, a number or a boolean");this.promises.indexOf(e)===-1&&(this.promises.push(e),this.callThen(e,(t=!1)=>{t?(e.$cgBusyFulfilled=!1,!this.promises.includes(e)&&this.promises.push(e)):(e.$cgBusyFulfilled=!0,this.promises.includes(e)&&this.promises.splice(this.promises.indexOf(e),1)),this.delayPromise&&this.promises.length===0&&(clearTimeout(this.delayPromise),this.delayPromise=null),this.updateActive()}))}updateActive(){this.active.set(!this.delayPromise&&(!!this.durationPromise||this.promises.length>0))}destroy(){this.delayPromise&&(clearTimeout(this.delayPromise),this.delayPromise=null),this.durationPromise&&(clearTimeout(this.durationPromise),this.durationPromise=null),this.promises=[]}},yE=(()=>{class n{cgBusy=Xt.required();cgBusyConfig=Xt();tracker=new Gm;fakePromiseResolve;$options=E(()=>_(_({},this.defaultOptions),this.cgBusyConfig()));$promise=[];componentRef;viewContainer=u(pt);defaultOptions=u(kk);renderer=u(ye);el=u(A);constructor(){this.renderer.setStyle(this.el.nativeElement.parentNode,"position","relative"),this.componentRef=this.viewContainer.createComponent(Ak),this.componentRef.setInput("tracker",this.tracker),Me(()=>{this.componentRef.setInput("options",this.$options()),w(()=>this.tracker.reset({promises:this.$promise,delay:this.$options().delay||0,minDuration:this.$options().minDuration||0}))}),Me(()=>{this.fakePromiseResolve&&(this.fakePromiseResolve(void 0),this.fakePromiseResolve=void 0);let t=this.cgBusy();Number.isFinite(t)||t===!0||t===!1?t?this.$promise=[new Promise(r=>this.fakePromiseResolve=r)]:this.$promise=[]:Array.isArray(t)?this.$promise=t:this.$promise=[t],w(()=>this.tracker.reset({promises:this.$promise,delay:this.$options().delay||0,minDuration:this.$options().minDuration||0}))})}ngOnDestroy(){this.tracker.destroy(),this.componentRef.destroy(),this.$promise=[],this.fakePromiseResolve=void 0}static \u0275fac=function(r){return new(r||n)};static \u0275dir=U({type:n,selectors:[["","cgBusy",""]],inputs:{cgBusy:[1,"cgBusy"],cgBusyConfig:[1,"cgBusyConfig"]},exportAs:["cgBusy"]})}return n})();var Rk=(n,e,t,r,i)=>({templateRef:n,message:e,backdrop:t,delay:r,minDuration:i}),Ok=(n,e)=>e.id;function Fk(n,e){if(n&1&&(v(0,"mat-error"),F(1),y()),n&2){let t=e.$implicit;S(),Rt(t.message)}}function Pk(n,e){if(n&1&&(v(0,"mat-error"),F(1),y()),n&2){let t=e.$implicit;S(),Rt(t.message)}}function Lk(n,e){if(n&1&&(v(0,"mat-option",9),F(1),y()),n&2){let t=e.$implicit;Y("value",t),S(),Rt(t.label)}}function Vk(n,e){if(n&1&&(v(0,"div",14),ae(1,"div",15),y()),n&2){let t=e.options;S(),Y("innerHtml",t.message,Po)}}var Bc=class n{promiseTypes=[{id:0,label:"Promise",value:this.getHttp.bind(this)},{id:1,label:"Observable",value:this.getHttpObserver.bind(this)},{id:2,label:"Subscription",value:this.getHttpSubscription.bind(this)},{id:3,label:"Signal",value:this.getSignal.bind(this)},{id:4,label:"Signal Delayed",value:this.getSignalDelay.bind(this)},{id:5,label:"Number",value:1},{id:6,label:"Number `falsy`",value:0},{id:7,label:"Boolean",value:!0},{id:8,label:"Boolean false",value:!1}];model=H({delay:0,minDuration:0,message:"Please Wait...",backdrop:!0,showCustomTemplate:!1,promiseType:this.promiseTypes[0]});modelForm=Xh(this.model,e=>{rm(e.delay,{message:"Delay is required"}),rm(e.minDuration,{message:"MinDuration is required"}),nm(e.delay,0,{message:"Minimum value for Delay is 0"}),nm(e.minDuration,0,{message:"Minimum value for MinDuration is 0"})},{submission:{action:async()=>{let e=this.modelForm.promiseType().value().value;typeof e=="function"?this.promise=e():this.promise=e}}});promise=!1;http=u(Kl);getHttp(){return od(this.http.get("https://httpbin.org/delay/3"))}getHttpObserver(){return this.http.get("https://httpbin.org/delay/3")}getHttpSubscription(){return this.http.get("https://httpbin.org/delay/3").subscribe(()=>{})}getSignal(){let e=H(!0);return setTimeout(()=>{e.set(!1)},3e3),e}getSignalDelay(){let e=H(!1);return setTimeout(()=>{e.set(!0)},3e3),setTimeout(()=>{e.set(!1)},6e3),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Z({type:n,selectors:[["app-cg-busy"]],decls:103,vars:16,consts:[["customTemplate",""],[1,"layout-column","flex"],[1,"layout-column","layout-gt-md-row","layout-align-space-between","flex"],[1,"flex","layout-column",3,"formRoot"],[1,"mat-headline"],["matInput","","type","number",3,"formField"],["matInput","","type","text",3,"formField"],[3,"formField"],["id","promiseType",3,"formField"],[3,"value"],[1,"layout-row","layout-align-end-center"],["type","submit","mat-raised-button","",3,"disabled"],[1,"flex"],["cols","4","rowHeight","40px","gutterSize","5",3,"cgBusy","cgBusyConfig"],[1,"custom-template"],[1,"custom-message",3,"innerHtml"]],template:function(t,r){if(t&1&&(v(0,"div",1)(1,"div")(2,"h2"),F(3,"angular-busy2"),y(),v(4,"p"),F(5,"Show busy/loading indicators on any Observable, Subscription, Promise, Boolean, Number"),y()(),v(6,"div",2)(7,"form",3)(8,"label",4),F(9,"Demo Options"),y(),v(10,"mat-form-field")(11,"mat-label"),F(12,"Delay (ms)"),y(),ae(13,"input",5),Vn(),jo(14,Fk,2,1,"mat-error",null,xl),y(),v(16,"mat-form-field")(17,"mat-label"),F(18,"Min Duration (ms)"),y(),ae(19,"input",5),Vn(),jo(20,Pk,2,1,"mat-error",null,xl),y(),v(22,"mat-form-field")(23,"mat-label"),F(24,"Message"),y(),ae(25,"input",6),Vn(),y(),v(26,"mat-checkbox",7),F(27,"Show Backdrop"),y(),Vn(),v(28,"mat-checkbox",7),F(29,"Show Custom Template"),y(),Vn(),v(30,"mat-form-field")(31,"mat-label"),F(32,"Promise type"),y(),v(33,"mat-select",8),jo(34,Lk,2,2,"mat-option",9,Ok),y(),Vn(),y(),v(36,"div",10)(37,"button",11),F(38,"Demo"),y()()(),v(39,"div",12)(40,"mat-grid-list",13)(41,"mat-grid-tile")(42,"b"),F(43,"#"),y()(),v(44,"mat-grid-tile")(45,"b"),F(46,"First Name"),y()(),v(47,"mat-grid-tile")(48,"b"),F(49,"Last Name"),y()(),v(50,"mat-grid-tile")(51,"b"),F(52,"Username"),y()(),v(53,"mat-grid-tile")(54,"div"),F(55,"1"),y()(),v(56,"mat-grid-tile")(57,"div"),F(58,"Mark"),y()(),v(59,"mat-grid-tile")(60,"div"),F(61,"Otto"),y()(),v(62,"mat-grid-tile")(63,"div"),F(64,"@mdo"),y()(),v(65,"mat-grid-tile")(66,"div"),F(67,"2"),y()(),v(68,"mat-grid-tile")(69,"div"),F(70,"Mark"),y()(),v(71,"mat-grid-tile")(72,"div"),F(73,"Otto"),y()(),v(74,"mat-grid-tile")(75,"div"),F(76,"@TwBootstrap"),y()(),v(77,"mat-grid-tile")(78,"div"),F(79,"3"),y()(),v(80,"mat-grid-tile")(81,"div"),F(82,"Jacob"),y()(),v(83,"mat-grid-tile")(84,"div"),F(85,"Thornton"),y()(),v(86,"mat-grid-tile")(87,"div"),F(88,"@fat"),y()(),v(89,"mat-grid-tile")(90,"div"),F(91,"4"),y()(),v(92,"mat-grid-tile")(93,"div"),F(94,"Larry"),y()(),v(95,"mat-grid-tile")(96,"div"),F(97,"the Bird"),y()(),v(98,"mat-grid-tile")(99,"div"),F(100,"@twitter"),y()()()()()(),gt(101,Vk,2,1,"ng-template",null,0,Pr)),t&2){let i=vt(102);S(7),Y("formRoot",r.modelForm),S(6),Y("formField",r.modelForm.delay),Bn(),S(),Ho(r.modelForm.delay().errors()),S(5),Y("formField",r.modelForm.minDuration),Bn(),S(),Ho(r.modelForm.minDuration().errors()),S(5),Y("formField",r.modelForm.message),Bn(),S(),Y("formField",r.modelForm.backdrop),Bn(),S(2),Y("formField",r.modelForm.showCustomTemplate),Bn(),S(5),Y("formField",r.modelForm.promiseType),Bn(),S(),Ho(r.promiseTypes),S(3),Y("disabled",!r.modelForm().valid()),S(3),Y("cgBusy",r.promise)("cgBusyConfig",Zf(10,Rk,r.modelForm.showCustomTemplate().value()?i:null,r.modelForm.message().value(),r.modelForm.backdrop().value(),r.modelForm.delay().value(),r.modelForm.minDuration().value()))}},dependencies:[yE,J_,eD,MD,kD,Rm,Om,FD,Tm,XD,Ss,Vc,gE],styles:['mat-grid-list[_ngcontent-%COMP%]{min-width:400px}.custom-template[_ngcontent-%COMP%]{background:url("./media/finalfantasy-TPUY5RPS.gif") no-repeat 50% 20px;width:100%;height:100%;position:absolute}.custom-message[_ngcontent-%COMP%]{text-align:center;font-size:26px;position:absolute;top:100px;width:100%;text-shadow:1px 1px 2px white,-1px -1px 2px white,-4px 4px 4px white,-4px 4px 4px white}.mat-select[_ngcontent-%COMP%]{margin-top:25px}.flex[_ngcontent-%COMP%]{flex:1 auto}.layout-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.layout-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}@media(min-width:1280px){.layout-gt-md-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}}.layout-align-space-between[_ngcontent-%COMP%]{justify-content:space-between}.layout-align-end-center[_ngcontent-%COMP%]{align-items:center;justify-content:flex-end}[_nghost-%COMP%]{padding:8px;width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}']})};var vE={providers:[fu(),Xf(),bh(),{provide:Wm,useValue:{minDuration:1e4}}]};fh(Bc,vE).catch(n=>console.log(n));
