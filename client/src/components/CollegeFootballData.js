// src/CollegeFootballData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeFootballData = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an Axios GET request to the ESPN API
        axios
            .get(`https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => {
                const eventData = response.data.events; // Extract the 'events' property
                setEvents(eventData); // Set the 'events' data in state
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false on error
            });
    }, []);

    return (
        <div className='FootballData'>
            <h1 className='jumbotron text-center'>College Football Data</h1>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <div className='d-flex flex-row flex-wrap'>
                    {/* Render the specific properties you want */}
                    {events.map((event) => (
                        <div key={event.id} className='border rounded w-50 p-2 text-center'>
                            <p>{
                                event.competitions[0].competitors[1].curatedRank.current <= 25 ? (
                                    event.competitions[0].competitors[1].curatedRank.current
                                ) : (
                                    ''
                                )
                            } {event.competitions[0].competitors[1].team.displayName} @ {
                                    event.competitions[0].competitors[0].curatedRank.current <= 25 ? (
                                        event.competitions[0].competitors[0].curatedRank.current
                                    ) : (
                                        ''
                                    )} {event.competitions[0].competitors[0].team.displayName}</p>
                            <p>Odds: {event.competitions[0].odds[0].details}</p>
                            <p>O/U: {event.competitions[0].odds[0].overUnder}</p>
                            {/* Add more properties you want to display */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CollegeFootballData;
