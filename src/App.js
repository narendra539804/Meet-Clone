import dbRef, { userName } from "./server/firebase";
import "./App.css";

function App() {
  return <div className="App">{userName}</div>;
}

export default App;
