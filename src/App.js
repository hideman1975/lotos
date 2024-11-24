import "./App.css";
import Market from "./components/Market";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Market></Market>
        </main>
      </div>
    );
  }
}

export default App;
