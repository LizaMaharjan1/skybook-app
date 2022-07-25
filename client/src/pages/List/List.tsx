import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import SearchResult from '../../components/SearchItemCard/SearchResult';


function List() {

    const location: any = useLocation()

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)

    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)


    return (
        <>
            <Container>
                
                <div className="listWrapper">
                    <div className="search-listing">
                        <h2 className="searchTitle">Search</h2>
                        <Form className="searchItems">
                            <Form.Group className="items" controlId="formBasicEmail">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder={destination} />
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
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="optionItem" controlId="formBasicEmail">
                                        <Form.Label>Max Price <small>per Night</small></Form.Label>
                                        <Form.Control type="number" />
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
                            <Button variant='primary' type='submit'>Search</Button>
                        </Form>
                    </div>
                    <div className="search-result">
                        <SearchResult />
                        <SearchResult />
                        <SearchResult />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default List