import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { getAllUsers } from '../../redux/actionCreator/userActionCreator';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import ConfirmationModal from '../Modals/ConfirmationModal';

function UsersTable() {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number>(0)

  const dispatch = useAppDispatch();

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteUser = async(userId:number) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      if(response.status === 200) {
        setShowModal(false)
        dispatch(getAllUsers({}));
      }
    } catch (error) {
        console.log(error);
        
    }
  }

  useEffect(() => {
    dispatch(getAllUsers({}));
  }, [dispatch])

  const { userData } = useAppSelector((state) => state.usersReducer)
  
  return (
    <>
    <ConfirmationModal
      showModal={showModal}
      title="Delete User"
      description="Are you sure you want to delete this user?"
      action={() => deleteUser(userId)}
      closeModal={closeModal}
    />
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
            userData?.map((user: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{moment(user.createdAt).utc().format('YYYY-MM-DD')}</td>
                <td>
                  <Link to={`/users/${user._id}`} className='btn btn-secondary me-3'>Edit</Link>
                  <Button onClick={() => {
                    setShowModal(true);
                    setUserId(user._id)
                  }} className='btn btn-danger'>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>

  )
}

export default UsersTable