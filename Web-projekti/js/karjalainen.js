let questions = [{
    question: "Mikä on lämpimin kesäkuukausi?",
    choices: ["kesäkuu", "elokuu", "heinäkuu", "joulukuu"],
    correctAnswer: 2
}, {
    question: "Mikä vuodenaika tulee kesän jälkeen?",
    choices: ["kesä", "syksy", "kevät", "talvi"],
    correctAnswer: 1
}, {
    question: "Millä nimellä kutsutaan keskikesän juhlaa?",
    choices: ["Pääsiäinen", "Vappu", "Joulu", "Juhannus"],
    correctAnswer: 3
}, {
    question: "Mikä on Suomen lämpöennätys? (Celsiusta)",
    choices: ["40,5", "37,2", "20,6", "100"],
    correctAnswer: 1
}, {
    question: "Millä toisella nimellä kesää kutsutaan?",
    choices: ["Huvi", "Lumi", "Suvi", "Kumi"],
    correctAnswer: 2
}];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Ole hyvä ja valitse vastauksesi.");
                $(document).find(".quizMessage").show();
            } else {
                
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Pelaa uudestaan?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Seuraava kysymys");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {

    let question = questions[currentQuestion].question;
    let questionClass = $(document).find(".quizContainer > .question");
    let choiceList = $(document).find(".quizContainer > .choiceList");
    let numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    let choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Sait yhteensä: " + correctAnswers + "/" + questions.length + " pistettä.");
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}