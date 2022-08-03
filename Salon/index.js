
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
                    <li><a href=""> <span onMouseEnter={() => setSee(true)}
        onMouseLeave={() => setSee(false)}  ><i class="fa fa-home"></i></span>{see && <span  className="icon-text">Home</span>}</a></li>
                    <li><a href=""> <span onMouseEnter={() => setSeeone(true)}
        onMouseLeave={() => setSeeone(false)}><i class="fa fa-user"></i></span>{seeone && <span className="icon-text">About</span>}</a></li>
                    <li><a href=""> <span onMouseEnter={() => setSee2(true)}
        onMouseLeave={() => setSee2(false)} ><i class="fa fa-gears"></i></span>{see2 && <span className="icon-text">Serives</span>}</a></li>
                    <li><a href=""> <span onMouseEnter={() => setSee3(true)}
        onMouseLeave={() => setSee3(false)}><i class="fa fa-picture-o"></i></span>{see3 && <span className="icon-text">Gallery</span>}</a></li>
                    <li><a href=""> <span onMouseEnter={() => setSee4(true)}
        onMouseLeave={() => setSee4(false)} ><i class="fa fa-phone"></i></span>{see4 && <span className="icon-text">Contacts</span>}</a></li>

                </ul>
    </div>
</div>
    )
  }

//front page


function Front() {
  return (
    <div className="front">
      <h1>Hill's </h1>
      <div>Beauty Salon</div>
      <ul data-aos="zoom-in" className="object">
                           <h2><i class="fa fa-twitter"></i></h2>
                           <h2><i class="fa fa-instagram"></i></h2>
                           {/* <h2><i class="fa fa-envelope"></i></h2> */}
                           <h2><i class="fa fa-phone"></i></h2>
                        </ul>
    </div>
  )
}

//about page
AOS.init();

function About() {
  return (
    <div className="container about">
    <div className="row">
            <div className="innercol1 col-md-7 col-md-offset-1 col-xs-12">
                <div data-aos="flip-right"  class="col col2">
                    <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol2 col-md-3 col-xs-12">
                <div className="col col2">
                  <h1>Our Story</h1>
                    <div>growing up in the hood</div>
                </div>
            </div>
    </div>     
    </div>   
  )
}
//gallery


function Gallery() {
  return (
    <div className="main-gallery">
      <h1>GALLERY</h1>
      <div className="container gallery">
    <div   className="row">
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-down" class="col col2">
                    <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-up" className="col col2">
                  <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-down" className="col col2">
                  <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div  data-aos="fade-up" className="col col2">
                  <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div  data-aos="fade-down" className="col col2">
                  <img src="7175EHtzjhL._SL1500_.jpg"/>
                </div>
            </div>
            <div className="innercol col-md-4 col-xs-12 col-sm-6">
                <div data-aos="fade-up" className="col col2">
                  <img src="7175EHtzjhL._SL1500_.jpg"/>
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
    <div className="main-services">
    <div className="services">
      <div>
        <h1>Services</h1>
      </div>
      <div class="services-list">
      <h3>beard trim</h3>
      <span>#500</span>
      </div>
      <div class="services-list">
      <h3>beard trim</h3>
      <span>#500</span>
      </div>
      <div class="services-list">
      <h3>beard trim</h3>
      <span>#500</span>
      </div>
      <div class="services-list">
      <h3>beard trim</h3>
      <span>#500</span>
      </div>
      <div class="services-list-last">
      <h3>beard trim</h3>
      <span>#500</span>
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
             
             {/* <div className="back">
            <a href="#main"><h4>Back to the top</h4></a>
            <br></br><br></br>
            <div className="design-by">
             <div >Designed and produced by 
               <div >Joel Okebugwu</div>
               </div>
            </div>
            </div> */}
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
                    <p>Adress : 34 unity street ikotun lagos state</p>
                    <p>Phone : 09038245421</p>
                    <p>Email: jeolokebugwu1998@gmali.com</p>
                </div>
            </div>
            <div className="innercol col-md-6 col-xs-6 col-sm-6">
                <div data-aos="fade-right" className=" info col col2">
                  <h3>Opening Hours</h3>
                    <p>Mon-Fri  7am-10pm</p>
                    <p>Saturday  8am-10pm</p>
                    <p>Sunday  8am-11pm</p>
                </div>
            </div>
            
    </div>     
    </div> 
    <div className="back">
            <a href="#main"><h4>Back to the top</h4></a>
            <br></br><br></br>
            <div className="design-by">
             <div >Designed and produced by 
               <div >Joel Okebugwu</div>
               </div>
            </div>
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