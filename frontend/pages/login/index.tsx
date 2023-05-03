import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { MyPage } from "../../components/types";
import { setCookie } from "nookies";

const Login: MyPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const onFinish = async (e: React.SyntheticEvent) => {
    e.preventDefault;
    try {
      const response = await axios.post(process.env.auth + "/login", {
        email,
        password,
      });
      const token = response.data.data.token;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/admin",
      });

      router.push("/admin");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {message && <Alert message={message} type="error" showIcon />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

Login.Layout = "Login";
export default Login;
