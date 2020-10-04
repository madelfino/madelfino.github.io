class CollisionDetection {
  constructor() {}

  static closestPointOnSeg(x1, y1, x2, y2, cx, cy) {
    let segA = createVector(x1, y1);
    let segB = createVector(x2, y2);
    let circPos = createVector(cx, cy);
    let segV = segB.copy().sub(segA); //segV.mag() must be > 0
    let ptV = circPos.copy().sub(segA);
    let segVunit = segV.copy().div(segV.mag());
    let proj = ptV.copy().dot(segVunit);
    if (proj <= 0) return segA.copy();
    if (proj >= segV.mag()) return segB.copy();
    let projV = segVunit.mult(proj);
    let closest = projV.add(segA);
    return closest
  }

  static segmentCircleCollision(x1, y1, x2, y2, cx, cy, cr) {
    let closest = CollisionDetection.closestPointOnSeg(x1, y1, x2, y2, cx, cy);
    let circPos = createVector(cx, cy);
    let distV = circPos.sub(closest);
    return (distV.mag() < cr);
  }

}
