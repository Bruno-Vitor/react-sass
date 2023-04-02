import React from 'react'
import Avatar from '../img/bc.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <p>imagem</p>
      <p className='title'>Front-end Developer</p>
      <p>redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className='btn'>
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar