var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const r={form:document.querySelector(".form"),delay:document.querySelector('input[name = "delay"]'),amount:document.querySelector('input[name = "amount"]'),step:document.querySelector('input[name = "step"]')};function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(r.delay.value);const n=Number(r.step.value);for(let e=1;e<=Number(r.amount.value);e++)l(e,o).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),o+=n}));
//# sourceMappingURL=03-promises.7151f9a5.js.map
