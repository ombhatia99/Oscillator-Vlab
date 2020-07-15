

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
			question: "1. RC phase shift oscillators contain a minimum of _________ Phase shift network.",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'c'

		},
		{
			question: "2. One phase shift network of an RC phase shift oscillator contain __________ capacitor.",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "3. One phase shift network of an RC phase contain _________ inductor.",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'd'
			
		},
		{
			question: "4. One phase shift network of an RC phase contain __________ resistor.",
			answers: {
				a: '1',
				b: '2',
				c: '3',
				d: '0'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "5. Phase shift provided by one phase shift network in RC phase shift oscillator in 3 stage is ___________",
			answers: {
				a: '180 degrees',
				b: '60 degrees',
				c: '120 degrees',
				d: '90 degrees'
			},
			correctAnswer: 'b'
			
		},
	{
			question: "6. Total phase shift provided by all phase shift networks in RC phase shift oscillator is ___________",
			answers: {
				a: '180 degrees',
				b: '60 degrees',
				c: '120 degrees',
				d: '360 degrees'
			},
			correctAnswer: 'a'
			
		},
	{
			question: "7. The phase shift network will produce a phase shift of 180 degrees at ___________",
			answers: {
				a: 'Three different frequencies',
				b: 'One frequency',
				c: 'Two different frequencies',
				d: 'Infinitely frequencies'
			},
			correctAnswer: 'b'
		},
		{
			question: "8. Which of the following is not a reason for beginning oscillations in RC phase shift oscillator?",
			answers: {
				a: 'Phase shift network',
				b: 'Noise inherent in transistor',
				c: 'Minor variations in the voltage DC source',
				d: 'Square wave signal'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "9. Amplifier gain for RC phase shift oscillation, to obey Barkhausen’s criteria should be minimum of ___________",
			answers: {
				a: '43',
				b: '4',
				c: '10',
				d: '29'
			},
			correctAnswer: 'd'
			
		},
		{
			question: "10. Phase shift provided by one phase shift network in RC phase shift network in 4-stage will be ___________",
			answers: {
				a: '180 degrees',
				b: '45 degrees',
				c: '60 degrees',
				d: '90 degrees'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "11. Frequency of oscillation for three section RC phase shift network is given by ___________",
			answers: {
				a: '1/(ᴨ√6 RC)',
				b: '2/(ᴨ√6 RC)',
				c: '1/(2ᴨ√6 RC)',
				d: '1/(2√6 RC)'
			},
			correctAnswer: 'c'
			
		},
		{
			question: "12. Distortion level in the output of RC phase shift network will be less than ___________",
			answers: {
				a: '1%',
				b: '2%',
				c: '5%',
				d: '10%'
			},
			correctAnswer: 'c'
			
		},
		{
			question: "13. Which of the following is not true for an RC phase shift oscillator?",
			answers: {
				a: 'Not Bulky',
				b: 'Less costly',
				c: 'Effective for oscillation less than 10KHz',
				d: 'Pure sine wave output is possible'
			},
			correctAnswer: 'd'
			
		},
		{
			question: "14. The feedback factor for RC phase shift oscillator is ___________",
			answers: {
				a: '1/18',
				b: '1/29',
				c: '1/11',
				d: '1/33'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "15. What will be oscillator frequency, if phase shift network of 3stages of RC phase shift oscillator contains a capacitor of 7nF and a resistance of 10K in each stage?",
			answers: {
				a: '928 Hz',
				b: '1KHz',
				c: '1.2KHz',
				d: '895Hz'
			},
			correctAnswer: 'a'
			
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

