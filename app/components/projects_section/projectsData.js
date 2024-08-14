// CafeLokal
import cafelokal_sm from "@/public/img/cafelokal/cafelokal_banner.png";
import cafelokal_under from "@/public/img/cafelokal/Under_Maintenance.png";
import cafelokal_sections from "@/public/img/cafelokal/sections.png";
import cafelokal_contact from "@/public/img/cafelokal/contact.png";
import cafelokal_about from "@/public/img/cafelokal/about_us.png";
import cafelokal_1 from "@/public/img/cafelokal/1.png";

// A* Path Finding
import astar_sm from "@/public/img/astar_path_finding/astar_pathfinding_result.png";
import astar_1 from "@/public/img/astar_path_finding/1.png";
import astar_2 from "@/public/img/astar_path_finding/2.png";
import astar_3 from "@/public/img/astar_path_finding/3.png";
import astar_4 from "@/public/img/astar_path_finding/4.png";

// Pattiserie Fur Elise
import furelise_sm from "@/public/img/furelise/fur_elise_banner.png";
import furelise_1 from "@/public/img/furelise/1.png";
import furelise_2 from "@/public/img/furelise/2.png";
import furelise_3 from "@/public/img/furelise/3.png";
import furelise_4 from "@/public/img/furelise/4.png";
import furelise_5 from "@/public/img/furelise/5.png";

// Lucy Game
import lucygame_sm from "@/public/img/lucyGame/lucy_grab_light.png";
import lucygame_1 from "@/public/img/lucyGame/1.png";
import lucygame_2 from "@/public/img/lucyGame/2.png";
import lucygame_3 from "@/public/img/lucyGame/3.png";

// Tamally-Shop
import tamalyshop_sm from "@/public/img/tamalyshop/tamalyshop_banner.png";
import tamalyshop_1 from "@/public/img/tamalyshop/1.png";
import tamalyshop_2 from "@/public/img/tamalyshop/2.png";
import tamalyshop_3 from "@/public/img/tamalyshop/3.png";
import tamalyshop_4 from "@/public/img/tamalyshop/4.png";
import tamalyshop_5 from "@/public/img/tamalyshop/5.png";

// Online IDE
import onlineIde_sm from "@/public/img/onlineIDE/more_code.png";
import onlineIde_1 from "@/public/img/onlineIDE/1.png";
import onlineIde_2 from "@/public/img/onlineIDE/2.png";
import onlineIde_3 from "@/public/img/onlineIDE/3.png";

// Bento Box Layout
import bentobox_sm from "@/public/img/bento_layout/bento_layout_desktop.png";
import bentobox_1 from "@/public/img/bento_layout/bento_layout_tablet.png";
import bentobox_2 from "@/public/img/bento_layout/bento_layout_mobile.png";
import bentobox_3 from "@/public/img/bento_layout/1.png";
import bentobox_4 from "@/public/img/bento_layout/2.png";

// Frog Game
import froggame_sm from "@/public/img/frogGame/frog_main_menu_unity.png";
import froggame_1 from "@/public/img/frogGame/1.png";
import froggame_2 from "@/public/img/frogGame/2.png";
import froggame_3 from "@/public/img/frogGame/3.png";
import froggame_4 from "@/public/img/frogGame/4.png";

