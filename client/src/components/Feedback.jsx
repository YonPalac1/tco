import { useState, useEffect } from "react";
import { FEEDBACK } from "../constants";

const Feedback = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((index + 1) % FEEDBACK.length);
        }, 3000);

        return () => clearInterval(intervalo);
    }, [index, FEEDBACK.length]);

    return <div className="feedbacks">
        <p>{FEEDBACK[index].comment}</p>

        <h3>{FEEDBACK[index].name}</h3>
        <div className={`bullets bullet-${index}`}>

            {
                FEEDBACK?.map((item, i) => (
                    <span key={i}></span>
                ))
            }
        </div>
    </div>
}
export default Feedback;