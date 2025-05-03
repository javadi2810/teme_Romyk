import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index_icecream from "./tem/index/index_icecream";
import Aboute from "./tem/index/Aboute_section/Aboute";
import Tem_navbar from "./tem/index/heder_section/navbar";
import Copyright_section from "./tem/index/copyright_section/copyright_section";
import Abute_index from "./tem/about/Abute_index";
import Icecream_index from "./tem/icecream/icecream_index";
import Services_index from "./tem/services/services_index";
import Blog_index from "./tem/blog/blog_index";
import Contact_index from "./tem/contact/contact_index";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" Component={()=><Index_icecream/>}/>
            <Route path="/Abute" Component={()=><Abute_index/>}/>
            <Route path="/icecream" Component={()=><Icecream_index/>}/>
            <Route path="/services" Component={()=><Services_index/>}/>
            <Route path="/blog" Component={()=><Blog_index/>}/>
            <Route path="/contact" Component={()=><Contact_index/>}/>
        </Routes>
    </>
  );
}
export default App;
