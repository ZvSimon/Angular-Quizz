import {computed, Injectable, signal} from '@angular/core';
import {QuestionInterface} from "../types/question.interface";
import {getMockQuestions} from "../data/questions.data";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  questions = signal<QuestionInterface[]>(getMockQuestions());
  currentQuestionIndex = signal<number>(0);
  currentAnswer = signal<string | null>(null);
  correctAnswerCount = signal<number>(0);
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);

  showResults = computed(() => this.currentQuestionIndex() === this.questions().length);

  currentQuestionAnswers = computed(() =>
    this.shuffleAnswers(this.currentQuestion())
  );

  restart() {
    this.currentQuestionIndex.set(0);
  }

  shuffleAnswers(question: QuestionInterface): string[] {
    const unshuffledAnswers = [question.correctAnswer, ...question.incorrectAnswers];

    return unshuffledAnswers.map((answer) => ({answer, sort: Math.random(), value: answer}))
      .sort((answer, answers) => answer.sort - answers.sort)
      .map((answer) => answer.value);
  }

  selectAnswer(answerText: string): void {
    this.currentAnswer.set(answerText);
    const correctAnswersCount = answerText === this.currentQuestion().correctAnswer ? this.correctAnswerCount() + 1 : this.correctAnswerCount();
    this.correctAnswerCount.set(correctAnswersCount);
  }

  goToNextQuestion() {
    const currentQuestionIndex = this.showResults() ? this.currentQuestionIndex() : this.currentQuestionIndex() + 1;
    this.currentQuestionIndex.set(currentQuestionIndex);
    this.currentAnswer.set(null);
  }


}
