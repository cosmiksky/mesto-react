

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card)
    }

    return (
        <div className="elements__list">
              <div className="element">
                <img className="element__mask-group" style={{ backgroundImage: `url(${card.link})` }} src={card.link} alt={card.name} onClick={handleClick} /> 
                <button className="element__trash" type="button" />
                <div className="element__container">
                  <h2 className="element__title">{card.name}</h2>
                  <div className="element__group-like">
                    <button className="element__group" type="button" />
                    <p className="element__like">{card.likes.length}</p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Card;