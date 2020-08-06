import React   from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs"
import DonateImg from "../donateBox.jpg"

// class HomePage extends Component {
//   constructor() {
//     super();
//     this.state = {
//        className: 'hidden'
//     }
//   }
//   handleScroll() { 
//     if (document.documentElement.scrollTop > 100) {
//        this.setState({
//          className: 'show'
//        })
//      } 
//    }
 
//    componentDidMount() {
//      window.onscroll = () => this.handleScroll()
//    }
//   render() {
//     return(
//       <div>
//         <h1>BORA DOAR????</h1>
        
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
        
              
        
             
            
//                <h1>ABOUT US</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
               
                
            
             
//                  <h1>ABOUT US</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
               
                
//                  <h1>BORA DOAR????</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
//                  <h1>BORA DOAR????</h1>
        
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
        
              
        
             
            
//                <h1>ABOUT US</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
               
                
            
             
//                  <h1>ABOUT US</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
               
                
//                  <h1>BORA DOAR????</h1>
//                  <p>
//                    It is a long established fact that a reader will be distracted by the
//                    readable content of a page when looking at its layout. The point of
//                    using Lorem Ipsum is that it has a more-or-less normal distribution of
//                    letters, as opposed to using 'Content here, content here', making it
//                    look like readable English.
//                  </p>
//                  <Link className="btn btn-lg btn-primary" to="/announcements">
//                    Ajuda
//                  </Link>
//                  <AboutUs className={this.state.className} />
//       </div>
//     )
//   }
// }
// export default HomePage;


function HomePage() {
  return (
    <div className="container-fluid ">
      <div className="row c4 w-100" >
       <div className="c4 col-sm d-flex justify-content-center align-items-center ">
        <div className=" w-100  ">
          <h1 className="text-center">Donator</h1>
          
          <h2>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. 
          </h2> 
            <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-lg btn-primary " to="/announcements">
              <h1> Ajude</h1>
            </Link>
            </div>
        </div>
      </div>
        <div className="w-75">
        <div className="col-sm">
        <img  className="donate-img" src={DonateImg} alt="Donate"/>
        </div>
        </div>
        </div>
       
        <AboutUs/>
        
    </div>
  );
}

export default HomePage;
