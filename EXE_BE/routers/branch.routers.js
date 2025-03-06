const express = require('express')
const { createBranch, readAllBranch, readById, deleteBranch, updateBranch } = require('../controllers/branch.controllers')
const branchRouter = express.Router()

branchRouter.post("/", createBranch)
branchRouter.get("/", readAllBranch)
branchRouter.get("/:id", readById)
branchRouter.delete("/:id", deleteBranch)
branchRouter.put("/:id", updateBranch)



module.exports = { branchRouter }