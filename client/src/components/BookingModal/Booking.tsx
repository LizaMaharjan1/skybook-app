import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function Booking(props: any) {

    return (
        <>
            <Modal show={props.show} onHide={props.hide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.hide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Booking