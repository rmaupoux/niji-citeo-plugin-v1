document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".multi-image-gallery").forEach((e=>{const t=e.querySelectorAll(".gallery-image");let n=0;const l=document.createElement("button");l.textContent="Prev",l.classList.add("slider-nav","prev");const a=document.createElement("button");function c(e){t.forEach(((n,l)=>{n.classList.remove("active","prev"),l===e?n.classList.add("active"):l===(e-1+t.length)%t.length&&n.classList.add("prev")}))}a.textContent="Next",a.classList.add("slider-nav","next"),e.appendChild(l),e.appendChild(a),a.addEventListener("click",(function(){n=(n+1)%t.length,c(n)})),l.addEventListener("click",(function(){n=(n-1+t.length)%t.length,c(n)})),c(n)}))}));