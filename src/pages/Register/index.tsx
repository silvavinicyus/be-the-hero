import React from 'react';
import {  } from 'react-dom'
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png'
import './styles.css';

const HomePage = () => {  
  return (
    <div id="content">
      <div className='register-container'>
        <div className="left-content">
          <img src={logoImg} alt="logo" />

          <h2>Cadastro</h2>

          <p className='register-description'>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link to="/" className="logon-back">
            <FiArrowLeft color='#E02041' size={16}/>

            <p>Voltar para o logon</p>
          </Link>
        </div>

        <div className='form-container'>
          <form onSubmit={() => {}}>
            <input type="text" placeholder='Nome da ONG'/>
            <input type="text" placeholder='E-mail'/>
            <input type="text" placeholder='E-mail'/>
            <div className='city-uf'>
              <input className='city' type="text" placeholder='Cidade'/>
              <input className='uf' type="text" placeholder='UF'/>
            </div>

            <button type='submit' className='cadastrar'>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 

export default HomePage;