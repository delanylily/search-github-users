const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.getProfile(data.profile)
                }
                console.log(data)
            })
            .catch(error => console.log(error))
    } else {
        ui.clearProfile();
        //clearProfile
    }
})
