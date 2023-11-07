function PopupWithForm({isOpen, children, onClose, titleText, buttonText, name}) {
  const popupOpen = isOpen ? 'popup_is-open' : '';
  return (
    <div className={`popup ${popupOpen}`}> 
      <div className="popup__content">
            <form name={`form-${name}`} className="popup__form" noValidate>
            <h2 className="popup__title">{titleText}</h2>
              {children}
            <button type="submit" className="popup__save-button popup__save-button_add popup__save-button_disabled">{buttonText}</button>
            </form>
            <button id="close-popup-button" type="button" className="popup__close-button" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;