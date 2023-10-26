import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuth,
  fetchLogout,
  selectIsAuth,
} from "../../../../redux/slices/auth";

export const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onLogoutSubmit = async () => {
    const response = await dispatch<any>(fetchLogout());
    dispatch<any>(fetchAuth());
  };

  return (
    <Button
      onClick={onLogoutSubmit}
      variant="danger"
      className="mt-auto mb-4 w-75 container"
    >
      Выйти
    </Button>
  );
};
