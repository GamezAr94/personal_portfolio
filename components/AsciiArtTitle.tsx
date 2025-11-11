// components/AsciiArtTitle.tsx
import React from 'react';
import styles from './AsciiArtTitle.module.css'; // Use the same CSS module

interface AsciiArtTitleProps {
    title: string;
}

const AsciiArtTitle: React.FC<AsciiArtTitleProps> = ({ title }) => {
    // You'll need to generate ASCII art for your chosen title.
    // For 'ARTIC', you could use an online ASCII art generator.
    // Example for "ARTIC" (you'll need to fine-tune this for your desired font/style):
    const articAscii = `
  .d8888b.  8888888b.  8888888888 .d8888b.  8888888888 
 d88P  Y88b 888   Y88b 888       d88P  Y88b 888        
 888    888 888    888 888       888    888 888        
 888        888   d88P 8888888   888        8888888    
 888        8888888P"  888       888        888        
 888    888 888 T88b   888       888    888 888        
 Y88b  d88P 888  T88b  888       Y88b  d88P 888        
  "Y8888P"  888   T88b 8888888888 "Y8888P"  8888888888 
`;
    const arturoAscii = `
 ███         █████████   ███████████   ███████████ █████  █████ ███████████      ███████   
▒▒▒███      ███▒▒▒▒▒███ ▒▒███▒▒▒▒▒███ ▒█▒▒▒███▒▒▒█▒▒███  ▒▒███ ▒▒███▒▒▒▒▒███   ███▒▒▒▒▒███ 
  ▒▒▒███   ▒███    ▒███  ▒███    ▒███ ▒   ▒███  ▒  ▒███   ▒███  ▒███    ▒███  ███     ▒▒███
    ▒▒▒███ ▒███████████  ▒██████████      ▒███     ▒███   ▒███  ▒██████████  ▒███      ▒███
     ███▒  ▒███▒▒▒▒▒███  ▒███▒▒▒▒▒███     ▒███     ▒███   ▒███  ▒███▒▒▒▒▒███ ▒███      ▒███
   ███▒    ▒███    ▒███  ▒███    ▒███     ▒███     ▒███   ▒███  ▒███    ▒███ ▒▒███     ███ 
 ███▒      █████   █████ █████   █████    █████    ▒▒████████   █████   █████ ▒▒▒███████▒  
▒▒▒       ▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒   ▒▒▒▒▒    ▒▒▒▒▒      ▒▒▒▒▒▒▒▒   ▒▒▒▒▒   ▒▒▒▒▒    ▒▒▒▒▒▒▒    
`;

    // A simpler "ARTIC" ASCII for demonstration if the above is too complex:
    const simpleArticAscii = `
   /\\_/\\  ______  ____ ____ _____ 
  /  _  \\ |  __  \\|  _ \\ ___|  _  |
 /  /_\\  \\| |__)  | |_) |__ | | | |
/  _____  |  ___ /|  _ < __|| | | |
\\  \\/  / | |     | |_) |  __| |_| |
 \\__/\\_/ |_|     |____/____|_____|
`;

    return (
        <pre className={styles.asciiArt} data-text={title}>
            {arturoAscii} {/* Or articAscii if you prefer the longer one */}
        </pre>
    );
};

export default AsciiArtTitle;
