-- Ejecutar una sola vez en una base existente antes de desplegar el backend actualizado.
-- NULL permite conservar los resultados históricos sin identificador de intento.
ALTER TABLE `user_exercises`
  ADD COLUMN `attempt_id` char(36) DEFAULT NULL,
  ADD UNIQUE KEY `attempt_id` (`attempt_id`);
