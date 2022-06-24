import logo from './logo.svg';
import './App.css';

function App() {
var data = require('./data.json');

  return (
    <center>
    <div className="App">
    <div>
      id: {data.userData._id}
    </div>
    <div>
    index: {data.userData.index}
    </div>
    <div>
    guid: {data.userData.guid}
    </div>
    <div>
    isActive: {data.userData.isActive}
    </div>
    <div>
    balance: {data.userData.balance}
    </div>
    <div>
    smallPicture: {data.userData.smallPicture}
    </div>
    <div>
    bigPicture: {data.userData.bigPicture}
    </div>
    <div>
    age: {data.userData._age}
    </div>
    <div>

    <table>
    
      <tr>
      eyeColor:
        <td style = {{backgroundColor: data.userData.eyeColor, width: "20px", height: "20px"}}>
          
        </td>
      </tr>
    </table>
    </div>
    <div>
    name_first: {data.userData.name.first}
    </div>
    <div>
    name_last: {data.userData.name.last}
    </div>
    <div>
    company: {data.userData.company}
    </div>
    <div>
    email: {data.userData.email}
    </div>
    <div>
    phone: {data.userData.phone}
    </div>
    <div>
    address: {data.userData.address}
    </div>
    <div>
    about: {data.userData.about}
    </div>
    <div>
    registered: {data.userData.registered}
    </div>
    <div>
    latitude: {data.userData.latitude}
    </div>
    <div>
    longitude: {data.userData.longitude}
    </div>
    <div>
    tags: {data.userData.tags}
    </div>
    <div>
    friends: {data.userData.friends[0].id}
    {data.userData.friends[0].name}
    {data.userData.friends[0].color}
    </div>
    <div>
    friends: {data.userData.friends[1].id + ' '}

    {data.userData.friends[1].name}
    {data.userData.friends[1].color}
    </div>
    <div>
    friends: {data.userData.friends[2].id}
    {data.userData.friends[2].name}
    {data.userData.friends[2].color}
    </div>
    <div>
    friends: {data.userData.friends[3].id}
    {data.userData.friends[3].name}
    {data.userData.friends[3].color}
    </div>
    <div>
    friends: {data.userData.friends[4].id}
    {data.userData.friends[4].name}
    {data.userData.friends[4].color}
    </div>
    <div>
    friends: {data.userData.friends[5].id}
    {data.userData.friends[5].name}
    {data.userData.friends[5].color}
    </div>
    </div>
    </center>
  );
}

export default App;
