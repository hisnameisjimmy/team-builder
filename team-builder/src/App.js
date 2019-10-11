import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './Teams/TeamList.js';
import AddTeamMember from './Teams/TeamMember.js';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Jimmy Hooker",
      title: "VP of Product",
      email: "jimmy@badgermapping.com"
    },
    {
      name: "Jay Maas",
      title: "Team Lead",
      email: "jay@wahtever.com"
    }
  ]);

  const addTeamMemberFunction = teamMember => {
    const newMember = {
      id: Date.now(),
      name: teamMember.name,
      title: teamMember.title,
      email: teamMember.email
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
