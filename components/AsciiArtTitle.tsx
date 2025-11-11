// components/AsciiArtTitle.tsx
import React from 'react';
import styles from './AsciiArtTitle.module.css'; // Use the same CSS module

interface AsciiArtTitleProps {
    title: string;
}

const AsciiArtTitle: React.FC<AsciiArtTitleProps> = ({ title }) => {
    const arturoAscii = `███         █████████   ███████████   ███████████ █████  █████ ███████████      ███████   
▒▒▒███      ███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███ ▒█▒▒▒███▒▒▒█▒▒███  ▒▒███ ▒▒███▒▒▒▒▒███   ███▒▒▒▒▒███ 
  ▒▒▒███   ▒███    ▒███  ▒███    ▒███ ▒   ▒███  ▒  ▒███   ▒███  ▒███    ▒███  ███     ▒▒███
    ▒▒▒███ ▒███████████  ▒██████████      ▒███     ▒███   ▒███  ▒██████████  ▒███      ▒███
     ███▒  ▒███▒▒▒▒▒███  ▒███▒▒▒▒▒███     ▒███     ▒███   ▒███  ▒███▒▒▒▒▒███ ▒███      ▒███
   ███▒    ▒███    ▒███  ▒███    ▒███     ▒███     ▒███   ▒███  ▒███    ▒███ ▒▒███     ███ 
 ███▒      █████   █████ █████   █████    █████    ▒▒████████   █████   █████ ▒▒▒███████▒  
▒▒▒       ▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒   ▒▒▒▒▒    ▒▒▒▒▒      ▒▒▒▒▒▒▒▒   ▒▒▒▒▒   ▒▒▒▒▒    ▒▒▒▒▒▒▒`;

    return (
        <pre className={styles.asciiArt} data-text={title}>
            {arturoAscii} {/* Or articAscii if you prefer the longer one */}
        </pre>
    );
};

export default AsciiArtTitle;
