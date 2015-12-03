var aux = 1;

/*function ver_menu() {
    if (aux == 1){
        document.getElementById("menu").style.left = "0%";
        aux = 0;
    }else{
        document.getElementById("menu").style.left = "-100%";
        aux = 1;   
    }
}*/

function ver_menu() {
    $(".menu_bar").click(function () {
        if (parseInt($('#menu').css("left")) != 0) {
            $("#menu").animate({
                left: "0%"
            }, 400);
        } else {
            $("#menu").animate({
                left: "-100%",
            }, 400);
        }
    });
};