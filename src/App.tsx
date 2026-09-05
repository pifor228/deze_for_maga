import Ceader from "./Component/Ceader/ceader"
import Header from "./Component/Header/header"
import MovieCard from "./Component/MovieCard/moviecard"
import ProductCard from "./Component/ProductCard/productcard"

function App() {


  return (
    <>
      <Header />

      <ProductCard title="iPhone 14" description="Смартфон Apple iPhone 14 128GB" price={79990} category="Смартфоны" />

      <ProductCard title="Samsung Galaxy S23" description="Смартфон Samsung Galaxy S23 256GB" price={89990} category="Смартфоны" />

      <ProductCard title="Sony WH-1000XM4" description="Беспроводные наушники Sony WH-1000XM4" price={29990} category="Наушники" />

      <Ceader />
      
      <MovieCard title="Friday the 13th" genre="Ужасы" year={1980} />

      <MovieCard title="WALL-E" genre="Анимация" year={2008} />

      <MovieCard title="The Matrix" genre="Научная фантастика" year={1999} />
    </>  

  )
}

export default App