const project_list = [
    {
        title: "Cafe Lokal",
        subtitle: "UX/UI Design & Freelance Development",
        main_image: ["img/cafelokal/cafelokal_banner_short.gif", cafelokal_sm],
        alt_main_img: "description",
        gallery: [
            {
                img: cafelokal_sm,
                alt: "image of the banner of the main page of the cafe lokal website",
            },
            {
                img: cafelokal_under,
                alt: "image of the page under development of the cafe lokal website",
            },
            {
                img: cafelokal_sections,
                alt: "image displaying the different sections of the cafe lokal website",
            },
            {
                img: cafelokal_contact,
                alt: "image of the contact us interface of the website cafe lokal website",
            },
            {
                img: cafelokal_about,
                alt: "image of the about us interface of the website cafe lokal",
            },
            {
                img: cafelokal_1,
                alt: "image of the about us interface of the website cafe lokal",
            },
        ],
        // TODO Implement this
        links: ["https://cafelokal.ca/"],
        tech_stack: [
            "PHP",
            "JS",
            "JQuery",
            "MySQL",
            "CSS",
            "SASS",
            "HTML",
            "Figma",
        ],
        badges: [
            {
                url: "https://cafelokal.ca/",
                icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--FCiMeOmJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/website-up-down-green-red/http/monip.org.svg",
                alt: "website badge",
            },
        ],
        project_desc: [
            "Led the development of a custom website for Cafe Lokal, a Kitsilano coffee shop, using PHP, HTML, CSS, JavaScript, and MySQL. The project encompassed full-stack development, from conceptualization and design to deployment and client handover",
            "***Key Responsibilities:***",
            "Led the entire development process, including front-end and back-end coding, database design, and server configuration.",
            "Created visually appealing and user-friendly designs using Figma, ensuring an optimal browsing experience for Cafe Lokal's customers.",
            "Contributed to the website's visual appeal by capturing and curating high-quality photographs.",
            "Managed project timelines, ensuring timely delivery within the 3-month timeframe. Maintained open communication with the cafe owners, providing regular progress updates and incorporating their feedback.",
            "Trained the cafe owners on content management, enabling them to independently update the website post-launch.",
            "***Impact:***",
            "Delivered a visually appealing and functional website that significantly elevated Cafe Lokal's online presence.",
            "Improved the cafe's visibility, resulting in more customers using the website to check opening hours and menus.",
            "Exceeded client expectations, leading to high satisfaction and positive testimonials.",
        ],
    },
    {
        title: "A* Path Finding Algorithm",
        subtitle: "Unity 2D, shortes path algorithm, and games",
        main_image: ["img/astar_path_finding/astar_alg_gif.gif", astar_sm],
        alt_main_img:
            "Image showing the interface of a unity 2d project using the a* path finding algorithm",
        gallery: [
            {
                img: astar_sm,
                alt: "image showing the path completed",
            },
            {
                img: astar_1,
                alt: "image of my a* path finding algorithm in unity 2d",
            },
            {
                img: astar_2,
                alt: "image of my a* path finding algorithm in unity 2d",
            },
            {
                img: astar_3,
                alt: "image of my a* path finding algorithm in unity 2d",
            },
            {
                img: astar_4,
                alt: "image of my a* path finding algorithm in unity 2d",
            },
        ],
        badges: [
            {
                url: "https://github.com/GamezAr94/AstarPathFindingAlgorithm",
                icon: "/img/icons/github.png",
                alt: "github badge",
            },
        ],
        // TODO Implement this
        links: ["https://github.com/GamezAr94/AstarPathFindingAlgorithm"],
        tech_stack: ["C#", "Unity 2D", "Krita"],
        project_desc: [
            "Developed a Unity 2D application that calculates and visualizes the shortest path between two points on a grid-based map, even with obstacles. The algorithm efficiently determines the optimal route by evaluating neighboring tiles and prioritizing those with the lowest cost, ensuring the path is both short and avoids obstacles.",
            "***Key Features:***",
            " Implemented the A* algorithm to calculate the shortest path in under 2 seconds, demonstrating a strong understanding of algorithmic efficiency.",
            "Utilized a grid system to represent the map, showcasing proficiency in spatial reasoning and data structures.",
            "Incorporated obstacle detection and avoidance into the algorithm, highlighting problem-solving skills and adaptability.",
            "Employed lists and dictionaries for efficient data management and navigation within the grid.",
            "Developed a basic UI to visualize the map, path, and obstacles, demonstrating an understanding of user experience principles.",
            "***Impact:***",
            "Strengthened my ability to break down complex problems into smaller, manageable steps and apply logical reasoning to solve them.",
            "Gained hands-on experience in understanding and implementing a core pathfinding algorithm, a valuable skill in many other fields.",
            "Successfully applied the A* algorithm to a separate coffee shop game experiment (last screen shot), showcasing the ability to transfer knowledge and adapt solutions to new scenarios. The coffee shop game efficiently guided customers (black circles) from their spawn point to the cashier, utilizing the calculated paths and demonstrating the algorithm's effectiveness in a dynamic environment.",
            "***Learning Outcomes:***",
            "Recognized the trade-off between the A* algorithm's efficiency in finding the shortest path and its computational demands due to evaluating multiple cells.",
            "Learned how to integrate obstacle avoidance into the algorithm, further enhancing its adaptability to complex environments.",
        ],
    },
    {
        title: "Pâtisserie Für Elise",
        subtitle: "UX/UI Design & Freelance Development",
        main_image: ["img/furelise/fur_elise_banner_gif.gif", furelise_sm],
        alt_main_img: "banner of a coffe shop located at downtown vancouver",
        gallery: [
            {
                img: furelise_sm,
                alt: "image showing the website of a coffee shop in downtown",
            },
            {
                img: furelise_1,
                alt: "image showing the website of a coffee shop in downtown",
            },
            {
                img: furelise_2,
                alt: "image showing the website of a coffee shop in downtown",
            },
            {
                img: furelise_3,
                alt: "image showing the website of a coffee shop in downtown",
            },
            {
                img: furelise_4,
                alt: "image showing the website of a coffee shop in downtown",
            },
            {
                img: furelise_5,
                alt: "image showing the website of a coffee shop in downtown",
            },
        ],
        // TODO Implement this
        links: ["https://furelise.arturogamez.com/"],
        tech_stack: ["PHP", "WordPress", "Oxygen", "Plugin System", "Figma"],
        badges: [
            {
                url: "https://furelise.arturogamez.com/",
                icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--FCiMeOmJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/website-up-down-green-red/http/monip.org.svg",
                alt: "website badge",
            },
        ],
        project_desc: [
            "Took the initiative to learn WordPress and the Oxygen Builder by redesigning the website of a downtown Vancouver coffee shop. The goal was twofold: gain valuable experience with these tools and potentially earn extra income by offering the redesigned website to the shop owner. While the owner ultimately decided not to proceed with the redesign, the project served as a valuable learning opportunity.",
            "***Key Feature***",
            "Created a visually appealing and intuitive website design using Oxygen, showcasing an understanding of UX/UI principles.",
            "Integrated a reservation plugin, allowing customers to easily book tables online.",
            "Gained in-depth experience with WordPress content management and the Oxygen Builder's drag-and-drop interface.",
            "Demonstrated adaptability by making minor code tweaks to tailor the website to specific requirements.",
            "***Impact:***",
            "Successfully learned WordPress, Oxygen, and reservation plugin integration, expanding your skillset.",
            "Demonstrated initiative and a willingness to go above and beyond to acquire new skills and knowledge.",
            "Navigated technical challenges and found solutions, highlighting adaptability and resourcefulness.",
            "Gained confidence in using these tools for future projects.",
            "Learned how to integrate and configure a reservation plugin, a valuable skill for many websites.",
            "Practiced presenting your work and ideas to a potential client.",
        ],
    },
    {
        title: "Lucy Game",
        subtitle: "Unity 2D, GameJam, Light, Masks & Collisions",
        main_image: ["img/lucyGame/lucyGame-gif.gif", lucygame_sm],
        alt_main_img: "banner of a coffe shop located at downtown vancouver",
        gallery: [
            {
                img: lucygame_sm,
                alt: "image of a game made with unity, main character is a firefly collecting light to survive",
            },
            {
                img: lucygame_1,
                alt: "image of a game made with unity, main character is a firefly collecting light to survive",
            },
            {
                img: lucygame_2,
                alt: "image of a game made with unity, main character is a firefly collecting light to survive",
            },
            {
                img: lucygame_3,
                alt: "image of a game made with unity, main character is a firefly collecting light to survive",
            },
        ],
        // TODO Implement this
        links: ["https://github.com/GamezAr94/Lucy"],
        tech_stack: ["C#", "Unity 2D", "Figma"],
        badges: [
            {
                url: "https://github.com/GamezAr94/Lucy",
                icon: "/img/icons/github.png",
                alt: "github badge",
            },
            {
                url: "https://www.youtube.com/watch?v=5cnxBd4Gq6k",
                icon: "/img/icons/youtube.png",
                alt: "github badge",
            },
        ],
        project_desc: [
            "2D game where the player controls a firefly navigating a dark environment. The firefly relies on collecting items to illuminate its surroundings and avoid obstacles and enemies. The game features engaging mechanics like parallax scrolling, particle systems, and lighting manipulation to create an immersive experience.",
            "***Gameplay Mechanics:***",
            "The player's vision is limited, requiring them to strategically collect items to reveal the environment and navigate safely.",
            "The firefly's energy is tied to its light source, adding a layer of challenge and resource management.",
            "Players must use their limited light to avoid collisions with obstacles and enemies, testing their reaction time and decision-making skills.",
            "***Technical Implementation:***",
            "Leveraged C# scripting and Unity's 2D tools to create the game's core mechanics and visuals.",
            "Implemented a parallax scrolling system to create a sense of depth and immersion in the game world.",
            "Utilized particle systems to create visually appealing effects for the firefly's movement, tail, and item interactions.",
            "Employed sprite masks to simulate lighting effects, revealing game elements within the firefly's light radius.",
            "Created and integrated 2D animations using tools like Krita to bring the firefly character to life.",
            "Implemented a system to spawn power-up items randomly along the Y-axis, adding unpredictability and challenge.",
            "***Learning Outcomes:***",
            "Mastered the use of masks in Unity to create dynamic lighting effects and reveal game elements selectively.",
            "Learned to generate items at random positions, enhancing gameplay variety and replayability.",
            "Gained proficiency in creating and controlling particle systems to add visual flair and enhance gameplay feedback.",
            "Successfully integrated parallax scrolling to create a more immersive and visually engaging environment.",
            "***NOTE:***",
            "This game is NOT finished. I was practicing and learning new techniques, so I implemented those skills in a game prototype that I built from zero. You can play it, but it doesn't have levels, enemies, or health system",
        ],
    },
    {
        title: "Tamaly Shop",
        subtitle: "UX/UI Design, E-Commerce & Freelance Development",
        main_image: ["img/tamalyshop/tamalyshop_banner_gif.gif", tamalyshop_sm],
        alt_main_img: "banner of a restaurant located at downtown vancouver",
        gallery: [
            {
                img: tamalyshop_sm,
                alt: "image of a website of a restaurant located at downtown vancouver",
            },
            {
                img: tamalyshop_1,
                alt: "image of a website of a restaurant located at downtown vancouver",
            },
            {
                img: tamalyshop_2,
                alt: "image of a website of a restaurant located at downtown vancouver",
            },
            {
                img: tamalyshop_3,
                alt: "image of a website of a restaurant located at downtown vancouver",
            },
            {
                img: tamalyshop_4,
                alt: "image of a website of a restaurant located at downtown vancouver",
            },
            {
                img: tamalyshop_5,
                alt: "image of a website of a restaurant located at downtown vancouver",
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
    {
        title: "Online IDE",
        subtitle: "Online IDE to solve Coding Problems",
        main_image: ["img/onlineIDE/full_video_gif.gif", onlineIde_sm],
        alt_main_img: "Interface of an online IDE to solve coding challenges",
        gallery: [
            {
                img: onlineIde_sm,
                alt: "Image of an online IDE built using php",
            },
            {
                img: onlineIde_1,
                alt: "Image of an online IDE built using php",
            },
            {
                img: onlineIde_2,
                alt: "Image of an online IDE built using php",
            },
            {
                img: onlineIde_3,
                alt: "Image of an online IDE built using php",
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
    {
        title: "Bento Box Layout",
        subtitle: "Modern Bento Box Layout Fully Responsive",
        main_image: ["img/bento_layout/bento_layout_desktop.png", bentobox_sm],
        alt_main_img: "layout of a modern layout bento box style",
        gallery: [
            {
                img: bentobox_sm,
                alt: "Screenshot of an interface of a modern layout type bento box",
            },
            {
                img: bentobox_1,
                alt: "Screenshot of an interface of a modern layout type bento box",
            },
            {
                img: bentobox_2,
                alt: "Screenshot of an interface of a modern layout type bento box",
            },
            {
                img: bentobox_3,
                alt: "Screenshot of an interface of a modern layout type bento box",
            },
            {
                img: bentobox_4,
                alt: "Screenshot of an interface of a modern layout type bento box",
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
    {
        title: "Frog Game",
        subtitle: "Unity 2D, Design and Development",
        main_image: ["img/frogGame/frog_game_gameplay_gif.gif", froggame_sm],
        alt_main_img:
            "screenshot of a unity 2d game of a frog collecting flies",
        gallery: [
            {
                img: froggame_sm,
                alt: "screenshot of a unity 2d game of a frog collecting flies",
            },
            {
                img: froggame_1,
                alt: "screenshot of a unity 2d game of a frog collecting flies",
            },
            {
                img: froggame_2,
                alt: "screenshot of a unity 2d game of a frog collecting flies",
            },
            {
                img: froggame_3,
                alt: "screenshot of a unity 2d game of a frog collecting flies",
            },
            {
                img: froggame_4,
                alt: "screenshot of a unity 2d game of a frog collecting flies",
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
