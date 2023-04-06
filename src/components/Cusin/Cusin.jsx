import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && < ring={ring}></>}
        </div>
    );
};

export default Cusin;