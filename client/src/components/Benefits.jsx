import { BENEFITS } from "../constants";

const Benefits = ({ one, two, three, type }) => {
    return <div className={`cards ${type}`}>
        <div className="card">
            <div className="header">
                <div className="circle"></div>
                <h4>{BENEFITS[one].title}</h4>
            </div>
            <div className="body">
                <p>{BENEFITS[one].description}</p>
            </div>
        </div>
        <div className="card">
            <div className="header">
                <div className="circle"></div>
                <h4>{BENEFITS[two].title}</h4>
            </div>
            <div className="body">
                <p>{BENEFITS[two].description}</p>
            </div>
        </div>
        <div className="card">
            <div className="header">
                <div className="circle"></div>
                <h4>{BENEFITS[three].title}</h4>
            </div>
            <div className="body">
                <p>{BENEFITS[three].description}</p>
            </div>
        </div>
    </div>
}

export default Benefits;