import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import ActionGoogle from '../GoogleIcon';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',
    color: '#FFFFFF',  
    backgroundColor: '#3B5998',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textTransform: "capitalize",
    textAlign: 'left',     
  },
  title: {  
    color: '#FFFFFF',      
  }  
};

class ShareGoogle extends React.Component {

  render() {
    return (      
      <div>       
        <Link to='https://plus.google.com' target="_blank" style={{ textDecoration: 'none' }} > 
            <Button 
              style={styles.flatbutton}               
            ><ActionGoogle />Share your review on Google</Button>
        </Link>         
      </div>
    );
  }
}

export default (ShareGoogle)
