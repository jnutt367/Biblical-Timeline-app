document.getElementById("themeToggle").onclick = () => {
    document.body.dataset.theme =
      document.body.dataset.theme === "dark" ? "light" : "dark";
  };
  