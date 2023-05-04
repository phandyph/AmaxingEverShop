export const sortShoesByNameAndPrice = ({ optionChosen, disItemAfterChosen }) => {
    switch (optionChosen) {
      case "retail_price_cents":
          return disItemAfterChosen.sort((a, b) => (a.retail_price_cents > b.retail_price_cents ? 1 : -1));
      
      case "name":
        return disItemAfterChosen.sort((a, b) =>
        a.name > b.name ? 1 : -1
        );      

      default :
        return disItemAfterChosen;
    }
};