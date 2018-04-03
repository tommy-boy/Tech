import 'es6-promise/auto';
import fetch from 'isomorphic-fetch'
const API_URL = 'http://api.das.io/v1/account/'; //entity

class EntityAPI {  
    static getEntity(entityId) {
        let url = `${API_URL}${entityId}`;
        return fetch(url, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            },
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

export default EntityAPI;  