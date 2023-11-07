import React from 'react';
import avatar from '../images/image_profile.jpg';
import api from '../utils/Api.js';
import Card from '../components/Card.js';

function Main ({onAddPlace, onEditAvatar, onEditProfile, onCardClick}) {

  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    })
    .catch(() => {
       console.error('Ошибка получения данных')
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

  return(
    <main className="content">
        <section className="profile">
            <div className="profile__column">
              <div className="profile__overlay" onClick={onEditAvatar}>
                <img className="profile__image" src={userAvatar} alt="Аватарка" />
              </div>
              <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <button id="open-popup-editButton" onClick={onEditProfile} className="profile__edit-button" type="button" />
                <p className="profile__subtitle">{userDescription}</p>
              </div>
            </div>
            <button id="open-popup-addButton" onClick={onAddPlace} type="button" className="profile__add-button" />
          </section>
          <div className="elements">
            {cards.map((card, id) => (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
              )
            )}
        </div>
    </main>
    )
}
export default Main;