const bootstrap = <div className="bootstrap">
    <div className="navBar">
        <div className="navBarLeft">
            <h2>Koding Made Simple</h2>
        </div>
        <div className="navBarRight">
            <p>Bootstrap</p>
            <p>Themes</p>
            <p>Blogs</p>
        </div>
    </div>
    <div className="mainContainer">
        <h1>Customize BootStrap NavBar</h1>
        <p>Easy way to change navbar background, text and hover link color in bootstrap...</p>
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(bootstrap)