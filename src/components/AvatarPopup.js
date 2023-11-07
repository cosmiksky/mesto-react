import PopupWithForm from './PopupWithForm.js';

function AvatarPopup({isEditAvatarPopupOpen, closeAllPopups}) {
    return (
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} titleText={'Обновить аватар'} buttonText={'Создать'} name={'avatar'}>
              <input id="avatar-input" type="text" name="avatar" className="popup__input popup__input_type_avatar" minLength={2} placeholder="Ссылка на аватар" required />
              <span className="popup__error avatar-input-error" />
      </PopupWithForm>
    );
};

export default AvatarPopup;