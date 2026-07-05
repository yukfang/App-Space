-- TikTok Shop credentials (new tables; does not modify legacy app/shop/ApiCredential)
-- Run against the database in OPENAPI_TTS_DB_URL2
-- tts_app columns aligned with legacy `app` table (including auth_url)

CREATE TABLE IF NOT EXISTS tts_app (
    id INT NOT NULL AUTO_INCREMENT,
    app_key VARCHAR(191) NOT NULL,
    app_secret VARCHAR(191) NOT NULL,
    redirect_domain VARCHAR(191) NOT NULL,
    success_path VARCHAR(191) NOT NULL,
    failure_path VARCHAR(191) NOT NULL,
    description VARCHAR(191) NOT NULL,
    auth_url VARCHAR(256) DEFAULT '',
    PRIMARY KEY (id),
    UNIQUE KEY uk_tts_app_key (app_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS tts_shop (
    id BIGINT NOT NULL PRIMARY KEY,
    slug VARCHAR(64) NULL,
    encrypt_key VARCHAR(255) NULL,
    code VARCHAR(100) NOT NULL DEFAULT '',
    name VARCHAR(100) NOT NULL DEFAULT '',
    region VARCHAR(50) NOT NULL DEFAULT '',
    seller_type VARCHAR(50) NOT NULL DEFAULT '',
    cipher VARCHAR(255) NOT NULL DEFAULT '',
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    UNIQUE KEY uk_tts_shop_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tts_shop_app_token (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shop_id BIGINT NOT NULL,
    app_key VARCHAR(191) NOT NULL COLLATE utf8mb4_unicode_ci,
    access_token VARCHAR(1024) NOT NULL,
    access_token_expire_in BIGINT NOT NULL,
    refresh_token VARCHAR(512) NOT NULL,
    refresh_token_expire_in BIGINT NOT NULL,
    open_id VARCHAR(128) NOT NULL DEFAULT '',
    seller_name VARCHAR(255) NOT NULL DEFAULT '',
    seller_base_region VARCHAR(50) NOT NULL DEFAULT '',
    user_type INT NOT NULL DEFAULT 0,
    granted_scopes JSON NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'active',
    last_refreshed_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_tts_shop_app (shop_id, app_key),
    KEY idx_tts_token_app_key (app_key),
    CONSTRAINT fk_tts_token_shop FOREIGN KEY (shop_id) REFERENCES tts_shop (id),
    CONSTRAINT fk_tts_token_app FOREIGN KEY (app_key) REFERENCES tts_app (app_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
