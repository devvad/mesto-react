function Card({ link, name, likes }) {
	return (
    <li className="card">
      <img className="card__image" src={link} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-number">
          <button type="button" className="card__like"></button>
          <span className="card__likes-container">{likes.length}</span>
        </div>
        <button type="button" className="card__delete-icon"></button>
      </div>
    </li>
  );
}

export default Card;
