if(!self.define){let e,s={};const d=(d,a)=>(d=new URL(d+".js",a).href,s[d]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=s,document.head.appendChild(e)}else e=d,importScripts(d),s()})).then((()=>{let e=s[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const b=e=>d(e,f),t={module:{uri:f},exports:r,require:b};s[f]=Promise.all(a.map((e=>t[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-0WVIkMBZ.js",revision:"78bac4c1f3b9e87184b1f2c032873dc1"},{url:"assets/404.html-7PYeHIMM.js",revision:"d5011951b970f5b1f7b25d154035d442"},{url:"assets/app-zOn3ROHE.js",revision:"8beafc28ac6f13db14edd6244e776c9b"},{url:"assets/bg/js/login.js",revision:"8bfaa5b70b37b7abcf090f506d0497f1"},{url:"assets/bg/js/login2.js",revision:"f5fea95d75e95f5d7882be07e7912d83"},{url:"assets/giscus-08zh9c_o.js",revision:"7a355a6881a3c86839ddda0adf6c24cd"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_1O9w09w.js",revision:"1ad7e2662484538f664bde3551dc553a"},{url:"assets/index.html-21FP1Ng2.js",revision:"34afcb54aeb6f1471e5c718765653318"},{url:"assets/index.html-6Z9ar-lM.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-azkm_JCy.js",revision:"7d6efd62aeb762e2f7af9c987c588c8e"},{url:"assets/index.html-BRE15vob.js",revision:"76c427c2d3ae968c83c9d0d1da74b085"},{url:"assets/index.html-cL-7Z-Q9.js",revision:"7e151897cff44cae8368d8c3e4189aa5"},{url:"assets/index.html-D8v20IN2.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-duRI1FBs.js",revision:"baf9219fe1fa4c62ad15d8addad3ad13"},{url:"assets/index.html-eRZuKlDA.js",revision:"a5352fdd91e4337292b7aac86a345a04"},{url:"assets/index.html-fRGQYhYv.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-hb6pocKE.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-HcUTKjCc.js",revision:"ebaedd63aa5fef08660f037235b2674f"},{url:"assets/index.html-Kcfa6uGP.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-ko7SuoWo.js",revision:"76c427c2d3ae968c83c9d0d1da74b085"},{url:"assets/index.html-lmxECjyv.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-MAQqtS0u.js",revision:"c4ae3b5dd5f9500938b742475d586b5c"},{url:"assets/index.html-MF-VOBDq.js",revision:"c2d881d3bd57c9cd0958effd9f75b888"},{url:"assets/index.html-mfmdRkIL.js",revision:"2d5cbfd3dc3db6400374986b3978792c"},{url:"assets/index.html-NMFgo_Av.js",revision:"76c427c2d3ae968c83c9d0d1da74b085"},{url:"assets/index.html-o03gtO2m.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-po9BKj_o.js",revision:"8348098c9e097ad988c4c5850569e9f7"},{url:"assets/index.html-qlNaUIMZ.js",revision:"60766cc1456e21372a5d3fe60059a6db"},{url:"assets/index.html-QX8Gtd3m.js",revision:"425d812aa8e2270cb1e38676852c1cb6"},{url:"assets/index.html-tygN8hxE.js",revision:"70b17267dcd792c24ca1e4e1fd1eb8b3"},{url:"assets/index.html-VvXv1utF.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/index.html-wIV6NCQC.js",revision:"e60769d9be04d9e0beb88cf33f3ecff7"},{url:"assets/intro.html-rbq9bocH.js",revision:"54217e01c19cd2426f723b9008c2bc99"},{url:"assets/intro.html-rV9QxdOB.js",revision:"d7ef609b58f65c220fb0594ebdfe37bb"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/SearchResult-o0pgxqBi.js",revision:"fa55b33064da18c0d70fdb47269aa6b7"},{url:"assets/style-s1EQnGbw.css",revision:"7258d543ead366f59717709dab181333"},{url:"assets/从零开始-2d.html-3hDjy0sm.js",revision:"d6e9ed83bdbff0d47fd84fbf86230aee"},{url:"assets/从零开始-2d.html-AwgXWahG.js",revision:"454ac6b82c324fdad8961fd974d6bac1"},{url:"assets/分帧加载.html-M4QlaZst.js",revision:"fb097acb7b2a2f91daefc416789ac775"},{url:"assets/分帧加载.html-z7wuZURE.js",revision:"bebbe45865030779ea96fdf3cc79d4bb"},{url:"assets/加载pkm.html-EO2iV0e1.js",revision:"a8cadef31d8a0ae896be3aee5320c888"},{url:"assets/加载pkm.html-eRMbC5X-.js",revision:"047726130b3a9c701ecee23261a29b42"},{url:"assets/加载pkm.html-KF1CAA7g.js",revision:"8fabb8658ea9544af5eebac48d14da4d"},{url:"assets/加载pkm.html-me03RrUz.js",revision:"008579e0431d3215779fbd9d713059b1"},{url:"assets/图片溶解.html-I-V9O5Ge.js",revision:"ac1591b680419eead9efe7d6e47f54aa"},{url:"assets/图片溶解.html-JBdZE5KX.js",revision:"66c0e608f47ed15378190ae0379183d7"},{url:"assets/头像遮罩.html-a0FmErt4.js",revision:"75a6ef7c5885612b2feb598813400bcb"},{url:"assets/头像遮罩.html-CjyUw5dY.js",revision:"294a6ac26f7749dd630e7bbf5b1f3cf2"},{url:"assets/对effect代码的详细解释和精简-3d.html-5J0zjpP3.js",revision:"130d3c562fa12563cd669c7e8ab56868"},{url:"assets/对effect代码的详细解释和精简-3d.html-WHs8E57S.js",revision:"b8eca4fdf21685112a1ceaf5b8edc92e"},{url:"assets/扫光效果-2d.html--JjFb4H1.js",revision:"585ab7deb00f1e290b35a6eb8d7ba442"},{url:"assets/扫光效果-2d.html-g9HCfimf.js",revision:"328bf37deffd19f4902790914f1e5c55"},{url:"assets/放大镜效果-2d.html-C7WuHFIB.js",revision:"2313cbea68bcee033ac8f270e1ce3d12"},{url:"assets/放大镜效果-2d.html-E3UKEBNY.js",revision:"b2bbf053d68ac5186b7e49dd192b2c3f"},{url:"assets/正反贴图不同的shader-3d.html-1cyDHuTI.js",revision:"4354e0a76066a89bacf5218eca179502"},{url:"assets/正反贴图不同的shader-3d.html-LSrhotGW.js",revision:"f93e059a3a75cc4efebe6ad1803be9ce"},{url:"assets/资料汇总.html-51_of4uG.js",revision:"d8bfe362165f1a8d2119bf0760a33802"},{url:"assets/资料汇总.html-sybJHHOX.js",revision:"f6f0e613e650774e2e9dd3d231f21e41"},{url:"logo.svg",revision:"be0017218fa2ecf1f9bd1cffdd852352"},{url:"index.html",revision:"741ccf6ccabb12d0020947ea0edfb4a7"},{url:"404.html",revision:"b1a4b61a8503b174cda66041aa30f3e4"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
