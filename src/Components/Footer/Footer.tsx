import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<p>&copy; Protojam 2025</p>
			<figure className="grid-figure">
				<a href="https://github.com/" target="blank">
					<img
						src="src/assets/images/github-mark-white.png"
						alt="logo GitHub"
					/>
				</a>
				<a href="https://www.wildcodeschool.com/" target="blank">
					<img src="src/assets/images/LogoWildCodeSchool.png" alt="logo Wild" />
				</a>
			</figure>
		</footer>
	);
}

export default Footer;
