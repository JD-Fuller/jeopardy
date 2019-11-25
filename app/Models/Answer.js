export default class Answer {
  constructor(data) {
      this.answer = data.answer || "Kindergarden Teacher"
  }

  get answerTemplate() {
      return `
      <div class="col-4">
        <h2>${this.answer}</h2>
        </div>
        `
  }
}