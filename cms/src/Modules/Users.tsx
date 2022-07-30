import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { getAllUsers } from '../redux/actionCreator/userActionCreator';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';

function Users() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    dispatch(getAllUsers({}));
  }, [dispatch])

  const {userData, userLoading} = useAppSelector((state) => state.usersReducer)

  console.log("userData", userData);
  
  
  return (
    <div>
      <div className="section-head">
          <h3>Users</h3>
          <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
        </div>
    </div>
  )
}

export default Users