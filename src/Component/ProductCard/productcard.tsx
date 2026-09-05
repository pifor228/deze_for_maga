import { useState } from "react";

type ProductCardProps = {
  title: string;
  price: number;
};

function ProductCard({ title, price }: ProductCardProps) {
    const [count, setCount] = useState(0);
  return (
    
    <section className="product-card">
        <div>
            <h2>{title}</h2>
            <p>Цена: {price}</p>

            <p>Счетчик вещей в корзине: {count}</p>

            <button onClick={() => setCount(count + 1)}>Добавить в корзину</button>
            <button onClick={() => setCount(count - 1)}>Удалить из корзины</button>
        </div>
    </section>
  );
}

export default ProductCard;