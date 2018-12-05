import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from '../../image/foto1.jpg'

// COMPONENT IMPORT
import Brand from '../layout/Brand'

// EXTERNAL LIBRARY
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export class About extends Component {

  render() {

    return(
        <section>

            <Brand brand='default' />
        
            <div className='content'>                
            
                <Row>


                        <Col md={6} className='aboutCol'>
                        
                            <label className='aboutTitle mb-35'>Ofereça desafios, e não ameaças...</label>
                        
                            <p className='aboutParagraph mb-15'>O momento de crise que vivemos é uma excelente oportunidade para falarmos de liderança e seus diferenciais.</p>
                            <p className='aboutParagraph'>Na minha visão de recrutadora, a maior vantagem que uma companhia pode ter em relação aos seus concorrentes são 
                               as pessoas enxergarem um significado no seu trabalho. Processos são gerenciados por pessoas e são elas que fazem a diferença. 
                               O que todos buscamos, no fundo, é um sentido, é a realização individual. Uma empresa diferenciada precisa de pessoas realizadas!!
                            </p>

                            <div className='aboutSignature'>

                                <label className='aboutSig1'>Juliana Motta</label><br />
                                <label className='aboutSig2'>H.R Director of PSafe Tecnologia</label>

                            </div>
                       
                        </Col>

                       
                        <Col md={6} className='contactCol'>
                        
                        
                            <div className='contactMe'>
                                    <label className='blockContact'>
                                        <img src={Image} /><br />
                                        <span className='title'>Want to connect?</span><br /><br />
                                        <span className='sub'>Email me at: <a className='email' href='rebeccagsouza@gmail.com'>info@mysite.com</a></span><br /><br />
                                        <a href="https://www.linkedin.com/in/julianamotta/" title="linkedin"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                                    </label>
                                        

                            </div>

                        
                        
                        </Col>

                </Row>                
            
            </div>

        </section>
    )
  }
}


  

export default About
  
  