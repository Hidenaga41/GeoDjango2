import React from 'react';
import PropTypes from 'prop-types';

export default function Bus({ busRoute }) {
    return (
        <div>
            <h2>busRoute-no-genzaiti</h2>
            <p>keitou:{busRoute}</p>

        </div>
    )


}
Bus.propTypes = {
    busRoute: PropTypes.string
};
Bus.defaultProps = {
    busRoute: "odpt.Busroute:Toei.To02"
};