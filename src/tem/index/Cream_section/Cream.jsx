import Aboute_0 from "../Aboute_section/Aboute_0";
import Cream_card from "./Cream_card"

export default function Cream() {
    const card_object1 = [
        {
            img: "/tem/images/img-1.png",
            price: '$10',
            strawberry: 'بستنی لیووانی',
        },
        {
            img: "/tem/images/img-2.png",
            price: '$10',
            strawberry: 'بستنی قیفی',
        },
        {
            img: "/tem/images/img-1.png",
            price: '$10',
            strawberry: 'بستنی لیوانی 3 تایی',
        },
    ];


    const card_object2 = [
        {
            img: "/tem/images/img-3.png",
            price: '$10',
            strawberry: 'بستنی ساده',
        },
        {
            img: "/tem/images/img-4.png",
            price: '$10',
            strawberry: 'بستنی کاکائویی',
        },
        {
            img: "/tem/images/img-5.png",
            price: '$10',
            strawberry: 'بستنی توت فرنگی',
        },
    ]
    
    return (
        <>

            <div className="container">
                <div className="row">
                    <div class="col-md-12"><h1 class="cream_taital">ما برجسته بستنی </h1><p class="cream_text">در طول زمان به عنوان کم به عنوان خستگی و چاقی </p></div>
                </div>
                <div className="cream_section_2">


                    <div className="row">
                        {
                            card_object1.map((item) => {
                                return <Cream_card item={item} />
                            })
                        }

                        {/* <div className="col-md-4">
                            <div className="cream_box">
                                <div className="cream_img"><img src="/tem/images/img-1.png" /></div>
                                <div className="price_text">$10</div>
                                <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                                <div className="cart_bt"><a href="#">Add To Cart</a></div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="cream_section_2">
                    <div className="row">
                        {
                            card_object2.map((item) => {
                                return <Cream_card item={item} />
                            })
                        }

                        {/* <div className="col-md-4">
                            <div className="cream_box">
                                <div className="cream_img"><img src="/tem/images/img-3.png" /></div>
                                <div className="price_text">$10</div>
                                <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                                <div className="cart_bt"><a href="#">Add To Cart</a></div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="seemore_bt"><a href="#">مشاهده بیشتر</a></div>
            </div>

        </>
    )
}