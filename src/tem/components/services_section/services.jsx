import Services_card from "./services_card";

export default function Services() {
    return (
        <>
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="services_taital">ما بستنی خدمات  </h1>
                            <p className="services_text">در طول زمان به عنوان کم به عنوان خستگی و چاقی  </p>
                        </div>
                    </div>
                    <div className="services_section_2">
                        <div className="row">
                            <Services_card
                                title={'کوکی ها کرم یخ'}
                                children={'لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا, چاق '}
                                imgs={'/tem/images/icon-1.png'}
                            >
                            </Services_card>
                            <Services_card
                                title={'کوکی ها کرم یخ'}
                                children={'لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا, چاق '}
                                imgs={'/tem/images/icon-2.png'}
                            >
                            </Services_card>
                            <Services_card
                                title={'کوکی ها کرم یخ'}
                                children={'لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا, چاق '}
                                imgs={'/tem/images/icon-1.png'}
                            >
                            </Services_card>
                            
                            {/* <div className="col-md-4">
                                <div className="services_box">
                                    <h5 className="tasty_text"><span className="icon_img"><img src="/tem/images/icon-1.png"/></span>کوکی ها کرم یخ
                                    </h5>
                                    <p className="lorem_text">
                                    لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا, چاق    
                                    </p>
                                </div>
                            </div> */}
                            {/* <div className="col-md-4">
                                <div className="services_box">
                                    <h5 className="tasty_text"><span className="icon_img"><img src="/tem/images/icon-2.png"/></span>کوکی ها کرم یخ
                                    </h5>
                                    <p className="lorem_text">لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه
                                        اروپا, چاق  </p>
                                </div>
                            </div> */}
                            {/* <div className="col-md-4">
                                <div className="services_box">
                                    <h5 className="tasty_text"><span className="icon_img"><img src="/tem/images/icon-1.png"/></span>کوکی ها کرم یخ
                                    </h5>
                                    <p className="lorem_text">لطفا اینجا کلیک کنید. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه
                                        اروپا, چاق  </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="seemore_bt"><a href="#">ادامه مطلب  </a></div>
                </div>
            </div>
        </>
    )
}