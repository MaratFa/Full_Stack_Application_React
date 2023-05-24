const {prisma} = require('../prisma/prisma-client');

/**
 * @route GET/api/employees
 * @desc  Получение всех видов сотрудников
 * @acess Private
 */
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
    } catch {
        res.status(500).json({message: 'Не удалось получить сотрудников'});
    }
}

/**
 * @route POST /api/employees/add
 * @desc  Добавление сотрудника
 * @acess Private
 */
const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({message: 'Все поля обязательные'})
        }
        
        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        });

        return res.status(201).json(employee);
    
    } catch (err) {

        console.log(err);
        res.status(500).json({message: 'Что-то пошло не так'});
    }        
}

/**
 * @route POST /api/employees/remove/:id
 * @desc  Удаление сотрудника
 * @acess Private
 */
const remove = async (req, res) => {
    const {id} = req.body;

    try {
        await prisma.employee.delete({
            where: {
                id
            }
        });

        res.status(204).json('OK')
    } catch {
        res.status(500).json({message: 'Не удалось удалить сострудника'});
    }
}

/**
 * @route POST /api/employees/edit/:id
 * @desc  Редактирование сотрудника
 * @acess Private
 */
const edit = async (req, res) => {
    const data = req.body;
    const id = data.id;

    try {
        await prisma.employee.update({
            where: {
                id
            },
            data
        });

        res.status(204).json('ОК')
    } catch {
        res.status(500).json({message: 'Не удалось редактировать сострудника'});
    }
}

module.exports = {
    all,
    add,
    remove,
    edit
}