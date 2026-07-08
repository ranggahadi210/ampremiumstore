// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0Nq1RsK8bnbipIqzj78v3Ta6ZxqyJwoE",
  authDomain: "rangga-store.firebaseapp.com",
  databaseURL: "https://rangga-store-default-rtdb.firebaseio.com",
  projectId: "rangga-store",
  storageBucket: "rangga-store.firebasestorage.app",
  messagingSenderId: "16860864815",
  appId: "1:16860864815:web:6990d09b91e14f5c0b41da"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref("tes").set({
    status: "Firebase Terhubung",
    waktu: new Date().toLocaleString()
})
.then(() => {
    console.log("Berhasil terhubung");
})
.catch((error) => {
    console.log(error);
});
