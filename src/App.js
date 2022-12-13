import './App.css';


function App() {
  return (
    <div className="App">
      <h1 style={{fontSize:'60px', paddingTop: 0.8}}> ⭐️ My Portfolio ⭐️ </h1>
      <img className="about"  src={require('./images/about.png')} alt="about me"  width="200" height="200" />

      <div>
      <h1 className="outline_about" style={{marginLeft:'30%', marginRight:'30%'}}> About Me: </h1>
      <p style={{ textAlign:'center', marginLeft:'20%', marginRight:'20%',
    marginTop:'1em'}}> Hi! I am a senior working as a software engineer next year. 
        </p>
      <p style={{ textAlign:'center', marginLeft:'20%', marginRight:'20%',
    marginTop:'1em'}}>  This semester I took a user interface class and absolutely loved it! 
    I have never coded anything in the front-end before, so I definitely was able to learn a lot the past couple months.
        </p> 
        <p style={{ textAlign:'center', marginLeft:'20%', marginRight:'20%',
    marginTop:'1em'}}> Also because I am 
    graduating I want to explore if I want to be primarly a front-end developer or back-end developer. I really loved
    the user interface, so I think I will be looking into working full-stack, so I can do both. 
        </p> 
        <p style={{ textAlign:'center', marginLeft:'20%', marginRight:'20%',
    marginTop:'1em'}}> 
      I wanted to show off what I have been working on. Click on any of the below images to explore!
        </p> 
      </div> 
      <div>
      <div style={{paddingTop:'3em'}}>
      <h3 className="titles" style={{display:'inline', marginRight:'2em', marginLeft:'2em'}}>  Storyboard  </h3>
      <h3 className="titles" style={{display:'inline', paddingRight:'2em', paddingLeft:'2em'}}>  Don Jose  </h3>
      <h3 className="titles" style={{display:'inline',paddingRight:'2em', paddingLeft:'2em'}}>  Yhangry  </h3>
      <h3 className="titles" style={{display:'inline', paddingRight:'3em', paddingLeft:'3em'}}>  Zoo Site   </h3>

      </div>
      </div>
      <div style={{display:'inline-block', paddingTop:'1em', marginTop:'1em'}}>
      <span> <a class="hover12" style={{paddingLeft:'1em', paddingRight:'1em'}} href="Storyboard.html">
        <img  src={require('./images/storyboard.png')}  alt="storyboard website" width="300" height="300"/>
      </a>
      </span>

      <span> 
      <a class="hover12" href="donjose.html">
        <img src={require('./images/don_jose.png')} alt="done jose website"  width="300" height="300" />  
        </a>
      </span>

      <span>
      <a class="hover12" style={{paddingLeft:'1em', paddingRight:'1em'}} href="yhangry.html">
        <img src={require('./images/yhangy.png')} alt="done jose website"  width="300" height="300" />  
        </a>
      </span>

      <span> 
        <a class="hover12" style={{paddingLeft:'1em', paddingRight:'1em'}} href="design.html">
        <img src={require('./images/zoo.png')} alt="we bought a zoo website"  width="300" height="300" />  
        </a>
      </span>
      </div>
      </div>

  );
}

export default App;
