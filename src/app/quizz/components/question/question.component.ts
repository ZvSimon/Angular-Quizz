import {Component, inject} from '@angular/core';
import {AnswerComponent} from "../answer/answer.component";
import {QuizzService} from "../../services/quizz.service";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    AnswerComponent
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  quizzService = inject(QuizzService);
}
