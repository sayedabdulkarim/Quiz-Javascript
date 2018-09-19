function populate(argument) {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function(argument) {
    quiz.guess(guess);
    populate();
  }
}

function showProgress(argument) {
  var currentQuesNo = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML = "Questions " + currentQuesNo + " of " + quiz.questions.length;
}

function showScores(argument) {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'>Your scores : " + quiz.score + "</h2>";

  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}


var questions = [
  new Question("Which one is not an Object Oriented Programming language?", ["Java", "C#", "C++", "C"], "C"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("There are ________ main components of Object Oriented Programming?", ["1", "6", "2", "4"], "4"),
  new Question("which language is used fpr web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
  new Question("MVC is a ________", ["language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();