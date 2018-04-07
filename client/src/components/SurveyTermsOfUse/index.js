import React from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const Content = styled.div`
  color: #171717;
  font-size: 1.0em; 
  line-height: normal;
  text-align: left;  
  text-align:justify;
  padding-right: 20px;
  padding-left: 20px;
`;

const styles = { 
  termsbutton: {
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textAlign: 'center',   
  },
  title: {  
    color: '#4D4D4D',  
    textTransform: "capitalize",
  },
};

class Terms extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <Button
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <span>
        <Button style={styles.termsbutton} label="Terms of Use." onClick={this.handleOpen} />
        <Dialog
          title="Terms of Use"
          titleStyle={styles.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Content>
            1.	That you are providing and granting a royalty free, perpetual, irrevocable and fully transferable and sublicense and your consent for the dealership, or their agents or representatives, at their own discretion to republish any or all survey content including the potential of publishing on websites managed by the dealership; your name will be displayed as first name and last initial only.<br /><br />
            2.	That you are at least 18 years or older, have personal knowledge of the dealership based on bona fide vehicle sales and service business with the dealership, and that the you have not been compensated for this survey in any manner and that you have no relationship or affiliation with the dealership;<br /><br />
            3.	That your survey response is accurate and honest, that you are responsible for the content of the response, and that the content may be edited prior to posting if it is determined that the content is obscene, lewd, lascivious, filthy, excessively violent, harassing, or otherwise objectionable;<br /><br />
            4.	That the content you are submitting complies with all applicable laws and regulations and does not contain any personal information for anyone other than you. You agree to fully defend, indemnify, and hold the dealership and its officers, directors, employees, shareholders, customers, agents, successors and assigns harmless from and against any and all loss, damage, costs, claims, expenses, settlements or other liability (including reasonable attorneys’ fees) arising from an event in which the content you submit does not comply with these laws and regulations.
          </Content>
        </Dialog>
      </span>
    );
  }
}

export default (Terms)
