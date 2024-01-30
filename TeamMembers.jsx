import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam, handleUpdateEmployee}) => {
    return(
        employees.map((employee) => (
             <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} handleUpdateEmployee={handleUpdateEmployee}/>

        ))
    )
}

export default TeamMembers;