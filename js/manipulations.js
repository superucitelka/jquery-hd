$(function(){

    $("#get-set").on("click", function(){
        let nadpis = $("h1").text();
        $("h2").text(nadpis);         
        $("h3").html($("h1").html()); 
        let znak = $("#znak").attr("src");
        $("#mapa").attr("src", znak);
        let hledej = $("input[type=text]").val();
        $("small").text(hledej); 
    });   

    $("#insert").on("click", function(){
        $("h1").append("append");
        $("h1").prepend("prepend");
        $("h1").before("<h4>before</h4>","<hr>");
        $("h1").after("<hr>","<h4>after</h4>");
        $("p:first").wrap("<b></b>");
    });   

    $("#remove").on("click", function(){
        $("h1 small").remove();
        $("p").remove(".poznamka");
        $("tr:first").empty();
        $("h1").unwrap();
        $("img").removeAttr("class");
    });   

    $("#css").on("click", function(){
        $("figcaption").css({"font-size":"0.9em", "color":"blue"});
        $("header").removeClass("bg-danger");
        $("header").addClass("bg-primary");
        $("h2").toggleClass("text-center");
    }); 

})