import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

export default function MainRoutes(props) {

    return <Routes>
            <Route path="/" element={<Login url={props.url}/>} />
            <Route path="/home" element={<Home url={props.url}/>} />
            <Route path="/signup" element={<Signup url={props.url}/>} />
        </Routes>
}