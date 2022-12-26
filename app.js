const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.getProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => console.log(error))
    } else {
        ui.clearProfile();
    }
})
