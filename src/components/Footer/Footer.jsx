import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<footer className="footer">
			<p className="footer__text">
				©British American Tobacco 2022. All rights reserved.
			</p>
			<div className="footer__container">
				<a>
					<img src="/assets/social-media-facebook.svg" />
				</a>
				<a>
					<img src="/assets/social-media-instagram.svg" />
				</a>
				<a>
					<img src="/assets/social-media-twitter.svg" />
				</a>
				<a>
					<img src="/assets/social-media-linkedin.svg" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
