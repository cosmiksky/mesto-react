import PopupWithForm from './PopupWithForm.js';

function AvatarPopup({isEditAvatarPopupOpen, closeAllPopups}) {
    return (
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <h2 className="popup__title">Обновить аватар</h2>
              <input id="avatar-input" type="text" name="avatar" className="popup__input popup__input_type_avatar" minLength={2} placeholder="Ссылка на аватар" required />
              <span className="popup__error avatar-input-error" />
              <button type="submit" className="popup__save-button popup__save-button_add popup__save-button_disabled">Создать</button>
      </PopupWithForm>
    );
};

export default AvatarPopup;