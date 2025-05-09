import Copyright_section from "../../components/copyright_section/copyright_section";
import Tem_navbar from "../../components/heder_section/navbar";
import Services from "../../components/services_section/services";

export default function Services_index() {
    return (
        <>
            <Tem_navbar />
            <div style={{ paddingTop: '0px', borderTop: '1px solid #fc95c4', marginBottom: '120px', display: 'flex', }}>
                <Services />
            </div>
            <Copyright_section />
        </>
    )
}