import {Component, computed, inject, input} from '@angular/core';
import {QuizzService} from "../../services/quizz.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();
  letterMapping = ['A', 'B', 'C', 'D'];
  quizzService = inject(QuizzService);
  isCorrectAnswer = computed(
    () =>
      !!this.quizzService.currentAnswer() &&
      this.answerText() === this.quizzService.currentQuestion().correctAnswer,
  );
  isWrongAnswer = computed(
    () =>
      this.answerText() === this.quizzService.currentAnswer() &&
      this.quizzService.currentAnswer() !==
      this.quizzService.currentQuestion().correctAnswer,
  );


}
