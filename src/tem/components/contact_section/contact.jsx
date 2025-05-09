export default function Contact_tem_icecream() {
    return (
        <>
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact_main">
                                <h1 className="contact_taital">تماس با ما </h1>
                                <form action="/action_page.php">
                                    <div className="form-group">
                                        <input type="text" className="email-bt" placeholder="نام" name="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="email-bt" placeholder="ایمیل" name="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="email-bt" placeholder="تلفن Numbar" name="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="massage-bt" placeholder="ماساژ" rows="5" id="comment" name="Massage" style={{height:" 63px"}}></textarea>
                                    </div>
                                </form>
                                <div className="main_bt"><a href="#">ارسال </a></div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="location_text">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10 active"><i className="fa fa-map-marker" aria-hidden="true"></i></span>ساخت این اول درست </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>تماس : +01
                                            1234567890
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>ایمیل :
                                            demo@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mail_main">
                                <h3 className="newsletter_text">عضویت در خبرنامه </h3>
                                <div className="form-group">
                                    <textarea className="update_mail" placeholder="ایمیل خود را وارد کنید" rows="5" id="comment" name="Enter Your Email"></textarea>
                                    <div className="subscribe_bt"><a href="#">اشتراک </a></div>
                                </div>
                            </div>
                            <div className="footer_social_icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}