import React from 'react'
import { Col, Container, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DateRangePicker } from 'react-date-range';

function SearchBar() {
    const handleSelect = (date: any) => {
        console.log(date); // native Date object
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
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
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <DateRangePicker
                                        editableDateInputs={true}
                                        moveRangeOnFirstSelection={false}
                                        ranges={[selectionRange]}
                                        onChange={handleSelect}
                                    />
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