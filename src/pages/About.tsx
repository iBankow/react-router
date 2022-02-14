import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const About = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <Text>That feels like an existential question, don't you think?</Text>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
);
