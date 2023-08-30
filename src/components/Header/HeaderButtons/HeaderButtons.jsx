import React from 'react';
import './HeaderButtons.scss';

function HeaderButtons() {
	return (
		<div className="headerButtons">
			<a href="#" className="headerButtons__button">
				<img src="/assets/icon-general.svg" />
			</a>
			<a href="#" className="headerButtons__button">
				<img src="/assets/icon-human.svg" />
			</a>
			<a href="#" className="headerButtons__button">
				<img src="/assets/icon-case.svg" />
			</a>
		</div>
	);
}

export default HeaderButtons;
