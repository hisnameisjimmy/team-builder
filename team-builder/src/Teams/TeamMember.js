import React, { useState } from "react";

const AddTeamMember = (props) => {
    const [teamMember, setTeamMember] = useState([{ name: ""}]);

    const handleNameChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        props.addTeamMemberFn(teamMember);
        setTeamMember({ name: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input name="name" value={teamMember.name} onChange={handleNameChange} />
                </label>
                <button>Add that shit</button>
            </form>
        </div>
    )
}

export default AddTeamMember;