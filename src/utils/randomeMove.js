const mapVoidFilter = (goofers, mapX, mapY) => {
  let authorizeMoves = [];
  goofers.map(goofer => {
    console.log("je suis la", goofer)
    if (goofer.y === 0 && goofer.x === 0) {
      return authorizeMoves = [
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementStay"
      ]
    } if (goofer.x === 0 && goofer.y === mapY - 1) {
      return authorizeMoves = [
        "deplacementHaut",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]

    } if (goofer.y === 0 && goofer.x === mapX - 1) {
      return authorizeMoves = [
        "deplacementBas",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementStay"
      ]
    } if (goofer.x === mapX - 1 && goofer.y === mapY - 1) {
      return authorizeMoves = [
        "deplacementHaut",
        "deplacementGauche",
        "deplacementHautGauche",
        "deplacementStay"
      ]
    } if (goofer.x === 0) {
      return authorizeMoves = [
        "deplacementHaut",
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]
    } if (goofer.y === mapY - 1) {
      return authorizeMoves = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]
    } if (goofer.x === mapX - 1) {
      return authorizeMoves = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementBas",
        "deplacementStay"
      ]
    } else {
      return authorizeMoves = [
        "deplacementHautGauche",
        "deplacementHaut",
        "deplacementGauche",
        "deplacementBasGauche",
        "deplacementBas",
        "deplacementBasDroite",
        "deplacementDroite",
        "deplacementHautDroite",
        "deplacementStay"
      ]
    }
  }
  );
  console.log(`je peux aller la`, authorizeMoves)
  return authorizeMoves
}

const nearPeopleFilter = (goofers) => {
  let unauthorizeMoves = [];
  goofers.map(goofer => {
    if (goofers.filter(other =>
      (other.x + 1 === goofer.x && other.y + 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementBasDroite")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x && other.y + 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementBas")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x && other.y - 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementHaut")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x + 1 && other.y === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementDroite")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x - 1 && other.y === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementGauche")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x - 1 && other.y - 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementHautGauche")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x + 1 && other.y - 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementHautDroite")
    };
    if (goofers.filter(other =>
      (other.x === goofer.x - 1 && other.y + 1 === goofer.y)).length > 0) {
      unauthorizeMoves.push("deplacementBasGauche")
    };
    console.log(`${goofer.name} mais pas la `, unauthorizeMoves)
    return unauthorizeMoves
  })
}
const gooferMove = (goofers, mapX, mapY) => {
  goofers.map(goofer => {
    const mapVoid = mapVoidFilter(goofers, mapX, mapY);
    const nearPeople = nearPeopleFilter(goofers);
    const finalArrayDeplacement = mapVoid.filter(deplacement => deplacement !== nearPeople);
    const deplacement = finalArrayDeplacement[Math.floor(Math.random() * (finalArrayDeplacement.length))]
    console.log(`${goofer.name} finalement je peux aller la `, finalArrayDeplacement)
    console.log(`${goofer.name} je choisie cette direction:${deplacement}`)
    goofer[deplacement]();

    return goofer;
  })
}
export default gooferMove;
// const authorizeMove = (goofers, mapX, mapY) => {
//   const mapVoid = mapVoidFilter(goofers, mapX, mapY)
//   const nearPeople = nearPeopleFilter(goofers)
//   return mapVoid.filter(deplacement => deplacement !== nearPeople)
// }

// const gooferGo = (goofers, mapX, mapY) => {
//   const moves = authorizeMove(goofers, mapX, mapY);
//   console.log( "movessss",moves)
//   goofers.map(goofer => {
//     goofer[moves[Math.floor(Math.random() * (moves.length))]]()
//     return goofer
//   }
//   )
// }


// export default gooferGo;
