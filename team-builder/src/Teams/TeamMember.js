import React, { useState } from "react";

const AddTeamMember = (props) => {
    const [teamMember, setTeamMember] = useState([{ name: "", title: "", email: ""}]);

    const handleNameChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        props.addTeamMemberFn(teamMember);
        setTeamMember({ name: "", title: "", email: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input name="name" value={teamMember.name} onChange={handleNameChange} />
                </label>
                <label>Title
                    <input name="title" value={teamMember.title} onChange={handleNameChange} />
                </label>
                <label>Email
                    <input name="email" value={teamMember.email} onChange={handleNameChange} />
                </label>
                <button>Add that shit</button>
            </form>
        </div>
    )
}

export default AddTeamMember;