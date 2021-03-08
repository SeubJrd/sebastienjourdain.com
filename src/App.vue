<template>
  <div id="app">

  <header>

  <router-link to="/#"><img class="logo" src="static/logo_portfolio2.png" alt="logo du site"></router-link>
    <div class="mobile nav-toggle">
      <div class="nav-toggle-bar"></div>
    </div>
    <nav class="mobile menu">
      <ul>
        <li><router-link to="/#">Accueil</router-link></li>
        <li><router-link to="about">A propos</router-link></li>
        <li><router-link to="portfolio">Portfolio</router-link></li>
        <li><router-link to="contact.html">Contact</router-link></li>
      </ul>
    </nav>
    <nav class="bureau">
      <router-link to="about">A propos</router-link>
      <router-link to="portfolio">Portfolio</router-link>
      <a href="mailto:contact@sebastienjourdain.com">Contact</a>
    </nav>

    </header>

    <script type="application/javascript" defer src="https://www.sebastienjourdain.com/js/script.js"></script>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
    font-family: 'Ubuntu', sans-serif;
    background: #171719;
    scrollbar-color: orange;
  }

  @media screen and (min-width: 800px) {

  /* Base */
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  body::-webkit-scrollbar {
      background-color: orange;
      width: 10px;
  }
  body::-webkit-scrollbar-track {
      background-color: #171719;
  }
  body::-webkit-scrollbar-thumb {
      background-color: orange;
      border-radius: 16px;
      border: none;
  }
  body::-webkit-scrollbar-button {
      display:none;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: regular 400;
    background: #171719;
    position: relative;
    padding: 1vw;
    scrollbar-color: orange;
  }

  #flat_accueil {

    width: 25%;
    margin-left: 57%;
    margin-top: 5%;
}

.logotop{
    width: 30%;
    margin-left: 35%;
    margin-top: 14%;
}

.logoaca{
  width: 30%;
    margin-left: 48%;
    margin-top: 6%;
}

