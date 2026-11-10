-- Standalone: create tts_shop only (TikTok Shop metadata)
-- id = TikTok shop / seller id (BIGINT, not auto-increment)
-- OAuth sync upserts code, name, region, seller_type, cipher; slug / encrypt_key are usually set manually

CREATE TABLE IF NOT EXISTS tts_shop (
    id BIGINT NOT NULL PRIMARY KEY COMMENT 'TikTok shop id (seller id)',
    slug VARCHAR(64) NULL COMMENT 'Internal alias, optional; unique if set',
    encrypt_key VARCHAR(255) NULL COMMENT 'AES key for /tokens/tts response encryption',
    code VARCHAR(100) NOT NULL DEFAULT '' COMMENT 'TikTok shop code',
    name VARCHAR(100) NOT NULL DEFAULT '' COMMENT 'Shop display name',
    region VARCHAR(50) NOT NULL DEFAULT '' COMMENT 'Shop region',
    seller_type VARCHAR(50) NOT NULL DEFAULT '' COMMENT 'Seller type from TikTok',
    cipher VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'shop_cipher for Open API',
    is_active TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1=active, 0=disabled',
    UNIQUE KEY uk_tts_shop_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
