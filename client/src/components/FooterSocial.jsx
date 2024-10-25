import { DIRECTIONS } from "../constants";
import logo from "../assets/images/text.webp"

const FooterSocial = () => {
    return <div className="address">
        <div className="logo">
            <img src={logo} alt="tu contador online argentina" />
        </div>
        {
            DIRECTIONS?.map((item, i) => (
                <div className="item" key={i}>
                    <div className="logo">
                        <img src={item.icon} alt="" />
                    </div>
                    <div className="info">
                        <span>{item.type}</span>
                        <p>{item.address}</p>
                    </div>
                </div>
            ))
        }
    </div>
}
export default FooterSocial;