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
        tech_stack: [
            "PHP",
            "WordPress",
            "JavaScript",
            "Oxygen",
            "Plugin System",
            "Figma",
        ],
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
                alt: "youtube badge",
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
        // TODO Implement this
        links: ["https://tamaly-shop.com/"],
        tech_stack: [
            "PHP",
            "WordPress",
            "WooCommerce",
            "Elementor",
            "Payment System",
            "CSS",
            "JavaScript",
            "Figma",
        ],
        badges: [
            {
                url: "https://tamaly-shop.com/",
                icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--FCiMeOmJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/website-up-down-green-red/http/monip.org.svg",
                alt: "website badge",
            },
        ],
        project_desc: [
            "Developed a comprehensive e-commerce website for a new Mexican restaurant in downtown Vancouver, enabling them to expand their reach and offer online ordering and delivery services. The project involved full-stack development, from design and implementation to client training and launch.",
            "***Key Features:***",
            "Leveraged WordPress and WooCommerce to create a robust and customizable online store.",
            "Utilized Elementor's interface to design visually appealing and user-friendly pages.",
            "Employed PHP, JavaScript, and CSS to enhance the store's look, feel, and behavior, tailoring it to the client's specific requirements.",
            "Carefully selected and configured various plugins to optimize the shopping cart, checkout process, and overall user experience.",
            "Maintained open communication with the client throughout the development process, gathering feedback and ensuring their vision was realized.",
            "Provided training to the restaurant staff, enabling them to manage and update the website independently.",
            "***Impact:***",
            "Delivered a fully functional and visually appealing e-commerce website that enabled the restaurant to start selling online.",
            "Expanded the restaurant's customer base by offering online ordering and delivery options.",
            "Exceeded client expectations, resulting in a positive working relationship and testimonials.",
        ],
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
        // TODO Implement this
        links: [],
        tech_stack: ["React.js", "Node.js", "CSS", "SASS", "HTML"],
        badges: [],
        project_desc: [
            "Developed an online code editor and execution environment using React.js and Node.js, enabling users to write and run code directly in their browsers. This project was self-hosted on a Raspberry Pi using Nginx, showcasing initiative and resourcefulness. While the current implementation has limitations, it served as a valuable proof of concept and learning experience.",
            "***Key Features:***",
            "Integrated CodeMirror for a robust code editing experience, with syntax highlighting and basic IDE-like features (e.g., automatic bracket closing).",
            "Implemented support for specific languages (e.g., PHP, C, C++), allowing users to write and execute code in their chosen language.",
            "Set up a server-side environment to compile and run user code, returning the output to the browser.",
            "Demonstrated resourcefulness by utilizing a Raspberry Pi and configuring Nginx for self-hosting.",
            "Gained proficiency in integrating and customizing CodeMirror for a seamless code editing experience.",
            "Learned how to securely handle user code execution on the server, including input validation and output sanitization",
            "Acquired hands-on experience with server configuration and deployment using Nginx on a Raspberry Pi.",
            "Validated the core idea of an online IDE with code execution, providing a foundation for future development.",
            "***Future Plans:***",
            "Implement Docker containers to create isolated sandboxes for each user's code execution, mitigating security risks and preventing system disruptions.",
            "Utilize the Mantine library for streamlined UI development and a more polished user interface.",
            "Integrate Supabase for user authentication and data storage, enabling users to save their code and progress.",
            "Transition to Next.js for improved performance, SEO benefits, and streamlined development.",
        ],
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
                url: "https://github.com/GamezAr94/imposible-layout",
                icon: "/img/icons/github.png",
                alt: "github badge",
            },
            {
                url: "https://tatamiv1-plyiclo3v-arturos-projects-868ff297.vercel.app/",
                icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--FCiMeOmJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/website-up-down-green-red/http/monip.org.svg",
                alt: "website badge",
            },
        ],
        project_desc: [
            "Designed and implemented a visually striking and responsive website layout inspired by the Bento Box style, showcasing a modern aesthetic and efficient information presentation. The project focused on creating a multi-section layout where key content is readily accessible without excessive scrolling.",
            "***Key Features:***",
            "Implemented a six-section grid layout, showcasing a clean and organized structure for content presentation.",
            "Ensured the layout adapts seamlessly to various screen sizes and devices, providing an optimal user experience.",
            "Leveraged Sass, CSS, and Figma to craft visually captivating designs with complex shapes and modern styling.",
            "Prioritized content visibility, allowing users to quickly access key information without scrolling.",
            "Applied similar design principles to my own portfolio website, demonstrating the practical value of this project.",
            "***Learning Outcomes:***",
            "Gained proficiency in implementing intricate layouts and styles using advanced CSS and Sass.",
            "Enhanced your understanding of creating layouts that adapt fluidly to different screen sizes.",
            "Utilized Figma to conceptualize and refine the layout before implementation.",
            "Mastered the implementation of this modern and attractive layout style.",
        ],
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
        // TODO Implement this
        links: ["https://github.com/GamezAr94/Frog-Game"],
        tech_stack: ["C#", "Unity 2D", "Krita"],
        badges: [
            {
                url: "https://github.com/GamezAr94/Frog-Game",
                icon: "/img/icons/github.png",
                alt: "github badge",
            },
        ],
        project_desc: [
            "Developed an engaging Android game where the player controls a frog on a quest to catch insects and boost their score. The game features touch-based controls, a variety of enemies and power-ups, and a time-based challenge,",
            "***Gameplay Mechanics:***",
            "The frog uses its tongue to catch insects, increasing the player's score.",
            "Players race against the clock to catch as many insects as possible before time runs out.",
            "Intuitive touch controls allow players to move the frog and initiate tongue attacks. swipe left to right will move the frog from side to side, and swipe from top to bottom will aim and attack",
            "***Technical Implementation:***",
            "scripting and Unity's 2D tools to create the game's core mechanics, visuals, and animations.",
            "Implemented a parallax scrolling system for an immersive and dynamic visual experience.",
            "Used particle systems to enhance visual feedback for actions like catching insects or encountering enemies.",
            "Developed a responsive touch control system for smooth and intuitive gameplay on Android devices.",
            "Created and integrated 2D animations using Krita to bring the frog and other game elements to life.",
            "Employed structs and inheritance for efficient code organization and reusability, particularly in creating enemies and creatures.",
            "Implemented an event system for game state management and coroutines for timed actions, demonstrating proficiency in game flow control.",
            "Overcame challenges with fast-moving tongue collision detection by utilizing raycasts for more accurate interaction.",
            "Used Unity's sprite manipulation features to create the elastic tongue effect, adding visual appeal.",
            "***Learning Outcomes:***",
            "Gained expertise in using Unity's event system for robust game state control and interaction handling.",
            "Learned to leverage structs and inheritance for cleaner and more maintainable code.",
            "Mastered the use of coroutines for timing-based actions and game flow control.",
            "Developed problem-solving skills by implementing raycasts for accurate collision detection with fast-moving objects.",
            "Explored Unity's sprite manipulation features to create visually interesting effects like the elastic tongue.",
            "***Project Status:***",
            "The game is currently in active development, with plans to add more enemies, insects, power-ups, and animations.",
            "The project utilizes branches for feature development, showcasing version control practices. If you install it you should use the branch NewFeaturesCreature, this one is the most recent",
        ],
    },
];

/*
    {
        title: "title of the project",
        subtitle: "Subtitle of the project",
        // main img gif and fallback option for mobile
        main_image: ["img/frogGame/frog_game_gameplay_gif.gif", froggame_sm],
        alt_main_img:
            "Screenshot desc for the main img",
        gallery: [
            {
                img: screenshot_1,
                alt: "Screenshot desc",
            },
        ],
        // TODO Implement this
        links: ["https://github.com/GamezAr94/Frog-Game"],
        tech_stack: ["C#", "Unity 2D", "Krita"],
        badges: [
            {
                url: "URL OF THE PROJECT",
                icon: "/img/icons/github.png",
                OR
                icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--FCiMeOmJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/website-up-down-green-red/http/monip.org.svg",
                OR
                icon: "/img/icons/youtube.png",
                alt: "github badge",
            },
        ],
        project_desc: ["***Title with asterisks***", "Description"],
    },
    */
export default project_list;
