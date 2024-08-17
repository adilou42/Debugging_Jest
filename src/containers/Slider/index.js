import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const SLIDE_INTERVAL = 5000;

const Slider = () => {
    const { data } = useData();
    const [index, setIndex] = useState(0); // starts with the first event
    const byDateDesc = data?.focus.sort((evtA, evtB) =>
        new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
    );

    const nextCard = () => {
        setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        const timer = setTimeout(nextCard, SLIDE_INTERVAL);
        return () => clearTimeout(timer); // Cleanup the timeout on unmount
    }, [index]);

    function changeSlide(radioIdx) {
        setIndex(radioIdx);
    }

    return (
        <div className="SliderSection">
            <div className="SlideCardList">
                {byDateDesc?.map((event, idx) => (
                    <div key={`eventFocus-${event.id}`}>
                        <div
                            className={`SlideCard SlideCard--${
                                index === idx ? "display" : "hide"
                            }`}
                        >
                            <img src={event.cover} alt="forum" />
                            <div className="SlideCard__descriptionContainer">
                                <div className="SlideCard__description">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <div>{getMonth(new Date(event.date))}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="SlideCard__paginationBullet">
                {byDateDesc?.map((event, radioIdx) => (
                    <div
                        className="bulletPoint"
                        key={`BulletPoint-${event.id}`}
                    >
                        <input
                            onClick={() => changeSlide(radioIdx)}
                            type="radio"
                            name="radio-button"
                            defaultChecked={index === radioIdx} // use index to select the current event
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
