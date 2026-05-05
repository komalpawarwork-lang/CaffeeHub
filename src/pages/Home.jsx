function Home() {

    return (

        <div>

            <section className="hero text-center text-white">

                <div className="container">

                    <h1>Welcome to CoffeeHub</h1>

                    <p>
                        Where every cup tells a story. Freshly brewed coffee,
                        warm atmosphere, and moments worth sharing.
                    </p>

                    <a href="/menu" className="btn btn-light mt-3">
                        Explore Our Coffee
                    </a>

                </div>

            </section>



            <section className="container mt-5">

                <div className="row align-items-center">

                    <div className="col-md-6">

                        <img src="/images/cafe.jpg" className="img-fluid rounded" />

                    </div>

                    <div className="col-md-6">

                        <h2>Our Story</h2>

                        <p>CoffeeHub started as a small dream between friends
                            who believed that coffee is more than a drink —
                            it's an experience.</p>

                        <p>We carefully select premium beans and craft each cup
                            to bring comfort, warmth, and happiness to our guests.</p>

                    </div>

                </div>

            </section>


            <section className="container mt-5">

                <h2 className="text-center mb-4">Customer Favorites</h2>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card">

                            <img src="/images/cappuccino.jpg" className="card-img-top" />

                            <div className="card-body">

                                <h5>Cappuccino</h5>

                                <p>Rich espresso with steamed milk foam.</p>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card">

                            <img src="/images/latte.jpg" className="card-img-top" />

                            <div className="card-body">

                                <h5>Latte</h5>

                                <p>Smooth creamy coffee loved by everyone.</p>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card">

                            <img src="/images/coldcoffee.jpg" className="card-img-top" />

                            <div className="card-body">

                                <h5>Cold Coffee</h5>

                                <p>Perfect chilled drink for warm afternoons.</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            <section className="reviews text-center">

                <div className="container">

                    <h2>What Our Customers Say</h2>

                    <div className="row mt-4">

                        <div className="col-md-4">

                            <div className="review-box">

                                <p>
                                    "Best coffee I've had in years. The atmosphere
                                    is cozy and welcoming."
                                </p>

                                <h6>— Riya Sharma</h6>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="review-box">

                                <p>
                                    "A perfect place to relax and enjoy
                                    a great cup of coffee."
                                </p>

                                <h6>— Rahul Mehta</h6>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="review-box">

                                <p>
                                    "Delicious drinks and amazing service.
                                    Highly recommended!"
                                </p>

                                <h6>— Ananya Patel</h6>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="container mt-5">

                <h2 className="text-center mb-4">Coffee Moments</h2>

                <div className="row">

                    <div className="col-md-4">
                        <img src="/images/latte.jpg" className="img-fluid rounded" />
                    </div>

                    <div className="col-md-4">
                        <img src="/images/cappuccino.jpg" className="img-fluid rounded" />
                    </div>

                    <div className="col-md-4">
                        <img src="/images/coldcoffee.jpg" className="img-fluid rounded" />
                    </div>

                </div>

            </section>

        </div>

    )

}

export default Home;