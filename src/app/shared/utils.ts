export function randomOccuringError(): boolean {
    return Math.random() < 0.3;
}

export function getRandomErrorUrl(urls: string[]): string {
    return urls[Math.floor(Math.random() * urls.length)];
}