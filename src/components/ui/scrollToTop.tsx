/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

'use client'

import React from 'react';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-400 transition duration-300"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
