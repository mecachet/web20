console.log ("Js linked. Yay")
const createUserUrl = "https://borjomi.loremipsum.ge/api/register",
  getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users",
  getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ",
  updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ",
  deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1";

const userName = document.querySelector("#user-name"),
  userSurname = document.querySelector("#user-surname"),
  userEmail = document.querySelector("#user-email"),
  userPhone = document.querySelector("#user-mobile"),
  userPersonalID = document.querySelector("#user-personal"),
  userZip = document.querySelector("#user-zip"),
  userGender = document.querySelector("#user-gender"),
  user_id = document.querySelector("#user-id");

function userActions() {}

function renderUsers(usersArray) {
  console.log(usersArray);
  userActions();
}

function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/all-users")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      const users = data.users;
      console.log(users);
      renderUsers(users);
    });
}

getAllUsers();

function getUserInfo(id) {
  fetch(`https://borjomi.loremipsum.ge/api/get-user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
