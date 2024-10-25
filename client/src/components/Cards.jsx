import { CARDS_SERVICES } from "../constants";
import { ServicesCards } from "../commons/ServicesCards";

const Cards = () => {
    return <div className="cards">
        {
            CARDS_SERVICES?.map((item, i) => (
                <ServicesCards item={item} key={i} delay={0.55} />
            ))
        }
    </div>
}
export default Cards;