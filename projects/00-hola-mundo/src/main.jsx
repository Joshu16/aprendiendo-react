// Importa React. Aunque con versiones modernas de React ya no siempre es necesario,
// sigue siendo buena práctica cuando usas JSX (HTML dentro de JS).
import React from 'react'

// Importa el método `createRoot` desde la librería de React DOM moderna.
// Esto permite usar el nuevo sistema de renderizado concurrente (desde React 18).
import ReactDOM from 'react-dom/client'

// Importa el componente principal de tu aplicación.
// Este archivo debe exportar un componente llamado `App`.
import { App } from './App.jsx'

// Importa los estilos globales del archivo index.css.
// Aquí puedes tener estilos base o globales para toda la app.
import './index.css'

// Crea la raíz de la aplicación dentro del elemento con id "root" en tu index.html.
// Es decir, conecta React con el HTML.
const root = ReactDOM.createRoot(document.getElementById('root'))

// Renderiza el componente App dentro del elemento raíz.
// Todo lo que devuelva App (HTML/JSX) se verá en pantalla.
root.render(
  <App />
)
