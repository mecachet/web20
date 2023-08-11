console.log("linked yay");

function modalAction(selector) {
  const modal = document.querySelector(selector);
  const closeBtn = modal.querySelector(".modal-close");
  modal.classList.add("open");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

const openRegFormBtn = document.querySelector("#open-reg-form");

openRegFormBtn.addEventListener("click", () => {
  modalAction("#reg-modal");
});

const createUserUrl = "https://borjomi.loremipsum.ge/api/register";
const getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users";
const getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1";
const updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1";
const deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1";

const regForm = document.querySelector("#reg"),
  userName = document.querySelector("#user_name"),
  userSurname = document.querySelector("#user_surname"),
  userEmail = document.querySelector("#user_email"),
  userPhone = document.querySelector("#user_phone"),
  userPersonalID = document.querySelector("#user_personal-id"),
  userZip = document.querySelector("#user_zip-code"),
  userGender = document.querySelector("#user_gender"),
  user_id = document.querySelector("#user_id");

const user = {
  first_name: "steso",
  last_name: "text",
  phone: "123456789",
  id_number: "12345678909",
  email: "text@gmail.com",
  gender: "male",
  zip_code: "1245",
};

const editBtn = document.querySelector("#editBtn");
const deleteBtn = document.querySelector("#deleteBtn");

function userActions() {
  editBtn.addEventListener("click", updateUser);
  deleteBtn.addEventListener("click", deleteUser);
}

function renderUsers(usersArray) {
  console.log(usersArray);
  userActions();
}

function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/all-users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const users = data.users;
      renderUsers(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
}

function deleteUser(id) {
  fetch(`http://borjomi.loremipsum.ge/api/delete-user/${id}`, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getAllUsers();
    })
    .catch((error) => {
      console.log(error);
    });
}

function getUserInfo(id) {
  fetch(`https://borjomi.loremipsum.ge/api/get-user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function updateUser(userObj) {
  fetch(`http://borjomi.loremipsum.ge/api/update-user/${userObj.id}`, {
    method: "PUT",
    body: JSON.stringify(userObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createUser(userObj) {
  fetch("https://borjomi.loremipsum.ge/api/register", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getAllUsers();
    });
}

getAllUsers();

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userObj = {
    id: user_id.value,
    first_name: userName.value,
    last_name: userSurname.value,
    phone: userPhone.value,
    id_number: userPersonalID.value,
    email: userEmail.value,
    gender: userGender.value,
    zip_code: userZip.value,
  };

  createUser(userObj);
});

async function getAllUsersAsync() {
  try {
    const response = await fetch(
      "https://borjomi.loremipsum.ge/api/all-users",
      {
        method: "get",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
