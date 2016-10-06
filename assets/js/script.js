$(function(){

var visibleHeight = $(window).height();

//Preenche com a img o height visivel da tela 
$(".item").css({'height': (visibleHeight)+'px'});
$(window).resize(function(){'use strict', 
    $(".item").css({'height': (visibleHeight)+'px'});
});

//Time of trasition
$('.carousel').carousel({ interval: 15000 }); 

//Scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".scroll").on('click', function(event){

    // Make sure this.hash has a value before overriding default behavior
    if(this.hash !== ""){
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2500);
    }
  });
});

//Active WOW.js
var wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       10,
    mobile:       true,
    live:         true
}).init();


});
