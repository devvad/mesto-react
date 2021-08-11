import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header></Header>
			<Main></Main>
      <Footer></Footer>

      <div className="popup profile-popup">
        <div className="popup__container">
          <h2 className="popup__name">Редактировать профиль</h2>
          <form className="popup__form" name="popup-form" noValidate>
            <input
              type="text"
              className="popup__input"
              name="name"
              id="input-popup-title"
              defaultValue
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="popup__error-message input-popup-title-error" />
            <input
              type="text"
              className="popup__input"
              name="about"
              id="input-popup-subtitle"
              defaultValue
              placeholder="Вид деятельности"
              minLength={2}
              maxLength={200}
              required
            />
            <span className="popup__error-message input-popup-subtitle-error" />
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
          <button type="button" className="popup__closed" />
        </div>
      </div>
      <div className="popup popup-type-place">
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form-add-card" name="place" noValidate>
            <input
              type="text"
              id="card-name"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required
            />
            <span className="popup__error-message card-name-error" />
            <input
              type="URL"
              id="link"
              name="link"
              className="popup__input popup__input_type_link-url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error-message link-error" />
            <button
              type="submit"
              className="popup__button popup__button_disabled"
              disabled
              aria-label="Добавить место"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_gallery">
        <div className="popup__preview">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="Фотография места" />
            <figcaption className="popup__figcaption" />
          </figure>
          <button type="button" className="popup__closed" />
        </div>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__container">
          <form id="form_remove" className="popup__form">
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button">
              Да
            </button>
          </form>
          <button type="button" className="popup__closed" id="close_remove" />
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form id="form-avatar" className="popup__form" noValidate>
            <input
              type="url"
              className="popup__input"
              name="avatar"
              id="input-popup-avatar"
              defaultValue
              placeholder="Ссылка на аватар"
              required
            />
            <span className="input-popup-avatar-error popup__error-message" />
            <button type="submit" className="popup__button" id="newAvatar">
              Сохранить
            </button>
          </form>
          <button type="button" className="popup__closed" id="closeAvatar" />
        </div>
      </div>
    </>
  );
}

export default App;
