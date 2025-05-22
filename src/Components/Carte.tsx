type questionType = {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string,
    explanation: string
}

function Carte ({question, answer1, answer2, answer3, answer4} : questionType)  {
	return (
		<>
		<section className="">
		<div className="w-[80%] mx-auto pt-5">
			<h2 className="bg-secondary text-white py-4 px-3 text-center rounded-tr-lg rounded-tl-lg">
				{question}
			</h2>
			<section className="bg-white shadow-2xl flex-col rounded-br-lg rounded-bl-lg">
			<div className=" text-secondary py-4 text-center md:grid md:grid-cols-2">
				<p className="py-3 md:my-7 cursor-pointer">{answer1}</p>
				<p className="py-3 md:my-7 cursor-pointer">{answer2}</p>
				<p className="py-3 md:my-7 cursor-pointer">{answer3}</p>
				<p className="py-3 md:my-7 cursor-pointer">{answer4}</p>
			</div>
			<div className="flex justify-center">
				<button className="bg-secondary text-white px-7 py-2 rounded-full mb-5 cursor-pointer" type="button">Valider</button>
				</div>
			</section>
		</div>
		</section>
		</>
	);
}

export default Carte;