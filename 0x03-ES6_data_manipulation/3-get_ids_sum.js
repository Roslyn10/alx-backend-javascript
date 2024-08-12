export default function getStudentIdsSum(idSum) {
  if (Array.isArray(idSum)) {
    return idSum.reduce((accsum, currsum) => accsum + currsum.id, 0);
  }
  return 0;
}
