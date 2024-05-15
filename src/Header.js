import React from 'react';

export default function Header() {
  const [img, setImg] = React.useState("./hello.jpeg");

  function changeImage(imageFile) {
    setImg(imageFile);
  }

  return (
    <header>
      <h1>Dominic's React Website from Scratch!</h1>
      <nav>
        <button onClick={() => changeImage("./standing.jpg")}>Standing</button>
        <button onClick={() => changeImage("./seating.jpg")}>Sitting</button>
        <button onClick={() => changeImage("./model.jpg")}>Bonus!</button>
      </nav>
      <img className="img" src={img} alt="Dynamic content" />
    </header>
  );
}
