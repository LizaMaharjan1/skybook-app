import React, { useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

function SearchBar() {
    const [date, setDate] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])
    // Date range picker
    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)

    // Option popup
    const [option, setOption] = useState ({
        adult: 1,
        children: 0,
        room: 1
    })
    const [openOption, setOpenOption] = useState<boolean>(false)
    return (
        <>
            <Container>
                <div className="searchbar">
                    <Form>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3 date-range">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Label onClick={() => setOpenDatePicker(!openDatePicker)}>
                                        {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}
                                    </Form.Label>
                                    {
                                        openDatePicker && <DateRangePicker
                                            editableDateInputs={true}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            onChange={item => setDate([item.selection])}
                                            className='date-range-picker'
                                        />
                                    }
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Label onClick={() => setOpenOption(!openOption)}>
                                        
                                    </Form.Label>
                                    {
                                        openOption && <div className='options'>
                                            <div className="option-item">
                                                <label>Adults</label>
                                                <div className="option-coni">
                                                    <Button className='optionCountBtn'>-</Button>
                                                    <span className="optionNumb">1</span>
                                                    <Button className='optionCountBtn'>+</Button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </Container>
        </>
    )
}

export default SearchBar