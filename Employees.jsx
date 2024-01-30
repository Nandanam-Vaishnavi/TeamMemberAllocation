import Teams from './Teams';
import TeamMembers from './TeamMembers';
import TeamMemberCard from './TeamMemberCard';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange, handleUpdateEmployee}) => {
    
    return (
        <main className="container">
              <div className="row justify-content-center mt=3 mb=3">
                <div className="col-6">
                    
                <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
                </div>
            <div class="row justify-content-center mt=3 mb=3">
                <div class="col-8">
                    
                    <div class="card-collection">
                    <TeamMembers employees={employees}
                              handleEmployeeCardClick={handleEmployeeCardClick}
                              selectedTeam={selectedTeam}/> 

                    {/* <div>
                    {employees.map((employee) => (
                    <TeamMemberCard
                    key={employee.id}
                    employee={employee}
                    selectedTeam={selectedTeam}
                     handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                    handleUpdateEmployee={handleUpdateEmployee}
        /> */}
      {/* ))} */}
            </div>
            </div>
            </div>
        </main>
        )
        }
    

export default Employees