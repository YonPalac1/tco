
import { QUALITIES } from "../constants";
import { UsCards } from "../commons/UsCards";

const QualitiesCards = () => {
    return <div className="cards">
        {QUALITIES?.map((item, i) => (
            <UsCards delay={0.35} item={item} key={i} />
        ))}
    </div>
}
export default QualitiesCards;