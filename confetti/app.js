function drawConfetti(){
    var confettiSettings = {
        target: "my-canvas",
        size:0.3,
        props:["circle","square","triangle","line"],
        // colors:[[0,0,0],[50,50,50]],
        max:280,
        clock:2
    };

    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

drawConfetti();