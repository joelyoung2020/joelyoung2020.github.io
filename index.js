

//nav bar components
const Navbar = () => {
    return (
      <nav className="navbar ">
          <div class="container-fluid">
              <div class="navbar-header">
                  <button data-toggle="collapse" data-target="#demo" class="navbar-toggle" ><span class="glyphicon glyphicon-list"></span></button>
                  
                  <a className="navbar-brand" href="#main"><img src="Capture.PNG" className="logo"/></a><span className="navbar-brand letter"></span>
              </div>
              <div id="demo" class="collapse-in navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li class="active"><a href="#main">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact me</a></li>
              </ul>
          </div>
          </div>
      </nav>
    )
  }
  

//Intro div components
AOS.init();

const Intro = () => {
  return (
    <div id="main" class="container">
    <div class=" maincol row">
    <div class="col-md-6 col-xs-12">
    
       <div className="image img-responsive">
       <a href="#portfolio"><button class="caption" data-aos="flip-right" className="img-btn  btn btn-primary">Check me out</button></a>
           <img className="img-responsive" src="5e819dd760bb1a623bbc6dae.png"/>
        </div>
        </div>
        <div class="col-md-6 col-xs-12">
        <div className="intro">
           <div class="main">
              <div class="box" id="box1">HELLO! I'm Joel</div>
           </div>
           <h3>-A front web developer with experience in React and Bootstrap. My expertise is buliding responsive webiste with reusable component, I strive to make the web a  beautiful place</h3>
           <div className="intro-cont">
              <ul className="object">
                 <h2><a href="https://www.linkedin.com/in/joel-okebugwu-6762b3240/"><i class="fa fa-linkedin"></i></a></h2>
                 <h2><a href="https://www.github.com/joelyoung2020"><i class="fa fa-github"></i></a></h2>
                 <h2><a href="https://www.instagram.com/jayy_young?igshid=YmMyMTA%22M%22Y="><i class="fa fa-instagram"></i></a></h2>
                 <h2><a href="mailto:joelokebugwu1998@gmail.com"><i class="fa fa-envelope"></i></a></h2>
                 <h2><a href="tel:+2349038245421"><i class="fa fa-phone"></i></a></h2>
              </ul>
           </div>
           <h1 class="moving">
   <span class="choice">M</span>
  <br></br>
  <div class="message">
    <div class="word1">beautiful</div>
    <div class="word2">interactive</div>
    <div class="word3">responsive</div>
    <div class="word4">low maintaince</div>
  </div>
</h1>
        </div>
        </div>
        
        </div>
    </div>
  )
}


//my image component
const MyImage = () => {
  return (
    
    <div id="about" data-aos="zoom-in" class="my-image">
        <h1>About me</h1>
        <img src="joel.jpg" />
    </div>
  )
}


