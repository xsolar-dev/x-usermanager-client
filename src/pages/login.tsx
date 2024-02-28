import React from "react";
import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
            email: "longdh@xmail.com",
            password: "123456",
        },
      }}
    />
  );
};