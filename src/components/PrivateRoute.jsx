import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
 // const { currentUser } = useSelector((state) => state.user);
 const currentUser = JSON.parse(localStorage.getItem("user")) 
 return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}