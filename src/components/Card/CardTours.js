import React, { useState, useEffect } from 'react';
import { Card, Rate } from 'antd';

const { Meta } = Card;

function CardTours(props) {
    const [dataTours, setDataTours] = useState([])

    useEffect(() => {
        setDataTours(props.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <Card
                    style={{ width: '100%', marginBottom: 30 }}
                    cover={<img alt="example" height={300} src={dataTours.image} />}
                >
                    <Meta title={<h5>{dataTours.title}</h5>} description={
                    <div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <Rate disabled value={dataTours.rate}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-lg-12">
                                <span className="rate-span">{dataTours.rating} Rating</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-lg-12">
                                <p className="card-meta-description">{dataTours.description}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <h5 style={{ color: "#40a9ff" }}>${dataTours.price}</h5>
                            </div>
                            <div className="col-md-10 col-lg-8 mr">
                                <span className="days-span">{dataTours.dayofstay}</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-10 col-lg-12 mx-auto text-center">
                            <button className="btn btn-primary mx-auto btn-booknow" type="submit">Book Now</button>
                            </div>
                        </div>
                    </div>
                    } />
                </Card>
            </div>
        </>
    )
}

export default CardTours
