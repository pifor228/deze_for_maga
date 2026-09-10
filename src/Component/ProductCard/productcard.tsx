import { useState } from "react";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  category: string;
};

function ProductCard({ title, description, price, category }: ProductCardProps) {
    const [isvisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
  return (
    
    <section className="product-card">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Цена: {price} руб.</p>
            {isvisible && <p>Категория: {category}</p>}
    <button onClick={() => setIsVisible(!isvisible)}>
      {isvisible ? "Скрыть" : "Показать"}
    </button>

      {(count > 0) ? (
      <>
        <p>товаров в корзине: {count}</p>
      </>
      ) : (
      <>
        <p>ваша корзина пуста </p>
      </>)}
      {count > 5 && <p>Вы добавили слишком много товаров в корзину! Добвалять дальше не рекомендуется!</p>}

      <button onClick={() => setCount(count + 1)}>Добавить в корзину</button>
      <button onClick={() => setCount(count - 1)}>Удалить из корзины</button>
        </div>
    </section>
  );
}

export default ProductCard;