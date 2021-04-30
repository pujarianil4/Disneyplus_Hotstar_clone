import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                 <div>
               
                     <Link>About Disney+ Hotstar</Link>
                     <Link>Terms Of Use</Link>
                     <Link> Privacy Policy</Link>
                     <Link> FAQ</Link>
                     <Link> Feedback</Link>
                     <Link>Careers</Link>
                 </div>
                 <div>
                     <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                 </div>
            </div>
             <div className={styles.media}>
                <p>Connect with us</p>
                <div>
                 <FacebookIcon fontSize="large" className={styles.fb}/>
                 <TwitterIcon  fontSize="large" className={styles.fb}/>
                </div>
             </div>
             <div className={styles.store}>
               <p>Disney+ Hotstar App</p>
               <img src="/store.png" alt=""/>
             </div>
        </div>
    );
};

export default Footer;