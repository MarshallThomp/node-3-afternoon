module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        db.create_product(req.body).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    getAll: (req, res) => {
        let db = req.app.get('db')
        db.read_products().then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    getOne: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.read_product(id).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let { desc } = req.query

        db.update_product({ id, desc }).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_product(id).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}