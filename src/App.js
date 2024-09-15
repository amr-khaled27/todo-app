import React from "react";
import Header from "./components/header";
import Content from "./components/list_content";

class App extends React.Component {
  state = {
    header_style: "text-slate-300 text-2xl font-bold",
  };

  render() {
    return (
      <div className="App min-h-screen overflow-hidden">
        <Header title="Todo App" text_style={this.state.header_style} />

        <div className="flex justify-center items-center min-h-[calc(100vh_-_64px)] flex-grow bg-slate-800">
          <Content title="Content" text_style={this.state.header_style} />
        </div>
      </div>
    );
  }
}

export default App;
