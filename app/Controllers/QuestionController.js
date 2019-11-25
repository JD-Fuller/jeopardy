import QuestionService from "../Services/QuestionService.js";
import store from "../store";

//Private
function _drawQuestion() {
  let template = ''
  let questions = store.State.question;
  questions.forEach((question, i) => template = question.questionTemplate(i))
  console.log(questions);
  console.log("Look ma, i drew a question");


  document.querySelector("#question").innerHTML = template;
}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("question", _drawQuestion);
  }
}