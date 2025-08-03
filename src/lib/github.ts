// import { GitHubProject, Project } from "@/types/project";

// const GITHUB_API_BASE = "https://api.github.com";
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// interface GitHubAPIOptions {
//   headers?: Record<string, string>;
// }

// async function githubRequest<T>(endpoint: string, options: GitHubAPIOptions = {}): Promise<T> {
//   const headers: Record<string, string> = {
//     'Accept': 'application/vnd.github.v3+json',
//     'User-Agent': 'CodeCompass-Website',
//     ...options.headers,
//   };

//   if (GITHUB_TOKEN) {
//     headers['Authorization'] = `token ${GITHUB_TOKEN}`;
//   }

//   const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
//     headers,
//   });

//   if (!response.ok) {
//     throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
//   }

//   return response.json();
// }

// export async function getOrganizationRepos(org: string): Promise<GitHubProject[]> {
//   try {
//     const repos = await githubRequest<GitHubProject[]>(`/orgs/${org}/repos?sort=stars&direction=desc&per_page=50`);
//     return repos.filter(repo => !repo.name.includes('website') && !repo.name.includes('docs'));
//   } catch (error) {
//     console.error('Error fetching organization repos:', error);
//     return [];
//   }
// }

// export async function getUserRepos(username: string): Promise<GitHubProject[]> {
//   try {
//     const repos = await githubRequest<GitHubProject[]>(`/users/${username}/repos?sort=stars&direction=desc&per_page=50`);
//     return repos.filter(repo => !repo.name.includes('website') && !repo.name.includes('docs'));
//   } catch (error) {
//     console.error('Error fetching user repos:', error);
//     return [];
//   }
// }

// export async function getRepoDetails(owner: string, repo: string): Promise<GitHubProject | null> {
//   try {
//     return await githubRequest<GitHubProject>(`/repos/${owner}/${repo}`);
//   } catch (error) {
//     console.error('Error fetching repo details:', error);
//     return null;
//   }
// }

// export async function getRepoStars(owner: string, repo: string): Promise<number> {
//   try {
//     const repoData = await githubRequest<GitHubProject>(`/repos/${owner}/${repo}`);
//     return repoData.stargazers_count;
//   } catch (error) {
//     console.error('Error fetching repo stars:', error);
//     return 0;
//   }
// }

// // Transform GitHub repo to our Project type
// export function transformGitHubProject(githubRepo: GitHubProject): Omit<Project, 'id' | 'type' | 'featured'> {
//   return {
//     name: githubRepo.name,
//     description: githubRepo.description || 'No description available',
//     githubUrl: githubRepo.html_url,
//     language: githubRepo.language || 'Unknown',
//     stars: githubRepo.stargazers_count,
//     license: githubRepo.license?.name || 'No license',
//     createdAt: githubRepo.created_at,
//   };
// }
