import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect, useState } from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => {
			console.error(err);
		});
  }, []);

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
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				closeAllPopups();
			}
		};

		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
		}
	}, []);

	return (
    <CurrentUserContext.Provider value={currentUser}>
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
        submitText="Сохранить"
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
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        submitText="Добавить место"
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
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={() => {
          closeAllPopups();
        }}
      ></ImagePopup>

      <PopupWithForm
        title="Вы уверены?"
        name="confirm"
        submitText="Да"
      ></PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        submitText="Сохранить"
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
      </PopupWithForm>
		</CurrentUserContext.Provider>
  );
}

export default App;
