import React, {Component} from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
            <section className="section__subscribe u-margin-top-big">
                <div className="section__subscribe-box">
                    <object className="section__subscribe-box-icon" data="/images/letter_icon.svg" width="150" height="150"></object>
                    <div className="section__subscribe-box-text">
                    <h2>Newsletter</h2>
                    <h1>Subscribe</h1>
                    <form action="#" className="form">
                    
                        <input type="email" class="form__input" placeholder="Your e-mail" id="email"required/>
                        <div className="checkbox">
                        <input type="checkbox" class="form__checkbox-input" id="small" name="offers"required/>
                        <label for="small" class="form__checkbox-label">Send me promotional offers</label>
                        </div>
                        <button className="btn"><object data="/images/pixelated.svg" width="40" height="40"></object></button>
                        
                    </form>
                    </div>
                </div>
                
            </section>
        );
};

export default Subscribe;