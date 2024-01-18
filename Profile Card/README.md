This project is an interactive profile card implemented using HTML, CSS, and JavaScript. Its purpose is to collect user input for their name, age, and student status, and dynamically display this information when the user clicks the "Next" button. The design includes text input fields for the name and age, checkboxes for indicating student or non-student status, and a button to trigger the profile update.

Here's how the project works:

1. **HTML Structure:**
   - The HTML file contains a `<div>` with the class "container" that wraps the input elements.
   - Input elements include a text field for the name, a number field for the age, checkboxes for student and non-student options, and a button to trigger the profile update.
   - A `<p>` element with the ID "profile" is included to display the user's profile dynamically.

2. **CSS Styling:**
   - The CSS styles include a flex container to center the content both horizontally and vertically.
   - Additional styles are applied to the container to ensure it is centered and has a text-align set to center for better visual presentation.

3. **JavaScript Functionality:**
   - The JavaScript code defines a function called `updateProfile()` that is triggered when the "Next" button is clicked.
   - Inside this function, it retrieves the values entered by the user for name, age, and checks whether the student checkbox is selected.
   - The function then constructs a string with the collected information and updates the content of the `<p>` element with the ID "profile" to display the user's profile dynamically.

4. **Learnings:**
   - The project helps you practice basic HTML form elements (input, label) and structure.
   - It reinforces understanding of JavaScript functions, DOM manipulation, and event handling.
   - CSS styling is used to center the container both horizontally and vertically, enhancing your layout and design skills.
   - The combination of HTML, CSS, and JavaScript allows you to create a simple yet interactive user interface for collecting and displaying information.

By working on this project, you gain practical experience in integrating user input, processing it with JavaScript, and updating the UI dynamically. Additionally, you get hands-on experience with basic styling to enhance the visual appeal of the project. This serves as a foundation for more complex web development projects and reinforces your understanding of fundamental web technologies.
