<?php

include './lib/valid.php';
include './lib/response.php';

class AddData
{
    // db 變數宣告
    public $servername;
    public $username;
    public $password;
    public $dbname;

    public $conn;
    public $stmt;
    public $last_id;

    // input 變數
    public $name;
    public $phone;
    public $address;
    public $email;

    // 回傳宣告
    public $response;

    public $checkArray = [];

    public $data;
    public $file;
    public $success;

    public function __construct()
    {
        // db 資料
        $this->servername = "127.0.0.1";
        $this->username = "cheerfoods";
        $this->password = "2020cheerfoods0902";
        $this->dbname = "cheerfoods";

        // input 資料
        $this->name = filter_input(INPUT_POST, 'name');
        $this->phone = filter_input(INPUT_POST, 'phone');
        $this->address = filter_input(INPUT_POST, 'address');
        $this->email = filter_input(INPUT_POST, 'email');
    }

    // 資料庫
    public function database()
    {
        try {

            $this->validate();

            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname;charset=utf8", $this->username, $this->password);

            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Search Data
            $this->stmt = $this->conn->prepare("SELECT * FROM userData where phone=:phone");
            $this->stmt->bindParam(':phone', $this->phone);
            $this->stmt->execute();
            $this->rows = $this->stmt->fetch(PDO::FETCH_ASSOC);

            if ($this->rows == false) {
                // insert Data
                $this->stmt = $this->conn->prepare("INSERT INTO userData (name, phone, email, address)
                VALUES (:name, :phone, :email, :address)");
                $this->stmt->bindParam(':name', $this->name);
                $this->stmt->bindParam(':phone', $this->phone);
                $this->stmt->bindParam(':email', $this->email);
                $this->stmt->bindParam(':address', $this->address);

                $this->stmt->execute();
                // insert a row

                $this->last_id = $this->conn->lastInsertId();

                $this->response = [
                    'status' => true,
                    'ID' => $this->last_id,
                    'name' => $this->name,
                    'phone' => $this->phone,
                    'email' => $this->email,
                    'address' => $this->address,
                ];
                jsonResponse("OK", $this->response);
            } else {
                $this->response = [
                    'status' => false,
                ];
                jsonResponse("ERROR", $this->response);
            }
        } catch (PDOException $e) {
            jsonResponse("ERROR", $this->checkArray);
            echo "Connection failed: " . $e->getMessage();
        }
        $this->conn = null;
    }

    // 偵測是否為空值
    public function validate()
    {
        try {
            if (empty($this->name)) {
                array_push($this->checkArray, "Name Not Found!");
            }

            // if (empty($this->phone)) {
            //     array_push($this->checkArray, "Phone Not Found!");
            // }

            if (empty($this->phone)) {
                array_push($this->checkArray, "Phone Not Found!");
            } elseif (!isPhone($this->phone)) {
                array_push($this->checkArray, "Phone Error!");
            }

            if (empty($this->email)) {
                array_push($this->checkArray, "Email Not Found!");
            } elseif (!isEmail($this->email)) {
                array_push($this->checkArray, "Email Error!");
            }

            if (empty($this->address)) {
                array_push($this->checkArray, "Address Not Found!");
            }

            if (count($this->checkArray) > 0) {
                throw new Exception();
            }
        } catch (Exception $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function init()
    {
        $this->database();
    }
}

$data = new AddData();
$data->init();
