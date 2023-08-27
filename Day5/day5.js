// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiwVbf6Bcd9vPaTHZH4Grso8N-7IM8WuI",
  authDomain: "jsi03-firstproject.firebaseapp.com",
  projectId: "jsi03-firstproject",
  storageBucket: "jsi03-firstproject.appspot.com",
  messagingSenderId: "556634958566",
  appId: "1:556634958566:web:34740e796ba63652cfa927",
  measurementId: "G-W0WYT6HP8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

var rollV, nameV, genderV, addressV;
function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
}

////////////////////////////////// Hàm Create
let createBtn = document.getElementById("create");
// function checkExistRollV() {
//   let array;
//   onValue(ref(database, "students/"), function (snap) {});

//   return array;
// }

createBtn.addEventListener("click", function () {
  readFom();

  //   Lấy ra tất cả giá rollV có trong firebase
  set(ref(database, "students/" + rollV), {
    student_roll: rollV,
    student_name: nameV,
    student_gender: genderV,
    student_address: addressV,
  });

  console.log(listRollV);

  alert("Create success");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
});

///////////////////////////////// Hàm Read
let readBtn = document.getElementById("read");
readBtn.addEventListener("click", function () {
  readFom();

  onValue(ref(database, "students/" + rollV), function (snap) {
    // console.log(Object.getOwnPropertyNames(snap.val()));
    console.log("Student Name: " + snap.val().student_name);
    //
  });
});

//////////////////////////////// Hàm Update
let updateBtn = document.getElementById("update");
updateBtn.addEventListener("click", function () {
  readFom();

  update(ref(database, "students/" + rollV), {
    student_name: nameV,
    student_gender: genderV,
    student_address: addressV,
  });

  alert("Update success");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
});

/////////////////////////////////// Hàm remove
let deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function () {
  readFom();

  remove(ref(database, "students/" + rollV));
  alert("Delete Success");
});
