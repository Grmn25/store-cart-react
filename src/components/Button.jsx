import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#779400",
    color: "#fff",
    border: "none",
    padding: "15px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
