"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./PlaygroundCard.module.css";
import Image from "next/image"; // Use Next.js Image for optimization
import AnimatedText from "./AnimatedText";
import AskAiButton from "./AskAiButton";

gsap.registerPlugin(ScrollTrigger);

type PlaygroundCardProps = {
    images: string[];
    imageAlt: string;
    title: string;
    description: string;
    aiQuery: string;
    linksGit: string | null;
};

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({
    images,
    imageAlt,
    title,
    description,
    aiQuery,
    linksGit,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering any card clicks
        setCurrentImgIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1,
        );
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1,
        );
    };

    useEffect(() => {
        const el = cardRef.current;
        if (el) {
            // This animation makes each card pop in as it appears
            gsap.to(el, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                // Use ScrollTrigger to trigger animation when the card scrolls into view
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "restart pause resume pause",
                },
            });
        }
    }, []); // Runs once when the component mounts

    const contentSection = useMemo(() => {
        // 1. Split by semicolon, trim whitespace, and ignore empty strings
        const links = (linksGit || "")
            .split(";")
            .map((l) => l.trim())
            .filter((l) => l.length > 0);

        return (
            <div className={styles.playgroundItemContent}>
                <h4>{title}</h4>

                {/* DYNAMIC LINK BADGES */}
                {links.length > 0 && (
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginBottom: "10px",
                        }}
                    >
                        {links.map((link, index) => {
                            // --- TYPE A: GITHUB ---
                            if (link.includes("github.com")) {
                                return (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="101"
                                            height="20"
                                            role="img"
                                            aria-label="GitHub: Code"
                                        >
                                            <title>GitHub: Code</title>
                                            <g shapeRendering="crispEdges">
                                                <rect
                                                    width="64"
                                                    height="20"
                                                    fill="#555"
                                                />
                                                <rect
                                                    x="64"
                                                    width="37"
                                                    height="20"
                                                    fill="#181717"
                                                />
                                            </g>
                                            <g
                                                fill="#fff"
                                                textAnchor="middle"
                                                fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
                                                textRendering="geometricPrecision"
                                                fontSize="110"
                                            >
                                                <image
                                                    x="5"
                                                    y="3"
                                                    width="14"
                                                    height="14"
                                                    href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="
                                                />
                                                <text
                                                    x="415"
                                                    y="140"
                                                    transform="scale(.1)"
                                                    fill="#fff"
                                                    textLength="370"
                                                >
                                                    GitHub
                                                </text>
                                                <text
                                                    x="815"
                                                    y="140"
                                                    transform="scale(.1)"
                                                    fill="#fff"
                                                    textLength="270"
                                                >
                                                    Code
                                                </text>
                                            </g>
                                        </svg>
                                    </a>
                                );
                            }

                            // --- TYPE B: YOUTUBE ---
                            if (
                                link.includes("youtube.com") ||
                                link.includes("youtu.be")
                            ) {
                                return (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="108"
                                            height="20"
                                            role="img"
                                            aria-label="YouTube: Video"
                                        >
                                            <title>YouTube: Video</title>
                                            <g shapeRendering="crispEdges">
                                                <rect
                                                    width="67"
                                                    height="20"
                                                    fill="#555"
                                                />
                                                <rect
                                                    x="67"
                                                    width="41"
                                                    height="20"
                                                    fill="#FF0000"
                                                />
                                            </g>
                                            <g
                                                fill="#fff"
                                                textAnchor="middle"
                                                fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
                                                textRendering="geometricPrecision"
                                                fontSize="110"
                                            >
                                                {/* Play Triangle Icon */}
                                                <path
                                                    fill="white"
                                                    d="M13.5 10l-4-2.5v5l4-2.5z"
                                                />
                                                <text
                                                    x="365"
                                                    y="140"
                                                    transform="scale(.1)"
                                                    fill="#fff"
                                                    textLength="430"
                                                >
                                                    YouTube
                                                </text>
                                                <text
                                                    x="865"
                                                    y="140"
                                                    transform="scale(.1)"
                                                    fill="#fff"
                                                    textLength="310"
                                                >
                                                    Video
                                                </text>
                                            </g>
                                        </svg>
                                    </a>
                                );
                            }

                            return null;
                        })}
                    </div>
                )}

                <AnimatedText triggerRef={cardRef} animDuration={0.02}>
                    <p>{description}</p>
                </AnimatedText>

                <AskAiButton
                    questionKey={aiQuery}
                    className={styles.aiAskButton}
                />
            </div>
        );
    }, [title, description, aiQuery, linksGit]);

    return (
        <div className={styles.playgroundItem} ref={cardRef}>
            <div className={styles.imageWrapper}>
                <Image
                    src={images[currentImgIndex]}
                    alt={`${imageAlt} - view ${currentImgIndex + 1}`}
                    width={400}
                    height={300}
                    className={styles.playgroundImage}
                />
                {images.length > 1 && (
                    <>
                        <button
                            className={`${styles.navArrow} ${styles.prev}`}
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            &#10094; {/* Left Arrow Entity */}
                        </button>
                        <button
                            className={`${styles.navArrow} ${styles.next}`}
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            &#10095; {/* Right Arrow Entity */}
                        </button>

                        {/* Optional: Indicator dots */}
                        <div className={styles.carouselIndicators}>
                            {images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`${styles.dot} ${idx === currentImgIndex ? styles.activeDot : ""}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            {contentSection}
        </div>
    );
};

export default PlaygroundCard;
