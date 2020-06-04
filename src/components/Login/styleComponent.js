
import styled from "styled-components";
import logo from "images/img_avatar2.png"; // Path 2

export const Form = styled.form`
    border: 3px solid #f1f1f1;
    width: 400px;
    margin: 0px auto;
`;

export const ImgContainer =styled.div`
    text-align:center;
    margin: 24px 0 12px 0;
`;

export const Img = styled.img.attrs(props => ({
    //Default attr
    alt:"Avatar",
    src:logo,
    height:"20%",
    width:"20%",
}))``;

export const Container = styled.div`
    padding: 16px;
    background-color: #f1f1f1
    .cancelbtn{
        width: auto;
        padding: 10px 18px;
        background-color: #f44336 !important;
    }
`;

export const Lable = styled.label`
    font-weight:bold
`;

export const Input = styled.input.attrs(props => ({
    type:props.type,
    placeholder:props.placeholder,
    name : props.name,
    checked:props.checked
}))`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

export const Button = styled.button.attrs(props => ({
    type:props.type,
}))`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;

`;