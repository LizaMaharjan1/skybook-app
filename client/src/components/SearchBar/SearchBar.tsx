import React, { useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router';

function SearchBar() {
    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)
    const [destination, setDestination] = useState("")

    // Date range picker
    const [date, setDate] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])

    const handleDatePicker = () => {
        setOpenDatePicker(!openDatePicker)
        setOpenOption(false)
    }

    // Option popup
    const [openOption, setOpenOption] = useState<boolean>(false)
    const [option, setOption] = useState<any>({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOptions = () => {
        setOpenOption(!openOption)
        setOpenDatePicker(false)
    }

    // add or minus the option values
    const handleOptionChange: any = (name: string, operation: string) => {
        setOption((prev: any) => {
            return {
                ...prev,
                [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
            }
        })
    }

    // For changing selected dates into total days
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    const dayCalculate = (sDate: any, eDate: any) => {
        const timeDiff = Math.abs(eDate?.getTime() - sDate?.getTime())
        const dayDiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return dayDiff;
    }

    const totalDays:any = dayCalculate(date[0].startDate , date[0].endDate)

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, option } })
        localStorage.setItem("totalDays", totalDays)
        localStorage.setItem("roomCount", option.room)
    }


    return (
        <>
            <Container>
                <div className="searchbar">
                    <Form>
                        <Row className='align-items-center'>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-hotel"></i></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search by city"
                                        aria-label="Search by city"
                                        aria-describedby="basic-addon1"
                                        onChange={e => setDestination(e.target.value)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="date-range">
                                    <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-calendar-days"></i></InputGroup.Text>
                                    <Form.Label onClick={handleDatePicker} className='form-control mb-0 d-flex align-items-center flex-grow-1'>
                                        {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}
                                    </Form.Label>
                                    {
                                        openDatePicker &&
                                        <>
                                            <DateRangePicker
                                                editableDateInputs={true}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                onChange={item => setDate([item.selection])}
                                                minDate={new Date()}
                                                className='date-range-picker'
                                            />
                                            <Button variant='default' className='close-date' onClick={() => setOpenDatePicker(false)}><i className="fa-solid fa-xmark"></i></Button>
                                        </>

                                    }

                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-people-group"></i></InputGroup.Text>
                                    <Form.Label onClick={handleOptions} className='form-control mb-0 d-flex align-items-center flex-grow-1'>
                                        {`${option.adult} adult - ${option.children} children - ${option.room} room`}
                                    </Form.Label>
                                    {
                                        openOption &&
                                        <>
                                            <div className='options'>
                                                <div className="options-item">
                                                    <label>Adults</label>
                                                    <div className="options-config">
                                                        <Button className='optionCountBtn' disabled={option.adult <= 1} onClick={() => handleOptionChange("adult", "d")}>-</Button>
                                                        <span className="optionNumb">{option.adult}</span>
                                                        <Button className='optionCountBtn' onClick={() => handleOptionChange("adult", "i")}>+</Button>
                                                    </div>
                                                </div>
                                                <div className="options-item">
                                                    <label>Children</label>
                                                    <div className="options-config">
                                                        <Button className='optionCountBtn' disabled={option.children <= 0} onClick={() => handleOptionChange("children", "d")}>-</Button>
                                                        <span className="optionNumb">{option.children}</span>
                                                        <Button className='optionCountBtn' onClick={() => handleOptionChange("children", "i")}>+</Button>
                                                    </div>
                                                </div>
                                                <div className="options-item">
                                                    <label>Room</label>
                                                    <div className="options-config">
                                                        <Button className='optionCountBtn' disabled={option.room <= 1} onClick={() => handleOptionChange("room", "d")}>-</Button>
                                                        <span className="optionNumb">{option.room}</span>
                                                        <Button className='optionCountBtn' onClick={() => handleOptionChange("room", "i")}>+</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant='default' className='close-date' onClick={() => setOpenOption(false)}><i className="fa-solid fa-xmark"></i></Button>
                                        </>

                                    }
                                </InputGroup>
                            </Col>
                            <Col sm={1}>
                                <Button variant='primary' type='submit' onClick={handleSearch}>Search</Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </Container>
        </>
    )
}

export default SearchBar