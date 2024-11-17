import React, {useState} from 'react'
import axios from 'axios'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'

const Login = () => {
    const [data, setData] = useState({
        username : "",
        password : "",
        
     })
     const {username,password} =data;
     const changeHandler = e =>{
         setData({...data,[e.target.name]:e.target.value})
     }
     const submitHandler = async e =>{
         e.preventDefault();
         console.log(data)
         var result =  await axios.post("https://localhost:3000", data)
         console.log(result)
     }

 
    return (
<div className='container text-center'>
<div className="flex-box">
            <div className="row">
                <div className="col-mb-3">
                <div className="card">
            <div className="card-body">
            <div className="d-flex">
            <form onSubmit={submitHandler}>
            <div className='col-10'>
            <h3 className='text-align-center'>Login</h3>
                    <label htmlFor="username">username</label><br /><HiOutlineUser />
                <input type="text" className='username' value={username} placeholder="Type your username" onChange={changeHandler}/></div><br />
                <div>
                    <label htmlFor="password">password</label><br /><RiLockPasswordLine />
                <input type="text" name='password' value={password} placeholder="Type your password" onChange={changeHandler}/></div><br />
            <div>
                <button  class="btn btn-primary" type='submit' value={'submit'}>Login</button>
            </div>
            <p>or Sign Up Using</p>
            <div>
     <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
     <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle /></a>
     <a href="https://google.com" target="_blank"><AiFillGoogleCircle /></a>
    </div>
    <p>or Sign Up Using</p>
    <div>
                <button  className="btn btn-primary" type='submit' value={'submit'}>SIGN UP</button>
            </div>
            
            </form>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Login;
