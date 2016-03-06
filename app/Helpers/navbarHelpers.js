/*
This helper method generates the current date to be rendered in the navigation bar.
*/

module.exports = {
  getDate: function () {
    var date = new Date;

    function getMonth () {
      var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[date.getMonth()];
    }

    function getDay () {
      var num = date.getDate();
      if (num === 1 || num[1] === 1) {
        return num+"st";
      } else if (num === 2 || num[1] === 2) {
        return num+"nd";
      } else if (num === 3 || num[1] === 3) {
        return num+"rd";
      } else if (num >= 4 && num <= 9 || num[1] >= 4 && num <= 9 || num[1] === 0) {
        return num+"th";
      }
    }

    return getMonth() + " " + getDay() + ", " + date.getFullYear();
  }
};