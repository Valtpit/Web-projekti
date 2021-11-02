/// <reference path="jquery-3.6.0.min.js" />
//Anun koodi, ELÄ RÄPI
//LUONTOVISA
$(function() { 
    
    //Kysymykset näkyviin
    $(".kysymys").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //näytä 1
                $(this).parent().parent().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }else if(vastaus === 2) {
                //näytä 2
                $(this).parent().parent().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 3) {
                //näytä 3
                $(this).parent().parent().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 4) {
                //näytä 4
                $(this).parent().parent().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 5) {
                //näytä 5
                $(this).parent().parent().next().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
            else if(vastaus === 6) {
                //näytä 6
                $(this).parent().parent().next().next().next().next().next().next().removeClass("näytä");
                $(this).parent().addClass("valittu");
            }
    
            $("[name=määrä]").prop("disabled", true);
    });
    let oikein = 0;
//1.luokka
    //Kysymys1
    $(".tintti").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=harakka]").prop("disabled", true);
    });
    
    //Kysymys2
    $(".käpy").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kuusi]").prop("disabled", true);
    });
    
    //Kysymys3
    $(".terho").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=tammi]").prop("disabled", true);
    });
    
    //Kysymys4
    $(".tit").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
    
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=tit]").prop("disabled", true);
    });
    
    //Kysymys5
    $(".marja").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
    
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kataja]").prop("disabled", true);
        $(".tulos").removeClass("näytä");
        $(".nappi").removeClass("näytä");
        $(".tulos").html("Tuloksesi on " + oikein + "/5");
    });
    
//2.luokka
    //Kysymys1
    $(".nalle").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=karhu]").prop("disabled", true);
    });
    
    //Kysymys2
    $(".laulu").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=joutsen]").prop("disabled", true);
    });
    
    //Kysymys3
    $(".marjat").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=pihlaja]").prop("disabled", true);
    });
    
    //Kysymys4
    $(".koira").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=susi]").prop("disabled", true);
    });
    
    //Kysymys5
    $(".sihi").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=siili]").prop("disabled", true);
        $(".tulos").removeClass("näytä");
        $(".nappi").removeClass("näytä");
        $(".tulos").html("Tuloksesi on " + oikein + "/5");
    });
    
//3.luokka
    //Kysymys1
    $(".kärsämö").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=sian]").prop("disabled", true);
    });
    
    //Kysymys2
    $(".olo").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=vesi]").prop("disabled", true);
    });
    
    //Kysymys3
    $(".kierto").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=veden]").prop("disabled", true);
    });
    
    //Kysymys4
    $(".järvi").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=meri]").prop("disabled", true);
    });
    
    //Kysymys5
    $(".lehti").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=kasvi]").prop("disabled", true);
        $(".nappi").removeClass("näytä");
        $(".tulos").removeClass("näytä");
        $(".tulos").html("Tuloksesi on " + oikein + "/5");
    });
    
//4.luokka
   
    //Kysymys1
    $(".ttää").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=yhtey]").prop("disabled", true);
    });

    //Kysymys2
    $(".possu").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=sika]").prop("disabled", true);
    });

     //Kysymys3
     $(".kyntö").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=pelto]").prop("disabled", true);
    });

    //Kysymys4
    $(".vilja").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=viljely]").prop("disabled", true);
    });
    
    //Kysymys5
    $(".kerttu").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=leppä]").prop("disabled", true);
    
        $(".nappi").removeClass("näytä");
        $(".tulos").removeClass("näytä");
        $(".tulos").html("Tuloksesi on " + oikein + "/5");
    });

//5.luokka
   
    //Kysymys1
    $(".mies").on("click", function() {
        
        let vastaus = Number($(this).val());
    
            if(vastaus === 1) {
                //oikein
                $(this).parent().addClass("oikein");
                oikein ++;
            }else{
                //väärä
                $(this).parent().addClass("väärin");
                let name_attribuutti = $(this).attr("name");
                let oikea_vastaus = "[name=" + name_attribuutti + "][value=1]";
                $(oikea_vastaus).parent().addClass("vääränoikea");
            }
        
        $(this).parent().parent().next().removeClass("not_visible");
        $("[name=joka]").prop("disabled", true);
    });
    //KOODIAKOODIALOPPUIHINKI
    });

    
