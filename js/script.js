var slider_top = document.querySelector(".slider-top");
var slides_switches = slider_top.querySelector(".slides-switches");

slides_switches.addEventListener("click", function (evt) {
    evt.preventDefault();

    var old_slide = slider_top.querySelector(".slide-visible");
    var new_slide = slider_top.querySelector("#"+evt.target.dataset.for);
    if(old_slide && new_slide) {
        old_slide.classList.toggle("slide-hidden");
        old_slide.classList.toggle("slide-visible");
        new_slide.classList.toggle("slide-hidden");
        new_slide.classList.toggle("slide-visible");
        var old_button = slides_switches.querySelector(".slide-btn-active");
        old_button.classList.toggle("slide-btn-active");
        evt.target.classList.toggle("slide-btn-active");
    } 
});


var services = document.querySelector(".services");
var services_switches = services.querySelector(".services-switches");

services_switches.addEventListener("click", function (evt) {
    evt.preventDefault();

    var old_slide = services.querySelector(".services-slide-visible");
    var new_slide = services.querySelector("."+evt.target.dataset.for);
    if(old_slide && new_slide) {
        old_slide.classList.toggle("services-slide-hidden");
        old_slide.classList.toggle("services-slide-visible");
        new_slide.classList.toggle("services-slide-hidden");
        new_slide.classList.toggle("services-slide-visible");
        var old_button = services.querySelector(".btn-services-active");
        old_button.classList.toggle("btn-services-active");
        old_button.classList.toggle("btn");
        evt.target.classList.toggle("btn-services-active");
        evt.target.classList.toggle("btn");
        old_button.parentElement.classList.toggle("services-switches-active");
        evt.target.parentElement.classList.toggle("services-switches-active");
    } 
});


var map_link = document.querySelector(".map-link");
var modal_map = document.querySelector(".modal-map");
var close_link_modal_map = modal_map.querySelector(".modal-close");

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
});

close_link_modal_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
});

var contacts_link = document.querySelector(".contacts-link");
var modal_wtite_us = document.querySelector(".modal-wtite-us");
var close_link_modal_wtite_us = modal_wtite_us.querySelector(".modal-close");
var input_name = modal_wtite_us.querySelector("[name=name]");

contacts_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_wtite_us.classList.add("modal-show");
    input_name.focus();
});

close_link_modal_wtite_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_wtite_us.classList.remove("modal-show");
    modal_wtite_us.classList.remove("modal-error");
});

var form = modal_wtite_us.querySelector("form");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var varter = form.querySelector("[name=varter]");

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !varter.value) {
        evt.preventDefault();
        modal_wtite_us.classList.add("modal-error");
    }
});
    
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        modal_map.classList.remove("modal-show");
        modal_wtite_us.classList.remove("modal-show");
        modal_wtite_us.classList.remove("modal-error");
    }
});
