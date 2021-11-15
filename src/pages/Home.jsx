import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
