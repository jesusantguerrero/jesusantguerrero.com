import axios from "axios";
import { database } from "firebase-admin";

const endpoint = "https://gh-pinned-repos.egoist.dev/?username={username}"

export async function handler(evt, context) {
    const pinnedRepos = await getPinnedRepos()
    const ref = database().ref('repos');
    pinnedRepos.forEach((repo) => {
        ref.child(repo.name).set({
            name: repo.repo,
            description: repo.description,
            url: repo.link,
            language: repo.language,
            languageColor: repo.languageColor,
            stars: repo.stars,
            forks: repo.forks,
        });
    });
    return {
        statusCode: 200,
        body: pinnedRepos
    }
}

function getPinnedRepos() {
    const url = endpoint.replace("{username}", process.env.GITHUB_USERNAME || 'jesusantguerrero');
    return axios.get(url).then(({ data }) => data);
}