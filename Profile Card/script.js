function updateProfile() {
    // Get values from input fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let isStudent = document.getElementById("student").checked;

    // Display profile information
    let profileText = "Name: " + name + "<br>Age: " + age + "<br>Student: " + (isStudent ? "Yes" : "No");
    document.getElementById("profile").innerHTML = profileText;
}