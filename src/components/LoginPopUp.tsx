import React, { FormEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Alert, FloatingLabel, Form } from "react-bootstrap";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, fetchSignup, LoginRequest, selectIsAuth } from "../redux/slices/auth";

const LoginPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [signUpState, setSignUpState] = useState(false);

  const onLoginSubmit = async (values: LoginRequest) => {
    const data = await dispatch<any>(fetchLogin(values));
  };

  const onSignupSubmit = async (values: LoginRequest) => {
    const response = await dispatch<any>(fetchSignup(values));
  };

  return (
    <>
      <Button
        className="mt-auto mb-4 w-75"
        variant="primary"
        onClick={handleShow}
      >
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
                type="username"
                {...register("username", { required: "Укажите никнейм" })}
              />
            </FloatingLabel>

            <FloatingLabel label="Пароль" className="mb-3">
              <Form.Control
                type="password"
                {...register("password", { required: "Введите пароль" })}
              />
            </FloatingLabel>

            {signUpState && (
              <FloatingLabel label="Повторите пароль" className="mb-3">
                <Form.Control
                  type="password"
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
