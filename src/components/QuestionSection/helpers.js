function handleQuestionClass(isActive) {
    if (isActive === true) {
        return "singleQuestion__answer--active"
    } else {
        return "singleQuestion__answer--inactive"
    }
}

function handleQuestinActivation(isActive, setIsActive) {
    if (isActive === true) {
        setIsActive(false);
    } else {
        setIsActive(true);
    }
}

function handeCrossClass(isActive) {
    if (isActive === true) {
        return "button-active"
    } else {
        return ""
    }
}

const data = [
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        question: 'question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    }
];

export { handleQuestinActivation, handleQuestionClass, handeCrossClass, data }