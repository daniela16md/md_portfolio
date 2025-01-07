import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Apropos.css'

const Apropos = () => {
    return (
      <div className="apropos">
        <div className="linkapropos">
          <Link to="/" className="backhome">
            <FaHome />
          </Link>
          <h1 className='linkaproposh1'>À propos de moi</h1>
        </div>

        <div className="aproposdiv">
          <div className="homepcontainer">
            <p className="homep">
              Moi, c’est Daniela, développeuse web avec un petit twist :
            </p>
            <p className="homep">
              avant de coder, j’étais préparatrice en pharmacie.
            </p>
            <p className="homep">
              C’est un peu comme passer d’un monde où chaque détail compte
            </p>
            <p className="homep">
              à un autre où chaque ligne de code fait la différence.
            </p>
            <p className="homep">
              J’ai troqué les boîtes de médicaments pour des balises HTML,
            </p>
            <p className="homep">
              et les prescriptions de médicaments pour des requêtes API…
            </p>
            <p className="homep">
              …un changement radical, mais un parcours qui m’a appris
            </p>
            <p className="homep">
              à résoudre des problèmes avec précision.
            </p>
            <p className="homep">
              Aujourd’hui, je me spécialise dans HTML, CSS, JavaScript,
            </p>
            <p className="homep">
              et bien sûr, React et Redux.
            </p>
            <p className="homep">
              Pour moi, chaque projet est une nouvelle opportunité de mettre
            </p>
            <p className="homep">
              en œuvre mes compétences techniques tout en créant des expériences
            </p>
            <p className="homep">
              utilisateurs uniques et sans bug (pas de panique, 
            </p>
            <p className="homep">
              je suis vaccinée contre les erreurs de code !).
            </p>
            <p className="homep">
              Mon but ? Créer des sites web qui sont aussi efficaces
            </p>
            <p className="homep">
              qu’une bonne prescription, mais avec un peu plus de style et de fluidité.
            </p>
            <p className="homep">
              Je crois en un code propre, simple et accessible,
            </p>
            <p className="homep">
              tout comme une bonne explication de votre traitement.
            </p>
            <p className="homep">
              Si vous cherchez une intégratrice web passionnée,
            </p>
            <p className="homep">
              prête à relever des défis et à donner vie à vos projets,
              <a href="mailto:daniela@yahoo.com" className="buttoncontact">contactez-moi !</a>
            </p>
            <p className="homep">
              Je suis toujours prête à prescrire la solution web qu’il vous faut.
            </p>
          </div>
          <div className="aproposcitations">
            <p className='aproposcitationsp'>
              Une citation amusante sur un site Web qui est devenue assez courante lorsqu'un développeur cherche une excuse pour un bug logiciel qu'il a rencontré. Cependant, bien que cette citation soit amusante, en tant que développeur Web, prenez note de tester toutes les fonctionnalités que vous avez créées.
            </p>
            <h3 className='aproposcitationsh3'>" Ce n'est pas un bug. C'est une fonctionnalité non documentée !" - Anonyme</h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Apropos;