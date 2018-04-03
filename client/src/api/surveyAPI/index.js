import 'es6-promise/auto'
import fetch from 'isomorphic-fetch'

const API_URL_PREFIX = 'http://gateway-dev.das.io/clients/';
const API_URL_SUFFIX = '/configuration/surveys';
const jwt = '';

class SurveyAPI {
    
    static requestHeaders() {
        return { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }

    static getSurveyConfig(surveyId) {         
        const headers = this.requestHeaders();               
        const request = new Request(`${API_URL_PREFIX}${surveyId}${API_URL_SUFFIX}`, {
          method: 'GET',
          headers: headers,
          mode: 'cors',
        });         
        return fetch(request, {
        }).then(function(response) {
            if (response.status >= 400) {               
                throw new Error("Bad response from server");
            } 
            return response.json();
        })     
        .catch((error) => {
            console.error(error);
        });
    }
}

export default SurveyAPI;  