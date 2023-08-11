const express = require('express');
const userModel = require('../models/user');

const sentFeedback = async (req, res) => {

    const response = new userModel({

        username: req.body.username,
        service: req.body.service,
        feedback: req.body.feedback
    })

    try {
        await response.save()
        res.status(201).json({ message: 'feedback posted' })

    } catch (err) {
        res.status(400).json({ message: `error occur in catch:${err}` })
    }
}
const getfeedback = async (req, res) => {
    try {
        const get = await userModel.find()
        res.status(200).json(get)
    }
    catch (err) {
        res.status(400).json({ message: `error occurs in catch:${err} ` })
    }

}
module.exports = { sentFeedback, getfeedback }