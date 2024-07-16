import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion, transform } from "framer-motion";
import logo from '../assets/logo2.svg'
import { Link } from 'react-router-dom';



const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
];

const staggerOpenMenu = stagger(0.1, { startDelay: 0.15 });
const staggerCloseMenu = stagger(-0.1, { startDelay: 0.3 });

function useMenuAmination(isMenuOpen) {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate('.menu-overlay',
            isMenuOpen
                ? { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
                : { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
            {
                duration: isMenuOpen ? 0.18 : 0.3,
                delay: isMenuOpen ? staggerOpenMenu : staggerCloseMenu,
                transition: { ease: 'easeInOut' }
            });

        animate('.menu-text', isMenuOpen
            ? { opacity: 1, y: 0, }
            : { opacity: 0, y: 100, },
            {
                duration: 0.2,
                delay: isMenuOpen ? staggerOpenMenu : staggerCloseMenu,
                // transition: { bounceStiffness: 500, bounceDamping: 20 }
            });

        animate('.menu-overlay-sub',
            isMenuOpen
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 100, },
            {
                duration: 0.2,
                delay: isMenuOpen ? 0.35 : 0,
            })
    }, [isMenuOpen]);

    return scope;
}


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scope = useMenuAmination(isMenuOpen);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }



    return (
        <div className="menu" ref={scope}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <img className='logo' src={logo} alt="nonameclub shop" />
                </div>
                <div>
                    <p className="menu-open" onClick={toggleMenu}>MENU</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <img className='logo' src={logo} alt="nonameclub shop" />
                    </div>
                    <div className='menu-links'>

                        {menuLinks.map((link, index) => (
                            <div className='menu-link-item-holder' onClick={toggleMenu} key={index}>
                                <Link to={link.path} className='menu-link'>
                                    <motion.div
                                        initial='initial'
                                        whileHover='hovered'

                                    >
                                        <motion.p
                                            className='menu-text'
                                            variants={{
                                                initial: { y: 0 },
                                                hovered: { y: '-100%' },
                                            }}>
                                            {link.label}
                                        </motion.p>
                                        <motion.p
                                            className='menu-text-double'
                                            variants={{
                                                initial: { y: '100%' },
                                                hovered: { y: 0 },
                                            }}>
                                            {link.label}
                                        </motion.p>
                                    </motion.div>
                                </Link>
                            </div>
                        ))}

                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        CLOSE
                    </div>
                </div>
                <div className='menu-overlay-sub'>
                    <motion.div
                        className="sub-close sub-item"
                        onClick={toggleMenu}
                        whileHover={{ rotate: '90deg', translateX: '4px', translateY: '5px' }}
                    >
                        &#10005;
                    </motion.div>
                    <div className="sub-socials sub-item">
                        <motion.a
                            href="https://www.instagram.com/nesmanpro/"
                            target='_blank'
                            initial='initial'
                            whileHover='hovered' >

                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hovered: { y: '-100%' },
                                }}>Instagram &#8599;</motion.div>
                            <motion.div
                                variants={{
                                    initial: { y: '100%' },
                                    hovered: { y: 0 },
                                }}>Instagram &#8599;</motion.div>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/lucasroquecugiani/"
                            target='_blank'
                            initial='initial'
                            whileHover='hovered' >

                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hovered: { y: '-100%' },
                                }}>Linkedin &#8599;</motion.div>
                            <motion.div
                                variants={{
                                    initial: { y: '100%' },
                                    hovered: { y: 0 },
                                }}>Linkedin &#8599;</motion.div>
                        </motion.a>

                        <motion.a
                            href="https://www.behance.net/nesmanpro"
                            target='_blank'
                            initial='initial'
                            whileHover='hovered' >

                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hovered: { y: '-100%' },
                                }}>Behance &#8599;</motion.div>
                            <motion.div
                                variants={{
                                    initial: { y: '100%' },
                                    hovered: { y: 0 },
                                }}>Behance &#8599;</motion.div>
                        </motion.a>

                    </div>
                    <div className="sub-contacts sub-item">
                        <p>hola@nesmanpro.com</p>
                        <p>+34 634561805</p>
                    </div>
                    <div className='sub-reel sub-item'>View Showreel</div>
                </div>
            </div>
        </div >
    )
}

export default Menu