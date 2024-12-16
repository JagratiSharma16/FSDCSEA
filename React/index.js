const parent = document.getElementById("root");
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2", {style:{color:"blue"}}, "Hello React JS");
// const li1 = React.createElement("li", {}, "Apple");
// const li2 = React.createElement("li", {}, "Orange");
// const ul = React.createElement("ul", {},li1, li2);
// const div = React.createElement("div", {style:{background:"cyan"}}, h2, ul);
// // root.render(h2);
// root.render(ul);

//JSX
const h2 = React.createElement("h2", {}, "Heading Tag");
const h21 = <h2>Hello JSX in JS</h2>;

const li1 = <li>Orange</li>
const li2 = <li>Apple</li>
const li3 = <li>Mango</li>
const li4 = <li>Banana</li>
const ul = <ul>{li1}{li2}{li3}{li4}</ul>;

const container = (
    <div>
        <div><h2>Welcome to React Application Development</h2></div>
        <div>{ul}</div>
        <div>{h21}</div>
    </div>
);

root.render(container);
