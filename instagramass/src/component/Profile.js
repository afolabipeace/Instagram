import React from 'react'
import Navbar from './Navbar'
import { RiSettings3Line } from 'react-icons/ri'
import pic5 from '../asset/imges/istockphoto-185262648-170667a.jpg'
import { useNavigate, Link } from 'react-router-dom'
import {useEffect,useState} from 'react'
import { GrBookmark } from 'react-icons/gr'
import axios from 'axios'
function Profile() {

  const navigate = useNavigate()
  const [message,setmessage] = useState("")
    const token = localStorage.token
    const url = 'http://localhost:4100/profile'
    useEffect(()=>{
        axios.get(url,{headers:
            {
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then((res)=>{
        setmessage(res.data.userDetails)
        console.log(res)
        if(res.data.status){
            console.log(res.data.userDetails)
        }else{
            
        }
    })
    },[])
  return (
    <>
      < Navbar /><br />
      <div className="container col-lg-8 col-sm-8 col-md-9 mt-3">
        <div className="row d-flex">
          <div className="col-lg-8 col-sm-3 col-md-9">
            <div className="card b0rder border-0 d-flex ml-5">
              <div className='d-flex '>
                <img src={pic5} alt="" id='pic5' style={{borderRadius: '50%',width:'45%'}} />
                <div className="">
                  <div className="d-flex ml-5">
                    <h3 className='justify-content-center'>{message.username}</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='justify-content-center ' id='edit'><Link to="/edit" className='text-dark text-decoration-none p-0'>Editprofile</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiSettings3Line id='set' className='justify-content-center' />
                  </div><br /><br /><br />
                <div className='d-flex'>
                  <p><Link to="" className='text-dark text-decoration-none'>Posts</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p><Link to="" className='text-dark text-decoration-none'>Followers</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p><Link to="" className='text-dark text-decoration-none'>Following</Link></p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <li><a class="dropdown-item" href="#"><GrBookmark className='rise me-2' />Saved</a></li>
    </>
  )
}
export default Profile