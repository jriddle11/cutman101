import './MainStyles.css';
import './FAQ.css';
import { useState } from 'react';

const FAQ = () => {

    const Question = () => {
        const [question, setQuestion] = useState({
         question: 'question',
         answer: 'answer',
         open: false
        });

    var list = [
        { question: 'question1', answer: 'answer1', open: false},
        { question: 'question2', answer: 'answer2', open: false},
        { question: 'question3', answer: 'answer3', open: false},
    ];

    const [isOpen, setIsOpen] = useState({});
      
    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    let userQuestions = list.map(function(item) {
        return <div className='questionDiv'>
                    <div className='questionHeader'>
                        <p className='headerText' onClick={toggle}>{item.question}</p>
                    </div>
                    {
                    isOpen ?
                    <div className='answer'>
                    <p className='answerText'>{item.answer}</p>
                    </div>
                    :
                    null
                    }
                </div>;
      });
    
    return ( 
        <div className="faqMain mainDiv">
            <h1 className='faqTitle'>Frequently Asked Questions</h1>
            <div className='questionsContainer'>
               {userQuestions}
            </div>
        </div>
    );
}

export default FAQ;