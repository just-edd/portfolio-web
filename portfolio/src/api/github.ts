const GITHUB_USER = 'just-edd';

export interface GithubUser {
    login: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    location: string;
    created_at: string;
}

export interface GithubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    pushed_at: string;
    fork: boolean;
}

export interface GithubEvent {
    id: string;
    type: string;
    repo: {
        name: string;
    };
    created_at: string;
}

async function githubFetch<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok)
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);

    return response.json();
}

export function getGithubUser() {
    return githubFetch<GithubUser>(
        `https://api.github.com/users/${GITHUB_USER}`
    );
}

export function getGithubRepos() {
    return githubFetch<GithubRepo[]>(
        `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
    );
}

export function getGithubEvents() {
    return githubFetch<GithubEvent[]>(
        `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`
    );
}