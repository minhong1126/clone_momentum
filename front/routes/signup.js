const express = require("express");
const mysql = require("mysql");

const signData = {
    id: "",
    pw: "",
    name: "",
    userId: ""
};

const signForm = document.createElement("form");
signForm.setAttribute("id='signForm'");
signForm.appendChild("input");
