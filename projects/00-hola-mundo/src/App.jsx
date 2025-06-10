// Importa los estilos globales de la app
import './App.css'

// Importa el componente reutilizable que representa cada tarjeta de seguimiento
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// Lista de usuarios simulados (normalmente esto vendría de una API)
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true // Este valor indica si ya lo seguimos o no
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
  return (
    <section className='App'>
      {
        // Recorre la lista de usuarios y genera una tarjeta para cada uno
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName} // Clave única para que React identifique el componente
            userName={userName} // Se pasa como prop al componente
            initialIsFollowing={isFollowing} // Estado inicial del botón seguir
          >
            {name} {/* Se pasa como children: el nombre visible en la tarjeta */}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
