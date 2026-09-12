// import Ceader from "./Component/Ceader/ceader"
// import Header from "./Component/Header/header"
// import MovieCard from "./Component/MovieCard/moviecard"
// import ProductCard from "./Component/ProductCard/productcard"
// import { useState, type ChangeEvent } from "react";
// import Deze from "./Component/Deze/deze"
// function App() {
//   const initialMessage = "Нажми кнопку или введи текст";
//   const [message, setMessage] = useState(initialMessage);
//   const [mode, setMode] = useState("Работа");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleButtonClick() {
//     setMessage((currentMessage) => `Здравствуйте, ${currentMessage || "гость"}!`);
//   }

//   function resetMessage() {
//     setMessage(initialMessage);
//   }

//   function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
//     setMessage(event.target.value);
//   }

//   return (
//     <>
//       <Header />

//       <ProductCard title="iPhone 14" description="Смартфон Apple iPhone 14 128GB" price={79990} category="Смартфоны" />

//       <ProductCard title="Samsung Galaxy S23" description="Смартфон Samsung Galaxy S23 256GB" price={89990} category="Смартфоны" />

//       <ProductCard title="Sony WH-1000XM4" description="Беспроводные наушники Sony WH-1000XM4" price={29990} category="Наушники" />

//       <Ceader />
      
//       <MovieCard title="Friday the 13th" genre="Ужасы" year={1980} />

//       <MovieCard title="WALL-E" genre="Анимация" year={2008} />

//       <MovieCard title="The Matrix" genre="Научная фантастика" year={1999} />

//       <h1>это ваше задание магаааа вот тут</h1>
//       <Deze title="iPhone 14" description="Смартфон Apple iPhone 14 128GB" price={79990} />
//       <div>
//       {isLoggedIn ? (
//       <>
//         <h1>Вы вошли как гость добро пожаловать! </h1>
//       </>
//       ) : (
//       <>

//         <h1>Войти как гость?</h1>
        
//       </>)}

//       {isLoggedIn ? (
//       <>
//         <p>Добро пожаловать в личный кабинет.</p>
//         <ProductCard title="бутерброд" description="так как вы вошли в систему мы показываем вам еще один товар" price={590} category="Еда" />
//       </>
//       ) : (
//       <>

//         <p>Пожалуйста, войди в систему.</p>
        
//       </>)}

//       {isLoggedIn && <p>Тебе доступны закрытые разделы.</p>}
//       {isLoggedIn && <p>Если вы видите это сообщение, значит, вы вошли в систему.</p>}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Выйти из режима гостя" : "Войти как гость"}
//       </button>
//         {isLoggedIn ? "доступно" : "не доступно"}
//       <h1>какое у вас Имя?</h1>

//       <button onClick={handleButtonClick}>нажмите кнопку когда будете готовы</button>
//       <button onClick={resetMessage}>Вернуть исходный текст</button>
//       <input onChange={handleInputChange} />

//       <button onClick={handleButtonClick}>
//         Сменить сообщение
//       </button>

//       <button onClick={() => setMode("Работа")}>
//         Работа
//       </button>

//       <p>Текущий режим: {mode}</p>

//       <input
//         type="text"
//         placeholder="Напишите свое имя"
//         value={message}
//         onChange={handleInputChange}
//       />

//       <h1>{message}</h1>

//       <h1>A тут нечиго нету</h1>
//     </div>
//     </>  

//   )
// }

// export default App;
import { useState } from "react";

type SearchInputProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

type MovieItem = {
  id: number;
  movies: string;
  genre: string;
};

type LessonListProps = {
  movie: MovieItem[];
  search: string;
};

function SearchInput({ search, onSearchChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Поиск фильма"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}

function MovieList({ movie, search }: LessonListProps) {
  const filteredMovies = movie.filter((item) =>
    item.movies.toLowerCase().includes(search.toLowerCase())
  );
  if (filteredMovies.length === 0) {
    return <p> Прочитал = гей </p>;
  }

  return (
    <ul>
      {filteredMovies.map((item) => (
        <li key={item.id}>
          {item.movies} - {item.genre}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [search, setSearch] = useState("");

  const [movie, setMovie] = useState<MovieItem[]>([
    { id: 1, movies: "Интерстеллар(Вы так сильно любите этот фильм?)", genre: "Фантастика" },
    { id: 2, movies: "1+1", genre: "Драма И Комедия" },
    { id: 3, movies: "Матрица", genre: "Фантастика" },
  ]);
  const[newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  const handleAddMovie = () => {
    if (newTitle.trim() !== "" && newGenre.trim() !== "") {
      const newMovie: MovieItem = {
        id: movie.length + 1,
        movies: newTitle,
        genre: newGenre,
      };
      setMovie([...movie, newMovie]);
      setNewTitle("");
      setNewGenre("");
    }
  };
  return (
    <div>
      <h1>Поиск фильмов</h1>
      <SearchInput search={search} onSearchChange={setSearch} />
      <MovieList movie={movie} search={search} />
      <h2>Добавить фильм</h2>
      <input
        type="text"
        placeholder="Название фильма"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <select name="genre" id="genre" value={newGenre} onChange={(event) => setNewGenre(event.target.value)}>
        <option value="">Выберите жанр</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Драма">Драма</option>
        <option value="Комедия">Комедия</option>
        <option value="Ужасы">Ужасы</option>
        <option value="Анимация">Анимация</option>
      </select>
      <button onClick={handleAddMovie}>Добавить фильм</button>
    </div>
  );
}

export default App;