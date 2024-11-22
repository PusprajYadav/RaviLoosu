<?php
// Enable CORS if needed for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (
        isset($data['name'], $data['email'], $data['phone'], $data['message']) &&
        !empty($data['name']) &&
        !empty($data['email']) &&
        !empty($data['phone']) &&
        !empty($data['message'])
    ) {
        // Sanitize input
        $name = htmlspecialchars($data['name']);
        $email = htmlspecialchars($data['email']);
        $phone = htmlspecialchars($data['phone']);
        $message = htmlspecialchars($data['message']);

        // Your email address where the form submissions will be sent
        $to = "pupsraj.yadav@bluink360.com";
        $subject = "New CallBack Form Submission";

        // Email content
        $email_body = "
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong></p>
        <p>{$message}</p>
        ";

        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
        $headers .= "From: {$email}" . "\r\n";

        // Send the email
        if (mail($to, $subject, $email_body, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Your message has been sent successfully!"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Failed to send your message. Please try again later."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid input"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
