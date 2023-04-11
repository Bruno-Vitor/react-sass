import React from 'react'
import SocialNetworks from './SocialNetworks';
import Avatar from '../img/bc.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Bruno Corrêa" />
      <p className='title'>Front-end Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className='btn'>
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar