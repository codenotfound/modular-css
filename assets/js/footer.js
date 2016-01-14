$(document).ready(function(){
// ==================================================
    // footer hover 
// ==================================================
    $(".footer__social-line--dribbble").hover(
        function() {
            $(this).children(".footer__social-img").attr("src","assets/img/dribbble_hover.png");
            $(this).children(".footer__social-link").css("border-color", "#ea4c89"); 
        },
        function() {
            $(this).children(".footer__social-img").attr("src","assets/img/dribbble.png");
            $(this).children(".footer__social-link").css("border-color", "#D6D6D7"); 
        }
    );
    $(".footer__social-line--vk").hover(
        function() {
            $(this).children(".footer__social-img").attr("src","assets/img/vk_hover.png");
            $(this).children(".footer__social-link").css("border-color", "#1f4685"); 
        },
        function() {
            $(this).children(".footer__social-img").attr("src","assets/img/vk.png");
            $(this).children(".footer__social-link").css("border-color", "#D6D6D7"); 
        }
    );
    $(".footer__social-line--instagram").hover(
        function() {
            $(this).children(".footer__social-img").attr("src",
                "assets/img/instagram_hover.png");
            $(this).children(".footer__social-link").css("border-color", "#a87e5e"); 
        },
        function() {
            $(this).children(".footer__social-img").attr("src","assets/img/instagram.png");
            $(this).children(".footer__social-link").css("border-color", "#D6D6D7"); 
        }
    );
    
});
