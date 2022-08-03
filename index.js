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
                  <li><a href="#abouticon">About</a></li>
                  <li><a href="#mainicon">Portfolio</a></li>
                  <li><a href="#contacticon">Contact me</a></li>
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
    <div class="container">
    <div class=" maincol row">
    <div class="col-md-6 col-xs-12">
    
       <div className="image img-responsive">
       <button class="caption" data-aos="flip-right" className="img-btn  btn btn-primary">Check me out</button>
           <img className="img-responsive" src="5e819dd760bb1a623bbc6dae.png"/>
        </div>
        </div>
        <div class="col-md-6 col-xs-12">
        <div className="intro">
           <div class="main">
              <div class="box" id="box1">HELLO! I'm Joel</div>
           </div>
           <h3>I'm Joel - a front web devloper with experinece in React and bootstrap. My expertise is bulidign responsive webiste with reusable component as well. I strive to make the web a  beautiful place</h3>
           <div className="intro-cont">
              <ul className="object">
                 <h2><i class="fa fa-facebook"></i></h2>
                 <h2><i class="fa fa-twitter"></i></h2>
                 <h2><i class="fa fa-instagram"></i></h2>
                 <h2><i class="fa fa-envelope"></i></h2>
                 <h2><i class="fa fa-phone"></i></h2>
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
    
    <div data-aos="zoom-in" class="my-image">
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
    //   <div class="container">
    // <div class=" maincol row">
    // <div class="col-md-12 col-xs-12">
      <div className="about" >
          <div className="about-me">
          <div data-aos="fade-up" className="my-story">
              <h2>My story</h2>
              <h4 className="h4">I'm Joel - a front web devloper with experinece in React and bootstrap. My expertise is bulidign responsive webiste with reusable component as well. I strive to make the web a  beautiful place</h4>
          </div>
          {/* <div class="col-md-12 col-xs-12"> */}
          <div data-aos="fade-up" className="my-skills">
              <button  onClick={experience} className="btn start btn-default">My experience</button>
              <button onClick={skill} className="btn  btn-default">My skills</button>
              { skills &&<h4 className="">blabla I'm Joel - a front web devloper with experinece in React and bootstrap. My expertise is bulidign responsive webiste with reusable component as well. I strive to make the web a  beautiful place</h4>}
              { exp && <h4  className="">I'm Joel - a front web devloper with experinece in React and bootstrap. My expertise is bulidign responsive webiste with reusable component as well. I strive to make the web a  beautiful place</h4>}
          </div>
          </div>
      </div>
      // </div>
      // </div>
      // </div>
      // </div>
    )
  }

//footer component


const Footer = () => {
   const[footerShow,setFooterShow] =React.useState(false)

    function show(){
        setFooterShow(!footerShow)
    }
      return (
        <div id ="contacticon" className="footer">
          <h2 className="footer-title">Get in touch </h2>
          
          <div className="footer-div newobject">
            <h2>Want to work together or have any question?</h2>
            <button style={{backgroundColor:footerShow &&"red",color:footerShow &&"white"}} data-aos="fade-right" onClick={show}className = "btn btn-foot">{footerShow ? "Not now " : "Say hello "}</button>

            { footerShow && <form data-aos="fade-up"className="form">
              <input type="text" placeholder="Your name" />
              <div className="input">
                  <input type="email" placeholder="Your email" />
                  <input type="text" placeholder="Your phone number" />
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
        <Footer/>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))