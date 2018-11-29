import React, {Component} from 'react';

// EXTERNAL LIBRARY
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

    render() {

        return (
            <footer id="footer">
                <div className='footerGroup'>
                    <div className='footerGroupText'>
                        <div className="footer_credits_oficial"><p>Carreira Quente - Juliana Motta</p></div>
                        <div className="footer-social">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/julianamotta/" title="linkedin">
                                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                                    <span>Linkedin</span></a>
                                </li>
                            </ul>
                        </div>                       
                    </div>
                </div>                
            </footer>
        )
    }
}

export default Footer;