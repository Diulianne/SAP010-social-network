import './infopage.css';
import CBD from '../imagens/CBDCNNCT-IMG/logodesktopsemsombra.png';

import githubicon from '../imagens/icones/githubicon.png';
import linkedin from '../imagens/icones/linkedin.png';

export default () => {
  const containerInfopage = document.createElement('section');
  containerInfopage.classList.add('container-Infopage');

  const templateInfopage = `
    <p> Terceiro projeto desenvolvido para o Bootcamp Laboratoria - Turma SAP010 com o objetivo de por em
     prática e aferir as habilidades das alunas: </p> <br>
     
     <p>Camila Gonçalves:</p>
     <a href="https://github.com/CamilaVerso/" target="_blank">
     <figure>
     <img id="githubCamila" class="linkedin" src=${githubicon} alt="logo para o perfil do GitHub da desenvolvedora Camila Gonçalves" title="GitHub Camila Gonçalves">
     </figure>
     </a>
     <a href="https://www.linkedin.com/in/camilanpgoncalves/" target="_blank">
     <figure>
     <img id="linkedinCamila" class="linkedin" src=${linkedin} alt="logo para o perfil do Linkedin da desenvolvedora Camila Gonçalves" title="Linkedin Camila Gonçalves">
     </figure>
     </a>
    <br>
    
    
     <p>Diulianne Oliveira ${githubicon} ${linkedin}<br>
     Marianna Esteves  ${githubicon} ${linkedin}<br>
     <br>
     Entre em contato conosco nas redes sociais acima. 
     <br>
     Para mais informações sobre o tema:</p> <br>
     <a href="https://www.msdmanuals.com/pt-br/casa/assuntos-especiais/suplementos-alimentares-e-vitaminas/canabidiol-cbd" target="_blank" >Manual de Saúde para Família MSD</a> <br>
     <a href="https://abraceesperanca.org.br" target="_blank"> Associação Brasileira de Apoio Cannabis Esperança </a>
     <a href ="https://www.gov.br/pt-br/servicos/solicitar-autorizacao-para-importacao-excepcional-de-produtos-a-base-de-canabidiol" target="_blank"> Manual de importação ANVISA (Governo Brasileiro)</a>
     <img class="img-CBD1" src=${CBD} alt="logo app"> 

     `;

  containerInfopage.innerHTML = templateInfopage;

  return containerInfopage;
};