export default function Services_card({ title, children, imgs, imgclass }) {
    return (
        <div className="col-md-4">
            <div className="services_box">
                <h5 className="tasty_text">
                    <span className="icon_img"><img className={imgclass} src={imgs} /></span>
                    {title}
                </h5>
                <p className="lorem_text">
                    {children}
                </p>
            </div>
        </div>
    )
}