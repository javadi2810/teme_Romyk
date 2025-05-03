export default function Cream_card({item}) {

    
    return (
        <div className="col-md-4">
            <div className="cream_box">
                <div className="cream_img"><img src={item?.img} /></div>
                <div className="price_text">{item.price}</div>
                <h6 className="strawberry_text">{item.strawberry}</h6>
                <div className="cart_bt"><a href="#">اضافه به سبد خرید</a></div>
            </div>
        </div>
    )
}