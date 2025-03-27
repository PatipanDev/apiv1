const categories = (sequelize, Sequelize) => {
    const categories = sequelize.define(
        'categories',
        {
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'category_id'  // แก้ไขเป็น 'category_id'
            },
            category_name: { 
                type: Sequelize.STRING(100), 
                field: 'category_name'  // แก้ไขเป็น 'category_name'
            },
            description: { 
                type: Sequelize.STRING(400), 
                field: 'description'  // แก้ไขเป็น 'description'
            }
        },
        {
            tablename: 'categories',
            freezeTableName: true,  // แก้ไขเป็น freezeTableName
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
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'product_id'  // แก้ไขเป็น 'product_id'
            },
            product_name: { 
                type: Sequelize.STRING(100), 
                field: 'product_name'  // แก้ไขเป็น 'product_name'
            },
            description: { 
                type: Sequelize.STRING(400), 
                field: 'description'  // แก้ไขเป็น 'description'
            },
            category_id: { 
                type: Sequelize.INTEGER,  // แก้ไขเป็น Sequelize.INTEGER
                field: 'category_id'  // แก้ไขเป็น 'category_id'
            },
            unit_price: {
                type: Sequelize.DOUBLE, 
                field: 'unit_price'  // แก้ไขเป็น 'unit_price'
            },
            quantity: { 
                type: Sequelize.INTEGER,  // แก้ไขเป็น Sequelize.INTEGER
                field: 'quantity'  // แก้ไขเป็น 'quantity'
            }
        },
        {
            tablename: 'products',
            freezeTableName: true,  // แก้ไขเป็น freezeTableName
            timestamps: false
        }
    );
    return products;
};

const users = (sequelize, Sequelize) => {
    const users = sequelize.define(
        'users', {
            username: {
                type: Sequelize.STRING(50),
                primaryKey: true,
                field: 'username'  // ✅ ใช้ field แทน field_name
            },
            password: {
                type: Sequelize.STRING(100), 
                field: 'password'
            },
            email: {
                type: Sequelize.STRING(50), 
                field: 'email'
            },
            nameTH: {
                type: Sequelize.STRING(100), 
                field: 'nameTH'
            },
            nameEN: {
                type: Sequelize.STRING(100), 
                field: 'nameEN'
            },
            role: {
                type: Sequelize.STRING(50), 
                field: 'role'
            }
        }, 
        {
            tablename: 'users',  // ✅ ใช้ tableName (ตัว "T" เล็ก)
            freezeTableName: true,  
            timestamps: false
        }
    );
    return users;
}


module.exports = {
    products,
    categories,
    users
}
