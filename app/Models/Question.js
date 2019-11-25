export default class Question {
  constructor(data) {
      this.question = data.question || "Who's your daddy and what does he do?"
     
  }

  get questionTemplate() {
      return `
      <div class="col-4">
        <h2>${this.question}</h2>
        </div>
        `
  }
}