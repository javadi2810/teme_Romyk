import Aboute from "../../components/Aboute_section/Aboute";
import Contact_tem_icecream from "../../components/contact_section/contact";
import Copyright_section from "../../components/copyright_section/copyright_section";
import Cream from "../../components/Cream_section/Cream";
import Heder_tem from "../../components/heder_section/heder";
// import Tem_navbar from "../../components/heder_section/navbar";
import Services from "../../components/services_section/services";
import Testimonial from "../../components/testimonial/Testimonial";

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