import { Component } from "react";
import Checkbox from "react-custom-checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Enter from "./enter_task";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons/faTrashAlt";

class Content extends Component {
  state = {
    items: [],
  };

  handleClick = (id) => {
    let temp = this.state.items;
    temp[id - 1].checked = !temp[id - 1].checked;
    this.setState({
      items: temp,
    });
  };

  handleAddTask = () => {
    const input = document.getElementById("task");
    if (input.value.trim() === "") return;

    const newItems = [
      ...this.state.items,
      {
        id: this.state.items.length + 1,
        task_name: input.value,
        checked: false,
      },
    ];

    this.setState({
      items: newItems,
    });

    input.value = "";
  };

  handleDelete = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  handleDeleteAll = () => {
    const temp = [];
    this.setState({
      items: temp,
    });
  };

  render() {
    return (
      <div className="content w-[400px] p-4 select-none">
        {this.state.items.length === 0 ? (
          <div className="w-full pointer-events-none select-none flex justify-center items-center gap-2 text-center text-slate-500 rounded-lg border border-dashed border-slate-500 p-1.5">
            <p className="text-xl">Add Tasks To Start</p>
            <FontAwesomeIcon className="text-xl" icon={faCirclePlus} />
          </div>
        ) : (
          <ul className="*:text-slate-200 *:text-lg *:select-none *:w-full shadow-xl">
            {this.state.items.map((item) => (
              <li
                key={Math.random()}
                className="*:w-full overflow-hidden odd:bg-white/5 even:bg-white/10 duration-300 hover:bg-white/25 first:rounded-t-lg last:rounded-b-lg mb-[2px] last:mb-0"
              >
                <div className="flex justify-between items-center">
                  <label
                    htmlFor={item.id}
                    className={
                      (item.checked === true ? "line-through " : "") +
                      "w-full py-2 px-4 cursor-pointer"
                    }
                    onClick={() => this.handleClick(item.id)}
                  >
                    {item.task_name}
                  </label>

                  <div className="flex items-center gap-2 mr-4">
                    <div onClick={() => this.handleClick(item.id)}>
                      <Checkbox
                        icon={
                          <div className="w-full h-full bg-slate-400 flex justify-center items-center">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="text-slate-200 text-sm"
                            />
                          </div>
                        }
                        className=" border-slate-400 cursor-pointer"
                        borderColor=""
                        checked={item.checked}
                        id={item.id}
                      />
                    </div>
                    <div>
                      <button
                        id={item.id}
                        onClick={() => this.handleDelete(item.id)}
                      >
                        <FontAwesomeIcon
                          className="text-slate-400 text-lg"
                          icon={faTrashAlt}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <Enter
          handleAddTask={this.handleAddTask}
          handleDeleteAll={this.handleDeleteAll}
        />
      </div>
    );
  }
}

export default Content;
