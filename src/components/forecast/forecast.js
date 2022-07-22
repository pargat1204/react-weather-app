import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const dateInADate = new Date().getDate();
    var dateInAMonth = new Date().getMonth() + 1;
    var dateInAYear = new Date().getFullYear();
    //   const fullDate = dateInADate.getDate() + '-' + (dateInADate.getMonth() + 1) + '-' + dateInADate.getFullYear();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    const FULL_DATE = [dateInADate, dateInADate + 1, dateInADate + 2, dateInADate + 3, dateInADate + 4, dateInADate + 5, dateInADate + 6];

    if(dateInADate===1){
        dateInAMonth= dateInAMonth + 1;
    }

    if(dateInAMonth===1){
        dateInAYear = dateInAYear + 1;
    }

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{forecastDays[idx]}, {`${FULL_DATE[idx]}-${dateInAMonth}-${dateInAYear}`}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                <Accordion></Accordion>
            </Accordion>
        </>
    );
}

export default Forecast;