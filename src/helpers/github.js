import axios from "axios";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

const getGitrepo = async () => {
  try {
    const data = await octokit.request("GET /users/Senninseyi/repos", {
      username: "Senninseyi",
    });
    //listing only data urls to get repos alone
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};

export { getGitrepo };
