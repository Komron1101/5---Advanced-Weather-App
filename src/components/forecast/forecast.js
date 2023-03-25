import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay(); // getDay = 0 - 6; 0 - Sunday, 1 - Monday, etc.
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat( // WEEK_DAYS.length = 7
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <>
            <label className="title">Daily</label>

            {/* allowZeroExpanded - сворачивание последнего развернутого элемента */}
            <Accordion allowZeroExpanded>
                {/* TODO:Как работает Idx, чему оно равно? */}
                {/* TODO:Как сделать прогноз погоды на меньшее/большое количество дней? */}
                {/* TODO:Как работает 34 строка */}
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img
                                        alt="weather"
                                        className="icon-small"
                                        src={`icons/${item.weather[0].icon}.png`}
                                    />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">
                                        {item.weather[0].description}
                                    </label>
                                    <label className="min-max">
                                        {Math.round(item.main.temp_min)}°C / {" "}
                                        {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feel's like:</label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;