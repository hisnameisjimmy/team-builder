import React from "react";

const TeamList = (props) => {
    console.log(props);
    return (
        <div>
            {props.memberList.map((member) => {
                return (
                    <ul key={member.id}>
                        <li>{member.name}</li>
                        <li>{member.title}</li>
                        <li>{member.email}</li>
                    </ul>
                )
            })}
        </div>
    );
};

export default TeamList;