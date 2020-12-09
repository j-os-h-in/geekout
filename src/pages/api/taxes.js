const taxes = {
  random: Math.random()
}

function api(req, res) {
  res.statusCode = 200;
  res.json(taxes);
}

export default api;