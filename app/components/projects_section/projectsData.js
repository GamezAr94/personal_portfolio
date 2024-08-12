import astar_sm from "@/public/img/astar_path_finding/astar_pathfinding_result.png";

import cafelokal_sm from "@/public/img/cafelokal/cafelokal_banner.png";

import furelise_sm from "@/public/img/furelise/fur_elise_banner.png";

import lucygame_sm from "@/public/img/lucyGame/lucy_grab_light.png";

import tamalyshop_sm from "@/public/img/tamalyshop/tamalyshop_banner.png";

import bentobox_sm from "@/public/img/bento_layout/bento_layout_desktop.png";

import froggame_sm from "@/public/img/frogGame/frog_main_menu_unity.png";

import onlineIde_sm from "@/public/img/onlineIDE/more_code.png";

const project_list = [
    {
        title: "Cafe Lokal",
        subtitle: "UX/UI Design & Freelance Development",
        main_image: ["img/cafelokal/cafelokal_banner_short.gif", cafelokal_sm],
        alt_main_img: "description",
        gallery: [
            {
                img: cafelokal_sm,
                alt: "image",
            },
            {
                img: bentobox_sm,
                alt: "image",
            },
            {
                img: froggame_sm,
                alt: "image",
            },
            {
                img: onlineIde_sm,
                alt: "image",
            },
        ],
        badges: [
            {
                url: "https://github.com/GamezAr94/Frog-Game",
                icon: "/img/icons/github.png",
                alt: "github badge",
            },
        ],
        project_desc: ["asdafasdf", "asdfadf", "hola como estas"],
    },
];

export default project_list;

/*
                <SingleProject
                    title="Cafe Lokal"
                    subtitle="UX/UI Design & Freelance Development"
                    alt="banner of a coffe shop located at kitsilano vancouver"
                    image={[
                        "img/cafelokal/cafelokal_banner_short.gif",
                        cafelokal_sm,
                    ]}
                />
                <SingleProject
                    title="A* Path Finding Algorithm"
                    subtitle="Unity 2D, algorithm and games"
                    swapped={true}
                    alt="grid system to visualize the a* path finding algorithm in unity 2d"
                    image={[
                        "img/astar_path_finding/astar_alg_gif.gif",
                        astar_sm,
                    ]}
                />
                <SingleProject
                    title="Pâtisserie Für Elise"
                    subtitle="UX/UI Design & Freelance Development"
                    alt="banner of a coffe shop located at downtown vancouver"
                    image={[
                        "img/furelise/fur_elise_banner_gif.gif",
                        furelise_sm,
                    ]}
                />
                <SingleProject
                    title="Lucy Game"
                    subtitle="Unity 2D, GameJam, Light and Collisions"
                    swapped={true}
                    alt="game made in unity of a firefly"
                    image={["img/lucyGame/lucyGame-gif.gif", lucygame_sm]}
                />
                <SingleProject
                    title="Tamaly Shop"
                    subtitle="UX/UI Design & Freelance Development"
                    alt="banner of a mexican restaurant website located in commercial"
                    image={[
                        "img/tamalyshop/tamalyshop_banner_gif.gif",
                        tamalyshop_sm,
                    ]}
                />
                <SingleProject
                    title="Online IDE"
                    subtitle="Online IDE to solve Coding Problems"
                    swapped={true}
                    alt="interface of an online IDE to solve coding problems"
                    image={["img/onlineIDE/full_video_gif.gif", onlineIde_sm]}
                />
                <SingleProject
                    title="Bento Box Layout"
                    subtitle="Modern UX/UI Design - Experimenting"
                    alt="banner of a modern website using a bento box layout"
                    image={[
                        "img/bento_layout/bento_layout_desktop.png",
                        bentobox_sm,
                    ]}
                />
                <SingleProject
                    title="Frog Game"
                    subtitle="Unity 2D, random position, force and speed"
                    swapped={true}
                    alt="game of a frog chasing flies made with unity 2d"
                    image={[
                        "img/frogGame/frog_game_gameplay_gif.gif",
                        froggame_sm,
                    ]}
                />
*/
