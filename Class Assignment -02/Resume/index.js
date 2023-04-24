const Resume = <div className="Resume">
    <div className="headercontainer">
        <h1>Avinash Kodre</h1>
        <p> Software Developer, Educator at Geekster</p>

        <div><a href="https://www.linkedin.com/in/avinash-kodre/">Linkedin</a> <a href="https://github.com/avikodre03">Github</a></div>
        <br />
        <hr />
    </div>
    <div className="experience">
        <h2>Experience</h2>
        <h3>Software Developer at Amazon</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores reprehenderit voluptate ad voluptas rem atque, commodi culpa delectus debitis repudiandae nemo quae, eum velit quis aut expedita nesciunt eaque dolores quaerat corrupti magni veniam ipsam odit aperiam. Error recusandae, labore vel consequuntur aspernatur earum inventore deserunt ex quaerat odit porro expedita ab id consectetur fugiat quasi suscipit.</p>
        <hr />
        <h3>Educator  at Geekster</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores reprehenderit voluptate ad voluptas rem atque, commodi culpa delectus debitis repudiandae nemo quae, eum velit quis aut expedita nesciunt eaque dolores quaerat corrupti magni veniam ipsam odit aperiam. Accusantium nam officia ut quaerat? Dolorum corrupti optio deserunt fuga voluptatibus, repudiandae dolores? Error recusandae, labore vel consequuntur aspernatur earum inventore deserunt ex quaerat odit porro expedita ab id consectetur fugiat quasi suscipit.</p>
        <hr />
    </div>
    <div className="skills">
        <h2>Skills</h2>
        <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>React</li>
            <li>SQl</li>
            <li>Github</li>
        </ul>

        <hr />
    </div>
    <div className="hobbies">
        <h2>Hobbies</h2>
        <ol>
            <li>Football</li>
            <li>Dancing</li>
            <li>Reading Books</li>
            <li>Learning New Technology</li>

        </ol>
        <hr />
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Resume)