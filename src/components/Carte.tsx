function Carte() {
	return (
		<section className="bg-primary h-screen">
		<div className="w-[80%] mx-auto pt-5">
			<h2 className="bg-secondary text-white py-4 px-3 text-center rounded-tr-lg rounded-tl-lg">
				1. Quel langage est utilisé pour structurer une page web ?
			</h2>
			<section className="bg-white shadow-2xl flex-col rounded-br-lg rounded-bl-lg">
			<div className=" text-secondary py-4 text-center md:grid md:grid-cols-2">
				<p className="py-3 md:py-7 cursor-pointer">1. CSS</p>
				<p className="py-3 md:py-7 cursor-pointer">2. HTML</p>
				<p className="py-3 md:py-7 cursor-pointer">3. JavaScript</p>
				<p className="py-3 md:py-7 cursor-pointer">4. PHP</p>
			</div>
			<div className="flex justify-center">
				<button className="bg-secondary text-white px-7 py-2 rounded-full mb-5 cursor-pointer" type="button">Valider</button>
				</div>
			</section>
		</div>
		</section>
	);
}

export default Carte;
