import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdWifiCalling3 } from "react-icons/md";
import './PopUp.css'

const contact = require('../../assets/images/consultant-promo-2.png')

const PopUp = () => {

    const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <Button style={{backgroundColor:'#3a424a'}} onClick={() => setOpenModal(true)}><FaArrowRightLong /></Button>
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="pop-up-main text-center">
         <div className="pop-up-avatar">
            <img src={contact} alt="" />
            </div>

            <div className="other-contact-details">
                <h1 className='other-contact-h1'>Save <span className='color-span'>$35</span> – use promo code during call</h1>
                <div className="other-wrapper">

                <div className="other-details-call-icon">
                    <MdWifiCalling3/>
                </div>
                 <Link className='other-contact-link'>(833) 436-0717</Link>

                </div>
            </div>
            <div className="promo-code">
                <p className='other-contact-p'>Tell the code:</p>
                <div className="other-span-border">
                <span className='other-contact-promo-code'>WOWFLY35</span>
                </div>
            </div>
         
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default PopUp