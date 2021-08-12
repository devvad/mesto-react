function Card({card, onCardClick}) {
	return (
    <li
      className="card"
      onClick={() => {
        onCardClick(card);
      }}
    >
      <img className="card__image" src={card.link} />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-number">
          <button type="button" className="card__like"></button>
          <span className="card__likes-container">{card.likes.length}</span>
        </div>
        <button type="button" className="card__delete-icon"></button>
      </div>
    </li>
  );
}

export default Card;
