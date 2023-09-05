// import logo img
import Image from 'next/image'
import "../styles/navbar.scss"
import Link from 'next/link';

function NavBar() {
    return (
        <div className="navContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <div className="navBarLeftLogo">
                        <Link href="/">
                            <Image src="/img/VSKH_logo_menu.png" width={40} height={40} alt=''/>
                        </Link>
                    </div>
                    <div className="navBarLeftLinks">
                        <Link href="/collections">
                            <span>
                                Collections
                            </span>
                        </Link>
                        <Link href="/support">
                            <span>
                                Supports
                            </span>
                        </Link>
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