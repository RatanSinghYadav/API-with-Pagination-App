import React, { useState } from 'react';
import './style.css';

function Home({data}) {
    const [show, hide] = useState(false);


    return (
        <div>
            {
                data.map((e, id) => {
                    return (
                        <>
                            <div className="container mt-5 main_box" >
                                <div className="outer_box">
                                    <div className="row" >
                                        <div className="col-2">Hello Travels</div>
                                        <div className="col-2"><h5>Contact</h5> {e.name}</div>
                                        <div className="col-2"><h5>City</h5> {e.address.city}</div>
                                        <div className="col-2"><h5>Company</h5> {e.company.name}</div>
                                        <div className="col-2"><button onClick={() => hide(!show)} className="show_btn">Show Details</button></div>
                                    </div>
                                </div>
                                {
                                    show && 
                                    <div className="inner_box">
                                        <div>
                                            <h6>Description</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam corporis doloremque iste libero minus officia saepe sequi.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-6"><h6>Contact Person</h6>{e.name}</div>
                                            <div className="col-6"><h6>Address</h6>{e.address.street}</div>
                                            <div className="col-6"><h6>Website</h6>{e.website}</div>
                                            <div className="col-6"><h6>City</h6>{e.address.city}</div>
                                            <div className="col-6"><h6>Emails</h6>{e.email}</div>
                                            <div className="col-6"><h6>Zipcode</h6>{e.address.zipcode}</div>
                                            <div className="col-6"><h6>Phones</h6>{e.phone}</div>
                                            <div className="col-6"><h6>Company</h6>{e.company.name}</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Home;