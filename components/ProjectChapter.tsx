"use client"; // <--- THIS IS THE FIX

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ProjectChapter.module.css";
import AnimatedText from "./AnimatedText";

import { useTranslations } from "next-intl";
import { useChatAPI } from "@/context/ChatContext";
import AskAiButton from "./AskAiButton";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// --- Define the props this component accepts ---
type Feature = {
    title: string;
    description: string;
};

type ProjectImage = {
    url: string;
    alt: string;
};

type ProjectChapterProps = {
    id: string; // HTML id like "projects" or "chapter2"
    chapterTitle: string; // "Chapter 1: The Foundation"
    narrative: string; // "It all starts with a solid foundation..."

    // Project Details
    projectTitle: string;
    projectDescription: string;
    techTags: string[]; // ["C#", "PHP", "Linux"]
    q1Key: string;
    q2Key: string;
    onLeaveBack_q1Key: string;
    onLeaveBack_q2Key: string;
    // Scrollytelling Features
    features: Feature[]; // [{ title: "...", description: "..." }]

    // Visual
    images: ProjectImage[];
};

// --- The Reusable Component ---
const ProjectChapter: React.FC<ProjectChapterProps> = ({
    id,
    chapterTitle,
    narrative,
    projectTitle,
    projectDescription,
    techTags,
    q1Key,
    q2Key,
    onLeaveBack_q1Key,
    onLeaveBack_q2Key,
    features,
    images,
}) => {
    const t_chat = useTranslations("ChatQuestions");

    const { setContextualQuestions } = useChatAPI();

    // Refs for all animated elements
    const sectionRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const featuresListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Use a context for ScrollTrigger batching
        const ctx = gsap.context(() => {
            // --- 1. H2 "Wave" Animation ---
            const h2 = h2Ref.current;
            if (h2) {
                const originalText = chapterTitle;
                let newHTML = "";

                const words = originalText.split(" ");
                words.forEach((word, index) => {
                    let wordHTML = `<span class=${styles.word}>`;
                    word.split("").forEach((char) => {
                        wordHTML += `<span class=${styles.letter}>${char}</span>`;
                    });
                    wordHTML += "</span>";
                    newHTML += wordHTML;

                    if (index < words.length - 1) {
                        newHTML += " ";
                    }
                });
                h2.innerHTML = newHTML;

                const letters = h2.querySelectorAll(`.${styles.letter}`);
                gsap.to(letters, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: h2,
                        start: "top 85%",
                        toggleActions: "restart pause resume pause",
                    },
                });
            }

            // --- 2. Narrative Paragraph Animation ---
            if (pRef.current) {
                gsap.to(pRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: pRef.current,
                        start: "top 90%",
                        toggleActions: "restart pause resume pause",
                    },
                });
            }

            // --- 3. Project Visual Animation ---
            if (visualRef.current) {
                gsap.to(visualRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: visualRef.current,
                        start: "top 85%",
                        toggleActions: "restart pause resume pause",
                    },
                });
            }

            // --- 4. Project Description (staggered) ---
            if (descriptionRef.current) {
                // Select all direct children to animate
                const descriptionChildren = gsap.utils.toArray(
                    descriptionRef.current.children,
                );

                gsap.to(descriptionChildren, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 85%",
                        toggleActions: "restart pause resume pause",
                    },
                });
            }

            // --- 5. Scrollytelling Features ---
            if (featuresListRef.current) {
                // Cast to HTMLElement[] to solve TypeScript error
                const featureItems = gsap.utils.toArray(
                    featuresListRef.current.children,
                ) as HTMLElement[];

                featureItems.forEach((feature: HTMLElement) => {
                    // Now 'feature' is known
                    ScrollTrigger.create({
                        trigger: feature, // This is now valid
                        start: "top 70%",
                        end: "bottom 40%",
                        onToggle: (self) => {
                            feature.classList.toggle(
                                styles.isActive,
                                self.isActive,
                            );
                        },
                        toggleActions: "restart pause resume pause",
                    });
                });
            }
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 50%",
                end: "bottom 50%",

                onEnter: () => {
                    setContextualQuestions([t_chat(q1Key), t_chat(q2Key)]);
                },
                onLeaveBack: () => {
                    // Esto es un poco más complicado, ya que no sabemos qué
                    // sección estaba antes. Podría ser 'Experience' o 'ProjectChapter'.
                    // Por ahora, lo pondremos a 'Experience' como valor seguro.
                    // Podríamos mejorar esto luego si es necesario.
                    setContextualQuestions([
                        t_chat(onLeaveBack_q1Key),
                        t_chat(onLeaveBack_q2Key),
                    ]);
                },
            });

            if (visualRef.current && images.length > 1) {
                const imageElements = visualRef.current.querySelectorAll("img");

                // Create a timeline that is tied to the scroll progress of the WHOLE section
                // This allows the images to cycle evenly as you read through the content.
                const scrubTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current, // The whole chapter is the track
                        start: "top top", // Adjust: Start changing when section hits top
                        end: "bottom 60%", // Finish changing when section ends
                        scrub: true, // Binds animation progress to scrollbar
                    },
                });

                // Loop through images (skipping the first one which is already visible)
                // and fade them in one by one.
                // Note: We use imageElements array from the DOM
                imageElements.forEach((img, i) => {
                    if (i === 0) return; // Skip first image

                    scrubTl.to({}, { duration: 20 });

                    // Calculate a step value to space them out evenly?
                    // GSAP Timeline automatically sequences them.
                    scrubTl.to(img, {
                        opacity: 1,
                        ease: "none", // Linear transition for direct control
                        duration: 5, // The duration is relative in a scrubbed timeline
                    });

                    // the previous image to fade OUT as this one fades IN:
                    scrubTl.to(
                        imageElements[i - 1],
                        { opacity: 0, duration: 1 },
                        "<",
                    );
                });
            }

            // --- KEEP: Your existing "Enter" animation for the Visual wrapper ---
            // This animates the whole block entering, not the swapping inside it.
            if (visualRef.current) {
                gsap.to(visualRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: visualRef.current,
                        start: "top 85%",
                        toggleActions: "restart pause resume pause",
                    },
                });
            }
        }, sectionRef); // Scope all GSAP selectors to this component

        // Clean up ScrollTrigger instances on unmount
        return () => {
            ctx.revert(); // Revert all animations and kill ScrollTriggers
        };
    }, [
        chapterTitle,
        features,
        q1Key,
        q2Key,
        onLeaveBack_q1Key,
        onLeaveBack_q2Key,
        t_chat,
        setContextualQuestions,
        images,
    ]); // Empty dependency array ensures this runs once on mount

    return (
        <section id={id} className={styles.chapterContainer} ref={sectionRef}>
            <div className={styles.chapterNarrative}>
                <h5 ref={h2Ref}>{chapterTitle}</h5>
                <p ref={pRef}>&quot;{narrative}&quot;</p>
            </div>

            <div className={styles.projectLayout}>
                <div className={styles.projectDescription} ref={descriptionRef}>
                    <h3>{projectTitle}</h3>
                    <AnimatedText
                        triggerRef={descriptionRef}
                        animDuration={0.02}
                    >
                        <p>{projectDescription}</p>
                    </AnimatedText>

                    <div className={styles.techTags}>
                        {techTags.map((tag) => (
                            <span key={tag} className={styles.techTag}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <AskAiButton
                        questionKey={t_chat(q1Key)}
                        className={styles.aiAskButton}
                        textNamespace="ProjectChapters"
                        textKey="aiButton"
                    />

                    <div
                        className={styles.projectFeaturesList}
                        ref={featuresListRef}
                    >
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <h4>{feature.title}</h4>
                                <AnimatedText
                                    triggerRef={featuresListRef}
                                    animDuration={0.05}
                                >
                                    <p>{feature.description}</p>
                                </AnimatedText>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.projectVisual} ref={visualRef}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            // Use a high priority for the first image only
                            priority={index === 0}
                            width={1700}
                            height={1000}
                            src={img.url}
                            alt={img.alt}
                            // We don't need absolute classes here if using the Grid CSS trick
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectChapter;
