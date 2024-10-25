import { useEffect, useState } from "react";
import { QUESTIONS } from "../constants";
import Answers from "./Answers";

const Questions = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        QUESTIONS?.map((item, i) => (
                <Answers item={item} index={i} handleToggle={handleToggle} active={active} key={i} />
            
        ))
    )
}
export default Questions;