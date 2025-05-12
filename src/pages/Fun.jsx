"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight} from "lucide-react"
import {coffee, jinwoo, room, favorite, peach, blueberry, scaramouche, cake, sketch, lemon} from "../assets/images";

export default function Fun() {
  const [selectedId, setSelectedId] = useState(null)

  const artworks = [
    { id: 1, title: "A cup of coffee", src: coffee, description: "A cup of coffee. I always start my day with coffee, so it is mandatory to put this art on the top of the list. ", year: "2025", artist: "Ritika Lama" }, 
    { id: 2, title: "Sung Jinwoo", src: jinwoo, description: "A character from Solo Leveling", year: "2025", artist: "Ritika Lama"},
    { id: 3, title: "Flowery Room", src: room, description: "Flowery room perfect for wedding scenarios.", year: "2025", artist: "Ritika Lama"},
    { id: 4, title: "Favourite characters", src: favorite,
       description: "My six favourite characters in different scenario. 1. Sanji from Onepiece 2. Howl from Howl's moving Castle 3. Arlecchino from Genshin Impact 4. Johan from Monster 5. Makima from Chainsawman 6. Levi from Attack on Titan",
        year: "2025", artist: "Ritika Lama"},
    { id: 5, title: "Peach", src: peach, description: "Shiny peach that make you want to eat it.", year: "2025", artist: "Ritika Lama" },
    { id: 6, title: "Blueberry", src: blueberry, description: "Why is blueberry called blueberry but strawberry not called redberry?", year: "2025", artist: "Ritika Lama" },
    { id: 7, title: "Scaramouche", src: scaramouche, 
      description: "A story of character from Genshin Impact potrayed as art. This character is Scaramouche who was used by an evil Doctor to perform various experimentations on him.", 
      year: "2025", artist: "Ritika Lama"},
    { id: 8, title: "Cake", src: cake, description: "Bakery drawings. This is where I bake, not the kitchen.", year: "2025", artist: "Ritika Lama"},
    { id: 9, title: "Sketch", src: sketch, description: "A referenced used sketch from Pinterest.", year: "2025", artist: "Ritika Lama"},
    { id: 10, title: "Summer Lemon", src: lemon, description: "Don't you feel refreshed when you look at this art?", year: "2025", artist: "Ritika Lama" },
  ]

  const findArtwork = (id) => {
    return artworks.find((artwork) => artwork.id === id)
  }

  const getNextId = (currentId) => {
    const currentIndex = artworks.findIndex((artwork) => artwork.id === currentId)
    const nextIndex = (currentIndex + 1) % artworks.length
    return artworks[nextIndex].id
  }

  const getPrevId = (currentId) => {
    const currentIndex = artworks.findIndex((artwork) => artwork.id === currentId)
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length
    return artworks[prevIndex].id
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setSelectedId(getNextId(selectedId))
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setSelectedId(getPrevId(selectedId))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-200">

      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mt-10 mb-12 text-purple-600 drop-shadow-lg">My Art Gallery</h1>
        <p className="text-xl text-center mb-12 text-blue-700">This is where I cook. Here are some of my art pieces done in leisure time with bored hands and brain. Page will be updated as soon as I draw some more arts.</p>
        {/* Grid layout for separated artworks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              layoutId={`card-${artwork.id}`}
              onClick={() => setSelectedId(artwork.id)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-xl bg-slate-300"
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                },
              }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-xl font-semibold text-white">{artwork.title}</h2>
                  <p className="text-sm text-white/80">{artwork.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded view with navigation arrows */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {/* Previous arrow */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full z-50"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </motion.button>

            {/* Next arrow */}
            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full z-50"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </motion.button>

            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedId(null)
                }}
                whileHover={{ scale: 1.1 }}
              >
                <X size={20} />
              </motion.button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                  <img
                    src={findArtwork(selectedId)?.src || "/placeholder.svg"}
                    alt={findArtwork(selectedId)?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{findArtwork(selectedId)?.title}</h2>
                    <p className="text-gray-600 mb-4">{findArtwork(selectedId)?.description}</p>
                  </div>

                  <div className="mt-6 border-t pt-4 border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Artist: {findArtwork(selectedId)?.artist}</div>
                    <div className="text-sm text-gray-500">Year: {findArtwork(selectedId)?.year}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  )
}
