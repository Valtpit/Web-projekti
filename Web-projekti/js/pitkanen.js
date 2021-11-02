let correct = 0
let hide = 1
let show = 2
let amount = 1


$("#show_quiz1").on("click", function(){
    $("#hidden1").show(0)
    $("#amount1").html("Kysymys " + amount + "/5")
    $("#show_quiz1").prop("disabled", true)
    $("#result").html("")
    correct = 0
    hide = 1
    show = 2
    amount = 1
    for (let index = 0; index < 6; index++) {
        $("[name=quiz" + index + "]").prop('checked', false)
        $("#quiz" + index + "a").prop("disabled", false)
        $("#quiz" + index + "a").removeAttr("style")
        $("#quiz" + index + "b").prop("disabled", false)
        $("#quiz" + index + "b").removeAttr("style")
        $("#quiz" + index + "c").prop("disabled", false)
        $("#quiz" + index + "c").removeAttr("style")
        $("#amount1").html("Kysymys " + amount + "/5")
        $("#kortti" + index).removeClass("oikein")
        $("#kortti" + index).removeClass("väärin")
        $("#ans" + index).html("")
        $("#hiddenPic" + index).hide(0)
        $("#trophy").html("")
    }
})



$("#next1, #next2, #next3, #next4, #next5").on("click", function(){
    $("#hidden" + hide).hide(0)
    $("#hidden" + show).removeAttr("style")
    amount = amount + 1
    $("#amount1").html("Kysymys " + amount + "/5")
    hide = hide + 1
    show = show + 1
})



$("[name=quiz1]").on("click", function(){
    let type = Number($("[name=quiz1]:checked").val())
    if (type === 3) {
        $().prop(this.style.backgroundColor = 'green')
        $("#kortti1").addClass("oikein")
        $("#hiddenPic1").show(0)
        correct = correct + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
        $("#kortti1").addClass("väärin")
        $("#ans1").html("<br> Oikea vastaus on Kirjoittaa. <br> Verbi tarkoittaa tekemistä.")
    }
    $("#quiz1a").prop("disabled", true)
    $("#quiz1b").prop("disabled", true)
    $("#quiz1c").prop("disabled", true)
})

$("[name=quiz2]").on("click", function(){
    let type = Number($("[name=quiz2]:checked").val())
    if (type === 1) {
        $().prop(this.style.backgroundColor = 'green')
        $("#kortti2").addClass("oikein")
        $("#hiddenPic2").show(0)
        correct = correct + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
        $("#kortti2").addClass("väärin")
        $("#ans2").html("<br> Oikea vastaus on viisas. <br> adjektiivi kertoo millainen joku asia tai esine on.")
    }
    $("#quiz2a").prop("disabled", true)
    $("#quiz2b").prop("disabled", true)
    $("#quiz2c").prop("disabled", true)
})

$("[name=quiz3]").on("click", function(){
    let type = Number($("[name=quiz3]:checked").val())
    if (type === 2) {
        $().prop(this.style.backgroundColor = 'green')
        $("#kortti3").addClass("oikein")
        $("#hiddenPic3").show(0)
        correct = correct + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
        $("#kortti3").addClass("väärin")
        $("#ans3").html("<br> Oikea vastaus on kirja. <br> Substantiivi tarkoittaa asiaa tai esinettä.")
    }
    $("#quiz3a").prop("disabled", true)
    $("#quiz3b").prop("disabled", true)
    $("#quiz3c").prop("disabled", true)
})

$("[name=quiz4]").on("click", function(){
    let type = Number($("[name=quiz4]:checked").val())
    if (type === 3) {
        $().prop(this.style.backgroundColor = 'green')
        $("#kortti4").addClass("oikein")
        $("#hiddenPic4").show(0)
        correct = correct + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
        $("#kortti4").addClass("väärin")
        $("#ans4").html("<br> Oikea vastaus on lenkkari. <br> Juosta ja kävellä ovat verbejä.")
    }
    $("#quiz4a").prop("disabled", true)
    $("#quiz4b").prop("disabled", true)
    $("#quiz4c").prop("disabled", true)
})

