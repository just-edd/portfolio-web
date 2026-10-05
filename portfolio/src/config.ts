interface Command {
    name: string;
    description: string;
    hidden?: boolean;
    response?: (() => string) | string;
}

export const VERSION = import.meta.env.VITE_APP_VERSION?.replace(/^v/, "") ?? "dev";

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
        name: "github",
        description: "Open my GitHub profile",
        response: () => {
            setTimeout(() => window.open('https://github.com/just-edd', '_blank'), 4000);

            return `You can find my open-source projects, experiments and other work on GitHub.
            Opening my GitHub profile...`
        },
    },
    {
        name: "contact",
        description: "Display contact information",
        response: `Interested in working together or have a project in mind?
        You can contact me through the available social links on this portfolio.`,
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
]