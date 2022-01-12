import React from 'react'
import Images from '../../assets/TeamImages'

const teams = [
    {
        name: 'Maza',
        position: 'Director',
        social_media: [
            {
                icon: 'twitter',
                link: 'https://twitter.com/maza_zhr',
            },
            {
                icon: 'instagram',
                link: 'http://instagram.com/maza.mind',
            },
        ],
        pfp: Images.Team1,
    },
    {
        name: 'Mikail',
        position: 'Market Analyst',
        social_media: [{ link: 'https://twitter.com/MikailYordan012' }],
        pfp: Images.Team2,
    },
    {
        name: 'DZ',
        position: 'Writer',
        social_media: [{ link: 'http://instagram.com/dianzeirlina' }],
        pfp: Images.Team3,
    },
    {
        name: 'Amru',
        position: 'Illustrator',
        social_media: [{ link: 'http://twitter.com/amrukun' }],
        pfp: Images.Team4,
    },
    {
        name: 'Raihan',
        position: 'Illustrator',
        social_media: [{ link: 'http://instagram.com/raihanwhyuu' }],
        pfp: Images.Team5,
    },
]

function Team() {
    return (
        <div className="px-12 md:px-20 py-8 md:py-16 mx-auto max-w-[90rem]" id="team">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="w-full md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-bold">Meet Headbox Team</h2>
                    <p className="mt-4 text-sm md:text-base text-gray-500">Hi everyone! So we are a box-united team, we love to hide inside the box but we are thinking out of the box!</p>
                </div>
                <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teams.map((person) => (
                            <div key={person.name}>
                                <img className="w-full" src={person.pfp} alt="" />
                                <div className="mt-3 flex items-center justify-between">
                                    <div>
                                        <p className="font-bold">{person.name}</p>
                                        <p className="font-semibold text-primary">{person.position}</p>
                                    </div>
                                    <div className="flex space-x-3">
                                        {person.social_media.map((item) => (
                                            <div key={item.link}>
                                                {item.icon === 'twitter' ? (
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="22"
                                                            height="22"
                                                            className="bi bi-twitter fill-current hover:text-blue-700 transition-all duration-300 ease-in-out"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 1"
                                                            viewBox="0 0 24 24"
                                                            className="fill-current hover:text-purple-700 transition-all duration-300 ease-in-out"
                                                            width="25"
                                                            height="25"
                                                        >
                                                            <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
