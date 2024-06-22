"use client";
import styles from "./skillsContainer.module.css";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function SkillsContainer() {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    const initialBoxPositions = [
        { x: 70, y: 10 },
        { x: 50, y: 50 },
        { x: 90, y: -50 },
        { x: 120, y: 60 },
    ];

    useEffect(() => {
        const { Engine, Render, Runner, Bodies, Composite } = Matter;

        const engine = Engine.create();
        engineRef.current = engine;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 800,
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
                x: initialBoxPositions[0].x,
                y: initialBoxPositions[0].y,
                width: 94,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
            },
            {
                x: initialBoxPositions[1].x,
                y: initialBoxPositions[1].y,
                width: 68,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
            },
            {
                x: initialBoxPositions[2].x,
                y: initialBoxPositions[2].y,
                width: 126,
                height: 28,
                textureURL:
                    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            },
            {
                x: initialBoxPositions[3].x,
                y: initialBoxPositions[3].y,
                width: 104,
                height: 28,
                textureURL:
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--Rl0DwDaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Express.js-404D59%3Fstyle%3Dfor-the-badge",
            },
            // ... more box data
        ];
        const boxes = boxData.map((data) =>
            createBox(data.x, data.y, data.width, data.height, data.textureURL)
        );

        const wallL = Bodies.rectangle(-100, 300, 200, 5000, {
            isStatic: true,
        });
        const wallR = Bodies.rectangle(900, 300, 200, 5000, {
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
