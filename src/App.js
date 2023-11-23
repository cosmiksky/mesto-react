import React from 'react';
import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import EditProfilePopup from './components/EditPopup.js';
import AddPopup from './components/AddPopup.js';
import AvatarPopup from './components/AvatarPopup.js';
import ImagePopup from './components/ImagePopup.js';
import DeletePopup from './components/DeletePopup.js';
import CurrentUserContext from '../src/contexts/CurrentUserContext';
import api from '../src/utils/Api.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
//  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState('')
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setCurrentUser(userInfo)
    })
    .catch(() => {
      console.error('ошибка получения данных')
    })
  }, [])

  React.useEffect(() => {
    api.getAllCards()
    .then((cards) => {
      setCards(cards)
    })
    .catch(() => {
      console.error('Ошибка загрузки карточек')
    })
  }, [])

  function handleUpdateUser({name, about}) {
    api.pathUserInfo(name, about)
    .then((updatedUser) => {
      setCurrentUser(updatedUser);
      closeAllPopups();
   })
    .catch(() => {
      console.error('ошибка обновления данных')
    })
  }

  function handleUpdateAvatar(newAvatar) {
    api.changeAvatar(newAvatar.avatar)
    .then((user) => {
        setCurrentUser({...currentUser, avatar: user.avatar});
        closeAllPopups();
    })
    .catch(() => {
      console.error('ошибка обновления данных')
      });
  }

  function handleAddPlaceSubmit({name, link}) {
    api.createCard(name, link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(() => {
      console.error('ошибка обновления данных')
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(() => {
      console.error('ошибка')
    })
}

  function handleDeleteCard(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
   })
    .catch(() => {
      console.error('error')
    })
  }

  function handleEditProfileClick() {
  //  document.querySelector('#edit-popup').classList.add('popup_is-open')
  setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
  //  document.querySelector('#add-popup').classList.add('popup_is-open')
  setIsAddPlacePopupOpen(true)
  }
  
  function handleEditAvatarClick() {
  //  document.querySelector('#edit-popup-avatar').classList.add('popup_is-open')
  setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
   <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        <Header />
        <Main cards={cards} onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onClose = {closeAllPopups} onCardClick = {handleCardClick} onCardLike = {handleCardLike} onCardDelete = {handleDeleteCard} />
        <Footer />
        <EditProfilePopup isOpen = {isEditProfilePopupOpen} closeAllPopups = {closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPopup isAddPlacePopupOpen = {isAddPlacePopupOpen} closeAllPopups = {closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <AvatarPopup isOpen = {isEditAvatarPopupOpen} closeAllPopups = {closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        {/* <DeletePopup isDeletePopupOpen={isDeletePopupOpen} closeAllPopups = {closeAllPopups}></DeletePopup> */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
   </CurrentUserContext.Provider>
  );
}

export default App;
