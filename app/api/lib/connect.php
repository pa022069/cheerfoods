<?php

$servername = "148.66.138.111";
$username = "jeffrey";
$password = "jedb6661";
$dbname = "test_database";

$conn;
$stmt;
$last_id;

function setConn()
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // // insert Data
    // $stmt = $conn->prepare("INSERT INTO user (name, phone, email, gender, brand)
    //             VALUES (:name, :phone, :email, :gender, :brand)");
    // $stmt->bindParam(':name', $this->name);
    // $stmt->bindParam(':phone', $this->phone);
    // $stmt->bindParam(':email', $this->email);
    // $tstmt->bindParam(':gender', $this->gender);
    // $stmt->bindParam(':brand', $this->brand);

    // // insert a row
    // $stmt->execute();

    // $last_id = $conn->lastInsertId();
}
