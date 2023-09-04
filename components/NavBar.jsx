// import logo img
import Image from 'next/image'
import "../styles/navbar.scss"

function NavBar() {
    return (
        <div className="navContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <div className="navBarLeftLogo">
                        <a href="">
                            <Image src="/img/VSKH_logo_menu.png" width={40} height={40}/>
                        </a>
                    </div>
                    <div className="navBarLeftLinks">
                        <a href="#">
                            <span>
                                Drops
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                Supports
                            </span>
                        </a>
                    </div>
                </div>
                <div className="navBarRight">
                    <div className="account">
                        <div className="signInContainer">
                            <button className="signInBtn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;