'use strict';
module.exports = function (app) {
    let productsCtrl = require('./controllers/MohinhsController');


    // todoList Routes
    app.route('/mohinhs')
        .get(productsCtrl.get)
        .post(productsCtrl.store);

    app.route('/mohinhs/:DanhmucMa')
        .get(productsCtrl.getMohinh)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);

    app.route('/mohinhsDetail/:mohinhMa')
        .get(productsCtrl.getMohinhMa);

    app.route('/mohinhsSearch/:tukhoa')
        .get(productsCtrl.SearchTuKhoa);

    app.route('/mohinhsSort/:danhmucMa')
        .get(productsCtrl.SortPrice);

};
