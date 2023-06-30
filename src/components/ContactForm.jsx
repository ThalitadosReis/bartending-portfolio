import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { name, phone, email, subject, message });
    // Reset the form
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <div className="container d-flex align-items-center justify-content-center flex-wrap gap-5">
        <div className="form-container">
          <h2>Ready, Set, Contact</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="form-control mt-3"
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="form-control mt-3"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="form-control mt-3"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <select
                className="form-control mt-3"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Select Option</option>
                <option value="workshop">Workshop</option>
                <option value="private-event">Private Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <textarea
                className="form-control mt-3"
                placeholder="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark mt-3">
              Submit
            </button>
          </form>
        </div>
        <img
          src="https://images.unsplash.com/photo-1604321115296-f4b73745c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
