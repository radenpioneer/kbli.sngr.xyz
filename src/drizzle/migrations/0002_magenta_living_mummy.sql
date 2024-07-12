ALTER TABLE `entry` RENAME TO `entries`;--> statement-breakpoint
DROP INDEX IF EXISTS `entry_code_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `entries_code_unique` ON `entries` (`code`);