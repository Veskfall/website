function loadPage(name) {
  switch (name) {
    case "homes":
      window.location.href = "./";
      break;
    case "blog":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440000";
      break;
    case "intro":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440001";
      break;
    case "win":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440002";
      break;
    case "void-schools":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440003";
      break;
    case "void-submit":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440004";
      break;
    case "bbs":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440005";
      break;
    case "bbs-void":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440006";
      break;
    case "bbs-carts":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440007";
      break;
    case "bbs-blog":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440008";
      break;
    case "info":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440009";
      break;
    case "games":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440010";
      break;
    case "info-tos":
      window.location.href = "./550e8400-e29b-41d4-a716-446655440011";
      break;
    default:
      window.location.href = "./404";
  }
}

window.addEventListener("load", function() {
  if (window.location.href.includes("550e8400-e29b-41d4-a716-446655440000")) {
    document.getElementById("home").style.display = "block";
  } else {
    document.getElementById("home").style.display = "none";
  }
});
