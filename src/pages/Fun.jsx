"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight} from "lucide-react"
import {ai, butterfly, cat, chiori, evangelion, forest, hutao, illumi, kokushibo, kurapika, maomao, wall, coffee, jinwoo, room, favorite, peach, blueberry, scaramouche, cake, sketch, lemon} from "../assets/images";

export default function Fun() {
  const [selectedId, setSelectedId] = useState(null)

  const artworks = [
    { id: 1, title: "Ai", src: ai, description: "Ai Hoshino was the lead idol of the original B-Komachi and mother of Aqua and Ruby. As an idol, she lived a life of deceit by pretending to genuinely love her fans. ", year: "2025", artist: "Ritika Lama" }, 
    { id: 2, title: "Mysterious", src: butterfly, description: ".....", year: "2025", artist: "Ritika Lama"},
    { id: 3, title: "Cat", src: cat, description: "Sleeping peacemeowlly.", year: "2025", artist: "Ritika Lama"},
    { id: 4, title: "Chiori", src: chiori,
       description: "An independent designer hailing from Inazuma who strives to make her brand internationally recognized across all of Teyvat, Chiori is the industrious yet headstrong owner of Chioriya Boutique, a fashion label in Fontaine which has also served as an intelligence boutique for law enforcement. ",
        year: "2025", artist: "Ritika Lama"},
        { id: 5, title: "Kaworu Nagisa", src: evangelion, description: "Kaworu Nagisa, the Fifth Child and seventeenth Angel, is akin to Rei Ayanami as a Seed of Life in a human body.  ", year: "2025", artist: "Ritika Lama" }, 
        { id: 6, title: "Forest", src: forest, description: "Warm yet cold camp site", year: "2025", artist: "Ritika Lama"},
        { id: 7, title: "Hu Tao", src: hutao, description: "Hu Tao's antics and eccentricity belies her role as the 77th Director of the Wangsheng Funeral Parlor and her talent as a poet.", year: "2025", artist: "Ritika Lama"},
        { id: 8, title: "Illumi", src: illumi,
           description: "Illumi Zoldyck (イルミ＝ゾルディック, Irumi Zorudikku) is an elite professional assassin and the eldest child of Silva and Kikyo Zoldyck. ",
            year: "2025", artist: "Ritika Lama"},
     { id: 9, title: "Kokushibo", src: kokushibo, description: "Kokushibo (黒死牟) is the secondary antagonist of the Demon Slayer: Kimetsu no Yaiba franchise. He is a member of the Twelve Kizuki, holding the position of Upper Rank One, thus making him the second strongest demon in the series.  ", year: "2025", artist: "Ritika Lama" }, 
     { id: 10, title: "Kurapika", src: kurapika, description: "Kurapika (クラピカ) is the last survivor of the Kurta Clan. He is a Blacklist Hunter and the current underboss of the organization founded by Light Nostrade.", year: "2025", artist: "Ritika Lama"},
     { id: 11, title: "Mao Mao", src: maomao, description: "Maomao (猫猫, Maomao) is the protagonist of The Apothecary Diaries series. She is an illegitimate member of the La Clan raised in the red-light district.", year: "2025", artist: "Ritika Lama"},
     { id: 12, title: "Wall", src: wall,
          description: "Beyond the wall lies a world unknown.",
          year: "2025", artist: "Ritika Lama"},
    { id: 13, title: "A cup of coffee", src: coffee, description: "A cup of coffee. I always start my day with coffee, so it is mandatory to put this art on the top of the list. ", year: "2025", artist: "Ritika Lama" }, 
    { id: 14, title: "Sung Jinwoo", src: jinwoo, description: "A character from Solo Leveling", year: "2025", artist: "Ritika Lama"},
    { id: 15, title: "Flowery Room", src: room, description: "Flowery room perfect for wedding scenarios.", year: "2025", artist: "Ritika Lama"},
    { id: 16, title: "Characters", src: favorite,
       description: "Specific characters.",
        year: "2025", artist: "Ritika Lama"},
    { id: 17, title: "Peach", src: peach, description: "Shiny peach that make you want to eat it.", year: "2025", artist: "Ritika Lama" },
    { id: 18, title: "Blueberry", src: blueberry, description: "Why is blueberry called blueberry but strawberry not called redberry?", year: "2025", artist: "Ritika Lama" },
    { id: 19, title: "Scaramouche", src: scaramouche, 
      description: "A story of character from Genshin Impact potrayed as art. This character is Scaramouche who was used by an evil Doctor to perform various experimentations on him.", 
      year: "2025", artist: "Ritika Lama"},
    { id: 20, title: "Cake", src: cake, description: "Bakery drawings. This is where I bake, not the kitchen.", year: "2025", artist: "Ritika Lama"},
    { id: 21, title: "Sketch", src: sketch, description: "A referenced used sketch from Pinterest.", year: "2025", artist: "Ritika Lama"},
    { id: 22, title: "Summer Lemon", src: lemon, description: "Don't you feel refreshed when you look at this art?", year: "2025", artist: "Ritika Lama" },
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

      <div className="container relative z-10 px-4 py-12 mx-auto">
        <h1 className="mt-10 mb-12 text-4xl font-bold text-center text-purple-600 drop-shadow-lg">My Art Gallery</h1>
        <p className="mb-12 text-xl text-center text-blue-700">This is where I cook. Here are some of my art pieces done in leisure time with bored hands and brain. Page will be updated as soon as I draw some more arts!</p>
        {/* Grid layout for separated artworks */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              layoutId={`card-${artwork.id}`}
              onClick={() => setSelectedId(artwork.id)}
              className="overflow-hidden shadow-xl cursor-pointer rounded-xl bg-slate-300"
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
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-xl font-semibold text-white">{artwork.title}</h2>
                  <p className="text-sm text-white/80">{artwork.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

              <AnimatePresence>
                  {selectedId && (
                    <motion.div
                      className={`fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 ${
                        selectedId ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedId(null)}
                    >
                      {/* Previous arrow */}
                      <motion.button
                        className="absolute z-50 p-3 -translate-y-1/2 rounded-full left-4 md:left-8 top-1/2 bg-white/10 hover:bg-white/30"
                        onClick={handlePrev}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </motion.button>

                      {/* Next arrow */}
                      <motion.button
                        className="absolute z-50 p-3 -translate-y-1/2 rounded-full right-4 md:right-8 top-1/2 bg-white/10 hover:bg-white/30"
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </motion.button>

                      <motion.div
                        layoutId={`card-${selectedId}`}
                        className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.button
                          className="absolute z-10 p-2 text-white rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
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
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col justify-between p-6 md:w-1/3">
                            <div>
                              <h2 className="mb-4 text-2xl font-bold">{findArtwork(selectedId)?.title}</h2>
                              <p className="mb-4 text-gray-600">{findArtwork(selectedId)?.description}</p>
                            </div>

                            <div className="pt-4 mt-6 border-t border-gray-200">
                              <div className="mb-1 text-sm text-gray-500">Artist: {findArtwork(selectedId)?.artist}</div>
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
