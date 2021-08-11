function ImagePopup() {
	return (
    <div className="popup popup_gallery">
      <div className="popup__preview">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="Фотография места" />
          <figcaption className="popup__figcaption" />
        </figure>
        <button type="button" className="popup__closed" />
      </div>
    </div>
  );
}

export default ImagePopup