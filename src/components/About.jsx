import React from 'react'
import bgimg from "../assets/images/bg-contact-form.jpg"
import "../styles/about.css";

function About() {
    return (
        <div className='about'>
            <div className='about_us'>
                <h1>درباره ما</h1>
                <hr className='hr_about' />
                <br />
                <p>آکادمی شاتل مجهز به یک‌صد صندلی آموزشی و دارای ٦٠ نفر هیات علمی‌ست و به دنبال تحقق هدف اصلی شاتل در دست‌یابی به برترین کیفیت خدمات، تاسیس شده است. این مرکز، در کنار مسئولیت آموزش و بازآموزی کارکنان، فعالیت‌های دیگری مانند حمایت از نخبگان و پروژه‌ه...</p>
                <a href="#">جزئیات</a>
            </div>
            <div className='vebinar'>
                <h1>وبینار</h1>
                <hr className='hr_about' />
                <div className='vebinar_text'>
                    <div className='vebinar_text_box'>8/</div>
                    <div>وبینار فرصت‌های سرمایه‌گذاری در صنعت ICT</div>
                </div>
                <div className='free_tag'>رایگان</div>
                <hr className='free_hr' />
                <br />
                <a href="#">نمایش همه</a>
            </div>
            <div className='about_form'>
                <div className='about_form_div'>
                    <div className='about_form_div_top'>
                        <img className='about_form_div_top_img' src={bgimg} alt="" />
                        برای دریافت آخرین خبرهای سایت مشخصات خود را وارد کنید.
                    </div>
                    <div className='about_form_div_bottom'>
                        <input type="text" name='name' placeholder='نام و نام خانوادگی' />
                        <input type="text" name='email' placeholder='ایمیل' />
                        <button className='subs_btn'>عضویت در خبرنامه</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About