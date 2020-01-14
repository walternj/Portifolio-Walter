  import React from 'react'

import './footer.css'
export default function  () {
  return (
    <footer className="footerContainer">
      <div id="horizontal-footer">
        <div className="foot-menus">
          <div id="plan-site">
            <p><strong>Plan du site</strong></p>
            <ul>
              <li><i className="fa fa-code" /> Works</li>
              <li><i className="fa fa-address-card" /> About me</li>
              <li><i className="fa fa-file"> </i> CV</li>
            </ul>
          </div>
          <div id="contacts">
            <p><strong>Où me trouver</strong></p>
            <ul>
              <li><i className="fa fa-github"/><a href="https://github.com/walternj" target="blanc" > GitHub</a></li>
              <li><i className="fa fa-linkedin"/><a href="https://linkedin.com/in/walter-nunes-jr" target="blanc" > LinkedIn  </a></li>
              <li><i className="fa fa-phone" /> 06 59 28 79 32</li>
              <li><i className="fa fa-envelope" /> walternj@hotmail.com</li>
            </ul>
          </div>
        </div>
        <div id="about-me">
          <p><strong>Qui suis-je ?</strong></p>
          <p>
            Développeur Full Stack Junior autodidacte, enthousiaste et curieux capable de développer
            une application avec un responsive design qui s'adapte à chaque résolution d'écran.
          </p>
          <p>
            Je développe des aplications Web et Mobile avec la stack MERN 
            (Mongodb, Express, ReactJS/React Native et Node.js) et d'autres technologies.
          </p>
          <p>Intéressé par tout ce qui touche à mon domaine, j’effectue une veille quotidienne 
            concernant les nouvelles technologies web et mobile, ce que me permet de m'améliorer 
            constamment.
          </p>
          <p>Je suis toujours à la recherche d'acquérir des nouvelles compétences dans mon domaine.</p>
        </div>
      </div>
      <p id="foot">© WalterNJ 2020 - Développeur Full-Stack #ReactJS #React Native #NodeJS </p>
    </footer>
  )
}

