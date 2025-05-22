import 'bootstrap-icons/font/bootstrap-icons.css';

type questionType = {
	question: string;
	answer1: string;
	answer2: string;
	answer3: string;
	answer4: string;
	explanation: string;
	onNext: () => void;
};

function Carte({ question, answer1, answer2, answer3, answer4,onNext }: questionType) {
	return (
		<>
			<section className="h-screen">
				<div className="w-[80%] mx-auto pt-5">
					<h2 className="bg-secondary text-white py-4 px-3 text-center rounded-tr-lg rounded-tl-lg">
						{question}
					</h2>
					<section className="bg-white shadow-2xl flex-col rounded-br-lg rounded-bl-lg">
						<div className=" text-secondary py-4 text-center md:grid md:grid-cols-2">
							<p className="py-3 md:my-5 cursor-pointer">1. {answer1}</p>
							<p className="py-3 md:my-5 cursor-pointer">2. {answer2}</p>
							<p className="py-3 md:my-5 cursor-pointer">3. {answer3}</p>
							<p className="py-3 md:my-5 cursor-pointer">4. {answer4}</p>
						</div>
						<div className="flex justify-center">
							<button
								className="bg-orange-700 text-white px-7 py-2 rounded-full mb-5 cursor-pointer"
								type="button"
							>
								Valider
							</button>
						</div>
					</section>
				</div>
						<div className="button2 flex justify-center mt-8 ">
							<button type="button" className="next_question text-white font-semibold flex items-center gap-x-3" onClick={onNext}>
								Question suivante<i className="bi bi-arrow-right-circle-fill text-2xl cursor-pointer" />
							</button>
							
						</div>
			</section>
		</>
	);
}

export default Carte;
