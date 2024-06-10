// La directive 'use client' indique que ce code sera exécuté côté client (dans le navigateur).
'use client'

// Importation de la fonction getAllMovies depuis le chemin spécifié. Cette fonction est utilisée pour récupérer tous les films en fonction d'un critère de recherche.
import { getAllMovies } from '@/Services/movies'

// Importation du hook useState depuis React, utilisé pour ajouter la gestion d'état aux composants fonctionnels.
import { useState } from 'react'

// Importation de l'icône FaMagnifyingGlass depuis la bibliothèque react-icons. Cette icône sera utilisée pour le bouton de recherche.
import { FaMagnifyingGlass } from 'react-icons/fa6'

// Importation du composant Triangle depuis react-loader-spinner, utilisé pour afficher un indicateur de chargement.
import { Triangle } from 'react-loader-spinner'

// Définition et exportation du composant fonctionnel Search. Ce composant reçoit deux props : setMoviesList et setIsLoading, qui sont des fonctions permettant de mettre à jour l'état du composant parent.
export const Search = ({ setMoviesList, setIsLoading }) => {
  // Déclaration d'une variable d'état appelée searchValue et d'une fonction setSearchValue pour la mettre à jour.
  // Initialement, searchValue est une chaîne vide.
  const [searchValue, setSearchValue] = useState('')

  // Fonction pour rechercher des films.
  function searchMovies() {
    // Mettre isLoading à true pour indiquer que la recherche est en cours.
    setIsLoading(true)
    // Appeler la fonction getAllMovies avec la valeur de recherche.
    getAllMovies(searchValue).then((res) => {
      // Mettre à jour la liste des films avec les résultats de la recherche.
      setMoviesList(res.Search)
      // Mettre isLoading à false pour indiquer que la recherche est terminée.
      setIsLoading(false)
    })
  }

  // Le composant retourne une structure JSX.
  return (
    // Div contenant l'input de recherche et le bouton de recherche.
    <div className="w-1/2 mx-auto flex items-center h-10 bg-white justify-between rounded-md my-6">
      {/* Input de texte pour la saisie de la recherche. */}
      <input
        type="text"
        className="w-full h-10  rounded-md indent-5 text-black"
        onChange={(e) => setSearchValue(e.target.value)} // Mettre à jour la valeur de recherche à chaque changement de l'input.
      />
      {/* Bouton pour lancer la recherche. */}
      <button
        onClick={() => searchMovies()} // Appeler la fonction searchMovies lors du clic sur le bouton.
        className="w-3/12 bg-red-600 h-10 text-white rounded-e-md rounded-r-md p-2 flex items-center justify-evenly min-w-32"
      >
        <FaMagnifyingGlass size={22} color="#fff" /> {/* Icône de loupe pour le bouton de recherche. */}
        Search {/* Texte du bouton de recherche. */}
      </button>
      {/* Paragraphe vide pour éventuellement afficher des messages ou des erreurs (non utilisé ici). */}
      <p className="text-black"></p>
    </div>
  )
}
