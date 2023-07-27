import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import NotFound from "./NotFound";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullname: "Bob Jones",
        designation: "Javascript Developer",
        gender: "Male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullname: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullname: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullname: "Sam Reynolds",
        designation: "React Developer",
        gender: "Male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullname: "David Henrey",
        designation: ".Net Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullname: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullname: "James Bannet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullname: "Jessica Faye",
        designation: "API Developer",
        gender: "Male",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullname: "Lisa Stone",
        designation: "C++ dev",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullname: "Daniel Young",
        designation: "Python Developer",
        gender: "Male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullname: "Adrian Jacobs",
        designation: "Web Dev",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullname: "David monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const onTeamSelectChange = (event) => {
    console.log(event.target.value);
    setTeam(event.target.value);
  };

  const handleEmployeeCardClick = (event) => {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  };

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              onTeamSelectChange={onTeamSelectChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
