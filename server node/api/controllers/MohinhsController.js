'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tbl_mohinh'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getMohinh: (req, res) => {
        let sql = `SELECT * FROM tbl_mohinh WHERE ma_danhmuc =${req.params.DanhmucMa}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    getMohinhMa: (req, res) => {
        let sql = `SELECT * FROM tbl_mohinh WHERE ma_mohinh ="${req.params.mohinhMa}"`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    SearchTuKhoa: (req, res) => {
        let sql = `SELECT *  FROM tbl_mohinh  WHERE ten like "%${req.params.tukhoa}%"`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    SortPrice: (req,res) => {
        let sql = `SELECT *  FROM tbl_mohinh WHERE ma_danhmuc = ${req.params.danhmucMa} ORDER BY gia ${req.query.gia}`  
        console.log(sql);                               
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json (response)
        }
        )
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE tbl_mohinh SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO tbl_mohinh SET (${data})`
        console.log(sql);
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tbl_mohinh WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
