// Add the new import at the top
import Hero from '@/components/Hero';

export default function Home() {
    return (
        // We still keep the outer div for alignment
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Hero />

            {/* We keep this "fake" div so we can still test
          the Header's scroll animation 
      */}
            <div style={{ height: '2000px', background: '#eee' }}>
                <p style={{ paddingTop: '2rem' }}>
                    This is just a tall block of content.
                </p>
            </div>
        </div>
    );
}
