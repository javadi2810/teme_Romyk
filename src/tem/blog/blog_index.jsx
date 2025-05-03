import Copyright_section from "../index/copyright_section/copyright_section";
import Tem_navbar from "../index/heder_section/navbar";
import Testimonial from "../index/testimonial/Testimonial";

export default function Blog_index() {
    return (
        <>
            <Tem_navbar/>
            <div style={{ paddingTop: '0px', borderTop: '1px solid #fc95c4', marginBottom: '0px', display: 'flex', }}>
                <Testimonial />
            </div>
            <Copyright_section/>
        </>
    )
}