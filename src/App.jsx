import { Route, Routes } from "react-router-dom";
import Abute_index from "./tem/page/about/Abute_index";
import Blog_index from "./tem/page/blog/blog_index";
import Contact_index from "./tem/page/contact/contact_index";
import Icecream_index from "./tem/page/icecream/icecream_index";
import Index_icecream from "./tem/page/index/index_icecream";
import Services_index from "./tem/page/services/services_index";

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
