import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { 
  FlatButton,
  RaisedButton,
  TextField,
  SelectField,
  Checkbox,
  MenuItem,
  Tooltip } from 'material-ui';
import { HelpOutline } from 'material-ui-icons'
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../../static/globalstyles'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  padding-top: 8px;
  background-color: #FFFFFF;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 44px;  
  font-size: 28px;  
`;

const Options = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; 
`;

const ColLeft = styled.div`  
  float: left;
`;

const ColRight = styled.div`
  float: right;
  padding-right: 22px;
`;

const SideNav = styled.div` 
  position: fixed;
  height: 100%;
  width: 200px;
  top: 55px;
  left: 0;
  background-color: #d3d3d3;
  overflow-x: hidden;
  padding-top: 10px;
  transition: 0.5s; 
  padding: 10px; 
  background: #D3D3D3;
  z-index: 1;
  & li {       
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  & li:hover {
    color: #f1f1f1;
  }
`;

const Label = styled.label`
  display: inline-flex;
  padding: 5px;
  color: #000;
  font-size: 16px;
`;

const LabelColumn = styled.div`
  flex-direction: column;  
  flex: ${(props) => props.colspan};
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-right: ${(props) => props.last ? '0' : '20px'};
  text-align: left;
  line-height: 24px;
  background-color: #D3D3D3;  
`;

const DataColumn = styled.div`
  flex-direction: column;
  flex: ${(props) => props.colspan};
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-right: ${(props) => props.last ? '0' : '20px'};
  text-align: left;
  line-height: 24px;  
  background-color: #FFFFFF;
`;

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: '20px'
  },
  block: {
    display: 'inline',
  },
  configTable: {
    position: 'relative',
    left: 220,    
    width: '80%',
    height: 'auto',
  },
  tableHeader: {
    height: 48,
    textAlign: 'left',
    color:'#fff',
    backgroundColor:'#A9A9A9',
    fontSize: 16,
    paddingLeft: 6
  },
  labelColumn: {
    width: 250,
    backgroundColor: '#D3D3D3',
    paddingLeft: 22,
    paddingRight: '4px'
  },
  dataColumn: {
    paddingLeft: '18px'
  },
  customWidth: {
    textAlign: 'right',   
  },  
  radioButton: { 
    display: 'inline-flex',
    flexDirection: 'row',          
    color: '#4D4D4D',     
    width: 'auto',
    marginRight: '20px',
    verticalAlign: 'middle'
  },
  checkbox: { 
    display: 'inline-flex',
    flexDirection: 'row',              
    width: 'auto',
    marginRight: '15px',
    verticalAlign: 'middle'
  },
  icon: {
    width: 20,
    height: 20
  },
  iconStyle: {
    float: 'right',
    position: 'relative',
    bottom: '6px',
    width: '16px',
    height: '16px',
  }
};

