import Link from "next/link";
import { HomeIcon, ContactsIcon, EditIcon, GridIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

function Nav() {
  return (
    <nav className="navContainer">
      <div className="navBg">
        <ul>
          <li>
            <Link href="/" className="home">
              <span> Home</span>
              <HomeIcon
                style={{ height: "25px", width: "25px", color: "#ffff" }}
              />
            </Link>
          </li>

          <li>
          <Link href="/about" className="about">
              <span> About</span>
              <ContactsIcon
                style={{ height: "25px", width: "25px", color: "#ffff" }}
              />
            </Link>          
          </li>
          <li>
          <Link href="/solutions" className="solutions">
              <span> Portfolio</span>
              <EditIcon
                style={{ height: "25px", width: "25px", color: "#ffff" }}
              />
            </Link>                    
            </li>
          <li>
          <Link href="/portfolio" className="portfolio">
              <span> Portfolio</span>
              <GridIcon
                style={{ height: "25px", width: "25px", color: "#ffff" }}
              />
            </Link>                    
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
