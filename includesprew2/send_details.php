<?php
header("Access-Control-Allow-Origin: *");


//DB ON MTA ENV
$host        = "host = 192.116.98.106";
$port        = "port = 5432";
$dbname      = "dbname = postgres";
$credentials = "user = postgres password=postgres";


//VM ON OMER's COMPUTER
//$host        = "host = 192.168.21.128";
//$port        = "port = 5432";
//$dbname      = "dbname = postgres";
//$credentials = "user = postgres password=Ob13211321^^^^";

$db = pg_connect( "$host $port $dbname $credentials"  );
if(!$db) {
    echo "Error : Unable to open database\n";
} else {
    echo "Opened database successfully\n";
}

$sql="INSERT INTO project_mta.donations(user_id,fullname,amount,email,tel,credit) VALUES (3,'igor','300','Igor@gmail.com','0509422349','4580111231233')";

if($result = pg_query($sql)){
    echo "Data Added Successfully.";
}
else{
    echo "Error.";
}




//   $host        = "host = 192.168.21.128";
//   $port        = "port = 5432";
//   $dbname      = "dbname = postgres";
//   $credentials = "user = postgres password=Ob13211321^^^^";
//   $conn = pg_connect( "$host $port $dbname $credentials"  );
//
//
////create connection
////$conn=new mysqli($server_name,$user_name,$password,$database_name);
//
////check the connection
//if ($conn->connect_error){
//    die("Connection failed: ".$conn->connect_error);
//}
//
////get info from html
//$fullname=$_POST['fullname'];
//$sum=$_POST['sum'];
//$email=$_POST['email'];
//$tel=$_POST['tel'];
//$credit=$_POST['credit'];
//
////sum Validation
//if (!empty($_POST['sum'])) {
//	$sum = $_POST['sum'];
//	$sum = filter_var($sum, FILTER_VALIDATE_INT);
//
//	if ($sum === false) {
//		exit('Invalid Value - Please enter "Amount to pay" again as INT');
//	}
//}
//debugger;
////Email Validation
//if (!empty($_POST['email'])) {
//
//	$email = trim(htmlspecialchars($_POST['email']));
//	$email = filter_var($email, FILTER_VALIDATE_EMAIL);
//
//	if ($email === false) {
//		exit('Invalid Email - Please try again');
//	}
//}
//
////tel validation
//if(preg_match('/^\d{10}$/', $_POST['tel']))
//{}
//else
//{
//    exit('Invalid Value - Please enter "Telephone Number" again as INT and make sure there are up to 10 digits');
//}
//
////credit Validation
//if (!empty($_POST['credit'])) {
//
//	$credit = $_POST['credit'];
//	$credit = filter_var($credit, FILTER_VALIDATE_INT);
//
//	if ($credit === false) {
//		exit('Invalid Value - Please enter "CreditCard Number" again as INT');
//	}
//}
//
//
//
////add donation
////$sql="insert into amitml_deni_avdija(fullname,sum,email,tel,credit) values ('$fullname','$sum','$email','$tel','$credit')";
//$sql = "INSERT INTO project_mta.donations(user_id,fullname,amount,email,tel,credit) VALUES (3,'Noam','200','Noam@gmail.com','0509422339','4580111231333')";
//if($result = pg_query($sql)){
//    echo "Data Added Successfully.";
//}
//else{
//    echo "Error.";
//}
//
////#echo $sql;
////echo "Thanks for your donation!";
//
//if ($conn->query($sql)==FALSE){
//    echo "You can not make a donation - Error is: ".$conn->error;
//    exit();
//}
//

//