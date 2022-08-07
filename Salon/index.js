
const Navbar = () => {
    const [see, setSee] = React.useState(false)
    const [seeone, setSeeone] = React.useState(false)
    const [see2, setSee2] = React.useState(false)
    const [see3, setSee3] = React.useState(false)
    const [see4, setSee4] = React.useState(false)
    return (
   
    <div id="sidebar" role="navigation">

    <div id="sidebar-nav" className="collapse-in navbar-collapse">
                <ul class="nav nav-stacked">
                    <li><a href="#main"> <span onMouseEnter={() => setSee(true)}
        onMouseLeave={() => setSee(false)}  ><i class="fa fa-home"></i></span>{see && <span  className="icon-text">Home</span>}</a></li>
                    <li><a href="#about"> <span onMouseEnter={() => setSeeone(true)}
        onMouseLeave={() => setSeeone(false)}><i class="fa fa-user"></i></span>{seeone && <span className="icon-text">About</span>}</a></li>
                    <li><a href="#services"> <span onMouseEnter={() => setSee2(true)}
        onMouseLeave={() => setSee2(false)} ><i class="fa fa-gears"></i></span>{see2 && <span className="icon-text">Serives</span>}</a></li>
                    <li><a href="#gallery"> <span onMouseEnter={() => setSee3(true)}
        onMouseLeave={() => setSee3(false)}><i class="fa fa-picture-o"></i></span>{see3 && <span className="icon-text">Gallery</span>}</a></li>
                    <li><a href="#contacticon"> <span onMouseEnter={() => setSee4(true)}
        onMouseLeave={() => setSee4(false)} ><i class="fa fa-phone"></i></span>{see4 && <span className="icon-text">Contacts</span>}</a></li>

                </ul>
    </div>
</div>
    )
  }

//front page


function Front() {
  return (
    <div id="main" className="front">
      <h1>Maverick's </h1>
      <div>Beauty Salon</div>
      <ul data-aos="zoom-in" className="icon">
                           <a href="https://wa.me/2348183250984"><h2><i class="fa fa-whatsapp"></i></h2></a>
                           <a href="https://twitter.com/Maverick_Cave?t=9dD69iFRSqfofc8Jf2UcPw&s=08"><h2><i class="fa fa-twitter"></i></h2></a>
                           {/* <h2><i class="fa fa-envelope"></i></h2> */}
                           <a href="tel:+2348183250984"><h2><i class="fa fa-phone"></i></h2></a>
                        </ul>
    </div>
  )
}

//about page
AOS.init();

function About() {
  return (
    <div id="about" className="container about">
    <div className="row">
            <div className="innercol1 col-md-7 col-md-offset-1 col-xs-12">
                <div data-aos="flip-right"  class="col col2">
                    <img src="IMG-20220802-WA0003.jpg"/>
                </div>
            </div>
            <div className="innercol2 col-md-3 col-xs-12">
                <div className="col col2">
                  <h1>Our Story</h1>
                    <div>Growing up in the hood showed me the significance of a Saloon, like a field for kids to play. The Saloon is a pillar of the neighbourhood, impacting the kid and adult in a positive way has been the goal ever since. </div>
                    <div>Not alot of people recognize the power that comes with beign able to modify one's look, it's like a way to tap into their world and when you can tap into a world you can effect change.</div>
                </div>
            </div>
    </div>     
    </div>   
  )
}
//gallery


function Gallery() {
  return (
    <div id="gallery" className="main-gallery">
      <h1>GALLERY</h1>
      <div className="container gallery">
    <div   className="row">
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-down" class="col col2">
                    <img src="IMG-20220802-WA0003.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-up" className="col col2">
                  <img src="IMG-20220803-WA0002.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-down" className="col col2">
                  <img src="IMG-20220804-WA0031.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div  data-aos="fade-up" className="col col2">
                  <img src="IMG-20220802-WA0003.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div  data-aos="fade-down" className="col col2">
                  <img src="IMG-20220803-WA0002.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-up" className="col col2">
                  <img src="IMG-20220804-WA0031.jpg"/>
                </div>
            </div>
    </div>     
    </div> 
    </div>
  )
}

//services


function Services() {
  return (
    <div id="services" className="main-services">
    <div className="services">
      <div>
        <h1>Services</h1>
      </div>
      <div class="services-list">
      <h3>Hairtyling</h3>
      <span>#2000</span>
      </div>
      <div class="services-list">
      <h3>Pedicure and Manicure</h3>
      <span>#5000</span>
      </div>
      <div class="services-list">
      <h3>Exfoliation</h3>
      <span>#4000</span>
      </div>
      <div class="services-list">
      <h3>Gaming</h3>
      <span>#1000</span>
      </div>
      <div class="services-list-last">
      <h3>Tattoo</h3>
      <span>#20000+</span>
      </div>
      </div>
    </div>
  )
}


//contacts


function Contacts() {
  return (
           <div id ="contacticon" className="footer">
             <h2 className="footer-title">Contacts</h2>
             
             <div className="footer-div newobject">
             <form data-aos="zoom-in" className="form">
                 <input type="text" placeholder="Your name" />
                 <div className="input">
                     <input type="email" placeholder="Your email" />
                     <input type="text" placeholder="Your phone number" />
                 </div>
                 <textarea rows="6" cols="50" placeholder="Your message"></textarea>
                 <button data-aos="zoom-in" className = "btn btn-foot">Book</button>
               </form>
            </div>
           </div>
  )
}

//contact info


function Info() {
  return (
    <div>
      <div className="container gallery">
    <div className="row">
            <div className="innercol col-md-6 col-xs-6 col-sm-6">
                <div data-aos="fade-left"class=" info col col2">
                <h3>Say Hello</h3>
                    <p>Adsress : 34 Brank Street, Choba, Port-Harcourt  state</p>
                    <p>Phone : 08183250984</p>
                    <p>Email: maverickcave@gmail.com</p>
                </div>
            </div>
            <div className="innercol col-md-6 col-xs-6 col-sm-6">
                <div data-aos="fade-right" className=" info col col2">
                  <h3>Opening Hours</h3>
                    <p>Mon-Fri  7am-10pm</p>
                    <p>Saturday  8am-10pm</p>
                    <p>Sunday  8am-11pm</p>
                    <ul data-aos="zoom-in" className="footer-icon">
                           <a href="https://wa.me/2348183250984"><h2><i class="fa fa-whatsapp"></i></h2></a>
                           <a href="https://twitter.com/Maverick_Cave?t=9dD69iFRSqfofc8Jf2UcPw&s=08"><h2><i class="fa fa-twitter"></i></h2></a>
                           <a href=""><h2><i class="fa fa-envelope"></i></h2></a>                         <a href="tel:+2348183250984"><h2><i class="fa fa-phone"></i></h2></a>
                        </ul>
                </div>
            </div>
            
    </div>     
    </div> 
    <div className="back">
            <a href="#main"><h4>Back to the top</h4></a>
            </div>
            </div>
  )
}









//main app component
const App = () => {
    return (
      <div>
      <Navbar/>
        // <Front/>
        //  <About/>
        // <Services/>
        // <Gallery/>
        // <Contacts/>
        //   <Info/>
      </div>
    )
  }
  
  
  ReactDOM.render(<App/>, document.getElementById("root"))