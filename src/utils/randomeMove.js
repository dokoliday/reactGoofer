const whereToGo = (goofers, mapX, mapY) => {
  const nearPeople = (goofer) => {
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("mais pas la: deplacementHautDroite")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHautDroite")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("mais pas la: deplacementHaut")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHaut")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("mais pas la: deplacementBas")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBas")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y)).length > 0) {
      console.log("mais pas la: deplacementDroite")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementDroite")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y)).length > 0) {
      console.log("mais pas la: deplacementGauche")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementGauche")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("mais pas la: deplacementHautGauche")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHautGauche")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("mais pas la: deplacementBasDroite")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBasDroite")
      return goofer
    };
    if (goofers.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("mais pas la: deplacementBasGauche")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBasGauche")
      return goofer
    };
  }


  const newArrayGoofer = goofers.map(goofer => {
    if (goofer.y === 0 && goofer.x === 0) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementStay"
      ];
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      return goofer
    } else if (goofer.y === 0 && goofer.x === mapX - 1) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementStay"
      ];
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      return goofer
    } else if (goofer.x === 0 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      return goofer

    } else if (goofer.x === mapX - 1 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementGauche",
        "deplacementHautGauche",
        "deplacementStay"
      ];
      console.log(goofer)
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      console.log(goofer)
      return goofer
    } else if (goofer.x === 0) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ];
      console.log(goofer)
      nearPeople(goofer);

      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      console.log(goofer)
      return goofer

    } else if (goofer.y === 0) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementGauche",
        "deplacementStay",
        "deplacementBasGauche"
      ];
      console.log(goofer)
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      console.log(goofer)
      return goofer
    } else if (goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ];
      console.log(goofer)
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      console.log(goofer)
      return goofer
    } else if (goofer.x === mapX - 1) {
      goofer.deplacement = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementBas",
        "deplacementStay"
      ];
      console.log(goofer)
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      console.log(goofer);
      return goofer
    } else {
      goofer.deplacement = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ];
      nearPeople(goofer);
      let move = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      goofer[move]();
      return goofer
    }
  }
  )
  return newArrayGoofer
}

export default whereToGo;



