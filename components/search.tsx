"use client";

import { useState, useEffect } from "react";
import { useLocation } from "@/lib/locationContext";
import { Search as SearchIcon, X } from "lucide-react";

export const Search = () => {
  const { setLocation } = useLocation();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    {
      name: string;
      country: string;
      lat: number;
      lon: number;
    }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch("/api/searchLocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      const results = await response.json();

      setSuggestions(results);
    };

    if (query.trim()) {
      const debounce = setTimeout(fetchSuggestions, 300);
      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <>
      <SearchIcon
        size={24}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer hover:opacity-60 transition-all duration-300"
      />

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-50 flex items-start justify-center text-sky-950 pt-20">
          <div className="w-full max-w-xl mx-4 relative">
            <div className="relative">
              <input
                className="w-full py-3 px-12 rounded-2xl bg-sky-100 focus:outline-none"
                type="text"
                placeholder="Search location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                  setSuggestions([]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X size={20} className="cursor-pointer" />
              </button>
            </div>

            {suggestions.length > 0 && (
              <ul className="mt-2 bg-sky-700 text-sky-100 rounded-2xl shadow-xl overflow-y-auto max-h-96">
                {suggestions.map((place, index) => (
                  <li
                    key={index}
                    className="py-3.5 px-5 leading-tight hover:bg-sky-800 transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      setQuery("");
                      setLocation([place.lat, place.lon]);
                      setIsOpen(false);
                    }}
                  >
                    {place.name}, {place.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
