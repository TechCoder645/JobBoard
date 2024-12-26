import React from "react";
import dayjs from "dayjs";

function JobCard() {
    const skills = ["javascript", "React", "NodeJs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2024-12-01', 'days');

    return (
        <div className="mx-40 mb-4">
            <div className="flex justify-between items-center px-6 bg-znic-200 rounded-md ">
                <div>
                    <h1>Frontend Developer -Amazon</h1>
                    <p>Full Time • Fresher • In-Office</p>
                    <div>
                        {skills.map((skill) => {
                            return <p key={skill}>{skill}</p>;
                        })}
                    </div>
                </div>
                <div>
                    <p>Posted {diffInDays} days ago</p>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
}

export default JobCard;