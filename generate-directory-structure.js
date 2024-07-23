const fs = require('fs');
const fetch = require('node-fetch');

async function getRepoContents(owner, repo, path = '') {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API returned status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching repository contents:', error);
        return [];
    }
}

async function generateDirectoryStructure() {
    const owner = 'your-github-username';  // Replace with your GitHub username
    const repo = 'your-repo-name';  // Replace with your repository name
    const structure = await getRepoContents(owner, repo);

    fs.writeFileSync('directory-structure.json', JSON.stringify(structure, null, 2));
}

generateDirectoryStructure();
