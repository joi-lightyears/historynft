import "../styles/footer.scss";
import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="left">
                <a href="">
                    <div >
                        <div className="logo">
                            <img src="/img/VSKH_logo_menu.png" alt="" />
                        </div>
                    </div>
                </a>
                <ul>
                    <li>Collections</li>
                    <li>FAQ</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li>Nguyễn Thành Đạt</li>
                    <li>Anh</li>
                    <li>Anh</li>
                    <li>Anh</li>
                    <li>Anh</li>
                </ul>
                <ul>
                    <li>Nguyễn Thành Đạt</li>
                    <li>Anh</li>
                    <li>Anh</li>
                    <li>Anh</li>
                    <li>Anh</li>
                </ul>
            </div>
            <div className="right">
                <div className="scocialIcon">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-3 h-3 hover:text-gray-200"><path fill="currentColor" d="M17.157 6.485c.011.152.011.304.011.457C17.168 11.613 13.453 17 6.661 17v-.003A10.799 10.799 0 011 15.412a7.63 7.63 0 005.465-1.465c-1.58-.028-2.966-1.014-3.45-2.454a3.842 3.842 0 001.668-.061C2.96 11.099 1.72 9.65 1.72 7.967v-.045a3.796 3.796 0 001.676.443C1.774 7.327 1.274 5.26 2.253 3.645c1.875 2.208 4.642 3.55 7.611 3.693-.297-1.228.11-2.514 1.069-3.377 1.487-1.339 3.826-1.27 5.225.153a7.615 7.615 0 002.345-.858 3.58 3.58 0 01-1.624 1.955A7.603 7.603 0 0019 4.654a7.332 7.332 0 01-1.843 1.831z"></path></svg>
                    </a>
                    <a href="">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 hover:text-gray-200"><path d="M11.0001 2.88392C13.6435 2.88392 13.9566 2.89398 15.0005 2.94161C15.9657 2.98566 16.4899 3.14694 16.8388 3.28248C17.3009 3.46207 17.6307 3.67664 17.9771 4.02305C18.3236 4.36947 18.5381 4.69929 18.7177 5.16136C18.8533 5.51025 19.0145 6.03445 19.0586 6.99965C19.1062 8.0436 19.1163 8.35669 19.1163 11.0001C19.1163 13.6435 19.1062 13.9566 19.0586 15.0005C19.0145 15.9658 18.8533 16.49 18.7177 16.8389C18.5381 17.3009 18.3236 17.6308 17.9771 17.9772C17.6307 18.3236 17.3009 18.5382 16.8388 18.7177C16.4899 18.8533 15.9657 19.0146 15.0005 19.0586C13.9568 19.1063 13.6437 19.1163 11.0001 19.1163C8.35649 19.1163 8.04341 19.1063 6.99965 19.0586C6.03441 19.0146 5.51021 18.8533 5.16136 18.7177C4.69925 18.5382 4.36943 18.3236 4.02301 17.9772C3.6766 17.6308 3.46203 17.3009 3.28248 16.8389C3.1469 16.49 2.98562 15.9658 2.94157 15.0006C2.89394 13.9566 2.88388 13.6435 2.88388 11.0001C2.88388 8.35669 2.89394 8.0436 2.94157 6.99969C2.98562 6.03445 3.1469 5.51025 3.28248 5.16136C3.46203 4.69929 3.6766 4.36947 4.02301 4.02305C4.36943 3.67664 4.69925 3.46207 5.16136 3.28248C5.51021 3.14694 6.03441 2.98566 6.99961 2.94161C8.04356 2.89398 8.35665 2.88392 11.0001 2.88392ZM11.0001 1.1001C8.31138 1.1001 7.97428 1.11149 6.91834 1.15967C5.86456 1.20777 5.14493 1.37511 4.51518 1.61985C3.86417 1.87286 3.31207 2.21137 2.7617 2.76174C2.21133 3.31211 1.87282 3.86421 1.61982 4.51522C1.37507 5.14497 1.20774 5.8646 1.15963 6.91838C1.11145 7.97428 1.1001 8.31142 1.1001 11.0001C1.1001 13.6888 1.11145 14.026 1.15963 15.0819C1.20774 16.1356 1.37507 16.8553 1.61982 17.485C1.87282 18.136 2.21133 18.6881 2.7617 19.2385C3.31207 19.7889 3.86417 20.1274 4.51518 20.3804C5.14493 20.6251 5.86456 20.7925 6.91834 20.8406C7.97428 20.8887 8.31138 20.9001 11.0001 20.9001C13.6888 20.9001 14.0259 20.8887 15.0818 20.8406C16.1356 20.7925 16.8552 20.6251 17.485 20.3804C18.136 20.1274 18.6881 19.7889 19.2385 19.2385C19.7888 18.6881 20.1273 18.136 20.3803 17.485C20.6251 16.8553 20.7924 16.1356 20.8405 15.0819C20.8887 14.026 20.9001 13.6888 20.9001 11.0001C20.9001 8.31142 20.8887 7.97428 20.8405 6.91838C20.7924 5.8646 20.6251 5.14497 20.3803 4.51522C20.1273 3.86421 19.7888 3.31211 19.2385 2.76174C18.6881 2.21137 18.136 1.87286 17.485 1.61985C16.8552 1.37511 16.1356 1.20777 15.0818 1.15967C14.0259 1.11149 13.6888 1.1001 11.0001 1.1001ZM11.0001 5.91632C8.19239 5.91632 5.91628 8.19243 5.91628 11.0001C5.91628 13.8078 8.19239 16.0839 11.0001 16.0839C13.8078 16.0839 16.0839 13.8078 16.0839 11.0001C16.0839 8.19243 13.8078 5.91632 11.0001 5.91632ZM11.0001 14.3001C9.17755 14.3001 7.70006 12.8226 7.70006 11.0001C7.70006 9.17759 9.17755 7.7001 11.0001 7.7001C12.8226 7.7001 14.3001 9.17759 14.3001 11.0001C14.3001 12.8226 12.8226 14.3001 11.0001 14.3001ZM17.4727 5.71546C17.4727 6.37159 16.9409 6.90349 16.2847 6.90349C15.6286 6.90349 15.0967 6.37159 15.0967 5.71546C15.0967 5.05934 15.6286 4.52748 16.2847 4.52748C16.9409 4.52748 17.4727 5.05934 17.4727 5.71546Z" fill="currentColor"></path></svg>
                    </a>
                    <a href="">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 hover:text-gray-200"><path d="M16.93 3.258A16.55 16.55 0 0 0 12.86 2a.062.062 0 0 0-.066.03c-.175.312-.37.718-.506 1.037a15.297 15.297 0 0 0-4.573 0A10.464 10.464 0 0 0 7.2 2.032.064.064 0 0 0 7.135 2a16.503 16.503 0 0 0-4.07 1.257.058.058 0 0 0-.028.023C.445 7.136-.266 10.896.083 14.61a.069.069 0 0 0 .026.046 16.616 16.616 0 0 0 4.994 2.513.065.065 0 0 0 .07-.023 11.79 11.79 0 0 0 1.022-1.654.063.063 0 0 0-.035-.088 10.954 10.954 0 0 1-1.56-.74.064.064 0 0 1-.006-.106 8.6 8.6 0 0 0 .31-.242.062.062 0 0 1 .064-.008c3.273 1.487 6.817 1.487 10.051 0a.062.062 0 0 1 .066.008c.1.082.205.164.31.242a.064.064 0 0 1-.005.106c-.499.29-1.017.535-1.561.74a.063.063 0 0 0-.034.088c.3.579.643 1.13 1.02 1.653a.064.064 0 0 0 .07.024 16.56 16.56 0 0 0 5.003-2.513.064.064 0 0 0 .026-.046c.417-4.293-.699-8.023-2.957-11.33a.05.05 0 0 0-.026-.023ZM6.553 12.345c-.946 0-1.724-.929-1.724-2.07 0-1.14.763-2.068 1.724-2.068.968 0 1.739.937 1.724 2.069 0 1.14-.764 2.069-1.724 2.069Zm6.896 0c-.945 0-1.724-.929-1.724-2.07 0-1.14.764-2.068 1.724-2.068.968 0 1.74.937 1.724 2.069 0 1.14-.756 2.069-1.724 2.069Z" fill="currentColor"></path></svg>
                    </a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                
            </div>
        </footer>
    );
}

export default Footer;