import React from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import '../Style/style.css'
import {useNavigate } from 'react-router-dom'
const Login = () => {
  const url = "http://localhost:4100/login"
  const [message, setmessage] = useState("")
  const [status, setstatus] = useState("")
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      console.log(values)
      const userDetails = values;
      axios.post(url, userDetails).then((res) => {
        console.log(res)
        setstatus(true)
        if (res.data.status === true) {
          localStorage.token = res.data.token
          setmessage(res.data.message)
          navigate('/dashboard')
          // alert(`hey`)
        }
      })
    },
    validationSchema: yup.object({
      email: yup.string().required('Required field'),
      password: yup.string().required('Required field').length(8, 'must be eight character'),

  })
  })
  // console.log(formik.touched)
  return (
    <>
      <center>
        <div className="container">
          <div className="col-lg-4 col-sm-10 col-md-10 shadow-sm m-5">
            <div className="card">
              <div className="card-title">
                <h2 id='font'>Instagram</h2>
                <h3>Sign in</h3>
              </div>
              <div className="card-body">
                <form action="" onSubmit={formik.handleSubmit}>
                {status ? <div className='alert alert-success'>{message}</div> : <div className='alert alert-danger display-none'>{message}</div>}
                <div>
                  <div className="form-floating">
                    <input type="text" placeholder='Email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='my-2 form-control' />
                    <label htmlFor="" className='floatingInput'>Email</label>
                  </div>
                    {formik.touched.email ? <div>{formik.errors.email}</div> : ''}
                </div>
                <div >
                  <input type="password" placeholder='Password' name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className='my-2 form-control' />
                  {formik.touched.password ? <div>{formik.errors.password}</div> : ''}
                </div>
                  <button type="submit" className="btn btn-info my-2 w-100">Login</button>
                </form>
              </div>
            </div>
            <div className="card">
              <p id="fonts">Don't have an account yet <Link to='/signup'>Signup</Link></p>
            </div>
          </div>
        </div>
      </center>
    </>
  )

}
export default Login