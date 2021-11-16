import React, { useState } from "react";
import "./Login.css";
import facebookLogin from "/facebookLogin.png";
import googleLogin from "/googleLogin.png";
import img from "/img.png";
import axios from "axios";
import logoNegativo from "/LogoNegativo.png";
import logoSA from "/logoSA.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // regex para validar email
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      setError("Email is required");
    } else if (password === "") {
      setError("Password is required");
    }
    if (re.test(email) === false) {
      setError("Email inválido");
    }
    if (password.length < 6) {
      setError("Senha inválida");
    }
    if (re.test(email) === true && password.length >= 6) {
      setError("");
      const response = await axios.post(
        "https://api-flordeemprendedora.start-7.com/api/auth/login/,{username:email,password:password}"
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

      }
    }
  };

  return (
    <div class='login-container'>
      <div class='login-area'>
        <div className='rectangle-blue mb-2'>&nbsp;</div>

        <div className='title-text mb-3'>Bem-vindo de volta!</div>
        <div className=' text1 text-wrap w-75 mb-5'>
          Estamos felizes que esteja de volta para retomar seus projetos no
          Projetolist.
        </div>
        <form>
          <div className='form-group pb-3'>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group pb-3'>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='text-end  pb-4'>
            <a href='/' className='light-link'>
              Esqueceu sua senha?
            </a>
          </div>
          <div className='d-grid pb-4'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-1 rounded-pill'
            >
              Entrar
            </button>
            {/* mostrar el error */}
            {error && <p className='error'>{error}</p>}
          </div>
          <p className='text-center pb-3 text2'>OU ENTRE COM</p>
          {/*boton de faceboo y google */}
          <div className='text-center pb-3'>
            <button type='submit' className=' img-btn '>
              <img src={facebookLogin} alt='facebook' />
            </button>
            <button type='submit' className=' img-btn '>
              <img src={googleLogin} alt='google' />
            </button>
          </div>
          <p className='text-center text3'>
            Ainda não tem uma conta? <b>Cadastre-se</b>
          </p>
        </form>
      </div>

      {/* RECTNAGLE AREAA */}
      <div class='rectangle-area'>
        <div className='rectangle-top'>
          <img className='logo-negativo' src={logoNegativo} alt='logo' />
          <a href='/' className='negative-link'>
            Ajuda
          </a>
        </div>
        <div className=' text-end p-5 mx-5 '>
          <img className='img-default' src={img} alt='img' />
        </div>
        <div className='rectangle-bot'>
          <span className='span1'>© 2021, Projetolist</span>
          <span className='span2'>
            UI/UX Design and Front-end by:{" "}
            <img width='32' height='23' src={logoSA} alt='SA' />
          </span>
        </div>
      </div>
    </div>
  );
};
