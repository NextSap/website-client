import React from 'react';

const Spacer = ({backgroundColor, marginTop, marginBottom}) => {
    return (
        <div className={backgroundColor+" "+marginTop+" "+marginBottom}>

        </div>
    );
};

export default Spacer;