export let HOST

  switch (window.location.hostname) {
    case "localhost":
      HOST="http://localhost:4000/"
      break;

    case "127.0.0.1":
      HOST="http://127.0.0.1:4000/"
      break;
      
    default:
      HOST="/"
      break;
  }