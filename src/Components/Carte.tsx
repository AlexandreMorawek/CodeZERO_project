import { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

type questionType = {
	question: string;
	answer1: string;
	answer2: string;
	answer3: string;
	answer4: string;
	correct_answer: string;
	explanation: string;
	onNext: () => void;
	imageUrl: string; // images type ici
};

function Carte({
	question,
	answer1,
	answer2,
	answer3,
	answer4,
	correct_answer,
	explanation,
	onNext,
	imageUrl, // images dans la fonction
}: questionType) {
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [validatedAnswer, setValidatedAnswer] = useState(false);

	const handleSelect = (answer: string) => {
		if (!validatedAnswer) {
			setSelectedAnswer(answer);
			return;
		}
	};

	const handleValidate = () => {
		if (selectedAnswer) {
			setValidatedAnswer(true);
			return;
		}
	};

	const isCorrect = selectedAnswer === correct_answer;
	console.log(selectedAnswer);
	console.log(correct_answer);
	return (
		<>
			<motion.section
				className="h-[screen] pb-[2rem]"
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5 }}
			>
				<div className="w-[80%] md:w-[60%] mx-auto pt-5">
					<h2 className="bg-secondary text-white py-4 px-3 text-center rounded-tr-lg rounded-tl-lg">
						{question}
					</h2>
					<section className="bg-white shadow-2xl flex-col rounded-br-lg rounded-bl-lg">
						<div className=" text-secondary py-4 text-center md:grid md:grid-cols-2">
							<p className={`py-5 mx-7 md:my-3 font-semibold cursor-pointer flex justify-center items-center rounded-lg
								${selectedAnswer === answer1 ? 'border-2 border-blue-500' : 'border border-transparent'}`} onClick={() => handleSelect(answer1)}>{answer1}</p>
							<p className={`py-5 mx-7 md:my-3 font-semibold cursor-pointer flex justify-center items-center rounded-lg
								${selectedAnswer === answer2 ? 'border-2 border-blue-500' : 'border border-transparent'}`} onClick={() => handleSelect(answer2)}>{answer2}</p>
							<p className={`py-5 mx-7 md:my-3 font-semibold cursor-pointer flex justify-center items-center rounded-lg
								${selectedAnswer === answer3 ? 'border-2 border-blue-500' : 'border border-transparent'}`} onClick={() => handleSelect(answer3)}>{answer3}</p>
							<p className={`py-5 mx-7 md:my-3 font-semibold cursor-pointer flex justify-center items-center rounded-lg
								${selectedAnswer === answer4 ? 'border-2 border-blue-500' : 'border border-transparent'}`} onClick={() => handleSelect(answer4)}>{answer4}</p>
						</div>
						<div className="flex justify-center">
							<button
								className="bg-orange-700 text-white px-7 py-2 rounded-full mb-5 cursor-pointer"
								type="button"
								onClick={handleValidate}
							>
								Valider
							</button>
						</div>
					</section>
					{validatedAnswer && (
						<div className="text-center my-6">
							<p className="text-white font-bold text-xl">
								{isCorrect ? (
									<>
										Bonne réponse <i className="bi bi-check-circle-fill text-green-600" />
									</>
								) : (
									<>
									Mauvaise réponse <i className="bi bi-x-circle-fill text-red-600" />
									</>
								)}
							</p>
							<p className="text-white mb-4 mt-3">{explanation}</p>
							<img
								src={imageUrl}
								alt="Animation"
								className="w-32 h-32 mx-auto object-contain"
							/>
						</div>
					)}
				</div>
				<div className="button2 flex justify-center mt-8 ">
					<button
						type="button"
						className="next_question text-white font-semibold flex items-center gap-x-3"
						onClick={onNext}
					>
						Question suivante
						<i className="bi bi-arrow-right-circle-fill text-2xl cursor-pointer" />
					</button>
				</div>
			</motion.section>
		</>
	);
}

export default Carte;
