import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect, useState } from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import AddPlacePopup from "../components/AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

		function handleAddPlaceSubmit(card) {
      api
        .addCard(card)
        .then((newCard) => {
          setCards([...cards, newCard]);
        })
        .catch((err) => {
          console.error(err);
        });
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header></Header>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
        onSubmit={handleAddPlaceSubmit}
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
      <AddPlacePopup
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        closeAllPopups={closeAllPopups}
        onSubmit={handleAddPlaceSubmit}
      ></AddPlacePopup>
    </CurrentUserContext.Provider>
  );
}

export default App;
