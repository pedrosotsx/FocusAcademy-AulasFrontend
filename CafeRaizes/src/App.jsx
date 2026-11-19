import CartaoDoProduto from "./components/CartaoDoProduto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return ( 

    <div>
      <Header />
      <Hero />
      <CartaoDoProduto nome="Café Expresso" descricao="Café expresso tradicional" preco={5.99} />
      <CartaoDoProduto nome="Café Latte" descricao="Café latte com leite vaporizado" preco={6.99} />
      <CartaoDoProduto nome="Café Capuccino" descricao="Café capuccino com espuma de leite" preco={8.99} />
      <Footer />
    </div>

   );
}

export default App;