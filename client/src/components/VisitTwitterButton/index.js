import React from 'react';
import Link from 'next/link'
import FlatButton from 'material-ui/FlatButton';
import ActionTwitter from '~/TwitterIcon';
import styled from 'styled-components';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',  
    backgroundColor: '#55ACEE',            
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

class VisitTwitterButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (      
      <div>        
        <Link href='http://www.twitter.com'>
        <a target="_blank">
            <FlatButton 
            style={styles.flatbutton} 
            labelStyle={styles.label} 
            label="Visit us on Twitter"
            labelPosition="after" 
            icon={<ActionTwitter />}  
            />
        </a>
        </Link>       
      </div>
    );
  }
}

export default (VisitTwitterButton)