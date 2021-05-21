import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Presentation from "./components/Presentation";
import Combo from "./components/Combo";
import Services from "./components/Services";

const App = () => {
  return (
    <PageContainer>
      <Header />
      <Banner />
      <Presentation />
      <Combo />
      <Services />
    </PageContainer>
  );
};

export default App;
