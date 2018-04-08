import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import ActionTwitter from '../TwitterIcon';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',
    color: '#FFFFFF',  
    backgroundColor: '#55ACEE',            
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textTransform: "capitalize",

    textAlign: 'left', 
  },
  title: {  
    color: '#FFFFFF',      
  }
};

class VisitTwitterButton extends React.Component {
  
  render() {
    return ( 
      <div>        
        <Link to='http://www.twitter.com' target="_blank" style={{ textDecoration: 'none' }}>
            <Button 
              style={styles.flatbutton}        
            >
              <ActionTwitter />
              Visit us on Twitter
            </Button>
        </Link>       
      </div>
    );
  }
}

export default (VisitTwitterButton)
