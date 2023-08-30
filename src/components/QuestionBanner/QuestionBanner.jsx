import React from 'react';
import './QuestionBanner.scss';

function QuestionBanner() {
	return (
		<section className="questionBanner">
			<div className="questionBanner--left">
				STILL HAVE
				<br />A QUESTION?
			</div>
			<div className="questionBanner--right">
				<span className="questionBanner__text--small">
					You can contact us in several ways
				</span>
				<span className="questionBanner__text--big">
					<img src="/assets/arrow-long.svg" /> 0800 6945633
				</span>
				<span className="questionBanner__text--big">
					<img src="/assets/arrow-long.svg" /> support@myglo.de
				</span>
			</div>
		</section>
	);
}

export default QuestionBanner;
