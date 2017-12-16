var names = ['abcd', 'Mangesh', 'Jogade'];


names.forEach(function (name) {
  console.log('forEach', name);
})


names.forEach((name) => {
  console.log('ArrowFunc :', name);
});


names.forEach((name) => console.log('ArrowFuncNew :', name))
