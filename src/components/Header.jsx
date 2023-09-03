import React from 'react';
import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import "../styles/header.css";

function Header() {
    return (
        <header className='header'>
            <div className='header_top'>
                <div className='header_question'>
                    <div>
                        <span className='header_question_text'>آیا سوالی دارید؟</span>
                    </div>
                    <div className='header_question_group'>
                        <span><BsTelephoneFill /></span>
                        <span>
                            <a className='header_a_tag' href="#">
                                ۲۲٦۲۲۱۱۹
                            </a>
                        </span>
                    </div>
                    <div className='header_question_group'>
                        <span><MdEmail /></span>
                        <span>
                            <a className='header_a_tag' href="#">
                                edu@shatel.ir
                            </a>
                        </span>
                    </div>
                </div>
                <div className='header_auth_links'>
                    <div>
                        <a className='header_a_tag' href="#">
                            ثبت نام
                        </a>
                    </div>
                    <span>|</span>
                    <div>
                        <a className='header_a_tag' href="#">
                            ورود
                        </a>
                    </div>
                </div>
            </div>
            <div>Header</div>
            <div>Header</div>
        </header>
    )
}

export default Header