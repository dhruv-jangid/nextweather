"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { useLocation } from "@/context/locationProvider";

export const Search = () => {
  const [suggestions, setSuggestions] = useState<
    {
      name: string;
      country: string;
      lat: number;
      lon: number;
    }[]
  >([]);
  const { setLocation } = useLocation();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const locations = await (
        await fetch(`/api/searchLocation?location=${query}`)
      ).json();

      setSuggestions(locations);
    };

    if (query.trim()) {
      const debounce = setTimeout(fetchSuggestions, 500);
      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearchClose = () => {
    setIsOpen(false);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <>
      <SearchIcon
        size={24}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer hover:opacity-60 transition-all duration-300"
      />

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-xl mx-4 relative">
            <div className="relative">
              <input
                className="w-full py-3 px-12 rounded-2xl bg-accent text-accent-foreground focus:outline-none"
                type="text"
                placeholder="Search location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 stroke-accent-foreground" />
              <button
                onClick={handleSearchClose}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X
                  size={20}
                  className="cursor-pointer stroke-accent-foreground"
                />
              </button>
            </div>

            {suggestions.length > 0 && (
              <ul className="mt-2 bg-accent text-accent-foreground rounded-2xl shadow-xl overflow-y-auto max-h-96">
                {suggestions.map((place, index) => (
                  <li
                    key={index}
                    className="py-3.5 px-5 leading-tight hover:bg-accent-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
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
