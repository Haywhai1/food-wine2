const menuModel = require("../model/menu.model");

const getAllMenu = async (req, res) => {
    try {
        const menu = await menuModel.find();
        res.status(200).json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error while fetching all popular dishes." });
    }
}

const createMenu = async (req, res) => {
    const {
        name,
        description,
        image,
        price, 
        rating
    } = req.body;

    try {
        const newMenu = new menuModel({
            name,
            description,
            image,
            price,
            rating
        });
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error while creating menu." });
    }
}

const menuController = {
    getAllMenu,
    createMenu,

  };
  
  module.exports = menuController;
  