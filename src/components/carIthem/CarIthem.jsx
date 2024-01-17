const CarIthem = ({ marke, farbe, modell, ps }) => {

    return (
        <>
            <h1>das ist ein carIthem component</h1>

            <h2>Farbe: {farbe}</h2>
            <h2>Marke: {marke}</h2>
            <h2>Model: {modell}</h2>
            <h2>PS: {ps}</h2>

        </>
    );
}

export default CarIthem;