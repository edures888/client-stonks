import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">{JSON.stringify(user, null, 2)}</pre>
      </div>
      <Link to="/dashboard">
        <button type="button">Go back to Dashboard</button>
      </Link>
    </div>
  );
}
