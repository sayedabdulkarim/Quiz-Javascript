function Question(texts, choices, answer) {
  this.texts = texts;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}
