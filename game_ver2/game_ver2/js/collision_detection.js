/**
 * @param {HTMLElement} $div1
 * @param {HTMLElement} $div2
 * @returns {boolean} if(detect div2 or div1) => true
 *
 */

function collision_detection($div1, $div2) {
  const x1 = $div1.offset().left;
  const y1 = $div1.offset().top;
  const h1 = $div1.outerHeight(true);
  const w1 = $div1.outerWidth(true);
  const b1 = y1 + h1;
  const r1 = x1 + w1;
  const x2 = $div2.offset().left;
  const y2 = $div2.offset().top;
  const h2 = $div2.outerHeight(true);
  const w2 = $div2.outerWidth(true);
  const b2 = y2 + h2;
  const r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}
