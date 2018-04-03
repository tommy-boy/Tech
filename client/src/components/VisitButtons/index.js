import React from 'react';
import VisitFacebookButton from '~/VisitFacebookButton'
import VisitTwitterButton from '~/VisitTwitterButton'
import VisitInstagramButton from '~/VisitInstagramButton'

class VisitButtons extends React.Component {
  
  render() {

    return (
        <div>
            <VisitTwitterButton />
            <VisitFacebookButton />
            <VisitInstagramButton />
        </div>
    );
  }
}

export default (VisitButtons)