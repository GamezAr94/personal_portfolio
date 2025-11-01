// This is your dummy data for the playground projects

export type PlaygroundProject = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    aiQuery: string;
};

export const playgroundProjects: PlaygroundProject[] = [
    {
        imageUrl: '', // TODO add the correct url image for each project
        imageAlt: 'GIF of a Unity 2D game',
        title: 'Unity 2D Game',
        description:
            'A simple 2D platformer built in Unity with C#. Just a fun weekend project to explore game physics and pixel art.',
        aiQuery: "What's this 'Unity 2D Game' project?",
    },
    {
        imageUrl: '',
        imageAlt: 'Photo of a Raspberry Pi project',
        title: 'Raspberry Pi Server',
        description:
            'A home-brewed, Linux-powered Pi-hole server to block ads network-wide. (And to host my VIM config!)',
        aiQuery: "Tell me more about the 'Raspberry Pi Server'.",
    },
    {
        imageUrl: '',
        imageAlt: 'Screenshot of a VIM configuration file',
        title: 'My VIM Config',
        description:
            "My (very) opinionated VIM/Neovim setup. It's constantly evolving, just like my other projects.",
        aiQuery: "What's so special about his 'VIM Config'?",
    },
    {
        imageUrl: '',
        imageAlt: 'Screenshot of a web-based music synthesizer',
        title: 'Web Audio Synth',
        description:
            'Exploring the Web Audio API by building a playable synthesizer with filters and effects in the browser.',
        aiQuery: "Tell me about the 'Web Audio Synth' project.",
    },
    {
        imageUrl: '',
        imageAlt: 'Icon for a twitter bot',
        title: 'AI Twitter Bot',
        description:
            'A small Node.js bot that generates and posts procedural art to Twitter once a day. Powered by C# backend.',
        aiQuery: "Tell me about the 'AI Twitter Bot'.",
    },
    {
        imageUrl: '',
        imageAlt: 'Image of generative shader art',
        title: 'GLSL Shader Art',
        description:
            'Learning fragment shaders to create generative art. This one is based on Perlin noise.',
        aiQuery: "What is 'GLSL Shader Art'?",
    },
    // Add as many projects as you want here
];
