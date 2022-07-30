import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router'
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import SearchResult from '../../components/SearchItemCard/SearchResult';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import API from "../../api-config";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function List() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    }, [])

    const location: any = useLocation()

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)

    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)

    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [minPrice, setMinPrice] = useState<any>(undefined)
    const [maxPrice, setMaxPrice] = useState<any>(undefined)


    const fetchUrl = `${API.hotel}/filter?city=${destination}&minPrice=${minPrice || 0}&maxPrice=${maxPrice || 999}`;
    const fetchHotel = async () => {
        setLoading(true);
        try {
            const response = await axios.get(fetchUrl)
            setData(response.data)
        } catch (error: any) {
            setError(error)
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchHotel()
    }, [fetchUrl])



    return (
        <>
            <Header />
            <Container>

                <div className="listWrapper">
                    <div className="search-listing">
                        <h2 className="searchTitle">Search</h2>
                        <Form className="searchItems">
                            <Form.Group className="items" controlId="formBasicEmail">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" value={destination} />
                            </Form.Group>
                            <Form.Group className="items" controlId="formBasicEmail">
                                <Form.Label>Check-in Date</Form.Label>
                                <span onClick={() => setOpenDatePicker(!openDatePicker)}>
                                    {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}
                                </span>
                                {
                                    openDatePicker &&
                                    <>
                                        <DateRangePicker
                                            ranges={date}
                                            onChange={item => setDate([item.selection])}
                                            className='date-range-picker'
                                            minDate={new Date()}
                                        />
                                        <Button variant='default' className='close-date' onClick={() => setOpenDatePicker(false)}><i className="fa-solid fa-xmark"></i></Button>
                                    </>

                                }
                            </Form.Group>
                            <Form.Group className="items" controlId="formBasicEmail">
                                <Form.Label>Options</Form.Label>
                                <div className="px-3">
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Min Price <small>per Night</small></Form.Label>
                                        <Form.Control type="number" min={0} onChange={e => setMinPrice(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Max Price <small>per Night</small></Form.Label>
                                        <Form.Control type="number" min={0} onChange={e => setMaxPrice(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Adult</Form.Label>
                                        <Form.Control type="number" min={1} placeholder={option.adult} />
                                    </Form.Group>
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Children</Form.Label>
                                        <Form.Control type="number" min={0} placeholder={option.children} />
                                    </Form.Group>
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Room</Form.Label>
                                        <Form.Control type="number" min={1} placeholder={option.room} />
                                    </Form.Group>
                                </div>
                            </Form.Group>
                            <Button variant='primary' onClick={fetchHotel}>Search</Button>
                        </Form>
                    </div>
                    <div className="search-result">
                        {
                            loading ?
                                <div className='h-100 d-flex align-items-center justify-content-center'>
                                    <Loader />
                                </div> :
                                <>
                                    {
                                        data.map((item: any) => (
                                            <SearchResult item={item} key={item._id} />
                                        ))
                                    }
                                </>
                        }
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default List