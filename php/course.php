<?php

$servername = "localhost";
$username = "root";
$password = "udvavisk";
$dbname = "course";

//Creating connection with database
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed :" . $conn->connect_error);
}

/*$sql = " SELECT * FROM coursedata ";
$result = $conn->query($sql);
$numRows = mysql_num_rows($sql9); 
if ($numRows < 1) {
while ($rows = mysql_fetch_array($sql9))
        
if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
       /*  echo "id : " . $row["courseid"] ;
         echo "name : " . $row["cname"] ;
         echo "fee : " . $row["cfee"] ;
         echo "location : " . $row["location"];*/

    /* }
}else{
    echo "o rows selected";
}*/


$result = $conn->query("SELECT * FROM coursedata"); // fetching data from the table where returntype is resultset 

$output = ""; //Declaring a variable
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($output != "") {$output .= ",";}
    //Converting as JSON object else we can not get the output 
    $output .= '{"courseid":"'  . $rs["courseid"]   . '",';
    $output .= '"cname":"'      . $rs["cname"]      . '",';
    $output .= '"cfee":"'       . $rs["cfee"]       . '",';
    $output .= '"location":"'   . $rs["location"]   . '"}';
}
$output ='{"records":['.$output.']}';//Here records is the array parameter 
$conn->close();//Close the resoureces is preferrable & here $conn acts as resource  

echo($output);

?>