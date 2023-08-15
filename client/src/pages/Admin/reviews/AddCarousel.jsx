import React, {
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { useHttp } from "../../../hooks/http.hook";
import { Context } from "../../../context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Platzhalter from "../../../img/Platzhalter-1.jpg";
import CarouselCreateList from './CarouselCreateList'
import CarouselCart from './CarouselCart'

const AddCarousel = () => {
  const { loading, request, error, clearError } = useHttp()
  const [data, setData] = useState([]);
  const [cardId, setCardId] = useState("")
  const { token } = useContext(Context);
  const fetchData = useCallback(async () => {
    try {
      const response = await request('/api/carousel/show', 'POST')
      setData(response);
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      } else {
        toast.error(`An error occurred: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      }
    }
  }, []);

  const DelateCard = useCallback(async (data) => {
    try {
      if (data) {
        const response = await request('/api/carousel/delete', 'POST', { _id: data }, { Authorization: `Bearer ${token}` })
        toast.info(`${response.m}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchData();

      } else {
        toast.error('нет _id colaction', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return
      }
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      } else {
        toast.error(`An error occurred: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      }
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ChangeCardById = (data) => {
    setCardId(data)
  }
  const DelateCardById = (data) => {
    DelateCard(data);
  }
  const handleImageError = (e) => {
    // Функция для обработки ошибки загрузки изображения
    e.target.src = Platzhalter;
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container d-flex justify-content-start">
        <div className="p-3 mb-4 col-lg-6">
          <CarouselCreateList path={"/api/carousel"} _id={cardId} update={fetchData} setId={setCardId} />
        </div>

        <div className="p-3 mb-4 col-lg-6">
        {data.map(e => (
  <div key={e._id}>
    <CarouselCart
      getId={ChangeCardById}
      delate={DelateCardById}
      id={e._id}
      imageSrc={e.imageSrc}
      title={e.title}
      description={e.description}
    />
  </div>
))}

        </div>
      </div>

    </>
  );
};
export default AddCarousel;
