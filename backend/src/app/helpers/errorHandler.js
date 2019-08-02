export default (err, req, res) => res
  .status(500)
  .send({ message: 'Error Internal' });
