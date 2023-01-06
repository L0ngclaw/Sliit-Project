import React, {useEffect} from "react";
import HeaderTitle from "../../components/Buttons/Header";
import Button from "../../components/Buttons/ProductButton";
import SearchButton from "../../components/Buttons/searchButton";
import TableContent from "../../components/Tables/TableRow";
import Favbutton from "../../components/Buttons/Favbutton";
import {favouriteStore} from "../../store/favorites";

const FavouriteProducts = () => {
    useEffect(() => {
        favouriteStore.subscribe(() => {
            console.log('current state', favouriteStore.getState());
        });
    }, []);

  return (
    <div className="grid grid-rows-4 grid-flow-col">
      <div className="">
        {" "}
        <HeaderTitle title={"Favourite Products"} />
      </div>
      <div className="grid grid-cols-2">
        <div className="float-left pl-16">
          <SearchButton />{" "}
        </div>
        <div className="flex gap-1">
          <Button name={"New Product"} />
          <Favbutton/>
        </div>
      </div>
      <div className="pl-20">
        <TableContent />
      </div>
    </div>
  );
};

export default FavouriteProducts;
