const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>HTML/CSS</h3>
            <p>Semantic HTML5 and modern CSS3 with Flexbox and Grid</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>ES6+ features, DOM manipulation, and modern JS frameworks</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
            <p>Building interactive UIs with hooks and component architecture</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing user interfaces</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach ensuring great experience on all devices</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Tools</h3>
            <p>Git, VS Code, Chrome DevTools, and modern build tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
