import { useState } from "react";

type HeaderProps = {};

function Header({}: HeaderProps) {

  const [isGuestAuth, setIsGuestAuth] = useState(false);


  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!login || !password) {
      setError("Заполните все поля");
    } else {
      setIsAuth(true);
      setIsAdmin(login.toLowerCase() === "admin");
      setIsDeleteConfirmationOpen(false);
      setError("");
    }
  };

  const handleDeleteAccount = () => {
    setIsAuth(false);
    setIsDeleteConfirmationOpen(false);
    setLogin("");
    setPassword("");
  };

  return (
    <div>
      {}
      <div>
        <h3>Режим гостя</h3>
        {isGuestAuth ? (
          <div>
            <p>Вы вошли как гость</p>
            <button onClick={() => setIsGuestAuth(false)}>Выйти</button>
          </div>
        ) : (
          <div>
            <p>Вы не авторизованы</p>
            <button onClick={() => setIsGuestAuth(true)}>Войти как гость</button>
          </div>
        )}
      </div>

      {}
      <div>
        <h3>Форма авторизации</h3>
        {isAuth ? (
          <div>
            {isAdmin ? (
              <div>
                <h3>Панель администратора</h3>
                <p>Вы вошли как администратор.</p>
              </div>
            ) : (
              <div>
                <p>Вы обычный пользователь.</p>
                {!isDeleteConfirmationOpen ? (
                  <button onClick={() => setIsDeleteConfirmationOpen(true)}>
                    Удалить аккаунт
                  </button>
                ) : (
                  <div>
                    <p>Вы уверены, что хотите удалить аккаунт?</p>
                    <button onClick={handleDeleteAccount}>Да, удалить</button>
                    <button onClick={() => setIsDeleteConfirmationOpen(false)}>Отмена</button>
                  </div>
                )}
              </div>
            )}
            <button onClick={() => {
              setIsAuth(false);
              setIsAdmin(false);
              setIsDeleteConfirmationOpen(false);
            }}>
              Выйти
            </button>
          </div>
        ) : (
          <div>
            <input 
              placeholder="Логин" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Пароль" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Войти</button>
            {error && <p>{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
      
    <div>

    <section className="product-card">

            <h1>Добро пожаловать!</h1>
            <h1>Наши товары электроники и фильмов</h1>

    </section> 
    
    </div>
export default Header;