class SurveyConfigurator extends React.Component {
  
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        clientid: 1,
        categoryid: 6,
        deliveryid: 9,       
        selected: [],
        data: [],
        page: 0,
        height: 'auto',
        width: '80%'
      };
    }
 
    handleChange = (event, index, value) => {
      this.setState({value});
    }      

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
      };

    isSelected = id => this.state.selected.indexOf(id) !== -1;
 
    render() {
    const { classes, survey  } = this.props;
    const { user, submitted, spacing } = this.state;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;    

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          type='submit'
          onTouchTap={this.handleSubmit}
        />,
    ];

    return (
      <FlexContainer>
        <form onSubmit={this.handleSubmit}>
          <Options>                                                         
            <ColLeft>
              <SelectField
                value={this.state.clientid}
                onChange={this.handleChange}
                style={styles.customWidth}
                underlineStyle={{borderColor: '#ffffff'}}
                iconStyle={{ fill: '#808080' }}
                labelStyle={{ color: '#808080' }}
              >             
                <MenuItem value={1} primaryText="Client Name" />
                <MenuItem value={2} primaryText="1st Auto Group" />
                <MenuItem value={3} primaryText="Golden Motors LLC" />
                <MenuItem value={4} primaryText="Baldwin Auto Group" />
                <MenuItem value={5} primaryText="GMC" />
              </SelectField>

              <SelectField
                value={this.state.categoryid}
                onChange={this.handleChange}
                style={styles.customWidth}
                underlineStyle={{borderColor: '#ffffff'}}
                iconStyle={{ fill: '#808080' }}
                labelStyle={{ color: '#808080' }}
              >             
                <MenuItem value={6} primaryText="Category" />
                <MenuItem value={7} primaryText="Sales" />
                <MenuItem value={8} primaryText="Service" />             
              </SelectField>
            </ColLeft> 
            <ColRight>           
              <SelectField
                value={this.state.deliveryid}
                onChange={this.handleChange}
                style={styles.customWidth}
                underlineStyle={{borderColor: '#ffffff'}}
                iconStyle={{ fill: '#808080' }}
                labelStyle={{ color: '#808080' }}
              >             
                <MenuItem value={9} primaryText="Email" />
                <MenuItem value={10} primaryText="Text" />
              </SelectField>
            </ColRight>          
          </Options>          
          
          <Wrapper>
            <Divider style={{backgroundColor:'#D3D3D3', height: 4}} />          
            <SideNav>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/InvitationSchedule">Invititation</Link>
                </li>
                <li>
                  <Link to="/SurveyConfig">Survey</Link>
                </li>               
              </ul>    
            </SideNav>
            
              <Table style={ styles.configTable }>         
                <TableBody 
                  displayRowCheckbox={false}
                  showRowHover={this.state.showRowHover}
                  stripedRows={this.state.stripedRows}
                >             
                  <TableRow style={{borderColor:'#F5F5F5'}}>                
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="SL - Standard"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>                
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="English"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>               
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>                
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="None"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>                
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="offer" labelPosition="right" style={ styles.block } defaultSelected="yes">
                        <RadioButton style={styles.radioButton}
                          value="yes"
                          label="Yes"
                          iconStyle = { styles.icon }                              
                        />
                        <RadioButton style={ styles.radioButton }
                          value="no"
                          label="No"
                          iconStyle = { styles.icon }             
                        />
                      </RadioButtonGroup>
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>                
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="&nbsp;"                                   
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>              
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Survey Response Feed:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Survey Response Feed" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="responsefeed" labelPosition="right" style={styles.block} defaultSelected="45star">
                        <RadioButton style={styles.radioButton}
                          value="disabled"
                          label="Disabled"
                          iconStyle = { styles.icon }
                        />
                        <RadioButton style={styles.radioButton}
                          value="45star"
                          label="4 &amp; 5 star"
                          iconStyle = { styles.icon }
                        />
                        <RadioButton style={styles.radioButton}
                          value="all"
                          label="All"
                          iconStyle = { styles.icon }
                        />              
                      </RadioButtonGroup></TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Smart Gmail Survey:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Smart Gmail Survey" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="smartgmailsurvey" labelPosition="right" style={styles.block} defaultSelected="no">
                        <RadioButton style={styles.radioButton}
                          value="yes"
                          label="Yes"
                          iconStyle = { styles.icon }
                        />
                        <RadioButton style={styles.radioButton}
                          value="no"
                          label="No"
                          iconStyle = { styles.icon }                              
                        />                                
                      </RadioButtonGroup></TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Collect Review Site Username:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="collectuserename" labelPosition="right" style={styles.block} defaultSelected="no">
                        <RadioButton style={styles.radioButton}
                          value="yes"
                          label="Yes"
                          iconStyle = { styles.icon }     
                        />
                        <RadioButton style={styles.radioButton}
                          value="no"
                          label="No"
                          iconStyle = { styles.icon }                                   
                        />                                
                      </RadioButtonGroup></TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>&nbsp;</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField
                        disabled={true}
                        defaultValue="&nbsp;"                                   
                        underlineShow={false}
                        fullWidth={true}
                      />
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Mazda Brand:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Mazda Brand" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="mazdabrand" labelPosition="right" style={ styles.block } defaultSelected="no">
                        <RadioButton style={ styles.radioButton }
                          value="yes"
                          label="Yes"
                          iconStyle = { styles.icon }   
                        />
                        <RadioButton style={ styles.radioButton }
                          value="no"
                          label="No"
                          iconStyle = { styles.icon }                       
                        />                                
                      </RadioButtonGroup>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Internal Pay:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Coupon URL" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                    <RadioButtonGroup name="internalpay" labelPosition="right" style={ styles.block } defaultSelected="yes">
                      <RadioButton style={ styles.radioButton }
                        value="yes"
                        label="Yes"
                        iconStyle = { styles.icon }   
                      />
                      <RadioButton style={ styles.radioButton }
                        value="no"
                        label="No"
                        iconStyle = { styles.icon }                       
                      />                                
                    </RadioButtonGroup>
                    </TableRowColumn>               
                  </TableRow>
                  
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Positive Thank You Page:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Positive Thank You Page" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                    <TextField style = {{height: 'auto'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={true}
                      />
                    </TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>1 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="Google+ Local (Reviews)"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <TextField style = {{width: '102px', height: 'auto', left: '14px'}}
                        defaultValue="Click - On TY"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                    <FlatButton style={{textAlign: 'right'}} label="&nbsp;" secondary={true} />
                    <FlatButton label="VieW" primary={true} />
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>2 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="Edmunds"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <TextField style = {{width: '102px', height: 'auto', left: '14px'}}
                        defaultValue="Form - On TY"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <FlatButton style={{textAlign: 'right'}} label="Edit" secondary={true} />
                      <FlatButton label="VieW" primary={true} />
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>3 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="Cars.com"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <TextField style = {{width: '102px', height: 'auto', left: '14px'}}
                        defaultValue="Form - Before TY"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <FlatButton style={{textAlign: 'right'}} label="Edit" secondary={true} />
                      <FlatButton label="VieW" primary={true} />
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>4 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="Facebook Reviews"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <TextField style = {{width: '102px', height: 'auto', left: '14px'}}
                      defaultValue="Click - On TY"                  
                      underlineShow={false}
                      fullWidth={false}
                    />
                    <FlatButton style={{textAlign: 'right'}} label="&nbsp;" secondary={true} />
                    <FlatButton label="VieW" primary={true} />
                    </TableRowColumn>                
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.labelColumn }><Label>5 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <TextField style = {{width: 'auto', height: 'auto', left: '45px'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />
                      <FlatButton label="&nbsp;" primary={true} />
                    </TableRowColumn>                
                  </TableRow>
                </TableBody>         
              </Table>
            </Wrapper>                                             
        </form>
      </FlexContainer>
    );
  }
}


/* const mapStateToProps = (state: surveySetup) => ({
    isSurveySetup: state.surveySetup.isSurveySetup
  });
  
export default connect(mapStateToProps)(SurveySetup); */

export default (SurveyConfigurator);
