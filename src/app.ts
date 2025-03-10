class App {
    constructor() {
        this.init();
    }

    private log(message: string): void {
        if (window.__DEBUG__) {
            console.log(message);
        }
    }

    init() {
        this.log('App initialized');
    }

    start() {
        this.log('App started');

        const appContainer = document.getElementById('app');
        if (appContainer) {
            // Clear existing content
            appContainer.innerHTML = '';

            // Create elements dynamically
            const title = this.createElement('h1', 'Welcome to My App');
            const paragraph = this.createElement(
                'p',
                'This is dynamically rendered using TypeScript.',
            );
            const button = this.createElement('button', 'Click Me');

            // Add event listener
            button.addEventListener('click', () => {
                alert('Button clicked!');
            });

            // Append elements to the container
            appContainer.append(title, paragraph, button);
        }
    }

    createElement(tag: string, text: string): HTMLElement {
        const element = document.createElement(tag);
        element.textContent = text;
        return element;
    }
}

// Set debug mode dynamically
window.__DEBUG__ = window.location.hostname === 'localhost';

// Ensure the script runs after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.start();
});