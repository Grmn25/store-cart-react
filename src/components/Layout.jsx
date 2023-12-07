import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    width: "1200px",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
