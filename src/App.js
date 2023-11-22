import React from 'react';
import './index.css';


const App = () => {

  return (


    <div className='container'>

  
    
      <div className="header">
         <button className="header-button">Courses</button>
     
         <div className="header-left">
           <img src="image.jpg" alt="logo" className="header-logo" />

          <div className="header-title"> | S T O R I E S</div>

      
        </div>
        
      </div>

    
      <img src={ require('./images/Backgroundimg1.jpeg')} alt="background img" className='header-bottom-img'/>

    
      <div className="profile-image">
        <img src='img3' alt="Anuj Gosalia" />
      </div>
      <div className="profile-card">
      
      <div className="profile-info">
        <h2>Anuj Gosalia</h2>

        <p>
          <span className="followers">6482</span> followers

          <span className="following">245</span> following
        </p>

        
      </div>
      
    </div>
    <div className="profile-class">
    <p>Co-founder & CEO at Terribly Tiny Tales</p>
    <a href="http://www.instagram.com/anujgosalia">Instagram</a>

    </div>

    <body>

    <a href='posts'> 134 Posts</a>


     <div className='body-card'>

       <h3>A Changing world order</h3>

       <p> 
       The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ..<br></br>
       </p>

       <div className='tweet-person'> 
        <p>Thought by anujgosalia</p>

        </div>

      


       
    </div>


       <div className='body-card1'>

        

         <h3>India v/s Australia</h3>

        <p> 
        Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two m..<br></br></p>
        
        <div className='tweet-person1'> 
        <p>Thought by anujgosalia</p>

        </div>
  
 
    </div> 

    </body>



    

    


    </div>

    

   
  );
};

export default App;

