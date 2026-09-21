import { useState } from "react";

type MovieCardProps = {
  title: string;
  genre: string;
  year: number;
};

function MovieCard({ title, genre, year }: MovieCardProps) {
    const [favorite, setFavorite] = useState(false);
  return (
    
    <section className="movie-card">
        <div>
            <h2>{title}</h2>
            <p>Жанр: {genre}</p>
            <p>Год выпуска: {year}</p>

    <button onClick={() => setFavorite(!favorite)}>
      {favorite ? "Удалить" : "Добавить"}
    </button>
        </div>
    </section>
  );
}

export default MovieCard;