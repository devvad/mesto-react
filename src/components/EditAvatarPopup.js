import PopupWithForm from "./PopupWithForm"
import {useRef} from "react"

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

const avaRef = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  onUpdateAvatar({
    avatar: avaRef.current.value,
  })
  e.target.reset()
}

	return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      submitText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <input
        type="url"
        className="popup__input"
        name="avatar"
        id="input-popup-avatar"
        defaultValue
        placeholder="Ссылка на аватар"
        required
      />
      <span className="input-popup-avatar-error popup__error-message" />
    </PopupWithForm>
  );
}