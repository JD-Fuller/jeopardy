import AnswerService from "../Services/AnswerService.js";
import _store from "../store";

//Private
function _drawAnswer() {
  let answers = _store.State.answer;
  console.log(answers);
}

//Public
export default class AnswerController {
  constructor() {
    _store.subscribe("answer", _drawAnswer);
  }
}