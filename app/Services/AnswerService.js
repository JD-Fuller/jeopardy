import _store from "../store.js";
import Answer from "../Models/Answer.js";


let _answerApi = axios.create({
baseURL: "https://jservice.io/api/random",
timeout: 10000
})

class AnswerService {


  addAnswer(answerData) {
    let answer = new Answer(answerData)
    let answers = _store.State.answers.map(a => new Answer(a))
    answers.push(answer)
    _store.commit("answers", answers)
  }

loadAnswers(){
  _answerApi.get().then(res =>{
    console.log(res)
    let answers = res.data.data.map(a => new Answer(a))
    _store.commit("answers", answers)
  })
}


  constructor() {
    console.log("hello from the Answer Service")
    this.loadAnswers()
  }

}

const answerservice = new AnswerService();
export default answerservice;