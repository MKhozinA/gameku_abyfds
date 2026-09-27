
"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Play,
  X,
  Filter,
  Moon,
  Sun,
  Trophy,
  Users,
  Gamepad2,
  ChevronDown,
  Check,
  RotateCcw,
} from "lucide-react";

import { gamesData } from "@/app/data/games";

const GameGallery = () => {
  // ==========================================
  // STATE
  // ==========================================

  const [darkMode, setDarkMode] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedAngkatan, setSelectedAngkatan] =
    useState("all");

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);

  const [isAngkatanOpen, setIsAngkatanOpen] =
    useState(false);

  const [isCategoryOpen, setIsCategoryOpen] =
    useState(false);

  // ==========================================
  // FILTER OPTIONS
  // ==========================================

  const angkatanOptions = useMemo(() => {
    return [
      "all",
      ...Array.from(
        new Set(
          gamesData.map((game) => game.angkatan)
        )
      ).sort(),
    ];
  }, []);

  const categoryOptions = useMemo(() => {
    return Array.from(
      new Set(
        gamesData.flatMap((game) => game.kategori)
      )
    ).sort();
  }, []);

  // ==========================================
  // TOGGLE CATEGORY
  // ==========================================

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // ==========================================
  // RESET FILTER
  // ==========================================

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedAngkatan("all");
    setSelectedCategories([]);
    setIsAngkatanOpen(false);
    setIsCategoryOpen(false);
  };

  // ==========================================
  // FILTER GAMES
  // ==========================================

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const keyword = searchQuery.toLowerCase();

      const matchesSearch =
        game.judul.toLowerCase().includes(keyword) ||
        game.pembuat.toLowerCase().includes(keyword);

      const matchesAngkatan =
        selectedAngkatan === "all" ||
        game.angkatan === selectedAngkatan;

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) =>
          game.kategori.includes(category)
        );

      return (
        matchesSearch &&
        matchesAngkatan &&
        matchesCategory
      );
    });
  }, [
    searchQuery,
    selectedAngkatan,
    selectedCategories,
  ]);

  // ==========================================
  // STATISTICS
  // ==========================================

  const stats = {
    totalGames: gamesData.length,

    totalStudents: new Set(
      gamesData.map((game) => game.pembuat)
    ).size,

    totalAngkatan: new Set(
      gamesData.map((game) => game.angkatan)
    ).size,
  };

  // ==========================================
  // THEME COLORS
  // ==========================================

  const cardBackground = darkMode
    ? "bg-gray-800"
    : "bg-white";

  const primaryText = darkMode
    ? "text-white"
    : "text-gray-900";

  const secondaryText = darkMode
    ? "text-gray-400"
    : "text-gray-600";

  const borderColor = darkMode
    ? "border-gray-700"
    : "border-gray-200";

  const inputBackground = darkMode
    ? "bg-gray-900"
    : "bg-white";

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* ======================================
          HEADER
      ====================================== */}

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-lg ${
          darkMode
            ? "bg-gray-800/90 border-gray-700"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? "bg-indigo-600"
                    : "bg-indigo-500"
                }`}
              >
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>

              <div className="min-w-0">
                <h1
                  className={`text-xl sm:text-2xl font-bold truncate ${primaryText}`}
                >
                  Galeri Game Siswa
                </h1>

                <p
                  className={`text-sm ${secondaryText}`}
                >
                  Karya Scratch Terbaik
                </p>
              </div>
            </div>

            {/* Dark Mode Button */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Ubah mode tampilan"
              className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================
          STATISTICS SECTION
      ====================================== */}

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Total Game */}
          <div
            className={`p-5 sm:p-6 rounded-2xl shadow-lg ${cardBackground}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className={`text-sm ${secondaryText}`}>
                  Total Game
                </p>

                <p
                  className={`text-2xl font-bold ${primaryText}`}
                >
                  {stats.totalGames}
                </p>
              </div>
            </div>
          </div>

          {/* Total Pembuat */}
          <div
            className={`p-5 sm:p-6 rounded-2xl shadow-lg ${cardBackground}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className={`text-sm ${secondaryText}`}>
                  Pembuat
                </p>

                <p
                  className={`text-2xl font-bold ${primaryText}`}
                >
                  {stats.totalStudents}
                </p>
              </div>
            </div>
          </div>

          {/* Total Angkatan */}
          <div
            className={`p-5 sm:p-6 rounded-2xl shadow-lg ${cardBackground}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className={`text-sm ${secondaryText}`}>
                  Angkatan Aktif
                </p>

                <p
                  className={`text-2xl font-bold ${primaryText}`}
                >
                  {stats.totalAngkatan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          FILTER SECTION
      ====================================== */}

      <section className="container mx-auto px-4 py-6">
        <div
          className={`rounded-2xl border p-4 sm:p-5 shadow-sm ${
            darkMode
              ? "bg-gray-800/80 border-gray-700"
              : "bg-white/80 border-gray-200"
          }`}
        >
          {/* Search Bar */}
          <div className="relative mb-5">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            />

            <input
              type="text"
              placeholder="Cari judul game atau nama pembuat..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all ${inputBackground} ${
                darkMode
                  ? "border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500"
                  : "border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500"
              } focus:outline-none`}
            />
          </div>

          {/* Filter Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Filter
                className={`w-5 h-5 ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              />

              <h3
                className={`font-semibold ${primaryText}`}
              >
                Filter Game
              </h3>
            </div>

            {(selectedAngkatan !== "all" ||
              selectedCategories.length > 0 ||
              searchQuery.length > 0) && (
              <button
                type="button"
                onClick={resetFilters}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                Reset Filter
              </button>
            )}
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ==================================
                ANGKATAN FILTER
            ================================== */}

            <div className="relative">
              <label
                className={`block text-sm font-medium mb-2 ${primaryText}`}
              >
                Angkatan
              </label>

              <button
                type="button"
                onClick={() => {
                  setIsAngkatanOpen(!isAngkatanOpen);
                  setIsCategoryOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                  darkMode
                    ? "bg-gray-900 border-gray-700 text-white hover:border-indigo-500"
                    : "bg-white border-gray-200 text-gray-800 hover:border-indigo-500"
                }`}
              >
                <span className="truncate">
                  {selectedAngkatan === "all"
                    ? "Semua Angkatan"
                    : selectedAngkatan}
                </span>

                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    isAngkatanOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {isAngkatanOpen && (
                <div
                  className={`absolute z-30 top-full left-0 right-0 mt-2 p-2 rounded-xl border shadow-xl ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {angkatanOptions.map((angkatan) => {
                    const isSelected =
                      selectedAngkatan === angkatan;

                    return (
                      <button
                        key={angkatan}
                        type="button"
                        onClick={() => {
                          setSelectedAngkatan(
                            angkatan
                          );
                          setIsAngkatanOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                          isSelected
                            ? darkMode
                              ? "bg-indigo-900/60 text-indigo-300"
                              : "bg-indigo-50 text-indigo-700"
                            : darkMode
                              ? "text-gray-200 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>
                          {angkatan === "all"
                            ? "Semua Angkatan"
                            : angkatan}
                        </span>

                        {isSelected && (
                          <Check className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ==================================
                CATEGORY FILTER
            ================================== */}

            <div className="relative">
              <label
                className={`block text-sm font-medium mb-2 ${primaryText}`}
              >
                Kategori Game
              </label>

              <button
                type="button"
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsAngkatanOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                  darkMode
                    ? "bg-gray-900 border-gray-700 text-white hover:border-indigo-500"
                    : "bg-white border-gray-200 text-gray-800 hover:border-indigo-500"
                }`}
              >
                <span className="truncate">
                  {selectedCategories.length === 0
                    ? "Semua Kategori"
                    : `${selectedCategories.length} kategori dipilih`}
                </span>

                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    isCategoryOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div
                  className={`absolute z-30 top-full left-0 right-0 mt-2 p-3 rounded-xl border shadow-xl ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map((category) => {
                      const isSelected =
                        selectedCategories.includes(
                          category
                        );

                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() =>
                            toggleCategory(category)
                          }
                          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                            isSelected
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : darkMode
                                ? "bg-gray-900 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-300"
                                : "bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600"
                          }`}
                        >
                          {isSelected && (
                            <Check className="w-3.5 h-3.5" />
                          )}

                          {category}
                        </button>
                      );
                    })}
                  </div>

                  {/* Category Footer */}
                  <div
                    className={`flex items-center justify-between gap-3 mt-3 pt-3 border-t ${
                      darkMode
                        ? "border-gray-700"
                        : "border-gray-200"
                    }`}
                  >
                    <span
                      className={`text-xs ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {selectedCategories.length === 0
                        ? "Semua kategori aktif"
                        : `${selectedCategories.length} kategori dipilih`}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCategories([])
                      }
                      className={`text-xs font-semibold ${
                        darkMode
                          ? "text-indigo-400 hover:text-indigo-300"
                          : "text-indigo-600 hover:text-indigo-700"
                      }`}
                    >
                      Hapus Pilihan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Category Tags */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span
                className={`text-xs font-medium ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Filter aktif:
              </span>

              {selectedCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-indigo-900/60 text-indigo-300"
                      : "bg-indigo-100 text-indigo-700"
                  }`}
                >
                  {category}

                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}

          {/* Active Angkatan Tag */}
          {selectedAngkatan !== "all" && (
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span
                className={`text-xs font-medium ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Angkatan aktif:
              </span>

              <button
                type="button"
                onClick={() =>
                  setSelectedAngkatan("all")
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
                  darkMode
                    ? "bg-purple-900/60 text-purple-300"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {selectedAngkatan}

                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Results Count */}
          <p
            className={`mt-4 text-sm ${secondaryText}`}
          >
            Menampilkan{" "}
            <span className="font-semibold">
              {filteredGames.length}
            </span>{" "}
            game
          </p>
        </div>
      </section>

      {/* ======================================
          GAME GALLERY
      ====================================== */}

      <section className="container mx-auto px-4 pb-12">
        {filteredGames.length === 0 ? (
          <div
            className={`text-center py-20 ${secondaryText}`}
          >
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-50" />

            <p className="text-lg font-medium">
              Tidak ada game yang ditemukan
            </p>

            <p className="text-sm mt-2">
              Coba ubah kata kunci atau filter game.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${cardBackground}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={game.thumbnail}
                    alt={game.judul}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        game.scratch_url,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    aria-label={`Mainkan ${game.judul}`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Play
                        className="w-8 h-8 text-indigo-600 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Game Title */}
                  <h3
                    className={`text-xl font-bold mb-2 line-clamp-2 ${primaryText}`}
                  >
                    {game.judul}
                  </h3>

                  {/* Creator & Angkatan */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`text-sm ${secondaryText}`}
                    >
                      oleh{" "}
                      <span className="font-semibold">
                        {game.pembuat}
                      </span>
                    </span>

                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        darkMode
                          ? "bg-indigo-900 text-indigo-300"
                          : "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {game.angkatan}
                    </span>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {game.kategori.map((category) => (
                      <span
                        key={category}
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 line-clamp-4 ${secondaryText}`}
                  >
                    {game.deskripsi}
                  </p>

                  {/* Play Button */}
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        game.scratch_url,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play
                      className="w-4 h-4"
                      fill="currentColor"
                    />

                    Main Game
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ======================================
          FOOTER
      ====================================== */}

      <footer
        className={`border-t ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        } mt-12`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p
              className={`text-sm ${secondaryText}`}
            >
              © 2025 Galeri Game Siswa. Dibuat dengan ❤️
              untuk para pembuat game masa depan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameGallery;