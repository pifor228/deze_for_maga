// import { useEffect, useState, type FormEvent } from "react";
// import axios from "axios";

// type GameResult = {
//   id: number;
//   player_name: string;
//   attempts: number;
//   result: "win" | "lose";
//   created_at?: string;
// };

// type NewGameResult = Omit<GameResult, "id" | "created_at">;


// const api = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

// export default function App() {
//   const [results, setResults] = useState<GameResult[]>([]);
//   const [playerName, setPlayerName] = useState("");
//   const [isGameStarted, setIsGameStarted] = useState(false);


//   const [targetNumber, setTargetNumber] = useState<number | null>(null);
//   const [guess, setGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [hint, setHint] = useState("");
//   const [isGameOver, setIsGameOver] = useState(false);


//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);
//   const [error, setError] = useState("");


//   const fetchResults = (signal?: AbortSignal) => {
//     api
//       .get<GameResult[]>("game-results/", { signal })
//       .then((response) => setResults(response.data))
//       .catch((requestError: unknown) => {
//         if (!axios.isCancel(requestError)) {
//           setError("Не удалось загрузить результаты. Проверьте Django.");
//         }
//       })
//       .finally(() => {
//         if (!signal?.aborted) setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     const controller = new AbortController();
//     fetchResults(controller.signal);
//     return () => controller.abort();
//   }, []);


//   const handleStartGame = (event: FormEvent) => {
//     event.preventDefault();
//     if (!playerName.trim()) return;

//     const randomNum = Math.floor(Math.random() * 100) + 1;
//     setTargetNumber(randomNum);
//     setAttempts(0);
//     setHint("");
//     setIsGameOver(false);
//     setIsGameStarted(true);
//   };

//   const handleGuessSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     const numGuess = parseInt(guess, 10);
//     if (isNaN(numGuess) || targetNumber === null) return;

//     const newAttempts = attempts + 1;
//     setAttempts(newAttempts);
//     setGuess("");

//     if (numGuess === targetNumber) {
//       setHint("угадано 🎉");
//       setIsGameOver(true);
//       await saveGameResult(newAttempts, "win");
//     } else if (numGuess < targetNumber) {
//       setHint("число больше");
//     } else {
//       setHint("число меньше");
//     }
//   };


//   const saveGameResult = async (finalAttempts: number, gameResult: "win" | "lose") => {
//     setIsSaving(true);
//     setError("");

//     try {
//       const payload: NewGameResult = {
//         player_name: playerName.trim(),
//         attempts: finalAttempts,
//         result: gameResult,
//       };

//       const response = await api.post<GameResult>("game-results/", payload);
//       setResults((prev) => [response.data, ...prev]);
//     } catch {
//       setError("Не удалось сохранить результат игры.");
//     } finally {
//       setIsSaving(false);
//     }
//   };


//   const handleRestart = () => {
//     setIsGameStarted(false);
//     setPlayerName("");
//     setGuess("");
//     setHint("");
//     setAttempts(0);
//     setIsGameOver(false);
//   };

//   return (
//     <main style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "sans-serif" }}>
//       <h1>Игра «Угадай число»</h1>

//       {!isGameStarted ? (
//         <form onSubmit={handleStartGame}>
//           <div>
//             <label htmlFor="player-name">Введите ваше имя: </label>
//             <input
//               id="player-name"
//               value={playerName}
//               onChange={(e) => setPlayerName(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Начать игру</button>
//         </form>
//       ) : (
//         <div>
//           <p>Игрок: <strong>{playerName}</strong></p>
//           <p>Количество попыток: <strong>{attempts}</strong></p>
//           {!isGameOver && (
//             <form onSubmit={handleGuessSubmit}>
//               <input
//                 type="number"
//                 min="1"
//                 max="100"
//                 placeholder="Число от 1 до 100"
//                 value={guess}
//                 onChange={(e) => setGuess(e.target.value)}
//                 required
//               />
//               <button type="submit" disabled={isSaving}>
//                 Проверить
//               </button>
//             </form>
//           )}

//           {hint && <h2>Подсказка: {hint}</h2>}

//           <button onClick={handleRestart} style={{ marginTop: "15px" }}>
//             Начать заново
//           </button>
//         </div>
//       )}

//       {error && <p role="alert" style={{ color: "red" }}>{error}</p>}

//       <hr style={{ margin: "30px 0" }} />

//       <h2>Таблица результатов</h2>
//       {isLoading ? (
//         <p>Загрузка...</p>
//       ) : results.length === 0 ? (
//         <p>Результатов пока нет</p>
//       ) : (
//         <ul>
//           {results.map((res) => (
//             <li key={res.id}>
//               {res.player_name} — {res.result === "win" ? "Победа" : "Поражение"}, попыток: {res.attempts}
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }
import styles from "./App.module.css";
import { useState } from "react";

type SearchInputProps = {
  value: string;
  onTextChange: (value: string) => void;
};


import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <section className="card">{children}</section>;
}
function TextInput({ value, onTextChange }: SearchInputProps) {
  return (
    <input className={styles.card}
      type="text"
      placeholder="Поиск"
      value={value}
      onChange={(event) => onTextChange(event.target.value)}
    />
  );
}

function TextPreview({ text }: { text: string }) {
  return <p>{text}</p>;
}

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Поисковик</h1>
      <TextInput value={search} onTextChange={setSearch} />
      <Card>
        <TextPreview text={search} />
      </Card>
    </div>
  );
}
// я думал уже задание будет сложным по описанию свучало как пипец сложное на которое можно угробить час а в итоге за минут 30 15 справился я даже незнаю зачем добавляю этот коментарий

export default App;
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
// import { useState } from "react";

// type SearchInputProps = {
//   search: string;
//   onSearchChange: (value: string) => void;
// };

// type MovieItem = {
//   id: number;
//   title: string;
//   genre: string;

// };

// type MovieListProps = {
//   movies: MovieItem[];
//   search: string;
//   selectedGenre: string;
// };

// function SearchInput({ search, onSearchChange }: SearchInputProps) {
//   return (
//     <input
//       type="text"
//       placeholder="Поиск фильма"
//       value={search}
//       onChange={(event) => onSearchChange(event.target.value)}
//     />
//   );
// }

// function MovieList({ movies, search, selectedGenre }: MovieListProps) {
//   const filteredMovies = movies.filter((item) => {
//     const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
//     const matchesGenre = selectedGenre === "Все" || item.genre === selectedGenre;
//     return matchesSearch && matchesGenre;
//   });

//   if (filteredMovies.length === 0) {
//     return <p>Фильмы не найдены</p>;
//   }

//   return (
//     <ul>
//       {filteredMovies.map((item) => (
//         <li key={item.id}>
//           {item.title} - {item.genre}
//         </li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   const [search, setSearch] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("Все");
//   const [movies, setMovies] = useState<MovieItem[]>([
//     { id: 1, title: "Интерстеллар", genre: "Фантастика" },
//     { id: 2, title: "1+1", genre: "Драма" },
//     { id: 3, title: "Матрица", genre: "Фантастика" },
//     { id: 4, title: "Пятница 13", genre: "Ужасы"},
//     { id: 5, title: "Валли", genre: "Анимация"}
//   ]);
//   const [newTitle, setNewTitle] = useState("");
//   const [newGenre, setNewGenre] = useState("");
//   const [editingMovieId, setEditingMovieId] = useState<number | null>(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editGenre, setEditGenre] = useState("");

//   const handleDeleteMovie = (id: number) => {
//     setMovies((currentMovies) => currentMovies.filter((item) => item.id !== id));

//     if (editingMovieId === id) {
//       setEditingMovieId(null);
//       setEditTitle("");
//       setEditGenre("");
//     }
//   };

//   const handleAddMovie = () => {
//     if (newTitle.trim() === "" || newGenre.trim() === "") {
//       return;
//     }

//     const newMovie: MovieItem = {
//       id: Date.now() + Math.random(),
//       title: newTitle.trim(),
//       genre: newGenre,
//     };

//     setMovies((currentMovies) => [...currentMovies, newMovie]);
//     setNewTitle("");
//     setNewGenre("");
//   };

//   const startEditing = (movie: MovieItem) => {
//     setEditingMovieId(movie.id);
//     setEditTitle(movie.title);
//     setEditGenre(movie.genre);
//   };

//   const saveMovieChanges = (id: number) => {
//     if (editTitle.trim() === "" || editGenre.trim() === "") {
//       return;
//     }

//     setMovies((currentMovies) =>
//       currentMovies.map((item) =>
//         item.id === id ? { ...item, title: editTitle.trim(), genre: editGenre } : item
//       )
//     );
//     setEditingMovieId(null);
//     setEditTitle("");
//     setEditGenre("");
//   };

//   return (
//     <div>
//       <h1>Поиск фильмов</h1>

//       <select value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
//         <option value="Все">Все</option>
//         <option value="Фантастика">Фантастика</option>
//         <option value="Комедия">Комедия</option>
//         <option value="Боевик">Боевик</option>
//         <option value="Драма">Драма</option>
//         <option value="Ужасы">Ужасы</option>
//         <option value="Анимация">Анимация</option>
//       </select>

//       <SearchInput search={search} onSearchChange={setSearch} />
//       <MovieList movies={movies} search={search} selectedGenre={selectedGenre} />

//       <h2>Добавить фильм</h2>
//       <input
//         type="text"
//         placeholder="Название фильма"
//         value={newTitle}
//         onChange={(event) => setNewTitle(event.target.value)}
//       />
//       <select value={newGenre} onChange={(event) => setNewGenre(event.target.value)}>
//         <option value="">Выберите жанр</option>
//         <option value="Фантастика">Фантастика</option>
//         <option value="Драма">Драма</option>
//         <option value="Комедия">Комедия</option>
//         <option value="Ужасы">Ужасы</option>
//         <option value="Анимация">Анимация</option>
//         <option value="Боевик">Боевик</option>
//       </select>
//       <button onClick={handleAddMovie}>Добавить фильм</button>

//       <h2>Список фильмов</h2>
//       <ul>
//         {movies.map((item) => {
//           const isEditing = editingMovieId === item.id;

//           return (
//             <li key={item.id}>
//               {isEditing ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editTitle}
//                     onChange={(event) => setEditTitle(event.target.value)}
//                   />
//                   <select value={editGenre} onChange={(event) => setEditGenre(event.target.value)}>
//                     <option value="">Выберите жанр</option>
//                     <option value="Фантастика">Фантастика</option>
//                     <option value="Драма">Драма</option>
//                     <option value="Комедия">Комедия</option>
//                     <option value="Ужасы">Ужасы</option>
//                     <option value="Анимация">Анимация</option>
//                     <option value="Боевик">Боевик</option>
//                   </select>
//                   <button onClick={() => saveMovieChanges(item.id)}>Сохранить</button>
//                   <button onClick={() => {
//                     setEditingMovieId(null);
//                     setEditTitle("");
//                     setEditGenre("");
//                   }}>Отмена</button>
//                 </>
//               ) : (
//                 <>
//                   {item.title} - {item.genre}
//                   <button onClick={() => startEditing(item)}>Редактировать</button>
//                   <button onClick={() => handleDeleteMovie(item.id)}>Удалить</button>
//                 </>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";
// import styles from "./App.module.css";
// type Lesson = {
//   id: number;
//   title: string;
//   owner: string;
//   img: string;
// };

// type LessonItemProps = {
//   title: string;
//   owner: string;
//   img: string;
//   isCurrent: boolean;
//   isPlaying: boolean;
//   progress: number;
//   duration: number;
//   onPlay: () => void;
//   onPause: () => void;
//   onNext: () => void;
//   onSeek: (value: number) => void;
// };


// function LessonItem({ title, owner, img, isCurrent, isPlaying, progress, duration, onPlay, onPause, onNext, onSeek }: LessonItemProps) {
//   return (
//     <li>
//       <strong className={styles.title} >
//         <img className={styles.ImgCard} src={img} alt={title} width="500" />

        
//         <h3>{title}</h3> 
//         <p>{owner}</p> 
//       <button
//         className={styles.ButtonCard}
//         onClick={onPlay}
//       >
//         Play
//       </button>
//       <button
//         className={styles.ButtonCard}
//         onClick={onPause}
//       >
//         Pause
//       </button>
//       <button
//         className={styles.ButtonCard}
//         onClick={onNext}
//       >
//         Next track
//       </button>
//       <div>
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={progress}
//           onChange={(event) => onSeek(Number(event.target.value))}
//           aria-label={`Прогресс песни ${title}`}
//         />
//         <span>{Math.floor(progress / 60)}:{String(Math.floor(progress % 60)).padStart(2, "0")} / {Math.floor(duration / 60)}:00</span>
//       </div>
//       {isCurrent && <small>{isPlaying ? "Сейчас играет" : "На паузе"}</small>}
//         </strong>
//     </li>
//   );
// }

// function App() {
//   const lessons: Lesson[] = [
//     { id: 1, title: "Omega Flowey", owner: "Toby Fox", img: "https://avatars.mds.yandex.net/i?id=3c5fee497d7edf4ff612179dfb01ef80110c131b-12722406-images-thumbs&n=13" },
//     { id: 2, title: "Asgore", owner: "Toby Fox", img: "https://avatars.mds.yandex.net/i?id=62c462b2deaf5e8bd472affc9aaa61f007ac146e-12541653-images-thumbs&n=13" },
//     { id: 3, title: "c418", owner: "Daniel Rosenfeld", img: "https://avatars.mds.yandex.net/i?id=b9aca68b24d3e5c2f8cfa601d47c4d162cd5b865-10994959-images-thumbs&n=13" },
//     { id: 4, title: "Mortal Combat", owner: "Oliver Adams & Maurice Engelen", img: "https://avatars.mds.yandex.net/i?id=26485c68d29a955df3ccc37a90068e236d071962-4948622-images-thumbs&n=13" },
//     { id: 5, title: "Golden Wind", owner: "Yuugo Kanno", img: "https://avatars.mds.yandex.net/i?id=9f568dafc037a339390c4e4bad1b6752fe5e493e-5658514-images-thumbs&n=13" },
//   ];
//   const trackDuration = 180;
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(() => lessons.map(() => 0));

//   const playTrack = (index: number) => {
//     setCurrentTrackIndex(index);
//     setIsPlaying(true);
//   };

//   const pauseTrack = () => {
//     setIsPlaying(false);
//   };

//   const playNext = () => {
//     playTrack((currentTrackIndex + 1) % lessons.length);
//   };

//   useEffect(() => {
//     if (!isPlaying) return;

//     const timer = window.setInterval(() => {
//       setProgress((currentProgress) => {
//         const updatedProgress = [...currentProgress];
//         const nextValue = updatedProgress[currentTrackIndex] + 1;

//         if (nextValue >= trackDuration) {
//           updatedProgress[currentTrackIndex] = 0;
//           setCurrentTrackIndex((index) => (index + 1) % lessons.length);
//         } else {
//           updatedProgress[currentTrackIndex] = nextValue;
//         }

//         return updatedProgress;
//       });
//     }, 1000);

//     return () => window.clearInterval(timer);
//   }, [currentTrackIndex, isPlaying, lessons.length]);

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//         <section className={styles.card} key={lesson.id}>

//           <LessonItem 
        
//             key={lesson.id}
//             title={lesson.title}
//             owner={lesson.owner}
//             img={lesson.img}
//             isCurrent={lessons[currentTrackIndex].id === lesson.id}
//             isPlaying={isPlaying}
//             progress={progress[lessons.indexOf(lesson)]}
//             duration={trackDuration}
//             onPlay={() => playTrack(lessons.indexOf(lesson))}
//             onPause={pauseTrack}
//             onNext={playNext}
//             onSeek={(value) => setProgress((currentProgress) => currentProgress.map((item, index) => index === lessons.indexOf(lesson) ? value : item))}
//           />
    
//         </section>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [customer, setCustomer] = useState('')
//   const [bun, setBun] = useState('Броишь')
//   const [meat, setMeat] = useState('Говядина')
//   const [ingredients, setIngredients] = useState<string[]>([]);
//   const [quantity, setQuantity] = useState(1)

