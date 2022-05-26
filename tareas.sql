-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2022 a las 23:29:19
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prioridad`
--

CREATE TABLE `prioridad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prioridad`
--

INSERT INTO `prioridad` (`id`, `nombre`) VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `nombre`) VALUES
(1, 'Completada'),
(2, 'Incompleta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `informacion` varchar(255) NOT NULL,
  `fechaCreacion` date NOT NULL DEFAULT current_timestamp(),
  `fechaModificacion` datetime NOT NULL,
  `idPrioridad` int(11) NOT NULL,
  `idStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `nombre`, `informacion`, `fechaCreacion`, `fechaModificacion`, `idPrioridad`, `idStatus`) VALUES
(1, 'Subir Archivos', 'subir las CV a google drive para la reunión de mañana, antes de 3:00 PM.', '2022-05-24', '2022-05-26 02:13:17', 1, 1),
(2, 'Reunión Gerente.', 'Reunión para el grupo de trabajo del proyecto PI en la sala 3, cantidad 10 personas. Llevar las copias del proyecto y tener las diapositivas completas.', '2022-05-24', '2022-05-26 01:52:47', 1, 1),
(5, 'Informe de ventas', 'excel con informes de ventas de este mes.', '2022-05-24', '2022-05-26 01:52:31', 2, 1),
(7, 'Prueba Tecnica', 'Prueba de Back con api, utilizar el Front (opcional), entregar antes del 26-05-2022', '2022-05-25', '2022-05-26 01:52:39', 2, 1),
(8, 'recibos de la luz', 'pagar antes 3:00 PM y reportar al contador', '2022-05-25', '2022-05-26 01:52:21', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `mail`, `password`) VALUES
(1, 'Luis ', 'luis@mail.com', '$2a$11$hhgv9dD3j/jzswlTdsTy/eYeXkU3O3D6IdX6a2JJEgKIxrgcahIaS'),
(2, 'Javier Perez', 'javier@mail.com', '$2b$10$rCvIA/cHJcaU/SLRwdKQXeXveBrE3lxFWL.QOYYxSy5fNUxCxMi6e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5114967f-3dd7-4866-bc7d-83243ac926e1` (`idPrioridad`),
  ADD KEY `FK_a9bbc962-13ed-484f-8deb-616da25b1fa3` (`idStatus`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `FK_5114967f-3dd7-4866-bc7d-83243ac926e1` FOREIGN KEY (`idPrioridad`) REFERENCES `prioridad` (`id`),
  ADD CONSTRAINT `FK_a9bbc962-13ed-484f-8deb-616da25b1fa3` FOREIGN KEY (`idStatus`) REFERENCES `status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
