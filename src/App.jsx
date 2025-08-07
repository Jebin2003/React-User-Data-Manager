// import React from 'react'
// import { Routes, Route,Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Settings from './pages/Settings'
// import User from './pages/user'

// import Users from './pages/users'

// const App = () => {
//   return (
//     <div>
    //     <Link to="/">jebin</Link>
    //     <br />
    //     <Link to="/Login">Login</Link>
    //     <br />
    //     <Link to="/ Settings">SETTINS</Link>
    //     <br />
    //     <Link to="/User">USER</Link>
    //     <br />
    //     <Link to="/Users">zaara</Link>
    // <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //     <Route path='/Login' element={<Login />}></Route>
    //     <Route path='/Settings' element={<Settings />}></Route>
    //     <Route path='/User' element={<User />}></Route>
    //     <Route path='/Users' element={<Users />}></Route>
    // </Routes>


//           <div class="form-row">
//         <label>User Name</label><span>:</span>
//         <input type="text" id="Name" required />
//       </div>




//       <div class="form-row">
//         <label>Phone number</label><span>:</span>
//         <input type="text" id="phone" required />
//       </div>



//       <div class="form-row">
//         <label>location</label><span>:</span>
//         <input type="text" id="loc" required />
//       </div>

//           <button type="submit">Submit</button>


















//     </div>
//   )
// }

// export default App






























import React, { useState } from 'react';
import { Routes, Route,Link } from 'react-router-dom'




const App = () => {
  const [user, setUser] = useState({ name: '', phone: '', location: '' });
  const [userList, setUserList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.phone || !user.location) {
      alert('Please fill all fields');
      return;
    }

    if (isEditMode) {
      const updatedList = [...userList];
      updatedList[editIndex] = user;
      setUserList(updatedList);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setUserList([...userList, user]);
    }

    setUser({ name: '', phone: '', location: '' });
  };

  const handleEdit = (index) => {
    setUser(userList[index]);
    setIsEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredList = userList.filter((_, i) => i !== index);
    setUserList(filteredList);
    if (isEditMode && index === editIndex) {
      setUser({ name: '', phone: '', location: '' });
      setIsEditMode(false);
      setEditIndex(null);
    }
  };

  return (


    <div className="container">
      
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor=""></label>
        <input
          type="text"name="name"placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor=""></label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={user.phone}
          onChange={handleChange}
        />
        <label htmlFor=""></label>
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={user.location}
          onChange={handleChange}
        />
        <button type="submit">{isEditMode ? 'Update' : 'Submit'}</button>
      </form>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.location}</td>
              <td>
                <button onClick={() => handleEdit(index)} className="update-btn">Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default App;


















