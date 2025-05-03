import Aboute from "./Aboute_section/Aboute";
import Contact_tem_icecream from "./contact_section/contact";
import Copyright_section from "./copyright_section/copyright_section";
import Cream from "./Cream_section/Cream";
import Heder_tem from "./heder_section/heder";
import Tem_navbar from "./heder_section/navbar";
import Services from "./services_section/services";
import Testimonial from "./testimonial/Testimonial";

export default function Index_icecream() {
    return(
        <>  
            <Heder_tem/>
            <Aboute/>
            <Cream/>
            <Services/>
            <Testimonial/>
            <Contact_tem_icecream/>
            <Copyright_section/>
        </>
    )
}