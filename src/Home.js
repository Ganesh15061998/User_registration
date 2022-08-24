import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import {Link} from 'react-router-dom'

// import Form from 'react-bootstrap/Form'

function Home() {
    const [inpval, setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })
    const [data , setData] = useState([])

    console.log(inpval)

    const gratdata=(e)=>{
        // console.log(e.target.value)
        const{value,name} = e.target;
        // console.log(value,name)

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
}})}

        const addData = (e)=>{
            e.preventDefault();

            // console.log(inpval)
            const{name,email,date,password} = inpval

            if(name === ""){
                alert("Name field is Requred")
            }else if(email === ""){
                alert("Email field is Requred")
            }else if(!email.includes("@")){
                alert("Please Enter valid Email Id")
            }else if (password.length < 5){
                alert("password at least five No")
            }else{
                console.log("Data added succesfully")

                localStorage.setItem("useryoutube", JSON.stringify([...data,inpval]));

            }

        }



    return (
        <>

            <div className="container  mt-3">
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3' style={{width:"100%"}}>
                        <h3 className='text-center  col-lg-6'>Sign up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6 p-3" controlId="formBasicEmail">
                                 
                                <Form.Control type="text" name='name' onChange={gratdata}  placeholder="Enter Your Name" />
                                 
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                 
                                <Form.Control type="email"  name='email' onChange={gratdata} placeholder="Enter email" />
                                 
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                 
                                <Form.Control onChange={gratdata} name='date'  type="date" />
                                 
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                
                                <Form.Control type="password" name='password' onChange={gratdata} placeholder="Password" />
                            </Form.Group>
                            
                            <Button variant="primary" className="col-lg-6"  onClick={addData}
                            style= {{background:"rgb(64,135,127"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='p-3'>Already Have an Accont <span><Link to="login">SingIn</Link></span></p>

                    </div>

                    <Sign_img />

                </section>
            </div>

        </>
    )
}

export default Home