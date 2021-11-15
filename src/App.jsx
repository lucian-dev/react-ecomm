import GlobalStyles from "./styles/Global";
import { Main } from "./styles/Layout.styled";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Home />
      </Main>
    </>
  );
};

export default App;
