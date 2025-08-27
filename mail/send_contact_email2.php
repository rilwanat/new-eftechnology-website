<?php
try {
    // Read POST data
    $phoneNumber = $_POST['phoneNumber'] ?? '';
    $email = $_POST['email'] ?? '';
    $contactName = $_POST['contactName'] ?? '';
    $remark = $_POST['remark'] ?? '';
    
    // BCC email addresses (add your desired BCC addresses here)
    $bccEmails = "gegbuchulam@gmail.com";
    
    // Construct email body
    $emailSubject = 'New Enquiry';
    $emailBody = "New Enquiry\n\n";
    $emailBody .= "Phone Number: $phoneNumber\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Contact Name: $contactName\n";
    $emailBody .= "Remark: $remark\n";

    $to = 'rilwan.at@gmail.com'; //'info@eftechnology.net'
    $headers = "From: info@eftechnology.net\r\n";
    $headers .= "Reply-To: $email\r\n";
    // $headers .= "Bcc: $bccEmails\r\n"; // Add BCC header
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    $mailSent = mail($to, $emailSubject, $emailBody, $headers);

    echo json_encode(["success" => true, "message" => "Message Sent"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: " . $e->getMessage()]);
}
?>