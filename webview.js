module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const Title = document.title;
    var arr = Title.match(/\(([0-9]*)\).*/g) || [""];
    /*
    console.log(arr[0]);
    if (FranzData) {
      direct = FranzData.direct;
      indirect = FranzData.indirect;
    }
*/
    Franz.setBadge(parseInt(arr[0]), 0);
  }

  Franz.loop(getMessages);
}
