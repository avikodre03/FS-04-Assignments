const bootstrap = <div className="bootstrap">
    <div className="navBar">
        <div className="navBarLeft">
            <h2>LOGO</h2>
        </div>
        <div className="navBarRight">
            <button>HOME</button>
            <p>ABOUT</p>
            <p>MENU</p>
            <p>ORDER</p>
            <p>CONTACT</p>
        </div>
    </div>
    <div className="mainContainer">
        <h1>Home</h1>
        <p>Made with ❤️ by <span>Avi k...</span></p>
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(bootstrap)