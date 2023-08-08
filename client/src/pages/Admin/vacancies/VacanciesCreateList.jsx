import React, {
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { useHttp } from "../../../hooks/http.hook";
import { Context } from "../../../context/Context";
import Input from "../../../components/input/Input";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageThumb = ({ image }) => {
  return (
    <img
      src={URL.createObjectURL(image)}
      alt={image.name}
      style={{ maxWidth: "280px" }}
    />
  );
};
const VacanciesCreateList = (props) => {
  let _id = props._id
  
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });
  const {loading, request, error, clearError} = useHttp()
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [keyword, setkeyword] = useState("");
  const { token } = useContext(Context);
  const ref = useRef();

    const fetchData = useCallback(async () => {
      if (_id) {
        try{
            const response = await request('/api/vacancies/showid', 'POST', {_id: _id})
            const data = response // Полученные данные с сервера

            // Обновляем состояния данными с сервера
            const fileUrl = `${window.location.protocol + '//' + window.location.host + '/views/'+data.imageSrc}`; // Замените на ваш URL файла
            const responseImg = await fetch(fileUrl);
            const blob = await responseImg.blob();
              setFile(blob); // Сохраняем содержимое файла в состояние
              const file = new File([blob], data.imageSrc, { type: blob.type });
              setuserInfo({
                ...userInfo,
                file: file, // Сохраняем содержимое файла в состояние userInfo
                filepreview: URL.createObjectURL(file),
              });
   
            setTitle(data.title);
            setDescription(data.description);
            setSalary(data.salary);
            setkeyword(data.keyword);
          }
        catch (e) {
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
      }
    });
    useEffect(() => {
      fetchData();
    }, [_id]);
  function imghandleUpload(event) {
    setFile("")
    setuserInfo({file: [],
      filepreview: null,})
    setFile(event.target.files[0]);

    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  
  }
  const createHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      if (
        title === "" ||
        description === "" ||
        salary === "" ||
        keyword === ""
      ) {
        toast.error("заполните все поля формы", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
      } else {
        const formdata = new FormData();
        formdata.append("image", userInfo.file);
        formdata.append("image", title);
        formdata.append("image", description);
        formdata.append("image", salary);
        formdata.append("image", keyword);
        if (_id) {
          formdata.append("image", _id);
        }
        axios
          .post(
            `${
              window.location.protocol +
              "//" +
              window.location.host +
              props.path
            }/save`,
            formdata,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            setIsLoading(false);
            toast.info(`${res.data.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            props.update();
          })
          .catch(function (error) {
            let message = error.message;
    
            setIsLoading(false);
            toast.error(`${message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }, [token, description, file, title, salary, keyword]);
  function removeHandler() {
    setTitle("");
    setDescription("");
    setFile("");
    setSalary("");
    setkeyword("");
    ref.current.value = "";
    if(_id){
      props.setId("")
    }
    setIsLoading(false);
  }
  const autoCompleteOptions = [
    "вакансии в германии",
    "вакансии в польшу",
    "вакансии в литве",
    "вакансии в латвии",
    "обучение в германии"
  ];
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
      <div className="container d-flex justify-content-center">

        <div className="mt-4 mb-4 col-lg-7">
        {_id?<p>изминение карточки id:{_id}</p>:""}
        {file && <ImageThumb image={file} />}
          <div className="form-group  ">
            <label
              className="mb-2"
              style={{
                color: "#566885",
                fontWeight: 700,
              }}
            >
              Загрузите изображение
            </label>
            <input
              onChange={imghandleUpload}
              type="file"
              ref={ref}
              accept="image/png, image/jpeg"
              className="form-control"
              placeholder="img"
            />
           
          </div>
          <div className="form-group mt-4 ">
            <Input
              type="text"
              placeholder="Введите название заголовока..."
              value={title}
              setValue={setTitle}
            />
          </div>
          <div className="form-group mt-5 ">
            <textarea
            className="form-control"
            id="textAreaExample6"
             rows="7"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Введите краткий описание ..."
              cols={50}
              style={{ border: "#566885 solid 2px",  "::placeholder": { color: "#566885" } }}
            />
           
          </div>
          <div className="form-group mt-4 ">
            <Input
              type="text"
              placeholder="Введите размер заработной платы ..."
              value={salary}
              setValue={setSalary}
            />
          </div>
          <div className="form-group mt-4">
            <div>
              <input
                type="text"
                list="filterWords" // Ссылка на id элемента datalist
                placeholder="Введите ключевую слову для фильтра ..."
                value={keyword}
                onChange={(event) => setkeyword(event.target.value)}
              />
              <datalist id="filterWords">
                {autoCompleteOptions.map((option) => (
                  <option value={option} key={option} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <button
              className="btn btn-success"
              onClick={() => createHandler()}
              style={{ marginRight: "20px" }}
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Создать"}
            </button>
            <button className=" btn btn-danger" onClick={() => removeHandler()}>
              стереть
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default VacanciesCreateList;
