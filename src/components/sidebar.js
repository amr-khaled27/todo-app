import { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar bg-slate-600 w-72 min-h-[calc(100vh_-_64px)] flex justify-center items-center">
        <p className={this.props.text_style}>{this.props.title}</p>
      </div>
    );
  }
}

export default Sidebar;
