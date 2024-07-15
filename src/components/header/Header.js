import React, { useContext } from "react";

import "./style.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-content">
				<h1 className="text">Nagłówek H1</h1>
			</div>
			<div className="form-content">
				<div className="wrapper1">
					<div className="radio-group two">
						<div className="block">
							<strong>BLOK PIERWSZY</strong>
						</div>
						<label htmlFor="option1">
							<input
								type="radio"
								id="option1"
								name="drone"
								value="Opcja pierwsza"
								defaultChecked
							/>
							<span></span>
							<span className="label-text">Opcja pierwsza</span>
						</label>
						<label htmlFor="option2">
							<input
								type="radio"
								id="option2"
								name="drone"
								value="Opcja druga"
							/>
							<span></span>
							<span className="label-text">Opcja druga</span>
						</label>
						<label htmlFor="option3">
							<input
								type="radio"
								id="option3"
								name="drone"
								value="Opcja trzecia"
							/>
							<span></span>
							<span className="label-text">Opcja trzecia</span>
						</label>
					</div>
					<div className="button">
						<div className="block">
							<strong>BLOK DRUGI</strong>
						</div>
						<button className="my-button">ZASTAP</button>
						<button className="my-button">DOKLEJ</button>
					</div>
				</div>
				<div className="one">
					<div className="block">
						<strong>BLOК Z DLUGĄ NAZWĄ KTÓRA SIĘ PRZYTNIE...</strong>
					</div>
					<strong className="lorem">
						Lorem ipsum dolor sit amet,consectetur adipiscing elit.
						Nunc nec vehicula ipsum. Sed auctor, odio id imperdiet
						ornare, nisi dui ullamcorper erat, ac venenatis libero
						ipsum vel tortor. Integer consequat massa sem, sodales
						cursus lorem ultricies vitae. Sed ut dolor in nulla
						vestibulum hendrerit et at quam. Curabitur vitae lacus
						in risus consequat sagittis eu sed velit. Maecenas
						euismod eu orci et porttitor. Nunc placerat vestibulum
						tellus, et feugiat libero sollicitudin non. Curabitur
						lobortis porta ante, vitae hendrerit velit mollis at. In
						hac habitasse platea dictumst. Phasellus fringilla sem
						augue, et facilisis risus pellentesque vel. Vivamus
						ultricies vitae elit eget interdum. Praesent vestibulum
						arcu at ex ornare, id laoreet dui aliquam.Curabitur
						vitae lacus in risus consequat sagittis eu sed velit.
						Maecenas euismod eu orci et porttitor. Nunc placerat
						vestibulum tellus, et feugiat libero sollicitudin non.
					</strong>
				</div>
			</div>
		</header>
	);
};

export default Header;
