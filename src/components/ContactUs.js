import React from "react";

const ContactUs = () => {
    return (
        <div>
            <div class="row">
                <h2>Contact Us</h2>
            </div>
            <div class="row">
                <form method="post" action="#" class="contact-form">
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="name">Name</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="email">E-mail</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="email" name="email" id="email" placeholder="Your E-mail" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="email">Mobile No</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="mobile" id="mobile" placeholder="Your Mobile No." required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Drop us a line</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;