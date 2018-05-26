import * from './actionTypes';

function url() {
    return // sample www.url.com
}

export function receiveAction(json){
    return {type: types.RECEIVE_ACTION, action: json.action };
}

export function fetchAction() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receiveAction(json)));
    };
};