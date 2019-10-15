import React from 'react'

export default function Footer() {
    return (
        <section className='bg-dark text-white pt-5' id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5 className='text-light'>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5 className='text-light'>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="row justify-content-start col-4">
                        <div className=" justify-content-center">
                            <ul className="list-unstyled list-inline social text-center align-items-top justify-content-start">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p><u><a href="https://www.nationaltransaction.com/">The Rock Company</a></u> Inc. Vietnam.</p>
                        <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">The Rock Company</a></p>
                    </div>

                </div>
            </div>
        </section>
    )
}
