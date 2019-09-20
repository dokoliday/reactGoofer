const whereToGo = (goofers, mapX, mapY) => {

  const goofersKnowToGO = goofers.map(goofer => {

    if (goofer.y === 0 && goofer.x === 0) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementStay"
      ];
      return goofer;
    } else if (goofer.y === 0 && goofer.x === mapX - 1) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementStay"
      ]; return goofer;
    } else if (goofer.x === 0 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]

    } else if (goofer.x === mapX - 1 && goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementGauche",
        "deplacementHautGauche",
        "deplacementStay"
      ]; return goofer;
    } else if (goofer.x === 0) {
      goofer.deplacement = [
        "deplacementHaut",
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]; return goofer;
    } else if (goofer.y === 0) {
      goofer.deplacement = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementGauche",
        "deplacementStay",
        "deplacementBasGauche"
      ]; return goofer;
    } else if (goofer.y === mapY - 1) {
      goofer.deplacement = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]; return goofer;
    } else if (goofer.x === mapX - 1) {
      goofer.deplacement = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementBas",
        "deplacementStay"
      ]; return goofer;
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
      return goofer;
    }
  }
  )

  goofersKnowToGO.map(goofer => {
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("tut 1")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHautDroite")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("tut 2")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHaut")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("tut 3")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBas")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y)).length > 0) {
      console.log("tut 4")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementDroite")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y)).length > 0) {
      console.log("tut 5")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementGauche")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y - 1)).length > 0) {
      console.log("tut 6")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementHautGauche")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x + 1 && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("tut 7")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBasDroite")
      return goofer
    };
    if (goofersKnowToGO.filter(anyGoofer =>
      (anyGoofer.x === goofer.x - 1 && anyGoofer.y === goofer.y + 1)).length > 0) {
      console.log("tut 8")
      goofer.deplacement = goofer.deplacement.filter(move => move !== "deplacementBasGauche")
      return goofer
    };
  }
  )
}
export default whereToGo;

// const gooferMove = (goofers, mapX, mapY) => {
//   goofers.map(goofer => {
//     const mapVoid = mapVoidFilter(goofers, mapX, mapY);
//     const nearPeople = nearPeopleFilter(goofers);
//     const finalArrayDeplacement = mapVoid.filter(deplacement => deplacement !== nearPeople);
//     const deplacement = finalArrayDeplacement[Math.floor(Math.random() * (finalArrayDeplacement.length))]
//     console.log(`${goofer.name} finalement je peux aller la `, finalArrayDeplacement)
//     console.log(`${goofer.name} je choisie cette direction:${deplacement}`)
//     goofer[deplacement]();

//     return goofer;
//   })
// }

