import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { getAllUsers } from '../redux/actionCreator/userActionCreator';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import moment from "moment";

function Users() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    dispatch(getAllUsers({}));
  }, [dispatch])

  const { userData, userLoading } = useAppSelector((state) => state.usersReducer)

  console.log("userData", userData);

  return (
    <div>
      <div className="section-head">
        <h3>Users</h3>
        <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>
      <Table striped bordered className='mt-4'>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userData?.map((user: any, index:number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{moment(user.createdAt).utc().format('YYYY-MM-DD')}</td>
                <td>
                  <Link to='/' className='btn btn-secondary me-3'>Edit</Link>
                  <Link to='/' className='btn btn-danger'>Delete</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users