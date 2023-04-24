const topics = <div className="topics">
    <h1>Topics Coverd</h1>

    <p>The following is a list of all the topics we cover in the MDN learning area.</p>

    <a href="">Getting started with the web</a>

    <p>Provides a practical introduction to web development for complete beginners.</p>

    <a href="">HTML — Structuring the web</a>

    <p>HTML is the language that we use to structure the different parts of our content<br />
        and define what their meaning or purpose is. This topic teaches HTML in detail.</p>

    <a href="">CSS — Styling the web</a>

    <p>CSS is the language that we use to control our web content's style and layout, as <br />
        well as adding behavior like animation. This topic provides comprehensive<br />
        coverage of CSS.</p>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(topics)