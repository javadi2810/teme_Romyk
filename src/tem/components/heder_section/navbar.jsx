import { Link } from "react-router-dom";

export default function Tem_navbar() {
   return (
      <>
         <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand" href="index.html"><img src="/tem/images/logo.png" /></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item active">
                        <Link class="nav-link" to={'/'}>صفحه اصلی</Link>
                     </li>
                     <li class="nav-item" >
                        <Link class="nav-link" to={'/Abute'}>در مورد</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={'/icecream'}>بستنی</Link>
                     </li>

                     <li class="nav-item">
                        <Link class="nav-link" to={'/services'}>خدمات</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={'/blog'}>وبلاگ</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to={'/contact'}>تماس با ما</Link>
                        {/* <a class="nav-link" href="contact.html">تماس با ما  </a> */}
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <div class="login_bt"><a href="#">ورود  <span style={{ color: "#222222", }}><i class="fa fa-user" aria-hidden="true"></i></span></a></div>
                     <div class="fa fa-search form-control-feedback"></div>
                  </form>
               </div>
            </nav>
         </div>
      </>
   )
}