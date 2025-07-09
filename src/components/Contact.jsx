const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
