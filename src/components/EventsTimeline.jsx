import { Chrono } from "react-chrono";
import { eventsData } from "Data";


const EventsTimeline = () => {
    return (
        <div>
            <Chrono
                items={eventsData}
                mode="VERTICAL_ALTERNATING"
                focusActiveItemOnLoad
                activeItemIndex={7}
                cardHeight={200}
                slideShow
                hideControls={true}
                theme={{
                    primary: '#9333EA',
                    secondary: 'blue',
                    cardBgColor: 'white',
                    titleColor: 'black',
                    titleColorActive: '#9333EA',
                }}
                classNames={{
                    card: 'my-events-card',
                    cardMedia: 'my-events-card-media',
                    cardSubTitle: 'my-events-card-subtitle',
                    cardText: 'my-events-card-text',
                    cardTitle: 'my-events-card-title',
                    controls: 'my-events-controls',
                    title: 'my-events-title',
                }}
            // enableDarkToggle
            >
                <div className="chrono-icons">
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/about.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/idea.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/sun.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/info.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/calendar.png"
                        alt="twitter"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
                        alt="mail-box"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
                        alt="pinterest"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
                        alt="reddit"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/facebook.png"
                        alt="reddit"
                    />
                    <img
                        className=""
                        src="https://img.icons8.com/ios-filled/100/000000/stumbleupon.png"
                        alt="reddit"
                    />
                </div>
            </Chrono>
        </div>
    )
}

export default EventsTimeline