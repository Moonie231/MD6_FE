export default function RegisterMerchant(){
    return(
        <>
            <body>
            <section className="h-100 gradient-form" style={{backgroundColor:''}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="/img/logo.png" alt=""/>
                                                <h4 className="mt-1 mb-5 pb-1"></h4>
                                            </div>
                                            <form>
                                                <p>Please register to create an account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="username" className="form-control"
                                                           placeholder="Username"/>
                                                    <label className="form-label" htmlFor="username">Username</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control"
                                                           placeholder="Password"/>
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="name" className="form-control"
                                                           placeholder="Name"/>
                                                    <label className="form-label" htmlFor="name">Name</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="address" className="form-control"
                                                           placeholder="Address"/>
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="tel" id="phone" className="form-control"
                                                           placeholder="Phone number"/>
                                                    <label className="form-label" htmlFor="phone">Phone number</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button">Register
                                                    </button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Already have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">Log in</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <img style={{width:'460px',height:'100%'}} src="" alt=""/>
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
     </>
    )
}