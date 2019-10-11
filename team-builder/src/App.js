import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './Teams/TeamList.js';
import AddTeamMember from './Teams/TeamMember.js';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Jimmy Hooker"
    },
    {
      name: "Jay Maats"
    }
  ]);

  const addTeamMemberFunction = teamMember => {
    const newMember = {
      // id: Date.now(),
      name: teamMember.name
    };
    console.log(teamMember);
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <TeamList memberList={members}/>
      <AddTeamMember addTeamMemberFn={addTeamMemberFunction} />
    </div>
  );
}

export default App;
