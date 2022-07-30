import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { getAllUsers } from '../redux/actionCreator/userActionCreator';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import moment from "moment";
import UsersTable from '../Components/Tables/Users.table';

function Users() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])


  return (
    <div>
      <div className="section-head">
        <h3>Users</h3>
        <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>
      <UsersTable />
    </div>
  )
}

export default Users