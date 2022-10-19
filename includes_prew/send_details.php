<?php
$server_name="localhost";
$user_name="amitml_root";
$password="iG_W7XXnV!8U";
$database_name="amitml_deni_avdija";

//create connection
$conn=new mysqli($server_name,$user_name,$password,$database_name);

//check the connection
if ($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

//get info from html
$fullname=$_POST['fullname'];
$sum=$_POST['sum'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$credit=$_POST['credit'];

//sum Validation
if (!empty($_POST['sum'])) {
	$sum = $_POST['sum'];
	$sum = filter_var($sum, FILTER_VALIDATE_INT);

	if ($sum === false) {
		exit('Invalid Value - Please enter "Amount to pay" again as INT');
	}
}

//Email Validation
if (!empty($_POST['email'])) {

	$email = trim(htmlspecialchars($_POST['email']));
	$email = filter_var($email, FILTER_VALIDATE_EMAIL);

	if ($email === false) {
		exit('Invalid Email - Please try again');
	}
}

//tel validation
if(preg_match('/^\d{10}$/', $_POST['tel']))
{} 
else 
{
    exit('Invalid Value - Please enter "Telephone Number" again as INT and make sure there are up to 10 digits');
}

//credit Validation
if (!empty($_POST['credit'])) {
	
	$credit = $_POST['credit'];
	$credit = filter_var($credit, FILTER_VALIDATE_INT);

	if ($credit === false) {
		exit('Invalid Value - Please enter "CreditCard Number" again as INT');
	}
}



//add donation
$sql="insert into amitml_deni_avdija(fullname,sum,email,tel,credit) values ('$fullname','$sum','$email','$tel','$credit')"; 


#echo $sql;
echo "Thanks for your donation!";

if ($conn->query($sql)==FALSE){
    echo "You can not make a donation - Error is: ".$conn->error;
    exit();
}

?>