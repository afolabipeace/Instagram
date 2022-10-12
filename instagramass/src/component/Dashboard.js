import React from 'react'
import Slideshow from './Slideshow'
import Nevbar  from './Nevbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import { MdSend} from 'react-icons/md'
import { BsFillChatRightFill} from 'react-icons/bs'
import '../Style/style.css'
import { FaRegHeart } from 'react-icons/fa'
function Dashboard(){
    const navigate = useNavigate()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const token = localStorage.token
    const [message,setmessage]=useState('')
    const [userDetails,setuserDetails] = useState("")
    const [imgDetails, setimgDetails] = useState("")
    const [currentUser, setcurrentUser] = useState("")
    const [postArray, setpostArray] = useState([])
    const [AllUser, setAllUser] = useState("")
    const url = 'http://localhost:4100/dashboard'
    const url2 = 'http://localhost:4100/upload'
    const url3 = 'http://localhost:4100/getpost'
    const url4 = 'http://localhost:4100/getAlluser'
    useEffect(()=>{
        axios.get(url,{
            headers:
            {
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then((res)=>{
        if(res.data.status){
        setuserDetails(res.data.userDetails)
        setimgDetails(res.data.posts)
        // setpostArray(res.data.userPic)
        setcurrentUser (res.data.userDetails.fullname)
        // setmessage (res.data.userDetails)
        console.log(userDetails)
        // console.log(res.data.userPic) 
            console.log(res.data.userDetails.username)
        }else{
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
    axios.get(url4).then((res)=>{
        if(res.data.status){
            console.log(res.data)
            setAllUser(res.data.AllUser)
        }
        else{
            console.log(res.data)
        }
    })
    axios.get(url3).then((res)=>{
        if(res.data.status){
            console.log(res.data)
            setimgDetails(res.data.posts)
            let p =[]
            for (let i = res.data.userPic.length; i>0; i--)
            p.push(res.data.userPic[i-1]);
            console.log(p)
            setpostArray(p);
        }
        else{
            console.log(res.data)
        }
    })
    },[token])
  
  return (
    <>
        <div >
            < Nevbar/>
            <center>
            <div className='col-lg-6 justify-content-center '>
            <Slideshow/>
            <h3>{message.username}</h3>
            </div>
            </center> 
            <div className='d-flex'>
            {
                postArray.map((user, index)=>(
                    <div className="d-flex jusify-content-center" id='slide'>
                        <div className="card text-dark bg-light mt-3 w-md-75 w-25 justify-content-center">
                            <div className="card-header">
                                <img className='rounded-circle p-1 border' style={{width:'60px',borderRadius:'50px',height:'6vh',cursor:'pointer'}} src={AllUser[AllUser.findIndex(el => el.email === user.userId)].file !== "" ? AllUser[AllUser.findIndex(el =>el.email === user.userId)].file:""} alt=""/>
                            </div>
                            <div className='name mx-3'>
                                <strong>{user.username}</strong>
                                <div className='time'><p>{date}</p></div>
                            </div>
                            <div className="card-body">
                                <div className='card-title'><img src={user.image} className='card-img-top' alt='' id='cardpic' /></div>
                                <div>
                                    <FaRegHeart className='me-3'/>
                                    <BsFillChatRightFill className='me-3'/>
                                    <MdSend className='me-3'/>
                                </div>
                                <div className="col-md-7"><b>{user.username}</b>{user.caption}</div>
                                <input type='text' placeholder='Comment' className='place w-75'/><button className='btn btn-primary mx-3'>Post</button>
                            </div>
                        </div>
                    </div>
                ))
        }

            <div className='col-md-4'>
                <div className='d-flex mt-5'>
                    <img className='rounded-circle p-1 border' style={{width:'70px', height:'70px', cursor:'pointer'}} src='' alt=''/>
                    <div className='mt-4 mx-5'> 
                        <b>Username</b>
                        <b className='mx-5' ><Link className='text-decoration-none' to={''}>switch</Link></b>
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <p>Suggestion For You</p>
                    <Link className='text-decoration-none mx-5' to={''}>See All</Link>
                </div>
                <div className='d-flex'>
                    <img className='rounded-circle p-1 border' style={{width:'50px', height:'50px', cursor:'pointer'}} src='' alt=''/>
                    <div className='mt-4 mx-5'>
                        <b>lorem</b>
                        <b className='mx-5 p-5'><Link className='text-decoration-none text-dark' to={''}>Lorem</Link></b>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard