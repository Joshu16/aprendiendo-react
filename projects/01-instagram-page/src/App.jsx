// Importar los hooks y estilos necesarios
import { useState } from 'react'
import './App.css'
import { InstagramFollowCard } from './InstagramFollowCard.jsx'

// Lista de usuarios simulados
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

// Componente principal que renderiza la aplicación
export function App () {
  // Estado que guarda qué usuarios están visibles en pantalla
  // Inicialmente contiene todos los usernames de la lista
  const [visibleUsers, setVisibleUsers] = useState(users.map(user => user.userName))

  // Función que se ejecuta al cerrar (ocultar) una tarjeta
  const handleClose = (userNameToHide) => {
    // Filtra el array y elimina el username que se quiere ocultar
    setVisibleUsers(prevVisibleUsers =>
      prevVisibleUsers.filter(userName => userName !== userNameToHide)
    )
  }

  return (
    <section className='App'>
      {
        // Recorre la lista de usuarios original
        users.map(({ userName, name, isFollowing }) => (
          // Solo renderiza la tarjeta si el usuario está en el array de visibles
          visibleUsers.includes(userName) && (
            <InstagramFollowCard
              key={userName} // Identificador único para React
              userName={userName} // Se pasa como prop al componente hijo
              initialIsFollowing={isFollowing} // Se pasa el valor inicial del botón "seguir"
              onClose={() => handleClose(userName)} // Función que se ejecuta al presionar el botón de cerrar
            >
              {name} {/* Se pasa como children: el nombre visible */}
            </InstagramFollowCard>
          )
        ))
      }
    </section>
  )
}
