import React from 'react'

class Contact extends React.PureComponent {
    constructor() {
        super();

    }

    render() {
        return (
            <section class="panel color4-alt">
                <div class="intro color4">
                    <h2 class="major">Contact</h2>
                    <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                </div>
                <div class="inner columns divided">
                    <div class="span-3-25">
                        <form method="post" action="#">
                            <div class="fields">
                                <div class="field half">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div class="field half">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div class="field">
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" rows="4"></textarea>
                                </div>
                            </div>
                            <ul class="actions">
                                <li><input type="submit" value="Send Message" class="button primary" /></li>
                            </ul>
                        </form>
                    </div>
                    <div class="span-1-5">
                        <ul class="contact-icons color1">
                            <li class="icon brands fa-twitter"><a href="#">@untitled-tld</a></li>
                            <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled</a></li>
                            <li class="icon brands fa-snapchat-ghost"><a href="#">@untitled-tld</a></li>
                            <li class="icon brands fa-instagram"><a href="#">@untitled-tld</a></li>
                            <li class="icon brands fa-medium-m"><a href="#">medium.com/untitled</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;