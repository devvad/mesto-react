function Main() {
  function handleEditAvatarClick() {
		document.querySelector(".popup_avatar").classList.add("popup_opened");
	}

	function handleEditProfileClick() {
		document.querySelector(".profile-popup").classList.add("popup_opened");
	}

	function handleAddPlaceClick() {
		document.querySelector(".popup-type-place").classList.add("popup_opened");
	}

	return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <button type="button" onClick={handleEditAvatarClick} className="profile__overlay" />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__title" />
            <button type="button" onClick={handleEditProfileClick} className="profile__edit-button" />
          </div>
          <p className="profile__subtitle" />
        </div>
        <button type="button" onClick={handleAddPlaceClick} className="profile__add-button" />
      </section>
      <section>
        <ul className="cards"></ul>
      </section>
    </main>
  );
}

export default Main