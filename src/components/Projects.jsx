const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">

          
          <div className="project-card">
            <div className="project-image">Mental health platform</div>
            <div className="project-content">
              <h3 className="project-title">Mental health platform</h3>
              <p className="project-description">
                A modern health platform that connects users with mental health resources and professionals.
              </p>
              <div className="project-tags">
                <span className="tag">HTML5</span>
                <span className="tag">SCSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Responsive</span>
              </div>
              <div className="project-links">
                <a href="https://mindcare-hub-react.vercel.app/" className="project-link">Live demo</a>
                
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Weather App</div>
            <div className="project-content">
              <h3 className="project-title">Weather Dashboard</h3>
              <p className="project-description">
                A responsive weather app that displays current weather and forecasts using OpenWeather API.
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Todo App</div>
            <div className="project-content">
              <h3 className="project-title">Task Manager</h3>
              <p className="project-description">
                A simple React todo app with task creation, editing, and local storage support.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">CSS3</span>
                <span className="tag">LocalStorage</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Projects;
