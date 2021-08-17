import PopupWithForm from "./PopupWithForm";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup ({isOpen, onClose, onUpdateUser})  {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    })
  }

	return (
    <PopupWithForm
      title="Редактирование профиля"
      name="profile"
      submitText="Сохранить"
			onSubmit = {handleSubmit}
      isOpen={isOpen}
  		onClose={onClose}
    >
      <input
        onChange={onChangeName}
				value={name || ""}
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
				onChange={onChangeDescription}
				value={description || ""}
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
  );
}

export default EditProfilePopup