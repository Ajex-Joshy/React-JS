import ReactDOM from "react-dom/client"

const elem = <span>React Element</span>
const Title = () => (
    <h1 id="title">This is Title</h1>
)

// In JSX we can run any JS expression inside {};
function Body() {
    return (
        <div id="container">
            <Title/> 
            <Title></Title>
            <h2>{10 > 20 ? 10 : 20}</h2>
            {elem}
            {Title()}
            <h3 className="body">This is body</h3>
        </div>
    )
}
// These are same
//  <Title/> 
// <Title></Title>
// {Title()}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>)

// This is known as component composition - writing one component inside another component

// also while we run any JS code in JSX it automatically sanitizes the data preventing cross site scripting
