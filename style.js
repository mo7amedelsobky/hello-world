$(document).ready(function(){
    $(".form-register").hide();
    $(".login-toggle").addClass("member");
    $(".login-toggle").click(function(){
        $(".login-toggle").addClass("member");
        $(".register-toggle").removeClass("member");
        $(".form-login").show();
        $(".form-register").hide();
    });
    $(".register-toggle").click(function(){
        $(".register-toggle").addClass("member");
        $(".login-toggle").removeClass("member");
        $(".form-register").show();
        $(".form-login").hide();
    });
    $("a.active").css("color","#00ceef")
                
});