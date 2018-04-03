import React from 'react';
import Link from 'next/link'
import FlatButton from 'material-ui/FlatButton';
import ActionGoogle from '~/GoogleIcon';
import styled from 'styled-components';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',  
    backgroundColor: '#DB3236',            
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
  },
};

class ShareGoogle extends React.Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (      
      <div>       
        <Link href='https://plus.google.com'>
          <a target="_blank">
            <FlatButton 
              style={styles.flatbutton} 
              labelStyle={styles.label} 
              label="Share your review on Google"
              labelPosition="after"
              icon={<ActionGoogle />}
            />
          </a>
        </Link>         
      </div>
    );
  }
}

export default (ShareGoogle)