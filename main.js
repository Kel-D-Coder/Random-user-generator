const Btn = document.querySelector('button')

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then((res) => {
            if (res.status !== 200) {
            throw "No internet connection"
        }
        return res.json()
    })
    .then((data) => {
        document.querySelector('.container').innerHTML = `
        <div>
            <h1>Random User Generator</h1>
            <button class="generateBtn">Generate User</button>
        </div>

        <div class="user-container">
            <div class="img-div">
                <img src=${data.results[0].picture.large
} width="170">
            </div>
            <div class="users-details">
                <p><span>Name:</span> ${data.results[0].login.username}</p>
                <p><span>Email:</span> ${data.results[0].email}</p>
                <p><span>phone:</span> ${data.results[0].phone}</p>
                <p><span>Location:</span> ${data.results[0].location.country}</p>
                <p><span>Age:</span> ${data.results[0].registered.age}</p>
            </div>
        </div>
        `
    })
        .catch((error) => {
        document.querySelector('h1').textContent = "No internet connection"
    })
}

Btn.addEventListener('click', fetchUser)