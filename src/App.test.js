const { render } = require("@testing-library/react")
const { default: App } = require("App")

test ('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expert(linkElement).toBeInTheDocument();
});