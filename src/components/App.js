import React from "react";
import RestaurantForm from "containers/restaurant_form";
import RestaurantList from "containers/restaurant_list";
import 'styles/app.scss'

const App = () => {
  return (
    <div>
      <RestaurantForm />
      <RestaurantList />
    </div>
  );
};

export default App;
