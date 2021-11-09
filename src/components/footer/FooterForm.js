import React  from "react";


function FooterForm() {
    return(
            
        <form action="/action_page.php">
            <label for="fname">Name</label>
            <input type="text" id="fname" name="fullname" placeholder="Your name.." />
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height :'50px'}} />
            <input type="submit" value="Submit" />
        </form>
            
    );
}
export default FooterForm;