//   const handleCheckbox = (item: string) => {
//     setIngredients(prev =>
//       prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
//     );
//   };
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     await axios.post('http://127.0.0.1:8000/api/orders/', {
//       customer,
//       bun,
//       meat,
//       ingredients,
//       quantity
//     });
//     alert('Заказ успешно отправлен!');
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       const serverMessage = err.response?.data;
//       alert(`Ошибка при отправке заказа: ${JSON.stringify(serverMessage)}`);
//     } else {
//       alert('Ошибка при отправке заказа');
//     }
//   }
// };
// return(
//   <div>
//     <h2>Собрать бургер</h2>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Ваше имя: </label>
//         <input 
//           type="text"
//           value={customer}
//           onChange={e => setCustomer(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Булочка:</label>
//         <select value={bun} onChange={e => setBun(e.target.value)}>
//           <option value="Броишь">Броишь</option>
//           <option value="Кунжутная">Кунжутная</option>
//         </select>
//       </div>
//       <div>
//         <label>Котлета:</label>
//         <select value={meat} onChange={e => setMeat(e.target.value)}>
//           <option value="Говядина">Говядина</option>
//           <option value="Курица">Курица</option>
//         </select>
//       </div>
//       <div>
//         <label>Добавки:</label>
//         {['Сыр', 'Бекон', 'Халапеньо'].map(item =>(
//           <label key={item}>
//             <input 
//             type="checkbox"
//             checked={ingredients.includes(item)}
//             onChange={() => handleCheckbox(item)}
//             />
//             {item}
//           </label>

//         ))}
//       </div>
//       <div>
//         <label>Количество:</label>
//         <input 
//         type="number"
//         min="1"
//         value={quantity}
//         onChange={e => setQuantity(Number(e.target.value))}
//         />
//       </div>
//       <button type="submit">
//         Заказать
//       </button>
//     </form>
//   </div>
// );

// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Character {
//   id: number;
//   name: string;
//   charater_class: string;
//   level: number;
//   weapon: string;
//   description: string;
// }

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
// });

// function App() {
//   const [characters, setCharacters] = useState<Character[]>([]);
//   const [name, setName] = useState("");
//   const [level, setLevel] = useState(1);
//   const [weapon, setWeapon] = useState("");
//   const [charater_class, setCharater_Class] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     api
//       .get<Character[]>("/characters/")
//       .then((response) => setCharacters(response.data))
//       .catch(() => setError("Не удалось загрузить персонажей"));
//   }, []);

//   const createCharacter = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     try {
//       const response = await api.post<Character>("/characters/", {
//         name,
//         level,
//         charater_class,
//         weapon,
//         description,
//       });

//       setCharacters((currentCharacters) => [...currentCharacters, response.data]);
//       setName("");
//       setLevel(1);
//       setWeapon("");
//       setCharater_Class("");
//       setDescription("");
//     } catch {
//       setError("Не удалось создать персонажа");
//     }
//   };

//   return (
//     <main>
//       <h1>Персонажи</h1>

//       {error && <p role="alert">{error}</p>}

//       <form onSubmit={createCharacter}>
//         <input
//           type="text"
//           placeholder="Имя"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           required
//         />
//         <input
//           type="number"
//           min="1"
//           placeholder="Уровень"
//           value={level}
//           onChange={(event) => setLevel(Number(event.target.value))}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Оружие"
//           value={weapon}
//           onChange={(event) => setWeapon(event.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Описание"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Класс"
//           value={charater_class}
//           onChange={(event) => setCharater_Class(event.target.value)}
//           required
//         />
//         <button type="submit">Создать персонажа</button>
//       </form>

//       <section>
//         {characters.map((character) => (
//           <article key={character.id}>
//             <h2>{character.name}</h2>
//             <p>{character.charater_class}</p>
//             <p>Уровень: {character.level}</p>
//             <p>Оружие: {character.weapon}</p>
//             <p>{character.description}</p>
//           </article>
//         ))}
//       </section>
//     </main>
//   );
// }

// export default App;



// import { useState, type FormEvent } from "react";
// import axios from "axios";

// type User = {
//   id: number;
//   username: string;
//   email: string;
// };

// const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

// export default function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [search, setSearch] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setHasSearched(true);
//     setError("");

//     try {
//       const response = await api.get<User[]>("/users/", {
//         params: search.trim() ? { search: search.trim() } : undefined,
//       });
//       setUsers(response.data);
//     } catch {
//       setUsers([]);
//       setError("Не удалось загрузить пользователей");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main>
//       <h1>Поиск пользователя</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username-search">
//           <input
//             id="username-search"
//             type="text"
//             placeholder="Имя пользователя"
//             value={search}
//             onChange={(event) => setSearch(event.target.value)}
//           />
//         </label>
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Поиск..." : "Найти"}
//         </button>
//       </form>

//       <section aria-live="polite" aria-busy={isLoading}>
//         {isLoading && <p>Загрузка...</p>}
//         {error && <p role="alert">{error}</p>}
//         {hasSearched && !isLoading && !error && users.length === 0 && (
//           <p>Пользователи не найдены</p>
//         )}
//         {users.length > 0 && !isLoading && (
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>
//                 <div>
//                   <strong>{user.username}</strong>
//                   {user.email ? (
//                     <a href={`mailto:${user.email}`}>{user.email}</a>
//                   ) : (
//                     <p>Email не указан</p>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>
//     </main>
//   );
// }