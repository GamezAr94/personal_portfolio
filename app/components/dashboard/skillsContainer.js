"use client";
import styles from "./skillsContainer.module.css";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function SkillsContainer() {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    const initialBoxPositions = [
        { x: 469, y: -198 },
        { x: 295, y: -168 },
        { x: 221, y: -146 },
        { x: 193, y: -191 },
        { x: 610, y: -162 },
        { x: 32, y: -196 },
        { x: 370, y: -132 },
        { x: 276, y: -170 },
        { x: 23, y: -174 },
        { x: 718, y: -102 },
        { x: 676, y: -178 },
        { x: 67, y: -108 },
        { x: 844, y: -166 },
        { x: 135, y: -188 },
        { x: 659, y: -196 },
        { x: 621, y: -181 },
        { x: 301, y: -126 },
        { x: 703, y: -158 },
        { x: 296, y: -172 },
        { x: 575, y: -137 },
        { x: 622, y: -131 },
        { x: 85, y: -144 },
        { x: 447, y: -165 },
        { x: 428, y: -148 },
        { x: 417, y: -103 },
        { x: 541, y: -150 },
        { x: 458, y: -162 },
        { x: 322, y: -101 },
    ];

    useEffect(() => {
        const { Engine, Render, Runner, Bodies, Composite } = Matter;

        const engine = Engine.create();
        engineRef.current = engine;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 750,
                height: 300,
                wireframes: false,
                background: "transparent",
            },
        });

        const options = {
            friction: 0.03,
            restitution: 0.3,
            render: {
                sprite: {
                    xScale: 1,
                    yScale: 1,
                },
            },
        };

        function createBox(x, y, width, height, textureURL) {
            const boxOptions = { ...options }; // Clone the default options
            boxOptions.render.sprite.texture = textureURL;
            return Bodies.rectangle(x, y, width, height, boxOptions);
        }

        // Run Render first
        Render.run(render);
        Runner.run(engine);

        // Create boxes and ground
        const boxData = [
            {
                // github
                x: initialBoxPositions[0].x,
                y: initialBoxPositions[0].y,
                width: 94,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
            },
            {
                // php
                x: initialBoxPositions[1].x,
                y: initialBoxPositions[1].y,
                width: 68,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
            },
            {
                // javascript
                x: initialBoxPositions[2].x,
                y: initialBoxPositions[2].y,
                width: 126,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            },
            {
                // express.js
                x: initialBoxPositions[3].x,
                y: initialBoxPositions[3].y,
                width: 104,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--Rl0DwDaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Express.js-404D59%3Fstyle%3Dfor-the-badge",
            },
            {
                // react
                x: initialBoxPositions[4].x,
                y: initialBoxPositions[4].y,
                width: 85,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--K5_crFQ5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/React-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB",
            },
            {
                // tailwind
                x: initialBoxPositions[5].x,
                y: initialBoxPositions[5].y,
                width: 143,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--X1_tTziN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite",
            },
            {
                // mongoDB
                x: initialBoxPositions[6].x,
                y: initialBoxPositions[6].y,
                width: 110,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--m4KqDleG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/MongoDB-4EA94B%3Fstyle%3Dfor-the-badge%26logo%3Dmongodb%26logoColor%3Dwhite",
            },
            {
                // postgresql
                x: initialBoxPositions[7].x,
                y: initialBoxPositions[7].y,
                width: 130,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--LF_tT4cg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/PostgreSQL-316192%3Fstyle%3Dfor-the-badge%26logo%3Dpostgresql%26logoColor%3Dwhite",
            },
            {
                // mysql
                x: initialBoxPositions[8].x,
                y: initialBoxPositions[8].y,
                width: 87,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--OvXzauo0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/MySQL-00000F%3Fstyle%3Dfor-the-badge%26logo%3Dmysql%26logoColor%3Dwhite",
            },
            {
                // unity
                x: initialBoxPositions[9].x,
                y: initialBoxPositions[9].y,
                width: 85,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--fHr87ejy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Unity-100000%3Fstyle%3Dfor-the-badge%26logo%3Dunity%26logoColor%3Dwhite",
            },
            {
                // amazon AWS
                x: initialBoxPositions[10].x,
                y: initialBoxPositions[10].y,
                width: 134,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--891ylAtK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Amazon_AWS-232F3E%3Fstyle%3Dfor-the-badge%26logo%3Damazon-aws%26logoColor%3Dwhite",
            },
            {
                // c#
                x: initialBoxPositions[11].x,
                y: initialBoxPositions[11].y,
                width: 58,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--jI4D6kUn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/C%2523-239120%3Fstyle%3Dfor-the-badge%26logo%3Dc-sharp%26logoColor%3Dwhite",
            },
            {
                // HTML5
                x: initialBoxPositions[12].x,
                y: initialBoxPositions[12].y,
                width: 87,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--oicIUVtB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/HTML5-E34F26%3Fstyle%3Dfor-the-badge%26logo%3Dhtml5%26logoColor%3Dwhite",
            },
            {
                // typescript
                x: initialBoxPositions[13].x,
                y: initialBoxPositions[13].y,
                width: 126,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--ZLN5gijI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/TypeScript-007ACC%3Fstyle%3Dfor-the-badge%26logo%3Dtypescript%26logoColor%3Dwhite",
            },
            {
                // node.js
                x: initialBoxPositions[14].x,
                y: initialBoxPositions[14].y,
                width: 100,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s---tuyDVl_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Node.js-43853D%3Fstyle%3Dfor-the-badge%26logo%3Dnode.js%26logoColor%3Dwhite",
            },
            {
                // css3
                x: initialBoxPositions[15].x,
                y: initialBoxPositions[15].y,
                width: 75,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--rGgyOnJR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/CSS3-1572B6%3Fstyle%3Dfor-the-badge%26logo%3Dcss3%26logoColor%3Dwhite",
            },
            {
                // sass
                x: initialBoxPositions[16].x,
                y: initialBoxPositions[16].y,
                width: 75,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--Dsy2kaod--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Saas-CC6699%3Fstyle%3Dfor-the-badge%26logo%3Dsass%26logoColor%3Dwhite",
            },
            {
                // SQLite
                x: initialBoxPositions[17].x,
                y: initialBoxPositions[17].y,
                width: 90,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--7sSBcOK2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/SQLite-07405E%3Fstyle%3Dfor-the-badge%26logo%3Dsqlite%26logoColor%3Dwhite",
            },
            {
                // JEST
                x: initialBoxPositions[18].x,
                y: initialBoxPositions[18].y,
                width: 77,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--sDtFcwqD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Jest-323330%3Fstyle%3Dfor-the-badge%26logo%3DJest%26logoColor%3Dwhite",
            },
            {
                // LINUX
                x: initialBoxPositions[19].x,
                y: initialBoxPositions[19].y,
                width: 88,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s---6tX76y---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Linux-FCC624%3Fstyle%3Dfor-the-badge%26logo%3Dlinux%26logoColor%3Dblack",
            },
            {
                // JIRA
                x: initialBoxPositions[20].x,
                y: initialBoxPositions[20].y,
                width: 77,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--rhEdMEUP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Jira-0052CC%3Fstyle%3Dfor-the-badge%26logo%3DJira%26logoColor%3Dwhite",
            },
            {
                // GIT
                x: initialBoxPositions[21].x,
                y: initialBoxPositions[21].y,
                width: 70,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--ndcdzj74--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/GIT-E44C30%3Fstyle%3Dfor-the-badge%26logo%3Dgit%26logoColor%3Dwhite",
            },
            {
                // VIM
                x: initialBoxPositions[22].x,
                y: initialBoxPositions[22].y,
                width: 72,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--66dmPjPC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/VIM-%252311AB00.svg%3F%26style%3Dfor-the-badge%26logo%3Dvim%26logoColor%3Dwhite",
            },
            {
                // VSCODE
                x: initialBoxPositions[23].x,
                y: initialBoxPositions[23].y,
                width: 193,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--Zk4fj9dE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Visual_Studio_Code-0078D4%3Fstyle%3Dfor-the-badge%26logo%3Dvisual%2520studio%2520code%26logoColor%3Dwhite",
            },
            {
                // FIGMA
                x: initialBoxPositions[24].x,
                y: initialBoxPositions[24].y,
                width: 89,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--AvkvWIYp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Figma-F24E1E%3Fstyle%3Dfor-the-badge%26logo%3Dfigma%26logoColor%3Dwhite",
            },
            {
                // SUPABASE
                x: initialBoxPositions[25].x,
                y: initialBoxPositions[25].y,
                width: 115,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--F_AUpxjM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Supabase-181818%3Fstyle%3Dfor-the-badge%26logo%3Dsupabase%26logoColor%3Dwhite",
            },
            {
                // UBUNTU
                x: initialBoxPositions[26].x,
                y: initialBoxPositions[26].y,
                width: 96,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--laPQ3aRq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Ubuntu-E95420%3Fstyle%3Dfor-the-badge%26logo%3Dubuntu%26logoColor%3Dwhite",
            },
            {
                // WordPress
                x: initialBoxPositions[27].x,
                y: initialBoxPositions[27].y,
                width: 129,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--0WN4-DJa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Wordpress-21759B%3Fstyle%3Dfor-the-badge%26logo%3Dwordpress%26logoColor%3Dwhite",
            },
            // ... more box data
        ];

        const boxes = boxData.map((data) =>
            createBox(data.x, data.y, data.width, data.height, data.textureURL)
        );

        //setting the limits
        const wallL = Bodies.rectangle(-100, 300, 200, 5000, {
            isStatic: true,
        });
        const wallR = Bodies.rectangle(850, 300, 200, 5000, {
            isStatic: true,
        });
        const ceiling = Bodies.rectangle(0, -1000, 5000, 100, {
            isStatic: true,
        });
        const ground = Bodies.rectangle(0, 350, 5000, 100, {
            isStatic: true,
        });

        // Add to world
        Composite.add(engine.world, [...boxes, ground, wallL, wallR, ceiling]);

        // Mouse Constraint
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2, // Adjust for drag responsiveness
                render: {
                    visible: false,
                },
            },
        });
        Composite.add(engine.world, mouseConstraint);

        // Cleanup
        return () => {
            Render.stop(render);
            Runner.stop(engine);
            Matter.World.clear(engine.world, false);
            Matter.Engine.clear(engine);
            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, []);

    const handleReset = () => {
        const engine = engineRef.current; // Get the engine from the ref

        // Reset box positions
        Matter.Composite.allBodies(engine.world).forEach((body, index) => {
            console.log(body);
            if (
                body.label.startsWith("Rectangle Body") &&
                index < initialBoxPositions.length
            ) {
                // Check if it's a box
                Matter.Body.setPosition(body, initialBoxPositions[index]);
                Matter.Body.setVelocity(body, { x: 0, y: 0 }); // Reset velocity
                Matter.Body.setAngularVelocity(body, 0); // Reset angular velocity
                Matter.Body.setAngle(body, 0);
            }
        });

        // You might also want to clear any mouse constraints or other interactions
        // ...
    };

    return (
        <>
            <div className={`${styles.physic_container}`} ref={sceneRef}></div>
            <button className={styles.reset_button} onClick={handleReset}>
                Reset
            </button>
        </>
    );
}
