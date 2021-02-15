import React, { useState, useEffect } from 'react';
import CardTours from '../Card/CardTours';
import { data } from '../DataFake/DataTours';

function Tours() {
    const [dataTours, setDataTours] = useState([])

    useEffect(() => {
        setDataTours(data);
    }, [dataTours])
    return (
        <>
            <section className="tours-section bg-light" id="tours" name="tours">
                <div>
                    <span>Special Offers</span>
                    <h2 className="tours-h4"><strong>Top</strong> Tour Packages</h2>
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

export default Tours
