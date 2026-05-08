
function start() {
    $("div").mouseenter(function () {
        //alert('Cursor is in!');
        $("div").html("<h2>mouse entered</h2>");
    });
    $("div").mouseleave(function () {
        //alert('Cursor is in!');
        $("div").html("<h2>mouse left</h2>");
    });

    $("p").hover(function(){ $("p").css("background-color","yellow"); }, 
                 function(){ $("p").css("background-color","pink");   } );    

}
$(document).ready(start);


