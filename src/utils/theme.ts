export const getRandomPosition = (elementWidth: number, elementHeight: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const x = Math.random() * (viewportWidth - elementWidth);
    const y = Math.random() * (viewportHeight - elementHeight);

    return { x, y };
};