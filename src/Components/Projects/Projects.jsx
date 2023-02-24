import { Link } from 'react-router-dom';
import biblioImg from '../../img/biblio.png';
import unifWeb from '../../img/unifWeb.png';
import calcInfl from '../../img/calcInfl.png';
import trad from '../../img/trad.png';
import rating from '../../img/rating.png';
import signUp from '../../img/signUp.png';
import rgbChange from '../../img/rgbChange.png';
import cart from '../../img/cart.png';
import toDo from '../../img/toDo.png';

export const Projects = () => {
  const projects = [
    { img: toDo, title: 'To Do list', desc: 'Proyecto CoderHouse', link: 'https://josuemguinazu.github.io/to-do-list-aqiapi/' },
    {
      img: cart,
      title: 'E-commerce',
      desc: 'Proyecto CoderHouse',
      link: 'https://cart-project-coder-house-96nyz3qdk-josuemguinazu.vercel.app/',
    },
    { img: rgbChange, title: 'Color changer', desc: 'Proyecto CoderHouse', link: 'linkDeploy' },
    { img: signUp, title: 'Sign Up', desc: 'Proyecto personal', link: 'https://josuemguinazu.github.io/frontEndMentor_signUp/' },
    {
      img: rating,
      title: 'Rating App',
      desc: 'Proyecto personal',
      link: 'https://josuemguinazu.github.io/frontEndMentor_interactiveRating/',
    },
    { img: trad, title: 'Traductor esp-ing', desc: 'Proyecto personal', link: 'https://josuemguinazu.github.io/textTranslate/' },
    { img: calcInfl, title: 'Calcular Inflación', desc: 'Proyecto CoderHouse', link: 'https://josuemguinazu.github.io/calcInflacion/' },
    { img: unifWeb, title: 'web Uniformes', desc: 'Proyecto CoderHouse', link: 'https://josuemguinazu.github.io/webUniformes/' },
    {
      img: biblioImg,
      title: 'web Librería',
      desc: 'Proyecto CoderHouse',
      link: 'https://josuemguinazu.github.io/libros-paradojas/',
    },
  ];
  return (
    <>
      <div className='containerProject'>
        {projects.map((el) => {
          return (
            <>
              <div className='projects'>
                <img className='imgProject' src={el.img} alt='Project Img' />
                <div className='projectsInfo'>
                  <h3>{el.title}</h3>
                  <h4>{el.desc}</h4>
                  <Link className='projectsLinks' to={el.link}>
                    Go!
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
