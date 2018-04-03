import React from 'react';
import Link from 'next/link'
import FlatButton from 'material-ui/FlatButton';
import ActionEdmunds from '~/EdmundsIcon';
import styled from 'styled-components';

const styles = { 
  flatbutton: {
    marginBottom: 12,
    width: '100%',  
    backgroundColor: '#0080E2',            
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

class ShareEdmunds extends React.Component {

  constructor(props) {
    super(props);    
  } 

  render() {
    return (      
      <div>        
        <Link href='http://www.edmunds.com'>
          <a target="_blank">            
            <FlatButton 
              style={styles.flatbutton} 
              labelStyle={styles.label} 
              label="Share your review on Edmunds.com"
              labelPosition="after"
              icon={<ActionEdmunds />}
            />
          </a>
        </Link>       
      </div>
    );
  }
}

export default (ShareEdmunds)