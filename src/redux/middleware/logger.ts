const Logger = (state) => (next) => (action) => {
  console.log("Curent state => ", state.getState());
  console.log("Action => ", action);
  next(action);
  console.log("Next State => ", state.getState());
};

export default Logger;
