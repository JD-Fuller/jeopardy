import QuestionService from "../Services/QuestionService.js";
import store from "../store";

//Private
function _drawQuestion() {
  let questions = store.State.question;
  console.log(questions);
}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("question", _drawQuestion);
  }
}