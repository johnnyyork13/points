import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { setGlobalUser } from '../state/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Login(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: "johnnyyork13",
        password: "testtest",
    })
    const [sendUser, setSendUser] = useState(false);

    useEffect(() => {
        if (sendUser) {
            try {
                async function loginUser() {
                    console.log('here');
                    const url = props.url + "/login";
                    await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user),
                    }).then((res) => res.json())
                    .then((res) => {
                        if (!res.message) {
                            console.log("RES", res);
                            dispatch(setGlobalUser(res));
                            navigate('/home')
                        } else {
                            console.log(res.message);
                        }
                        setSendUser(false);
                    }).catch((err) => console.log(err));
                }
                loginUser();
            } catch(err) {
                console.log(err);
            }
        }
    }, [sendUser])

    function checkIfFieldsHaveValues() {
        // let allFieldsHaveValues = true;
        // for (const key in user) {
        //     if (user[key] === "") {
        //         allFieldsHaveValues = false;
        //     }
        // }
        // if (allFieldsHaveValues) {
        //     setSendUser(true);
        // }
        setSendUser(true);
    }

    return (
        <LoginContainer>
            <p>LOGIN</p>
            <LoginInput 
                placeholder="Username"
                value="johnnyyork13"
                onChange={(e) => setUser({...user, username: e.target.value})}
            />
            <LoginInput 
                placeholder="Password"
                value="testtest"
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <LoginButton onClick={checkIfFieldsHaveValues}>Login</LoginButton>
            <SignupButton onClick={() => navigate("/signup")}>Signup</SignupButton>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`

`

const LoginInput = styled.input`
    
`

const LoginButton = styled.button`

`

const SignupButton = styled(LoginButton)`

`