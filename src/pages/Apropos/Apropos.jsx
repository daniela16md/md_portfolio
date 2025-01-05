import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Apropos.css'

const Apropos = () => {
  return (
        <div className="apropos">
            <div className='linkapropos'>
            <Link to="/"  className='backhome'><FaHome /></Link>
            </div>
            <div className="scroll-container">
                <p className="homep">
                    Moi, c’est Daniela, développeuse web avec un petit twist : avant de coder, j’étais préparatrice en pharmacie.</p>
                <p className="homep">
                    C’est un peu comme passer d’un monde où chaque détail compte à un autre où chaque ligne de code fait la différence. </p>
                <p className="homep">
                    J’ai troqué les boîtes de médicaments pour des balises HTML, et les prescriptions de médicaments pour des requêtes API…</p>
                <p className="homep">
                    un changement radical, mais un parcours qui m’a appris à résoudre des problèmes avec précision.
                </p>
                <p className="homep">
                    Aujourd’hui, je me spécialise dans HTML, CSS, JavaScript, et bien sûr, React et Redux. Pour moi, chaque projet </p>
                <p className="homep">
                    est une nouvelle opportunité de mettre en œuvre mes compétences techniques tout en créant des expériences utilisateurs </p>
                <p className="homep">
                    uniques et sans bug (pas de panique, je suis vaccinée contre les erreurs de code !).
                </p>
                <p className="homep">
                    Mon but ? Créer des sites web qui sont aussi efficaces qu’une bonne prescription, mais avec un peu plus de style </p>
                <p className="homep">
                    et de fluidité. Je crois en un code propre, simple et accessible, tout comme une bonne explication de votre traitement. 
                </p>
                <p className="homep">
                    Si vous cherchez une intégratrice web passionnée, prête à relever des défis et à donner vie à vos projets, </p>
                <p className="homep">
                    <a href="mailto:daniela@yahoo.com" className="buttoncontact">contactez-moi</a> ! Je suis toujours prête à prescrire la solution web qu’il vous faut.
                </p>
            </div>
            
        </div>

    )
}

export default Apropos;