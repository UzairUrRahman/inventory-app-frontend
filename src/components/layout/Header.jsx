
import { Button, Form, Image, Modal } from 'react-bootstrap';
import Avatar from './../../assets/img/useProfileImg.svg'
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center p-4'>

                    <div className='position-relative'>
                        <Image src={preview ? preview : Avatar} alt='' className='img-fluid uploadedImage mb-3' width={150} height={150} />
                        <Form.Control type='file' className='fileUpload' onChange={handleFileChange} />
                    </div>
                    <p className='paragraph'>The image dimension should be xyz.</p>
                    <div className='d-flex align-items-center'>
                        <Button className='btnPrimaryOutline w-100 me-2' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='btnPrimary w-100 ms-2' onClick={handleClose}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
