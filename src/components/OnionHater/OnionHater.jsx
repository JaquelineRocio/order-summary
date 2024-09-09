const OnionHater = () => {
  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.toLowerCase().includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  };

  return (
    <div>
      <h2>Odio la Cebolla</h2>
      <textarea placeholder="Escribe algo aquí..." onChange={handleChange} />
    </div>
  );
};

export default OnionHater;
