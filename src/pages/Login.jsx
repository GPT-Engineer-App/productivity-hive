import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing={4} width="300px">
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button onClick={handleLogin} colorScheme="teal" width="100%">
          Log In
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
