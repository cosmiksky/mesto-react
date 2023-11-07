import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({isEditProfilePopupOpen, closeAllPopups}) {
    return (
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <h2 className="popup__title ">Редактировать</h2>
                <input type="text" name="name" className="popup__input popup__input_type_nickname" minLength={2} maxLength={40} required />
                <span className="popup__error title-input-error" />
                <input type="text" name="about" className="popup__input popup__input_type_job" minLength={2} maxLength={200} required />
                <span className="popup__error field-input-error" />
                <button type="submit" className="popup__save-button popup__button-submit">Сохранить</button>
      </PopupWithForm>
    );
};

export default EditProfilePopup;