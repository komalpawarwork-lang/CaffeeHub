function Contact(){

return(

<div className="container mt-5">

<h2>Contact Us</h2>

<form>

<input className="form-control mb-3" placeholder="Name"/>

<input className="form-control mb-3" placeholder="Email"/>

<textarea className="form-control mb-3" placeholder="Message"></textarea>

<button className="btn btn-dark">Send Message</button>

</form>

</div>

)

}

export default Contact;