//MATIKKAVISA
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
$(function(){
    //Mitä laskuja
        $(".kysymys1").on("click", function() {
            let vastaus = Number($(this).val());
                if(vastaus === 1) {
                    //yhteen
                    $(this).parent().parent().parent().next().removeClass("näytä");
                    
                }else if(vastaus === 2) {
                    //vähennys
                    $(this).parent().parent().parent().next().next().removeClass("näytä");
                }
                else if(vastaus === 3) {
                    //kerto
                    $(this).parent().parent().parent().next().next().next().removeClass("näytä");
                }
                $(".kysymys1").addClass("näytä");
                $("#maara").addClass("näytä");
            });
    let right = 0;
    //Näytä lasku
        $("#next1").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer2").trigger("focus");
        });
        $("#next2").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer3").trigger("focus");
        });
        $("#next3").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer4").trigger("focus");
        });
        $("#next4").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer5").trigger("focus");
        });
        $("#next5").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer7").trigger("focus");
        });
        $("#next6").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer8").trigger("focus");
        });
        $("#next7").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer9").trigger("focus");
        });
        $("#next8").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer10").trigger("focus");
        });
        $("#next9").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer12").trigger("focus");
        });
        $("#next10").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer13").trigger("focus");
        });
        $("#next11").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer14").trigger("focus");
        });
        $("#next12").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            $("#answer15").trigger("focus");
        });
    //Yhteenlasku
        $("#yhteen").on("click", function() {
            $("#answer1").trigger("focus");
            let number1 = getRndInteger(1, 10);
            let number2 = getRndInteger(1, 10);
            let rightan1 = number1 + number2;
            let number3 = getRndInteger(1, 10);
            let number4 = getRndInteger(1, 10);
            let rightan2 = number3 + number4;
            let number5 = getRndInteger(1, 10);
            let number6 = getRndInteger(1, 10);
            let rightan3 = number5 + number6;
            let number7 = getRndInteger(1, 10);
            let number8 = getRndInteger(1, 10);
            let rightan4 = number7 + number8;
            let number9 = getRndInteger(1, 10);
            let number10 = getRndInteger(1, 10);
            let rightan5 = number9 + number10;
    
                $(".sum1").html(number1 + " + " + number2 + "=");
                $(".sum2").html(number3 + " + " + number4 + "=");
                $(".sum3").html(number5 + " + " + number6 + "=");
                $(".sum4").html(number7 + " + " + number8 + "=");
                $(".sum5").html(number9 + " + " + number10 + "=");
    
    //Näytä tulokset (yhteen)
        $("#allresult").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            let anwser1 = Number($("#answer1").val());
            if(anwser1 === rightan1) {
                right ++;}
            let anwser2 = Number($("#answer2").val());
            if(anwser2 === rightan2) {
                right ++;}
            let anwser3 = Number($("#answer3").val());
            if(anwser3 === rightan3){
                right ++;}
            let anwser4 = Number($("#answer4").val());
            if(anwser4 == rightan4){
                right ++;}
            let anwser5 = Number($("#answer5").val());
            if(anwser5 === rightan5){
                right ++;}
                
            $(".results").html("Sait " + right + "/5 oikein.");

            $("#calcu1").html("1. " + number1 + " + " + number2 + "=" + rightan1);
            $("#calcu2").html("2. " + number3 + " + " + number4 + "=" + rightan2);
            $("#calcu3").html("3. " + number5 + " + " + number6 + "=" + rightan3);
            $("#calcu4").html("4. " + number7 + " + " + number8 + "=" + rightan4);
            $("#calcu5").html("5. " + number9 + " + " + number10 + "=" + rightan5);

            $("#input1").html("1. " + number1 + " + " + number2 + "=" + anwser1);
            $("#input2").html("2. " + number3 + " + " + number4 + "=" + anwser2);
            $("#input3").html("3. " + number5 + " + " + number6 + "=" + anwser3);
            $("#input4").html("4. " + number7 + " + " + number8 + "=" + anwser4);
            $("#input5").html("5. " + number9 + " + " + number10 + "=" + anwser5);
            
            if(right === 0){
            $(".points").html("Tarvitset lisäharjoitusta.");
            }else
            if(right <= 3){
            $(".points").html("Vielä olisi hieman harjoiteltavaa.");
            }else
            if(right === 5){
            $(".points").html("Hienoa. Sait kaikki oikein!");}
            });

            
        });
    //Vähennuslasku
        $("#vähennys").on("click", function() {
            $("#answer6").trigger("focus");
            let number1 = getRndInteger(1, 10);
            let number2 = getRndInteger(1, 10);
            let rightan1 = number1 - number2;
            let number3 = getRndInteger(1, 10);
            let number4 = getRndInteger(1, 10);
            let rightan2 = number3 - number4;
            let number5 = getRndInteger(1, 10);
            let number6 = getRndInteger(1, 10);
            let rightan3 = number5 - number6;
            let number7 = getRndInteger(1, 10);
            let number8 = getRndInteger(1, 10);
            let rightan4 = number7 - number8;
            let number9 = getRndInteger(1, 10);
            let number10 = getRndInteger(1, 10);
            let rightan5 = number9 - number10;
    
                $(".sum1").html(number1 + " - " + number2 + "=");
                $(".sum2").html(number3 + " - " + number4 + "=");
                $(".sum3").html(number5 + " - " + number6 + "=");
                $(".sum4").html(number7 + " - " + number8 + "=");
                $(".sum5").html(number9 + " - " + number10 + "=");
    
    //Näytä tulokset (miinus)
        $("#allresult1").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            let anwser1 = Number($("#answer6").val());
            if(anwser1 === rightan1) {
                right ++;}
            let anwser2 = Number($("#answer7").val());
            if(anwser2 === rightan2) {
                right ++;}
            let anwser3 = Number($("#answer8").val());
            if(anwser3 === rightan3){
                right ++;}
            let anwser4 = Number($("#answer9").val());
            if(anwser4 == rightan4){
                right ++;}
            let anwser5 = Number($("#answer10").val());
            if(anwser5 === rightan5){
                right ++;}
                
            $(".results").html("Sait " + right + "/5 oikein.");

            $("#calcu6").html("1. " + number1 + " - " + number2 + "=" + rightan1);
            $("#calcu7").html("2. " + number3 + " - " + number4 + "=" + rightan2);
            $("#calcu8").html("3. " + number5 + " - " + number6 + "=" + rightan3);
            $("#calcu9").html("4. " + number7 + " - " + number8 + "=" + rightan4);
            $("#calcu10").html("5. " + number9 + " - " + number10 + "=" + rightan5);

            $("#input6").html("1. " + number1 + " - " + number2 + "=" + anwser1);
            $("#input7").html("2. " + number3 + " - " + number4 + "=" + anwser2);
            $("#input8").html("3. " + number5 + " - " + number6 + "=" + anwser3);
            $("#input9").html("4. " + number7 + " - " + number8 + "=" + anwser4);
            $("#input10").html("5. " + number9 + " - " + number10 + "=" + anwser5);
    
            if(right === 0){
            $(".points").html("Tarvitset lisäharjoitusta.");
            }else
            if(right <= 3){
            $(".points").html("Vielä olisi hieman harjoiteltavaa.");
            }else
            if(right === 5){
            $(".points").html("Hienoa. Sait kaikki oikein!");}
        });
        });
    //Kertolaskut
        $("#kerto").on("click", function() {
            $("#answer11").trigger("focus");
            let number1 = getRndInteger(1, 10);
            let number2 = getRndInteger(1, 10);
            let rightan1 = number1 * number2;
            let number3 = getRndInteger(1, 10);
            let number4 = getRndInteger(1, 10);
            let rightan2 = number3 * number4;
            let number5 = getRndInteger(1, 10);
            let number6 = getRndInteger(1, 10);
            let rightan3 = number5 * number6;
            let number7 = getRndInteger(1, 10);
            let number8 = getRndInteger(1, 10);
            let rightan4 = number7 * number8;
            let number9 = getRndInteger(1, 10);
            let number10 = getRndInteger(1, 10);
            let rightan5 = number9 * number10;
    
                $(".sum1").html(number1 + " * " + number2 + "=");
                $(".sum2").html(number3 + " * " + number4 + "=");
                $(".sum3").html(number5 + " * " + number6 + "=");
                $(".sum4").html(number7 + " * " + number8 + "=");
                $(".sum5").html(number9 + " * " + number10 + "=");
    
    //Näytä tulokset (kerto)
        $("#allresult2").on("click", function() {
            $(this).parent().addClass("näytä");
            $(this).parent().next().removeClass("näytä");
            let anwser1 = Number($("#answer11").val());
            if(anwser1 === rightan1) {
                right ++;}
            let anwser2 = Number($("#answer12").val());
            if(anwser2 === rightan2) {
                right ++;}
            let anwser3 = Number($("#answer13").val());
            if(anwser3 === rightan3){
                right ++;}
            let anwser4 = Number($("#answer14").val());
            if(anwser4 == rightan4){
                right ++;}
            let anwser5 = Number($("#answer15").val());
            if(anwser5 === rightan5){
                right ++;}
                
            $(".results").html("Sait " + right + "/5 oikein.");

            $("#calcu11").html("1. " + number1 + " * " + number2 + "=" + rightan1);
            $("#calcu12").html("2. " + number3 + " * " + number4 + "=" + rightan2);
            $("#calcu13").html("3. " + number5 + " * " + number6 + "=" + rightan3);
            $("#calcu14").html("4. " + number7 + " * " + number8 + "=" + rightan4);
            $("#calcu15").html("5. " + number9 + " * " + number10 + "=" + rightan5);

            $("#input11").html("1. " + number1 + " * " + number2 + "=" + anwser1);
            $("#input12").html("2. " + number3 + " * " + number4 + "=" + anwser2);
            $("#input13").html("3. " + number5 + " * " + number6 + "=" + anwser3);
            $("#input14").html("4. " + number7 + " * " + number8 + "=" + anwser4);
            $("#input15").html("5. " + number9 + " * " + number10 + "=" + anwser5);
    
            if(right === 0){
            $(".points").html("Tarvitset lisäharjoitusta.");
            }else
            if(right <= 3){
            $(".points").html("Vielä olisi hieman harjoiteltavaa.");
            }else
            if(right === 5){
            $(".points").html("Hienoa. Sait kaikki oikein!");}
        });
        });
    });
