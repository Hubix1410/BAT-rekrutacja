import React from 'react';
import './ContactSection.scss';

function ContactSection() {
	return (
		<section className="contact">
			<div className="contact__list_container--left">
				<ul className="contact__list">
					<li>Service</li>
					<li>FAQs</li>
					<li>Kontakt</li>
					<li>Widerrufsbelehrung</li>
					<li>
						glo<sup>TM</sup>&nbsp;Zufriedenheitsgarantie
					</li>
					<li>Versand und Zahlung</li>
					<li>First steps</li>
				</ul>
				<ul className="contact__list">
					<li>
						Über glo<sup>TM</sup>
					</li>
					<li>
						Über glo<sup>TM</sup>
					</li>
					<li>glo™ Aktion Menthol</li>
					<li>Widerrufsbelehrung</li>
					<li>Entsorgung gebrauchter Produkte</li>
					<li>glo™ Vorteile</li>
				</ul>
				<ul className="contact__list">
					<li>Datenschutz und Bedingungen</li>
					<li>Impressum</li>
					<li>Allgemeine Geschäftsbedingungen</li>
					<li>Nutzungsbedingungen</li>
					<li>Cookies & Datenschutzerklärung</li>
				</ul>
				<ul className="contact__list">
					<li>Ressourcen</li>
					<li>Artikel</li>
				</ul>
			</div>
			<div className="contact__list_container--right">
				<h2 className="contact__title">GET&nbsp;IN&nbsp;TOUCH</h2>
				<ul className="contact__contact_types">
					<li>
						<img src="/assets/arrow-long.svg" />
						0800 6945633
					</li>
					<li>
						<img src="/assets/arrow-long.svg" />
						support@myglo.de
					</li>
					<li>
						<img src="/assets/arrow-long.svg" />
						Subscribe to newsletter
					</li>
				</ul>
				<div className="contact__image_container">
					<img src="/assets/logo-glo.svg" />
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
