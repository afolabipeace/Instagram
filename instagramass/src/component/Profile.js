import React from 'react'
import Nevbar from './Nevbar'
import { RiFolderUserLine, RiSettings3Line } from 'react-icons/ri'
import { useNavigate, Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap'
import {useEffect,useState} from 'react'
import { GrBookmark } from 'react-icons/gr'
import {  BsGrid3X3 } from 'react-icons/bs'
import axios from 'axios'
function Profile() {

  const navigate = useNavigate()
  const [message,setmessage] = useState("")
  const [userDetails,setuserDetails] = useState("")
  const [imgDetails, setimgDetails] = useState("")
  const [currentUser, setcurrentUser] = useState("")
  const token = localStorage.token
  const url = 'http://localhost:4100/getimage'
  const url5 = 'http://localhost:4100/dashboard'
  const [myfile, setmyfile] = useState("")
    useEffect(()=>{
        axios.get(url5,{headers:
            {
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then((res)=>{
      console.log(res.data)
        if(res.data.status){
            setuserDetails(res.data.userDetails)
            setimgDetails(res.data.post)
            setmyfile(res.data.userDetails.file)
            setmessage(res.data.userDetails)
            setcurrentUser (res.data.userDetails.fullname )
              console.log(res.data.userDetails.username)
        }else{
          localStorage.removeItem('token')
          navigate('/login')
      }
    })
    },[token])
    const pickFile = (e)=>{
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDateURL(file)
      reader.onload = () =>{
        const result = reader.result
        setmyfile(result)
        console.log(result)
        axios.post(url,{myfile:result,token:localStorage.token}).then((res)=>{
          if(res.data.status){
              console.log(res.data)
              setmyfile(res.data.image)
          }
          else{
              console.log(res.data)
          }
      })
      }
    }
  return (
    <>
      < Nevbar /><br />
      <div className="container col-lg-8 col-sm-8 col-md-9 mt-3">
        <div className="row d-flex">
          <div className="col-lg-8 col-sm-3 col-md-9">
            <div className="card border border-0 d-flex ml-5">
              <div className='d-flex '>
                <label>
                  <input type='file' hidden='hidden' onChange={(e)=> pickFile(e)}/>
                <img src={myfile} alt="" className='rounded-circle p-1 border' style={{width:'10vw',height:'10vw', cursor:'pointer' }} />
                </label>
                <div className="">
                  <div className="d-flex ml-5">
                    <h3 className='justify-content-center'>{message.username}</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='justify-content-center ' data-bs-toggle="modal" data-bs-target="#exampleModal" id='edit'><Link to={'/edit'} className='text-dark text-decoration-none p-0'>Editprofile</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <RiSettings3Line id='set' className='justify-content-center' />
                  </div><br /><br /><br />
                <div className='d-flex'>
                  <p><Link to={""} className='text-dark text-decoration-none'>Posts</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p><Link to={""} className='text-dark text-decoration-none'>Followers</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p><Link to={""} className='text-dark text-decoration-none'>Following</Link></p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
      <Link to={'/'} className='home me-lg-s'><BsGrid3X3/>POST</Link>
      <Link to={'/'} className='home me-lg-s'><GrBookmark/>SAVED</Link>
      <Link to={'/'} className='home me-lg-s'><RiFolderUserLine/>TAGGED</Link>
      </div>
      
    </>
  )
}
export default Profile