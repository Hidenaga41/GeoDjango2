const getMedical = response => {
    const medical = [];
    const itemLength = response.Resultset.totalResultsReturned
    for (let index = 0; index < itemLength; index++) {
        const item = response.Resultset['0'].Result[index + ''];
        medical.push({
            code: item.Code,
            name: item.Name,
            url: item.Url,
        })
    }
    return ranking;
};


const initialState = {
    id: undefined,
    medical: undefined,
    error: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                category: action.payload.category,
                medical: undefined,
                error: false
            };

        case 'RECEIVE_DATA':
            return action.payload.error
                ? { ...state, error: true }
                : {
                    ...state,
                    medical: getMedical(action.payload.response)
                };

        default:
            return state;

    }
}