$("[name=quiz5]").on("click", function(){
    let type = Number($("[name=quiz5]:checked").val())
    if (type === 1) {
        $().prop(this.style.backgroundColor = 'green')
        $("#kortti5").addClass("oikein")
        $("#hiddenPic5").show(0)
        correct = correct + 1
    } else {
        $().prop(this.style.backgroundColor = 'red')
        $("#kortti5").addClass("väärin")
        $("#ans5").html("<br> Oikea vastaus on kolme. <br> numeraali tarkoittaa sanaa jota voidaan kirjoittaa myös numerona esim. 3.")
    }
    $("#quiz5a").prop("disabled", true)
    $("#quiz5b").prop("disabled", true)
    $("#quiz5c").prop("disabled", true)
})

$("#show_result").on("click", function(){
    $("#hidden5").hide(0)
    $("#hidden6").hide(0)
    $("#amount1").html("")
    $("#show_quiz1").prop("disabled", false)
    $("#result").html("Sait " + correct + "/5 oikein!")
    $("#show_quiz1").html("Kokeile uudestaan!")
    
    if (correct <= 1) {
        $("#result").append("<br>" + "Ei mennyt ihan putkeen, yritä uudelleen!")
        $("#trophy").append("<span class='bronze'><i class='fa fa-trophy'  aria-hidden='true'></i></span>")
    } else if (correct <= 2) {
        $("#result").append("<br>" + "Vielä olisi varaa parantamiselle, yritä vielä!")
        $("#trophy").append("<span class='silver'><i class='fa fa-trophy'  aria-hidden='true'></i></span>")
    } else if (correct <= 4) {
        $("#result").append("<br>" + "Hyvin meni! Voit tähdätä vielä täysiin pisteisiin!")
        $("#trophy").append("<span class='gold'><i class='fa fa-trophy'  aria-hidden='true'></i></span>")
    } else {
        $("#result").append("<br>" + "Sait täydet pisteet!")
        $("#trophy").append("<span class='diamond'><i class='fa fa-trophy'  aria-hidden='true'></i></span>")
    }
})


//sivu2
let raha = 1000000
let clickMultiplier = 1
let clickPrice = 30
let clickAmount = 0

let autoclicker = 0
let autoPrice = 40
let autoAmount = 0

let multiplier = 1
let multiplierPrice = 500
let multiplierAmount = 0

function spacing(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
//https://stackoverflow.com/a/16637170

function update() {
    $("#money").html(spacing(Math.round(raha)))
    $("#clickMultiplier").html(spacing(Math.round(clickMultiplier)))
    $("#mPerSec").html(spacing(Math.round(autoclicker)))
    $("#clickPrice").html(spacing(Math.round(clickPrice)))
    $("#autoPrice").html(spacing(Math.round(autoPrice)))
    $("#multiplierPrice").html(spacing(Math.round(multiplierPrice)))
    $("#clickAmount").html(spacing(clickAmount))
    $("#autoAmount").html(spacing(autoAmount))
    $("#multiplierAmount").html(spacing(multiplierAmount))

    if (raha >= 1000) {
        $("#bronze").removeClass("piilo")
    }

    if (raha >= 10000) {
        $("#silver").removeClass("piilo")
    }

    if (raha >= 100000) {
        $("#gold").removeClass("piilo")
    }

    if (raha >= 1000000) {
        $("#diamond").removeClass("piilo")
    }
}

$(document).ready(function() {
    $("#money").html(raha)
    $("#clickPrice").html(clickPrice)
    $("#clickMultiplier").html(clickMultiplier)
    $("#autoPrice").html(autoPrice)
    $("#multiplierPrice").html(multiplierPrice)
    $("#clickAmount").html(clickAmount)
    $("#autoAmount").html(autoAmount)
    $("#multiplierAmount").html(multiplierAmount)
});

setInterval(timer, 1000)

function timer() {
    raha = raha + autoclicker;
    update()
}

$("#coin").on("click", function(){
    raha = raha + clickMultiplier
    update()
    
})

$("#buyClick").on("click", function(){
    if (raha >= clickPrice) {
        raha = raha - clickPrice
        ++ clickMultiplier
        ++ clickAmount
        clickPrice = clickPrice * 1.1
        update()
    }
})

$("#buyAuto").on("click", function(){
    if (raha >= autoPrice) {
        raha = raha - autoPrice
        ++ autoclicker
        autoPrice = autoPrice * 1.2
        ++ autoAmount
        $("#perSecText").removeClass("piilo")
        update()
    }
})

$("#buyMultiplier").on("click", function(){
    if (raha >= multiplierPrice) {
        raha = raha - multiplierPrice
        clickMultiplier = clickMultiplier * 2
        autoclicker = autoclicker * 2
        multiplierPrice = multiplierPrice * 1.6
        ++ multiplierAmount
        update()
    }
})