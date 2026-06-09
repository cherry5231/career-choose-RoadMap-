import "./App.css";

function Learn(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Skills: {props.skills_required}</p>
    </div>
  );
}

function App2() {
  return (
    <>
    <div className="container"><h1>CS ROADMAP</h1>

      <h3>
        Below are the CS roles and skills required. Focus on at least two roles
        and practice DSA consistently.
      </h3>

      <Learn
        name="Frontend Development"
        skills_required="HTML, CSS, JavaScript, TypeScript, React, Angular, UI/UX"
      />
      <br />

      <Learn
        name="Backend Development"
        skills_required="Python, Django, Flask, Java, APIs, DBMS"
      />
      <br />

      <Learn
        name="Full Stack Development"
        skills_required="Frontend + Backend Development"
      />
      <br />

      <Learn
        name="Cybersecurity"
        skills_required="Networking, Linux, Ethical Hacking, Penetration Testing, Cryptography"
      />
      <br />

      <Learn
        name="Data Science"
        skills_required="Python, Statistics, SQL, Pandas, NumPy, Machine Learning"
      />
      <br />
      </div>
    </>
  );
}
export default App2;












