import Aboute_0 from "../index/Aboute_section/Aboute_0";
import Copyright_section from "../index/copyright_section/copyright_section";
import Tem_navbar from "../index/heder_section/navbar";

export default function Abute_index() {
    return (
        <>  
            <Tem_navbar/>
            <div style={{paddingTop:'90px', borderTop:'1px solid #fc95c4', marginBottom:'90px',}}>
                <Aboute_0
                    title={'در مورد بستنی'}
                    children={'ویسکانسین اما قابل مشاهده به کار و چاقی است. برای کسب اطلاعات بیشتر لطفا با ما تماس بگیرید و ورزش به جز برای به دست آوردن برخی از مزیت از آن. وارد شده در جستجوی لذت کسری از هزینه euconsectetur دوستیابی esequat. وارد شده برای حلقههای لذت است فرستاده می شود به اتحادیه اروپا '}
                    imgs={'/tem/images/about-img.png'}
                >
                </Aboute_0>
            </div>
            <Copyright_section/>
        </>
    )
}