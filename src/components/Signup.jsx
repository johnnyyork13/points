import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
    })
    const [sendUser, setSendUser] = useState(false);

    useEffect(() => {
        if (sendUser) {
            try {
                async function createUser() {
                    const url = props.url + "/signup";
                    await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newUser),
                    }).then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        setSendUser(false);
                        navigate('/')
                    }).catch((err) => console.log(err));
                }
                createUser();
            } catch(err) {
                console.log(err);
            }
        }
    }, [sendUser]);

    function checkIfFieldsHaveValues() {
        let allFieldsHaveValues = true;
        for (const key in newUser) {
            if (newUser[key] === "") {
                allFieldsHaveValues = false;
            }
        }
        if (allFieldsHaveValues) {
            setSendUser(true);
        }
    }

    return (
        <SignupContainer>
            <p>Signup</p>
            <SignupInput 
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({...newUser, username: e.target.value})}
            />
            <SignupInput 
                placeholder="First Name"
                value={newUser.firstName}
                onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
            />
            <SignupInput 
                placeholder="Last Name"
                value={newUser.lastName}
                onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
            />
            <SignupInput 
                placeholder="Password"
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            />
            <SignupInput 
                placeholder="Confirm Password"
                type="password"
                value={newUser.confirmPassword}
                onChange={(e) => setNewUser({...newUser, confirmPassword: e.target.value})}
            />
            <SignupButton onClick={checkIfFieldsHaveValues}>Start Pointing</SignupButton>
        </SignupContainer>
    )
}

const SignupContainer = styled.div`

`

const SignupInput = styled.input`
        
`

const SignupButton = styled.button`

`