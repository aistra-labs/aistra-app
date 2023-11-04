import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const getElementByIdAsync = id => new Promise(resolve => {
    const getElement = () => {
        const element = document.getElementById(id);
        if (element) {
            resolve(element);
        } else {
            requestAnimationFrame(getElement);
        }
    };
    getElement();
});

function ScrollToAnchor() {
    const location = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }
        async function getElement() {
            const element = await getElementByIdAsync(lastHash.current);
            if (lastHash.current && element) {
                setTimeout(() => {
                    document
                        .getElementById(lastHash.current)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    lastHash.current = '';
                }, 100);
            }
        }
        getElement();

    }, [location]);

    return null;
}

export default ScrollToAnchor;