INSERT INTO "public"."workouts" ("day", "time", "duration", "name", "instructor")
VALUES (1, '18:00', 60, 'L1', 'Erika'),
	(2, '10:00', 60, 'Baas / L1', 'Erika'),
	(2, '16:30', 60, 'L1 / L2', 'Erika'),
	(2, '17:30', 60, 'L1', 'Erika'),
	(3, '17:00', 60, 'Start-tund', 'Erika'),
	(4, '10:00', 60, 'Baas / L1', 'Erika'),
	(4, '16:30', 60, 'L2', 'Erika'),
	(4, '17:30', 60, 'L1', 'Erika'),
	(7, '11:00', 60, 'Start-tund', 'Erika'),
	(2, '08:15', 60, 'Võimleme koos', 'Erika'),
	(4, '08:15', 60, 'Võimleme koos', 'Erika'),
	(3, '12:00', 60, 'Pilates kõigile', 'Erika'),
	(1, '12:00', 60, 'Pilates kõigile', 'Erika'),
	(3, '18:00', 60, 'Yin jooga', 'Erika'),
	(5, '12:00', 60, 'Yin jooga', 'Erika'),
	(7, '10:00', 60, 'L1', 'Erika');
INSERT INTO "public"."pricing" ("price", "name", "quantity", "info")
VALUES (15, 'Rühmatreening', '(1 kord)', NULL),
	(40, 'Rühmatreeningud', '(4-korra kaart)', '{"Kehtib 1 kuu"}'),
	(65, 'Rühmatreeningud', '(8-korra kaart)', '{"Kehtib 1 kuu"}'),
	(30, 'Personaaltreening', '(1 kord)', NULL),
	(40, 'Duo-treening', '(1 kord)', NULL);