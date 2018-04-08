import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import ActionCars from '../CarsIcon';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%', 
    color: '#FFFFFF', 
    backgroundColor: '#52277E',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textTransform: "capitalize",
    textAlign: 'left',   
  },
  title: {  
    color: '#FFFFFF',      
  }, 
};

class ShareCars extends React.Component {

  render() {
    return (      
      <div>
        <Link to='http://www.cars.com' target="_blank" style={{ textDecoration: 'none' }} >        
            <Button 
              style={styles.flatbutton}              
            ><ActionCars />
            Share your review on Cars.com</Button>
        </Link>
      </div>
    );
  }
}

export default (ShareCars)
