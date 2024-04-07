const Calendar = require('../models/Calendar');

exports.getListDates = async (req, res) => {
    const listDates = await Calendar.find();

    res.json(listDates);
}

exports.getDate = async (req, res) => {
    const { id } = req.params;
    const date = await Calendar.findById(id);

    if (!date) {
        res.status(404).json({
            msg: `ERROR 404. No existe un evento con el id ${id}`
        });
    } else {
        res.json(date);
    }
}

exports.deleteDate = async (req, res) => {
    const { id } = req.params;

    try {
        const date = await Calendar.findById(id);

        if (!date) {
            res.status(404).json({
                msg: `ERROR 404. No existe un evento con el id ${id}`
            });
        } else {
            await Calendar.deleteOne({ _id: id });
            res.json({
                msg: `El evento con id ${id} ha sido eliminado con éxito`
            });
        }
    }catch (error) {
        console.error('Error in deleteDate:', error);
        res.status(500).json({
            msg: 'Error al eliminar el Evento'
        });
    }
};

exports.postDate = async (req, res) => {
    const { body } = req;

    try {
        const newDate = new Calendar(body);
        await newDate.save();

        res.json({
            msg: 'Evento añadido con éxito!',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al añadir el Evento'
        });
    }
};