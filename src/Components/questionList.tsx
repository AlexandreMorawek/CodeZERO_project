import { useState } from "react";
import data from "../data/questions.json";
import animated from "./../data/animated.json"; // import du json pour les images
import Carte from "../Components/Carte";

function QuestionList() {
	const [startQuiz, setStartQuiz] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleNextQuestion = () => {
		if (currentQuestion < data.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setStartQuiz(false);
			setCurrentQuestion(0);
			alert("Quiz terminé");
		}
	};
	const imageUrl = animated.loading[currentQuestion]?.image || ""; // sélection de l'image
	return (
		<>
			{!startQuiz && (
				<div className="button1 flex justify-center items-center h-[39vh]">
					<button
						type="button"
						className="quiz_button bg-orange-700 text-white px-7 py-2 rounded-full cursor-pointer"
						onClick={() => setStartQuiz(true)}
					>
						Commencer le quiz !
					</button>
				</div>
			)}
			{startQuiz && (
				<div className="questionCard">
					<Carte
						key={data[currentQuestion].id}
						question={data[currentQuestion].question}
						answer1={data[currentQuestion].answer1}
						answer2={data[currentQuestion].answer2}
						answer3={data[currentQuestion].answer3}
						answer4={data[currentQuestion].answer4}
						correct_answer={data[currentQuestion].correct_answer}
						explanation={data[currentQuestion].explanation}
						onNext={handleNextQuestion}
						imageUrl={imageUrl} // passe l’image à Carte
					/>
				</div>
			)}
		</>
	);
}

export default QuestionList;
