<?php

function jsonResponse($state, $response)
{
    header('Content-Type: application/json');

    echo json_encode([
        'result' => $state,
        'data' => $response,
    ]);
}

?>