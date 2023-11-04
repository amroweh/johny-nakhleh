import "./css/globals.css";
import "./App.scss";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import MainHeading from "./components/MainHeading";
import StyledImage from "./components/StyledImage";
import dogImage from "./images/johnyanddog.png"
import StyledBox from "./components/StyledBox";

function App() {
  return (
    <>
      <Header
        topHeight={45}
        colour="#0D0D1F"
        textColour="#F0E8E0"
        barColour_closed="#0D0D1F"
        barColour_open="#F0E8E0"
      />
      <PageContent>
        <MainHeading centred={true}>
            Evidence Based Sports
        </MainHeading>
        <StyledImage src={dogImage} width={85}/>
        <StyledBox content="Hello" linkText="" linkDest="" />
      </PageContent>
    </>
  );
}

export default App;
