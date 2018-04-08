import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button';
import ActionEdmunds from '../EdmundsIcon';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    paddingLeft: 0,
    width: '100%',  
    color: '#FFFFFF',
    backgroundColor: '#0080E2',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textTransform: "capitalize",
    textAlign: 'left', 
    justifyContent: 'initial'  
  },
  title: {  
    color: '#FFFFFF',      
  },  
};

class ShareEdmunds extends React.Component {

  render() {
    return (   
      <div>        
        <Link to='http://www.edmunds.com' target="_blank" style={{ textDecoration: 'none' }} >      
            <Button 
              style={styles.flatbutton}              
            ><ActionEdmunds />
            Share your review on Edmunds.com</Button>
        </Link>       
      </div>
    );
  }
}

export default (ShareEdmunds)
