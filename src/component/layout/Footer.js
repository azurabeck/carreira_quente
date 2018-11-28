import React, {Component} from 'react';

// EXTERNAL LIBRARY
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MaterialIcon from 'material-icons-react'

class Footer extends Component {

    state = {
        hideLogin: true
    }

    render() {

        const hide = this.state.hideLogin  ? 'hide' : '';        
        const icon = this.state.hideLogin  ? 'arrow_drop_up' : 'arrow_drop_down';

        return (
            <footer id="footer">

                <div className='login' id={hide}>

                </div>

                <div className="ct-wrapper">
                    <div className='arrow' onClick={(e) => this.setState(prevState => ({ hideLogin: !this.state.hideLogin }))}>
                        <label className='arrowIcon'><MaterialIcon icon={icon} color="#efefef" /></label>
                    </div>
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
            </footer>
        )
    }
}

export default Footer;