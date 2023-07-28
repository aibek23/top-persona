import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Context } from "../../context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../css/AuthPage.module.css";
const AuthPage = () => {
  const auth = useContext(Context);
  const { loading, request, error, clearError } = useHttp();
  const [formL, setFormL] = useState({
    email: "",
    password: "",
  });
  const [checkbox, setcheckbox] = useState(true);
  useEffect(() => {
    error &&
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    clearError();
  }, [error, clearError]);

  const changeHandlerL = (event) => {
    setFormL({ ...formL, [event.target.name]: event.target.value });
    console.log(formL);
  };
  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...formL });
      auth.login(data.token, checkbox);
    } catch (e) {}
  };
  return (
    <>
      <div className={styles.authContainer}>
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
        <div
          className="container"
          style={{ height: "100%", marginTop: "35vh" }}
        >
          <div className="row justify-content-center  align-content-center mt-5">
            <div className="col-md-offset-3 col-md-6 ">
              <div className={styles.tab} role="tabpanel">
                <div className={styles.tab_content + " tabs mt-5"}>
                  <div role="tabpanel" className="tab-pane" id="Section1">
                    <div className={styles.form_horizontal}>
                      <div className={"form-group " + styles.form_group}>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          className={"form-control " + styles.form_control}
                          id="email"
                          name="email"
                          value={formL.email}
                          onChange={changeHandlerL}
                        />
                      </div>
                      <div className={styles.form_group + " form-group "}>
                        <label htmlFor="exampleInputPassword1">пароль</label>
                        <input
                          type="password"
                          className={styles.form_control + " form-control"}
                          id="password"
                          name="password"
                          value={formL.password}
                          onChange={changeHandlerL}
                        />
                      </div>
                      <div className={"form-group " + styles.form_group}>
                        <div
                          className={
                            " form-check " +
                            styles.main_checkbox_ +
                            " form-check"
                          }
                        >
                          <input
                            className="form-check-input"
                            style={{ marginLeft: "0px" }}
                            type="checkbox"
                            defaultChecked={checkbox}
                            onChange={() => {
                              setcheckbox(!checkbox);
                            }}
                          />
                          <label
                            className="form-check-label ml-3"
                            htmlFor="flexCheckChecked"
                          >
                            {" "}
                            запомнить меня
                          </label>
                        </div>
                      </div>
                      <div className="form-group forgot_pass">
                        <button
                          type="submit"
                          className="btn btn-warning w-100"
                          style={{
                            fontWeight: "bold",
                            color: "#fff",
                            borderRadius: "20px",
                          }}
                          disabled={loading} // Add isLoading to the disabled condition
                          onClick={loginHandler}
                        >
                          {loading ? "Loading..." : "Войти"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthPage;
