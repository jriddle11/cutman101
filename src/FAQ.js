import './MainStyles.css';
import './FAQ.css';
import { useState } from 'react';

const Question = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className='questionDiv'>
            <div className='questionHeader'>
                <p className='headerText' onClick={toggle}>{question}</p>
            </div>
            {open && (
                <div className='answer'>
                    <p className='answerText'>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const questionsList = [
        { question: "Question 1?", answer: "Answer 1" },
        { question: "Question 2?", answer: "Answer 2" },
        { question: "Question 3?", answer: "Answer 3" },
        { question: "Question 4?", answer: "Answer 4" },
        { question: "Question 5?", answer: "Answer 5" },
        { question: "Question 6?", answer: "Answer 6" }
    ];

    return (
        <div className="faqMain mainDiv">
            <h1 className='faqTitle'>Frequently Asked Questions</h1>
            <div className='questionsContainer'>
                {questionsList.map((item, index) => (
                    <Question 
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
            <p />
        </div>
    );
};

export default FAQ;