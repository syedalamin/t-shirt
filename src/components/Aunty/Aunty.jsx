import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cusin>Shuvo</Cusin>
                <Cusin hasFriend={true} ring={ring}>Faysal</Cusin>
            </section>
        </div>
    );
};

export default Aunty;