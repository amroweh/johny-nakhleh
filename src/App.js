import "./css/globals.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Hello from Johny's new Site!</h1>
        <h3>Johny is a great personal trainer!</h3>
        <img
          style={{ width: "200px" }}
          src={process.env.PUBLIC_URL + "/johnyanddog.png"}
        ></img>
      </div>
    </>
  );
}

export default App;
