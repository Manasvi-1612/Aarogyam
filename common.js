// same footer content for all the pages

var footer =
    `<div id="footer">
    <div class="left-assign">
        <div class="foot-heading">
            <h1>Aarogyam</h1>
        </div>
        <div id="details">
            <p>78946554267</p>
            <a>psrathore13101@gmail.com</a>
        </div>
    </div>


    <div class="mid-assign">
        <div class="foot-heading">
            <h1>Contact Us</h1>
        </div>
        <div id="contact-form">
            <div class="con-container">
                <div class="con-box">
                    <form id="form" onsubmit="SendEmail();reset(); return false;">
                        Name : <input type="text" name="name" id="name" placeholder="Enter your name"><br>

                        Email : <input type="email" name="email" id="email" placeholder="Enter your email"><br>
                        Message:
                        <textarea name="msg" id="message" cols="30" rows="5"
                            placeholder="Enter the message"></textarea>
                        <button type="submit" class="con-btn">Send</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="right-assign">
        <div class="foot-heading">
            <h1>Follow Us On</h1>
        </div>
        <div id="socials">
            <a href="https://instagram.com"><img class="social" src="insta.png" alt="Insta"></a>
            <a href="https://twitter.com"><img class="social" src="twitter.png" alt="Twitter"></a>
            <a href="https://linkedin.com"><img class="social" src="linkedin.png" alt="Linkedin"></a>
        </div>
        <div id="copyright">
            <p>Copyright &copy; Aarogyam 2023 all rights reserved</p>
        </div>
    </div>
</div>`

// inserting footer at the last of body
document.body.insertAdjacentHTML("beforeend", footer);