import { useState } from "react";

type DezeProps = {
  title: string;
  description: string;
  price: number;
};

function Deze({ title, description, price }: DezeProps) {
    const [count, setCount] = useState(1);
    const [userName, setUserName] = useState("");
  return (
    
    <section className="deze-card">
        <div>
            <h2 onClick={() => console.log(title)}>{title}</h2>
            <p>{description}</p>
            <p>Цена: {price} руб.</p>
        
        <input 
        type="text"
        placeholder="Имя покупателя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />

    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>−</button>
    </div>
    <button onClick={() => {
        console.log(`Покупатель ${userName}`);
        console.log(`Название товара: ${title}`);
        console.log(`Количество товаров: ${count}`);
    }}>
        добавить в корзину
    </button>
    <button onClick={() => {
        setUserName("");
        setCount(1);
    }}>
        очистить корзину
    </button>
    </div>
    </section>
  );
}

export default Deze;