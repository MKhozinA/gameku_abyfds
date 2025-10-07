"use client";
import React, { useState, useMemo } from 'react';
import { Search, Play, X, Filter, Moon, Sun, Trophy, Users, Gamepad2 } from 'lucide-react';

// Mock data game
const gamesData = [
  {
    id: 1,
    judul: "BOAT GAME",
    pembuat: "Abyan raufa sechan",
    kelas: "8 Putra",
    deskripsi: "Game petualangan sederhana menghindari rintangan.",
    thumbnail: "https://images.unsplash.com/vector-1740583325936-16651b4656d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1069830827"
  },
  {
    id: 2,
    judul: "Fliyying cat copy copy",
    pembuat: "Adhyastha Dimas Anargya",
    kelas: "8 Putra",
    deskripsi: "Game kucing kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail: "https://images.unsplash.com/vector-1744811048600-a17566c517b7?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1117072721"
  },
  {
    id: 3,
    judul: "Flappy Dragon",
    pembuat: "Ahmad Hassan Al Banna",
    kelas: "8 Putra",
    deskripsi: "Game naga kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail: "https://plus.unsplash.com/premium_vector-1718713546137-dc86f3cc81d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066634609"
  },
  {
    id: 4,
    judul: "kamu siapa sigma male",
    pembuat: "Azkarofif Valeska Syandana",
    kelas: "8 Putra",
    deskripsi: "This game is about defeating the enemy and you can use power how to get power",
    thumbnail: "https://plus.unsplash.com/premium_vector-1726628612959-37abfcee1bc0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066640826"
  },
  {
    id: 5,
    judul: "Untitled-5",
    pembuat: "Fathan Ahza Haidar Rosyad",
    kelas: "8 Putra",
    deskripsi: "game nya boleh di coba di jamin seru",
    thumbnail: "https://plus.unsplash.com/premium_vector-1728668066383-5df5536e5def?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1066638042"
  },
  {
    id: 6,
    judul: "Game Flappy Balloon",
    pembuat: "Haikal Mufid",
    kelas: "8 Putra",
    deskripsi: "Game Balon kalian harus melewati pipa besi dan jangan sampai kena pipanya nanti kalian kalah",
    thumbnail: "https://plus.unsplash.com/premium_vector-1736229110669-34f023db1a9f?q=80&w=601&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1065509601"
  },
  {
    id: 7,
    judul: "Perkenalan Scratch copy",
    pembuat: "Krishna Batistuta Yusuf",
    kelas: "8 Putra",
    deskripsi: "Game Perkenalan Scratch",
    thumbnail: "https://images.unsplash.com/vector-1745685857535-dfcece8b908b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1059847033"
  },
  {
    id: 8,
    judul: "ESCAPE THE MAZE",
    pembuat: "Muhammad 'Aufa Ibadurrahman",
    kelas: "8 Putra",
    deskripsi: "Game petualangan luar angkasa dengan rintangan menarik.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1682300804998-fec69bb449c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1220821975"
  },
  {
    id: 9,
    judul: "Zombie Apocalypse",
    pembuat: "Muhammad Azka Rifqy El-Farras",
    kelas: "8 Putra",
    deskripsi: "Game tembak zombie.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1711987886030-c2eb0a44b37d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1071934221"
  },
  {
    id: 10,
    judul: "Let's Survive!",
    pembuat: "Muhammad Fathan Fawwaz Mumtaza",
    kelas: "8 Putra",
    deskripsi: "Jangan Sampai Mati,Bunuh Zombie Sebanyak-banyaknya",
    thumbnail: "https://images.unsplash.com/vector-1744772732051-89e80c9f152f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1073744054"
  },
  {
    id: 11,
    judul: "GAME PENALTY",   
    pembuat: "Muhammad Taqi Khairul Azzam",
    kelas: "8 Putra",
    deskripsi: "Game menendang bola ke gawang.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1719407209480-b8861d9bc529?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1071932695/"
  },
  {
    id: 12,
    judul: "Easy Maze",
    pembuat: "Quthbie Almairi Tsaqieb",
    kelas: "8 Putra",
    deskripsi: "Game cari jalan keluar dari labirin.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1682300807192-2bc7bf985a57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1215586092"
  },
  {
    id: 13,
    judul: "Flapy Bird",   
    pembuat: "Zidan Alvaro Sulistyo",
    kelas: "8 Putra",
    deskripsi: "Game burung melewati pipa.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1715632451165-87c3a13df4c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1069829223"
  },
  {
    id: 14,
    judul: "Soccer Game",
    pembuat: "Aisyah Nur Hasna & Alya Fauzia Azzahra",
    kelas: "8 Putri",
    deskripsi: "Animasi sepak bola sederhana.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1717007595610-b18c8af7b8a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1217901159"
  },
  {
    id: 15,
    judul: "Boboiboy Game",
    pembuat: "Husna Dzakiyyah & Kayla Salsabila",
    kelas: "8 Putri",
    deskripsi: "Game menangkap buah yang jatuh.",
    thumbnail: "https://plus.unsplash.com/premium_vector-1736769744739-5b4c632a970c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    scratch_url: "https://scratch.mit.edu/projects/1209811863"
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = ['all', '7 Putra', '7 Putri', '8 Putra', '8 Putri', '9 Putra', '9 Putri'];

  // Filter games
  const filteredGames = useMemo(() => {
    return gamesData.filter(game => {
      const matchesSearch = 
        game.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.pembuat.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = selectedClass === 'all' || game.kelas === selectedClass;
      return matchesSearch && matchesClass;
    });
  }, [searchQuery, selectedClass]);

  // Statistics
  const stats = {
    totalGames: gamesData.length,
    totalStudents: new Set(gamesData.map(g => g.pembuat)).size,
    totalClasses: new Set(gamesData.map(g => g.kelas)).size
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-lg border-b ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'}`}>
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Galeri Game Siswa
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Karya Scratch Terbaik
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Game</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.totalGames}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pembuat</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.totalStudents}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kelas Aktif</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.totalClasses}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Cari judul game atau nama pembuat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500' 
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500'
              } focus:outline-none`}
            />
          </div>

          {/* Class Filter */}
          <div className="relative">
            <Filter className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className={`pl-12 pr-8 py-3 rounded-xl border-2 transition-all appearance-none cursor-pointer ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500' 
                  : 'bg-white border-gray-200 text-gray-900 focus:border-indigo-500'
              } focus:outline-none`}
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === 'all' ? 'Semua Kelas' : `Kelas ${cls}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Menampilkan <span className="font-semibold">{filteredGames.length}</span> game
        </p>
      </section>

      {/* Game Gallery */}
      <section className="container mx-auto px-4 pb-12">
        {filteredGames.length === 0 ? (
          <div className={`text-center py-20 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Tidak ada game yang ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={game.thumbnail}
                    alt={game.judul}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => window.open(game.scratch_url, '_blank')}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-8 h-8 text-indigo-600 ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {game.judul}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      oleh <span className="font-semibold">{game.pembuat}</span>
                    </span>
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                    }`}>
                      {game.kelas}
                    </span>
                  </div>

                  <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {game.deskripsi}
                  </p>

                  <button
                    onClick={() => window.open(game.scratch_url, '_blank')}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" fill="currentColor" />
                    Main Game
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} mt-12`}>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Galeri Game Siswa. Dibuat dengan ❤️ untuk para pembuat game masa depan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;