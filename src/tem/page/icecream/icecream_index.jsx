import Copyright_section from "../../components/copyright_section/copyright_section";
import Cream from "../../components/Cream_section/Cream";
import Tem_navbar from "../../components/heder_section/navbar";

export default function Icecream_index() {
    return<>
        <Tem_navbar/>
        <div style={{paddingTop:'90px', borderTop:'1px solid #fc95c4', marginBottom:'90px',}}>
            <Cream/>
        </div>
        <Copyright_section/>
    </>
        
    
}