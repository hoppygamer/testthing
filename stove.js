elements.hello_world = {
    color: "#ff0000",
    behavior: [
        "XX|XX|XX",
        "XX|FX|XX",
        "XX|XX|XX",
        function(pixel) {
            if (pixel.temp >= 100) {
                pixel.temp += 10;
            }
        },
    ],
    category: "land",
    state: "solid",
    burnTemp: 100,
    burnDuration: 3_000_000 * 365.25 * 24 * 60 * 60,
}
