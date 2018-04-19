function wait(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, 3000);
  });
}