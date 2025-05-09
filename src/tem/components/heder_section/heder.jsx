import Tem_navbar from "./navbar";


export default function Heder_tem() {
   return (
      <>
         <div class="header_section">
            <Tem_navbar />
            {/* <!-- banner section start --> */}
            <div class="banner_section layout_padding">
               <div class="container">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="">01  </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="">02  </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active">03  </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" class="">04  </li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item">
                           <div class="row">
                              <div class="col-sm-6">
                                 <h1 class="banner_taital">بستنی </h1>
                                 <p class="banner_text">آن است که یک مدت طولانی ایجاد واقعیت است که خواننده خواهد شد پریشان
                                    مطالب خواندنی از یک صفحه زمانی که به دنبال طرح آن است. نقطه با استفاده از Lorem </p>
                                 <div class="started_text"><a href="#">سفارش </a></div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="banner_img"><img src="/tem/images/banner-img.png" /></div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="row">
                              <div class="col-sm-6">
                                 <h1 class="banner_taital">بستنی  </h1>
                                 <p class="banner_text">این یک واقعیت تاسیس یک خواننده را پریشان مطالب خواندنی از یک صفحه
                                    زمانی که به دنبال طرح آن است. نقطه با استفاده از Lorem  </p>
                                 <div class="started_text"><a href="#">سفارش  </a></div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="banner_img"><img src="/tem/images/banner-img.png" /></div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item active">
                           <div class="row">
                              <div class="col-sm-6">
                                 <h1 class="banner_taital">بستنی </h1>
                                 <p class="banner_text">آن است که یک مدت طولانی ایجاد واقعیت است که خواننده خواهد شد پریشان
                                    مطالب خواندنی از یک صفحه زمانی که به دنبال طرح آن است. نقطه با استفاده از Lorem </p>
                                 <div class="started_text"><a href="#">سفارش </a></div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="banner_img"><img src="/tem/images/banner-img.png" /></div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="row">
                              <div class="col-sm-6">
                                 <h1 class="banner_taital">بستنی </h1>
                                 <p class="banner_text">آن است که یک مدت طولانی ایجاد واقعیت است که خواننده خواهد شد پریشان
                                    مطالب خواندنی از یک صفحه زمانی که به دنبال طرح آن است. نقطه با استفاده از Lorem </p>
                                 <div class="started_text"><a href="#">سفارش </a></div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="banner_img"><img src="/tem/images/banner-img.png" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- banner section end --> */}
         </div>
      </>
   )
}