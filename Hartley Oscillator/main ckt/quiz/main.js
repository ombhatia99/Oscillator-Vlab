


function download(file, text) { 

        //creating an invisible element 
        var element = document.createElement('a'); 
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' 
                             + encodeURIComponent(text)); 
        element.setAttribute('download', file); 

        //the above code is equivalent to 
        // <a href="path of file" download="file name"> 

        document.getElementById("quiz body").appendChild(element); 

        //onClick property 
        element.click(); 

        document.getElementById('quiz body').removeChild(element); 
    } 

function loadquiz(){
	document.getElementById('quiz body').style.display="block";
	document.getElementById('inital').style.display='none';

	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');
	var myQuestions = [
		{
			question: "1. Recommended frequency range of Harley oscillator is __________",
			answers: {
				a: '30KHz-30MHz',
				b: '1KHz-10MHz',
				c: '2Hz-3MHz',
				d: '0.5KHz-40MHz'
			},
			correctAnswer: 'a'

		},
		{
			question: "2. Lower frequencies are not practically possible in the case of Harley oscillator because of the requirement of low ___________ value.",
			answers: {
				a: 'Capacitance',
				b: 'Resistance',
				c: 'Inductance',
				d: 'Gain'
			},
			correctAnswer: 'c'
			
		},
		{
			question: "3. Which type of feedback is used by Hartley oscillator?",
			answers: {
				a: 'Voltage series feedback',
				b: 'Current series feedback',
				c: 'Voltage shunt feedback',
				d: 'Current shunt feedback'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "4. Which component of Hartley oscillator is used in feedback system?",
			answers: {
				a: 'Inductor',
				b: 'Resistor',
				c: 'Capacitor',
				d: 'Transistor'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "5. Which of the following network is used to give feedback to transistor of Hartley oscillator?",
			answers: {
				a: 'Inductive fixed bias',
				b: 'Capacitive fixed bias',
				c: 'Inductive voltage divider',
				d: 'Capacitive voltage divider'
			},
			correctAnswer: 'c'
			
		},
	{
			question: "6. How many capacitors are there in the tank circuit of Hartley oscillator?",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'a'
			
		},
	{
			question: "7. How many inductors are there in the tank circuit of Hartley oscillator?",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'b'
			
		},
	{
			question: "8 The frequency of Hartley oscillator is expressed as __________(Where L is effective inductance and C is the capacitance)",
			answers: {
				a: '1/(4ᴨ√LC)',
				b: '1/(2ᴨ√LC)',
				c: '1/(3ᴨ√LC)',
				d: '√3/(2ᴨ√LC)'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "9. Active element used in Hartley oscillator is __________",
			answers: {
				a: 'Cell',
				b: 'Voltage regulator',
				c: 'Diode',
				d: 'Transistor'
			},
			correctAnswer: 'd'
			
		},
		{
			question: "10. Hartley oscillator uses which type of feedback?",
			answers: {
				a: 'Negative feedback ',
				b: 'Positive feedback',
				c: 'No feedback',
				d: 'Positive or Negative depends upon the frequency'
			},
			correctAnswer: 'b'
			
		},
	];


	function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

		function showQuestions(questions, quizContainer){
			
			var output = [];
			var answers;

			// for each question...
			for(var i=0; i<questions.length; i++){
				
				// first reset the list of answers
				answers = [];

				// for each available answer to this question...
				for(letter in questions[i].answers){

					// ...add an html radio button
					answers.push(
						'<label>'
							+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
							+ letter + ': '
							+ questions[i].answers[letter]
						+ '</label>'
					);
				}

				// add this question and its answers to the output
				output.push(
					'<div class="question">' + questions[i].question + '</div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
				);
			}

			// finally combine our output list into one string of html and put it on the page
			quizContainer.innerHTML = output.join('');
				// code will go here
		}
		

		function showResults(questions, quizContainer, resultsContainer){
			var answerContainers = quizContainer.querySelectorAll('.answers');
		
			// keep track of user's answers
			var userAnswer = '';
			var selectedAns={"questionNO":"answer"};
			var numCorrect = 0;
			
			// for each question...
			for(var i=0; i<questions.length; i++){

				// find selected answer
				userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
				selectedAns[i+1]=userAnswer;
				console.log(userAnswer)
				
				
				// if answer is correct
				if(userAnswer===questions[i].correctAnswer){
					// add to the number of correct answers
					numCorrect++;
					
					// color the answers green
					answerContainers[i].style.color = 'lightgreen';
				}
				// if answer is wrong or blank
				else{
					// color the answers red
					answerContainers[i].style.color = 'red';
				}
			}

			// show number of correct answers out of total
			alert('Hey, You got '+ numCorrect + ' out of ' + questions.length)
			resultsContainer.innerHTML = 'You got '+ numCorrect + ' out of ' + questions.length;
				// code will go here
					// Start file download. 
		    document.getElementById("selectedAns").addEventListener("click", function() { 
		        // Generate download of hello.txt file with some content 
		        
		        var filename = "Results.doc"; 

		        download(filename, JSON.stringify(selectedAns).split(",").join("\n")); 
    }, false); 
		}

		// show the questions
		showQuestions(questions, quizContainer);

		// when user clicks submit, show results
		submitButton.onclick = function(){
			showResults(questions, quizContainer, resultsContainer);

			var viewAnswer=document.getElementById("secondbutton")
			viewAnswer.style.display='inline-block'
			viewAnswer.onclick=function (){
				window.open('answers.html',"_blank")
			}

			var saveAns=document.getElementById("selectedAns")
			saveAns.style.display='block'
			
			
			

		}
	}
	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

	

    


}

