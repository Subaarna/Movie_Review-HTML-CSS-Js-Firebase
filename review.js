// Import required Firebase services
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { Firestore, 
		 getFirestore, 
		 onSnapshot, 
		 query, 
		 collection, 
		 orderBy,
		 addDoc } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZYfDYXau44UcajpTiAhgLXVmI4STdySI",
    authDomain: "cs0222228092.firebaseapp.com",
    projectId: "cs0222228092",
    storageBucket: "cs0222228092.appspot.com",
    messagingSenderId: "590163852166",
    appId: "1:590163852166:web:2d296608c58fdb3d4e8a07",
    measurementId: "G-C2EN72PEWF"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);	
const db = getFirestore(app);
// Get a live data snapshot (i.e. auto-refresh) of our Reviews collection
const q = query(collection(db, "Reviews"), orderBy("movie_name"));
const unsubscribe = onSnapshot(q, (snapshot) => {


  // Empty HTML table
  $('#reviewList').empty();
	
  // Loop through snapshot data and add to HTML table
  var tableRows = '';
  snapshot.forEach((doc) => {
	tableRows += '<tr>';
	tableRows += '<td>'  + doc.data().book_name + '</td>';
	tableRows += '<td>'  + doc.data().book_rating + '/5</td>';
	tableRows += '</tr>';	  
  });
  $('#reviewList').append(tableRows);
	
  // Display review count
  $('#mainTitle').html(snapshot.size + " book reviews in the list");
});
