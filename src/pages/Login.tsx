import { Button, Center, Flex, Input, Stack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <Center height={"100vh"}>
      <Flex align="center">
        <form onSubmit={handleSubmit}>
          <Stack direction={"column"} spacing={5}>
            <Input placeholder="Username" name="username" type="text" />
            <Button type="submit" colorScheme={"green"}>
              Login
            </Button>
          </Stack>
        </form>
      </Flex>
    </Center>
  );
};
