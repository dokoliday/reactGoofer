const filterNearPeople = (goofers,goofer) => {
  const arrayPeopleHere=[]
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


const whereToGo = (goofer, mapX, mapY) => {
    if (goofer.y === 0 && goofer.x === 0) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementStay"
      ];
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      return goofer
    } else if (goofer.y === 0 && goofer.x === mapX - 1) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementStay"
      ];
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      return goofer
    } else if (goofer.x === 0 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      return goofer

    } else if (goofer.x === mapX - 1 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementGauche",
        "deplacementHautGauche",
        "deplacementStay"
      ];
      console.log(goofer)
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
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
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
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
      // filterNearPeople(goofers, goofers);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
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
      // filterNearPeople(goofers, goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
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
      // filterNearPeople(goofer);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
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
      // filterNearPeople(goofers, goofers);
      // goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
      return goofer
    }
  }

export { whereToGo, filterNearPeople };



