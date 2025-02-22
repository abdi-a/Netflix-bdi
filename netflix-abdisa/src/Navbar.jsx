import "./Navabar.css" 
import { useEffect,useState} from "react"
import Logo from "./assets/logo.png"
import avatar from "./assets/profile_img.png"
import SearchIcon from '@mui/icons-material/Search';










const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


return (
  
<div className= {`nav ${show && "nav-black"}`} >
    <img className="nav-logo" src={Logo} alt="Netflix Logo" /> 



<div className="header-left">
   <ul>
   <li>Home</li>
   <li>TVShows</li>
   <li>Movies</li>
   <li>Latest</li>
   <li>MyLists</li>
   <li>Browse by Language</li>
  
   </ul>

</div>
       <img className="nav-avatar" src={avatar} alt="avatar logo" />


<div className="header-right">




<ul>
<li><SearchIcon/></li>

</ul>
  
</div>






    
</div>
);
}

export default Navbar
