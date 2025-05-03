export default function Aboute_0({title ,children, imgs ,imgclass}) {
    return (
        <>
        <div className="abute-khat">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_img"><img className={imgclass} src={imgs} /></div>
                    </div>
                    <div className="col-md-6">
                        {/* <h1 className="about_taital">About Icecream</h1> */}
                        <h1 className="about_taital">{title}</h1>
                        {/* <p className="about_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p> */}
                        <p className="about_text">{children}</p>
                       <div className="read_bt_1"><a href="#">ادامه مطلب</a></div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}