import AnswerService from "../Services/AnswerService.js";
import _store from "../store";
import Answer from "../Models/Answer.js";

//Private
function _drawAnswer() {
  let template = ''
  let answers = _store.State.answer;
  answers.forEach((answer, i) => template = answer.answerTemplate(i))
  console.log(answers);

  document.querySelector("#answer").innerHTML = template;
}

//Public
export default class AnswerController {
  constructor() {
    _store.subscribe("answer", _drawAnswer);
  }
}