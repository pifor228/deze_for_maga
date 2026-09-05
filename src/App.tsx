import Header from "./Component/Header/header"
import ProductCard from "./Component/ProductCard/productcard"

function App() {


  return (
    <>
      <Header />

      <p></p>

      <ProductCard title="Ноутбук" price={1000} />

      <ProductCard title="Смартфон" price={500} />

      <ProductCard title="Планшет" price={800} />
    </>  

  )
}

export default App
