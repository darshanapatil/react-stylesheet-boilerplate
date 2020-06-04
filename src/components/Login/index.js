import React from "react";
import {Form,ImgContainer,Img,Container,Lable,Input,Button} from "./styleComponent";

// console.log(process.env.REACT_APP_REGION);
let APP_REGION = process.env.REACT_APP_REGION;

const Login = () => {
 return <Form>
    <ImgContainer>
        <Img/>
    </ImgContainer>

    <Container>
        <Lable> Username </Lable>
        <Input type="text" placeholder="Enter Username" name="uname" />

        <Lable>Password</Lable>
        <Input type="password" placeholder="Enter Password" name="psw" />

        <Button type="submit">Login</Button>
        {APP_REGION !="IND" ?
        <Lable>
        Remember me  <Input type="checkbox" checked="checked" name="remember" /> 
        </Lable>
        : ""}

    </Container>

    <Container>
        <Button type="button" className="cancelbtn">Cancel</Button>
        <span className="psw">Forgot <a href="#">password?</a></span>
    </Container>

</Form>


};

export default Login;