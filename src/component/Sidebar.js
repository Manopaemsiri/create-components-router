import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_menu">
                <ul>
                    <li><Link to="/">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                    <li><Link to="/page3">Page 3</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;