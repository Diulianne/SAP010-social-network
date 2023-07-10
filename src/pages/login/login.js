import './login.css';
import { login, addonAuthStateChanged } from '../serviceFirebase/firebaseAuth';
import CBD from '../imagens/CBDCNNCT-IMG/logodesktopsemsombra.png';
import google from '../imagens/google.png';

// import facebook from '../imagens/facebook.png';

export default () => {
  const containerLogin = document.createElement('section');
  containerLogin.classList.add('container-login');

  const templateLogin = `
  <img class="img-CBD1" src=${CBD} alt="logo app">
  <div class="container">
  <form class="form-entrar">
  <input class="input centro" type="email" name="email" id="email" placeholder="E-MAIL" >
  <span id="email-alert" class="input-error"></span>
  <input class="input centro" type="password" name="senha" id="senha" placeholder="SENHA" >
  <button type="submit" id="btnEntrar" class="entrar centro" >ENTRAR</button>
  <p class="loginErro" id="erro"></p>
  </form>
  <div class="ou-box">
  <span class="ou">OU</span>
  <div class="login-redes">
  <img id="entrarGoogle"class="img-google" src=${google} alt="logo Google">
 
  </div>
  <span id="pass-alert" class="input-error"></span>
  <span id="user-alert" class="input-error"></span>
  <span class="texto1 centro">Ainda não tem conta?</span>
  <nav>
  <a href="#cadastro" id="cadastro" class="texto1 centro">Criar nova conta</a>
  </nav>
  
  </div>
  </div>`;

  // <img class="img-facebook" src=${facebook} alt="logo Facebook">
  /* <button id="btnEntrar" type="submit" class="entrar centro">
  ENTRAR
</button>; */
  // <a id="btnEntrar" class="entrar centro" href="/#feed">ENTRAR</a>

  containerLogin.innerHTML = templateLogin;

  const btnLogin = containerLogin.querySelector('#btnEntrar');
  const email = containerLogin.querySelector('#email');
  const senha = containerLogin.querySelector('#senha');
  const mensagemErroLogin = containerLogin.querySelector('#loginErro');

  // Adicionar evento de clique no botão para validar os inputs email e senha
  btnLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    if (email.value === '') {
      mensagemErroLogin.innerHTML = 'Preencha o campo email!';
      return;
    }
    if (senha.value === '') {
      mensagemErroLogin.innerHTML = 'Preencha o campo senha!';
      return;
    }

    login(email.value, senha.value)
      .then(() => {
        addonAuthStateChanged((user) => {
          if (user) {
            window.location.hash = '#feed';
          } else {
            console.log('Não foi possível realizar o login');
          }
        });
      })
      .catch((error) => {
        console.log('Erro ao fazer o login:', error);
      });
  });
  return containerLogin;
};

// const buttonLogin = containerLogin.querySelector("#btnEntrar");
// buttonLogin.addEventListener("click", () => {
//   const email = containerLogin.querySelector("#email");
//   const senha = containerLogin.querySelector("#senha");
//   login(email.value, senha.value)
//     .then(() => {
//       window.location.hash = "#feed";
//     })

//     .catch((error) => {

//       if (error.message === "Firebase: Error (auth/user-not-found).") {
//         alert("Usuário não encontrado");
//       } else if (error.message === "Firebase: Error (auth/wrong-password).") {
//         alert("Senha incorreta");
//       }
//     });
// });

// const btnEntrar = containerLogin.querySelector("#btnEntrar");
// window.onload = function () {
//   btnEntrar.addEventListener("click", () => {
//     const email = containerLogin.querySelector("#email");
//     const senha = containerLogin.querySelector("#senha");
//     login(email.value, senha.value)
//       .then(() => {
//         window.location.hash = "#feed";
//       })
//       .catch((error) => {
//         if (error.message === "Firebase: Error (auth/user-not-found).") {
//           alert("Usuário não encontrado.");
//         } else if (
//           error.message === "Firebase: Error (auth/wrong-password)."
//         ) {
//           alert("Senha incorreta");
//         }
//         // console.log("");
//       });
// });

// const entrarGoogle = document.getElementById("entrarGoogle");
/* evento para entrar com a conta google */
// entrarGoogle.addEventListener("click", (e) => {
//   const entrar = e.target.value;
//   console.log(entrar);
// });

// <span id="cadastro" class="texto1 centro">Criar nova conta</span>
