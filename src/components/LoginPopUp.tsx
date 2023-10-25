import React, { FormEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Alert, FloatingLabel, Form } from "react-bootstrap";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { MyAlert } from "./Alerts";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, LoginRequest, selectIsAuth } from "../redux/slices/auth";

const LOGIN_URL = "/login";
const SIGNUP_URL = "/signup";

interface LoginResponse {
  id: number;
}

// type RefWithFocus = {
//   current: HTMLElement | null;
//   focus: () => void;
// };

const LoginPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      nickname: "",
      password: "",
    },
  });

  const [signUpState, setSignUpState] = useState(false);

  // const { setAuth } = useAuh();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  // const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  // const [username, setUser] = useState('');
  // const [password, setPassword] = useState('');
  // const [secondPassword, setSecondPassword] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  //
  // const [showAlert, setShowAlert] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 10000);
  // }, [])
  //
  // useEffect(() => {
  //   setErrMsg('');
  // }, [username, password])

  // const handleLoginSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //
  //   try {
  //     const response: AxiosResponse<LoginResponse> = await axios.post(LOGIN_URL,
  //       JSON.stringify({ username, password }),
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response.headers)
  //     setUser('');
  //     setPassword('');
  //
  //     setAuth({username, password});
  //
  //     setShow(false);
  //   } catch (err: any) {
  //       if (!err?.response) {
  //         setErrMsg('No Server Response');
  //       } else if (err.response?.status === 400) {
  //         setErrMsg('Missing usernamename or Response');
  //       } else if (err.response?.status === 401) {
  //         setErrMsg('Unauthorized');
  //       } else {
  //         setErrMsg('Login Failed');
  //       }
  //     }
  //   }

  const onLoginSubmit = (values: LoginRequest) => {
    dispatch<any>(fetchLogin(values));
  };
  const onSignupSubmit = (values: any) => {
    console.log();
  };
  // const handleSignupSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //
  //   if (password !== secondPassword) {
  //     setPasswordNotMatch(true);
  //     setShowAlert(true);
  //     return;
  //   }
  //
  //   try {
  //     const response: AxiosResponse<LoginResponse> = await axios.post(SIGNUP_URL,
  //       JSON.stringify({ username, password }),
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //       }
  //     );
  //     console.log(JSON.stringify(response?.data));
  //
  //     setUser('');
  //     setPassword('');
  //     setSecondPassword('');
  //
  //     setShow(false);
  //   } catch (err: any) {
  //       if (!err?.response) {
  //         setErrMsg('No Server Response');
  //       } else if (err.response?.status === 400) {
  //         setErrMsg('Missing usernamename or Response');
  //       } else if (err.response?.status === 401) {
  //         setErrMsg('Unauthorized');
  //       } else {
  //         setErrMsg('Login Failed');
  //       }
  //   }
  // }

  return (
    <>
      {/*{passwordNotMatch && showAlert && <MyAlert type={'warning'} message={'Введенные пароли не совпадают!'} />}*/}
      <Button variant="primary" onClick={handleShow}>
        Войти
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            {signUpState ? "Создание аккаунта" : "Вход в аккаунт"}
          </Modal.Title>
        </Modal.Header>

        <form
          onSubmit={handleSubmit(signUpState ? onSignupSubmit : onLoginSubmit)}
        >
          <Modal.Body>
            <FloatingLabel label="Никнейм" className="mb-3 ">
              <Form.Control
                type="nickname"
                // value={username}
                {...register("nickname", { required: "Укажите никнейм" })}
              />
            </FloatingLabel>

            <FloatingLabel label="Пароль" className="mb-3">
              <Form.Control
                type="password"
                // value={password}
                {...register("password", { required: "Введите пароль" })}
              />
            </FloatingLabel>

            {signUpState && (
              <FloatingLabel label="Повторите пароль" className="mb-3">
                <Form.Control
                  type="password"
                  // value={secondPassword}
                  {...register("password", { required: "Повторите пароль" })}
                />
              </FloatingLabel>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="col text-center">
              <div className="raw">
                <Button
                  type="submit"
                  variant="dark"
                  className="m-3 text-center"
                >
                  {signUpState ? "Зарегистрироваться" : "Войти"}
                </Button>
              </div>

              <div className="raw">
                <span className="m-3 raw text-center">
                  {signUpState ? "Есть аккаунт" : "Нет аккаунта"}? -
                  <Button
                    variant="link"
                    onClick={() => setSignUpState((prev) => !prev)}
                  >
                    {signUpState ? "Войти" : "Зарегистрироваться"}
                  </Button>
                </span>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default LoginPopUp;
