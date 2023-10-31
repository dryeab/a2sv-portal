let turn = true;
const f = (x) => {
  console.log(x);
};

f((turn = !turn));
