// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)

class Car{
    constructor(make,model,year,isAvailable){
        this.make = make
        this.model = model
        this.year = year
        this.isAvailable = isAvailable
    }
    toggleAvailability(){
        if(this.isAvailability == true ){
            console.log(this.isAvailable ==false)
      
        }else{
            console.log(this.isAvailable ==true)
        }
    }
}
let car = new Car('Benz','cat',2021,true)
console.log({car})

// car.toggleAvailability()


// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.

 class Rental{
   constructor(car,renterName,rentalStartDate,rentalEndDate){
    this.car = car
    this.renterName = renterName
    this.rentalStartDate = rentalStartDate
    this.rentalEndDate = rentalEndDate
   }
   calculateRentalDuration(){
    const oneDay = 24 * 60 * 60 * 1000; 
    const startDate = new Date(this.rentalStartDate)
    const endDate = new Date(this.rentalEndDate)
    const durationInDays = Math.round(Math.abs((endDate - startDate) / oneDay));
    return durationInDays;
   }
  
 

 }
 let rentalStartDate = new Date("2020-03-18");
 let rentalEndDate = new Date("2023-04-02");

 let rental = new Rental('Toyota','Belyse',rentalEndDate,rentalStartDate);
 console.log({rental})


 

 

//  1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.

class Question{
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer = correctAnswer
    }
   
    checkAnswer(answer){
 return answer === this.correctAnswer
        
}
}
let question = new Question("what is the sky color?",["yellow","blue","red","black"],"blue");
console.log({question})
 let answer = "green"
 question.checkAnswer(answer)



// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.

// nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.


// submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.

 class Quiz{
     constructor(questions,currentQuestionIndex,score){
         this.questions = questions
         this.currentQuestionIndex = currentQuestionIndex
         this.score = score
     }
    addQuestion(question){
        let q=this.questions.push(question)
      console.log(q)
     }
     nexQuestion(){
        console.log( this.currentQuestionIndex +=this.currentQuestionIndex)
     }
     submitAnswer(answer){
            const currentQuestion = this.currentQuestionIndex;
            if (currentQuestion.checkAnswer) {
              this.score++;
            }
            this.currentQuestionIndex++;
            console.log(this.score)
          }
          
     }
 
 
 let quiz= new Quiz(["what?","how?"],1,22)
 console.log({quiz})
 quiz.addQuestion("when?")
 console.log(quiz)
//  quiz.nexQuestion()
 quiz.submitAnswer(answer)
 