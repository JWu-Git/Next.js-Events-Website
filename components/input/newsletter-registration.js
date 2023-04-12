import classes from './newsletter-registration.module.css';
import axios from 'axios';
import { useState } from 'react';
function NewsletterRegistration() {
  const [email, setEmail] = useState('');

  async function registrationHandler(event) {
    event.preventDefault();
    try {
      await axios.post('/api/newsletter', {
        email: email,
      });
      setEmail('Success!');
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
