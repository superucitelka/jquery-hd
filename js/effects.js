$(function(){

    $("#efekty1").on("click", function(){
        $("h1").hide("slow"); // pomalu skryje nadpis h1
        $("h1").show("fast"); // rychle odhalí nadpis h1
        $("h2").toggle(5000); // střídavě skrývá a odhaluje nadpisy h2
    });   

    $("#efekty2").on("click", function(){
        $("h1").fadeOut(5000); // pozvolné "stmívání" (vytrácení se) nadpisu h1 
        $("h1").fadeIn(5000); // pozvolné "roztmívání" nadpisu h1
        $("h2").fadeToggle(5000); // střídavě stmívá a roztmívá nadpisy h2
        $("#znak").fadeTo(2000, 0.5); // 50% zprůhlednění znaku za 2 sekundy 
    });   
    
    $("#efekty3").on("click", function(){
        $("main").slideUp(3000); // zarolování hlavní části stránky
        $("main").slideDown(3000); // vyrolování hlavní části stránky
        $("aside").slideToggle(5000); // střídavě zaroluje a vyroluje postranní blok
    });

    $("#animace").click(function(){
        $("h1").animate({fontSize: "30px", opacity: 0.5}, 5000);
        $("h2").animate({width: "-=200px", height: "+=50px"}, 5000);
        $("#mapa").animate({width: "50%", borderWidth: "10px"}, 5000);
    });

    $("#retezeni").click(function(){
        $("h1").animate({fontSize: "-=30px" }, 2000)
               .animate({left: "200px"});
        $("#znak").css({"position":"absolute"})
                  .animate({left: "50%", top: "-140px"}, 2000)
                  .fadeTo(2000, 0.5);
    });

    $("#callback").click(function(){
        $("#mapa").hide(5000, function() {
            alert('Evropa úplně zmizela!');
        }).show(1000);
    });      

    $("#mapa").click(function(){
        $("#mapa").stop(true, false);
    }); 
})