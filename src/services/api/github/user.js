function GithubUser(username) {
  const URL = process.env.VUE_APP_GITHUB_API_URL;

  const ENDPOINT = `${URL}/users/${username}/repos`;

  const getRepositories = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(ENDPOINT, {
      method: "GET",
      headers,
    });

    return response.json();
  };

  return {
    getRepositories,
  };
}

export default GithubUser;
