import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'https://api-tokyochallenge.odpt.org/api/v4/odpt:BusstopPole?odpt:operator=odpt.Operator:Toei&acl:consumerKey='
const API_ID = '69d84cc5b4f16e012c1835f1800d2d94f4dd7f1b6933f74e5bb3ceeec697cc38'
const BUS_API = 'http://127.0.0.1:8000/api/busstop/?dist=1000&point=139.7370859,35.7169552'

const startRequest = id => ({
    type: "START_REQUEST",
    payload: (id),
});

const receiveData = (id, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { id, error, response },
});

const finishRequest = id => ({
    type: 'FINISH_REQUEST',
    payload: { id },

});

export const fetchMed = id => {
    //use redux-thunk to do asynchronous processing
    return async dispatch => {
        dispatch(startRequest(id));

        const queryString = qs.stringify({
            appid: API_ID,
            category_id: id,
        });

        try {
            const responce = await fetchJsonp(`${API_URL}?${API_ID}`)
            const data = await responce.json();
            dispatch(receiveData(id, null, data));

        } catch (err) {
            dispatch(receiveData(id, err));
        }
        dispatch(finishRequest(id));
    };
};


