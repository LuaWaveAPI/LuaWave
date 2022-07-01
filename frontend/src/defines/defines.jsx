let HOST

  switch (window.location.hostname) {
    case "localhost":
      HOST="http://localhost:8080/"
      break;

    case "127.0.0.1":
      HOST="http://127.0.0.1:8080/"
      break;
      
    default:
      HOST="/"
      break;
  }

const urls = [
    HOST+"api/v0.0/articles/surf/con",
    HOST+"api/v0.0/articles/surf/sin",
    HOST+"api/v0.0/articles/skate/con",
    HOST+"api/v0.0/articles/skate/sin",
    HOST+"api/v0.0/order"

]

export {urls}