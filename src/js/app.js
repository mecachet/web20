console.log("Js linked. Yay");
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
  const user_id = document.querySelector("#user-id").value;

function userActions() {}

function renderUsers(usersArray) {
  console.log(usersArray);
  userActions();
}

function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/all-users")
    .then((res) => res.json())
    .then((data) => {
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
function userActions() {
  const editButtons = document.querySelectorAll(".edit-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const selectedElement = event.currentTarget;
      const userId = selectedElement.dataset.userId;

      const userData = await getUserInfo(userId);

      fillFormWithUserData(userData);

      showModal();

      const updateButton = document.getElementById("update-button");
      updateButton.addEventListener("click", () => {
        const updatedUserData = getUpdatedUserDataFromForm();
        updateUser(userId, updatedUserData);

        closeModal();
      });
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const selectedElement = event.currentTarget;
      const userId = selectedElement.dataset.userId;

      await deleteUser(userId);

      updateUIAfterDelete(userId);
    });
  });
}


async function getUserInfo(userId) {
}

function fillFormWithUserData(userData) {
}

function showModal() {
}

function getUpdatedUserDataFromForm() {
}

async function updateUser(userId, updatedUserData) {
}

async function deleteUser(userId) {
}

function updateUIAfterDelete(userId) {
}
async function updateUser(userObj) {
  try {
    const response = await fetch(`https://borjomi.loremipsum.ge/api/update-user/${userObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    });

    if (response.ok) {
      await fetchAndRenderUsers();
    } else {
      console.error("Failed to update user:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
async function fetchAndRenderUsers() {
  try {
    const response = await fetch("https://borjomi.loremipsum.ge/api/all-users");
    if (response.ok) {
      const usersArray = await response.json();
      renderUsers(usersArray);
    } else {
      console.error("Failed to fetch users:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}