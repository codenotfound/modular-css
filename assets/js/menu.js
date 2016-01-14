$(document).ready(function(){
    //menu toggle
    $('.js-menu-toggle').on('click', function(event){
        event.preventDefault();

        var menu = $('.menu');
        
        // toggle open class
        menu.toggleClass("menu--open");
    }); 
});
