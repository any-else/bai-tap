const Products = require('../models/products.model');
const dataProduct = require('../../libs/database/data-backup.json');
const insertData = (req, res) => {
  console.log(dataProduct);

  const promises = dataProduct.map((data) => {
    return Products.create({
      title: data.title,
      imageUrl: data.imageUrl,
      description: data.description,
      price: Number(data.price),
    });
  });

  Promise.all(promises)
    .then(() => {
      console.log('Data inserted successfully');
      res.status(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500);
    });
};

const getAllProducts = async (req, res) => {
  try {
    const dataProducts = await Products.findAll();
    res.status(200).json({ data: dataProducts });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Products.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: 'Delete successfully' });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

module.exports = {
  getAllProducts,
  insertData,
  deleteProduct,
};
