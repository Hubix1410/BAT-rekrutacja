import React from 'react';
import './Header.scss';
import HeaderButtons from './HeaderButtons/HeaderButtons';

function Header() {
	return (
		<header className="header">
			<img
				src="/assets/logo-glo.svg"
				alt="glo logo"
				className="header__logo"
			/>
			<a href="#" title="#glowaybetter" className="header__link">
				SHOP
			</a>
			<a href="#" title="Tabak heater" className="header__link">
				TABAK HEATER
			</a>
			<a href="#" title="Sticks" className="header__link">
				STICKS
			</a>
			<a href="#" title="Zubhor" className="header__link">
				ZUBHOR
			</a>
			<a href="#" title="Meet GLO<" className="header__link">
				MEET GLO<sup>TM</sup>
			</a>
			<a href="#" title="Händlersuche" className="header__link">
				HÄNDLERSUCHE
			</a>
			<a href="#" title="Angebot" className="header__link">
				ANGEBOT
			</a>
			<a href="#" title="#glowaybetter" className="header__link">
				#gloWAYBETTER
			</a>

			<HeaderButtons />
		</header>
	);
}

export default Header;
