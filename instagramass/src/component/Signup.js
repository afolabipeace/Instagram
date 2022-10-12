import axios from 'axios'
import React from "react"
// import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import '../Style/style.css'
import pic1 from '../asset/imges/Appstore.png'
import pic2 from '../asset/imges/Playstore.png'
import pic4 from '../asset/imges/a4fd825e3d49.png'
import pic6 from '../asset/imges/instagramlogo.png'
const Signup = () => {
    const navigate = useNavigate()
    const [message, setmessage] = useState("")
  const [status, setstatus] = useState("")
    const url = "http://localhost:4200/signup"
    const formik = useFormik({
        initialValues: {
            email: '',
            fullname: '',
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post(url, values).then((res) => {
                console.log(res);
                if (res.data.status) {
                    setmessage(res.data.message)
                    navigate('/login')
                }
            })
        },
        validationSchema: yup.object({
            email: yup.string().required('Required field'),
            fullname: yup.string().required('Required field'),
            password: yup.string().required('Required field').length(8, 'must be eight character'),
            username: yup.string().required('Required field'),

        })
    })
    // console.log(formik.touched);
    return (
        <>
            <center>
                <div className=' d-flex'>
                   {/* <div className='col-lg-3 col-sm-none col-md-5 shadow-sm m-5'>
                   <img src={pic4} alt="" id='pic4' />
                   </div> */}
                <div className='col-lg-3 col-sm-10 col-md-5 shadow-sm m-5'>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-center' id='font'><img src={pic6} alt="" id='pic6'/></h1>
                            </div>
                            <p id='fonts'>Sign up to see photos and videos from your friends.</p>
                            <form className='form-group' onSubmit={formik.handleSubmit} >
                                {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger display-none'>{message}</div>}

                                <div className="form-floating">
                                    <input type="text" id='floatingInput' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='Email' className='my-1 form-control' />
                                    <label htmlFor="" className='floatingInput'>Email</label>
                                </div>
                                {formik.errors.email}
                                <div>
                                    <div className="form-floating">
                                        <input type="text" placeholder='full Name' name='fullname' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fullname} className='my-2 form-control' />
                                        <label htmlFor="" className='floatingInput'>Fullname</label>
                                    </div>
                                    {formik.touched.fullname ? <div>{formik.errors.fullname}</div> : ''}
                                </div>
                                <div>
                                    <input type="text" placeholder='Username' name='username' value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} className='my-2 form-control' />
                                    {formik.touched.username ? <div>{formik.errors.username}</div> : ''}
                                </div>
                                <div >
                                    <input type="password" placeholder='Password' name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className='my-2 form-control' />
                                    {formik.touched.password ? <div>{formik.errors.password}</div> : ''}
                                </div>
                                <p id='foo'>People who use our service may have uploaded your contact information to Instagram. <a href="Here.js">Learn More</a></p>
                                <p id='foo'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                                <button type='submit' className='btn btn-info my-2 w-100'>SignUp</button>
                            </form>
                            <div className="card">
                                <p id="fonts">Already have an account  <Link to='/login'>Signin</Link></p>
                            
                            <div className='d-flex' >
                                <img src={pic1} alt="" className='pic1'/>
                                <img src={pic2} alt="" className='pic2'/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div >
                </div>
            </center >
        </>
    )
}

export default Signup