import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    return(
        <section>

            <Brand brand='default' />
        
            <div className='content'>                
            
                <Row>

                    
                        <Row><Col md={12}><label className='formPageTitle'>About me</label></Col></Row>
                       
                        <Col md={6}>
                           <p>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non facilisis ipsum. 
                                Sed lobortis leo nec turpis finibus, eget viverra est lobortis. Ut mollis facilisis consectetur.
                                Sed sit amet urna metus. Aenean vitae accumsan libero, fermentum cursus tellus. Praesent id elit 
                                varius, laoreet est in, ornare elit. Sed et ante ac dui gravida consequat. Praesent mollis augue 
                                id iaculis rhoncus. Quisque imperdiet, neque nec condimentum dapibus, mauris ipsum ultricies leo, 
                                sed varius elit quam eu leo.

                                Pellentesque porttitor tempus dictum. Pellentesque habitant morbi tristique senectus et netus et 
                                malesuada fames ac turpis egestas. Suspendisse nec est sed libero maximus posuere eget vitae sapien. 
                                Aenean suscipit erat nec justo rutrum, a molestie dolor finibus. Duis molestie lacinia lectus vel 
                                egestas. Nunc in commodo urna. Nullam venenatis tellus magna, at dictum metus varius eget.     

                            </p>
                        
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
  
  export default connect(null, mapDispatchToProps)(About)
  