import { Link } from "react-router-dom";

export default function Testimonial() {
    return(
        <>
        <div className="testimonial_section layout_padding">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <h1 className="testimonial_taital">
                  <Link to={'/Abute'}>گواهی نامه</Link>   
               </h1>
            </div>
         </div>
         <div className="testimonial_section_2">
            <div className="row">
               <div className="col-md-12">
                  <div className="testimonial_box">
                     <div id="main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <p className="testimonial_text">در طول زمان به عنوان کم به عنوان خستگی و چاقی است. برای کسب
                                 اطلاعات بیشتر لطفا با ما تماس بگیرید و ورزش به جز برای به دست آوردن برخی از مزیت از آن.
                                 وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا fugiat pariatur.
                                 Excepteur sint </p>
                              <h4 className="client_name">ماری مرداب </h4>
                              <div className="client_img"><img src="/tem/images/client-img.png" /></div>
                           </div>
                           <div className="carousel-item">
                              <p className="testimonial_text">در طول زمان به عنوان کم به عنوان خستگی و چاقی است. برای کسب
                                 اطلاعات بیشتر لطفا با ما تماس بگیرید و ورزش به جز برای به دست آوردن برخی از مزیت از آن.
                                 وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا fugiat pariatur.
                                 Excepteur sint </p>
                              <h4 className="client_name">ماری مرداب </h4>
                              <div className="client_img"><img src="/tem/images/client-img.png" /></div>
                           </div>
                           <div className="carousel-item">
                              <p className="testimonial_text">در طول زمان به عنوان کم به عنوان خستگی و چاقی است. برای کسب
                                 اطلاعات بیشتر لطفا با ما تماس بگیرید و ورزش به جز برای به دست آوردن برخی از مزیت از آن.
                                 وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا fugiat pariatur.
                                 Excepteur sint </p>
                              <h4 className="client_name">ماری مرداب </h4>
                              <div className="client_img"><img src="/tem/images/client-img.png" /></div>
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                           <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                           <i className="fa fa-angle-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </>
    )
}