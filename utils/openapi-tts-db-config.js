function connectionConfigFromUrl(connectionString) {
    const url = new URL(connectionString);
    const config = {
        host: url.hostname,
        port: url.port ? Number(url.port) : 3306,
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        database: url.pathname.replace(/^\//, ''),
    };
    const sslParam = url.searchParams.get('ssl');
    if (sslParam === 'false' || sslParam === '0') {
        config.ssl = false;
    }
    return config;
}

module.exports = { connectionConfigFromUrl };
