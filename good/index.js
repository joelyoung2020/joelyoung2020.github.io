//nav bar components

const Navbar = () => {
  return (
   
    <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button data-toggle="collapse" data-target="#demo" class="navbar-toggle" ><span class="glyphicon glyphicon-list"></span></button>
            <a className="navbar-brand" href="#"><img src="hari logo.jpg" className="logo"/></a><span className="navbar-brand letter">JennyEmpire</span>
        </div>
        <div id="demo" class="collapse-in navbar-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Store</a></li>
        </ul>
    </div>
    </div>
</nav>
  )
}



const Welcome = () => {
  return (
  
    <div class="waviy">
       <span >W</span>
    <span >E</span>
    <span >L</span>
    <span >C</span>
    <span >O</span>
    <span >M</span>
    <span >e</span>
    <span >!</span>

    </div>
  )
}



//introuction components


const Intro = () => {
  return (


<div class="container">
   {/* <div class="row">
     <div class="col-md-12 col-xs-12">
     <Welcome/>
</div>
<div class="col-md-12 col-xs-12">
<h3 >JennyEmpire store currently has over  100 different containing diferrent styles and colour. We offer sell only quality wigs and offer fast delivery service. </h3>
</div>
<div class="col-md-12 col-xs-6">
    <div class="col3">
    <h1 class="moving">
   <span class="choice">b</span>
   <div class="message">
     <div class="word1">creativity</div>
    <div class="word2">Durabitlity</div>
    <div class="word3">low cost</div>
   <div class="word4">low maintaince</div>
  </div>
 </h1>
    </div>
</div>
</div>
<div>
<div className="intro-cont icons">
       <ul className="object visible-lg visible-md visible-md visible-sm">
         <h2><i class="fa fa-facebook"></i></h2>
         <h2><i class="fa fa-twitter"></i></h2>
      <h2><i class="fa fa-instagram"></i></h2>
       <h2><i class="fa fa-envelope"></i></h2>
       <h2><i class="fa fa-phone"></i></h2>
      </ul>
      </div>
      <a href="#mainicon"><button className="btn btn-pink">Browse <i class="fa fa-search"></i></button></a>
</div> */}
 <div class="row">
     <div class="col-md-6 col-xs-12">
     <Welcome/>

<h3 >JennyEmpire store currently has over  100 different containing diferrent styles and colour. We offer sell only quality wigs and offer fast delivery service. </h3>
{/* <h1 class="moving">
   <span class="choice">b</span>
   <div class="message">
     <div class="word1">creativity</div>
    <div class="word2">Durabitlity</div>
    <div class="word3">low cost</div>
   <div class="word4">low maintaince</div>
  </div>
 </h1> */}
</div>
</div>
</div>
  )
}

//about us

const About = () => {
  // let hiding = false
  const [hiding, setHiding] = React.useState(false)
  function hide(){
    setHiding(!hiding)
  }

  return (
    <div id="abouticon">
    <div className="grid">
       <div className="abt">
        <h1 className="abt-title">About us</h1>
        <h3 className="abt-info">JennyEmpire store currently has over  100 different containing diferrent styles and colour. We offer sell only quality wigs and offer fast delivery service. </h3>
        <div className="innergrid">
           <img src="Screenshot_20220727-022705.jpg"/>
           <img src="Screenshot_20220726-174231_1.jpg"/>
           <img src="Screenshot_20220727-022232_1.jpg"/>
           <img src="Screenshot_20220727-022348.jpg"/>
           <img src="Screenshot_20220727-022403.jpg"/>
           <img src="Screenshot_20220727-022507.jpg"/>
           
      </div>
      </div>
      {hiding && <div className="video">
         <img src="mountain.jpg"/>
         <img src="mountain.jpg"/>
          </div>}
       
       <button onClick={hide} className="btn btn-primary more">{hiding? "Close videos" : "Show videos"}</button>
    </div>
    </div>
  )
}
//footer component


const Footer = () => {
const [forms,setForms] = React.useState(false)

function footers(){
setForms(!forms)
}

  return (
    <div id ="contacticon" className="footer">
      <ul className="footer-list ">
        <h2 className="fb"><i class="fa fa-facebook"></i></h2>
        <h2 className="twi"><i class="fa fa-twitter"></i></h2>
        <h2 className="ins"><i class="fa fa-instagram"></i></h2>
        <h2 className="env"><i class="fa fa-envelope"></i></h2>
        <h2 className="pho"><i class="fa fa-phone"></i></h2>
      </ul>
      <h2 className="footer-title">Get in touch <span onClick={footers}><i className="fa fa-chevron-circle-down"></i></span></h2>
      
      {forms && <div className="footer-div newobject">
        <form className="form">
          <input type="text" placeholder="Your name" />
          <div className="input">
             <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Your phone number" />
          </div>
          <textarea rows="6" cols="50" placeholder="Your message"></textarea>
          <button className = "btn btn-foot">Submit</button>
        </form>
      </div>}
    </div>
  )
}






//data array component
const data = [
  {
    img:"Screenshot_20220726-174231_1.jpg",
    num: 1,
    type: "Straight",
    price: 58000,
    color: "black/brown",
    spec: "bone"
},
{
  img:"Screenshot_20220727-022232_1.jpg",
  num: 2,
  type: "Double drawn",
  price: 44000,
  color: "brown",
  spec: "10 inch"
},
{
  img: "Screenshot_20220727-022348.jpg",
  num: 3,
  type: "Italian",
  price: 60000,
  color: "red",
  spec: "bone"
},
{
  img: "Screenshot_20220727-022403.jpg",
  num: 3,
  type: "Double drawn",
  price: 60000,
  color: "Black",
  spec: "12 iches"
},
{
  img: "Screenshot_20220727-022507.jpg",
  num: 3,
  type: "Double drawn",
  price: 60000,
  color: "Black",
  spec: "12inch"
},
{
  img: "Screenshot_20220727-022705.jpg",
  num: 3,
  type: "Italian",
  price: 60000,
  color: "red",
  spec: "bone"
}
]




//main component
const Main = (props) => {
  return (
    <div id ="mainicon" className="main">
      <div className="badge">IN STOCK</div>
        <img src={props.item.img}  />
        <h2>Item:{props.item.num}</h2>
          <h4>{props.item.type}</h4>
          <h4> {props.item.color}</h4>
          <h4> {props.item.spec}</h4>
        <h1 className="price">#{props.item.price} </h1>
    </div>
  )
}


//header component

const Header = () => {
    return (
      <div className ="header">
        <h1>JennyEmpire</h1>
      </div>
    )
  }


//app fucntion, what is rendered
function App(){

const arr= data.map((list) => {
  return(<Main
    item = {list}
    // types = {list.type}
    // color= {list.color}
    // price= {list.price}

    />
  )
})
    return(
        <div className="page">
          
          <div className="top">
          <Navbar/>
             <Intro/>
          </div>
          <About/>
          <div className="block">
              {/* {arr} */}
          </div>
          <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))