import React, {useState , useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow);
        };
    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav__logo'
        src='https://image.similarpng.com/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png'
        alt='Netflix logo'/>

        <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Avatar'/>
    </div>
  )
}

export default Nav