$(document).ready(function(){
    //menu visibility toggle
    $('.js-menu-toggle').on('click', function(event){
        event.preventDefault();
        $('.menu').toggleClass("menu--open");
    }); 
    //menu dots
    $('.menu__item').hover(function(){
        var targetChild = $(this).find('.menu__dot');
        targetChild.toggleClass("menu__dot--mouseover");
    }); 
});
