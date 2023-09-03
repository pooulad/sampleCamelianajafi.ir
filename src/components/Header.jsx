import React from 'react';
import { BsTelegram, BsTelephoneFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import logo from "../assets/images/logo.webp"
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
            <div className='header_middle'>
                <img className='header_logo_img' src={logo} alt="logo" />
                <h1>آکادمی شاتل</h1>
            </div>
            <div className='header_bottom'>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">خانه</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">دوره ها</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">مدرسان</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">خبر</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">بلاگ</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">درباره ما</a>
                </div>
                <div className='navbar_link'>
                    <a className='header_a_tag_link' href="#">زبان ها</a>
                </div>
                <div className='navbar_link_icon'>
                    <div>
                        <BsTelegram />
                    </div>
                    <div>
                        <AiFillLinkedin />
                    </div>
                    <div>
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header