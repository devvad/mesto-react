function PopupWithForm (props) {
	return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__name">{props.title}</h2>
				<form className="popup__form" name={props.name} noValidate>
					{props.children}
				</form>
        <button type="button" className="popup__closed" />
      </div>
    </div>
  );
}

export default PopupWithForm