// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import pic5 from '../asset/imges/istockphoto-185262648-170667a.jpg'
// // import { Slide } from 'react-slideshow-image'
// import Slideshow from './Slideshow'
// import {useEffect,useState} from 'react'
// import axios from 'axios'
// import {useNavigate, Link} from 'react-router-dom'
// import '../Style/style.css'
// import pic3 from '../asset/imges/1618160121685.jpg'
// import {FaHeart } from 'react-slideshow-image'
// import pic6 from '../asset/imges/house-door-fill.svg'
// import pic7 from '../asset/imges/send-fill.svg'
// import pic8 from '../asset/imges/heart.svg'
// import pic9 from '../asset/imges/person-circle.svg'
// import pic10 from '../asset/imges/clock.svg'
// import Profile from './Profile'
// // import Slideshow from './Slideshow'
// function Home() {
//     const [message, setmessage] = useState("")
//     const navigate = useNavigate()
//     const token = localStorage.token
//     const url = 'http://localhost:4100/dashboard'
//     useEffect(()=>{
//         axios.get(url,{headers:
//             {
//             'Authorization':`Bearer ${token}`,
//             'Content-Type':'application/json',
//             'Accept':'application/json'
//         }
//     }).then((res)=>{
//         if(res.data.message){
//             console.log(res.data.userDetails)
//         }else{
//             localStorage.removeItem('token')
//             navigate('/login')
//         }
//     })        // if(localStorage.token){
//         //     console.log(`na hw=ere we dey`)
//         // }else {
//         //     navigate('/signin')
//         // }
//     },[])
//   return (
//     <>
//         <div className="card border border-0 div col-md-3 col-sm-4 col-lg-2">
//                 <Slideshow/>
//                 <center>
//                     <div className="card-title">
//                         <div className='d-flex'>
//                         <img src={pic5} alt="" id='pic5'/>
//                         <h3>Peace</h3>
//                         </div>
//                         <div className='d-flex'>
//                             <p><Link to="" className='text-dark text-decoration-none'>Pages</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;
//                             <p><Link to="" className='text-dark text-decoration-none'>Followers</Link></p>
//                             <p><Link to="" className='text-dark text-decoration-none'>Followers</Link></p>
//                         </div>
//                     </div>
//                 </center>
//                 <div className="card-body col-md-3 col-sm-4 col-lg-2">
//                    {/* <img src={pic3} alt="" className='pic3' /> */}
//                     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//                 </div>
//         </div>
//     </>
//   )
// }

// export default Home