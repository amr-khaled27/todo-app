import { Component } from "react";
import "../css/input.css";

class Enter extends Component {
  state = {
    valid: true,
  };

  handleAddTaskBind = () => {
    const input = document.getElementById("task");

    if (input.value.trim() === "") {
      this.setState({
        valid: false,
      });
      input.classList.add("invalid");
      input.classList.remove("focus:border-slate-400");
    } else {
      if (!this.state.valid) {
        this.setState({
          valid: true,
        });
        input.classList.add("focus:border-slate-400");
        input.classList.remove("invalid");
      }
      this.props.handleAddTask();
    }
  };

  componentDidMount() {
    document.getElementById("root").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleAddTaskBind();
      }
    });
  }

  render() {
    return (
      <div className="mt-2">
        <input
          id="task"
          placeholder="Enter Task Name"
          className="placeholder:text-gray-400 bg-slate-700 border border-transparent text-white rounded-lg duration-300 hover:bg-white/30 focus:bg-white/15 focus:border-slate-400 focus:outline-none w-full p-3"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={this.handleAddTaskBind}
            className="bg-slate-700 text-gray-400 rounded-lg focus:border-slate-400 focus:outline-none w-full p-2.5 duration-300 hover:bg-white/30"
          >
            Add Task
          </button>
          <button
            onClick={() => this.props.handleDeleteAll()}
            className="bg-slate-700 text-gray-400 rounded-lg focus:border-slate-400 focus:outline-none w-full p-2.5 duration-300 hover:bg-white/30"
          >
            Delete All
          </button>
        </div>
        {this.state.valid ? null : (
          <p className="text-red-500 mt-1">Task Name Can't Be Empty</p>
        )}
      </div>
    );
  }
}

export default Enter;
