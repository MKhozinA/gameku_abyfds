export type Game = {
  id: number;
  judul: string;
  pembuat: string;
  angkatan: string;
  kategori: string[];
  deskripsi: string;
  thumbnail: string;
  scratch_url: string;
};

export const gamesData: Game[] = [
  {
    id: 1,
    judul: "BOAT GAME",
    pembuat: "Abyan raufa sechan",
    angkatan: "7",
    kategori: ["Adventure", "Obstacle"],
    deskripsi: "Game petualangan sederhana menghindari rintangan.",
    thumbnail:
      "https://images.unsplash.com/vector-1740583325936-16651b4656d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1069830827",
  },
  {
    id: 2,
    judul: "Fliyying cat copy copy",
    pembuat: "Adhyastha Dimas Anargya",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi:
      "Game kucing kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail:
      "https://images.unsplash.com/vector-1744811048600-a17566c517b7?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1117072721",
  },
  {
    id: 3,
    judul: "Flappy Dragon",
    pembuat: "Ahmad Hassan Al Banna",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi:
      "Game naga kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1718713546137-dc86f3cc81d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066634609",
  },
  {
    id: 4,
    judul: "kamu siapa sigma male",
    pembuat: "Azkarofif Valeska Syandana",
    angkatan: "7",
    kategori: ["Adventure", "Action"],
    deskripsi:
      "This game is about defeating the enemy and you can use power how to get power",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1726628612959-37abfcee1bc0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066640826",
  },
  {
    id: 5,
    judul: "Soccer",
    pembuat: "Fathan Ahza Haidar Rosyad",
    angkatan: "7",
    kategori: ["Sports"],
    deskripsi: "game nya boleh di coba di jamin seru",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1728668066383-5df5536e5def?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066638042",
  },
  {
    id: 6,
    judul: "Game Flappy Balloon",
    pembuat: "Haikal Mufid",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi:
      "Game Balon kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1736229110669-34f023db1a9f?q=80&w=601&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1065509601",
  },
  {
    id: 7,
    judul: "Perkenalan Scratch copy",
    pembuat: "Krishna Batistuta Yusuf",
    angkatan: "7",
    kategori: ["Storytelling"],
    deskripsi: "Game Perkenalan Scratch",
    thumbnail:
      "https://images.unsplash.com/vector-1745685857535-dfcece8b908b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1059847033",
  },
  {
    id: 8,
    judul: "ESCAPE THE MAZE",
    pembuat: "Muhammad 'Aufa Ibadurrahman",
    angkatan: "7",
    kategori: ["Adventure", "Puzzle"],
    deskripsi: "Game petualangan luar angkasa dengan rintangan menarik.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1682300804998-fec69bb449c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1220821975",
  },
  {
    id: 9,
    judul: "Zombie Apocalypse",
    pembuat: "Muhammad Azka Rifqy El-Farras",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Shooter"],
    deskripsi: "Game tembak zombie.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1711987886030-c2eb0a44b37d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1071934221",
  },
  {
    id: 10,
    judul: "Let's Survive!",
    pembuat: "Muhammad Fathan Fawwaz Mumtaza",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Shooter", "Pilihan Editor"],
    deskripsi: "Jangan Sampai Mati,Bunuh Zombie Sebanyak-banyaknya",
    thumbnail:
      "https://images.unsplash.com/vector-1744772732051-89e80c9f152f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1073744054",
  },
  {
    id: 11,
    judul: "GAME PENALTY",
    pembuat: "Muhammad Taqi Khairul Azzam",
    angkatan: "7",
    kategori: ["Sports"],
    deskripsi: "Game menendang bola ke gawang.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1719407209480-b8861d9bc529?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1071932695/",
  },
  {
    id: 12,
    judul: "Easy Maze",
    pembuat: "Quthbie Almairi Tsaqieb",
    angkatan: "7",
    kategori: ["Adventure", "Puzzle"],
    deskripsi: "Game cari jalan keluar dari labirin.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1682300807192-2bc7bf985a57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1215586092",
  },
  {
    id: 13,
    judul: "Flapy Bird",
    pembuat: "Zidan Alvaro Sulistyo",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi: "Game burung melewati pipa.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1715632451165-87c3a13df4c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1069829223",
  },
  {
    id: 14,
    judul: "Soccer Game",
    pembuat: "Aisyah Nur Hasna & Alya Fauzia Azzahra",
    angkatan: "7",
    kategori: ["Sports"],
    deskripsi: "Animasi sepak bola sederhana.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1717007595610-b18c8af7b8a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1217901159",
  },
  {
    id: 15,
    judul: "Boboiboy Game",
    pembuat: "Husna Dzakiyyah & Kayla Salsabila",
    angkatan: "7",
    kategori: ["Action", "Arcade", "Pilihan Editor"],
    deskripsi:
      "Game ini adalah game menangkap buah buah yang jatuh. Ada dua buah yang harus ditangkap,yaitu buah jeruk dan strawberry. Game ini melatih kecepatan, ketelitian, dan strategi, karena suatu saat posisi buah jatuh tidak menentu dan jika buah mengenai garis merah maka skor akan mengulang dari awal.",
    thumbnail: "/BOBOIBOY GAME thumbnail.png",
    scratch_url: "https://scratch.mit.edu/projects/1209811863",
  },
  {
    id: 16,
    judul: "Space Ship game",
    pembuat: "Brian/brilliantrmn",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Shooter"],
    deskripsi: "Game tembak batu.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1721478854284-60b9336483d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2VzaGlwfGVufDB8fDB8fHww",
    scratch_url: "https://scratch.mit.edu/projects/1075804143",
  },
  {
    id: 17,
    judul: "White Square's Generic Platformer Voyage",
    pembuat: "Faiz Abqari Nugroho",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi: "This game has eight stages. It's pretty short.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1750347148884-c64e1412e6f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1YmV8ZW58MHx8MHx8fDA%3D",
    scratch_url: "https://scratch.mit.edu/projects/1068807951",
  },
  {
    id: 18,
    judul: "Space War",
    pembuat: "Hafizh Ar Rayyan P.",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Shooter", "Pilihan Editor"],
    deskripsi:
      "Game Space War adalah game tembak-tembakan luar angkasa yang menantang pemain untuk mengalahkan musuh dan menghindari rintangan di galaksi yang penuh bahaya.",
    thumbnail: "/spacewar.png",
    scratch_url: "https://scratch.mit.edu/projects/1068175480",
  },
  {
    id: 19,
    judul: "SNAKE GAME",
    pembuat: "Abdullah Farras An Naufal",
    angkatan: "7",
    kategori: ["Arcade"],
    deskripsi:
      "Game SNAKE adalah game klasik di mana pemain mengendalikan ular yang tumbuh lebih panjang saat memakan makanan, sambil menghindari tabrakan dengan dinding dan dirinya sendiri.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1689096751455-ceb88f7a71ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25ha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1221162551",
  },
  {
    id: 20,
    judul: "Backroom 1.3",
    pembuat: "Danendra Bilfaqih Wahyudi",
    angkatan: "7",
    kategori: ["Adventure", "Horror"],
    deskripsi:
      "Game menjelajahi ruangan tak berujung dengan suasana menegangkan.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1744086369212-749430471d77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1066634193",
  },
  {
    id: 21,
    judul: "EAT the fish",
    pembuat: "Faaris Abdillah AN",
    angkatan: "7",
    kategori: ["Adventure", "Action"],
    deskripsi: "Makan ikan dan hindari ikan buntal",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1746271200126-a3d8d152a8a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1223978781/",
  },
  {
    id: 22,
    judul: "Space Adventure",
    pembuat: "Ghaisan Avicenna Fatihul Ichsan",
    angkatan: "7",
    kategori: ["Adventure", "Obstacle"],
    deskripsi: "Game petualangan luar angkasa dengan rintangan menarik.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1721294461083-da2763b727a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9ja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1078125412",
  },
  {
    id: 23,
    judul: "menangkap kucing",
    pembuat: "falin salisa",
    angkatan: "7",
    kategori: ["Action"],
    deskripsi:
      "jadi ada 2 kucing yang harus di tangkap sampe jatuh ke warna merah nanti mati",
    thumbnail:
      "https://i.pinimg.com/736x/af/dc/c1/afdcc122aa1e38f11bf4f666e4eb197c.jpg",
    scratch_url: "https://scratch.mit.edu/projects/1226256439/",
  },
  {
    id: 24,
    judul: "Eat The Fish",
    pembuat: "Devin Ahmad Dipanegara",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Pilihan Editor"],
    deskripsi: "Makan ikan dan hindari ikan buntal",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1732776846959-6b24258ecb72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1058126666",
  },
  {
    id: 25,
    judul: "survival zombie",
    pembuat: "Muhammad Hanif Ibadurrahman",
    angkatan: "7",
    kategori: ["Adventure", "Action"],
    deskripsi: "Bertahan dari zombie",
    thumbnail: "/Picture1.png",
    scratch_url: "https://scratch.mit.edu/projects/1069830827",
  },
  {
    id: 26,
    judul: "Space Schooter",
    pembuat: "Alya Syadni Nafiza",
    angkatan: "7",
    kategori: ["Adventure", "Action", "Shooter"],
    deskripsi:
      "Game Ini Bernama Space Schooter Berupa Roket Yang Menembak Rintangan Menggunakan Bola. Yang Bermanfaat Untuk Melatih Koordinasi Motorik Dan Terbiasa Berpikir Cepat.",
    thumbnail: "/cover art space schooter.jpeg",
    scratch_url: "https://scratch.mit.edu/projects/1073727268",
  },
  {
    id: 27,
    judul: "Car",
    pembuat: "Raihan Kamil Widadi",
    angkatan: "7",
    kategori: ["Sports", "Obstacle"],
    deskripsi:
      "Game menghindari mobil agar mobil yang pemain kendarai tidak tertabrak",
    thumbnail: "/car.png",
    scratch_url: "https://scratch.mit.edu/projects/1231988572/",
  },
  {
    id: 28,
    judul: "Flappy Fluttershy",
    pembuat: "Mahestri Marsya Yogasworo & Nashita Rania Farannisa",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi:
      "Flappy Fluttershy adalah permainan yang mengharuskan pemainnya mengontrol seekor pony untuk melewati celah antara dua pipa yang datang dan tidak terbatas dengan ketinggian yang berbeda-beda tanpa menabraknya. Jika pony menabrak pipa-pipa itu, game akan selesai.",
    thumbnail: "/poster game flappy fluttershy.png",
    scratch_url: "https://scratch.mit.edu/projects/1071981618",
  },
  {
    id: 29,
    judul: "jumping chick",
    pembuat: " Shakela Afiqah Wijaya",
    angkatan: "7",
    kategori: ["Adventure", "Platformer"],
    deskripsi:
      "Game ini bernama jumping chick. Game ini bertujuan untuk membuat anak-anak dapat bertahan hidup di lingkungan sekitar.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1738673152641-46444697ed98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1226256601/",
  },
  {
    id: 30,
    judul: "To The Moon",
    pembuat: "Averroes Ahmad Alfaraby",
    angkatan: "7",
    kategori: ["Obstacle"],
    deskripsi: "Game balon dengan tujuan terbang menuju bulan",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1738763027941-9190327852e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbGxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1066637873",
  },
  {
    id: 31,
    judul: "Pong Game",
    pembuat: "Muhammad Ghaisan",
    angkatan: "7",
    kategori: ["Sports", "Arcade", "Action"],
    deskripsi:
      "Game ini adalah game pong yg ditemukan pada tahun 1972 oleh atari",
    thumbnail:
      "https://user-images.githubusercontent.com/2433219/94984423-03b57400-0509-11eb-91b0-974280cec0a2.png",
    scratch_url: "https://scratch.mit.edu/projects/1075106065/",
  },
  {
    id: 32,
    judul: "Flappy Bird",
    pembuat: "Mujadida Islamiya Azzahra",
    angkatan: "7",
    kategori: ["Adventure", "Platformer", "Pilihan Editor"],
    deskripsi:
      "menceritakan tentang seekor burung yang menghindari pipa agar tidak tertabrak, game ini memerlukan ketelitian dan juga kehati-hatian.",
    thumbnail:
      "/Group 1.png",
    scratch_url: "https://scratch.mit.edu/projects/1072683796",
  },
  {
    id: 33,
    judul: "pingpong",
    pembuat: "Azra Alma Yaffa Cahyono",
    angkatan: "7",
    kategori: ["Sports", "Arcade", "Action"],
    deskripsi:
      "Game ini adalah game pingpong yang bertujuan mencetak angka sebanyak-banyaknya",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1718745383358-27c1d03149b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpbmdwb25nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    scratch_url: "https://scratch.mit.edu/projects/1077254638",
  },
  {
    id: 34,
    judul: "Mouse & Cat",
    pembuat: "Ravisya Zahrasifa Lesmana",
    angkatan: "8",
    kategori: ["Obstacle", "Action"],
    deskripsi:
      "Game ini adalah game petualangan yang mengharuskan pemain untuk mengendalikan seekor tikus agar dapat menghindari kucing yang mengejarnya.",
    thumbnail:
      "/MouseCat.jpg",
    scratch_url: "https://scratch.mit.edu/projects/1377997112",
  },
  {
    id: 35,
    judul: "ANIMASI LAGU",
    pembuat: "Najwa Wahida Salsabila",
    angkatan: "8",
    kategori: ["Music"],
    deskripsi:
      "Merupakan sebuah lagu yang diiringi dengan animasi yang menarik dan lucu, sehingga dapat menghibur penonton.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1727484894317-c0805a3c6ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww",
    scratch_url: "https://scratch.mit.edu/projects/1370587884",
  },
  {
    id: 36,
    judul: "Catch The Ball!",
    pembuat: "Meita Trisnania Almahyra",
    angkatan: "8",
    kategori: ["Action"],
    deskripsi:
      "Tingkatkan score dengan menangkap bola di mangkuk. Dapatkan banyak score dengan menangkap bola sebanyak banyaknya!",
    thumbnail:
      "/catchball.png",
    scratch_url: "https://scratch.mit.edu/projects/1370407212",
  },
  {
    id: 37,
    judul: "Shooting Baloon",
    pembuat: "Muhammad Rizqi Naufal Pohan",
    angkatan: "8",
    kategori: ["Action"],
    deskripsi:
      "Game ini adalah game menembak balon yang mengharuskan pemain untuk menembak balon agar tidak terbang ke atas.",
    thumbnail:
      "https://images.unsplash.com/vector-1751489957800-607b4a1c9cc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VufGVufDB8fDB8fHww",
    scratch_url: "https://scratch.mit.edu/projects/1384838878",
  },
  {
    id: 38,
    judul: "Cave Runner",
    pembuat: "Umar Jati",
    angkatan: "8",
    kategori: ["Obstacle", "Action"],
    deskripsi:
      "Game petualangan yang mengharuskan pemain untuk mengendalikan karakter agar dapat menghindari rintangan di dalam gua.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1725810735634-3a6bc02396f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXJuc3xlbnwwfHwwfHx8MA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1380113283/",
  },
  {
    id: 39,
    judul: "Football Penalty Game",
    pembuat: "Al Aufa Sakhiy Mywinner",
    angkatan: "8",
    kategori: ["Sports", "Pilihan Editor"],
    deskripsi:
      "Game ini adalah game menendang bola ke gawang. Pemain harus menendang bola ke gawang dan menghindari kiper untuk mencetak gol.",
    thumbnail:
      "https://images.unsplash.com/vector-1782305136924-4d4eddce8d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VlcGVyfGVufDB8fDB8fHww",
    scratch_url: "https://scratch.mit.edu/projects/1385448875",
  },
  {
    id: 40,
    judul: "Catch The Apple",
    pembuat: "Keanu Yusuf Reynaldi",
    angkatan: "8",
    kategori: ["Action"],
    deskripsi:
      "Tingkatkan score dengan menangkap apel di mangkuk. Dapatkan banyak score dengan menangkap apel sebanyak banyaknya!",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1720969885511-11c5e72e8e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fHww",
    scratch_url: "https://scratch.mit.edu/projects/1379330976",
  },
  {
    id: 41,
    judul: "Ghost Escape",
    pembuat: "Zarrin Dhia Syarafana Ridwan",
    angkatan: "8",
    kategori: ["Horror", "Action"],
    deskripsi:
      "Ghost Escape adalah game di mana pemain harus mengendalikan seorang karakter untuk melarikan diri dari hantu.",
    thumbnail:
      "https://plus.unsplash.com/premium_vector-1722605888830-ae9256fecfb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2hvc3R8ZW58MHx8MHx8fDA%3D",
    scratch_url: "https://scratch.mit.edu/projects/1370095376/",
  },
];