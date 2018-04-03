import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
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
  padding-left: 12px;
  padding-right: 12px;
  background-color: #FFFFFF;
`;

const Wrapper = styled.div`
  &.labelColumn {
    background-color: #CCCCCC;
}
`;

const OuterBox = styled.div`  
  border: 1px solid #4D4D4D;
  padding: 5px;      
`;

const InnerBox = styled.div`  
  border: 1px solid #4D4D4D;    
`;

const Row = styled.div`
  flexDirection: row;
  align-items: flex-start;  
  padding: 8px 0 8px 8px;  

  @media (min-width: 1200px) {
    display: flex;
    flexDirection: row;
  }
`;

const Label = styled.label`
  display: inline-flex;
  padding: 5px;
  color: #000;
  font-size: 16px;
`;

const LabelColumn = styled.div`
  flexDirection: column;  
  flex: ${(props) => props.colspan};
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-right: ${(props) => props.last ? '0' : '20px'};
  text-align: left;
  line-height: 24px;
  background-color: #D3D3D3;  
`;

const DataColumn = styled.div`
  flexDirection: column;
  flex: ${(props) => props.colspan};
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-right: ${(props) => props.last ? '0' : '20px'};
  text-align: left;
  line-height: 24px;  
  background-color: #FFFFFF;
