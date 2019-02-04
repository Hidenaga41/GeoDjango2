import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { replace } from 'react-router-redux';
import fetch from 'cross-fetch';
import 'babel-polyfill';


const API_URL = 'https://api-tokyochallenge.odpt.org/api/v4/odpt:BusstopPole?odpt:operator=odpt.Operator:Toei&acl:consumerKey='
const API_ID = '69d84cc5b4f16e012c1835f1800d2d94f4dd7f1b6933f74e5bb3ceeec697cc38'
const BUS_API = 'http://127.0.0.1:8000/api/busstop/?dist=1000&point=139.7370859,35.7169552'

//start request
const startRequest = id => ({
    type: "START_REQUEST",
    payload: { id },
});

//receivedata
const receiveData = (id, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { id, error, response },
});

//finish request
const finishRequest = id => ({
    type: 'FINISH_REQUEST',
    payload: { id },

});

//get bus pole data from odpt API
export const fetchMed = id => {
    //use redux-thunk to do asynchronous processing
    return async (dispatch, getState) => {
        //idに対応する
        const categories = getState().json.categories;
        console.log(categories)
        const category = categories.find(category => (category.id === id))
        console.log(category);



        //dispatch に渡す
        dispatch(startRequest(category));
        console.log(dispatch);

        //クエリ用にAPI_IDとidを整形
        const queryString = qs.stringify({
            appid: API_ID,
            category_id: id,
        });
        console.log(queryString);


        //try {
        const responce = await fetch("https://api-tokyochallenge.odpt.org/api/v4/odpt:Bus?odpt:operator=odpt.Operator:Toei&acl:consumerKey=69d84cc5b4f16e012c1835f1800d2d94f4dd7f1b6933f74e5bb3ceeec697cc38");


        const data = await responce.json();
        //const json_data = await fetch('http://127.0.0.1:8000/api/facility/?dist=1000&point=140.9278,41.9582', {
        //    method: "GET",
        //    headers: headers
        //});

        console.log(responce)

        dispatch(receiveData(id, null, data));

        //        } catch (err) {
        //          dispatch(receiveData(id, err));
        //    }
        dispatch(finishRequest(id));
    };
};


