class Goofer {
  constructor(name, x, y) {
    this.name = name;
    this.y = y;
    this.x = x;
  }
  deplacementBas() {
    return this.y = this.y + 1
  }
  deplacementHaut() {
    return this.y = this.y - 1
  }
  deplacementDroite() {
    return this.x = this.x + 1
  }
  deplacementGauche() {
    return this.x = this.x - 1
  }
  deplacementStay() {
    return
  }
  deplacementHautGauche() {
    this.deplacementHaut();
    this.deplacementGauche();
  }
  deplacementBasGauche() {
    this.deplacementBas();
    this.deplacementGauche();
  }
  deplacementBasDroite() {
    this.deplacementBas();
    this.deplacementDroite();
  }
  deplacementHautDroite() {
    this.deplacementDroite();
    this.deplacementHaut();
  }
}
export default Goofer;
