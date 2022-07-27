import React from 'react'
import './App.css';
import Typewriter from "typewriter-effect";
import Cursor from 'react-cursor-follow'
 


function App() {
  return (
    <section className='body'>
   <Cursor
    pulse
    color="white"
    duration={0}
    size={45}
    hollow
    ></Cursor>
<div className='home'>
  <p  className='title'>Welcome to my Website</p>
  <p  className='title'><Typewriter
  options={{
    strings: [ 'I am dayvison da Paz', 'A Front-end Developer'],
    autoStart: true,
   
    loop: true,
  }}
/></p>

<h1>  About me</h1>

<img width='3%'  src='https://cdn-icons-png.flaticon.com/512/329/329340.png' alt='arrow donw'/>
</div> 

<section id='desc' className='desc'>

<div className='card'>
 <p>I am a Student of Analisy And Developer of Systems in Unicsul </p> <span ><img width='15%' alt='logo unicsul'  src='https://www.clubedebolsas.com.br/uploads/instituicao/logo/f4acc53639930adafa6a42267180e41c.png'/></span>

</div>
<div className='card'>
 <p>I am a Frontend Developer</p> <span ><img width='5%' alt='frontend logo' src='https://cdn.colab55.com/images/1596289397/studio/1799/photo.png'/></span>
</div>
<div className='card'>
 <p>I am Work with: Javascript, Html and Css, React Js and Node Js</p> <span className='more'><img width='5%' alt='javascript' src='https://bognarjunior.files.wordpress.com/2018/01/1crcyaithv7aiqh1z93v99q.png'/><img width='5%' alt='css' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=360'/> <img width='5%' alt='html' src='https://logospng.org/download/css-3/logo-css-3-2048.png'/> <img width='10%' height='10%' alt='react' src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' /> <img alt='node' width='5%' src='https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png'/>  </span>
 

</div>
<h1 id='projects' className='title'>Projects</h1>

<div className='project'>
 <a href='https://codepen.io/dayvison45' ><img className='link' width='10%' alt='frontend logo' src='https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg'/> </a> 
</div>
<div className='project'>
 <a href='https://github.com/Dayvison45' > <img className='link' width='10%' alt='frontend logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a> 
</div>
<div className='project'>
 <a href='https://manuscrito.herokuapp.com/admin/login' ><img width='10%' className='link' alt='frontend logo' src='https://logopond.com/logos/6382faa6de8ac912a1c6fb2b66ff8e21.png'/> </a> 
</div>

<h1 id='projects' className='title'>Contact me</h1>

<div className='project'>
 <a href='https://www.linkedin.com/in/dayvison-da-paz/' ><img width='15%' className='link' alt='frontend logo' src='https://marcas-logos.net/wp-content/uploads/2020/01/LinkedIn-Logo-1.png'/> </a> 
</div>
<div className='project'>
 <a href='https://www.instagram.com/dayvison_da_paz/' ><img width='5%' className='link' alt='frontend logo' src='https://www.ifmg.edu.br/portal/ensino/bibliotecas/Instagran.jpg/@@images/image.png'/> </a> 
</div>
</section>
 
<img width='100%' src='https://onedrive.live.com/?authkey=%21AB036t80ye4xp%2Dg&cid=CCDB940572A31808&id=CCDB940572A31808%21325&parId=root&o=OneUp' alt='nada carregou'/>

    </section>
    
  );
}

export default App;
