module.exports = {
    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
        .then( house => res.status(200).send(house))
        .catch ( error => {
            res.status(500).send('500 Error')
            console.log(error)
        })
    },
    postHouse: (req, res, next) => {

        const dbInstance = req.app.get('db');
        let { name, address, city, state, zipcode, img, monthlyMortgage, desiredRent } = req.body

        dbInstance.create_house( name, address, city, state, zipcode, img, monthlyMortgage, desiredRent)
        .then( () => {
            res.sendStatus(200)
        })
        .catch ( error => {
            res.status(500).send('500 Error')
            console.log(error)
        })
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let { id } = req.params

        dbInstance.delete_house(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch ( error => {
            res.status(500).send('500 Error')
            console.log(error)
        })
    }
}