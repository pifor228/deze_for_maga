import { useState } from "react";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
};

function ProductCard({ title, description, price }: ProductCardProps) {
    const [favorite, setFavorite] = useState(false);
    const [count, setCount] = useState(0);
  return (
    
    <section className="product-card">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Цена: {price} руб.</p>

    <button onClick={() => setFavorite(!favorite)}>
      {favorite ? "Удалить из корзины" : "Добавить в корзину"}
    </button>
          <p>Текущее значение: {count}</p>

      <button onClick={() => setCount(count + 1)}>like</button>
      <button onClick={() => setCount(count - 1)}>dislike</button>
        </div>
    </section>
  );
}

export default ProductCard;