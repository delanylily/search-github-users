class GitHub {
    constructor() {
        this.client_id = 'dfac4558d9f99dee6dd5';
        this.client_secret = '0be12366323847fd765a0b2d48dda68ec1e880b6';
        this.url = 'https://api.github.com/users'
    }
    async getUser(user) {
        const profileResponse = await fetch(`${this.url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}
