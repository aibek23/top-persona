import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './Questionnaire.css';

const questions = [
  {
    questionText: "Вам больше 18 лет?",
    answerOptions: [
      { answerText: "да" },
      { answerText: "нет" }
    ],
  },
  {
    questionText: "У вас есть диплом о высшем образов?",
    answerOptions: [
      { answerText: "да" },
      { answerText: "нет" }
    ],
  },
  {
    questionText: "Вы знаете немецкий язык?",
    answerOptions: [
      { answerText: "да" },
      { answerText: "нет" }
    ],
  }
];

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleClick = (questionIndex, answerIndex) => {
    if (questionIndex === 0) {
      if (answerIndex === 1) {
        setTimeout(() => {
          setShowScore(true);
        }, 200);
      }
    }
    const updatedAnswer = { question: questionIndex, index: answerIndex };

    setUserAnswers([...userAnswers, updatedAnswer]);
    if (userAnswers[0]) {
      if (userAnswers.index === 0) {
        setShowScore(true);
      }
    }


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, 300);

    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 300);
    }
  }

  const Card1 = (
    <div style={{ backgroundColor: '#d7815975', padding: '20px', borderRadius: '8px', marginBottom: '20px', maxWidth: "600px" }}>
      <p>
        Если вы моложе 18 лет, вы пока не можете работать за границей. Но есть возможность учиться в Германии через программу "Аусбилдунг". Если вы оставите свои данные, мы сможем проконсультировать вас по этому вопросу.
      </p>
      <div style={{ marginTop: '10px' }}>
        <Link to="/#contact" style={{ color: '#007bff', textDecoration: 'none', marginRight: '10px' }}>Наши контакты</Link>
        <a href="/vacancies?study+in+germany" style={{ color: '#007bff', textDecoration: 'none' }}>Обучение в Германии</a>
      </div>
    </div>
  );

  const Card2 = (
    <div style={{ backgroundColor: '#d7815975', padding: '20px', borderRadius: '8px', marginBottom: '20px', maxWidth: "600px" }}>
      <p>
        Если у вас нет диплома о высшем образовании, то работа в Германии недоступна. Однако, вы можете рассмотреть возможность работы в других странах, таких как Польша, Латвия и Литва. Если вы оставите свои данные, мы сможем проконсультировать вас по этому вопросу.
      </p>
      <div style={{ marginTop: '10px' }}>
        <Link to="/#contact" style={{ color: '#007bff', textDecoration: 'none' }}>Наши контакты</Link>
      </div>
    </div>
  );

  const Card3 = (
    <div style={{ backgroundColor: '', padding: '20px', borderRadius: '8px', marginBottom: '20px', maxWidth: "600px" }}>
      <p>
        Работа в Германии может быть хорошей возможностью для вас. В Германии заработная плата обычно значительно выше (около 200%) по сравнению с другими странами, такими как Польша, Латвия и Литва. Если вы оставите свои данные, мы сможем проконсультировать вас по этому вопросу.
      </p>
      <button style={{
        marginBottom:"10px",
        backgroundColor: '#D78059',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        marginRight: '10px',
        cursor: 'pointer',
      }}>
        <Link to="/#contact" style={{ color: '#fff', textDecoration: 'none' }}>контакты</Link>
      </button>

      <button
        style={{
          backgroundColor: '#478AC9',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
       
      >
        <a href="/vacancies?jobs+in+germany" style={{ color: '#fff', textDecoration: 'none' }}>Вакансии в Германии</a>
      </button>
    </div>
  );
  console.log(userAnswers[0]);
  return (
    <div className="skyscraperTest">
      <div className="skyscraperTestW">
        <div className="container d-flex justify-content-center">
          <div className="col-lg-12">
            {showScore ? (
              <div className="showScore-div">
                {userAnswers[0].index === 1 && userAnswers[0].question === 0 ? Card1 : ""}
                {userAnswers[1] && userAnswers[1].index === 1 ? Card2 : ""}
                {userAnswers[1] && userAnswers[1].index === 0 ? Card3 : ""}
              </div>
            )
              : (
                <>
                  <h3>{questions[currentQuestion].questionText}</h3>
                  <div className="answer-div shadow p-2  rounded-4 bg-white">
                    {questions[currentQuestion].answerOptions.map((option, index) => (
                      <div key={index} className="answerOption" onClick={() => handleClick(currentQuestion, index)}>
                        <input
                          type="radio"
                          className={`radioCustomButton ${userAnswers[currentQuestion]?.index !== undefined ? "" : ""}`}
                          name={`question-${currentQuestion}`}
                          value={option.answerText}
                          checked={index === userAnswers[currentQuestion]?.index}
                          onChange={() => { }}
                        />
                        {userAnswers.index}
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