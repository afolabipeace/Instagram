import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap'
import pic6 from '../asset/imges/instagramlogo.png'
import { useNavigate, Link } from 'react-router-dom'
import { FaRegPlusSquare, FaRegHeart, FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineExplore, MdHome, MdSend, MdCached } from 'react-icons/md'
import { RiSettings3Line } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { GrBookmark } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
// import{Fa}
function Navbar() {
  const url = 'http://localhost:4000/upload'
  const [caption,setcaption]=useState('')
    const [myfile, setmyfile] = useState('')
    const [image, setimage] = useState('')
    const pickFile = (e)=>{
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = ()=>{
        const result = reader.result
        setmyfile(result)
    }
 }
    const upload = ()=>{
        const userData = {myfile}
        axios.post(url,userData).then((res)=>{
            console.log(res)
            setimage(res.data.image)
        })
    }
  return (
    <>
      <center>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><center><img src={pic6} alt="" id='pic6' /></center></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex">
                <input className="form-control me-2 d-none d-md-block" type="search" placeholder="Search" aria-label="Search" />
              </form>

              <ul id='list'>
                <div className='icons d-flex mt-2 justify-content-end'>
                  <Link to={'/dashboard'} className='home me-lg-3 col-sm-d-center d-md-2'><MdHome /></Link>
                  <Link to={''} className='home me-lg-3 d-none d-md-block'><MdSend /></Link>
                  <Link to={'/'} className='home me-lg-3 d-none d-md-block'  data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: 'black' }}><FaRegPlusSquare /></Link>
                  <Link to={''} className='home me-lg-3 d-none d-md-block'><FaRegHeart /></Link>
                  <Link to={''} className=' d-none d-md-block'><MdOutlineExplore /></Link>
                  <ul class="dropdown">
                    <a class="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <Link to={'/profile'} ><FaRegUserCircle /></Link>
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" id='link' href="/profile"><BiUserCircle className='rise me-2' />Profile</a></li>
                      <li><a class="dropdown-item" href="#"><GrBookmark className='rise me-2' />Saved</a></li>
                      <li><a class="dropdown-item" href="#"><RiSettings3Line className='rise me-2' />Settings</a></li>
                      <li><a class="dropdown-item" href="#"><MdCached className='rise me-2' />Switch Account</a></li><hr />
                      <li><a class="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </center>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="file" onChange={(e)=>pickFile(e)}/>
      </div>
      <div class="modal-footer">
        <input type="text" className='caption w-75' placeholder='Enter caption' onChange={(e)=>setcaption(e.target.value)}/>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>upload(myfile,setimage,caption)}>Upload</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar