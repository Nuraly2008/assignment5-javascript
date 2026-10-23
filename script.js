
const userProfile = {
    name: "Nuraly",
    birthYear: 2005,
    isDeveloper: true,
    hobbies: ["Football", "Music"]
};

function displayProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const totalHobbies = userProfile.hobbies.length;

    document.getElementById("profileName").textContent =
        userProfile.name;

    document.getElementById("profileBirthYear").textContent =
        userProfile.birthYear;

    document.getElementById("profileDeveloper").textContent =
        userProfile.isDeveloper;

    document.getElementById("profileAge").textContent =
        age;

    document.getElementById("hobbiesCount").textContent =
        totalHobbies;

    console.log("User Profile:", userProfile);
    console.log("Age:", age);
    console.log("Total Hobbies:", totalHobbies);
}

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newName =
        document.getElementById("username").value;

    const newBirthYear =
        Number(document.getElementById("birthYear").value);

    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    displayProfile();

    document.getElementById("profileName").style.fontWeight = "bold";
});

const hobbyList = document.getElementById("hobbyList");

function addHobbyToList(hobby) {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
}

userProfile.hobbies.forEach(function(hobby) {
    addHobbyToList(hobby);
});

document.getElementById("addItem").addEventListener(
    "click",
    function() {
        const newItem = prompt("Enter a new hobby:");

        if (newItem !== null && newItem.trim() !== "") {
            const hobby = newItem.trim();

            userProfile.hobbies.push(hobby);
            addHobbyToList(hobby);

            displayProfile();
        }
    }
);

document.getElementById("removeItem").addEventListener(
    "click",
    function() {
        if (hobbyList.lastElementChild) {
            hobbyList.lastElementChild.remove();
            userProfile.hobbies.pop();

            displayProfile();
        }
    }
);

displayProfile();

