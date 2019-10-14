import React from 'react'

export default function Footer() {
    return (
        <section className='bg-danger text-white pt-5' id="footer">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5 className='text-light'>Quick links</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5 className='text-light'>Quick links</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
                        </ul>
                    </div>
                    <div class="row justify-content-start col-4">
                        <div class=" justify-content-center">
                            <ul class="list-unstyled list-inline social text-center align-items-top justify-content-start">
                                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p><u><a href="https://www.nationaltransaction.com/">The Rock Company</a></u> Inc. Vietnam.</p>
                        <p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">The Rock Company</a></p>
                    </div>

                </div>
            </div>
        </section>
    )
}
