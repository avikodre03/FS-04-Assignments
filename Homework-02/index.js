const Profile = <div className="Profile">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jhGj3lX-ZJWsHYWg8uhfe3vRRzFUaW06LQ&usqp=CAU" alt=""></img>
<h2>Alexandra Caulea</h2>
<p>I enjoy drinking a cup of coffee every day</p>
<div className="data">
    <div className="post">
        <span>172</span>
        <p>POSTS</p>
    </div>
    <div className="post">
    <span>47</span>
        <p>FOLLOWERS</p>
    </div>
    <div className="post">
    <span>172</span>
        <p>FOLLOWING</p>
    </div>
</div>
    <div className="button">
        <button style={{ backgroundColor:"rgb(110, 110, 246)"}}>FOLLOW</button>
        <button style={{ backgroundColor:"palevioletred"}}>MESSAGE</button>
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Profile)