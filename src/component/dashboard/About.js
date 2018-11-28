import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Row, Col } from 'react-bootstrap'
import { createContact } from '../../store/actions/contactActions'

// COMPONENT IMPORT
import Brand from '../layout/Brand'


export class About extends Component {

    state = {
        name:'',
        email: '',
        tel: '',
        content:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.createContact(this.state);
      }


  render() {

    const { about } = this.props

    return(
        <section>

            <Brand brand='default' />
        
            <div className='content'>                
            
                <Row>

                    
                        <Row><Col md={12}><label className='formPageTitle'>About me</label></Col></Row>
                       
                        <Col md={6}>
                            {
                                about && about.map(about => {
                                    return (
                                        <p>{about.content}</p>
                                    ) 
                                })   
                            } 
                        
                        </Col>
                        
                        <Col md={6} className='formContact'>
                        
                            <form onSubmit={this.handleSubmit}>

                                <input type='text' id='name' placeholder='name' onChange={this.handleChange}></input>
                                <input type='email' id='email' placeholder='email' onChange={this.handleChange}></input>
                                <input type='tel' id='tel' placeholder='tel' onChange={this.handleChange}></input>
                                <textarea id='content' placeholder='Send me a msg' onChange={this.handleChange}></textarea>

                                <Row className='buttonRow'><button className="contactBtn" type='submit' onClick={this.handleSubmit}>Send</button></Row>
                                

                            </form>                            
                        
                        </Col>

                </Row>                
            
            </div>

        </section>
    )
  }
}


  

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (contact) => dispatch(createContact(contact))
    }
}

const mapStateToProps = (state) => {
    return {
        about: state.firestore.ordered.about
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'about' }])
)(About)
  
  