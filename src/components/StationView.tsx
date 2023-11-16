'use client'

import { useState, useEffect } from 'react'

interface Station {
    [key: string]: any
}

export default function StationView(props: Readonly<{ stationId: string }>) {
    const [stations, setStations] = useState<Station[] | undefined>(undefined);

    useEffect(() => {
        fetch('api/station/' + props.stationId)
            .then((res) => res.json())
            .then((json) => {
                console.log('arvot', json);
                setStations(json);
            });
    }, []);

    return (
        <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Station {props.stationId}</h2>
                </div>
                <div className="divide-y divide-gray-900/5">
                    {stations?.map((station) => (
                        <div
                            key={station.id}
                            className="flex items-center justify-between py-3"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="space-y-1">
                                    <p className="font-medium leading-none">{station.station_name}</p>
                                    <p className="text-sm text-gray-500">{station.station_address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
    )
}