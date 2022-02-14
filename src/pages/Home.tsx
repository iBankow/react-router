import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <Text>You can do this, I believe in you.</Text>
      </main>
      <Text>{user?.user}</Text>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
