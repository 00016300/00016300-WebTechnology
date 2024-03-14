const { body, param } = require('express-validator');
const product_service = require('../../services/product')

const addProductValidation = () => {
    return [
        body('productName')
          .notEmpty().withMessage('Product name must not be empty!')
          .isLength({ min: 3, max: 255 }).withMessage('Product name must be between 3 and 255 characters long!'),
        body('publishedDateTime')
          .notEmpty().withMessage('Purchase date time must not be empty!')
          .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
            .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
        body('productsLeft')
          .notEmpty().withMessage('Available products must not be empty!'),
        body('contactPhone')
          .notEmpty().withMessage('Contact phone must not be empty!')
          .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
        body('price')
          .notEmpty().withMessage('Price must not be empty!'),      
      ];  
};

const deleteProductValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await product_service.getById(id);
      if (!exists) {
        throw new Error('Product not found!');
      }
    })
  ];
};

const updateProductValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await product_service.getById(id);
      if (!exists) {
        throw new Error('Product not found!');
      }
    }),
    body('productName')
      .notEmpty().withMessage('Product name must not be empty!')
      .isLength({ min: 3, max: 255 }).withMessage('Product name must be between 3 and 255 characters long!'),
    body('publishedDateTime')
      .notEmpty().withMessage('Purchase date time must not be empty!')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('productsLeft')
      .notEmpty().withMessage('Available products must not be empty!'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('price')
      .notEmpty().withMessage('Price must not be empty'),      
  ];
};

module.exports = {
    addProductValidation,
    deleteProductValidation,
    updateProductValidation
};