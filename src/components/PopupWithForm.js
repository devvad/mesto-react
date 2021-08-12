function PopupWithForm ({isOpen, name, title, children, onClose}) {
	return (
    <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`} onClick={onClose}>
      <div className="popup__container">
        <h2 className="popup__name">{title}</h2>
				<form className="popup__form" name={name} noValidate>
					{children}
				</form>
        <button type="button" className="popup__closed" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm