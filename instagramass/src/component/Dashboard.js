import React from 'react'
import Slideshow from './Slideshow'
import Navbar  from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import '../Style/style.css'
import pic3 from '../asset/imges/1618160121685.jpg'
import pic6 from '../asset/imges/images.jpg'

function Dashboard() {
    const navigate = useNavigate()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const token = localStorage.token
    const [message,setmessage]=useState('')
    const [userDetails,setuserDetails] = useState("")
    const [imgDetails, setimgDetails] = useState("")
    const [currentUser, setcurrentUser] = useState("")
    const [postArray, setpostArray] = useState([])
    const url = 'http://localhost:4100/dashboard'
    const url2 = 'http://localhost:4100/upload'
    useEffect(()=>{
        axios.get(url,{headers:
            {
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then((res)=>{
        if(res.data.status)
        setuserDetails(res.data.userDetails)
        setimgDetails(res.data.posts)
        setpostArray(res.data.userPic)
        setcurrentUser(res.data.userDetails.username)
        console.log(res.data.userPic)
        if(res.data.status){
            
            console.log(res.data.userDetails)
        }else{
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
    },[token])
    const upload = (myfile, setimage, caption)=>{
        const token = localStorage.token
        const userDta = {myfile, caption, token, currentUser}
        axios.post(url2,userDta).then((res)=>{
            setimage(res.data.image)
            window.location.reload(true)
            console.log(res.data.image)
        })
    }
  return (
    <>
        < Navbar/>
       <center>
       <div className='col-lg-6 justify-content-center '>
       <Slideshow/>
       </div>
       </center> 
            <div className="d-flex jusify-content-center" id='slide'>
                <div className="card text-dark bg-light mt-3 w-md-75 w-25 justify-content-center">
                    <div className="card-header"><img src={pic3} alt="" class='card-img-top' style={{width:'60px',borderRadius:'50px',height:'6vh'}}/><p>__{message.username}</p></div>
                    <div className="card-body">
                        <div className="col-7"><img src={pic6} alt=""  class='card-img-top' style={{width:'175%'}}/></div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Dashboard