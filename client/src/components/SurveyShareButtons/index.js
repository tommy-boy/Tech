import React from 'react';
import ShareEdmundsButton from '~/SurveyShareEdmunds'
import ShareFacebookButton from '~/SurveyShareFacebook'
import ShareGoogleButton from '~/SurveyShareGoogle'
import ShareCarsButton from '~/SurveyShareCars'

class ShareButtons extends React.Component {
  
  render() {

    return (
        <div>
            <ShareEdmundsButton />
            <ShareFacebookButton />
            <ShareGoogleButton />
            <ShareCarsButton />
        </div>
    );
  }
}

export default (ShareButtons)