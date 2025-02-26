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
        className="cursor-pointer hover:opacity-80 transition-all"
      />

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-xl mx-4 relative">
            <div className="relative">
              <input
                className="w-full py-3 px-12 text-black rounded-2xl bg-[#e4f0fe] focus:outline-none"
                type="text"
                placeholder="Search location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                  setSuggestions([]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} className="cursor-pointer" />
              </button>
            </div>

            {suggestions.length > 0 && (
              <ul className="mt-2 bg-[#e4f0fe] text-black rounded-2xl shadow-lg overflow-y-auto max-h-96">
                {suggestions.map((place, index) => (
                  <li
                    key={index}
                    className="p-3 px-4 hover:bg-[#5c9de6] cursor-pointer"
                    onClick={() => {
                      setQuery(`${place.name}, ${place.country}`);
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
