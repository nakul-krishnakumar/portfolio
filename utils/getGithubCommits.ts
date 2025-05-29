import { Octokit } from "octokit";
import { configDotenv } from "dotenv";
configDotenv();

async function fetchGithubCommits() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN, // Use environment variable for security
    });

    try {
        const response = await octokit.request("GET /search/commits/", {
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
                Accept: "application/vnd.github.cloak-preview+json", // Required for commit search
            },
            q: "author:nakul-krishnakumar", // Replace with actual repo details
        });
        
        return response.data["total_count"];
    } catch (error) {
        console.error("Error fetching GitHub commits:", error);
        throw error;
    }
}

export default fetchGithubCommits;
