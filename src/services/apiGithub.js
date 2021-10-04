import axios from 'axios';

const apiGitHub = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'token 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'
    }
});

export default apiGitHub;