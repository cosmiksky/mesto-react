function PopupWithForm({isOpen, children, onClose}) {
  const popupOpen = isOpen ? 'popup_is-open' : '';
  return (
    <div className={`popup ${popupOpen}`}> 
      <div className="popup__content">
            <form name="form" className="popup__form" noValidate>
              {children}
            </form>
            <button id="close-popup-button" type="button" className="popup__close-button" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;