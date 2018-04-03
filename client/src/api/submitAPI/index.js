import 'es6-promise/auto'
import fetch from 'isomorphic-fetch'

const API_URL_PREFIX = 'http://gateway-dev.das.io/clients/';
const API_URL_SUFFIX = '/configuration/surveys';
const jwt = 'ODFjMmI0ODItYWYzMC00ODdjLTg4ZjItNTUzZmQxZjljMjM1';

class SubmitAPI {
    
    static requestHeaders() {
        return { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AUTHORIZATION': `Bearer ${jwt}`
        }
    }

    static postSurveyData(surveyId, formData) { 
        const headers = this.requestHeaders();
        const request = new Request(`${API_URL_PREFIX}${surveyId}${API_URL_SUFFIX}`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            formData: formData,
            })
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

export default SubmitAPI; 