//about component
const About = () => {
  const[skills, setSkills] = React.useState(false)
  const[exp, setExp] = React.useState(true)
  
  function skill(){
      setSkills(true)
      setExp(false)
    }
    function experience() {
      setSkills(false)
      setExp(true)
  
    }
  
    return (
      <div className="about" >
          <div className="about-me">
          <div data-aos="fade-up" className="my-story">
              <h2>My story</h2>
              <h4 className="h4">
                  <p>I started my journey into the Tech world approximately 2 years ago, it was completely new to me as I had just finished a bachelors degree in Civil Engineering.</p> 
                  <p>I decided to begin with the front end of web development, I got involved with the basics like html and CSS. It was fun being able to design and build beautiful static website, I got a few jobs mostly around my vicinity but shortly after that I decided it wasn't enough to make them beautiful they had to be interactive too.</p>
                  <p>I went straight into Javascript, i finally learnt how to make my page dynamics and interactive. I studied data structure and algorithms, built a javascript calculator and a black jack game which are on my github. I learnt front end framework like bootstrap which i love as it enable me to design the structure of a website faster and also React for it ease in adding event listeners and making website component reusable.</p>
                  <p>  My clientele grew shortly after that I designed my own portfolio website and got jobs to create website for small bsuiness owners around my vicinity who loved my deisgned. Currently I'm freelancing at Upwork and actively applying for a fuul time job, I love working in teams and I strongly believe my tech journey has just started as I'm getting involved in back end development too.</p>
              </h4>
          </div>
          <div data-aos="fade-up" className="my-skills">
              <button  onClick={experience} className="btn start btn-default">My experience</button>
              <button onClick={skill} className="btn  btn-default">My skills</button>
              { skills &&<h4 className="">
                <div className="skills-grid">
                     <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">Github</h5>
                    <img className="img-responsiv" src="github-logo-png-transparent-png.png" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name" >Git</h5>
                    <img className="img-responsiv" src="git-icon-png-transparent-png.png" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">React</h5>
                    <img className="img-responsiv" src="react2.png" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">Bootstrap</h5>
                    <img className="img-responsiv" src="bostrap,small,507x507-pad,600x600,f8f8f8.jpg" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">Redux</h5>
                    <img className="img-responsiv" src="reduxst,small,507x507-pad,600x600,f8f8f8.u20.jpg" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">Javascript</h5>
                    <img className="img-responsiv" src="javascriptimages.png" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">SASS</h5>
                    <img className="img-responsiv" src="sass-logo.jpg" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">CSS</h5>
                    <img className="img-responsiv" src="css3-png-download-css-icon-transparent-png.png" />
                  </div>
                  <div class="col-md-4 col-xs-4">
                    <h5 className="skills-name">HTML</h5>
                    <img className="img-responsiv" src="html-5-logo-html-logo-png-transparent-png.png" />
                  </div>
                </div>
                </h4>}
              { exp && <h4  className="">I'm Joel - a front web devloper with experinece in React and bootstrap. My expertise is bulidign responsive webiste with reusable component as well. I strive to make the web a  beautiful place</h4>}
          </div>
          </div>
      </div>
    )
  }
  const Portfoli = () => {
    return (
    
      <div class="waviy">
         <span >P</span>
      <span >O</span>
      <span >R</span>
      <span >T</span>
      <span >F</span>
      <span >O</span>
      <span >L</span>
      <span >I</span>
      <span >O</span>
      </div>
    )
  }

// portfolio component
function Portfolio() {
  return (
    <div id="portfolio">
      <div><Portfoli/></div>
      
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="joel.jpg" />
      </div>
      <div className="portfolio-content">
      <h2>Hills's Beauty Salon</h2>
          <p>This is website for the hill's beuaty salon located in Port harcourt nigeria, it show cases their story, gallery, prices for services and contact info as well as a means to book an appointment</p>
              <p>Below are the tools i worked with whike creatingthe website:</p>
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
               <button className="btn btn-primary">View Project</button>
              <button className="btn btn-info">View Code</button>
               </div>
      </div>
    </div>
    </div>
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="joel.jpg" />
      </div>
      <div className="portfolio-content">
      <h2>Hills's Beauty Salon</h2>
          <p>This is website for the hill's beuaty salon located in Port harcourt nigeria, it show cases their story, gallery, prices for services and contact info as well as a means to book an appointment</p>
              <p>Below are the tools i worked with whike creatingthe website:</p>
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
               <button className="btn btn-primary">View Project</button>
              <button className="btn btn-info">View Code</button>
               </div>
      </div>
    </div>
    </div>
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="joel.jpg" />
      </div>
      <div className="portfolio-content">
      <h2>Hills's Beauty Salon</h2>
          <p>This is website for the hill's beuaty salon located in Port harcourt nigeria, it show cases their story, gallery, prices for services and contact info as well as a means to book an appointment</p>
              <p>Below are the tools i worked with whike creatingthe website:</p>
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
               <button className="btn btn-primary">View Project</button>
              <button className="btn btn-info">View Code</button>
               </div>
      </div>
    </div>
    </div>
    </div>
  )
}




//footer component
const Footer = () => {
   const[footerShow,setFooterShow] =React.useState(false)

    function show(){
        setFooterShow(!footerShow)
    }
      return (
        <div id ="contact" className="footer">
          <h2 className="footer-title">Get in touch </h2>
          
          <div className="footer-div newobject">
            <h2>Want to work together or have any question?</h2>
            <button style={{backgroundColor:footerShow &&"red",color:footerShow &&"white"}} data-aos="fade-right" onClick={show}className = "btn btn-foot">{footerShow ? "Not now " : "Say hello "}</button>

            { footerShow && <form data-aos="fade-up"className="form">
              <input type="text" placeholder="Your name" />
              <div className="input">
                  <input type="email" placeholder="Your email" />
                  {/* <input type="text" placeholder="Your phone number" /> */}
              </div>
              <textarea rows="6" cols="50" placeholder="Your message"></textarea>
              <button  className = "btn btn-foot">Submit</button>
            </form>}
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
        <Intro/>
        <MyImage/>
        <About/>
        <Portfolio/> 
         {/* <More/> */}
        <Footer/>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))