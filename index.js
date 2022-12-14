

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
       <a href="JoelCV-2.pdf" download="CV Joel Okebugwu"><button class="caption" data-aos="flip-right" className="img-btn  btn btn-primary">Download CV</button></a>
           <img className="img-responsive" src="5e819dd760bb1a623bbc6dae.png"/>
        </div>
        </div>
        <div class="col-md-6 col-xs-12">
        <div className="intro">
           <div class="main">
              <div class="box" id="box1">HELLO! I'm Joel</div>
           </div>
           <h3>A front web developer with experience in React and Bootstrap. My expertise is buliding responsive and interactive website for both desktop and mobile platforms with reusable component. I strive to make the web a  beautiful place</h3>
           <div className="intro-cont">
              <ul className="object">
                 <h2><a href="https://www.linkedin.com/in/joel-okebugwu-6762b3240/"><i class="fa fa-linkedin"></i></a></h2>
                 <h2><a href="https://www.github.com/joelyoung2020"><i class="fa fa-github"></i></a></h2>
                 <h2><a href="https://www.instagram.com/jayy_yong?igshid=YmMyMTA%22M%22Y="><i class="fa fa-instagram"></i></a></h2>
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
              { skills &&<h4>
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
              { exp && <h4>
                <p>April 2021 - present </p>
                <p className="job-title">Front End Developer</p>
                <p>Upwork</p>
                <br/>
                <p>Freelance job creating interative website using a mobile first approach with the use of msotly React and Bootstrap </p>
                <br></br>
                <p>
                  <ul>
                    <li>Coded using HTML, CSS, Javascript to develop features for both mobile and desktop platforms</li>
                    <br/>
                    <li>Designed and updated layouts to meet usability and performance requirements</li>
                    <br/>
                    <li>Liased woth back end developer worked on integrating front end assets to back end systems
                    </li>
                    <br/>
                    <li>Code Debugging</li>
                    <br/>
                    <li>Probem solving with critical thinking</li>
                  </ul>
                </p>
                <br/><br/>
                <p>June 2018- June 2020</p>
                <p className="job-title">Teacher's Assistant</p>
                <p>Ebun Heritage School, Ikotun Lagos</p>
                <br/>
                <p>It was my first job, I was employed to be the Assist the Mathematics teacher in a junior class. It was a good learning experience, I got to work with various other teacher and participate in group exercises which facilitates leanring </p>
               </h4>}
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
         <img className="img-responsive" src="security agency snipping.PNG" />
      </div>
      <div className="portfolio-content">
      <h2>Flames Security Agency</h2>
          <p>This is website for the Flames security agency located in Abia state, Nigeria, it is responsive to different screen sizes and includes an about page,list of services and contact informations</p>
              
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
              <a href="https://joelyoung2020.github.io/security/"> <button className="btn btn-primary">View Project</button></a>
              <a href="https://github.com/joelyoung2020/website-for-flames-security"> <button className="btn btn-info">View Code</button></a>
               </div>
      </div>
    </div>
    </div>
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="salonsnipping.JPG" />
      </div>
      <div className="portfolio-content">
      <h2>Maverick's Beauty Salon</h2>
          <p>This is website for the Maverick's beuaty salon located in Port harcourt nigeria, it show cases their story, gallery of haircut, prices for services and contact informations</p>
            
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
               <a href="https://joelyoung2020.github.io/Salon/"><button className="btn btn-primary">View Project</button></a>
               <a href="https://github.com/joelyoung2020/Website-for-Maverick-s-beauty-shop"><button className="btn btn-info">View Code</button></a>
               </div>
      </div>
    </div>
    </div>
  
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="portfolio snipping.JPG" />
      </div>
      <div className="portfolio-content">
      <h2>My Portfolio Website</h2>
          <p>This is my personal website I designed it to showcase my portfolio, skills, experience and contact information for any potential client or job recruiter to use.</p>
              <ul className="portfolio-tools">
               <li>React</li>
              <li>Bootstrap</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
               <a href="https://joelyoung2020.github.io/"><button className="btn btn-primary">View Project</button></a>
               <a href="https://github.com/joelyoung2020/Website-for-my-personal-portfolio"><button className="btn btn-info">View Code</button></a>
               </div>
      </div>
    </div>
    <div data-aos="fade-up" className="port">
    <div className="portfolio">
      <div className="portfolio-image ">
         <img className="img-responsive" src="task manager2.PNG" />
      </div>
      <div className="portfolio-content">
      <h2>Task Mananger Chrome Extension</h2>
          <p>This is a simple application for adding tasks it can be very useful and even more when added to chrome extension.</p>
    
              <ul className="portfolio-tools">
               <li>Javascript</li>
                 <li>Hmtl</li>
                <li>CSS</li>
               </ul>
              <div className="portfolio-btn">
              <a href=""><button className="btn btn-primary">View Project</button></a>
               <a href="https://github.com/joelyoung2020/TASK-MANAGER"><button className="btn btn-info">View Code</button></a>
               </div>
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
          <ul className="object">
                 <h2><a href="https://www.linkedin.com/in/joel-okebugwu-6762b3240/"><i class="fa fa-linkedin"></i></a></h2>
                 <h2><a href="https://www.github.com/joelyoung2020"><i class="fa fa-github"></i></a></h2>
                 <h2><a href="https://www.instagram.com/jayy_yong?igshid=YmMyMTA%22M%22Y="><i class="fa fa-instagram"></i></a></h2>
                 <h2><a href="mailto:joelokebugwu1998@gmail.com"><i class="fa fa-envelope"></i></a></h2>
                 <h2><a href="tel:+2349038245421"><i class="fa fa-phone"></i></a></h2>
              </ul>
            <h2>Want to work together or have any question?</h2>
            <button style={{backgroundColor:footerShow &&"red",color:footerShow &&"white"}} data-aos="fade-right" onClick={show}className = "btn btn-foot">{footerShow ? "Not now " : "Say Hello "}</button>

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
        <Footer/>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))