import Contact_tem_icecream from "../index/contact_section/contact";
import Copyright_section from "../index/copyright_section/copyright_section";
import Tem_navbar from "../index/heder_section/navbar";

export default function Contact_index() {
    return (
        <>
            <Tem_navbar />
            <div style={{ paddingTop: '0px', borderTop: '1px solid #fc95c4', marginBottom: '0px', display: 'flex', }}>
                <Contact_tem_icecream />
            </div>
            <Copyright_section />
        </>
    )
}