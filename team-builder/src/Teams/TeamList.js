import React from "react";

const TeamList = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {props.memberList.map((member) => {
                    return <li key={member.id}>{member.name}</li>
                })}
            </ul>
        </div>
    );
};

export default TeamList;