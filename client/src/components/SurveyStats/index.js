import React from 'react';
import Widget from '~/Widget';
//import WidgetHeaders from '~/WidgetHeaders'
import styled from 'styled-components';

const WidgetPanelHeader = styled.div`
    background: transparent;
    border-radius: 0px;
    padding: 4px 20px 5px 20px;
    position: relative;
    z-index: 3;
    min-height: 40px;
`;

const WidgetHeaderDivider = styled.div`
    border-bottom: 4px #dd6000 solid;
    height: 4px;
    margin-top: 2px;
`;

const TopRight = styled.span`
    position: absolute !important;
    top: 1px;
    right: 0;
`;

const TopLeft = styled.span`
    position: absolute !important;
    top: 0;
    left: 0;
`;

const Title = styled.h1`
    font-size: 1.0em;
    fontFamily: Roboto;
    text-align: left;
    color: #333333;
    marginLeft: 0;
    marginTop: 5px;
    textAlign: left;   
    padding-left: 1%;
`;

const WidgetMedium = styled.div`
width: 600px;
height: 400px;
`;

const titleBarData = {
    title: 'SURVEY STATS',
    tooltips: [
        {
            type: 'Question Mark',
            tooltipText: 'Data from Review Surge™ surveys'
        },
        
    ]
}

function SurveyStats (props) {
    return (

        <Widget size='medium'>
            <WidgetHeaders {...titleBarData}/>
        </Widget>

    )
}

export default SurveyStats