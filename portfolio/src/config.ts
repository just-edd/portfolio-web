import { getGithubEvents, getGithubRepos, getGithubUser } from "./api/github";

interface Command {
    name: string;
    description: string;
    hidden?: boolean;
    response?: string | (() => string | Promise<string>);
}

export const commands: Command[] = [
    {
        name: "help",
        description: "List of available commands",
        response: () => {
            return commands
                .filter((cmd) => !cmd.hidden)
                .map((cmd) => `'${cmd.name}' - ${cmd.description}`)
                .join("\n");
        }
    },
    {
        name: "github",
        description: "Check my GitHub profile",
        response: async () => {
            const [user, repos, events] = await Promise.all([
                getGithubUser(),
                getGithubRepos(),
                getGithubEvents()
            ]);

            const languages = repos.reduce<Record<string, number>>((acc, repo) => {
                if (repo.language)
                    acc[repo.language] = (acc[repo.language] ?? 0) + 1;

                return acc;
            }, {});

            const topLanguages = Object.entries(languages)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5);

            const latestRepos = repos.slice(0, 5);
            const latestEvents = events.slice(0, 5);
            
            return `
            GitHub
            ------

            User: ${user.login}
            Repositories: ${user.public_repos}
            Followers: ${user.followers}
            Following: ${user.following}

            Latest repositories:
            ${latestRepos
                .map((repo) => `  → ${repo.name}${repo.language ? ` · ${repo.language}` : ''}`)
                .join('\n')
            }

            Latest activity:
            ${latestEvents
                .map((event) => {
                    switch (event.type) {
                        case 'PushEvent':
                            return `  → Pushed to ${event.repo.name}`;
                        case 'CreateEvent':
                            return `  → Created ${event.repo.name}`;
                        case 'IssuesEvent':
                            return `  → Updated an issue in ${event.repo.name}`;
                        case 'PullRequestEvent':
                            return `  → Updated a pull request in ${event.repo.name}`;
                        case 'WatchEvent':
                            return `  → Starred ${event.repo.name}`;
                        case 'ForkEvent':
                            return `  → Forked ${event.repo.name}`;
                        default:
                            return `  → ${event.type.replace('Event', '')} ${event.repo.name}`
                    }
                })
                .join('\n')
            }

            Languages:
            ${topLanguages
                .map(([language, count]) => `  → ${language} (${count} repos)`)
                .join('\n')
            }

            ${user.html_url}
            `.trim();
        },
    },
    {
        name: "whoami",
        description: "Who I really am",
        response: `Hey! My name is Tim Barabas, but everyone calls me 'edd'. I'm 20 years old from Eastern Slovakia.
        I started programming 3 years ago as a FiveM developer. For 2 years, I created scripts (known as "resources")
        for FiveM, but then I had to take a break from programming to focus on my final year of high school. Alongside
        my FiveM work, I also developed various websites and games (though neither was ever released). After graduation,
        I developed a passion for game development. I create smaller games using engines like Unity or Unreal Engine 5.
        Currently, I focus on web and game development (especially content creation for FiveM). I have never regretted
        learning to program, as it allows me to turn "unrealistic" ideas into reality. In short, programming is my passion.`
    },
    {
        name: "skills",
        description: "Display my programming skills",
        response: `Over the years, I've worked with many different technologies and programming languages.
        My main focus is currently TypeScript, React, Lua, C# and web development. I'm also familiar with
        C, C++, Python, Java. Besides programming languages, I've worked with technologies such as
        Git, GitHub, Tailwind CSS, Unity and Unreal Engine 5.`
    },
    {
        name: "stack",
        description: "Display my current tech stack",
        response: `Currently, my main stack consists of TypeScript, React, Tailwind CSS for web development,
        alongside Lua and C# for FiveM and game development. I also use Git and GitHub for version control
        and collaboration.`,
    },
    {
        name: "projects",
        description: "Display my projects",
        response: `I've worked on a variety of projects throughout my programming journey, ranging from FiveM resources
        and custom web applications to games and smaller experimental projects. Some of my projects are
        available publicly on GitHub, while others were created for private clients or personal use.`,
    },
    {
        name: "experience",
        description: "Display my programming experience",
        response: `I've been programming for several years, starting with FiveM development and gradually expanding
        into other areas of software development. During this time, I've built scripts, websites, game systems,
        user interfaces and various tools while constantly learning new technologies and improving my skills.`,
    },
    {
        name: "contact",
        description: "Display contact information",
        response: `Interested in working together or have a project in mind?
        You can contact me through the available social links on this portfolio.`,
    },
    {
        name: "socials",
        description: "Open my socials",
        response: () => {
            setTimeout(() => window.open('https://github.com/just-edd', '_blank'), 4000);

            return `You can contact me via my e-mail. My e-mail can be seen on my GitHub profile.
            Opening my GitHub profile...`
        },
    },
    {
        name: "coffee",
        description: "Check my coffee status",
        response: `Coffee status: ████████████████████ 100%
        Productivity: ██████████████████░░ 90%
        Sleep: ██░░░░░░░░░░░░░░░░░░ 10%

        Diagnosis: Too much code, not enough sleep. ☕`,
    },
    {
        name: "clear",
        description: "Clear the terminal",
    },
    {
        name: "secret",
        description: "???",
        hidden: true,
        response: `You found a secret command. 👀
        
        Unfortunately, there is nothing here... yet.`,
    },
    {
        name: "neofetch",
        description: "o.o",
        hidden: true,
        response: async () => {
            const [user, repos] = await Promise.all([
                getGithubUser(),
                getGithubRepos()
            ]);

            const languages = [
                ...new Set(
                    repos
                        .map(repo => repo.language)
                        .filter(Boolean)
                )
            ];
            
            const getGithubAge = (): string => {
                const createdAt = new Date(user.created_at);
                const now = new Date();

                let years = now.getFullYear() - createdAt.getFullYear();
                let months = now.getMonth() - createdAt.getMonth();

                if (months < 0) {
                    years--;
                    months += 12;
                }
                
                return `${years} year(s) ${months} month(s)`;
            };

            return `${user.login}@portfolio
            ------------------
            | OS: PortfolioOS
            | Shell: ${user.login}-shell
            | Uptime: ${getGithubAge()}
            | Location: ${user.location ?? 'Unknown'}
            | Languages: ${languages.slice(0, 5).join(', ')}
            | Repositories: ${repos.length}
            | GitHub: ${user.html_url}
            | Status: Coding...`
        }
    }
]