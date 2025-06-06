<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $jmeno = $_POST["jmeno"];
  $email = $_POST["email"];
  $prijezd = $_POST["prijezd"];
  $odjezd = $_POST["odjezd"];
  echo "Děkujeme za rezervaci, $jmeno!";
} else {
  echo "Neplatný požadavek.";
}
?>
