import Layout from "components/Layout"; // Layout component
import About from "components/about"; // About section
import Greeting from "components/greeting"; // Greeting section
import Social from "components/social"; // Social section
import type { NextPage } from "next"; // Next Page type

const Home: NextPage = () => {
  return (
    <Layout>
      <Greeting />
      <About />
      <Social />
    </Layout>
  );
};

export default Home;
