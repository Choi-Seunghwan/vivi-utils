function sleep(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export default sleep;
