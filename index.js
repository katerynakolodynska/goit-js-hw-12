import{S as g,a as h,i}from"./assets/vendor-4dYZuk4Q.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();let c;function p(e){const o=document.querySelector(".gallery"),s=e.map(n=>`
      <a href="${n.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${n.webformatURL}"
          alt="${n.tags}" 
          loading="lazy" />

        <ul class="list-wrapper">
          <li class="text-content"><b>Likes:</b> ${n.likes}</li>
          <li class="text-content"><b>Views:</b> ${n.views}</li>
          <li class="text-content"><b>Comments:</b> ${n.comments}</li>
          <li class="text-content"><b>Downloads:</b> ${n.downloads}</li>
        </ul>
        
      </a>
  `).join("");o.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function f(e){e.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function b(){const e=document.querySelector(".loader");e&&e.remove()}function w(){const e=document.querySelector(".gallery");e.innerHTML=""}function d(e){const o=document.querySelector(".btn-load-more");o.style.display=e?"block":"none"}async function L(e,o=1,s=15){const n="https://pixabay.com/api/",t="47525205-faccd6d0438e1a7a5e4c149e6",r=new URLSearchParams({key:t,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s});try{return(await h.get(`${n}?${r}`)).data}catch(a){throw console.error("Error fetching images:",a),a}}let l=1,u="";const S=document.querySelector(".search-form"),q=document.querySelector("input"),m=document.querySelector(".gallery"),C=document.querySelector(".btn-load-more");S.addEventListener("submit",P);C.addEventListener("click",v);async function P(e){if(e.preventDefault(),u=q.value.trim(),!u){i.error({title:"Error",message:"Please enter a search query.",backgroundColor:"red",messageColor:"white",titleColor:"white"});return}l=1,w(),f(m),await y()}async function v(){l+=1,f(m),await y(),$()}async function y(){try{const e=await L(u,l);p(e.hits),e.totalHits<=l*15?(d(!1),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"green",messageColor:"white",titleColor:"white"})):d(!0)}catch(e){console.error("Error fetching images:",e),i.error({title:"Error",message:`Error: ${e.message}`,backgroundColor:"red",messageColor:"white",titleColor:"white"})}finally{b()}}function $(){const e=document.querySelector(".gallery a");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2.6,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
