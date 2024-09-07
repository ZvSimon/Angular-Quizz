import {Component, inject} from '@angular/core';
import {QuestionComponent} from "./components/question/question.component";
import {QuizzService} from "./services/quizz.service";

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  quizzService = inject(QuizzService);


}
