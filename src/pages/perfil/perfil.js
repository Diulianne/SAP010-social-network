import './perfil.css';
import loguinho from '../imagens/CBDCNNCT-IMG/logologuinhamobilefeed.png';
import perfil from '../imagens/icones/perfil.png';
import novoPost from '../imagens/icones/novoPost.png';
import sair from '../imagens/icones/sair.png';
import voltar from '../imagens/icones/voltar.png';
import imgPerfil from '../imagens/icones/imgPerfil.png';
import { auth } from '../serviceFirebase/firebaseAuth';

export default async () => {
  const containerPerfil = document.createElement('section');
  containerPerfil.classList.add('container-perfil');
  const dados = await auth.currentUser;
  console.log(dados);

  const templatePerfil = `
 <header class="inicio">
  <nav class="icones-header">
 <a href="#feed" class="img-voltar" id="iconeVoltar"><img src=${voltar} alt="icone voltar" title="Ícone para Voltar"></a>
  <a href="#infopage" id="iconeLoguinho">
  <figure><img id="ir-infopage1'" class="img-loguinhoP" src=${loguinho} alt="logo app" title="Logo CBD Connection"></figure>
  </a>  
  </nav>
  </header>
  <section class= "dados-usuario">
  <h1> EM CONSTRUÇÃO </H1>
  <figure><img id="perfil" class="img-perfil" src=${imgPerfil} alt="Imagem de Perfil" title="Sua foto de Perfil"></figure>
  <p> MEU PERFIL </p>
  <p> SOU PACIENTE </p>
  </section>
  <div>
  <p class="input centro margin"> ${dados.displayName} </p>
  <p class="input centro margin"> ${dados.email} </p>
  </div>
  

   <footer>
  <a href="#perfil" id="iconePerfil"><img class="iconesFooter" src=${perfil} alt="icone perfil" title="Ícone Perfil"></a>
  <a href="#novoPost" id="iconeNovoPost"><img class="iconesFooter" src=${novoPost} alt="icone criar nova postagem" title="Ícone para Nova Postagem"></a>
  <a href="#home" id="iconeSair"><img class="iconesFooter" src=${sair} alt="icone sair" title="Ícone para Deslogar"></a>
  </footer>

  `;

  containerPerfil.innerHTML = templatePerfil;

  return containerPerfil;
};
