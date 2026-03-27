import React from 'react'
import FloatingLines from './component/FloatingLines';
import Header from './component/header_section/Header';
import Hero from './component/hero_section/hero';
import Project from './component/project_section/project';


const App = () => {
  return (
    <>

      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Hero />
      </div>
      
      <Project />

    </>
  )
}

export default App