import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth.hook';
import Vacancies from '../Vacancies';
import Modal from 'react-modal';
import { FaQuestionCircle } from "react-icons/fa";
import styles from './styles.module.css';
import RecommendationModal from "./RecommendationModal"; // Импорт RecommendationModal

const CheckUser = () => {
    const { isFirstVisit, ready, clearVisited } = useAuth();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleShowCard = () => {
        setIsCardVisible(true);
    };

    const handleCloseCard = () => {
        setIsCardVisible(false);
    };

    const handleOpenModal = () => {
        setModalIsOpen(!modalIsOpen);

    };

    const handleCloseModal = () => {
        setModalIsOpen(!modalIsOpen);
        if (isFirstVisit) {
            clearVisited()
        }
    };

    if (!ready) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            {isFirstVisit && (
                <>
                    <div>
                        <button
                            style={{
                                position:"fixed",
                                zIndex:"55555",
                                bottom:"20px",
                                right:"40px",
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={handleOpenModal}
                        >
                            <FaQuestionCircle size={40} />
                        </button>
                    </div>

                    <div>
                        <RecommendationModal isOpen={!modalIsOpen} onRequestClose={handleCloseModal} />
                        <Vacancies />
                    </div>
                </>
            )}


            {!isFirstVisit && (
                <>
                    <div>
                    <button
                            style={{
                                position:"fixed",
                                zIndex:"55555",
                                bottom:"20px",
                                right:"40px",
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={handleOpenModal}
                        >
                            <FaQuestionCircle size={30} />
                        </button>
                    </div>

                    <div>
                        <RecommendationModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
                        <Vacancies />
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckUser;

