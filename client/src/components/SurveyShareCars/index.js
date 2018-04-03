import React from 'react';
import Link from 'next/link'
import FlatButton from 'material-ui/FlatButton';
import ActionCars from '~/CarsIcon';
import styled from 'styled-components';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',  
    backgroundColor: '#52277E',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textAlign: 'left',   
  },
  title: {  
    color: '#FFFFFF',      
  },
  label: {
    fontSize: '0.9em',    
    color: '#FFFFFF',
    textTransform: 'normal',
  }
};

class ShareCars extends React.Component {

  constructor(props) {
    super(props);    
  }

  render() {
    return (      
      <div>        
        <Link href='http://www.cars.com'>
          <a target="_blank">
            <FlatButton 
              style={styles.flatbutton} 
              labelStyle={styles.label} 
              label="Share your review on Cars.com"
              labelPosition="after"
              icon={<ActionCars />}
            />
          </a>
        </Link>
      </div>
    );
  }
}

export default (ShareCars)
