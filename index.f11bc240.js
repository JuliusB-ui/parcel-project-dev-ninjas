(()=>{const e={modalx:document.querySelector(".modal-me"),modalCloseBtn:document.querySelector(".closed-me"),modalTriggers:document.querySelectorAll(".modal-showme")};function n(){window.innerWidth>1157&&e.modalx.classList.remove("is-hidden")}e.modalCloseBtn.addEventListener("click",(function(){e.modal.classList.add("is-hidden")})),e.modalTriggers.forEach((e=>{e.addEventListener("click",n)})),document.querySelectorAll(".image-trigger").forEach((function(e){e.addEventListener("click",(function(e){window.innerWidth<=1157&&e.preventDefault()}))}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)})(),window.addEventListener("scroll",(function(){document.querySelectorAll(".catalog-img").forEach((function(e){e.getBoundingClientRect().top<window.innerHeight&&(e.style.animationPlayState="running")}))}));
//# sourceMappingURL=index.f11bc240.js.map