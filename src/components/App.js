import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import { useEffect, useState } from "react"

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  };

	const handleCardClick = (card) => {
		setSelectedCard(card)
	};

	const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
		setSelectedCard(null)
  }

	useEffect(() => {
		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				setSelectedCard(null);
				setIsEditAvatarPopupOpen(false)
    		setIsEditProfilePopupOpen(false)
    		setIsAddPlacePopupOpen(false)
			}
		})
	});

	return (
    <>
      <Header></Header>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      ></Main>
      <Footer></Footer>

      <PopupWithForm
        title="Редактирование профиля"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <ImagePopup
				card={selectedCard}
				onClose={() => {
					closeAllPopups();
				}}
			></ImagePopup>

      <PopupWithForm title="Вы уверены?" name="confirm">
        <button type="submit" className="popup__button">
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
    </>
  );
}

export default App;
