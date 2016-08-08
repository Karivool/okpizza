const Helpers = {
  getBday(bday) {
    let age;

    const date = new Date();
    const year = parseInt(bday.slice(0, 4));
    const month = parseInt(bday.slice(5, 7));
    const day = parseInt(bday.slice(8, 10));

    age = date.getUTCFullYear() - year;

    if (date.getMonth() + 1 < month) {
      age -= 1;
    } else if (date.getMonth() === month && date.getDate < day) {
      age -= 1;
    }

    return age;
  }
};

module.exports = Helpers;
