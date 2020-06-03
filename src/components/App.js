import React from "react";
import RestaurantForm from "containers/RestaurantForm";
import RestaurantList from "containers/RestaurantList";

const App = () => {
  return (
    <div>
      <RestaurantForm />
      <RestaurantList />
    </div>
  );
};

export default App;
