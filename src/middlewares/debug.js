
const debugMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case 'DO_SOMETHING':
      console.log(action);
      next(action)
      break;
    
    default: 
     next(action);
  }
};

export default debugMiddleware;
