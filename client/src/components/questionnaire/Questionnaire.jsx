import React, { useState } from 'react';
import './Questionnaire.css';

const questions = [
  {
    questionText: "Are you 18 years old?",
    answerOptions: [
      { answerText: "Yes" },
      { answerText: "No" }
    ],
  },
  {
    questionText: "Do you know German?",
    answerOptions: [
      { answerText: "Yes" },
      { answerText: "No" }
    ],
  }
];

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleClick = (questionIndex, answerIndex) => {
    const existingAnswerIndex = userAnswers.findIndex(answer => answer.question === questionIndex);
    if (existingAnswerIndex !== -1) {
      // An answer for this question already exists, so update it instead of adding a new one
      const updatedAnswers = [...userAnswers];
      updatedAnswers[existingAnswerIndex] = { question: questionIndex, index: answerIndex };
      
      setUserAnswers(updatedAnswers);
    } else {
      // No answer for this question yet, so add a new one
      const updatedAnswer = { question: questionIndex, index: answerIndex };

      setUserAnswers([...userAnswers, updatedAnswer]);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setTimeout(() => {
            setCurrentQuestion(nextQuestion);
        }, 5000);
  
    } else {
        setTimeout(() => {
            setShowScore(true);
        }, 5000);
    }
  }

  return (
    <div className="skyscraperTest">
      <div className="skyscraperTestW">
        <div className="container d-flex justify-content-center">
          <div className="col-lg-8">
            {showScore ? (
              <div className="showScore-div">
                <h3>Список ваших ответов:</h3>
                {userAnswers.map((answer, index) => (
                  <div key={index} className="shadow p-4 m-5 rounded-4 bg-white">
                    <h3 className="shadow-none">{questions[answer.question].questionText}</h3>
                    {questions[answer.question].answerOptions.map((option, i) => (
                      <div key={i} className="answerOption m-3">
                        <input
                          type="radio"
                          className={`radioCustomButton ${i === answer.index ? "userTrue" : ""}`}
                          name={`question-${answer.question}`}
                          value={option.answerText}
                          checked={i === answer.index}
                          disabled
                        />
                        <label className={`rounded-4 radioCustomLabel ${i === answer.index ? "" : ""}`}>{option.answerText}</label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="question-div shadow-sm p-4 m-5 rounded-4 bg-white">
                  <h1>{questions[currentQuestion].questionText}</h1>
                  <p>Question {currentQuestion + 1}/{questions.length}</p>
                </div>
                <div className="answer-div shadow p-4 m-5 rounded-4 bg-white">
                  {questions[currentQuestion].answerOptions.map((option, index) => (
                    <div key={index} className="answerOption" onClick={() => handleClick(currentQuestion, index)}>
                      <input
                        type="radio"
                        className={`radioCustomButton ${userAnswers[currentQuestion]?.index !== undefined ? "" : ""}`}
                        name={`question-${currentQuestion}`}
                        value={option.answerText}
                        checked={ index === userAnswers[currentQuestion]?.index }
                        onChange={() => { }}
                      />
                      {index}{userAnswers.index}
                      <label className="radioCustomLabel">{option.answerText}</label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;