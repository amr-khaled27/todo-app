import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header p-4 bg-slate-700 flex justify-center">
        <p className={this.props.text_style}>{this.props.title}</p>
      </div>
    );
  }
}

export default Header;
