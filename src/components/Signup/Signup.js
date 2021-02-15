import React from 'react'

function Signup() {
    return (
        <>
            {/* <!-- Signup--> */}
            <section className="signup-section" id="signup">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                            <form className="form-inline d-flex">
                                <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                                <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
