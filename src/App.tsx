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
  title: string;
  genre: string;
};

type MovieListProps = {
  movies: MovieItem[];
  search: string;
  selectedGenre: string;
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

function MovieList({ movies, search, selectedGenre }: MovieListProps) {
  const filteredMovies = movies.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === "Все" || item.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  if (filteredMovies.length === 0) {
    return <p>Фильмы не найдены</p>;
  }

  return (
    <ul>
      {filteredMovies.map((item) => (
        <li key={item.id}>
          {item.title} - {item.genre}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const [movies, setMovies] = useState<MovieItem[]>([
    { id: 1, title: "Интерстеллар", genre: "Фантастика" },
    { id: 2, title: "1+1", genre: "Драма" },
    { id: 3, title: "Матрица", genre: "Фантастика" },
    { id: 4, title: "Пятница 13", genre: "Ужасы"},
    { id: 5, title: "Валли", genre: "Анимация"}
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [editingMovieId, setEditingMovieId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editGenre, setEditGenre] = useState("");

  const handleDeleteMovie = (id: number) => {
    setMovies((currentMovies) => currentMovies.filter((item) => item.id !== id));

    if (editingMovieId === id) {
      setEditingMovieId(null);
      setEditTitle("");
      setEditGenre("");
    }
  };

  const handleAddMovie = () => {
    if (newTitle.trim() === "" || newGenre.trim() === "") {
      return;
    }

    const newMovie: MovieItem = {
      id: Date.now() + Math.random(),
      title: newTitle.trim(),
      genre: newGenre,
    };

    setMovies((currentMovies) => [...currentMovies, newMovie]);
    setNewTitle("");
    setNewGenre("");
  };

  const startEditing = (movie: MovieItem) => {
    setEditingMovieId(movie.id);
    setEditTitle(movie.title);
    setEditGenre(movie.genre);
  };

  const saveMovieChanges = (id: number) => {
    if (editTitle.trim() === "" || editGenre.trim() === "") {
      return;
    }

    setMovies((currentMovies) =>
      currentMovies.map((item) =>
        item.id === id ? { ...item, title: editTitle.trim(), genre: editGenre } : item
      )
    );
    setEditingMovieId(null);
    setEditTitle("");
    setEditGenre("");
  };

  return (
    <div>
      <h1>Поиск фильмов</h1>

      <select value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
        <option value="Все">Все</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Комедия">Комедия</option>
        <option value="Боевик">Боевик</option>
        <option value="Драма">Драма</option>
        <option value="Ужасы">Ужасы</option>
        <option value="Анимация">Анимация</option>
      </select>

      <SearchInput search={search} onSearchChange={setSearch} />
      <MovieList movies={movies} search={search} selectedGenre={selectedGenre} />

      <h2>Добавить фильм</h2>
      <input
        type="text"
        placeholder="Название фильма"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <select value={newGenre} onChange={(event) => setNewGenre(event.target.value)}>
        <option value="">Выберите жанр</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Драма">Драма</option>
        <option value="Комедия">Комедия</option>
        <option value="Ужасы">Ужасы</option>
        <option value="Анимация">Анимация</option>
        <option value="Боевик">Боевик</option>
      </select>
      <button onClick={handleAddMovie}>Добавить фильм</button>

      <h2>Список фильмов</h2>
      <ul>
        {movies.map((item) => {
          const isEditing = editingMovieId === item.id;

          return (
            <li key={item.id}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(event) => setEditTitle(event.target.value)}
                  />
                  <select value={editGenre} onChange={(event) => setEditGenre(event.target.value)}>
                    <option value="">Выберите жанр</option>
                    <option value="Фантастика">Фантастика</option>
                    <option value="Драма">Драма</option>
                    <option value="Комедия">Комедия</option>
                    <option value="Ужасы">Ужасы</option>
                    <option value="Анимация">Анимация</option>
                    <option value="Боевик">Боевик</option>
                  </select>
                  <button onClick={() => saveMovieChanges(item.id)}>Сохранить</button>
                  <button onClick={() => {
                    setEditingMovieId(null);
                    setEditTitle("");
                    setEditGenre("");
                  }}>Отмена</button>
                </>
              ) : (
                <>
                  {item.title} - {item.genre}
                  <button onClick={() => startEditing(item)}>Редактировать</button>
                  <button onClick={() => handleDeleteMovie(item.id)}>Удалить</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;