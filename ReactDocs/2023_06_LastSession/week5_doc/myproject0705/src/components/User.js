import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function User() {
    const { username } = useParams();

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>Here's your profile:</p>
            {/* render user profile */}
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>Welcome to My Home</h1>
        </div>
    );
}

function Users() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/user/john">John's Profile</Link>
                        </li>
                        <li>
                            <Link to="/user/jane">Jane's Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/user/:username" element={<User />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Users;


