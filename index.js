import{a as p,S as d,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="55162461-6dc934a4c197e0b77d4d693df";async function g(o){return(await p.get(m,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const i=o.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",i),h.refresh()}function L(){l&&(l.innerHTML="")}function w(){a&&a.classList.add("is-visible")}function S(){a&&a.classList.remove("is-visible")}const v=document.querySelector(".form");v.addEventListener("submit",q);async function q(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){c.warning({message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const r=await g(s);!r.hits||r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(r.hits)}catch{c.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{S()}}
//# sourceMappingURL=index.js.map
