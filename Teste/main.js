/* Barra de navegação */

let search_btn = document.querySelector(".search_btn");
let close_btn = document.querySelector(".close_btn");
let search_box = document.querySelector(".search_box");
let navigation = document.querySelector(".navigation");
let menu_toggle = document.querySelector(".menu_toggle");
let header = document.querySelector("header");

search_btn.onclick = function() {
    search_box.classList.add("active");
    close_btn.classList.add("active");
    search_btn.classList.add("active");
    menu_toggle.classList.add("hide");
    header.classList.toggle("open");

}
close_btn.onclick = function() {
    search_box.classList.remove("active");
    close_btn.classList.remove("active");
    search_btn.classList.remove("active");
    menu_toggle.classList.remove("hide");
    
}
menu_toggle.onclick = function(){
    header.classList.toggle("open");
    search_box.classList.remove("active");
    close_btn.classList.remove("active");
    search_btn.classList.remove("active");
}

/* Fotos com lightbox */

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  })