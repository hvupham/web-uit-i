import {
    Alert,
    AlertIcon,
    Button,
    Input,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  import useLogin from "../../hooks/useLogin";
  
  const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
  
    const [showPassword, setShowPassword] = useState(false);
    const { loading, error, login } = useLogin();
  
    return (
      <>
        <Input
          placeholder="Email"
          fontSize={14}
          type="email"
          size={"sm"}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <InputGroup>
          <Input
            placeholder="Mật khẩu"
            fontSize={14}
            type={showPassword ? "text" : "password"}
            value={inputs.password}
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <InputRightElement h="full">
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {error && (
          <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
          </Alert>
        )}
        <Button
          w={"full"}
          colorScheme="blue"
          size={"sm"}
          fontSize={14}
          isLoading={loading}
          onClick={() => login(inputs)}
        >
          Đăng nhập
        </Button>
      </>
    );
  };
  
  export default Login;
  