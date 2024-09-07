import {QuestionInterface} from "../../types/question.interface";

export function getMockQuestions(): QuestionInterface[] {
  return [
    {
      question: 'What are standalone components in Angular?',
      incorrectAnswers: [
        'Components that cannot be lazy-loaded',
        'Components that require a module',
        'Components that do not support dependency injection'
      ],
      correctAnswer: 'Components that do not require an NgModule'
    },
    {
      question: 'Which version of Angular introduced signals as a reactivity model?',
      incorrectAnswers: ['Angular 14', 'Angular 15', 'Angular 13'],
      correctAnswer: 'Angular 16'
    },
    {
      question: 'How do you define a standalone component in Angular?',
      incorrectAnswers: [
        'By setting standalone: false in the @Component decorator',
        'By importing it into a module',
        'By creating the component with ng generate module'
      ],
      correctAnswer: 'By setting standalone: true in the @Component decorator'
    },
    {
      question: 'What is the purpose of signals in Angular 16?',
      incorrectAnswers: [
        'To replace services',
        'To handle routing between pages',
        'To define reusable animations'
      ],
      correctAnswer: 'To manage reactive data flow'
    },
    {
      question: 'How do you declare a signal in Angular?',
      incorrectAnswers: [
        'const signal = createSignal()',
        'let signal = new Signal()',
        'const signal = new BehaviorSubject()'
      ],
      correctAnswer: 'const mySignal = signal(initialValue)'
    },
    {
      question: 'Which of the following features are NOT introduced in Angular 16?',
      incorrectAnswers: ['Signals', 'Standalone Components', 'Environment Variables'],
      correctAnswer: 'Standalone Modules'
    },
    {
      question: 'Which Angular CLI command generates a standalone component?',
      incorrectAnswers: [
        'ng generate component --standalone=false',
        'ng new component',
        'ng g c --module'
      ],
      correctAnswer: 'ng generate component --standalone'
    },
    {
      question: 'What are the benefits of standalone components?',
      incorrectAnswers: [
        'Standalone components cannot be reused across projects',
        'Standalone components require complex routing configurations',
        'Standalone components do not support services'
      ],
      correctAnswer: 'They simplify the app structure by removing the need for NgModules'
    },
    {
      question: 'How can you access a signal value in Angular?',
      incorrectAnswers: [
        'mySignal.value()',
        'get(mySignal)',
        'mySignal.get()'
      ],
      correctAnswer: 'mySignal()'
    },
    {
      question: 'What is the correct way to update a signal value in Angular?',
      incorrectAnswers: [
        'mySignal.set(newValue)',
        'mySignal.updateValue(newValue)',
        'mySignal.modify(newValue)'
      ],
      correctAnswer: 'mySignal.set(newValue)'
    },
    {
      question: 'In Angular, signals can be combined to create computed values using which function?',
      incorrectAnswers: [
        'computedSignal()',
        'combine()',
        'mergeSignals()'
      ],
      correctAnswer: 'computed()'
    },
    {
      question: 'Which function is used to react to signal changes in Angular 16?',
      incorrectAnswers: [
        'onSignalChange()',
        'reactToSignal()',
        'signalWatch()'
      ],
      correctAnswer: 'effect()'
    },
    {
      question: 'What is the main advantage of the signal-based reactivity model in Angular?',
      incorrectAnswers: [
        'It automatically manages form validation',
        'It reduces the need for RxJS and Observables',
        'It improves HTTP handling'
      ],
      correctAnswer: 'It provides a simpler and more efficient reactivity model than Observables'
    },
    {
      question: 'What should be used instead of the Angular module when creating standalone components?',
      incorrectAnswers: [
        'Directives',
        'Services',
        'Injectors'
      ],
      correctAnswer: 'importProvidersFrom()'
    },
    {
      question: 'How do you handle route configuration for standalone components?',
      incorrectAnswers: [
        'Using the NgModule routing',
        'By declaring the route inside the component itself',
        'By importing RouterModule in every component'
      ],
      correctAnswer: 'By directly defining the routes in the router configuration'
    },
    {
      question: 'In Angular 16, how are standalone components different from traditional components?',
      incorrectAnswers: [
        'They must be declared in a module',
        'They require additional setup for templates',
        'They do not support Angular DI'
      ],
      correctAnswer: 'They are self-contained and do not need to be declared in an NgModule'
    },
    {
      question: 'What is the primary motivation behind introducing standalone components in Angular?',
      incorrectAnswers: [
        'To support new JavaScript features',
        'To enhance backward compatibility',
        'To improve CSS isolation'
      ],
      correctAnswer: 'To simplify the application structure by reducing the reliance on NgModules'
    },
    {
      question: 'Which lifecycle hook can be used with signals to track changes over time?',
      incorrectAnswers: [
        'ngOnChanges',
        'ngDoCheck',
        'ngAfterContentInit'
      ],
      correctAnswer: 'effect()'
    },
    {
      question: 'Which operator is NOT commonly used in Angular signals?',
      incorrectAnswers: [
        'set()',
        'mutate()',
        'computed()'
      ],
      correctAnswer: 'pipe()'
    },
    {
      question: 'Which version of Angular dropped support for View Engine?',
      incorrectAnswers: ['Angular 12', 'Angular 14', 'Angular 15'],
      correctAnswer: 'Angular 16'
    }
  ];
}
