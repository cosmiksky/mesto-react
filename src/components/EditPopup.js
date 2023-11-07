import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({isEditProfilePopupOpen, closeAllPopups}) {
    return (
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} titleText={'Редактировать'} buttonText={'Сохранить'} name={'edit'}>
                <input type="text" name="name" className="popup__input popup__input_type_nickname" minLength={2} maxLength={40} required />
                <span className="popup__error title-input-error" />
                <input type="text" name="about" className="popup__input popup__input_type_job" minLength={2} maxLength={200} required />
                <span className="popup__error field-input-error" />
      </PopupWithForm>
    );
};

export default EditProfilePopup;