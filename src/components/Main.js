import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUserId = useContext(CurrentUserContext)._id
	const [cards, setCards] = useState([]);
	const { name, about, avatar} = useContext(CurrentUserContext);

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
    const isLiked = card.likes.some(i => i._id === currentUserId);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
};

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        >
          <button
            type="button"
            onClick={onEditAvatar}
            className="profile__overlay"
          />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__title">{name}</h1>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            />
          </div>
          <p className="profile__subtitle">{about}</p>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
        />
      </section>
      <section>
        <ul className="cards">
          {cards.map((data) => {
            return (
              <Card card={data} onCardClick={onCardClick} key={data._id} onCardLike={handleCardLike} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main