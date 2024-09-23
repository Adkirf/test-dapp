import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <div className="text-lg font-bold">My App</div>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/profile" className="hover:underline">Profile</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; 2023 My App. All rights reserved.
            </footer>
        </div>
    );
}

export default MainLayout;