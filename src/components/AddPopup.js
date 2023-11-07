import PopupWithForm from './PopupWithForm.js';

function AddPopup({isAddPlacePopupOpen, closeAllPopups}) {
    return (
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} titleText={'Новое место'} buttonText={'Создать'} name={'add'}>
              <input id="name-input" type="text" name="name" className="popup__input popup__input_type_title-name" placeholder="Название" minLength={2} maxLength={30} required />
              <span className="popup__error name-input-error" />
              <input id="link-input" type="url" name="link" className="popup__input popup__input_type_photo-link" placeholder="Ссылка на картинку" required />
              <span className="popup__error link-input-error" />
      </PopupWithForm>
    );
};

export default AddPopup;