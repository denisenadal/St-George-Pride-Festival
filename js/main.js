$(document).ready(function(){
    $(".cta-box").hover(
        function(){
            $(this).find(".cta-content").show();
        },
        function(){
            $(this).find(".cta-content").hide();
        }
    );
});
