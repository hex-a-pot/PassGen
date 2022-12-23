import styled from "styled-components";
import { useState, useEffect } from "react";
import { generateString } from "../Services/StringGenerator";
import { Restore } from "@material-ui/icons";

const Container = styled.div`
  height: 100vh;
  background-color: #ffc6d3;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: #3a4f7a;
  font-weight: 500;
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const DisplayBox = styled.div`
  width: 80%;
  height: 30%;
  background-color: #e98ead;
  display: flex;
  align-items: center;
`;
const Password = styled.h1`
  flex: 2;
  margin-left: 5px;
  opacity: 0.7;
  letter-spacing: 2px;
  color: #3a4f7a;
  text-align: center;
`;
const Reset = styled.span`
  flex : 1;
  display : flex;
  align-items : center;
  justify-content : flex-end;
  color : #3a4f7a;
  margin-right : 80px;
  cursor:pointer;
  &:hover{
    color : white;
  }
`
const SliderBox = styled.div`
  width: 70%;
  height: 40%;
  background-color: #fea1bf;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Desc = styled.span`
  margin: 20px 20px;
  opacity: 0.7;
  color: #3a4f7a;
  text-align: center;
`;
const CurrentLength = styled.span`
  margin: 2px 10px 20px 20px;
  color: #3a4f7a;
  opacity: 0.8;
`;

const Input = styled.input`
  -webkit-appearance: none;
  margin-left: 5px;
  width: 90%;
  cursor: pointer;
  outline: none;
  background: #d3d3d3;
  height: 5px;
  opacity: 0.7;
  border-radius: 5px;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #3a4f7a;
    content: ${(props) => props.value};
  }
`;
const Conditions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;
const Label = styled.label`
  color: #3a4f7a;
  opacity: 0.8;
  margin: 5px;
`;

const Condition = styled.input`
  margin: 5px;
  cursor: pointer;
`;

function PasswordBox() {
  const [length, setLength] = useState(15);
  const [isDigit, setIsDigit] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isSpecialChar, setIsSpecialChar] = useState(true);
  const [reset,setReset] = useState(false);

  const [password, setPassword] = useState("");

  useEffect(() => {
    var passParams = {
      length,
      isDigit,
      isUpperCase,
      isLowerCase,
      isSpecialChar,
    };

    const generatedPassword = generateString(passParams);
    setPassword(generatedPassword);
  }, [length, isDigit, isUpperCase, isLowerCase, isSpecialChar,reset]);

  const handleChange = (event) => {
    setLength(event.target.value);
  };

  return (
    <Container>
      <Title>Create Strong Passwords with PGEN</Title>
      <DisplayBox>
        <Password>{password}</Password>
        <Reset>
          <Restore style={{ fontSize: 50 }} onClick = {()=>setReset(!reset)}/>
        </Reset>
      </DisplayBox>
      <SliderBox>
        <Desc>
          Use the slider, and select from the options, below, to lengthen your
          password and strengthen your security.
        </Desc>
        <CurrentLength>
          Current Password Length <b>{length}</b>
        </CurrentLength>
        <Input
          type="range"
          min="4"
          max="64"
          value={length}
          onChange={handleChange}
        ></Input>
        <Conditions>
          <Label>
            Digits[0-9]
            <Condition
              type="checkbox"
              checked={isDigit}
              onChange={() => setIsDigit(!isDigit)}
            ></Condition>
          </Label>
          <Label>
            Uppercase[A-Z]
            <Condition
              type="checkbox"
              checked={isUpperCase}
              onChange={() => setIsUpperCase(!isUpperCase)}
            ></Condition>
          </Label>
          <Label>
            Lowercase[a-z]
            <Condition
              type="checkbox"
              checked={isLowerCase}
              onChange={() => setIsLowerCase(!isLowerCase)}
            ></Condition>
          </Label>
          <Label>
            Special Characters[@!#$%^&*]
            <Condition
              type="checkbox"
              checked={isSpecialChar}
              onChange={() => setIsSpecialChar(!isSpecialChar)}
            ></Condition>
          </Label>
        </Conditions>
      </SliderBox>
    </Container>
  );
}

export default PasswordBox;
