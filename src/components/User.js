import axios from 'axios';

const User = async () => {
  const res = await axios.get('https://randomuser.me/api');
  const user = res.data.results[0];

  console.log(user);

  const template = `
    <div class="card">
      <h3>${user.location.city} ${user.location.country}</h3>
      <div class="card-body">
        <h2>${user.name.first} ${user.name.last}</h2>
        <ul>
          <li>${user.email}</li>
        </ul>
      </div>
    </div>
  `;

  return template;
};

export default User;
