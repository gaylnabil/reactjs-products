import { createContext, useState } from "react";
const FavoritesContext = createContext({
    // favorites: [], // Default Values
    // total: 0,
    // addFavorite: (favoriteProduct) => {},
    // deleteFavorite: (id) =>{},
    // itemIsFavorite:(id) =>{},
});

// Component Favorites Context Provider
export const FavoritesContextProvider =  ({ children }) =>{
    
    const [userFavorites, setUserFavorites] = useState([]);
    
    const addFavoritesHandler = (favoriteProduct) =>{
        // console.log("addFavoritesHandler : ", product);

        // fetch(
        //     'https://react-products-2708c-default-rtdb.firebaseio.com/favorites.json',
        //     {
        //       method: 'POST',
        //       body: JSON.stringify(favoriteProduct),
        //       headers: { 
        //         'Content-Type': 'application/json',
        //       }
        //     }
            
        //   ).then(()=>{
        //     //navigate('/');
        //   });

        setUserFavorites((prevUserFavorites)=>{
            console.log("prevUserFavorites : ", userFavorites);
            return prevUserFavorites.concat(favoriteProduct)
        });
    }

    const deleteFavoriteHandler = (id) =>{
        setUserFavorites(  (prevUserFavorites)=>{
            return  prevUserFavorites.filter((product)=>{

                if (product.id !== id){
                    return true
                }
                return false;
            });
        });
    }

    const itemIsFavoriteHandler =  (id) =>{
         return   userFavorites.some( (product)=>{
            return  product.id === id;
        });
    }

    const context = {
        favorites: userFavorites,
        total: userFavorites.length,
        addFavorite: addFavoritesHandler,
        deleteFavorite: deleteFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler,
    }


    return(
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;