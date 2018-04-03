import React from 'react';
import Link from 'next/link'
import FlatButton from 'material-ui/FlatButton';
import ActionFacebook from '~/FacebookIcon';
import styled from 'styled-components';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',  
    backgroundColor: '#3B5998',            
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

class ShareFacebook extends React.Component {

  constructor(props) {
    super(props);   
  }
  
  render() {
    return (      
      <div>        
        <Link href='http://www.facebook.com'>
          <a target="_blank">
            <FlatButton 
              style={styles.flatbutton} 
              labelStyle={styles.label} 
              label="Share your review on Facebook"
              labelPosition="after" 
              icon={<ActionFacebook />}              
            />
          </a>
        </Link>
      </div>
    );
  }
}

export default (ShareFacebook)
