import { useState } from 'react';
import './QuestionSection.scss';
import {
	handleQuestinActivation,
	handleQuestionClass,
	handeCrossClass,
	data,
} from './helpers';

function SingleQuestion({ element, index }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="singleQuestion">
			<div className="singleQuestion__container">
				<p className="singleQuestion__question">{element.question}</p>
				<button
					className="singleQuestion__showAnswer"
					onClick={() =>
						handleQuestinActivation(isActive, setIsActive)
					}
				>
					<img
						alt="cross"
						src="/assets/icon-cross.svg"
						className={handeCrossClass(isActive)}
					/>
				</button>
			</div>
			<div className={handleQuestionClass(isActive)}>
				{element.answer}
			</div>
		</div>
	);
}

function QuestionSection() {
	return (
		<section className="questionSection">
			<h2 className="questionSection__title">FAQs</h2>
			<p className="questionSection__subtitle">
				Hier findest du Antworten auf die häufigsten Fragen
			</p>
			<div className="questionSection__container">
				{data.map((element, index) => (
					<SingleQuestion
						element={element}
						key={`question-${index}`}
						index={index}
					/>
				))}
			</div>
			<button className="questionSection__button">
				Finde mehr heraus
			</button>
		</section>
	);
}

export default QuestionSection;
