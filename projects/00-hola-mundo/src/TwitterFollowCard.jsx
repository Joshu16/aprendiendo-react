// Importa el hook useState desde React
import { useState } from 'react'

// Define un componente funcional llamado TwitterFollowCard
// Recibe tres props:
// - children: contenido entre las etiquetas <TwitterFollowCard>...</TwitterFollowCard>
// - userName: el nombre de usuario (se usará para la imagen y el @)
// - initialIsFollowing: estado inicial que indica si ya lo estamos siguiendo
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  // useState permite crear un estado interno en el componente
  // isFollowing almacena si el usuario está siendo seguido
  // setIsFollowing permite cambiar ese estado
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // Imprime en consola cada vez que el componente se renderiza (útil para debug)
  console.log('[TwitterFollowCard] render with userName: ', userName)

  // Define el texto del botón dependiendo de si seguimos o no al usuario
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  // Cambia las clases del botón según el estado
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // Esta función se ejecuta al hacer clic en el botón
  // Cambia el estado a lo contrario (true ↔ false)
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  // Renderiza la tarjeta
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`} // Imagen generada automáticamente desde el username
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong> {/* Muestra el nombre visible del usuario */}
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        {/* Botón que cambia según el estado */}
        <button className={buttonClassName} onClick={handleClick}>
          {/* Texto que se muestra normalmente */}
          <span className='tw-followCard-text'>{text}</span>

          {/* Texto alternativo que aparece al hacer hover si ya seguimos */}
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
