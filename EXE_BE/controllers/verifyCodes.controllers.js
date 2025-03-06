
const { where } = require('sequelize')
const { VerifyCode, User, Role, UserRoleHistory } = require('../models')
const jwt = require('jsonwebtoken')
const { sendSms } = require('../services/SMSService')

const generateCode = async (req, res) => {
    try {
        const { phoneNumber, mode } = req.body
        const user = await User.findOne({
            where: {
                phoneNumber
            }, include:
            {
                model: VerifyCode,

            }
        })
        if (user.VerifyCode) {
            removeCode(user.VerifyCode.id)
        }
        const expiredAt = new Date()
        expiredAt.setMinutes(expiredAt.getMinutes() + 5);
        const code = getRandomCode();
        const verifyCode = await VerifyCode.create({
            code,
            user: user.id,
            expiredAt
        })

        if (mode === 'dev') {
            return res.status(200).send(code)
        } else {
            sendSms(code, phoneNumber)
        }

        res.status(200).send("Success!")
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

const verifyPhoneCode = async (req, res) => {
    const key = process.env.SECURITY_KEY
    try {
        const { code, phoneNumber } = req.body
        const user = await User.findOne({
            where: {
                phoneNumber
            },
            include: [
                {
                    model: VerifyCode,
                },
                {
                    model: UserRoleHistory,
                    include: {
                        model: Role
                    }
                }
            ]
        })

        const role = user.UserRoleHistories[0].Role.name


        if (!user) {
            return res.status(404).send("User not found")
        }

        const codeVerify = user.VerifyCode.code

        const isExpired = (new Date) > user.VerifyCode.expiredAt

        if (isExpired) {
            removeCode(user.VerifyCode.id)
            return res.status(400).send("Verification code has expired");
        }


        if (code == codeVerify) {
            user.phoneVerify = true;
            user.save()
            removeCode(user.VerifyCode.id)
            const token = jwt.sign({ id: user.id, phoneNumber: user.phoneNumber, role }, key, { expiresIn: 60 * 60 })
            return res.status(200).send(token)
        } else {
            return res.status(400).send("Wrong Code")
        }
    } catch (error) {
        res.status(500).send(error.message)

    }
}

const removeCode = async (id) => {
    await VerifyCode.destroy({
        where: {
            id
        }
    })
}
const getRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = {
    generateCode, verifyPhoneCode
}