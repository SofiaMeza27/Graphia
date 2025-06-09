const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password, rut, email, region, comuna } = req.body;

    // Validar campos vacíos
    if (!username || !password || !rut || !email || !region || !comuna) {
        return res.status(400).json({ msg: 'Todos los campos son obligatorios.' });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: 'Correo electrónico inválido.' });
    }

    // Validar formato de contraseña (mínimo 6 caracteres, al menos una letra y un número)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ msg: 'La contraseña debe tener al menos 6 caracteres, incluyendo letras y números.' });
    }

    // Validar formato de RUT chileno
    const rutRegex = /^\d{7,8}-[0-9kK]$/;
    if (!rutRegex.test(rut)) {
        return res.status(400).json({ msg: 'RUT inválido. Debe tener el formato 12345678-9.' });
    }

    try {
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: 'El nombre de usuario ya existe.' });

        user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'El correo electrónico ya está registrado.' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
            rut,
            email,
            region,
            comuna
        });
        await newUser.save();

        res.status(201).json({ msg: 'Usuario registrado exitosamente.' });
    } catch (err) {
        res.status(500).json({ msg: 'Error del servidor.' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Debes ingresar usuario/correo y contraseña.' });
    }

    const user = await User.findOne({
        $or: [{ username }, { email: username }]
    });

    if (!user) {
        return res.status(400).json({ msg: 'Usuario o correo no encontrado.' });
    }

    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta.' });

        const payload = { user: { id: user.id, username: user.username } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, msg: '¡Inicio de sesión exitoso!' });
    } catch (err) {
        res.status(500).json({ msg: 'Error del servidor.' });
    }
};