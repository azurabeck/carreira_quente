import React from 'react';

const CoverBrand = (props) => {
  return (
      <div className={`header-wrapper-${props.brand}`}>
      
          <label className="header-shadow"></label>
          <div className='menu-wrapper'>

              <div id='header' className='header logo-wrapper section'>
              
                <img 
                  alt="Carreira Quente" 
                  id="Header1_headerimg" 
                  src="https://i.pinimg.com/originals/3f/9d/84/3f9d84b9b864f48faca659b4b9d13f2b.png" />
                        
              </div>
        
          </div>

      </div>
)};

export default CoverBrand;