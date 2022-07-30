import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import axiosInstance from '../../api/axios';
import { getAllRooms } from '../../redux/actionCreator/roomActionCreator';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import ConfirmationModal from '../Modals/ConfirmationModal';

function RoomsTable() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [roomId, setroomId] = useState<number>(0)

  const [error, setError] = useState('')

  const dispatch = useAppDispatch()

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteHotel = async (roomId: any) => {
    try {
      const response = await axiosInstance.delete(`/rooms/${roomId}`);
      if (response.status === 200) {
        setShowModal(false)
        dispatch(getAllRooms({}));
      }
    } catch (error: any) {
      setError(error)
    }
  }

  useEffect(() => {
    dispatch(getAllRooms({}))
  }, [dispatch])

  const { roomData, roomLoading } = useAppSelector((state) => state.roomsReducer)
  return (
    <div>
      <ConfirmationModal
        showModal={showModal}
        title="Delete Hotel"
        description="Are you sure you want to delete this hotel?"
        action={() => deleteHotel(roomId)}
        closeModal={closeModal}
      />
      <Table striped bordered className='mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Max People</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            roomData?.map((room: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{room.title}</td>
                <td>{room.price}</td>
                <td>{room.maxPeople}</td>
                <td>
                  <Button variant='secondary' className='me-3'>Edit</Button>
                  <Button onClick={() => {
                    setShowModal(true);
                    setroomId(room._id)
                  }} variant='danger'>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default RoomsTable