import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
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
              <Card card={data} onCardClick={onCardClick} key={data._id} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main