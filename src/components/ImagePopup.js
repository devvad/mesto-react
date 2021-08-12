function ImagePopup({ card, onClose }) {
	return (
    <div
      className={`popup popup_gallery ${card ? "popup_opened" : ""}`}
      onClick={() => {
        onClose();
      }}
    >
      <div className="popup__preview">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__figcaption">{card.name}</figcaption>
        </figure>
        <button
          type="button"
          className="popup__closed"
          onClick={() => {
            onClose();
          }}
        />
      </div>
    </div>
  );
}

export default ImagePopup