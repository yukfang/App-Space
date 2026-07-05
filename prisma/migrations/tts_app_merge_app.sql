-- Align existing tts_app with legacy `app` table (OPENAPI_TTS_DB_URL2)

ALTER TABLE tts_app
    ADD COLUMN auth_url VARCHAR(256) DEFAULT '' AFTER description;

ALTER TABLE tts_app
    MODIFY COLUMN app_key VARCHAR(191) NOT NULL,
    MODIFY COLUMN app_secret VARCHAR(191) NOT NULL,
    MODIFY COLUMN redirect_domain VARCHAR(191) NOT NULL,
    MODIFY COLUMN success_path VARCHAR(191) NOT NULL,
    MODIFY COLUMN failure_path VARCHAR(191) NOT NULL,
    MODIFY COLUMN description VARCHAR(191) NOT NULL;

ALTER TABLE tts_app CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE tts_shop_app_token DROP FOREIGN KEY fk_tts_token_app;

ALTER TABLE tts_shop_app_token
    MODIFY COLUMN app_key VARCHAR(191) NOT NULL COLLATE utf8mb4_unicode_ci;

ALTER TABLE tts_app
    MODIFY COLUMN app_key VARCHAR(191) NOT NULL COLLATE utf8mb4_unicode_ci;

ALTER TABLE tts_shop_app_token
    ADD CONSTRAINT fk_tts_token_app FOREIGN KEY (app_key) REFERENCES tts_app (app_key);

INSERT INTO tts_app (
    app_key, app_secret, redirect_domain, success_path, failure_path, description, auth_url
)
SELECT
    app_key, app_secret, redirect_domain, success_path, failure_path, description, auth_url
FROM app
ON DUPLICATE KEY UPDATE
    app_secret = VALUES(app_secret),
    redirect_domain = VALUES(redirect_domain),
    success_path = VALUES(success_path),
    failure_path = VALUES(failure_path),
    description = VALUES(description),
    auth_url = VALUES(auth_url);
