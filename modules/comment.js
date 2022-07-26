const popUpMenu = () => {
  const commentBtn = document.querySelectorAll(".comment-btn");

  commentBtn.forEach((n) => {
    n.addEventListener("click", () => {
      console.log(123);
    });
  });
};

export default popUpMenu;
