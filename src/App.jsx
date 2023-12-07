import { useState, Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carrito: [],
    esCarritoVisible: false,
  };

  agregarAlCarrito = (producto) => {
    const { carrito } = this.state;
    if (carrito.find((x) => x.name === producto.name)) {
      const newCarrito = carrito.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cant: x.cant + 1,
            }
          : x,
      );
      return this.setState({
        carrito: newCarrito,
      });
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cant: 1,
      }),
    });
  };

  mostrarCarrito = () => {
    if (!this.state.carrito.length) {
      return;
    }
    this.setState({
      esCarritoVisible: !this.state.esCarritoVisible,
    });
  };

  render() {
    const { esCarritoVisible } = this.state;

    return (
      <div>
        <Navbar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
