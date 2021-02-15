import React, { useState, useEffect } from 'react';
import CardTours from '../Card/CardTours';
import { data } from '../DataFake/DataHotels';

function Hotels() {
    const [dataTours, setDataTours] = useState([])

    useEffect(() => {
        setDataTours(data);
    }, [dataTours])
    return (
        <>
            <section className="hotels-section" id="hotels">
                <div>
                    <span>Special Offers</span>
                    <h2><strong>Popular</strong> Hotels & Rooms</h2>
                    <div className="row">
                        {
                            data.map(function(item, i){
                                return <CardTours key={i} data={item} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hotels
