import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


// already using /api/products for routes

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;
