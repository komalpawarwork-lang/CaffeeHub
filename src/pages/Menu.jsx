function Menu() {

    return (

        <div className="container mt-5">

            <h1 className="text-center mb-4">Our Menu</h1>

            <p className="text-center mb-5">
                From classic espresso to refreshing cold brews, we craft every drink with care
                using freshly roasted beans.
            </p>



            <h3 className="mb-3">Hot Coffee</h3>

            <div className="row">

                <div className="col-md-3">
                    <div className="card">
                        <img src="/images/espresso.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Espresso</h5>
                            <p>Strong and rich classic coffee shot.</p>
                            <p><b>₹120</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <img src="/images/cappuccino.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Cappuccino</h5>
                            <p>Espresso topped with steamed milk foam.</p>
                            <p><b>₹150</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <img src="/images/latte.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Latte</h5>
                            <p>Smooth coffee with creamy milk.</p>
                            <p><b>₹160</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <img src="/images/mocha.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Mocha</h5>
                            <p>Chocolate flavored espresso drink.</p>
                            <p><b>₹170</b></p>
                        </div>
                    </div>
                </div>

            </div>





            <h3 className="mt-5 mb-3">Cold Coffee</h3>

            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/chilledcoffee.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Classic Cold Coffee</h5>
                            <p>Chilled coffee blended with milk.</p>
                            <p><b>₹180</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/CaramelFrappé.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Caramel Frappé</h5>
                            <p>Cold coffee with caramel sweetness.</p>
                            <p><b>₹200</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/chocolate.jpg" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5>Chocolate Frappe</h5>
                            <p>Creamy cold coffee with chocolate.</p>
                            <p><b>₹210</b></p>
                        </div>
                    </div>
                </div>

            </div>





            <h3 className="mt-5 mb-3">Snacks</h3>

            <div className="row">

                <div className="col-md-4">
                    <div className="card p-3 text-center">
                        <img src="/images/croissant.jpg" className="card-img-top" />
                        <h5>Chocolate Croissant</h5>
                        <p>Fresh baked buttery croissant.</p>
                        <p><b>₹120</b></p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3 text-center">
                        <img src="/images/Muffin.jpg" className="card-img-top" />
                        <h5>Blueberry Muffin</h5>
                        <p>Soft muffin with blueberry flavor.</p>
                        <p><b>₹140</b></p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3 text-center">
                        <img src="/images/sandwitch.jpg" className="card-img-top" />
                        <h5>Grilled Sandwich</h5>
                        <p>Crispy sandwich with fresh veggies.</p>
                        <p><b>₹150</b></p>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default Menu;