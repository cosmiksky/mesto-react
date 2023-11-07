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

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
//  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState(null);

  // function handleDeleteClick() {
  //   setIsDeletePopupOpen(true)
  // }

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
    <div className="page">
        <Header />
        <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onClose = {closeAllPopups} onCardClick = {handleCardClick} />
        <Footer />
        <EditProfilePopup isEditProfilePopupOpen = {isEditProfilePopupOpen} closeAllPopups = {closeAllPopups} />
        <AddPopup isAddPlacePopupOpen = {isAddPlacePopupOpen} closeAllPopups = {closeAllPopups} />
        <AvatarPopup isEditAvatarPopupOpen = {isEditAvatarPopupOpen} closeAllPopups = {closeAllPopups} />
        {/* <DeletePopup isDeletePopupOpen={isDeletePopupOpen} closeAllPopups = {closeAllPopups}></DeletePopup> */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
