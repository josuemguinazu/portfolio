import AvatarMe from '../../img/avatarMeTransparent.png';
import jmgDev from '../../img/jmgDev.gif';
import FrontEndEs from '../../img/frontEndEs.gif';

export default function Hero() {
  return (
    <>
      <div className='Hero'>
        <img src={jmgDev} alt='jmgDev' />
        <img src={FrontEndEs} alt='' />
        <img className='avatar' src={AvatarMe} alt='Avatar JMG-DEV' />
      </div>
    </>
  );
}
