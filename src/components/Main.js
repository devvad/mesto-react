import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.error(err);
      });

    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            type="button"
            onClick={onEditAvatar}
            className="profile__overlay"
          />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            return <Card card={data} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main