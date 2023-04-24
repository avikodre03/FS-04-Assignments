const Profile = <div className="Profile">
    <div className="Profileimg">
        <div className="Profilepls">
            <button>+</button>
            <div><div className="dots"></div><div className="dots"></div><div className="dots"></div></div>
        </div>
    </div>
    <div className="ProfileDetails">
        <h2>Dima Blover</h2>
        <p>UI/UX Designer</p>
        <div className="data">
            <div className="post">
                <span>26</span>
                <p>Shoot</p>
            </div>
            <div className="post">
                <span>94</span>
                <p>Following</p>
            </div>
            <div className="post">
                <span>139</span>
                <p>Followers</p>
            </div>
        </div>
    </div>

</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Profile)