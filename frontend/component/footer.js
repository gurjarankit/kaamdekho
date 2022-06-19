import React from 'react';


function Footer(props) {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="widgetFooter">
                <h4 className="uppercase">useful links</h4>
                <ul id="footerUsefulLink">
                    <li title="About US">
                    <span className="usefulLinksIcons">
                        <i className="far fa-id-card"></i>
                    </span>
                    <a>&nbsp;About us</a>
                    </li>
                    <li title="Our Team">
                    <span className="usefulLinksIcons">
                        <i className="far fa-handshake"></i>
                    </span>
                    <a>&nbsp;Our team</a>
                    </li>
                    <li title="Gallery">
                    <span className="usefulLinksIcons">
                        <i className="far fa-images"></i>
                    </span>
                    <a>&nbsp;Gallery</a>
                    </li>
                    <li title="Contact Us">
                    <span className="usefulLinksIcons">
                        <i className="far fa-envelope"></i>
                    </span>
                    <a>&nbsp;Contact us</a>
                    </li>
                </ul>
                </div>
                <div className="widgetFooter" id="footerLogo">
                {/* <img src="Assets/images/main.png" alt="Logo"> */}
                </div>
                <div className="widgetFooter">
                <h4 className="uppercase">Social media links</h4>
                <ul id="footerMediaLinks">
                    <li className="media1" title="Facebook">
                    <span className="mediaLinksIcons fb">
                        <i className="fab fa-facebook-square"></i>
                    </span>
                    <a className="fb">&nbsp;facebook</a>
                    </li>
                    <li className="media2" title="Twitter">
                    <span className="mediaLinksIcons twit">
                        <i className="fab fa-twitter-square"></i>
                    </span>
                    <a className="twit">&nbsp;Twitter</a>
                    </li>
                    <li className="media3"  title="Instagram">
                    <span className="mediaLinksIcons insta">
                        <i className="fab fa-instagram"></i>
                    </span>
                    <a className="insta">&nbsp;instagram</a>
                    </li>
                    <li className="media4" title="Github">
                    <span className="mediaLinksIcons git">
                        <i className="fab fa-github-alt"></i>
                    </span>
                    <a className="git">&nbsp;Github</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="footerCopy">
                <div className="inb">
                    <p className='mt-3'>Copyrights<sup>&copy;</sup> 2022. Developed with Kaam Dekho</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;