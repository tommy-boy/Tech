import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import ActionInstagram from '../InstagramIcon'

const styles = { 
  flatbutton: {
    marginBottom: 12,
    paddingLeft: 0,
    width: '100%',  
    color: '#FFFFFF',
    backgroundColor: '#3B5998',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textTransform: "capitalize",
    textAlign: 'left', 
    justifyContent: 'initial'  
  },
  title: {  
    color: '#FFFFFF',      
  }
};

class VisitInstagramButton extends React.Component {

  render() {
    return ( 
      <div>        
        <Link to='http://www.instagram.com' target="_blank" style={{ textDecoration: 'none' }}>
            <Button 
              style={styles.flatbutton}            
            >
            <ActionInstagram />
            Visit us on Instagram</Button>
        </Link>       
      </div>
    );
  }
}

export default (VisitInstagramButton)
