function Main({ onEditAvatar, onEditProfile, onAddPlace}) {
	return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <button type="button" onClick={onEditAvatar} className="profile__overlay" />
        </div>
        <div className="profile__user">
          <div className="profile__info">
            <h1 className="profile__title" />
            <button type="button" onClick={onEditProfile} className="profile__edit-button" />
          </div>
          <p className="profile__subtitle" />
        </div>
        <button type="button" onClick={onAddPlace} className="profile__add-button" />
      </section>
      <section>
        <ul className="cards"></ul>
      </section>
    </main>
  );
}

export default Main