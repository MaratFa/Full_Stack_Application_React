import { useState } from "react";
import { CustomInput } from "../../components/custom-input";
import { Layout } from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";
import { UserData, useLoginMutation } from "../../app/Services/auth";
import { isErrorWithMessage } from "../is-error-with-message";

export const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation()
  const [ error, setError ] = useState('');

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {

      }
    }

  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={ login }>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистриуйтесь</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
