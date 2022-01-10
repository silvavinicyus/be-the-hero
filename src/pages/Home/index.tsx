import React from "react";
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logo.png';
import {FiLogIn} from 'react-icons/fi';
import imgPessoas from '../../assets/pessoas.png';
import './styles.css';

const Home = () => {
  return(
    <div className="content">
      <div className="left-content">
        <img src={imgLogo} alt="logo" />

        <div className="logon">
          <h2>
            Faça seu logon
          </h2>        

          <form onSubmit={() => {}}>
            <input type="text" placeholder="Sua ID"/>

            <button type="submit">Entrar</button>
          </form>

          <Link className = "register" to="/register">
              <FiLogIn  color='#E02041' size={16}/>
              <p>
                Não tenho cadastro
              </p>
          </Link>
        </div>
      </div>

      <div className="right-content">
        <img src={imgPessoas} alt="" />
      </div>
    </div>
  );
} 
export default Home;