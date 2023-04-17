<?php
$fName = $_POST['firstName'];
$mName = $_POST['middleName'];
$lName = $_POST['lastName'];
$TRN = $_POST['TRN'];
$IDType = $_POST['idType'];
$IdFile = $_POST['idFile'];

//Database connection
$conn = new mysqli('localhost', 'root', '', 'application_form');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT INTO identity(firstName, middleName, lastName, TRN, idType, idFile)value(?,?,?,?,?,?)");
    $stmt->bind_param("sssisb",$fName,$mName,$lName,$TRN,$IDType,$IdFile);
    $stmt->execute();
    echo "registration successfully....";
    $stmt->close();
    $conn->close();

}

?>
