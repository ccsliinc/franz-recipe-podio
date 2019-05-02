module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const Title = document.title;
    let arr = Title.match(/\d+/g)[0] || [""];

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
