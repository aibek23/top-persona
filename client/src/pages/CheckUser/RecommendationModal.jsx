
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';
import { useAuth } from '../../hooks/auth.hook';
import Questionnaire from '../../components/questionnaire/Questionnaire'
const RecommendationModal = ({ isOpen, onRequestClose }) => {
    const [showQuestion, setShowQuestion] = useState(true);
    const [recommendation, setRecommendation] = useState('');
    const { isFirstVisit, clearVisited } = useAuth();

    const handleYesClick = () => {
        setShowQuestion(false);
    };

    const handleNoClick = () => {
        onRequestClose();
    };

    const handleRecommendationChange = (event) => {
        setRecommendation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно выполнить отправку рекомендации на сервер или другую логику
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Recommendation Modal"
            style={{
                overlay: {
                    inset: "0!important",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                content: {
                    // top:0,
                    // bottom:0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    padding: '20px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    // maxWidth: '600px',
                    // width: '100%',
                    position: 'relative',
                },
            }}
        >
            {showQuestion ? (
                <>
                    <div className={`${styles.card}`}>
                        <p>Мы поможем вам найти работу, которая подходит именно вам. У нас есть разнообразные вакансии, из которых вы сможете выбрать наиболее подходящую. Пожалуйста, пройдите небольшой опрос, чтобы мы могли сделать оптимальный подбор вакансии для вас.</p>
                        <div className='d-flex'>
                            <button
                                style={{
                                    backgroundColor: '#D78059',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '10px 20px',
                                    marginRight: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={handleYesClick}
                            >
                                Хорошо
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
                                onClick={() => {
                                    handleNoClick();
                                    if (isFirstVisit) {
                                        clearVisited();
                                    }
                                }}
                            >
                                Нет
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <><div className={`${styles.card}`}>
                    <Questionnaire />
                </div>
                </>
            )}
        </Modal>
    );
};

export default RecommendationModal