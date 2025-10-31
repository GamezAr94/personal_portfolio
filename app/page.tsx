export default function Home() {
    return (
        // This is the container for all your page content
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="min-h-screen pt-40">
                <h1
                    className="text-5xl font-bold"
                    style={{ fontSize: '3rem', fontWeight: 700 }}
                >
                    Hello, v2.
                </h1>
                <p style={{ paddingTop: '1rem' }}>
                    Scroll down to see the header animation...
                </p>
            </section>

            {/* ADD THIS "FAKE" DIV. IT'S JUST TO MAKE THE PAGE TALL. */}
            <div style={{ height: '2000px', background: '#eee' }}>
                <p style={{ paddingTop: '2rem' }}>
                    This is just a tall block of content.
                </p>
            </div>
        </div>
    );
}
