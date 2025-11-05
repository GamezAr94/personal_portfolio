/* components/AnimatedText.tsx */

'use client';

import React, { useRef, useEffect, Children, cloneElement } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedText.module.css';

gsap.registerPlugin(ScrollTrigger);

// This is the helper function from AboutSection,
// but now it uses the local 'styles.word'
const wrapWordsInSpans = (
    node: Node,
    styles: { readonly [key: string]: string },
) => {
    if (node.nodeType === 3) {
        // TEXT_NODE
        const text = node.textContent;
        if (!text || text.trim() === '') return;

        const fragment = document.createDocumentFragment();
        const words = text.split(' ');

        words.forEach((word, index) => {
            if (word) {
                const span = document.createElement('span');
                span.className = styles.word; // Use the style from CSS module
                span.textContent = word;
                fragment.appendChild(span);
            }
            if (index < words.length - 1) {
                fragment.appendChild(document.createTextNode(' '));
            }
        });
        node.parentNode?.replaceChild(fragment, node);
    } else if (node.nodeType === 1) {
        // ELEMENT_NODE
        const children = Array.from(node.childNodes);
        children.forEach((child) => wrapWordsInSpans(child, styles));
    }
};

type AnimatedTextProps = {
    children: React.ReactNode;
    // An optional prop to use a parent element as the trigger
    triggerRef?: React.RefObject<HTMLDivElement | null>;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
    children,
    triggerRef,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!contentRef.current) return;

            // 1. Get all the direct children (<p> tags)
            const paragraphs = gsap.utils.toArray(
                contentRef.current.children,
            ) as HTMLElement[];

            // 2. Wrap all words in all children immediately
            paragraphs.forEach((p) => {
                wrapWordsInSpans(p, styles);
            });

            // 3. Create the timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    // Use the passed-in triggerRef, or default to our own div
                    trigger: triggerRef?.current || contentRef.current,
                    start: 'top 85%',
                    toggleActions: 'restart pause resume reset',
                },
            });

            // 4. Animate each child paragraph
            paragraphs.forEach((p, index) => {
                const words = p.querySelectorAll(`.${styles.word}`);

                // Animate the paragraph itself (resets opacity and transform)
                tl.to(p, {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,
                });

                // Stagger-fade in the words
                tl.to(words, {
                    opacity: 1,
                    duration: 0.1,
                    stagger: 0.025,
                    ease: 'none',
                });

                if (index < paragraphs.length - 1) {
                    tl.add('+=0.25');
                }
            });
        },
        { scope: contentRef, dependencies: [children, triggerRef] },
    );

    // We clone the children to add our initial-state CSS class
    const animatedChildren = Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            // 1. Cast the child to 'any'. This tells TypeScript
            //    to stop checking its props.
            const element = child as any;

            // 2. Now we can safely access props.className without an error
            const newClassName = `${
                (element.props && element.props.className) || ''
            } ${styles.paragraph}`;

            // 3. cloneElement will now accept the new className prop
            //    without throwing an overload error.
            return cloneElement(element, {
                className: newClassName,
            });
        }
        return child;
    });

    return <div ref={contentRef}>{animatedChildren}</div>;
};

export default AnimatedText;
