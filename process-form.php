<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate form data
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } else {
        // if data is valid
        echo "Thank you for submitting, we will get back to you soon.";
    }
} else {
    // If someone tries to access this file directly, redirect them to the contact page
    header("Location: index.html");
    exit;
}
?>
