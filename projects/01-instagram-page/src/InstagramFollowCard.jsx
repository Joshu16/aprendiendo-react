import { useState } from "react";

export function InstagramFollowCard({
  children,
  userName,
  initialIsFollowing,
  onClose
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Following" : "Follow";

  const buttonClassName = isFollowing
    ? "insta-followCard-button is-following"
    : "insta-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Renderiza la tarjeta
  return (
    <article className="insta-followCard">
  <div onClick={onClose} className='insta-followCard-close'>×</div>
      <header className="insta-followCard-header">
        <img
          className="insta-followCard-avatar"
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`} // Imagen generada automáticamente desde el username
        />
        <div className="insta-followCard-info">
          <strong>{children}</strong>{" "}
          {/* Muestra el nombre visible del usuario */}
          <span className="insta-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      {/* Botón que cambia según el estado */}
      <button className={buttonClassName} onClick={handleClick}>
        {/* Texto que se muestra normalmente */}
        <span className="insta-followCard-text">{text}</span>

        {/* Texto alternativo que aparece al hacer hover si ya seguimos */}
        <span className="insta-followCard-stopFollow">Dejar de seguir</span>
      </button>
    </article>
  );
}
