<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "hkim7963@gmail.com";
    $subject = "Contact Form Submission from $name";
    $message = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "The email has been successfully sent.";
    } else {
        echo "There was an error sending the email.";
    }
} else {
    echo "This is not a POST request.";
}
?>
