import _store from "../store.js";
import Question from "../Models/Question.js";


let _questionApi = axios.create({
  baseURL: "https://jservice.io/api/random",
  timeout: 10000
  })
class QuestionService {

  addQuestion(questionData){
    let question = new Question(questionData)
    let questions = _store.State.question.map(q => new Question(q))
    questions.push(question)
    _store.commit("questions", questions)
  }



  loadQuestion(){
    _questionApi.get().then(res =>{
      console.log(res)
      let questions = res.data.data.map(q => new Question(q))
      _store.commit("question", questions)
    })
  }


  constructor(){
    console.log("Hello from teh question service")
    this.loadQuestion()
  }

}

const questionservice = new QuestionService();
export default questionservice;