`;

/* const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
} */

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

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
    backgroundColor: '#C8C8C8',
    paddingLeft: 0,
    paddingRight: '4px'
  },
  dataColumn: {
    paddingLeft: '18px'
  },
  customWidth: {
    width: 500,
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

class SurveySetup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        value: 1,       
        selected: [],
        data: [],
        page: 0,
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

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
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            style={styles.customWidth}
            underlineStyle={{borderColor: '#000000'}}
            iconStyle={{ fill: '#000000' }}
            labelStyle={{ color: '#000000' }}
          >
            {/* {items} */}
            <MenuItem value={1} primaryText="Gold Coast Cadillac" />
            <MenuItem value={2} primaryText="1st Auto Group" />
            <MenuItem value={3} primaryText="Golden Motors LLC" />
            <MenuItem value={4} primaryText="Baldwin Auto Group" />
            <MenuItem value={5} primaryText="GMC" />
          </SelectField>
          <OuterBox>                            
            <FlatButton label="Settings" />
            <FlatButton label="Templates" />
            <FlatButton label="Responders" primary={true} />
            <FlatButton label="Manual DMS Upload" secondary={true} />
            <FlatButton label="Multi-Family Housing" disabled={true} />                           
            <InnerBox>
              <Row>
                <RaisedButton
                  style={{border: '1px solid #C0C0C0', boxShadow: 0}}                    
                  label="Edit"
                  backgroundColor="#C8C8C8"
                />                    
              </Row>

              <Divider style={{backgroundColor:'#000000'}} />

              <Row>
              <Table height={this.state.height}>         
                <TableBody 
                  displayRowCheckbox={false}
                  showRowHover={this.state.showRowHover}
                  stripedRows={this.state.stripedRows}
                >             
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Configuration Template:</Label><HelpOutline style={styles.iconStyle} tooltip="Configuration Template" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="SL - Standard"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                    <TableRowColumn style={ styles.labelColumn }><Label>Review Surge Status:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Review Surge Status" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="Activate"                                   
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Primary Language:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Primary Language" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="English"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                    <TableRowColumn style={ styles.labelColumn }><Label>Toolbar Survey URL:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="&nbsp;"                                   
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Secondary Language:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn }>
                      <TextField style = {{height: 'auto'}}
                        defaultValue="None"                  
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                    <TableRowColumn style={ styles.labelColumn }><Label>Review Us Widget URL:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="&nbsp;"                                   
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Display Offer:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} /></TableRowColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Surge RL Prospects:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="surgerlprospects" labelPosition="right" style={ styles.block } defaultSelected="yes">
                        <RadioButton style={ styles.radioButton }
                          value="yes"
                          label="Yes" 
                          iconStyle = { styles.icon }                             
                        />
                        <RadioButton style={ styles.radioButton }
                          value="surgerlprospects"
                          label="No"
                          iconStyle = { styles.icon }
                        />
                      </RadioButtonGroup>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableRowColumn style={ styles.labelColumn }><Label>Coupon URL:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Coupon URL" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="&nbsp;"                                   
                        underlineShow={false}
                        fullWidth={true}
                    /></TableRowColumn>
                    <TableRowColumn style={ styles.labelColumn }><Label>Surge Type:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Surge Type" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn }>
                      <Checkbox style={ styles.checkbox }
                        label="New"
                        iconStyle = { styles.icon }
                      />
                      <Checkbox style={ styles.checkbox }
                        label="Service"
                        checked={this.state.checked}                            
                        iconStyle = { styles.icon }
                      />
                      <Label>Used:</Label>
                      <RadioButtonGroup name="surgetype" labelPosition="right" style={styles.block} defaultSelected="none">
                        <RadioButton style={ styles.radioButton }                              
                          value="all"
                          label="All"
                          iconStyle = { styles.icon }
                        />
                        <RadioButton style={ styles.radioButton }
                          value="cpo"
                          label="CPO"
                          iconStyle = { styles.icon }                              
                        />
                        <RadioButton style={styles.radioButton}
                          value="none"
                          label="None"
                          iconStyle = { styles.icon }
                        />              
                      </RadioButtonGroup>
                    </TableRowColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Surge Delay: Service</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Surge Delay: Service" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField
                        defaultValue="0 days"                                   
                        underlineShow={false}
                        fullWidth={true}
                      />                
                    </TableRowColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Surge Delay: Sales</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Surge Delay: Sales" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{height: 'auto'}}
                        defaultValue="0 days"                                   
                        underlineShow={false}
                        fullWidth={true}
                      />                
                    </TableRowColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Survey Reminder Email:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Survey Reminder Email" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField
                        defaultValue="0 days"                                   
                        underlineShow={false}
                        fullWidth={true}
                      />                
                    </TableRowColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>DMS File Received:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="DMS File Received" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField
                        defaultValue="11-10-2017"                                   
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
                    <TableRowColumn style={ styles.labelColumn }><Label>DMS Feed:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="DMS Feed" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="dmsfeed" labelPosition="right" style={ styles.block } defaultSelected="dmi">
                        <RadioButton style={ styles.radioButton }
                          value="dmi"
                          label="DMI"
                          iconStyle = { styles.icon }    
                        />
                        <RadioButton style={ styles.radioButton }
                          value="gmdds"
                          label="GM DDS"
                          iconStyle = { styles.icon }    
                          
                        />
                        <RadioButton style={ styles.radioButton }
                          value="auth"
                          label="Auth"
                          iconStyle = { styles.icon }                              
                        />
                        <RadioButton style={ styles.radioButton }
                          value="manual"
                          label="Manual"
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Thank You Page Language:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Thank You Page Language" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="typl" labelPosition="right" style={ styles.block } defaultSelected="default">
                        <RadioButton style={ styles.radioButton }
                          value="default"
                          label="Default"
                          iconStyle = { styles.icon }    
                        />
                        <RadioButton style={ styles.radioButton }
                          value="custom"
                          label="Custom"
                          iconStyle = { styles.icon }                                  
                        />                                                      
                      </RadioButtonGroup>               
                    </TableRowColumn>
                  </TableRow>
                  <TableRow style={{borderColor:'#F5F5F5'}}>
                    <TableHeaderColumn colSpan="4" tooltip="Dealer Review Sites" style={styles.tableHeader}>
                      Dealer Review Sites<HelpOutline color='#FFFFFF' style={{position:'relative', left:'5px', width:'16px', height:'16px'}} tooltip="Dealer Review Sites" />
                    </TableHeaderColumn>
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
                    <TableRowColumn style={ styles.labelColumn }><Label>Negative Thank You Page:</Label><HelpOutline color='#4D4D4D' style={styles.iconStyle} tooltip="Negative Thank You Page" /></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <RadioButtonGroup name="ntyp" labelPosition="right" style={ styles.block } defaultSelected="no">
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
                    <TableRowColumn style={ styles.labelColumn }><Label>1 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />             
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
                    <TableRowColumn style={ styles.labelColumn }><Label>2 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />             
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
                    <TableRowColumn style={ styles.labelColumn }><Label>3 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />             
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
                    <TableRowColumn style={ styles.labelColumn }><Label>4 Review Site:</Label></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}                            
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />             
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
                    <TableRowColumn style={ styles.labelColumn }></TableRowColumn>
                    <TableRowColumn style={ styles.dataColumn } >
                      <TextField style = {{width: 'auto', height: 'auto'}}
                        disabled={true}
                        defaultValue="&nbsp;"                  
                        underlineShow={false}
                        fullWidth={false}
                      />             
                    </TableRowColumn>
                  </TableRow>
                </TableBody>         
              </Table>
            </Row>  
          </InnerBox>     
        </OuterBox>              
        </form>
      </FlexContainer>
    );
  }
}


/* const mapStateToProps = (state: surveySetup) => ({
    isSurveySetup: state.surveySetup.isSurveySetup
  });
  
export default connect(mapStateToProps)(SurveySetup); */

export default (SurveySetup);
