import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'

const ProgressBar=({percentage, style}) => (
    <React.Fragment>
        <div className="ProgressBarContainer" style={{...style}}>
        <div className="ProgressBar" style={{width: `${percentage}%`}}>
        </div>
        </div>
        <span className="PercentageText">
            {percentage}%
        </span>
    </React.Fragment>
);

ProgressBar.propTypes ={
    percentage: PropTypes.number.isRequired,
    style: PropTypes.object,
}

export default ProgressBar;