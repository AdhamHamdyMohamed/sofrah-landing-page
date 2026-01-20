window.addEventListener("load", () => {
  const items = [
    {
      id: "swiper1",
      hover: "/Assets/Imgs/Property 1=Variant2-8.png",
      original: "/Assets/Imgs/Property 1=Default-8.png",
    },
    {
      id: "swiper2",
      hover: "/Assets/Imgs/Property 1=Variant2-7.png",
      original: "/Assets/Imgs/Property 1=Default-7.png",
    },
    {
      id: "swiper3",
      hover: "/Assets/Imgs/Property 1=Variant2-6.png",
      original: "/Assets/Imgs/Property 1=Default-6.png",
    },
    {
      id: "swiper4",
      hover: "/Assets/Imgs/Property 1=Variant2-5.png",
      original: "/Assets/Imgs/Property 1=Default-5.png",
    },
    {
      id: "swiper5",
      hover: "/Assets/Imgs/Property 1=Variant2-4.png",
      original: "/Assets/Imgs/Property 1=Default-4.png",
    },
    {
      id: "swiper6",
      hover: "/Assets/Imgs/Property 1=Variant2-3.png",
      original: "/Assets/Imgs/Property 1=Default-3.png",
    },
  ];

  items.forEach((item) => {
    const img = document.getElementById(item.id);
    img.classList.add("img-fade");

    img.addEventListener("mouseover", () => {
      img.classList.add("fade-out");
      setTimeout(() => {
        img.src = item.hover;
        img.classList.remove("fade-out");
      }, 150);
    });

    img.addEventListener("mouseleave", () => {
      img.classList.add("fade-out");
      setTimeout(() => {
        img.src = item.original;
        img.classList.remove("fade-out");
      }, 150);
    });
  });

  const secItems = [
    {
      id: "imgOne",
      hover: "/Assets/Imgs/Property 1=Variant2-12.png",
      original: "/Assets/Imgs/Property 1=Default-12.png",
    },
    {
      id: "imgTwo",
      hover: "/Assets/Imgs/Property 1=Variant2-11.png",
      original: "/Assets/Imgs/Property 1=Default-11.png",
    },
    {
      id: "imgThree",
      hover: "/Assets/Imgs/Property 1=Variant2-10.png",
      original: "/Assets/Imgs/Property 1=Default-10.png",
    },
    {
      id: "imgFour",
      hover: "/Assets/Imgs/Property 1=Variant2-9.png",
      original: "/Assets/Imgs/Property 1=Default-9.png",
    },
  ];

  secItems.forEach((item) => {
    const img = document.getElementById(item.id);
    img.classList.add("img-fade");

    img.addEventListener("mouseover", () => {
      img.classList.add("fade-out");
      setTimeout(() => {
        img.src = item.hover;
        img.classList.remove("fade-out");
      }, 150);
    });

    img.addEventListener("mouseleave", () => {
      img.classList.add("fade-out");
      setTimeout(() => {
        img.src = item.original;
        img.classList.remove("fade-out");
      }, 150);
    });
  });

  const commentImg = document.getElementById("commentImg");
  commentImg.classList.add("img-fade");

  commentImg.addEventListener("click", () => {
    commentImg.classList.add("fade-out");
    setTimeout(() => {
      commentImg.src = "/Assets/Imgs/Property 1=Frame 1618873728.png";
      commentImg.classList.remove("fade-out");
    }, 150);
  });
});
