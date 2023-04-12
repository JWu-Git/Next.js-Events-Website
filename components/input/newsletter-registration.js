import classes from './newsletter-registration.module.css';
import axios from 'axios';
import { useState } from 'react';
function NewsletterRegistration() {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  async function registrationHandler(event) {
    event.preventDefault();
    try {
      await axios.post('/api/newsletter', {
        email: email,
      });
      setSignedUp(true);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const form = (
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
  );
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      {signedUp ? (
        <h2 className={classes.green}>Successfully signed up!</h2>
      ) : (
        form
      )}
    </section>
  );
}

export default NewsletterRegistration;
