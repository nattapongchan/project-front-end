import React from 'react'

function About() {
    return (
        <>
            {/* <!-- About--> */}
            <section className="about-section mastabout" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <h1 className="mx-auto my-0 text-white text-uppercase">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects-section bg-light">
                <div className="container">
                    {/* <!-- Featured Project Row--> */}
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="" /></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Welcome Travel & Tours</h4>
                                <p className="text-black-50 mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
