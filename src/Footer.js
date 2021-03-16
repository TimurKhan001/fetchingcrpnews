import React, {Component} from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer u-margin-top-big">
            <div className="footer__quotes">
            <blockquote>
                <p>Bitcoin is a very exciting development, it might lead to a world currency. I think over the next decade it will grow to become one of the most important ways to pay for things and transfer assets. – Kim Dotcom (CEO of MegaUpload)</p>
            </blockquote>
             <blockquote>
                <p>Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicable in the digital world has enormous value. – Eric Schmidt (Google CEO)</p>
            </blockquote>
              <blockquote>
                <p>I think the fact that within the bitcoin universe an algorithm replaces the functions of [the government] … is actually pretty cool. I am a big fan of Bitcoin. –  Al Gore (45th Vice President of the United States)</p>
            </blockquote>
             <blockquote>
                <p>I would be surprised if 10 years from now we're not using electronic currency in some way, now that we know a way to do it
                    that won't inevitably get dumbed down when the trusted third party gets cold feet. – Satoshi Nakamoto</p>
            </blockquote>
            </div>
            <p class="footer__copyright">Built by Tim Khananov. Copyright &copy; by Tim Khananov</p>
        </div>    
    );
};

export default Footer;