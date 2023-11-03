import React, { useState } from 'react';

function ApplicationForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [group, setGroup] = useState('');
    const [city, setCity] = useState('');
    const [myid, setId] = useState('');


    // Define a function to handle form submission
    const handleSubmit = () => {
        var a;
        var info = {
            name: name,
            age: age,
            group: group,
            city: city
        }

        for (a in info) {
            info[a] = document.getElementById(a).value
        }
        console.log(info)

        var postUser = new XMLHttpRequest()
        postUser.onreadystatechange = function () {
            if (postUser.status === 201 && postUser.readyState === 4) {

            }
        }
        postUser.open("Post", "http://localhost:3000/Constinuency");
        postUser.setRequestHeader("Content-Type", "application/json")
        postUser.send(JSON.stringify(info))
        GetData();
        window.location.reload();


    };


    function GetData() {
        var DataBase = [];
        var data = new XMLHttpRequest()
        data.onload = function () {
            if (data.status >= 200 && data.status < 400) {
                DataBase = JSON.parse(data.responseText);
                getDisplayTable(DataBase);

            }
        }
        var url = "http://localhost:3000/Constinuency"
        data.open("Get", url, true)
        data.send()
    }
    GetData();


    function getDisplayTable(DataBase) {
        var tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; 
      
        for (var i = 0; i < DataBase.length; i++) {
          var mytr = document.createElement("tr");
      
          for (var key in DataBase[i]) {
            var mytd = document.createElement("td");
            mytd.innerHTML = DataBase[i][key];
            mytr.appendChild(mytd);
          }
      
          var editTd = document.createElement("td");
          var deleteTd = document.createElement("td");
          mytr.appendChild(editTd);
          mytr.appendChild(deleteTd);
      
          var editBtn = document.createElement("button");
          editBtn.innerHTML = "EDIT";
          editBtn.addEventListener("click", function () {
            editUser(i, DataBase);
          });
      
          var deleteBtn = document.createElement("button");
          deleteBtn.innerHTML = "DELETE";
          deleteBtn.addEventListener("click", function () {
            deleteUser(i, DataBase);
          });
      
          editTd.appendChild(editBtn);
          deleteTd.appendChild(deleteBtn);
          tbody.appendChild(mytr);
        }
      }
      
      function editUser(index, DataBase) {
        var User = DataBase[index-1];
        setName(User.name);
        setAge(User.age);
        setGroup(User.group);
        setCity(User.city);
        setId(index-1)
        document.getElementById("add").style.display = "none";
        document.getElementById("up").style.display = "block";
      }
      
      function deleteUser(index, DataBase) {
        DataBase.splice(index-1, 1);
        getDisplayTable(DataBase);
      }

      function updateUser() {
        var a;
        var user = {
            name: name,
            age: age,
            group: group,
            city: city,
            id: myid,
        }

        console.log('user',user)
        for (a in user) {
            user[a] = document.getElementById(a).value
        }

        var postUser = new XMLHttpRequest()
        postUser.onreadystatechange = function () {
            if (postUser.status === 200 && postUser.readyState === 4) {
                document.getElementById("add").style.display = "block"
                document.getElementById("up").style.display = "none"
            }
        }
        postUser.open("Put", "http://localhost:3000/Constinuency/" + myid);
        postUser.setRequestHeader("Content-Type", "application/json")
        postUser.send(JSON.stringify(user))
        GetData();
        window.location.reload();

    }
      




    return (
        <div className="container">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="age">Age:</label>
                <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                <br />
                <label htmlFor="group">Group:</label>
                <input type="text" name="group" id="group" value={group} onChange={(e) => setGroup(e.target.value)} />
                <br />
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="text" name="" id="id" onChange={(e)=>setId(e.target.value)} hidden />
                <br /><br />
                <button type="button" onClick={handleSubmit} id='add'> Submit </button>

                <button type="button" onClick={updateUser} id="up" style={{ display: 'none' }}>Update</button>

            </form>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Group</th>
                        <th>City</th>
                        <th>ID</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default ApplicationForm;
