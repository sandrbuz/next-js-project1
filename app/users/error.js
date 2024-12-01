'use client';

export default function Error({ error, reset }) {
    return (
        <html>
            <head>
                <title>Error</title>
            </head>
            <body>
                <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
                    <h1>Something went wrong</h1>
                    <p>{error?.message || 'An unexpected error occurred.'}</p>
                    <button onClick={() => reset()}>Try again</button>
                </div>
            </body>
        </html>
    );
}