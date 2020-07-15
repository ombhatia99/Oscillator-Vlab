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
			question: "1. Which of these is incorrect for a Wien Bridge oscillator?",
			answers: {
				a: 'Low distortion',
				b: 'Good stability at the resonant frequency',
				c: 'Difficult to tune',
				d: 'Based on frequency selective form of a Wheatstone bridge'
			},
			correctAnswer: 'c'

		},
		{
			question: "2. At the resonant frequency, what is the phase shift for the output in a Wien Bridge oscillator?",
			answers: {
				a: '0°',
				b: '45°',
				c: '90°',
				d: '180°'
			},
			correctAnswer: 'a'
			
		},
		{
			question: "3. Consider the circuit shown below. Given that R1=20kΩ, C1=2nF, R2=20kΩ, C2=2nF, find the approximate resonant frequency.",
			answers: {
				a: '4kHz',
				b: '3kHz',
				c: '25kHz',
				d: '15kHz'
			},
			correctAnswer: 'a',
			image:'image1.png'
			
			
		},
		{
			question: "4. The following circuit is provided. R1=R2 and C1=C2. What is the correct choice for sustained oscillation?",
			answers: {
				a: 'R1 = R2',
				b: 'R4 = 2*R3',
				c: 'R4 = 3*R3',
				d: 'R1 = R2 = R3 = R4'
			},
			correctAnswer: 'b',
			image:'image2.png'
			
		},
		{
			question: "5. Which of these is a disadvantage of Wien Bridge oscillator?",
			answers: {
				a: 'It cannot fabricate a pure tune',
				b: 'Distortion observed in output is high',
				c: 'It cannot be used for high resistance values',
				d: 'There is no automatic gain control'
			},
			correctAnswer: 'c'
			
		},
	{
			question: "6. In the below circuit, the output frequency is 0.5 Mhz. C1 = 5nF, R4 = 40kΩ, R3 = 20kΩ. Find the value of R.",
			answers: {
				a: '63Ω',
				b: '220Ω',
				c: '127Ω',
				d: '55Ω'
			},
			correctAnswer: 'a',
			image:'image3.png'
			
		},
	{
			question: "7. For any Wien Bridge oscillator, R1 = R2 and C1 = C2 always in the bridge, provided the phase shift through the amplifier is zero.",
			answers: {
				a: 'True',
				b: 'False'
				
			},
			correctAnswer: 'b'
			
		},
	{
			question: "8. In a Wien bridge oscillator, it is found that at the frequency ω<sub>o</sub> there is no phase shift in R<sub>f</sub>/R gain loop and the phase shift of the amplifier is also zero. Then what is the equation for the radian frequency, given R1, C1 is the series network of bridge and R2, C2 is the parallel network?",
			answers: {
				a: 'ω<sub>o</sub>=1/R<sub>1</sub>C<sub>1</sub>',
				b: 'ω<sub>o</sub>=1/R<sub>2</sub>C<sub>2</sub>',
				c: 'ω<sub>o</sub>=1/R<sub>1</sub>R<sub>2</sub>C<sub>1</sub>C<sub>2</sub>',
				d: 'ω<sub>o</sub>=1/R<sub>f</sub>C<sub>1</sub>RC<sub>2</sub>'
			},
			correctAnswer: 'c'
			
		},
		
	];


	function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

		function showQuestions(questions, quizContainer){
			
			var output = [];
			var answers;
			var images;

			// for each question...
			for(var i=0; i<questions.length; i++){
				
				// first reset the list of answers
				answers = [];
				images=[];
				if ('image' in questions[i]){
					images.push(
						'<img src= "' +questions[i].image+'"alt="image question">')
				}


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
				if ('image' in questions[i]){
					output.push(
					'<div class="question">' + questions[i].question + '</div>'
					+ '<div class="images">' + images.join('') + '</div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
				);

				}
				else {
					// add this question and its answers to the output
				output.push(
					'<div class="question">' + questions[i].question + '</div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
				);
				}
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

