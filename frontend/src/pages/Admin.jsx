import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const role = localStorage.getItem('role');
        const accessToken = localStorage.getItem('loginAccessToken');
        if((!role || !accessToken) || role !== 'Admin'){
            navigate('/login');
        }
    }, []);
  return (
    <div>
        <h1 style={{margin: '10px', textAlign: 'center'}}>Welcome Admin</h1>
        <button onClick={() => navigate('/login')}>Go Back</button>
    </div>
  )
}

export default Admin