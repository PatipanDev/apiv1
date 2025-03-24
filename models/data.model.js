const categories = (sequelize, Sequelize) => {
    const categories = sequelize.define(
        'categories',
        {
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field_name: 'catagory_id'

            },
            category_name: { type: Sequelize.STRING(100), field_name: 'catagory_id', },
            description: { type: Sequelize.STRING(400), field_name: ' description' }
        },
        {
            tablename: 'categories',
            freezTableName: true,
            timestamps: false
        }
    );
    return categories;
};

const products = (sequelize, Sequelize) => {
    const products = sequelize.define(
        'products',
        {
            product_id: {
                primaryKey: true,
                autoIncrement: true,
                field_name: 'catagory_id'
            },
            product_name: {type: Sequelize.STRING(100), field_name:'product_name'},
            description: { type: Sequelize.STRING(400), field_name: ' description'},
            category_id: {type: Sequelize.INTEGR, field_name: 'category'},
            unit_price:{type: Sequelize.DOUBLE, field_name:'unit_price'},
            quantity: {type: Sequelize.INTEGR, field_name: 'quantity'}
        },
        {
            tablename: 'products',
            freezTableName: true,
            timestamps: false
        }

    )
    return products;
};