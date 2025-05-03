import Copyright_section from "../index/copyright_section/copyright_section";
import Cream from "../index/Cream_section/Cream";
import Tem_navbar from "../index/heder_section/navbar";

export default function Icecream_index() {
    return<>
        <Tem_navbar/>
        <div style={{paddingTop:'90px', borderTop:'1px solid #fc95c4', marginBottom:'90px',}}>
            <Cream/>
        </div>
        <Copyright_section/>
    </>
        
    
}