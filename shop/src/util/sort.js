export const sort = ({ optionChosen, disItemAfterChosen }) => {
    switch (optionChosen) {
      case "retail_price_cents":
          disItemAfterChosen = disItemAfterChosen.sort((a, b) => (a.retail_price_cents > b.retail_price_cents ? 1 : -1));
          break;

      case "name":
        disItemAfterChosen = disItemAfterChosen.sort((a, b) =>
        a.name > b.name ? 1 : -1
        );
        break;        

      default :
        return disItemAfterChosen;
    }
};