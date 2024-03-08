//khusus untuk berkomunikasi dengan database di file ini aja,
//boleh pake ORM atau raw query,

const prisma = require('../Database')

const findsProducts = async () => {
    const products = await prisma.product.findMany()
    return products
}

const findsProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id,
        }
    })

    return product
}

const insertProduct = async (productData) => {
    const product = await prisma.product.create({
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image,
        }
    })

    return product
}

const editProduct = async (id, productData) => {
    const product = await prisma.product.update({
        where: {
            id
        },
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image
        }
    })

    return product
}

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id
        }
    })
}

module.exports = {
    findsProducts,
    findsProductById,
    insertProduct,
    editProduct,
    deleteProduct
}