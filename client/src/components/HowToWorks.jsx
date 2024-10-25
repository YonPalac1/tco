import { HOW } from "../constants";
import { HowWorksCards } from "../commons/HowWorksCards";

const HowToWorks = () => {
    return <div className="cards">
        {
            HOW?.map((item, i) => (
                <HowWorksCards item={item} key={i} index={i} delay={0.55} />
            ))
        }
    </div>
}
export default HowToWorks;