.logoS1{
  width: 20%;
    margin-left: 73%;
    margin-top: 5%;
}

  .mobile{
    visibility: hidden;
    width: 0%;
  }

  .logo{
    width: 7%;
    margin-left: 8.5%;
    margin-top: 2%;
  }

  footer .logo{
    position: initial;
    margin-left: 47.5%;
    width: 7%;
  }

  .Accueil h1, h2, h3 {
    position: absolute;
    font-family: 'Acme', sans-serif;
    line-height: 1.3;
    left: 10%;
    top: 5%;
  }

  .Accueil h1 {
    font-size: 3vw;
    margin-top: 10%;
    font-family: 'Acme', sans-serif;
  }

  .Accueil h2 {
    font-size: 3vw;
    margin-top: 15%;
    font-family: 'Acme', sans-serif;
  }

  .Accueil h3 {
    font-size: 3vw;
    margin-top: 20%;
    font-family: 'Acme', sans-serif;
  }

  nav a{
    font-family: 'Acme', regular;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.25vw;
    margin-left: 10%;
    color: white;
    transition: 0.3s ease;
    border-top: 0.2vw solid #171719;
    border-bottom: 0.2vw solid #171719;
    padding: 20px 0;
  }

  nav a:hover{
    text-decoration: none;
    color: white;
    border-top: 0.2vw solid orange;
    border-bottom: 0.2vw solid orange;
    padding: 6px 0;
  }

  nav{
    width: 32%;
    margin-left: 65%;
    position: absolute;
    margin-top: -4%;
  }

  .border{
    margin-top: 7%;
  }

  .About h1{
    font-family: 'Acme', sans-serif;
    font-size: 3vw;
    color: white;
    margin-left: 10%;
  }

  .About p{
    font-size: 1vw;
    color: white;
    width: 45%;
    margin-left: 10%;
    padding-left: initial;
  }

  .About a{
    text-decoration: none;
    color: orange;
    cursor: pointer;
  }

  .About h4{
    font-size: 1.25vw;
    color: orange;
    margin-left: 10%;
    font-family: 'Acme', sans-serif;
  }

  .About i{
    font-size: 2vw;
    color: orange;
    margin-left: 10%;
    margin-top: 3%;
  }

  .portrait{
    width: 40%;
    position: absolute;
    margin-left: 55%;
    margin-top: 5%;
  }

  .classes{
    margin-left: 0;
    width: 15%;
    display: inline-block;
  }

  .portfolio h1{
    font-family: 'Acme', sans-serif;
    font-size: 3vw;
    color: white;
    margin-left: 10%;
  }

  .portfolio p{
    font-size: 1vw;
    color: white;
    width: 75%;
    margin-left: 10%;
    padding-left: initial;
  }

  .contact h1{
    font-family: 'Acme', sans-serif;
    font-size: 3vw;
    color: white;
    margin-left: 10%;
  }

  .contact p{
    font-size: 1vw;
    color: white;
    width: 75%;
    margin-left: 10%;
    padding-left: initial;
  }

  input{
    padding: 0.5%;
    background: transparent;
    border: 0.15vw solid white;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1vw;
    border-radius: 0.2vw;
    width: 45%;
    margin-right: 40%;
    margin-left: 10%;
    margin-top: 3%;
  }

  textarea{
    padding: 0.5%;
    background: transparent;
    border: 0.15vw solid white;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1vw;
    border-radius: 0.2vw;
    width: 45%;
    margin-left: 10%;
    margin-right: 40%;
    margin-top: 3%;
  }

  button{
    padding: 0.2%;
    background: transparent;
    border: 0.15vw solid white;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1vw;
    border-radius: 0.2vw;
    width: 15%;
    margin-left: 10%;
    margin-top: 3%;
    cursor: pointer;
    margin-bottom: 5%;
  }

  .index footer{
    margin-top: 115%;
  }

  footer p{
    font-size: 1vw;
    color: white;
    text-align: center;
  }

   footer a{
     text-decoration: none;
     color: orange;
   }

   .réseau{
     margin-left: 2%;
     font-size: 1vw;
   }

   .réseau:first-of-type{
     margin-left: 45%;
   }

   footer p:first-of-type{
     font-size: 1.1vw;
     color: white;
     margin-left: 45%;
     font-family: 'Acme', sans-serif;
     border-bottom: 0.2vw solid orange;
     width: 10%;
   }

   /*Mentions légales*/

   #mentions .Accueil h1{
     font-size: 5vw;
     margin-top: 16%;
   }

  /* Masques */
  .fo-mask {
    display: inline-block;
    overflow: hidden;
    clear: both;
  }

  .fo-mask span {
    color: transparent;
    -webkit-animation: show 0s forwards 0.4s;
    animation: show 0s forwards 0.4s;
  }

  .fo-mask:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: orange;
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
    -webkit-animation: left-to-right 1s cubic-bezier(.17,.67,.83,.67);
    animation: left-to-right 1s cubic-bezier(.17,.67,.83,.67);
  }

  /* Animation de dévoilement */
  @-webkit-keyframes show {
    0% {
      color: transparent;
    }
    100% {
      color: white;
    }
  }
  @keyframes show {
    0% {
      color: transparent;
    }
    100% {
      color: white;
    }
  }

  /* Animation gauche/droite */
  @-webkit-keyframes left-to-right {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(110%, 0, 0);
    }
  }
  @keyframes left-to-right {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(110%, 0, 0);
    }
  }

  /* Délais */

  .delay-100.fo-mask span {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }

  .delay-100.fo-mask:after {
    -webkit-animation-delay: 1.1s;
    animation-delay: 1.1s;
  }
  .delay-200.fo-mask span {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  .delay-200.fo-mask:after {
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
  }
  .delay-300.fo-mask span {
    -webkit-animation-delay: 2.5s;
    animation-delay: 2.5s;
  }

  .delay-300.fo-mask:after {
    -webkit-animation-delay: 2.1s;
    animation-delay: 2.1s;
  }

  #topspot .sourisScroll{
    margin-top: 14%;
  }

  #acadenum .sourisScroll{
    margin-top: 1.5%;
  }

  #joker .sourisScroll{
    margin-top: 10%;
  }

  .sourisScroll {
    width: 24px;
    margin: 0 auto;
    text-align: center;
    margin-top: 45%;
  }

    .souris {
    border: 3px solid white;
    width: 18px;
    background-color: transparent;
    height: 35px;
    border-radius: 10px;
  }

  .roulette {
    width: 1px;
    height: 1px;
    border: 2px solid orange;
    background-color: orange;
    position: relative;
    border-radius: 50%;
    left: 50%;
    margin-left: -2px;
    top: 7px;
    animation: scroll 1s infinite;
  }

  @keyframes scroll {
    0%   { top: 6px; opacity: 0;}
    20% { opacity: 1; }
    80% { opacity: 1;}
    100% {top: 20px; opacity: 0;}
  }

  #portfolio .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #acadenum .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #topspot .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #joker .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #contact .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #about .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  .port{
    margin-top: 10%;
  }

  .port img{
    width: 45%;
    margin-left: 45%;
    border-radius: 1vw;
    position: absolute;
    margin-top: 37%;
  }

  .propos{
    margin-top: 10%;
  }

  .propos img{
    width: 45%;
    margin-left: 10%;
    border-radius: 1vw;
    position: absolute;
  }

  .contacts{
    margin-top: 10%;
    margin-bottom: 20%;
  }

  .contacts img{
    width: 45%;
    margin-left: 10%;
    border-radius: 1vw;
    position: absolute;
    margin-top: 71%;
  }

  .tweet{
    width: 25%;
    background-color: #171719;
    border-radius: 1vw;
    padding: 1%;
    position: absolute;
    color: white;
    box-shadow: 4px 4px orange;
    padding-bottom: 2%;
  }

  .tweet a{
    text-decoration: none;
    color: orange;
    border: 0.2vw solid orange;
    padding: 1%;
    border-radius: 1vw;
    margin-left: 30%;
  }

  .tweet h1{
    font-size: 2vw;
  }

  .tweet p{
    width: 90%;
    margin-bottom: 10%;
  }

  .tweet1{
    margin-top: 9%;
    margin-left: 40%;
  }

  .tweet2{
    margin-top: 44%;
    margin-left: 28%;
    box-shadow: -4px 4px orange;
  }

  .tweet3{
    margin-top: 77%;
    margin-left: 40%;
  }




  #mentions h4{
    font-size: 1.25vw;
    font-family: 'Acme', sans-serif;
    color: orange;
    margin-left: 31%;
  }

  #mentions p{
    font-size: 1vw;
    font-family: 'Ubuntu', sans-serif;
    color: white;
    margin-left: 30%;
    width: 40%;
  }

  .infomaniak{
    font-size: 1vw;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    color: orange;
  }

  #mentions .Accueil h1{
    font-size: 5vw;
    margin-top: 16%;
  }

  #mentions h4:first-of-type{
    font-size: 2.5vw;
    border-bottom: 0.2vw solid orange;
    width: 19%;
    margin-left: 40.5%;
    color: white;
  }

  .pitchproj{
    width: 70%;
    margin-left: 10%;
  }

  .pitchproj h4{
    font-size: 1.25vw;
    font-family: 'Acme', sans-serif;
    color: orange;
  }

  .pitchproj p{
    font-size: 1vw;
    font-family: 'Ubuntu', sans-serif;
  }

  .pitchproj a{
    font-size: 1vw;
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    color: orange;
  }

  .galerie img{
    width: 75%;
    margin-left: 12.5%;
  }

  .galerie1 img{
    width: 50%;
    margin-left: 25%;
  }

  .credits{
    text-decoration: none;
    color: orange;
  }

  .projets{
  width: 80%;
  margin-left: 10%;
  }

  .galery{
    margin-right: 2.5%;
    width: 30%;
    display: inline-block;
    height: 15vw;
    margin-top: 2.5%;
  }

  .galery:hover{
    box-shadow: 12px 12px orange;
    transition: .5s cubic-bezier(.5,.03,.41,1);
    transform: translate(-5px,5px);
  }

  .galery a{
    width: 100%;
    height: 100%;
    display: block;
  }

  .p1{
    background-image: url(https://www.sebastienjourdain.com/css/joker.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .p2{
    background-image: url(https://www.sebastienjourdain.com/css/topspot.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .p3{
    background-image: url(https://www.sebastienjourdain.com/css/acadenum.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .p4{
    background-image: url(https://www.sebastienjourdain.com/css/hiking.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .p5{
    background-image: url(https://www.sebastienjourdain.com/css/renoir.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .p6{
    background-image: url(https://www.sebastienjourdain.com/css/groupe.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
  }

}

@media screen and (max-width: 800px) {

  /* Base */
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  body{
      font-family: 'Ubuntu', sans-serif;
      background: #171719;
      position: relative;
      padding: 1vw;
      scrollbar-color: orange;
  }

  body::-webkit-scrollbar {
      background-color: orange;
      width: 10px;
  }

  body::-webkit-scrollbar-track {
      background-color: #171719;
  }

  body::-webkit-scrollbar-thumb {
      background-color: orange;
      border-radius: 16px;
      border: none;
  }

  body::-webkit-scrollbar-button {
      display:none;
  }
    #flat_accueil {
    width: 60%;
    position: absolute;
    margin-left: 20%;
  }

  .portrait{
    width: 90%;
    margin-left: 5%;
  }

  .logo{
    width: 24%;
    margin-left: 5%;
    margin-top: 7%;
  }

  .bureau{
    position: absolute;
    visibility: hidden;
  }

  .Accueil h1, h2, h3 {
      position: absolute;
      font-family: 'Acme', sans-serif;
      line-height: 1.3;
      left: 5%;
  }

  .Accueil h1 {
    font-size: 7vw;
    margin-top: 70%;
  }

  .Accueil h2 {
    font-size: 7vw;
    margin-top: 81%;
  }

  .Accueil h3 {
    font-size: 7vw;
    margin-top: 101%;
  }

  .logotop{
    width: 70%;
    margin-left: 15%;
    margin-top: 20%;
  }

  .logoaca{
    width: 70%;
    margin-left: 15%;
  }

  header{
    margin-bottom: 20%;
  }

  .Accueil{
    padding-bottom: 120%;
  }

  #joker .Accueil{
    padding-bottom: 85%;
  }

  #topspot .Accueil{
    padding-bottom: 100%;
  }

  #acadenum .Accueil{
    padding-bottom: 70%;
  }

  .index article img{
    width: 100%;
    border-radius: 9vw;
    margin-top: 30%;
  }

  footer{
    margin-top: 15%;
    margin-bottom: 10%;
  }

  footer .logo{
    position: initial;
    margin-left: 40%;
    width: 24%;
  }

  footer p{
    font-size: 3vw;
    color: white;
    text-align: center;
  }

   footer a{
     text-decoration: none;
     color: orange;
     font-size: 3vw;
   }

   footer p:first-of-type{
     font-size: 4.2vw;
     color: white;
     margin-left: 32.5%;
     font-family: 'Acme', sans-serif;
     border-bottom: 0.2vw solid orange;
     width: 35%;
   }

   .réseau{
     margin-left: 2%;
     font-size: 5vw;
   }

   .réseau:first-of-type{
     margin-left: 36%;
   }

   .tweet{
     width: 85%;
     margin-left: 7.5%;
     background-color: #171719;
     border-radius: 5vw;
     padding: 1%;
     color: white;
     box-shadow: 4px 4px orange;
     padding-bottom: 2%;
     padding-bottom: 10%;
   }

   .tweet a{
     text-decoration: none;
     color: orange;
     border: 0.2vw solid orange;
     padding: 3%;
     border-radius: 5vw;
     margin-left: 24%;
   }

   .tweet h1{
     font-size: 6vw;
   }

   .tweet p{
     width: 90%;
     margin-bottom: 10%;
     font-size: 4vw;
   }

   .contact h1{
     font-family: 'Acme', sans-serif;
     font-size: 7vw;
     color: white;
     margin-left: 5%;
   }

   .contact p{
     font-size: 4vw;
     color: white;
     width: 90%;
     margin-left: 5%;
   }

   input{
     padding: 2%;
     background: transparent;
     border: 0.15vw solid white;
     color: white;
     font-family: 'Ubuntu', sans-serif;
     font-size: 4vw;
     border-radius: 3vw;
     width: 90%;
     margin-right: 3%;
     margin-left: 3%;
     margin-top: 3%;
   }

   textarea{
     padding: 2%;
     background: transparent;
     border: 0.15vw solid white;
     color: white;
     font-family: 'Ubuntu', sans-serif;
     font-size: 4vw;
     border-radius: 3vw;
     width: 90%;
     margin-left: 3%;
     margin-right: 3%;
     margin-top: 3%;
   }

   button{
     padding: 2%;
     background: transparent;
     border: 0.15vw solid white;
     color: white;
     font-family: 'Ubuntu', sans-serif;
     font-size: 4vw;
     border-radius: 3vw;
     width: 49%;
     margin-left: 5%;
     margin-top: 3%;
     cursor: pointer;
     margin-bottom: 5%;
   }

   h1{
    color: white;
    font-size: 7vw;
    font-family: 'Acme', sans-serif;
   }

   h4{
     color: orange;
     font-size: 5vw;
     font-family: 'Acme', sans-serif;
   }

   p{
     font-size: 4vw;
     color: white;
     font-family: 'Ubuntu', sans-serif;
   }

   a{
     text-decoration: none;
     color: orange;
     font-size: 4vw;
     font-family: 'Ubuntu', sans-serif;
   }

   #mentions h1:nth-last-of-type(3n){
     width: 54%;
     border-bottom: 0.2vw solid orange;
     margin-left: 23%;
     margin-bottom: 20%;
   }

   #mentions .Accueil h1 {
    font-size: 11vw;
    margin-top: 35%;
  }



  .galerie img{
    width: 90%;
    margin-left: 5%;
  }

  .galerie1 img{
    width: 75%;
    margin-left: 12.5%;
  }

  /* Masques */
  .fo-mask {
    display: inline-block;
    overflow: hidden;
    clear: both;
  }

  .fo-mask span {
    color: transparent;
    -webkit-animation: show 0s forwards 0.4s;
    animation: show 0s forwards 0.4s;
  }

  .fo-mask:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: orange;
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
    -webkit-animation: left-to-right 1s cubic-bezier(.17,.67,.83,.67);
    animation: left-to-right 1s cubic-bezier(.17,.67,.83,.67);
  }

  /* Animation de dévoilement */
  @-webkit-keyframes show {
    0% {
      color: transparent;
    }
    100% {
      color: white;
    }
  }
  @keyframes show {
    0% {
      color: transparent;
    }
    100% {
      color: white;
    }
  }

  /* Animation gauche/droite */
  @-webkit-keyframes left-to-right {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(110%, 0, 0);
    }
  }
  @keyframes left-to-right {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(110%, 0, 0);
    }
  }

  #portfolio .Accueil h1{
    font-size: 11vw;
    margin-top: 35%;
  }

  #contact .Accueil h1{
    font-size: 11vw;
    margin-top: 47%;
  }

  #about .Accueil h1{
    font-size: 11vw;
    margin-top: 35%;
  }

  #topspot .Accueil h1{
    font-size: 9vw;
    margin-top: 8%;
  }

  #joker .Accueil h1{
    font-size: 9vw;
    margin-top: 5%;
  }

  .logoS1{
    width: 50%;
    margin-left: 25%;
  }

  #acadenum .Accueil h1{
    font-size: 9vw;
    margin-top: 0%;
  }

  /* Délais */

  .delay-100.fo-mask span {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }

  .delay-100.fo-mask:after {
    -webkit-animation-delay: 1.1s;
    animation-delay: 1.1s;
  }
  .delay-200.fo-mask span {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  .delay-200.fo-mask:after {
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
  }
  .delay-300.fo-mask span {
    -webkit-animation-delay: 2.5s;
    animation-delay: 2.5s;
  }

  .delay-300.fo-mask:after {
    -webkit-animation-delay: 2.1s;
    animation-delay: 2.1s;
  }

  #joker .sourisScroll{
    margin-top: 65%;
  }

  #topspot .sourisScroll{
    margin-top: 75%;
  }

  #acadenum .sourisScroll{
    margin-top: 50%;
  }

  .sourisScroll {
    width: 24px;
    margin: 0 auto;
    text-align: center;
    margin-top: 132%;
    position: absolute;
    margin-left: 46%
  }

    .souris {
    border: 3px solid white;
    width: 18px;
    background-color: transparent;
    height: 35px;
    border-radius: 10px;
  }

  .roulette {
    width: 1px;
    height: 1px;
    border: 2px solid orange;
    background-color: orange;
    position: relative;
    border-radius: 50%;
    left: 50%;
    margin-left: -2px;
    top: 7px;
    animation: scroll 1s infinite;
  }

  @keyframes scroll {
    0%   { top: 6px; opacity: 0;}
    20% { opacity: 1; }
    80% { opacity: 1;}
    100% {top: 20px; opacity: 0;}
  }

  /*menu hamburger*/
  .nav-toggle{
   background: #171719;
   width:30px;
   height: 30px;
   position: absolute;
   top: 30px;
   right: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 2;
}
.nav-toggle-bar{
   background: orange;
   width: 100%;
   height: 2px;
   position: absolute;
   left: 0;
   transition:all .5s;
}
.nav-toggle-bar::before{
   background: orange;
   width: 100%;
   height: 2px;
   position: absolute;
   left: 0;
   content:"";
   top: -10px;
   transition:all .5s;
}
.nav-toggle-bar::after{
   background: orange;
   width: 100%;
   height: 2px;
   position: absolute;
   left: 0;
   content:"";
   top: 10px;
   transition:all .5s;
}
.menu{
   position: fixed;
   background: #171719;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   display: flex;
   z-index: 1;
   transform: translateX(100vw);
   transition: all .5s;
}
.menu ul{
   list-style: none;
   margin: 0;
   padding: 0;
   text-transform: uppercase;
   margin-top: 22%;
   width: 100%;
}
.menu li{
   margin-bottom: 30px;
   margin-top: 70px;
   text-align: center;
}
.menu a{
   color: white;
   text-decoration: none;
   font-size: 7vw;
   font-family: 'Acme', sans-serif;
   font-weight: bold;
}
.menu-open .menu{
   transform: translateX(0);
}
.menu-open .nav-toggle-bar{
   transform: rotate(135deg);
}
.menu-open .nav-toggle-bar:before,
.menu-open .nav-toggle-bar:after{
   transform: rotate(90deg);
   top: 0;
}
.nav-toggle{
   transition: all .5s;

}
.noscroll{
   overflow: hidden;
}
.noscroll body{
   overflow: hidden;
}
.menu li{
   transform: translateX(70px);
   transition: all .5s ease;
   opacity: 0;
}
.menu-open .menu li{
   transform: translateX(0);
   opacity: 1;
}
.menu-open .menu li:nth-child(n+1){transition-delay: .3s;}
.menu-open .menu li:nth-child(n+2){transition-delay: .35s;}
.menu-open .menu li:nth-child(n+3){transition-delay: .4s;}
.menu-open .menu li:nth-child(n+4){transition-delay: .45s;}
.menu-open .menu li:nth-child(n+5){transition-delay: .5s;}

.projets{
width: 90%;
margin-left: 5%;
margin-top: 15%;
}

.galery{
  margin-right: 5%;
  width: 100%;
  height: 55vw;
  margin-top: 5%;
  box-shadow: 4px 4px orange;
}

.galery a{
  width: 100%;
  height: 100%;
  display: block;
}

.p1{
  background-image: url(https://www.sebastienjourdain.com/css/joker.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.p2{
  background-image: url(https://www.sebastienjourdain.com/css/topspot.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.p3{
  background-image: url(https://www.sebastienjourdain.com/css/acadenum.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.p4{
  background-image: url(https://www.sebastienjourdain.com/css/hiking.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.p5{
  background-image: url(https://www.sebastienjourdain.com/css/renoir.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.p6{
  background-image: url(https://www.sebastienjourdain.com/css/groupe.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}

}
</style>
