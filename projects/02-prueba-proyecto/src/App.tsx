import './App.css'
import { Landing } from './header.tsx'
import { Intro } from './Intro.tsx'
import { Gallery } from './Gallery.tsx'

export function App() {
  return (
    <main> {/* En lugar de <body>, usa <main> como contenedor principal */}
    <Landing/>
    <Intro/>
    <Gallery/>
      

      
    </main>
  )
}

export default App
