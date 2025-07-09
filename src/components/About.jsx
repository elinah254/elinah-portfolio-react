// const About = () => {
  function About() {

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <p style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#666'
        }}>
          I'm a passionate frontend developer who loves writing clean code and designing elegant interfaces.
          I enjoy solving problems and bringing ideas to life on the web. When I’m not coding, I’m probably
          exploring new tools, reading design blogs, or enjoying a good cup of coffee.
        </p>
      </div>
    </section>
  );
};

export default About;
